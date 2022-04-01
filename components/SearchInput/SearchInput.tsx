import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  SearchInput as SearchInput_,
  SearchInputProps as SearchInputProps_,
} from "@sumup/circuit-ui";
import { colors } from "../../shared";
import { Button } from "../Button";

type SearchInputProps = SearchInputProps_ & {
  onSearch: () => void;
};

const Container = styled.div(
  {
    display: "flex",
    alignItems: "flex-start",
  },
  (props) => ({
    "& > *:first-child": {
      marginRight: props.theme.spacings.giga,
    },
  })
);

const SearchInputContainer = styled.div({
  flex: "1",
  "& > label": {
    marginBottom: "0",
  },
});

const SearchInput = ({ hideLabel = true, ...props }: SearchInputProps) => {
  return (
    <Container>
      <SearchInputContainer>
        <SearchInput_ {...props} hideLabel={hideLabel} />
      </SearchInputContainer>
      <Button
        variant="primary"
        onClick={props.onSearch}
        css={{ backgroundColor: colors.secondary, border: "none" }}
      >
        Search
      </Button>
    </Container>
  );
};

export type { SearchInputProps };
export { SearchInput };
