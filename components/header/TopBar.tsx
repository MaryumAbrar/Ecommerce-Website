'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope as faEnvelopeRegular,
  faHeart as faHeartRegular,
  faUser as faUserRegular,
} from '@fortawesome/free-regular-svg-icons';
import { faPhone, faCaretDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  return (
    <div className="w-full bg-[#7E33E0]">
      <div className="w-[92vw] mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl hidden md:flex items-center text-white justify-between py-2">
        
        {/* Left Section */}
        <div className="flex gap-6 sm:gap-10 flex-wrap sm:flex-nowrap">
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
    </div>
  );
};

export default TopBar;
