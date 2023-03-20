import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const Label = styled.label`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const SearchInput = styled.input`
  background-color: ${(props) => props.theme.color.lightGray};
  border: none;
  border-radius: 1rem;
  padding: 0.4rem 1rem;
  position: relative;
`;

export const SearchIcon = styled(HiMagnifyingGlass)`
  font-size: 1rem;
  color: ${(props) => props.theme.color.muted};
  position: absolute;
  margin-left: -2rem;
  margin-top: 0.4rem;
`;
