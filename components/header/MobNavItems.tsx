"use client";

import { useState } from "react";
import { headerLinks, Pages } from "@/constants/header";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobNavItems = () => {
  const pathname = usePathname();
  const [homeClicked, setHomeClicked] = useState(false);
  const [pagesClicked, setPagesClicked] = useState(false);

  return (
    <ul className="flex flex-col w-full items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        if (link.label === "Home") {
          return (
            <li key={link.route} className="relative">
              <div className="flex items-center gap-5">
                <Link href={link.route} className={`text-[#FB2E86]`}>
                  {link.label}
                </Link>
                <FontAwesomeIcon
                  onClick={() => setHomeClicked((prevState) => !prevState)}
                  icon={homeClicked ? faCaretDown : faCaretRight}
                  size="sm"
                  className="ml-1 mt-1 cursor-pointer"
                />
              </div>

              {/* Dropdown for Pages */}
              {homeClicked && (
                <ul className="relative mt-2 -ml-2 z-50">
                  <li className="text-start px-4 py-2 relative w-60">
                    <div className="flex items-center gap-5">
                      Pages{" "}
                      <FontAwesomeIcon
                        onClick={() => setPagesClicked((prevState) => !prevState)}
                        icon={pagesClicked ? faCaretDown : faCaretRight}
                        size="sm"
                        className="ml-1 cursor-pointer"
                      />
                    </div>
                    {/* Submenu for Pages */}
                    {pagesClicked && (
                      <ul className="relative top-0 mt-0  w-52">
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

export default MobNavItems;
