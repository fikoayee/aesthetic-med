import { Steps } from "@/app/components/Steps/Steps";
import { StyledCardTitle, StyledDivider } from "@/app/globalStyles";
import { Grid2 } from "@mui/material";
import { StaffInfoForm } from "./StaffInfoForm/StaffInfoForm";
import { WorkingDaysForm } from "./WorkingDaysForm/WorkingDaysForm";
import { FormFooter } from "@/app/components/FormFooter/FormFooter";
import { useState } from "react";
import { AddStaffFormProps } from "./AddStaffForm.types";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { INITIAL_WORKING_HOURS } from "@/app/constants/working-days.const";

export const AddStaffForm = ({ onClose }: AddStaffFormProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = ["Staff Info", "Working Days"];

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      gender: "",
      role: "specialist",
      specializations: [],
      workingHours: INITIAL_WORKING_HOURS,
    },
  });

  const { handleSubmit } = methods;

  const isLastStep = activeStep + 1 >= steps.length;

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Form Data:", data);
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handlePrevious = () => setActiveStep((prev) => prev - 1);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledCardTitle>Add New Staff Member</StyledCardTitle>
        <StyledDivider />
        <Steps steps={steps} activeStep={activeStep} />
        <Grid2 container spacing={2} sx={{ paddingInline: "10px" }}>
          {activeStep === 0 ? <StaffInfoForm /> : <WorkingDaysForm />}
        </Grid2>
        <FormFooter
          activeStep={activeStep}
          isLastStep={isLastStep}
          onClose={onClose}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit(onSubmit)}
        />
      </form>
    </FormProvider>
  );
};
