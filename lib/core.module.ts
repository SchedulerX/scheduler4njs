import { DynamicModule, Global, Module, Provider } from "@nestjs/common";
import { Scheduler4jsModuleOptions } from "./interface";
import { Scheduler } from "scheduler4js";
import { getModuleToken } from "./util";

@Global()
@Module({})
export class Scheduler4jsCoreModule {
  public static forRootAsync(
    options: Scheduler4jsModuleOptions
  ): DynamicModule {
    const provider: Provider = {
      provide: getModuleToken(options),
      useFactory: async (
        options: Scheduler4jsModuleOptions
      ): Promise<Scheduler> => {
        return await Scheduler.init(options);
      },
      inject: [getModuleToken(options)],
    };

    return {
      module: Scheduler4jsCoreModule,
      imports: options.imports,
      providers: [provider],
      exports: [provider],
    };
  }
}
