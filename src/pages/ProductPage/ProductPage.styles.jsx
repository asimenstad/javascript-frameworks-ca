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

export const Section = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  > div {
    > h1 {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 750px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    > div {
      max-width: 500px;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: 500;
`;

export const DiscountedPrice = styled.p`
  color: ${(props) => props.theme.color.red};
`;

export const Price = styled.p`
  text-decoration: line-through;
  color: ${(props) => props.theme.color.muted};
`;

export const Hr = styled.hr`
  margin-top: 2rem;
  border: solid 0.5px;
  color: ${(props) => props.theme.color.muted};
`;

export const Reviews = styled.div`
  margin-top: 2rem;
  > h2 {
    font-size: 1.2rem;
  }
`;

export const Review = styled.div`
  margin-bottom: 2rem;
  > * {
    font-size: 1rem;
    margin: 0.3rem 0;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Image = styled.img`
  aspect-ratio: 4 / 5;
  object-fit: cover;
`;
