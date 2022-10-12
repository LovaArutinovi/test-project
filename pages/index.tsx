import MainContainer from "components/containers/MainContainer";
import { MainSlider } from "components/templates/MainSlider";
import { withLayout } from "layout/Layout";

function Home(): JSX.Element {
  return (
    <Main>
      <MainContainer>
        <MainSlider />
      </MainContainer>
    </Main>
  );
}

export default withLayout(Home);

import styled from "styled-components";
const Main = styled.div``;
