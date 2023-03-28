import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  right: 0;
  margin-right: 20px;
  padding: 10px;
  background-color: ${(props) => props.theme.color.lightGray};
  border-top: 2px solid #000;
  transform: ${(props) => (props.isActive ? "translateY(0)" : "translateY(-100%)")};
  transition: all 0.5s ease;
  > div:not(:first-child) {
    border-top: 1px solid ${(props) => props.theme.color.muted};
  }
`;

export const Product = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
`;

export const Thumbnail = styled.img`
  max-width: 50px;
  aspect-ratio: 4 / 5;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > h2 {
    font-size: 0.8rem;
    font-family: ${(props) => props.theme.font.secondary};
    margin-top: 0;
  }
  > p {
    font-size: 0.8rem;
    margin: 0;
  }
`;
