import { Sheet, SheetDescription, SheetHeader, SheetTitle, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "../ui/separator";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavItems from "./NavItems";
import Link from "next/link";
import TopBar from "./TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope as faEnvelopeRegular,
  faHeart as faHeartRegular,
  faUser as faUserRegular,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone, faCaretDown, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import MobNavItems from "./MobNavItems";

const MobNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </SheetTrigger>
        <SheetContent aria-label="Navigation Menu" className="flex flex-col gap-6 bg-white md:hidden">
          <SheetHeader>
            <SheetTitle>
              {" "}
              <Link href={"/"} className="flex items-center gap-2">
                <span className="font-bold text-[1.3rem] font-sans">Hekto</span>
              </Link>
            </SheetTitle>
            <Separator />

            <MobNavItems />
          </SheetHeader>

          <div className="topBar flex flex-wrap items-center justify-between px-5 py-3">
            {/* Left Section */}
            <div className="flex gap-6 mb-6">
              <p className="flex gap-3 items-center">
                <FontAwesomeIcon icon={faEnvelopeRegular} size="sm" />
                maryumbrr@gmail.com
              </p>
              <p className="flex gap-3 items-center">
                <FontAwesomeIcon icon={faPhone} size="sm" />
                (12345)67890
              </p>
            </div>

            {/* Right Section */}
            <div className="flex gap-4 items-center flex-wrap sm:flex-nowrap">
              <p className="flex gap-2 items-center">
                English
                <FontAwesomeIcon icon={faCaretDown} size="sm" />
              </p>

              <p className="flex gap-2 items-center">
                USD
                <FontAwesomeIcon icon={faCaretDown} size="sm" />
              </p>

              <p className="flex gap-2 items-center">
                Login
                <FontAwesomeIcon icon={faUserRegular} size="sm" />
              </p>

              <p className="flex gap-2 items-center">
                Wishlist
                <FontAwesomeIcon icon={faHeartRegular} size="sm" />
              </p>

              <span className="ml-3">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              </span>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobNav;
