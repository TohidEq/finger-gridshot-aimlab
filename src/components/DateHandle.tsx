type Props = {
  date: string;
};

export default function DateHandle(props: Props) {
  const myDate = new Date(props.date);
  return myDate;
}
