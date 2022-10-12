import styled from "styled-components";

export const FooterWrapper = styled.footer`
   padding: 93px 0 47px;
   background: ${props => props.theme.colors.primary};
   @media ${props => props.theme.breakpoints.md}{
      padding: 50px 0 30px;

   }
`;

export const FooterInner = styled.div``;

export const FooterCopy = styled.p`
   text-align: center;
   font-weight: 500;
   font-size: 15px;
   color: ${props => props.theme.colors.white};
   line-height: 22px;
`;