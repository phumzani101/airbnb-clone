"use client";
import Image from "next/image";
import React from "react";

const Avatar = () => {
  let imgSrc = "/images/placeholder.jpg";
  return (
    <Image
      src={imgSrc}
      className="rounded-full hidden md:block "
      height={30}
      width={30}
      alt="Avatar"
    />
  );
};

export default Avatar;
