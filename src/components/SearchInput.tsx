import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

type Props = {
  onSearch: (searchText: string) => void;
};
function SearchInput({ onSearch }: Props) {
  return (
    <FormControl>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          onChange={(e) => onSearch(e.target.value)}
        />
      </InputGroup>
    </FormControl>
  );
}

export default SearchInput;
