import { parseISO, addHours } from 'date-fns';
import { format } from 'date-fns-tz';

export default function formatDate(date: string) {
  const parsedISO = parseISO(date);

  const zonedDate = addHours(parsedISO, -3);

  const formattedDate = format(zonedDate, 'dd/MM/yyyy');
  const formattedHour = format(zonedDate, 'HH:mm');

  return `${formattedDate} às ${formattedHour}`;
}
