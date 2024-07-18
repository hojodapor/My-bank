"use client";
import { getLoggedInUser } from "@/actions/user.action";
import AuthForm from "@/components/AuthForm";
import React from "react";

export default async function SignUp() {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="Signup" />
    </section>
  );
}
