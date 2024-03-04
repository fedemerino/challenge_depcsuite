const winston = require('winston');
const { combine, timestamp, printf, align } = winston.format;

interface LogInfo {
  level: string,
  message: string,
  timestamp: string,
}

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }),
    align(),
    printf((info: LogInfo) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console(),
  new winston.transports.File({ filename: 'winston.log' })],
});

export default logger;