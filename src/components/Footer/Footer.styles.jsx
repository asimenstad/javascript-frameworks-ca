import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterSquare } from "react-icons/ai";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: ${(props) => props.theme.font.primary};
`;

export const Socials = styled.div`
  display: flex;
  gap: 10px;
`;

export const Instagram = styled(AiOutlineInstagram)`
  font-size: 1.6rem;
`;

export const Facebook = styled(AiOutlineFacebook)`
  font-size: 1.6rem;
`;

export const Twitter = styled(AiFillTwitterSquare)`
  font-size: 1.6rem;
`;
