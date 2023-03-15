import { Link } from "react-router-dom";
import styled from "styled-components";

export const Breadcrumb = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
  > li {
    list-style: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const Section = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  @media screen and (min-width: 800px) {
    flex-direction: row-reverse;
  }
`;

export const Image = styled.img`
  aspect-ratio: 4 / 5;
  object-fit: cover;
`;
