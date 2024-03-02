import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const convertTo12HourFormat = (timeString: string) => {
  const timeObject = dayjs(timeString, 'HH:mm');
  const formattedTime = timeObject.format('h:mm A');
  return formattedTime;
};

export const fileNameUrl = (file: string) => {
  const parts = file.split('/assets/');

  // Get the second part and split it by the date part
  let fileName = '';
  if (parts) {
    const namePart = parts[1].split('-');
    if (namePart) {
      fileName = namePart[0];
    }
  }
  return fileName;
};
