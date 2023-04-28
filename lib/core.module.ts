import { DynamicModule, Global, Module, Provider } from "@nestjs/common";
import { Scheduler4jsModuleOptions } from "./interface";
import { Scheduler } from "scheduler4js";
import { getModuleToken } from "./util";

export class ConfigModuleOptionsFactory {}
@Global()
@Module({})
export class Scheduler4jsCoreModule {
  public static registerAsync(
    options: Scheduler4jsModuleOptions
  ): DynamicModule {
    const provider: Provider = {
      provide: getModuleToken(options),
      useFactory: async (): Promise<Scheduler> => {
        return await Scheduler.init(options);
      },
    };

    return {
      module: Scheduler4jsCoreModule,
      imports: options.imports,
      providers: [provider],
      exports: [provider],
    };
  }
}
