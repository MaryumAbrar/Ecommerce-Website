"use client";

import { useState, useRef } from "react";
import { headerLinks, Pages } from "@/constants/header";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  const [homeHover, setHomeHover] = useState(false);
  const [pagesHover, setPagesHover] = useState(false);

  const homeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pagesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterHome = () => {
    if (homeTimeoutRef.current) clearTimeout(homeTimeoutRef.current);
    setHomeHover(true);
  };

  const handleMouseLeaveHome = () => {
    homeTimeoutRef.current = setTimeout(() => setHomeHover(false), 500);
  };

  const handleMouseEnterPages = () => {
    if (pagesTimeoutRef.current) clearTimeout(pagesTimeoutRef.current);
    setPagesHover(true);
  };

  const handleMouseLeavePages = () => {
    pagesTimeoutRef.current = setTimeout(() => setPagesHover(false), 500);
  };

  return (
    <ul className="md:flex-between flex flex-col w-full items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        if (link.label === "Home") {
          return (
            <li
              key={link.route}
              className="relative"
              onMouseEnter={handleMouseEnterHome}
              onMouseLeave={handleMouseLeaveHome}
            >
              <Link href={link.route} className={`text-[#FB2E86] flex items-center`}>
                {link.label} <FontAwesomeIcon icon={faCaretDown} size="sm" className="ml-1" />
              </Link>

              {/* Dropdown for Pages */}
              {homeHover && (
                <ul
                  className="absolute left-0 mt-2 -ml-2 z-50 bg-white shadow-lg rounded-md w-32"
                  onMouseEnter={handleMouseEnterHome}
                  onMouseLeave={handleMouseLeaveHome}
                >
                  <li
                    className="px-4 py-2 hover:bg-gray-100 relative"
                    onMouseEnter={handleMouseEnterPages}
                    onMouseLeave={handleMouseLeavePages}
                  >
                    Pages <FontAwesomeIcon icon={faCaretRight} size="sm" className="ml-1" />
                    {/* Submenu for Pages */}
                    {pagesHover && (
                      <ul
                        className="absolute left-full top-0 mt-0 bg-white shadow-lg rounded-md w-40"
                        onMouseEnter={handleMouseEnterPages} // Keep open while hovering
                        onMouseLeave={handleMouseLeavePages}
                      >
                        {Pages.map((link) => {
                          const ActiveLink = pathname === link.route;
                          return (
                            <li key={link.route} className="px-4 py-2 hover:bg-gray-100">
                              <Link className={`${ActiveLink ? "text-[#FB2E86]" : ""}`} href={link.route}>
                                {link.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
          );
        }

        return (
          <li
            key={link.route}
            className={`${isActive ? "text-[#FB2E86]" : ""} flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
