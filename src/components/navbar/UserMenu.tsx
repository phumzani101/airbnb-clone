"use client";
import React, { useCallback, useState } from "react";
import { BiMenu } from "react-icons/bi";
import Avatar from "@/components/myui/Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/hooks/useRegisterModal";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb you home
        </div>
        <div
          onClick={toggleOpen}
          className="flex flex-row items-center gap-3 p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 cursor-pointer hover:shadow-md transition"
        >
          <BiMenu size={20} />
          <Avatar />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <MenuItem onClick={() => {}} label="Login" />
            <MenuItem onClick={registerModal.onOpen} label="Register" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
