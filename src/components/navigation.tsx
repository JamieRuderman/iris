"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { photoSections } from "@/lib/photos";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <Link
            href="/"
            className="text-xl font-light tracking-wider uppercase hover:text-gray-600 transition-colors"
          >
            Iris Ruderman
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm uppercase tracking-wide hover:text-gray-600 transition-colors"
            >
              Overview
            </Link>

            {/* Work Dropdown */}
            <div className="relative group">
              <button className="text-sm uppercase tracking-wide hover:text-gray-600 transition-colors">
                Work
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {photoSections.map((section) => (
                    <Link
                      key={section.id}
                      href={`/gallery/${section.id}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    >
                      {section.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-sm uppercase tracking-wide hover:text-gray-600 transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-sm uppercase tracking-wide hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden border-t border-gray-200 transition-all duration-300 ease-in-out",
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm uppercase tracking-wide hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Overview
            </Link>

            <div className="space-y-2">
              <div className="text-sm uppercase tracking-wide font-medium text-gray-900">
                Work
              </div>
              <div className="pl-4 space-y-2">
                {photoSections.map((section) => (
                  <Link
                    key={section.id}
                    href={`/gallery/${section.id}`}
                    className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {section.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="block text-sm uppercase tracking-wide hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="block text-sm uppercase tracking-wide hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}