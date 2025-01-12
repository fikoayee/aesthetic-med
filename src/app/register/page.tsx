"use client";
import { PageBackground } from "../components/PageBackground/PageBackground";
import { RegisterForm } from "./RegisterForm/RegisterForm";

export default function Register() {
  return (
    <PageBackground backgroundName="Register-background">
      <RegisterForm />
    </PageBackground>
  );
}
