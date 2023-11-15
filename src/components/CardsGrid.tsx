import { DataView } from "primereact/dataview";
import { UserIcon } from "../lib/icons";
import useScreenSize from "../hooks/useScreenResize";
import { getGridRows } from "../utility/utils";

interface CardsGridProps {
  filteredData: DataRow[];
  handleKeyDown: (e: React.KeyboardEvent) => void;
  handleSelect: (row: DataRow) => void;
  selectedRow: DataRow | null;
  read: DataRow[];
}

const CardsGrid = ({
  filteredData,
  handleKeyDown,
  handleSelect,
  selectedRow,
  read,
}: CardsGridProps) => {
  const screen = useScreenSize();
  const rows = getGridRows(screen);

  const gridItem = (dataRow: DataRow) => {
    const isSelected = dataRow.id === selectedRow?.id;
    const isRead = read.includes(dataRow);

    return (
      <div
        tabIndex={0}
        className="col-12 md:col-6 xl:col-4 p-2 text-xs outline-none "
        onClick={() => handleSelect(dataRow)}
        onKeyDown={handleKeyDown}
      >
        <div
          className={`p-3 border-round cursor-pointer border-1 
        ${isSelected ? "border-black" : "border-400"}
        ${!isRead ? "bg-blue-100 hover:bg-blue-200" : "hover:bg-gray-50"}
        `}
        >
          <div className="flex gap-1 justify-content-between">
            <div className="flex flex-column w-full gap-3">
              <div className="flex justify-content-between">
                <div className="">Дата</div>
                <div className="">{dataRow.date}</div>
              </div>
              <div className="flex justify-content-between">
                <div className="">Важность</div>
                <div className="">{dataRow.importance}</div>
              </div>
              <div className="flex justify-content-between">
                <div className="">Оборудование</div>
                <div className="">{dataRow.equipment}</div>
              </div>
            </div>
            <div className="flex flex-column w-10rem align-items-center gap-2 flex-shrink-0">
              <UserIcon />
              <div className="white-space-nowrap">{dataRow.responsible}</div>
            </div>
          </div>
          <div className="flex justify-content-between pt-3">
            <div className="">Сообщение</div>
            <div className="">{dataRow.message}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <DataView
      value={filteredData}
      itemTemplate={gridItem}
      layout={"grid"}
      paginator
      paginatorClassName="mt-auto"
      rows={rows}
      className="h-full"
      paginatorTemplate="FirstPageLink PrevPageLink JumpToPageInput NextPageLink LastPageLink"
    />
  );
};

export default CardsGrid;
