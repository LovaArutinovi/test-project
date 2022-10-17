import MainContainer from "components/containers/MainContainer";
import { MainSlider } from "components/templates/MainSlider";
import { withLayout } from "layout/Layout";

function ImageSlider(): JSX.Element {
  return (
    <ImageSliderWrapper>
      <MainContainer>
        <MainSlider />
      </MainContainer>
    </ImageSliderWrapper>
  );
}

export default withLayout(ImageSlider);

import styled from "styled-components";
const ImageSliderWrapper = styled.section``;
