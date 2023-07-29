import React from "react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/navbar/Logo";
import Searchbar from "@/components/ui/navbar/Searchbar";
import UserMenu from "@/components/ui/navbar/UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Searchbar />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;