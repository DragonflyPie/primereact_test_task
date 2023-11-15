import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeflex/primeflex.css";
import { DataTableSelectionSingleChangeEvent } from "primereact/datatable";
import { useState } from "react";
import useCreateData from "./hooks/useCreateData";
import { SelectButtonChangeEvent } from "primereact/selectbutton";
import CardsGrid from "./components/CardsGrid";
import Header from "./components/Header";
import Table from "./components/Table";
import { options } from "./lib/data";

const App = () => {
  const data = useCreateData();
  const [filter, setFilter] = useState("");
  const [view, setView] = useState(options[0].value);
  const [selectedRow, setSelectedRow] = useState<DataRow | null>(null);
  const [read, setRead] = useState<DataRow[]>([]);

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) => {
      if (typeof value !== "string") return;
      return value.toLowerCase().includes(filter.toLowerCase());
    })
  );

  const onFilterChange = (str: string) => {
    setFilter(str);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!selectedRow) return;
    if (e.key === " ") {
      setRead([...read, selectedRow]);
    }
  };

  const handleGridSelect = (row: DataRow) => {
    if (selectedRow?.id === row.id) setSelectedRow(null);
    else {
      setSelectedRow(row);
    }
  };

  const handleTableSelect = (
    e: DataTableSelectionSingleChangeEvent<DataRow[]>
  ) => {
    setSelectedRow(e.value);
  };

  const handleViewChange = (e: SelectButtonChangeEvent) => {
    setView(e.value);
  };

  return (
    <div className="h-full p-2">
      <Header
        view={view}
        handleViewChange={handleViewChange}
        options={options}
        changeFilter={onFilterChange}
      />
      {view === "table" ? (
        <Table
          filteredData={filteredData}
          handleKeyDown={handleKeyDown}
          selectedRow={selectedRow}
          read={read}
          handleSelect={handleTableSelect}
        />
      ) : (
        <div>
          <CardsGrid
            filteredData={filteredData}
            handleKeyDown={handleKeyDown}
            handleSelect={handleGridSelect}
            selectedRow={selectedRow}
            read={read}
          />
        </div>
      )}
    </div>
  );
};

export default App;
