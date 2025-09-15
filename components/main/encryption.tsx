"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-[70vh] md:min-h-screen w-full h-full -z-20 py-10 md:py-0">
      <div className="absolute w-auto h-auto top-4 md:top-0 z-[5] px-4 md:px-0">
        <motion.div
          variants={slideInFromTop}
          className="text-3xl md:text-[40px] font-medium text-center text-gray-200"
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          security.
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center md:translate-y-[-50px] absolute z-[20] w-auto h-auto scale-90 md:scale-100">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-4 md:translate-y-5 transition-all duration-200 group-hover:translate-y-8 md:group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-3 py-1 md:px-[15px] md:py-[4px] z-[20] border my-4 md:my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-xs md:text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-4 md:bottom-[10px] px-2 md:px-[5px]">
        <div className="cursive text-base md:text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
