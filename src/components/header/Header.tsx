import { TimerIcon } from "@phosphor-icons/react";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  return (
    <header className="flex items-center flex-col gap-4  p-2">
      <div className="flex items-center flex-col gap-2 mt-7">
        <TimerIcon className="text-green-300" weight="bold" size={64} />
        <h1 className="text-[42px] text-green-300 font-bold">Focus Flow</h1>
      </div>
      <NavLinks />
    </header>
  );
};
