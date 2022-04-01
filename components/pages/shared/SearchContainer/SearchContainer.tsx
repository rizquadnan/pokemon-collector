import { useState } from "react";
import { SearchInput } from "../../..";

type SearchContainerProps = {
  onSearch: (searchValue: string) => void;
};

const SearchContainer = (props: SearchContainerProps) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <SearchInput
      value={searchInputValue}
      label="Search pokemon"
      placeholder="Search pokemon here"
      clearLabel="Clear"
      onChange={(e) => setSearchInputValue(e.target.value)}
      onClear={() => setSearchInputValue("")}
      onSearch={() => props.onSearch(searchInputValue)}
    />
  );
};

export type { SearchContainerProps };
export { SearchContainer };
