import Link from "next/link";
import { useRouter } from "next/router";

export default function Contact() {
  const { locale } = useRouter();
  return (
    <>
      <div
        className="lg:px-24 px-5 py-24 bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('/bgindex.jpg')",
        }}
      >s
        <h1 className="lg:text-6xl text-4xl lg:text-left text-center text-[#fea116] tracking-wider font-thin">
        {locale === "en" ? "Contact" : "오시는 길"}
        </h1>
        <div className="flex lg:flex-row flex-col justify-center items-center font-thin text-white tracking-tight mt-14 gap-16">
          <div className="flex flex-col justify-start items-start lg:w-96 w-80 h-72 border border-white px-5 gap-5 transition hover:text-[#fea116]">
            <h2 className="py-8 lg:text-2xl text-lg w-full text-center tracking-widest font-normal">
              {locale === "en" ? "Organization" : "주최"}
            </h2>
            <span className="flex justify-center items-center gap-3 lg:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#fea116"
                className="lg:w-6 lg:h-6 w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
              <p>{locale === "en" ? "MK Chamber Orchestra" : "MK 챔버 오케스트라"}</p>
            </span>
            <span className="flex justify-center items-center gap-3 lg:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#fea116"
                className="lg:w-6 lg:h-6 w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <p>+82-10-9355-6535</p>
            </span>
            <span className="flex justify-center items-center gap-3 lg:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#fea116"
                className="lg:w-6 lg:h-6 w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <p>moonviolon@naver.com</p>
            </span>
          </div>

          <div className="flex flex-col justify-start items-start lg:w-96 w-80 h-72 border border-white px-5 gap-5 transition hover:text-[#fea116]">
            <h2 className="py-8 lg:text-2xl text-lg w-full text-center tracking-widest font-normal">
                {locale === "en" ? "Sponsorship" : "주관"}
            </h2>
            <span className="flex justify-center items-center gap-3 lg:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#fea116"
                className="lg:w-6 lg:h-6 w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
              <p>Nationalux</p>
            </span>
            <span className="flex justify-center items-center gap-3 lg:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#fea116"
                className="lg:w-6 lg:h-6 w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <Link href="https://nationalux.com/" target="_blank">nationalux.com</Link>
            </span>
            <span className="flex justify-center items-center gap-3 lg:text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#fea116"
                className="lg:w-6 lg:h-6 w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <p>kmat@nationalux.cafe24.com</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
