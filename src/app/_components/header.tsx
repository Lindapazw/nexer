"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
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
        "fixed top-0 z-20 mx-auto w-full transition-all duration-300",
        {
          "bg-white py-2": isScreenScrolled,
          "bg-black/25 py-4": !isScreenScrolled,
        },
      )}
    >
      <div className="container mx-auto flex items-center gap-8">
        <Link href="/#home">
          <NexerIcon
            className={cn("h-9 w-36", {
              "text-white": !isScreenScrolled,
              "text-accent": isScreenScrolled,
            })}
          />
        </Link>

        <NavigationMenu className="hidden max-w-full grow justify-start lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "text-base", {
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline":
                    !isScreenScrolled,
                })}
                asChild
              >
                <Link href="#about">Conócenos</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "text-base", {
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline":
                    !isScreenScrolled,
                })}
                asChild
              >
                <Link href="#team">Equipo</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "text-base", {
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline":
                    !isScreenScrolled,
                })}
                asChild
              >
                <Link href="#services">Servicios</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "text-base", {
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline":
                    !isScreenScrolled,
                })}
                asChild
              >
                <Link href="#projects">Proyectos</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          className="hidden text-base lg:block"
          asChild
          aria-labelledby="botón de contacto"
        >
          <Link href="#contact">Contáctanos</Link>
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
              href="#about"
              className={cn(navigationMenuTriggerStyle(), "w-full text-base")}
              onClick={() => setOpen(false)}
            >
              Conócenos
            </Link>
            <Link
              href="#team"
              className={cn(navigationMenuTriggerStyle(), "w-full text-base")}
              onClick={() => setOpen(false)}
            >
              Equipo
            </Link>
            <Link
              href="#services"
              className={cn(navigationMenuTriggerStyle(), "w-full text-base")}
              onClick={() => setOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#projects"
              className={cn(navigationMenuTriggerStyle(), "w-full text-base")}
              onClick={() => setOpen(false)}
            >
              Proyectos
            </Link>

            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button
                  aria-labelledby="botón de cerrar"
                  variant="outline"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "w-full text-base",
                  )}
                >
                  Cerrar
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};
export default HomeHeader;
