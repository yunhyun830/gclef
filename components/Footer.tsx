import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Footer() {
  const { locale, locales, push } = useRouter();
  const router = useRouter();
  const [lanToggle, set_lanToggle] = useState<"kr" | "en">("en");

  const handleClick = (lan: any) => {
    set_lanToggle(lan);
    push("/", undefined, { locale: lan });
  };
  return (
    <div className="flex lg:px-36 lg:py-18 lg:justify-between lg:flex-row lg:space-y-0 space-y-5 flex-col py-20 px-16 bg-black items-center">
      <motion.img src="/mainlogo.png" className="lg:w-52 w-32" />
      <div className="flex lg:flex-row flex-col justify-center items-center gap-5">
        <span className="lg:text-sm text-xs text-gray-400">
          G-Clef copyright © 2022 Nationalux Canada, All rights reserved.
        </span>
        <select 
        className="bg-black text-white py-1 px-5 border border-white rounded-md outline-none"
        onChange={(lan) => handleClick(lan.target.value)}
        >
          <option value="en" selected={lanToggle === "en" ? true : false}>ENGLISH</option>
          <option value="kr" selected={lanToggle === "kr" ? true : false}>한국어</option>
        </select>
      </div>
    </div>
  );
}
