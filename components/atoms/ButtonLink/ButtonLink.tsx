import { ButtonLinkProps } from "./ButtonLink.props";
import { ButtonLinkInner, ButtonLinkWrapper } from "./ButtonLink.style";

const ButtonLink = ({ link, onClick, children }: ButtonLinkProps) => {
  return (
    <ButtonLinkWrapper onClick={() => onClick && onClick()}>
      <ButtonLinkInner>{children}</ButtonLinkInner>
    </ButtonLinkWrapper>
  );
};
export default ButtonLink;
