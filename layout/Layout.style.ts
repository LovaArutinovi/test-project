import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  /* background: url("/images/Screenshot_100.png"); */
`;

export const Main = styled.main`
  flex-grow: 1;
  /* background: ${props => props.theme.colors.white}; */
`;
