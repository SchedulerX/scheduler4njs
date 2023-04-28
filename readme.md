# scheduler4njs

It's a scheduler4js library module for Nest.JS framework

### Installation

#### with npm

```sh
npm install scheduler4njs
```

#### with yarn

```sh
yarn add scheduler4njs
```

### How to use?

```ts
import { Module } from "@nestjs/common";
import { RedisModule } from "@nestjs-modules/ioredis";
import { AppService } from "./app.service";

const dbConfig = {
  port: 5432,
  host: "localhost",
  username: "postgres",
  password: "password",
  dialect: "postgres",
  database: "scheduler4js",
  logging: false,
};

const config = {
  frequency: Frequency.ONCE_IN_HALF_MINUTE,
  lockLifetime: 6 * 1000,
  type: "x",
  kick: true,
};

@Module({
  imports: [RedisModule.forRootAsync({ dbConfig, config })],
  providers: [AppService],
})
export class AppModule {}
```

#### InjectScheduler4js(options)

```ts
import { Scheduler } from "scheduler4js";

@Controller()
export class AppService {
  constructor(@InjectScheduler4js() private readonly scheduler4js: Scheduler) {
    scheduler.on("begin", (job) => {
      console.log("begin", job);
    });

    scheduler.on("completed", (job) => {
      console.log("completed", job);
    });

    scheduler.on("fail", (err, job) => {
      console.log("fail", err, job);
    });

    scheduler.enqueueJob({
      name: "halil",
      concurrency: 1,
      type: "x",
      timezone: Timezone.ASIA_DUBAI,
      cron: CronUtil.EVERY_X_MINUTE(1),
      lockLimit: 1,
      saveLog: false,
      priority: 0,
      fn: () => {
        console.log(`Job run at the time of ${new Date()}`);
      },
    });
  }
}
```
