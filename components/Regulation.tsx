import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IRegText {
  regulaion_1: string;
  regulaion_2: string;
  regulaion_3: string;
  regulaion_4: string;
  regulaion_5: string;
  regulaion_6: string;
  regulaion_7: string;
  regulaion_8: string;
  regulaion_9: string;
  regulaion_10: string;
  regulaion_11: string;
  regulaion_12: string;
  regulaion_13: string;
  regulaion_14: string;
  regulaion_15: string;
  regulaion_16: string;
  regulaion_17: string;
  regulaion_18: string;
  regulaion_19: string;
  regulaion_20: string;
  regulaion_21: string;
  regulaion_22: string;
  regulaion_23: string;
  regulaion_24: string;
  regulaion_25: string;
  regulaion_26: string;
  regulaion_27: string;
  regulaion_28: string;
  regulaion_29: string;
  regulaion_30: string;
  regulaion_31: string;
  regulaion_32: string;
  regulaion_33: string;
  regulaion_34: string;
  regulaion_35: string;
  regulaion_36: string;
  regulaion_37: string;
  regulaion_38: string;
}

export default function Regulation() {
  const { locale } = useRouter();
  const [regText, set_regText] = useState<IRegText>();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/locales/${locale}/regulation.json`);
      const json = await response.json();
      set_regText(json);
    })();
  }, [locale]);
  return (
    <div className="bg-[whitesmoke] lg:py-32 py-16 lg:px-24">
      <h1 className="lg:text-6xl text-4xl lg:text-left text-center text-[#fea116] tracking-wider font-thin">
        {locale === "en" ? "Regulation" : "콩쿠르 요강"}
      </h1>
      <h2 className="lg:text-2xl text-lg font-bold lg:text-left text-center">
        {regText?.regulaion_1}
      </h2>
      <div className="lg:mx-0 mx-6">
        <div className="bg-white shadow-xl mt-10 py-5 px-10">
          <h1 className="lg:text-3xl text-xl font-thin text-[#fea116]">
            {locale === "en" ? "Award" : "시상"}
          </h1>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            {locale === "en" ? "Grand Prix: 2000 US Dollars" : "$ 2000 (USD) 및 MK 챔버 오케스트라와의 협연비 부분 지원"}
          </p>
        </div>

        <div className="bg-white shadow-xl mt-10 py-5 px-10">
          <h1 className="lg:text-3xl font-thin text-[#fea116]">{locale === "en" ? "Section" : "참가부문"}</h1>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_2}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_3}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_4}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_5}
          </p>
        </div>

        <div className="bg-white shadow-xl mt-10 py-5 px-10">
          <h1 className="lg:text-3xl font-thin text-[#fea116]">{locale === "en" ? "Age Division" : "나이별 부문"}</h1>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_6}
            <br />
            {locale === "en" ? "(31st of Oct. 2024)" : "(2022년 10월 31일 기준)"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            Group A {locale === "en" ? "(8-9 years)" : "(만 8-9세)"}<br />
            Group B {locale === "en" ? "(10-11 years)" : "(만 10-11세)"}<br />
            Group C {locale === "en" ? "(12-13 years)" : "(만 12-13세)"}<br />
            Group D {locale === "en" ? "(14-15 years)" : "(만 14-15세)"}<br />
            Group E {locale === "en" ? "(16-17 years)" : "(만 16-17세)"}<br />
            Group F {locale === "en" ? "(18-19 years)" : "(만 18-19세)"}<br />
            Group G {locale === "en" ? "(20-25 years)" : "(만 20-25세)"}<br />
            Group H {locale === "en" ? "(26-31 years)" : "(만 26-31세)"}<br />
            Group I {locale === "en" ? "(over 32 years)" : "(만 32세 이상)"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_7}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_8}
          </p>
        </div>

        <div className="bg-white shadow-xl mt-10 py-5 px-10">
          <h1 className="lg:text-3xl font-thin text-[#fea116]">
            {locale === "en" ? "Required Repertoire" : "레퍼토리"}
          </h1>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            {locale === "en" ? "Free choice of 1 piece or several pieces" : "경연 곡목: 한 곡 또는 여러 곡"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          Group A : {locale === "en" ? "max. 6 min" : "6분 미만"}<br />
          Group B : {locale === "en" ? "max. 8 min" : "8분 미만"}<br />
          Group C : {locale === "en" ? "max. 10 min" : "10분 미만"}<br />
          Group D : {locale === "en" ? "max. 12 min" : "12분 미만"}<br />
          Group E : {locale === "en" ? "max. 15 min" : "15분 미만"}<br />
          Group F : {locale === "en" ? "max. 18 min" : "18분 미만"}<br />
          Group G : {locale === "en" ? "max. 20 min" : "20분 미만"}<br />
          Group H : {locale === "en" ? "max. 25 min" : "25분 미만"}<br />
          Group I : {locale === "en" ? "max. 30 min" : "30분 미만"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_9}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_10}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_11}
          </p>
        </div>

        <div className="bg-white shadow-xl mt-10 py-5 px-10">
          <h1 className="lg:text-3xl font-thin text-[#fea116]">
            {locale === "en" ? "Awards For Each Division" : "부문별 시상"}
          </h1>
          <h2 className="lg:text-xl font-thin text-[#fea116] mt-5">
            {locale === "en" ? "Announcement of the Result" : "결과"}
          </h2>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            {locale === "en" ? "Notification on the homepage : December 1, 2024" : "결과발표: 2024년 12월 1일"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            {locale === "en" ? "Awards for each division" : "부문별 시상"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_12} <br />
          {regText?.regulaion_13}
          </p>
          <h2 className="lg:text-xl font-thin text-[#fea116] mt-5">
            {locale === "en" ? "Netizen Special Prize" : "네티즌 특별상"}
          </h2>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_14}<br />
          {regText?.regulaion_15}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_16}
          </p>
          <h2 className="lg:text-xl font-thin text-[#fea116] mt-5">
            {locale === "en" ? "Teacher’s Award" : "지도자 상"}
          </h2>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_17}
          </p>
        </div>
        <div className="bg-white shadow-xl mt-10 py-5 px-10">
          <h1 className="lg:text-3xl font-thin text-[#fea116]">{locale === "en" ? "Application" : "접수"}</h1>
          <h2 className="lg:text-xl font-thin text-[#fea116] mt-5">
            {locale === "en" ? "Application Deadline" : "신청마감일"}
          </h2>
          <p className="mt-5 font-thin lg:text-lg text-sm">{locale === "en" ? "October 31, 2024" : "2024년 10월 31일"}</p>
          <h2 className="lg:text-xl font-thin text-[#fea116] mt-5">
            {locale === "en" ? "Application Method" : "신청방법"}
          </h2>
          <p className="mt-5 font-thin lg:text-lg text-sm">
            {locale === "en" ? "Participants must submit" : "이 홈페이지를 통해 신청서 작성 후 제출"}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_18}
            <br />
            {regText?.regulaion_19}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_20}
            <br />
            {regText?.regulaion_21} <br />
            {regText?.regulaion_22} <br />
            {regText?.regulaion_23} <br />
            {regText?.regulaion_24} <br />
            {regText?.regulaion_25}
            <br />
            {regText?.regulaion_26}
          </p>
          <p className="mt-5 font-thin lg:text-lg text-sm">
          {regText?.regulaion_27} <br />
          {regText?.regulaion_28}
          </p>
        </div>
        <div className="bg-yellow-50 shadow-xl mt-10 py-10 px-10 space-y-5 lg:text-base text-sm">
          <h2 className="">
          {regText?.regulaion_29}
          </h2>
          <h2>
          {regText?.regulaion_30}
          </h2>
          <h2>
          {regText?.regulaion_31}
          </h2>
          <h2>
          {regText?.regulaion_32}
          </h2>
          <h2>
          {regText?.regulaion_33}
          </h2>
          <h2>
          {regText?.regulaion_34}
          </h2>
          <h2>
          {regText?.regulaion_35}
          </h2>
          <h2>
          {regText?.regulaion_36}
          </h2>
          <h2>
          {regText?.regulaion_37}
          </h2>
          <h2>
          {regText?.regulaion_38}
          </h2>
        </div>
      </div>
    </div>
  );
}
