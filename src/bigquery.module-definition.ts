import { BigQueryOptions } from '@google-cloud/bigquery';
import { ConfigurableModuleBuilder } from '@nestjs/common';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<BigQueryOptions>()
    .setExtras<{ isGlobal?: boolean }>(
      { isGlobal: true },
      (definition, extras) => {
        console.log('extras', extras);
        return { ...definition, global: extras.isGlobal };
      },
    )
    .setClassMethodName('forRoot')
    .build();
