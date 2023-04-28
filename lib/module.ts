import { DynamicModule, Module } from "@nestjs/common";
import { Scheduler4jsCoreModule } from "./core.module";
import { Scheduler4jsModuleOptions } from "./interface";

@Module({})
export class Scheduler4jsModule {
  public static registerAsync(
    options: Scheduler4jsModuleOptions
  ): DynamicModule {
    return {
      module: Scheduler4jsModule,
      imports: [Scheduler4jsCoreModule.registerAsync(options)],
      exports: [Scheduler4jsModule],
    };
  }
}
