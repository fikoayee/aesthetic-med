export type FormFooterProps = {
  activeStep: number;
  isLastStep: boolean;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
};
