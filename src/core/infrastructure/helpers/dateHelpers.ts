import dayjs from 'dayjs';

export const formatDate = (date: string, format = "YYYY-MM-DD") => {
  return dayjs(date).format(format);
};
