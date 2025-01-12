"use client";

import { Step, StepLabel, Stepper } from "@mui/material";
import { StepsProps } from "./Steps.types";

export const Steps = ({ activeStep, steps }: StepsProps) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
