import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const SearchIcon = styled(HiMagnifyingGlass)`
  font-size: 1rem;
  color: ${(props) => props.theme.color.muted};
  position: absolute;
  margin-left: -2rem;
  margin-top: 0.4rem;
`;
