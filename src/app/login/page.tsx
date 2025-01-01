"use client";
import { PageBackground } from "../components/PageBackground/PageBackground";
import { LoginForm } from "./LoginForm/LoginForm";

export default function Login() {
  return (
    <PageBackground backgroundName="login-background">
        <LoginForm />
    </PageBackground>
  );
}
