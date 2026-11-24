"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Home,
  Info,
  Phone,
  Home as HomeIcon,
  Shield,
  Building2,
  TrendingUp,
  RefreshCw,
  Landmark,
  BarChart3,
  FileText as FileTextIcon,
  Activity,
  PhoneCall,
  SquareArrowOutUpRight,
  UserSearch,
  Loader,
  ChevronDown,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const loanPrograms = [
  {
    title: "FHA Loans",
    href: "/loan-programs?program=fha",
    description:
      "FHA loans are mortgages insured by the Federal Housing Administration (FHA).",
    icon: HomeIcon,
  },
  {
    title: "VA Home Loans",
    href: "/loan-programs?program=va",
    description:
      "VA Loans offer options for veterans, service members, and their surviving spouses.",
    icon: Shield,
  },

  {
    title: "Jumbo Loans",
    href: "/loan-programs?program=jumbo",
    description: "Financing solutions for high-value properties.",
    icon: TrendingUp,
  },
  {
    title: "Refinance",
    href: "/loan-programs?program=refinance",
    description:
      "Refinance and cash-out refinance loans can be beneficial for clients by potentially.",
    icon: RefreshCw,
  },

  {
    title: "USDA Loans",
    href: "/loan-programs?program=usda",
    description:
      "USDA loans are designed to help low- and moderate-income individuals and families buy homes in rural areas.",
    icon: FileTextIcon,
  },
];

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/kenSchmidt", label: "About", icon: Info },
  { href: "/construction", label: "Construction", icon: UserSearch },
  { href: "/physician-mortgage", label: "Physician Mortgage", icon: Loader },
  { href: "/contact", label: "Contact", icon: Phone },
];

const mobileLoanLinks = loanPrograms.map((p) => ({
  href: p.href,
  label: p.title,
  icon: p.icon,
}));

