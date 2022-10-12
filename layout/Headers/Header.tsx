import MainContainer from "components/containers/MainContainer";
import styled from "styled-components";
import { HeaderInner, HeaderWrapper } from "./Header.style";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonLink from "components/atoms/ButtonLink/ButtonLink";
import Modal from "components/templates/Modal";
import { useState } from "react";

const Header = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <HeaderWrapper>
        <MainContainer>
          <HeaderInner>Header</HeaderInner>
          <button onClick={() => setOpenModal(true)}>open modal</button>
        </MainContainer>
      </HeaderWrapper>
      <Modal
        isOpen={openModal}
        onClose={() => console.log("close")}
        closeFunction={() => setOpenModal(false)}
      >
        Hello
      </Modal>
    </>
  );
};
export default Header;
