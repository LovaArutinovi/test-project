import styled from "styled-components";

export const ButtonLinkWrapper = styled.a`
   display: inline-block;
`;

export const ButtonLinkInner = styled.button`
   padding: 16px 32px;
   font-weight: 600;
   font-size: 20px;
   line-height: 30px;
   color: ${props => props.theme.colors.black};
   background:${props => props.theme.colors.primary};
   border-radius: 61px;
   border: none;
   outline: none;
   cursor: pointer;
   transition: all .08s;

   &:hover{
      color: ${props => props.theme.colors.white};
   }
   &:active {
      transform: scale(.95);
   }
`;