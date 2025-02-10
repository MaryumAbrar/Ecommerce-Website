import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const BottomBar = () => {
  return (
    <div className="bg-gray-200 py-2">
      <div className="container max-w-5xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center">
        {/* Copyright Text */}
        <p className="text-gray-600 text-sm text-center w-full md:w-auto mb-2 md:mb-0">
          ©Webecy - All Rights Reserved
        </p>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" aria-label="Facebook" className=''>
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-gray-100 text-[10px] w-[10px] h-[10px] p-2 bg-[#151875] rounded-full hover:bg-[#14164d]"
            />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-gray-100 p-2 bg-[#151875] rounded-full hover:bg-[#14164d] text-[10px]"
            />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter">
            <FontAwesomeIcon
              icon={faTwitter}
             className="text-gray-100 p-2 bg-[#151875] rounded-full hover:bg-[#14164d] text-[10px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
