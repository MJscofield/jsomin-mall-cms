import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export function formatUtcString(
  utcSting: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcSting).format(format)
}
