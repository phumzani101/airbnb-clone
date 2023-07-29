"use client";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import RegisterModal from "../modals/RegisterModal";

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
      <Toaster />
    </div>
  );
};

export default Provider;
