import { ModalWrapperProps } from "./ModalWrapper.types";
import { StyledModalContainer, StyledModalWrapper } from "./styles";
import { useEffect, useState } from "react";

export const ModalWrapper = ({ isOpen, children }: ModalWrapperProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => setShowAnimation(true));
    } else {
      setShowAnimation(false);
      const timeout = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;
  return (
    <StyledModalContainer isOpen={showAnimation}>
      <StyledModalWrapper isOpen={showAnimation}>{children}</StyledModalWrapper>
    </StyledModalContainer>
  );
};
