import { useEffect, useState } from "react";
import { getFormattedDate, getRandom } from "../utility/utils";
import { dataSource } from "../lib/data";
import { v4 as uuidv4 } from "uuid";

const useCreateData = () => {
  const [data, setData] = useState<DataRow[] | []>([]);

  const randomError = getRandom(dataSource.error);

  const newElement: DataRow = {
    id: uuidv4(),
    date: getFormattedDate(),
    importance: getRandom(dataSource.importance),
    equipment: randomError.equipment,
    message: randomError.message,
    responsible: getRandom(dataSource.responsible),
    read: false,
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setData((currentData) => [...currentData, newElement]);
    }, 2000);
    return () => clearInterval(timer);
  }, [getRandom, newElement]);
  return data;
};

export default useCreateData;
