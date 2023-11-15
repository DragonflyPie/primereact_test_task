import {
  DataTable,
  DataTableSelectionSingleChangeEvent,
} from "primereact/datatable";
import useScreenSize from "../hooks/useScreenResize";
import { Column } from "primereact/column";
import { getTableRows } from "../utility/utils";

interface TableProps {
  filteredData: DataRow[];
  handleKeyDown: (e: React.KeyboardEvent) => void;
  handleSelect: (event: DataTableSelectionSingleChangeEvent<DataRow[]>) => void;
  selectedRow: DataRow | null;
  read: DataRow[];
}

const Table = ({
  filteredData,
  read,
  selectedRow,
  handleSelect,
  handleKeyDown,
}: TableProps) => {
  const rowClass = (row: DataRow) => {
    return { "bg-blue-100": !read.includes(row) };
  };

  const { height } = useScreenSize();

  const rows = getTableRows(height);

  return (
    <DataTable
      value={filteredData}
      paginator
      rows={rows}
      showGridlines
      tableStyle={{ minWidth: "50rem" }}
      selectionMode="single"
      selection={selectedRow!}
      onSelectionChange={handleSelect}
      dataKey="id"
      metaKeySelection={false}
      rowClassName={rowClass}
      onKeyDown={handleKeyDown}
      paginatorTemplate="FirstPageLink PrevPageLink JumpToPageInput NextPageLink LastPageLink"
    >
      <Column field="date" header="Дата"></Column>
      <Column field="importance" header="Важность"></Column>
      <Column field="equipment" header="Оборудование"></Column>
      <Column
        field="message"
        style={{
          width: "30%",
        }}
        sortable
        header="Сообщение"
      ></Column>
      <Column field="responsible" sortable header="Ответственный"></Column>
    </DataTable>
  );
};

export default Table;
