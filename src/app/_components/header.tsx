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

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Desarrollo de Proyectos",
    href: "#services",
    description:
      "Identificamos, diseñamos y desarrollamos proyectos desde su fase inicial hasta su puesta en marcha, asegurando la viabilidad técnica.",
  },
  {
    title: "Planificación Estratégica",
    href: "#services",
    description:
      "Creamos estrategias adaptadas para maximizar el impacto y la eficiencia de los proyectos, alineándonos con objetivos de sostenibilidad.",
  },
  {
    title: "Consultoría Energética",
    href: "#services",
    description:
      "Como expertos involucrados con el sector, brindamos asesoramiento especializado adaptándonos a las necesidades de nuestros clientes",
  },
];

const projects: { title: string; href: string; description: string }[] = [
  {
    title: "Proyecto REPSOL",
    href: "#projects",
    description:
      "Identificamos, diseñamos y desarrollamos proyectos desde su fase inicial hasta su puesta en marcha, asegurando la viabilidad técnica.",
  },
  {
    title: "Proyecto REPSOL 1",
    href: "#projects",
    description:
      "Creamos estrategias adaptadas para maximizar el impacto y la eficiencia de los proyectos, alineándonos con objetivos de sostenibilidad.",
  },
  {
    title: "Proyecto REPSOL 2",
    href: "#projects",
    description:
      "Como expertos involucrados con el sector, brindamos asesoramiento especializado adaptándonos a las necesidades de nuestros clientes",
  },
];

const HomeHeader = () => {
  const isScreenScrolled = IsScreenScrolled();

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
              <NavigationMenuTrigger
                className={cn("text-base", {
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline data-[state=open]:bg-transparent":
                    !isScreenScrolled,
                })}
              >
                Servicios
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-[400px] flex-col gap-3 p-4 md:w-[500px] lg:w-[600px]">
                  {services.map((service) => (
                    <li key={service.title}>
                      <NavigationMenuLink asChild>
                        <Button
                          asChild
                          variant="secondary"
                          className="flex h-min w-full flex-col items-start gap-2 text-sm"
                        >
                          <Link href={service.href}>
                            <span className="font-semibold">
                              {service.title}
                            </span>
                            <span className="line-clamp-1 w-full">
                              {service.description}
                            </span>
                          </Link>
                        </Button>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn("text-base", {
                  "bg-transparent text-white hover:bg-transparent hover:underline focus:bg-transparent focus:underline data-[state=open]:bg-transparent":
                    !isScreenScrolled,
                })}
              >
                Proyectos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-[400px] flex-col gap-3 p-4 md:w-[500px] lg:w-[600px]">
                  {projects.map((proj) => (
                    <li key={proj.title}>
                      <NavigationMenuLink asChild>
                        <Button
                          asChild
                          variant="secondary"
                          className="flex h-min w-full flex-col items-start gap-2 text-sm"
                        >
                          <Link href={proj.href}>
                            <span className="font-semibold">{proj.title}</span>
                            <span className="line-clamp-1 w-full">
                              {proj.description}
                            </span>
                          </Link>
                        </Button>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="hidden text-base lg:block" asChild>
          <Link href="#contact">Contáctanos</Link>
        </Button>

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
