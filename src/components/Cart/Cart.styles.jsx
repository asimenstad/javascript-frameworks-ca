import styled from "styled-components";
import { AiOutlineShopping } from "react-icons/ai";

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Icon = styled(AiOutlineShopping)`
  font-size: 1.8rem;
`;

export const Count = styled.p`
  position: absolute;
  font-size: 0.7rem;
  padding-top: 0.4rem;
  font-weight: 600;
`;
