import { BigQueryOptions } from '@google-cloud/bigquery';
import { ConfigurableModuleBuilder } from '@nestjs/common';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<BigQueryOptions>()
    .setClassMethodName('forRoot')
    .build();
