import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

type Props = {
  onSearch: (searchText: string) => void;
};

function Navbar({ onSearch }: Props) {
  return (
    <HStack px={3} my={2} mb={5} alignItems="center">
      <Link href="/" boxSize="60px">
        <Image src={logo} />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
