import { Inject } from "@nestjs/common";
import { Scheduler4jsModuleOptions } from "./interface";
import { getModuleToken } from "./util";

export const InjectScheduler4js = (option?: Scheduler4jsModuleOptions) => {
  return Inject(getModuleToken(option));
};
