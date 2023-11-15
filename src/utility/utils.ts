export function getRandom<T>(arr: T[]): T {
  const length = arr.length;
  const randomIndex = Math.floor(Math.random() * length);

  return arr[randomIndex];
}

const addZero = (str: number) => {
  return str.toString().padStart(2, "0");
};

export const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  const day = addZero(date.getDate());
  const month = addZero(date.getMonth());
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};

export const getGridRows = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const mobileRows = Math.floor((height - 132) / 168);
  if (width < 768) {
    return mobileRows;
  }
  if (width < 1200) {
    return;
  }
  return mobileRows * 3;
};

export const getTableRows = (height: number) => {
  return Math.floor((height - 175) / 34);
};
