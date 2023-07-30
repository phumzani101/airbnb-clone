"use client";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";

const Provider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return;
  }

  return (
    <div>
      <RegisterModal />
      <LoginModal />
      <Toaster />
    </div>
  );
};

export default Provider;
