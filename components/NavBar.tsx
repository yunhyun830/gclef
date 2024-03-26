import { useRouter } from "next/router";
import { cls } from "./utils";
import { motion, useAnimation, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Apply from "./Apply";

const ScrollUp = {
  top: {
    opacity: "0",
  },
  scroll: {
    opacity: "1",
  },
};

export default function NavigationBar() {
  const router = useRouter();
  const {locale} = useRouter();
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const buttonAnimation = useAnimation();
  const [toggleMenu, set_toggleMenu] = useState<boolean>(false);
  const [overlay, setOverlay] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
        buttonAnimation.start("scroll");
      } else {
        navAnimation.start("top");
        buttonAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation, buttonAnimation]);

  const mobileMenu = () => {
    set_toggleMenu((prev) => !prev);
  };

  return (
    <>
      <div>
        <motion.nav
          animate={navAnimation}
          transition={{ duration: 0.1 }}
          initial={"top"}
          className="fixed top-0 w-full z-20 flex flex-col bg-[#0f172be6]"
        >
          <div className="flex justify-between items-center lg:px-0 px-5">
            <Link href="/">
              <motion.img
                src="/mainlogo.png"
                className="lg:w-40 w-28 my-8 lg:ml-24"
              />
            </Link>
            <div className="lg:flex hidden justify-between text-sm items-center text-white space-x-10">
              <Link
                href="#jury"
                className="flex flex-col items-center space-y-2 hover:text-[#fea116] transition"
              >
                <span>{locale === "en" ? "JURY" : "심사위원"}</span>
              </Link>
              <Link
                href="#past"
                className="flex flex-col items-center space-y-2 hover:text-[#fea116] transition"
              >
                <span>{locale === "en" ? "PAST WINNERS" : "역대 수상자"}</span>
              </Link>
              <Link
                href="#regulation"
                className="flex flex-col items-center space-y-2 hover:text-[#fea116] transition"
              >
                <span>{locale === "en" ? "REGULATION" : "콩쿠르 요강"}</span>
              </Link>
              <Link
                href="#notice"
                className="flex flex-col items-center space-y-2 hover:text-[#fea116] transition"
              >
                <span>{locale === "en" ? "NOTICE" : "공지사항"}</span>
              </Link>
              <Link
                href="#contact"
                className="flex flex-col items-center space-y-2 hover:text-[#fea116] transition"
              >
                <span>{locale === "en" ? "CONTACT" : "오시는길"}</span>
              </Link>

              <button 
              onClick={() => setOverlay(true)}
              className="bg-[#fea116] py-8 px-20 text-white text-2xl tracking-wider flex justify-center items-center gap-3 hover:bg-[#fdad35] transition">
                {locale === "en" ? "APPLY" : "신청하기"}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>

            </div>
            <button className="text-white lg:hidden block" onClick={mobileMenu}>
              {toggleMenu ? (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </motion.svg>
              )}
            </button>
          </div>
          {toggleMenu ? (
            <motion.div className={`text-white lg:hidden flex flex-col text-xs`}>
              <Link
                href="/notice"
                className="text-right px-5 py-5 hover:text-[#fea116]"
              >
                <span>{locale === "en" ? "JURY" : "심사위원"}</span>
              </Link>
              <Link
                href="/past"
                className="text-right px-5 py-5 hover:text-[#fea116]"
              >
                <span>{locale === "en" ? "PAST WINNERS" : "역대 수상자"}</span>
              </Link>
              <Link
                href="/past"
                className="text-right px-5 py-5 hover:text-[#fea116]"
              >
                <span>{locale === "en" ? "REGULATION" : "콩쿠르 요강"}</span>
              </Link>
              <Link
                href="/past"
                className="text-right px-5 py-5 hover:text-[#fea116]"
              >
                <span>{locale === "en" ? "NOTICE" : "공지사항"}</span>
              </Link>
              <Link
                href="/past"
                className="text-right px-5 py-5 hover:text-[#fea116]"
              >
                <span>{locale === "en" ? "CONTACT" : "오시는 길"}</span>
              </Link>
              <button 
              onClick={() => setOverlay(true)}
              className="bg-[#fea116] py-6 text-white text-lg tracking-wider flex justify-center items-center gap-3 hover:bg-[#fdad35] transition">
                {locale === "en" ? "APPLY" : "신청하기"}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>

            </motion.div>
          ) : null}
        </motion.nav>
      </div>
      <motion.button
        onClick={scrollToTop}
        variants={ScrollUp}
        initial={{ opacity: 0 }}
        animate={buttonAnimation}
        transition={{ duration: 0.1 }}
        className="fixed bottom-4 right-4 bg-[#fea116] lg:p-3 p-2 hover:bg-[#fdad35] transition shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </motion.button>

      {overlay ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[rgba(0,0,0,0.6)] fixed w-full h-full top-0 z-30 transition flex flex-col justify-center items-center px-3"
          >
            <h2
              className="cursor-pointer pb-2 lg:w-[75rem] w-full flex justify-end items-end"
              onClick={() => setOverlay(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="lg:w-8 lg:h-8 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </h2>
            <Apply />
          </motion.div>
        </>
      ) : null}
    </>
  );
}
