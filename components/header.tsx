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
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#1b4f78] focus:bg-[#1b4f78]">
                  About
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4 bg-white text-[#1b4f78]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/men/shirts">Ken J. Schmidt</Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/men/jeans"> Mortgagey</Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/men/shoes">Shoes</Link>
                      </NavigationMenuLink>
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
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#1b4f78] focus:bg-[#1b4f78]">
                  Women
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4 bg-white text-[#1b4f78]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/women/dresses">Dresses</Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/women/bags">Bags</Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/women/heels">Heels</Link>
                      </NavigationMenuLink>
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
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#1b4f78] focus:bg-[#1b4f78]">
                  Electronics
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4 bg-white text-[#1b4f78] ">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/electronics/mobile">Mobile</Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/electronics/laptop">Laptop</Link>
                      </NavigationMenuLink>
                    </li>

                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/electronics/watch">Smart Watch</Link>
                      </NavigationMenuLink>
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
            Contact
          </Link>
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
              Men
            </summary>

            <div className="ml-4 mt-2 flex flex-col gap-2">
              <Link href="/men/shirts">Shirts</Link>
              <Link href="/men/jeans">Jeans</Link>
              <Link href="/men/shoes">Shoes</Link>
            </div>
          </details>

          <details className="group">
            <summary className="cursor-pointer list-none hover:bg-[#1b4f78] px-3 py-2 rounded-md">
              Women
            </summary>

            <div className="ml-4 mt-2 flex flex-col gap-2">
              <Link href="/women/dresses">Dresses</Link>
              <Link href="/women/bags">Bags</Link>
              <Link href="/women/heels">Heels</Link>
            </div>
          </details>

          <details className="group">
            <summary className="cursor-pointer list-none hover:bg-[#1b4f78] px-3 py-2 rounded-md">
              Electronics
            </summary>

            <div className="ml-4 mt-2 flex flex-col gap-2">
              <Link href="/electronics/mobile">Mobile</Link>
              <Link href="/electronics/laptop">Laptop</Link>
              <Link href="/electronics/watch">Smart Watch</Link>
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
