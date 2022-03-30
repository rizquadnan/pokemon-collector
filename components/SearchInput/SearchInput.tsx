import {
  SearchInput as SearchInput_,
  SearchInputProps as SearchInputProps_,
} from "@sumup/circuit-ui";

type SearchInputProps = SearchInputProps_;

const SearchInput = ({ hideLabel = true, ...props }: SearchInputProps) => {
  return <SearchInput_ {...props} hideLabel={hideLabel} />;
};

export type { SearchInputProps };
export { SearchInput };
