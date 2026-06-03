"use client";

import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#236193] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/img/logo.png"
            alt="Shopique"
            width={40}
            height={40}
            priority
            className="h-24 w-48 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/"
            className="hover:bg-[#1b4f78] px-3 py-2 rounded-md transition"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-[#1b4f78] hover:text-white">
                About <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white">
              <DropdownMenuLabel>About Us</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/kenSchmidt" className="cursor-pointer">
                    Ken J. Schmidt
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/mortgage" className="cursor-pointer">
                    Mortgage
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Business Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-[#1b4f78] hover:text-white">
                Business <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white">
              <DropdownMenuLabel>Business Services</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/investments" className="cursor-pointer">
                    Investments
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/insurance" className="cursor-pointer">
                    Insurance
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Private Bank Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-[#1b4f78] hover:text-white">
                Private Bank <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              <DropdownMenuLabel>Private Banking</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/" className="cursor-pointer">
                    Open an Account
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/" className="cursor-pointer">
                    Banking
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/" className="cursor-pointer">
                    Borrowing
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Communication Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-[#1b4f78] hover:text-white">
                Communication <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white">
              <DropdownMenuLabel>Communication</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/" className="cursor-pointer">
                    Online Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/" className="cursor-pointer">
                    Learn
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/security"
            className="hover:bg-[#1b4f78] px-3 py-2 rounded-md transition"
          >
            Security
          </Link>

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
    <Link 
      href="/" 
      className="hover:bg-[#1b4f78] px-3 py-2 rounded-md"
      onClick={() => setOpen(false)}
    >
      Home
    </Link>

    <details className="group">
      <summary className="cursor-pointer list-none hover:bg-[#1b4f78] px-3 py-2 rounded-md">
        About
      </summary>
      <div className="ml-4 mt-2 flex flex-col gap-2">
        <Link 
          href="/kenSchmidt" 
          className="hover:underline px-3 py-1"
          onClick={() => setOpen(false)}
        >
          Ken J. Schmidt
        </Link>
        <Link 
          href="/mortgage" 
          className="hover:underline px-3 py-1"
          onClick={() => setOpen(false)}
        >
          Mortgagey
        </Link>
      </div>
    </details>

    <details className="group">
      <summary className="cursor-pointer list-none hover:bg-[#1b4f78] px-3 py-2 rounded-md">
        Business
      </summary>
      <div className="ml-4 mt-2 flex flex-col gap-2">
        <Link 
          href="/investments" 
          className="hover:underline px-3 py-1"
          onClick={() => setOpen(false)}
        >
          Investments
        </Link>
        <Link 
          href="/insurance" 
          className="hover:underline px-3 py-1"
          onClick={() => setOpen(false)}
        >
          Insurance
        </Link>
      </div>
    </details>

    <details className="group">
      <summary className="cursor-pointer list-none hover:bg-[#1b4f78] px-3 py-2 rounded-md">
        Private Bank
      </summary>
      <div className="ml-4 mt-2 flex flex-col gap-2">
        <Link 
          href="/" 
          className="hover:underline px-3 py-1"
          onClick={() => setOpen(false)}
        >
          Open an Account
        </Link>
        <Link 
          href="/" 
          className="hover:underline px-3 py-1"
          onClick={() => setOpen(false)}
        >
          Banking
        </Link>
        <Link 
          href="/" 
          className="hover:underline px-3 py-1"
          onClick={() => setOpen(false)}
        >
          Borrowing
        </Link>
      </div>
    </details>

    <details className="group">
      <summary className="cursor-pointer list-none hover:bg-[#1b4f78] px-3 py-2 rounded-md">
        Communication
      </summary>
      <div className="ml-4 mt-2 flex flex-col gap-2">
        <Link 
          href="/" 
          className="hover:underline px-3 py-1"
          onClick={() => setOpen(false)}
        >
          Online Services
        </Link>
        <Link 
          href="/" 
          className="hover:underline px-3 py-1"
          onClick={() => setOpen(false)}
        >
          Learn
        </Link>
      </div>
    </details>

    <Link 
      href="/security" 
      className="hover:bg-[#1b4f78] px-3 py-2 rounded-md"
      onClick={() => setOpen(false)}
    >
      Security
    </Link>

    <Link 
      href="/contact" 
      className="hover:bg-[#1b4f78] px-3 py-2 rounded-md"
      onClick={() => setOpen(false)}
    >
      Contact
    </Link>
  </div>
)}
    </nav>
  );
}