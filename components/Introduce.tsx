import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IintroText {
  intro_1: string;
  intro_2: string;
  intro_3: string;
}

export default function Introduce() {
  const {locale} = useRouter();
  const [introText, set_introText] = useState<IintroText>();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/locales/${locale}/intro.json`);
      const json = await response.json();
      set_introText(json);
    })();
  }, [locale]);
  return (
    <div className="bg-[whitesmoke] lg:py-32 py-16 lg:px-24">
      <div>
        <h1 className="lg:text-6xl text-4xl lg:text-left text-center text-[#fea116] tracking-wider font-thin">
          G-Clef
        </h1>
        <h2 className="lg:text-2xl text-lg font-bold lg:text-left text-center">
          {locale === "en" ? "Online International Music Competition" : "온라인 국제 음악 콩쿠르"}
        </h2>
        <div className="text-left space-y-4 bg-white shadow-xl py-12 px-12 mt-10 lg:mx-0 mx-6 text-slate-800 font-thin lg:text-xl text-sm">
          <p>{introText?.intro_1}</p>
          <p>{introText?.intro_2}</p>
          <p>{introText?.intro_3}</p>
        </div>
      </div>
    </div>
  );
}
