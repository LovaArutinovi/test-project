import id from "date-fns/esm/locale/id/index.js";
import { ReactNode } from "react";
import ReactDOM from "react-dom";
interface ModalPortalProps {
  children: ReactNode;
}
export const ModalPortal = ({ children }: ModalPortalProps) => {
  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById("modal-portal")!
  );
};
