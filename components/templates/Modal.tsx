import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../styled/theme";
import { AnimatePresence, motion } from "framer-motion";
import { ModalPortal } from "layout/Portals/ModalPortal";
import { IsActive } from "untils/PopularInterfaces";

interface ModalProps {
  children: ReactNode;
  onClose?: any;
  contentStyle?: any;
  closeFunction: any;
  isOpen: boolean;
}

interface BasicProps {
  active?: boolean;
  isMobile?: boolean;
}

const parent = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};
const child = {
  hidden: {
    transform: "scale(0)",
  },
  visible: {
    transform: "scale(1)",
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    transform: "scale(0)",
    transition: {
      duration: 0.4,
    },
  },
};

const Modal: React.FC<ModalProps> = (props): JSX.Element => {
  useEffect(() => {
    if (typeof window != undefined) {
      if (props.isOpen) {
        document.querySelector("body")?.classList.add("modal-open");
      }
    }
    return () => {
      document.querySelector("body")?.classList.remove("modal-open");
    };
  });
  return (
    <AnimatePresence // Disable any initial animations on children that
      // are present when the component is first rendered
      initial={false}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      exitBeforeEnter={true}
      // Fires when all exiting nodes have completed animating out
      onExitComplete={() => null}
    >
      {props.isOpen && (
        <ModalPortal>
          <ModalBox
            variants={parent}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ModalCloseBg
              onClick={(e) => {
                props.onClose();
                //  setModalOpen(false);
                props.closeFunction(false);
                e.stopPropagation();
              }}
              active={props.isOpen}
            ></ModalCloseBg>
            <ModalBody
              variants={child}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={props.contentStyle ?? {}}
            >
              {props.children}
            </ModalBody>
          </ModalBox>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
};

export default Modal;

const ModalBox = styled(motion.div)<BasicProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
`;
const ModalCloseBg = styled.div<IsActive>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  cursor: pointer;
  background: rgba(0, 0, 0, 0.46);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px)
    ${(props) => (props.active ? "opacity(1)" : "opacity(0)")};
  -webkit-backdrop-filter: blur(8px)
    ${(props) => (props.active ? "opacity(1)" : "opacity(0)")};
  border: 1px solid rgba(0, 0, 0, 0.51);
  /* opacity: 0.2; */
  transition: backdrop-filter 0.2s;
  z-index: -1;
`;
const ModalBody = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 50px;
  background: #ffffff;
  border-radius: 30px;
  z-index: 2;
  @media ${theme.breakpoints.xs} {
    padding: 25px;
  }
  /* transform: scale(0.5); */
`;
