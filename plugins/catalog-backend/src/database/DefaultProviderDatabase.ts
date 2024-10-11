/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { LoggerService } from '@backstage/backend-plugin-api';
import { Knex } from 'knex';
import { rethrowError } from './conversion';
import { refreshByRefreshKeys } from './operations/provider/refreshByRefreshKeys';
import {
  ProviderDatabase,
  RefreshByKeyOptions,
  ReplaceUnprocessedEntitiesOptions,
  Transaction,
} from './types';
import { persistProviderEmittedEntities } from './operations/provider/persistProviderEmittedEntities';

// TODO(freben): Remove this class
export class DefaultProviderDatabase implements ProviderDatabase {
  constructor(
    private readonly options: {
      database: Knex;
      logger: LoggerService;
    },
  ) {}

  async transaction<T>(fn: (tx: Transaction) => Promise<T>): Promise<T> {
    try {
      let result: T | undefined = undefined;
      await this.options.database.transaction(
        async tx => {
          // We can't return here, as knex swallows the return type in case the
          // transaction is rolled back:
          // https://github.com/knex/knex/blob/e37aeaa31c8ef9c1b07d2e4d3ec6607e557d800d/lib/transaction.js#L136
          result = await fn(tx);
        },
        {
          // If we explicitly trigger a rollback, don't fail.
          doNotRejectOnRollback: true,
        },
      );
      return result!;
    } catch (e) {
      this.options.logger.debug(`Error during transaction, ${e}`);
      throw rethrowError(e);
    }
  }

  async replaceUnprocessedEntities(
    txOpaque: Transaction,
    options: ReplaceUnprocessedEntitiesOptions,
  ): Promise<void> {
    const tx = txOpaque as Knex.Transaction;
    await persistProviderEmittedEntities(tx, this.options.logger, options);
  }

  async refreshByRefreshKeys(
    txOpaque: Transaction,
    options: RefreshByKeyOptions,
  ) {
    const tx = txOpaque as Knex.Transaction;
    await refreshByRefreshKeys({ tx, keys: options.keys });
  }
}
