import { SearchInputProps } from "./SearchInput";

export const requiredProps: SearchInputProps = {
  label: "Search pokemon",
  clearLabel: "Clear pokemon name",
  onClear: () => console.log("clear"),
};
