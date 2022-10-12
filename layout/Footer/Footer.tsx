import MainContainer from "components/containers/MainContainer";
import { FooterCopy, FooterInner, FooterWrapper } from "./Footer.style";
import { format } from "date-fns";
import { ka } from "date-fns/locale";

export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <MainContainer>
        <FooterInner>
          <FooterCopy>
            © All rights reserved 2022 - {format(new Date(), "YYY")}
          </FooterCopy>
        </FooterInner>
      </MainContainer>
    </FooterWrapper>
  );
};
