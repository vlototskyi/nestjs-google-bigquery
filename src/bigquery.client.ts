import { BigQuery, BigQueryOptions } from '@google-cloud/bigquery';
import { Inject } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN } from './bigquery.module-definition';

export class BigQueryClient extends BigQuery {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) options: BigQueryOptions) {
    super(options);
  }
}
