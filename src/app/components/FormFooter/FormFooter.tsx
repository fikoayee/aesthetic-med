import { StandardButton } from "@/app/ui/StandardButton/StandardButton";
import { Box } from "@mui/system";
import { FormFooterProps } from "./FormFooter.types";

export const FormFooter = ({
  activeStep,
  isLastStep,
  onNext,
  onPrevious,
  onSubmit,
  onClose,
}: FormFooterProps) => {
  return (
    <Box sx={{ display: "flex", marginTop: "auto", gap: 1 }}>
      <StandardButton title="Close" color="black" onClick={onClose} />
      <StandardButton
        title="Previous"
        variant="contained"
        disabled={activeStep === 0}
        sx={{ width: "120px", marginLeft: "auto" }}
        onClick={onPrevious}
      />
      <StandardButton
        title={isLastStep ? "Add" : "Next"}
        variant="contained"
        sx={{ width: "80px" }}
        onClick={isLastStep ? onSubmit : onNext}
      />
    </Box>
  );
};
