import {
  ClockCounterClockwiseIcon,
  GearSixIcon,
  HouseIcon,
  SunIcon,
} from "@phosphor-icons/react";

export const NavLinks = () => {
  return (
    <nav className="flex items-center justify-center gap-6 mt-2">
      <a
        href="#"
        className="text-green-300 hover:scale-150 duration-300"
        aria-label="Ir para Home"
        title="Ir para Home"
      >
        <HouseIcon size={32} weight="bold" />
      </a>
      <a
        href="#"
        className="text-green-300 hover:scale-150 duration-300"
        aria-label="Ver histórico"
        title="Ver histórico"
      >
        <ClockCounterClockwiseIcon size={32} weight="bold" />
      </a>
      <a
        href="#"
        className="text-green-300 hover:scale-150 duration-300"
        aria-label="Ir para Configurações"
        title="Configurações"
      >
        <GearSixIcon size={32} weight="bold" />
      </a>
      <a
        href="#"
        className="text-green-300 hover:scale-150 duration-300"
        title="Mudar Tema"
      >
        <SunIcon size={32} weight="bold" />
      </a>
    </nav>
  );
};
