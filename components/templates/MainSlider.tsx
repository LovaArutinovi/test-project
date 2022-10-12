import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { slides } from "untils/slides";
import styled, { createGlobalStyle } from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";
import RightArrow from "public/icons/arrow-right.svg";
import LeftArrow from "public/icons/arrow-left.svg";

export const MainSlider = () => {
  const swiper = useSwiper();
  const [slider, setSlider] = useState(swiper);
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  const openGallery = (id: string): void => {
    if (typeof window != undefined) {
      const btn = document.querySelector(id) as HTMLElement | null;
      if (btn != null) {
        btn.click();
      }
      // document.querySelector()!.click();
    }
  };
  return (
    <SliderWrapper>
      <SliderStyles />
      <Slider
        slidesPerView={"auto"}
        // freeMode={true}
        centeredSlides={true}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSlider(swiper)}
      >
        <SlideToPrev
          onClick={() => {
            slider.slidePrev();
          }}
        >
          <LeftArrow />
        </SlideToPrev>
        {slides.map((item, index) => (
          <>
            <SwiperSlide
              style={{ width: "fit-content" }}
              onClick={() => openGallery(`#some${index}`)}
            >
              <SwiperSlideWrapper>
                <img alt="img1" src={item} />
              </SwiperSlideWrapper>
            </SwiperSlide>
          </>
        ))}
        <SlideToNext
          onClick={() => {
            slider.slideNext();
          }}
        >
          <RightArrow />
        </SlideToNext>
      </Slider>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {slides.map((item, index) => (
          <a
            style={{ height: 0, overflow: "hidden" }}
            href={item}
            onClick={() => console.log("click")}
            id={`some${index}`}
          >
            <img alt={item} src={item} />
          </a>
        ))}
      </LightGallery>
    </SliderWrapper>
  );
};
const SliderStyles = createGlobalStyle`
	.lg-react-element{
		display: flex;
	}
  .lg-backdrop,.lg-outer .lg-thumb-outer{
     background: rgba(0, 0, 0, 0.46);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.51);
  }
  .swiper-slide{
    opacity: .5;
    transition: all;
  }
  .swiper-slide-active{
    opacity: 1;
  }
`;
const SliderWrapper = styled.div``;
const Slider = styled(Swiper)`
  position: relative;
  width: min(900px, 100%);
  height: 430px;
  z-index: 999;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 250px;
  }
`;
const SwiperSlideWrapper = styled.a`
  max-width: 440px;
  height: min(100%, 430px);
  overflow: hidden;
  & img {
    max-width: 100%;
    height: min(100%, 430px);
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    display: block;
    max-width: 250px;
    & img {
      max-width: 100%;
      height: min(100%, 250px);
    }
  }
`;
const SlideToPrev = styled.button`
  padding: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2;
  cursor: pointer;
  border: 0;
  outline: none;
  background: none;
  & svg {
    width: 35px;
    height: 35px;
    background: #000;
  }
`;

const SlideToNext = styled.button`
  padding: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2;
  cursor: pointer;
  border: 0;
  outline: none;
  background: none;
  & svg {
    width: 35px;
    height: 35px;
    background: #000;
  }
`;
