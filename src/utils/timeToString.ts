import moment from 'moment';

export const timeToString = (
  day: number | string,
  time: number | string,
  format?: string
): string => {
  if (!+day || !time) return '';
  return moment
    .utc(moment.utc((+day + +time) * 1000))
    .local()
    .format(format || 'HH:MM');
};