/* ================= LOAN PROGRAMS DROPDOWN (shadycn DropdownMenu) ================= */
function LoanProgramsDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          onPointerDown={(e) => e.preventDefault()}
          className="group flex items-center gap-1 rounded-xl px-6 py-2 text-md font-semibold text-white
            outline-none ring-0 transition-transform duration-300
            hover:-translate-y-1 hover:bg-white/10
            focus:bg-transparent focus-visible:ring-0
            data-[state=open]:bg-white/10"
        >
          Loan Programs
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={14}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        onCloseAutoFocus={(e) => e.preventDefault()}
        className="w-[780px] rounded-xl border border-gray-200 bg-white p-3 shadow-2xl"
      >
        <div className="grid grid-cols-3 gap-1">
          {loanPrograms.map((program) => (
            <DropdownMenuItem
              key={program.title}
              asChild
              className="cursor-pointer rounded-lg p-0 focus:bg-gray-100"
            >
              <Link
                href={program.href}
                onClick={() => setOpen(false)}
                className="group/item flex items-start gap-3 rounded-lg p-3 text-sm"
              >
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-[#000C1C]/10 text-[#000C1C] transition-colors group-hover/item:bg-[#000C1C] group-hover/item:text-white group-focus/item:bg-[#000C1C] group-focus/item:text-white">
                  <program.icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-semibold leading-none text-[#000C1C]">
                    {program.title}
                  </div>
                  <div className="line-clamp-2 text-xs leading-snug text-[#000C1C]/70">
                    {program.description}
                  </div>
                </div>
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function NavigationMenuDemo() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileLoanOpen, setMobileLoanOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="animated-navbar"
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 
        transition-all duration-500 ease-in-out
        ${scrolled ? "bg-[#000C1C] shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="lg:hidden bg-white hover:bg-white my-2 rounded-full text-[#000C1C] h-10 w-10"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <div className="flex flex-row gap-2 mx-2">
            <Button
              asChild
              variant="default"
              size="icon"
              className="lg:hidden bg-white hover:bg-white my-2 rounded-full text-[#000C1C] h-10 w-10"
            >
              <Link href="/contact" aria-label="Contact us">
                <SquareArrowOutUpRight className="h-6 w-6" />
              </Link>
            </Button>

            <Button
              asChild
              variant="default"
              size="icon"
              className="lg:hidden bg-white hover:bg-white my-2 rounded-full text-[#000C1C] h-10 w-10"
            >
              <a
                href="https://wa.me/16304798545"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#25D366]"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.859L0 24l6.335-1.51A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.732.889.939-3.63-.235-.374A9.818 9.818 0 1112 21.818z" />
                </svg>
              </a>
            </Button>
          </div>

          <SheetContent
            side="left"
            className="w-[300px] sm:w-[450px] bg-[#000C1C] text-white border-white/10 p-0 overflow-y-auto"
          >
            {/* Required for Radix accessibility */}
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>

            <div className="flex h-28 items-center border-b px-1">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/img/logo.png"
                  alt="logo"
                  width={192}
                  height={128}
                  className="w-48 h-32 object-contain"
                  priority
                />
              </Link>
            </div>

            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <link.icon className="h-5 w-5 text-white" />
                  {link.label}
                </Link>
              ))}

              <div>
                <button
                  type="button"
                  onClick={() => setMobileLoanOpen(!mobileLoanOpen)}
                  className="flex items-center justify-between w-full gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <div className="flex items-center gap-3">
                    <HomeIcon className="h-5 w-5 text-white" />
                    Loan Programs
                  </div>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileLoanOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {mobileLoanOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/20 pl-4">
                    {mobileLoanLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <link.icon className="h-4 w-4 text-white flex-shrink-0" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Button
                asChild
                className="bg-white text-[#000C1C] hover:bg-white hover:text-[#000C1C] px-6 py-3 rounded-xl font-semibold transition-transform duration-300 hover:-translate-y-1"
              >
                <Link
                  href="https://start.huntington.com/signup?referrerId=ken.j.schmidt@huntington.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Now
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:flex items-center">
          <div className="flex h-24 items-center mr-2">
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="logo"
                width={192}
                height={128}
                className="w-48 h-32 object-contain"
                priority
              />
            </Link>
          </div>

          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {/* About */}
              <NavigationMenuItem className="text-white bg-transparent text-md font-semibold rounded-xl transition-transform duration-300 hover:bg-white/10 hover:-translate-y-1 px-6 py-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="/kenSchmidt"
                    className="focus:bg-transparent hover:bg-transparent"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="bg-transparent">
                <LoanProgramsDropdown />
              </NavigationMenuItem>

              {/* Construction */}
              <NavigationMenuItem className="text-white bg-transparent text-md font-semibold rounded-xl transition-transform duration-300 hover:bg-white/10 hover:-translate-y-1 px-6 py-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="/construction"
                    className="focus:bg-transparent hover:bg-transparent"
                  >
                    Construction
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Physician Mortgage */}
              <NavigationMenuItem className="text-white bg-transparent text-md font-semibold rounded-xl transition-transform duration-300 hover:bg-white/10 hover:-translate-y-1 px-6 py-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="/physician-mortgage"
                    className="focus:bg-transparent hover:bg-transparent"
                  >
                    Physician Mortgage
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact Us */}
              <NavigationMenuItem className="text-white bg-transparent text-md font-semibold rounded-xl transition-transform duration-300 hover:bg-white/10 hover:-translate-y-1 px-6 py-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="focus:bg-transparent hover:bg-transparent"
                  >
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-3 text-white py-4">
          <Link
            href="tel:+16304798545"
            className="flex gap-2 items-center justify-center"
          >
            <PhoneCall className="h-5 w-5" />
            <span className="font-medium">630-479-8545</span>
          </Link>

          <Button
            asChild
            className="bg-white text-[#000C1C] hover:bg-white hover:text-[#000C1C] px-6 py-3 rounded-xl font-semibold transition-transform duration-300 hover:-translate-y-1"
          >
            <Link
              href="https://start.huntington.com/signup?referrerId=ken.j.schmidt@huntington.com"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
