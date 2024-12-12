"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { IsScreenScrolled } from "./header.hooks";
import NexerIcon from "./nexer-icon";

const HomeHeader = () => {
  const isScreenScrolled = IsScreenScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 mx-auto w-full transition-all duration-300",
        {
          "bg-white py-2": isScreenScrolled,
          "bg-black/40 py-4": !isScreenScrolled,
        },
      )}
    >
      <div className="container mx-auto flex items-center gap-8">
        <Link href="/#home" aria-label="Ir al inicio de la web">
          <NexerIcon
            className={cn("h-9 w-36", {
              "text-white": !isScreenScrolled,
              "text-accent": isScreenScrolled,
            })}
          />
        </Link>

        <NavigationMenu className="hidden max-w-full grow justify-center lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "text-xl", {
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline":
                    !isScreenScrolled,
                })}
                asChild
              >
                <Link href="#about" aria-label="Ir a la sección de conócenos">
                  Conócenos
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "text-xl", {
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline":
                    !isScreenScrolled,
                })}
                asChild
              >
                <Link href="#team" aria-label="Ir a la sección de equipo">
                  Equipo
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "text-xl", {
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline":
                    !isScreenScrolled,
                })}
                asChild
              >
                <Link
                  href="#services"
                  aria-label="Ir a la sección de servicios"
                >
                  Servicios
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "text-xl", {
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline":
                    !isScreenScrolled,
                })}
                asChild
              >
                <Link
                  href="#projects"
                  aria-label="Ir a la sección de proyectos"
                >
                  Proyectos
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "text-xl", {
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline":
                    !isScreenScrolled,
                })}
                asChild
              >
                <Link href="#contact" aria-label="Ir a la sección de ubicación">
                  Ubicación
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          className="hidden text-base lg:block"
          asChild
          aria-labelledby="botón de contacto"
        >
          <Link href="#contact" aria-label="Ir a la sección de contacto">
            Contáctanos
          </Link>
        </Button>

        <div className="block grow lg:hidden"></div>

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button
              aria-labelledby="botón de menú"
              className={cn("flex lg:hidden", {
                "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline":
                  !isScreenScrolled,
              })}
              size="icon"
            >
              <Menu />
            </Button>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader className="text-center sm:text-center">
              <DrawerTitle className="text-lg">Menú</DrawerTitle>
              <DrawerDescription className="text-base">Nexer</DrawerDescription>
            </DrawerHeader>

            <Link
              aria-label="Ir a la sección de acerca de nosotros"
              href="#about"
              className={cn(navigationMenuTriggerStyle(), "w-full text-base")}
              onClick={() => setOpen(false)}
            >
              Conócenos
            </Link>
            <Link
              aria-label="Ir a la sección de equipo"
              href="#team"
              className={cn(navigationMenuTriggerStyle(), "w-full text-base")}
              onClick={() => setOpen(false)}
            >
              Equipo
            </Link>
            <Link
              aria-label="Ir a la sección de servicios"
              href="#services"
              className={cn(navigationMenuTriggerStyle(), "w-full text-base")}
              onClick={() => setOpen(false)}
            >
              Servicios
            </Link>
            <Link
              aria-label="Ir a la sección de proyectos"
              href="#projects"
              className={cn(navigationMenuTriggerStyle(), "w-full text-base")}
              onClick={() => setOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              aria-label="Ir a la sección de contacto"
              href="#contact"
              className={cn(navigationMenuTriggerStyle(), "w-full text-base")}
              onClick={() => setOpen(false)}
            >
              Contacto
            </Link>
            <Link
              aria-label="Ir a la sección de ubicación"
              href="#contact"
              className={cn(navigationMenuTriggerStyle(), "w-full text-base")}
              onClick={() => setOpen(false)}
            >
              Ubicación
            </Link>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};
export default HomeHeader;
