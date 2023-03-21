type FormaterProps = {
  value: number;
};

export default function Formater({ value }: FormaterProps) {
  let newValue: (string | number)[];
  if (value < 1000000 && value > 1000) {
    newValue = [Math.round(value / 1000), "k"];
  } else if (value >= 1000000) {
    newValue = [Math.round(value / 1000000), "M"];
  } else if (value >= 1000000000) {
    newValue = [Math.round(value / 1000000000), "B"];
  } else if (value >= 1000000000000) {
    newValue = [Math.round(value / 1000000000000), "T"];
  } else if (value >= 1000000000000000) {
    newValue = [Math.round(value / 1000000000000000), "Q"];
  } else {
    newValue = [value, ""];
  }
  return newValue;
}
