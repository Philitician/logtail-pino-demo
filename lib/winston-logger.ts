// import { Logtail } from "@logtail/node";
// import { LogtailTransport } from "@logtail/winston";
// import winston from "winston";

// const { combine, timestamp, json } = winston.format;

// const getLogger = async () => {
//   const token = process.env.LOGTAIL_SOURCE_TOKEN;
//   if (!token) return undefined;

//   const logtail = new Logtail(token);

//   return winston.createLogger({
//     level: process.env.LOG_LEVEL || "info",
//     format: combine(timestamp(), json()),
//     defaultMeta: { service: "elfusion" },
//     transports: [
//       new winston.transports.Console(),
//       new LogtailTransport(logtail),
//     ],
//     handleExceptions: true,
//   });
// };

// export const logger = await getLogger();
