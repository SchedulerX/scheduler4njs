import { InjectionToken } from "@nestjs/common";
import { Scheduler4jsModuleOptions } from "./interface";
import { SCHEDULER_CONTEXT_TOKEN, SCHEDULER_DEFAULT_TYPE } from "./constant";

export const getModuleToken = (
  options?: Scheduler4jsModuleOptions
): InjectionToken => {
  return `${SCHEDULER_CONTEXT_TOKEN}_${
    options?.config?.type || SCHEDULER_DEFAULT_TYPE
  }`;
};
