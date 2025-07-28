import Image from "next/image";
import Link from "next/link";
import React from "react"
import { Button } from "./ui/button";

const Footer = () => {
  return (
      <footer className="relative bg-gradient-to-br from-[#bdcdf4] via-[#758bc7] to-[#bdcdf4] border-[#758bc7] border-1  text-white rounded-2xl flex justify-between p-6 h-72">
        <div className='flex flex-col justify-between gap-4'>
          <div>
            <Link href="/">
              <Image src="/logo.svg" width={164} height={164} alt="Bishman Logo" />
            </Link>
          </div>
          

          <div className='text-[#cccdd0] text-sm flex items-center gap-4'>
            <Button className="bg-[#3D70BC] hover:bg-[#3D70BC] p-6 hover:shadow-xl font-normal rounded-[8px] text-lg">
              Contact Us
            </Button>

            <div>
              <p>2 Hotunui Drive, Mount Wellington, Auckland 1060</p>
              <p>&copy; BISHMAN LIMITED { new Date().getFullYear() }</p>
            </div>
          </div>
        </div>

        <div className='flex gap-16 items-start'>
          
        </div>

        {/* <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 text-sm">
          <Link href="https://github.com/cole-howard-nz/bishman-website">
            <div className="flex justify-center items-center text-[#294A7E]">
              <p>src</p>
            </div>
          </Link>
        </div> */}
      </footer>
  );
};

export default Footer;
