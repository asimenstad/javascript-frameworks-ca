import styled from "styled-components";

export const Loader = styled.div`
  width: 25px;
  height: 25px;
  margin: auto;
  margin-top: 30%;;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.pink};
  animation: loader 0.5s ease infinite alternate;
  @keyframes loader {
    from {
      box-shadow: 0 0, 0 0;
      color: ${(props) => props.theme.color.pinkTransparentLight};
    }
    to{
        box-shadow -40px 0, 40px 0;
      color: ${(props) => props.theme.color.pinkTransparentDark};

    }
  }
`;
