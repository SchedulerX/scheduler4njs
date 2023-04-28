import { ModuleMetadata } from "@nestjs/common";
import { SchedulerConfig, Options } from "scheduler4js";

export interface Scheduler4jsModuleOptions
  extends Pick<ModuleMetadata, "imports"> {
  dbConfig: Options;
  config: SchedulerConfig;
}
