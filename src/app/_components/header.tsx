"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { IsScreenScrolled } from "./header.hooks";
import NexerIcon from "./nexer-icon";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

const HomeHeader = () => {
  const isScreenScrolled = IsScreenScrolled();

  return (
    <header
      className={cn(
        "fixed top-0 z-20 mx-auto w-full max-w-screen-3xl transition-all duration-300",
        {
          "bg-white py-2": isScreenScrolled,
          "bg-black/25 py-4": !isScreenScrolled,
        },
      )}
    >
      <div className="container mx-auto flex items-center gap-8">
        <NexerIcon
          className={cn("h-9 w-36", {
            "text-white": !isScreenScrolled,
            "text-accent": isScreenScrolled,
          })}
        />

        <NavigationMenu className="hidden max-w-full grow justify-start lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), {
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
                className={cn(navigationMenuTriggerStyle(), {
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline":
                    !isScreenScrolled,
                })}
                asChild
              >
                <Link href="#team">Equipo</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn({
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline data-[state=open]:bg-transparent":
                    !isScreenScrolled,
                })}
              >
                Servicios
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-[400px] flex-col gap-3 p-4 md:w-[500px] lg:w-[600px]">
                  {components.map((comp) => (
                    <li key={comp.title}>
                      <NavigationMenuLink
                        href={comp.href}
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <span>{comp.title}</span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn({
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline data-[state=open]:bg-transparent":
                    !isScreenScrolled,
                })}
              >
                Proyectos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-[400px] flex-col gap-3 p-4 md:w-[500px] lg:w-[600px]">
                  {components.map((comp) => (
                    <li key={comp.title}>
                      <NavigationMenuLink
                        href={comp.href}
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <span>{comp.title}</span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="hidden lg:block">Contáctanos</Button>

        <div className="block grow lg:hidden"></div>

        <Button
          className={cn("flex lg:hidden", {
            "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline":
              !isScreenScrolled,
          })}
          size="icon"
        >
          <Menu />
        </Button>
      </div>
    </header>
  );
};
export default HomeHeader;
