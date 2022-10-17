import MainContainer from "components/containers/MainContainer";
import { withLayout } from "layout/Layout";
import Link from "next/link";

function Home(): JSX.Element {
  return (
    <Main>
      <MainContainer>
        <Link href="/imageSlider">
          <a href="/imageSlider">ImageSlider</a>
        </Link>
        <br />
        <Link href="/uploadImages">
          <a href="/uploadImages">UploadImages</a>
        </Link>
      </MainContainer>
    </Main>
  );
}

export default withLayout(Home);

import styled from "styled-components";
const Main = styled.div``;
