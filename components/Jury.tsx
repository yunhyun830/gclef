import { motion } from "framer-motion";
import { useState } from "react";
import { jury } from "./Descriptions";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Jury() {
  const {locale} = useRouter();

  const [juryCard, set_juryCard] = useState<string | null>(null);
  const getOverlay = (id: string) => {
    set_juryCard(id);
  };
  const overlayClose = () => {
    set_juryCard(null);
  };
  return (
    <>
      <div className="bg-[whitesmoke] lg:py-32 py-16 lg:px-24">
        <h1 className="lg:text-6xl text-4xl lg:text-left text-center text-[#fea116] tracking-wider font-thin">
          {locale === "en" ? "Jury" : "심사위원"}
        </h1>
        <h2 className="lg:text-2xl text-lg font-bold lg:text-left text-center">
          {locale === "en" ? "2022 Jury members" : "2022년 심사위원"}
        </h2>
        <div className="flex lg:justify-start justify-center items-center gap-2">
          <Link className="font-thin lg:text-base text-sm hover:text-[#fea116]" href="">
            {locale === "en" ? "Past Jury Members" : "역대 심사위원"}
            
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center space-y-10 mt-10">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
            {jury.map((data, number) => (
              <motion.div
                key={number}
                layoutId={data.id}
                whileHover={{ scale: 1.05, zIndex: 2 }}
                className="lg:w-64 lg:h-64 w-32 h-32 mx-auto bg-cover bg-no-repeat relative cursor-pointer shadow-xl"
                style={{ backgroundImage: `url(${data.photo})` }}
                onClick={() => getOverlay(data.id)}
              >
                <div className="w-full h-full bg-[rgba(0,0,0,0.6)] absolute flex justify-start items-end hover:bg-[rgba(0,0,0,0.2)] transition">
                  <h4 className="text-left lg:text-base text-[0.5rem] lg:p-10 p-3 text-white font-thin tracking-tighter">
                    {data.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {juryCard ? (
        <>
          <motion.div
            className="fixed w-full h-full bg-[rgba(255,255,255,0.6)] top-0 z-30 flex justify-center items-start transtion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => overlayClose()}
          >
            <div className="fixed flex-col bg-[whitesmoke] lg:top-16 top-32 shadow-2xl lg:w-4/5 w-[95%]">
              {juryCard === jury[0].id && (
                <>
                  <div className="flex">
                    <motion.div
                      layoutId={juryCard}
                      style={{ backgroundImage: `url(${jury[0].photo})` }}
                      className="lg:w-80 lg:h-80 w-44 h-44 bg-cover bg-no-repeat"
                    />
                    <div className="p-7 font-thin tracking-tight lg:w-[40rem] w-52 lg:h-80 h-44 flex flex-col lg:gap-10 gap-3 justify-center items-start">
                      <p className="mb-2 lg:text-2xl text-sm tracking-wider">
                        {jury[0].name} <br />( {jury[0].country} )
                      </p>
                      <p className="lg:text-lg text-xs">{jury[0].genre}</p>
                    </div>
                  </div>
                  <p className="bg-[#f0f0f0] whitespace-pre-wrap lg:p-10 p-5 font-thin lg:text-lg text-xs overflow-y-scroll lg:h-72 h-72">
                    {jury[0].description}
                  </p>
                </>
              )}
              {juryCard === jury[1].id && (
                <>
                  <div className="flex">
                    <motion.div
                      layoutId={juryCard}
                      style={{ backgroundImage: `url(${jury[1].photo})` }}
                      className="lg:w-80 lg:h-80 w-44 h-44 bg-cover bg-no-repeat"
                    />
                    <div className="p-7 font-thin tracking-tight lg:w-[40rem] w-52 lg:h-80 h-44 flex flex-col lg:gap-10 gap-3 justify-center items-start">
                      <p className="mb-2 lg:text-2xl text-sm tracking-wider">
                        {jury[1].name} <br />( {jury[1].country} )
                      </p>
                      <p className="lg:text-lg text-xs">{jury[1].genre}</p>
                    </div>
                  </div>
                  <p className="bg-[#f0f0f0] whitespace-pre-wrap lg:p-10 p-5 font-thin lg:text-lg text-xs overflow-y-scroll lg:h-72 h-72">
                    {jury[1].description}
                  </p>
                </>
              )}
              {juryCard === jury[2].id && (
                <>
                  <div className="flex">
                    <motion.div
                      layoutId={juryCard}
                      style={{ backgroundImage: `url(${jury[2].photo})` }}
                      className="lg:w-80 lg:h-80 w-44 h-44 bg-cover bg-no-repeat"
                    />
                    <div className="p-7 font-thin tracking-tight lg:w-[40rem] w-52 lg:h-80 h-44 flex flex-col lg:gap-10 gap-3 justify-center items-start">
                      <p className="mb-2 lg:text-2xl text-sm tracking-wider">
                        {jury[2].name} <br />( {jury[2].country} )
                      </p>
                      <p className="lg:text-lg text-xs">{jury[2].genre}</p>
                    </div>
                  </div>
                  <p className="bg-[#f0f0f0] whitespace-pre-wrap lg:p-10 p-5 font-thin lg:text-lg text-xs overflow-y-scroll lg:h-72 h-72">
                    {jury[2].description}
                  </p>
                </>
              )}
              {juryCard === jury[3].id && (
                <>
                  <div className="flex">
                    <motion.div
                      layoutId={juryCard}
                      style={{ backgroundImage: `url(${jury[3].photo})` }}
                      className="lg:w-80 lg:h-80 w-44 h-44 bg-cover bg-no-repeat"
                    />
                    <div className="p-7 font-thin tracking-tight lg:w-[40rem] w-52 lg:h-80 h-44 flex flex-col lg:gap-10 gap-3 justify-center items-start">
                      <p className="mb-2 lg:text-2xl text-sm tracking-wider">
                        {jury[3].name} <br />( {jury[3].country} )
                      </p>
                      <p className="lg:text-lg text-xs">{jury[3].genre}</p>
                    </div>
                  </div>
                  <p className="bg-[#f0f0f0] whitespace-pre-wrap lg:p-10 p-5 font-thin lg:text-lg text-xs overflow-y-scroll lg:h-72 h-72">
                    {jury[3].description}
                  </p>
                </>
              )}
              {juryCard === jury[4].id && (
                <>
                  <div className="flex">
                    <motion.div
                      layoutId={juryCard}
                      style={{ backgroundImage: `url(${jury[4].photo})` }}
                      className="lg:w-80 lg:h-80 w-44 h-44 bg-cover bg-no-repeat"
                    />
                    <div className="p-7 font-thin tracking-tight lg:w-[40rem] w-52 lg:h-80 h-44 flex flex-col lg:gap-10 gap-3 justify-center items-start">
                      <p className="mb-2 lg:text-2xl text-sm tracking-wider">
                        {jury[4].name} <br />( {jury[4].country} )
                      </p>
                      <p className="lg:text-lg text-xs">{jury[4].genre}</p>
                    </div>
                  </div>
                  <p className="bg-[#f0f0f0] whitespace-pre-wrap lg:p-10 p-5 font-thin lg:text-lg text-xs overflow-y-scroll lg:h-72 h-72">
                    {jury[4].description}
                  </p>
                </>
              )}
              {juryCard === jury[5].id && (
                <>
                  <div className="flex">
                    <motion.div
                      layoutId={juryCard}
                      style={{ backgroundImage: `url(${jury[5].photo})` }}
                      className="lg:w-80 lg:h-80 w-44 h-44 bg-cover bg-no-repeat"
                    />
                    <div className="p-7 font-thin tracking-tight lg:w-[40rem] w-52 lg:h-80 h-44 flex flex-col lg:gap-10 gap-3 justify-center items-start">
                      <p className="mb-2 lg:text-2xl text-sm tracking-wider">
                        {jury[5].name} <br />( {jury[5].country} )
                      </p>
                      <p className="lg:text-lg text-xs">{jury[5].genre}</p>
                    </div>
                  </div>
                  <p className="bg-[#f0f0f0] whitespace-pre-wrap lg:p-10 p-5 font-thin lg:text-lg text-xs overflow-y-scroll lg:h-72 h-72">
                    {jury[5].description}
                  </p>
                </>
              )}
              {juryCard === jury[6].id && (
                <>
                  <div className="flex">
                    <motion.div
                      layoutId={juryCard}
                      style={{ backgroundImage: `url(${jury[6].photo})` }}
                      className="lg:w-80 lg:h-80 w-44 h-44 bg-cover bg-no-repeat"
                    />
                    <div className="p-7 font-thin tracking-tight lg:w-[40rem] w-52 lg:h-80 h-44 flex flex-col lg:gap-10 gap-3 justify-center items-start">
                      <p className="mb-2 lg:text-2xl text-sm tracking-wider">
                        {jury[6].name} <br />( {jury[6].country} )
                      </p>
                      <p className="lg:text-lg text-xs">{jury[6].genre}</p>
                    </div>
                  </div>
                  <p className="bg-[#f0f0f0] whitespace-pre-wrap lg:p-10 p-5 font-thin lg:text-lg text-xs overflow-y-scroll lg:h-72 h-72">
                    {jury[6].description}
                  </p>
                </>
              )}
              {juryCard === jury[7].id && (
                <>
                  <div className="flex">
                    <motion.div
                      layoutId={juryCard}
                      style={{ backgroundImage: `url(${jury[7].photo})` }}
                      className="lg:w-80 lg:h-80 w-44 h-44 bg-cover bg-no-repeat"
                    />
                    <div className="p-7 font-thin tracking-tight lg:w-[40rem] w-52 lg:h-80 h-44 flex flex-col lg:gap-10 gap-3 justify-center items-start">
                      <p className="mb-2 lg:text-2xl text-sm tracking-wider">
                        {jury[7].name} <br />( {jury[7].country} )
                      </p>
                      <p className="lg:text-lg text-xs">{jury[7].genre}</p>
                    </div>
                  </div>
                  <p className="bg-[#f0f0f0] whitespace-pre-wrap lg:p-10 p-5 font-thin lg:text-lg text-xs overflow-y-scroll lg:h-72 h-72">
                    {jury[7].description}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </>
      ) : null}
    </>
  );
}
