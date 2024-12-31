"use client";
import { PageWrapper } from "../compoenents/PageBackground/PageWrapper";
import { GlassCard } from "../compoenents/GlassCard/GlassCard";
import { LoginForm } from "./LoginForm/LoginForm";

export default function Login() {
  return (
    <PageWrapper backgroundName="login-background">
      <GlassCard title="Sign in">
        <LoginForm />
      </GlassCard>
    </PageWrapper>
  );
}
