import { Text } from 'react-native';

export default function DateDisplay() {
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return <Text>{formattedDate}</Text>;
}