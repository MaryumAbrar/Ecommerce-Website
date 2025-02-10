import BreadCrumb from "@/components/common/BreadCrumb";
import Brands from "@/components/Home/Brands";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <BreadCrumb pageTitle="404 Not Found" />

      <div className="flex flex-col items-center max-w-6xl mx-auto justify-center">
        <Image src="/images/NotFound.png" alt="404" width={900} height={900} />

        <h3 className="mt-6 text-center md:text-start md:ml-32 text-2xl font-bold text-[#152970]">
          oops! The page you requested was not found!
        </h3>

        <Link className="px-9 mt-14 ml-2 py-3 text-white bg-[#FB2E86] hover:bg-[#8e2c56]" href={"/"}>
          Back to Home
        </Link>
      </div>

      <Brands />
    </div>
  );
};

export default NotFound;
