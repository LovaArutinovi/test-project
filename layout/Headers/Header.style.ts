import styled from "styled-components";
import LogoIcon from "public/icons/logo.svg";
import Link from 'next/link';
import { IsActive } from "untils/PopularInterfaces";


export const HeaderWrapper = styled.header`
   /* background: ${props => props.theme.colors.white}; */
`;

export const HeaderInner = styled.div`
   padding: 44px 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
