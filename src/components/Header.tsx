import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { SelectButton, SelectButtonChangeEvent } from "primereact/selectbutton";
import { useRef } from "react";

interface HeaderProps {
  view: string;
  handleViewChange: (e: SelectButtonChangeEvent) => void;
  changeFilter: (str: string) => void;
  options: {
    label: string;
    value: string;
  }[];
}

const Header = ({
  view,
  handleViewChange,
  changeFilter,
  options,
}: HeaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current) return;

    changeFilter(inputRef.current.value);
  };

  return (
    <div className="flex justify-content-between gap-2 pb-2 px-2">
      <SelectButton
        allowEmpty={false}
        value={view}
        onChange={handleViewChange}
        options={options}
        optionLabel="label"
        optionValue="value"
        className="flex flex-nowrap"
      />
      <form onSubmit={handleSubmit} className="flex gap-2">
        <InputText ref={inputRef} />
        <Button type="submit" label="Поиск" />
      </form>
    </div>
  );
};

export default Header;
