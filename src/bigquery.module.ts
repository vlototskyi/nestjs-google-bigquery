import { Module } from '@nestjs/common';
import { BigQueryClient } from './bigquery.client';
import { ConfigurableModuleClass } from './bigquery.module-definition';

@Module({
  providers: [BigQueryClient],
  exports: [BigQueryClient],
})
export class BigQueryModule extends ConfigurableModuleClass {}
