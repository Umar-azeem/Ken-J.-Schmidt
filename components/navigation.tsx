'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'ABOUT US',
      submenu: [
        { label: 'Ken J. Schmidt', href: '/about/ken' },
        { label: 'Mortgage', href: '/about/mortgage' },
      ],
    },
    {
      label: 'Business',
      submenu: [
        { label: 'Open an Account', href: '/business/account' },
        { label: 'Insurance', href: '/business/insurance' },
      ],
    },
    {
      label: 'Banking',
      submenu: [
        { label: 'Private Bank', href: '/banking/private' },
        { label: 'Investment Browsing', href: '/banking/investment' },
      ],
    },
    {
      label: 'communication',
      submenu: [
        { label: 'Learn', href: '/communication/learn' },
        { label: 'Online Services', href: '/communication/services' },
        { label: 'Customer Service', href: '/communication/support' },
        { label: 'Community', href: '/communication/community' },
        { label: 'Find a branch', href: '/communication/branches' },
      ],
    },
    { label: 'Security', href: '/security' },
  ]

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: '#236193' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="px-3 py-2 text-white hover:bg-[#1a4a7a] rounded-md transition-colors flex items-center gap-1">
                        {item.label}
                        <span className="text-xs">▼</span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48 bg-[#1a4a7a] border-[#0f3557]">
                      {item.submenu.map((subitem) => (
                        <DropdownMenuItem key={subitem.label} asChild className="hover:bg-[#0f3557]">
                          <Link
                            href={subitem.href}
                            className="cursor-pointer text-white hover:text-white"
                          >
                            {subitem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="px-3 py-2 text-white hover:bg-[#1a4a7a] rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-[#1a4a7a]"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 bg-white border-none">
                <SheetHeader>
                  <SheetTitle className="text-gray-900">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      {item.submenu ? (
                        <div className="space-y-2">
                          <button className="w-full text-left font-semibold text-gray-800 py-2">
                            {item.label}
                          </button>
                          <div className="pl-4 space-y-2">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.label}
                                href={subitem.href}
                                className="block text-gray-600 hover:text-gray-900 py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {subitem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href || '#'}
                          className="font-semibold text-gray-800 py-2 block"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
