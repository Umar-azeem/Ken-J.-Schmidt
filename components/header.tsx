"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#236193] text-white shadow-md">
      <div className="max-w-7xl mx-auto  flex items-center justify-between">
        {/* Logo */}
        <div className="flex w-full h-auto items-center gap-2">
          <Image
            src="/img/logo.png"
            alt="Shopique"
            width={150}
            height={150}
            priority
          />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex  items-center gap-6">
          <Link
            href="/"
            className="hover:bg-[#1b4f78] px-3 py-2 rounded-md transition"
          >
            Home
          </Link>
          {/* Dropdown 1 */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#1b4f78]">
                  About
                </NavigationMenuTrigger>

                <NavigationMenuContent className="absolute">
                  <ul className="w-[220px] p-4 bg-white text-[#1b4f78] rounded-md shadow-md">
                    <li>
                      <Link href="/men/shirts">Ken J. Schmidt</Link>
                    </li>
                    <li>
                      <Link href="/men/jeans">Mortgagey</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Dropdown 2 */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#1b4f78]">
                  Business{" "}
                </NavigationMenuTrigger>

                <NavigationMenuContent className="absolute">
                  <ul className="w-[220px] p-4 bg-white text-[#1b4f78] rounded-md shadow-md">
                    <li>
                      <Link href="/men/shirts">Investments</Link>
                    </li>
                    <li>
                      <Link href="/men/jeans">Insurance</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Dropdown 3 */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#1b4f78]">
                  Private Bank
                </NavigationMenuTrigger>

                <NavigationMenuContent className="absolute">
                  <ul className="w-[220px] p-4 bg-white text-[#1b4f78] rounded-md shadow-md">
                    <li className="text-[#1b4f78]">
                      <Link href="/men/shirts">Open an Account</Link>
                    </li>
                    <li>
                      <Link href="/men/jeans">Banking</Link>
                    </li>
                    <li>
                      <Link href="/men/shoes">Borrowing</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#1b4f78]">
                  communication
                </NavigationMenuTrigger>

                <NavigationMenuContent className="absolute">
                  <ul className="w-[220px] p-4 bg-[#1b4f78] text-white rounded-md shadow-md">
                    <li>
                      <Link href="/men/shirts">Online Services</Link>
                    </li>
                    <li>
                      <Link href="/men/jeans">Learn</Link>
                    </li>
                    <li>
                      <Link href="/men/shoes">Online Services</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href="/contact"
            className="hover:bg-[#1b4f78] px-3 py-2 rounded-md transition"
          >
            Security
          </Link>
          <Link
            href="/contact"
            className="hover:bg-[#1b4f78] px-3 py-2 rounded-md transition"
          >
            Contact
          </Link>{" "}
        </div>
        {/* Mobile Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-[#1b4f78]"
          onClick={() => setOpen(!open)}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#236193] px-6 pb-4 flex flex-col gap-3">
          <Link href="/" className="hover:bg-[#1b4f78] px-3 py-2 rounded-md">
            Home
          </Link>

          <details className="group">
            <summary className="cursor-pointer list-none hover:bg-[#1b4f78] px-3 py-2 rounded-md">
              About
            </summary>

            <div className="ml-4 mt-2 flex flex-col gap-2">
              <Link href="/men/shirts">Ken J. Schmidt</Link>
              <Link href="/men/jeans">Mortgagey</Link>
            </div>
          </details>

          <details className="group">
            <summary className="cursor-pointer list-none hover:bg-[#1b4f78] px-3 py-2 rounded-md">
              Business
            </summary>

            <div className="ml-4 mt-2 flex flex-col gap-2">
              <Link href="/women/dresses">Investments</Link>
              <Link href="/women/bags">Insurance </Link>
              <Link href="/women/heels">Heels</Link>
            </div>
          </details>

          <details className="group">
            <summary className="cursor-pointer list-none hover:bg-[#1b4f78] px-3 py-2 rounded-md">
              Private Bank
            </summary>

            <div className="ml-4 mt-2 flex flex-col gap-2">
              <Link href="/electronics/mobile">Open an Account</Link>
              <Link href="/electronics/laptop">Banking</Link>
              <Link href="/electronics/watch">Borrowing</Link>
            </div>
          </details>
          <details className="group">
            <summary className="cursor-pointer list-none hover:bg-[#1b4f78] px-3 py-2 rounded-md">
              communication
            </summary>

            <div className="ml-4 mt-2 flex flex-col gap-2">
              <Link href="/electronics/mobile">Online Services</Link>
              <Link href="/electronics/laptop">Learn</Link>
              <Link href="/electronics/watch">Online Services</Link>
            </div>
          </details>

          <Link
            href="/contact"
            className="hover:bg-[#1b4f78] px-3 py-2 rounded-md"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
