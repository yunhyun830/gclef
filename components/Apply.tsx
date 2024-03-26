import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { cls } from "./utils";
import axios from "axios";
import { useRouter } from "next/router";

interface FormValues {
    firstName: string;
    lastName: string;
    birthday: string;
    school: string;
    ageProof: string;
    ageProofText: string;
    teamMember: string;
    section: string;
    ageCategory: string;
    email: string;
    phone: string;
    videoLink: string;
    depostisor: string;
    teacher: string;
    teacherEmail: string;
    performingPiece: string;
    performingDuration: string;
}

export default function Apply() {
    const {locale} = useRouter();
    const [submitLoading, set_submitLoading] = useState<boolean>(false);
    const [submitPopup, set_submitPopup] = useState<boolean>(false);
    const [selectImg, set_selectImg] = useState("");
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "all",
    });
    const onVaild = async (data: any) => {
        set_submitLoading(true);
        const formData = new FormData();
    for( const file of data.ageProof){
      formData.append('file', file);
    }
    formData.append('upload_preset', 'richter');
    const datas = await fetch('https://api.cloudinary.com/v1_1/dv7hpu5oq/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

        const body = {
            firstName: data.firstName,
            lastName: data.lastName,
            birthday: data.birthday,
            school: data.school,
            ageProof: datas.secure_url,
            teamMember: data.teamMember,
            section: data.section,
            ageCategory: data.ageCategory,
            email: data.email,
            phone: data.phone,
            videoLink: data.videoLink,
            depostisor: data.depostisor,
            teacher: data.teacher,
            teacherEmail: data.teacherEmail,
            performingPiece: data.performingPiece,
            performingDuration: data.performingDuration,
        };
        try {
            const response = await fetch("/api/appForm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
            //.then(await axios.post("/api/image", data.ageProof)); //이미지 업로드 백엔드
            if (response.status !== 200) {
                console.log("something went wrong");
                //set an error banner here
            }
            //check response, if success is false, dont take them to success page
        } catch (error) {
            console.log("there was an error submitting", error);
        }
        set_submitLoading(false);
        set_submitPopup(true);
        reset();
        set_selectImg("");
    };
    return (
        <>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="lg:w-[75rem] w-full z-30 border border-white"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url('/bgindex.jpg')",
                }}
            >
                <h2 className="text-white p-6 tracking-widest lg:text-4xl text-xl font-thin">
                    {locale === "en" ? "APPLICATION" : "참가 신청서"}
                    <p className="lg:text-lg text-sm tracking-tight">{locale === "en" ? "( * Required Field )" : "( * 필수 입력 항목 )"}</p>
                </h2>
                <form onSubmit={handleSubmit(onVaild)}>
                    <div className="lg:h-[34rem] h-[30rem] flex flex-col justify-start lg:p-10 p-3 overflow-y-scroll tracking-tighter">
                        <input
                            placeholder={locale === "en" ? "* First Name" : "* 이름"}
                            type="text"
                            className="py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            autoComplete="off"
                            {...register("firstName", {
                                required: locale === "en" ? "Please write down your name." : "이름을 적어주세요.",
                                validate: {
                                    textCheck: (value) =>
                                        !value.includes(">" || "<" || "?" || "/" || "@" || "=") ||
                                        "Cannot special text.",
                                },
                            })}
                        />
                        {errors.firstName ? (
                            <p className="text-xs mt-3 text-[#fea116] tracking-normal">
                                {errors.firstName.message}
                            </p>
                        ) : null}

                        <input
                            placeholder={locale === "en" ? "* Last Name" : "* 성"}
                            type="text"
                            className="mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            autoComplete="off"
                            {...register("lastName", {
                                required: locale === "en" ? "Please write down your last name." : "성을 적어주세요.",
                                validate: {
                                    textCheck: (value) =>
                                        !value.includes(">" || "<" || "?" || "/" || "@" || "=") ||
                                        "Cannot special text.",
                                },
                            })}
                        />
                        {errors.lastName ? (
                            <p className="text-xs mt-3 text-[#fea116] tracking-normal">
                                {errors.lastName.message}
                            </p>
                        ) : null}
                        <input
                            type="text"
                            placeholder={locale === "en" ? "* Birthday" : "* 생년월일"}
                            className="mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            autoComplete="off"
                            {...register("birthday", {
                                required: locale === "en" ? "Please write down your birthday." : "생년월일을 적어주세요.",
                            })}
                        />
                        {errors.birthday ? (
                            <p className="text-xs mt-3 text-[#fea116] tracking-normal">
                                {errors.birthday.message}
                            </p>
                        ) : null}
                        <input
                            type="text"
                            placeholder={locale === "en" ? "Current School" : "소속 학교"}
                            className="mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            autoComplete="off"
                            {...register("school")}
                        />
                        <select
                            className="focus:outline-none mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            {...register("section", {
                                required: locale === "en" ? "Please choose your section." : "경연부문을 선택하세요.",
                            })}
                        >
                            <option selected value="">{locale === "en" ? "* Section" : "* 경연부문"}</option>
                            <option value="Participation Sectors">Participation Sectors</option>
                            <option value="Piano Solo">Piano Solo</option>
                            <option value="Piano Concerto">Piano Concerto</option>
                            <option value="Piano Duo">Piano Duo</option>
                            <option value="Piano Chamber Music">Piano Chamber Music</option>
                            <option value="String & Wind Instruments Solo">String & Wind Instruments Solo</option>
                            <option value="Chamber Music Duo">Chamber Music Duo</option>
                            <option value="Chamber Music Trio">Chamber Music Trio</option>
                            <option value="Chamber Music Quartet">Chamber Music Quartet</option>
                            <option value="Chamber Music Quintet">Chamber Music Quintet</option>
                            <option value="Chamber Music Others">Chamber Music Others</option>
                        </select>
                        {errors.section ? (
                            <p className="text-xs mt-3 text-[#fea116] tracking-normal">
                                {errors.section.message}
                            </p>
                        ) : null}
                        <select
                            className="focus:outline-none py-3 mt-10 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            {...register("ageCategory", {
                                required: locale === "en" ? "Please choose your category." : "나이별 부문을 선택하세요.",
                            })}
                        >
                            <option selected value="">{locale === "en" ? "* Age Division" : "* 나이별 부문"}</option>
                            <option value="Group A">Group A ( 8 ~ 9 years )</option>
                            <option value="Group B">Group B ( 10 ~ 9 years )</option>
                            <option value="Group C">Group C ( 12 ~ 9 years )</option>
                            <option value="Group D">Group D ( 14 ~ 9 years )</option>
                            <option value="Group E">Group E ( 16 ~ 9 years )</option>
                            <option value="Group F">Group F ( 18 ~ 9 years )</option>
                            <option value="Group G">Group G ( 20 ~ 9 years )</option>
                            <option value="Group H">Group H ( 26 ~ 9 years )</option>
                            <option value="Group I">Group I ( 32 years ~ )</option>
                        </select>
                        {errors.ageCategory ? (
                            <p className="text-xs mt-3 text-[#fea116] tracking-normal">
                                {errors.ageCategory.message}
                            </p>
                        ) : null}
                        <div className="flex justify-start items-center lg:gap-5 gap-2">
                            <input
                                type="text"
                                autoComplete="off"
                                readOnly
                                className={cls(
                                    "py-3 px-5 shadow-md bg-[#00000033] border border-white transition lg:text-sm text-xs tracking-tighter w-3/4 mt-10",
                                    errors.ageProof ? "text-[#fea116]" : "text-white"
                                )}
                                {...register("ageProofText", {
                                    required: true,
                                })}
                                value={selectImg === "" ?
                                    locale === "en" ? "* Upload your Image file." : "* 이미지를 업로드 하세요."
                                    : selectImg}
                            />
                            <label
                                htmlFor="uploadImg"
                                className="mt-10 cursor-pointer w-1/4 text-center border border-[#fea116] lg:text-sm text-xs bg-[#00000033] py-3 text-[#fea116] tracking-wider hover:bg-[#00000080] transition"
                            >
                                {locale === "en" ? "File" : "파일"}
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                id="uploadImg"
                                className="opacity-0 w-[0.1px]"
                                {...register("ageProof", {
                                    required: true,
                                })}
                                onChange={({ target }: any) => {
                                    const file = target.files[0]?.name;
                                    if (file === undefined) set_selectImg("");
                                    if (file) set_selectImg(file);
                                }}
                            />
                        </div>
                        <p className="lg:text-xs text-[0.5rem] mt-2 tracking-tight text-white">
                            {locale === "en" ?
                                "Attachment for the proof your age ( Scan the first page of your passport.)" :
                                "나이 증명서 첨부 (주민등록증, 여권 등)"
                            }
                        </p>
                        <input
                            type="text"
                            placeholder={locale === "en"
                                ? "Team Member Personal Information"
                                : "팀원 인적사항"}
                            className="mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            autoComplete="off"
                            {...register("teamMember")}
                        />

                        <input
                            type="text"
                            placeholder={locale === "en" ? "* E-mail" : "* 이메일"}
                            className="mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            autoComplete="off"
                            {...register("email", {
                                required: locale === "en" ? "Please write down your Email." : "이메일을 적어주세요",
                                validate: {
                                    must: (value) => value.includes("@") || "Email must have '@'",
                                },
                            })}
                        />
                        {errors.email ? (
                            <p className="text-xs mt-3 text-[#fea116] tracking-normal">{errors.email.message}</p>
                        ) : null}
                        <input
                            type="text"
                            placeholder={locale === "en"
                                ? "* Phone-number ( with the Country Code )"
                                : "* 전화번호"}
                            className="mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            autoComplete="off"
                            {...register("phone", {
                                required: locale === "en" ? "Please write down your phone number." : "전화번호를 적어주세요.",
                            })}
                        />
                        {errors.phone ? (
                            <p className="text-xs mt-3 text-[#fea116] tracking-normal">{errors.phone.message}</p>
                        ) : null}
                        <input
                            type="text"
                            placeholder={locale === "en" ? "* Video link of your performance" : "* 비디오 링크"}
                            className="mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            autoComplete="off"
                            {...register("videoLink", {
                                required: locale === "en" ? "Please write down your link." : "비디오 링크를 적어주세요.",
                            })}
                        />
                        {errors.videoLink ? (
                            <p className="text-xs mt-3 text-[#fea116] tracking-normal">
                                {errors.videoLink.message}
                            </p>
                        ) : null}
                        <input
                            type="text"
                            placeholder={locale === "en"
                                ? "* Name of the depositor ( Application Fee )"
                                : "* 입금자명"}
                            className="mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            autoComplete="off"
                            {...register("depostisor", {
                                required: locale === "en" ? "Please write down depostisor name." : "입금자명을 적어주세요.",
                            })}
                        />
                        {errors.depostisor ? (
                            <p className="text-xs mt-3 text-[#fea116] tracking-normal">
                                {errors.depostisor.message}
                            </p>
                        ) : null}
                        <input
                            type="text"
                            placeholder={locale === "en" ? "* Current Teacher" : "* 지도자 (현재)"}
                            className="mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            autoComplete="off"
                            {...register("teacher", {
                                required: locale === "en" ? "Please write down your name of current teacher." : "현재 지도자의 성함을 적어주세요.",
                            })}
                        />
                        {errors.teacher ? (
                            <p className="text-xs mt-3 text-[#fea116] tracking-normal">
                                {errors.teacher.message}
                            </p>
                        ) : null}
                        <input
                            type="text"
                            placeholder={locale === "en"
                                ? "* E-mail address of the Current Teacher"
                                : "* 지도자 이메일"}
                            className="mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white"
                            autoComplete="off"
                            {...register("teacherEmail", {
                                required: locale === "en" ? "Please write down teacher_email." : "지도자의 이메일을 적어주세요.",
                                validate: {
                                    must: (value) => value.includes("@") || "Email must have '@'",
                                },
                            })}
                        />
                        {errors.teacherEmail ? (
                            <p className="text-xs mt-3 text-[#fea116] tracking-normal">
                                {errors.teacherEmail.message}
                            </p>
                        ) : null}
                        <div className="flex gap-5">
                            <input
                                type="text"
                                className="mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white w-1/2"
                                placeholder={locale === "en" ? "* Piece" : "* 연주곡목"}
                                autoComplete="off"
                                {...register("performingPiece", {
                                    required: locale === "en" ? "Please write down your performing piece." : "연주곡목을 적어주세요.",
                                })}
                            />
                            <input
                                type="text"
                                className="mt-10 py-3 px-5 transition lg:text-sm text-xs mb-2 tracking-tight bg-[#00000033] focus:bg-[#00000080] border border-white placeholder:text-white text-white w-1/2"
                                placeholder={
                                    locale === "en"
                                        ? "* Duration ( mm : ss )"
                                        : "* 연주길이 ( mm : ss )"
                                }
                                autoComplete="off"
                                {...register("performingDuration", {
                                    required: locale === "en" ? "Please write down your performing duration." : "연주길이를 적어주세요.",
                                })}
                            />
                        </div>
                        {errors.performingPiece ? (
                            errors.performingDuration ? (
                                <p className="text-xs mt-3 text-[#fea116] tracking-normal">
                                    {errors.performingDuration.message}
                                </p>
                            ) : (
                                <p className="text-xs mt-3 text-[#fea116] tracking-normal">
                                    {errors.performingPiece.message}
                                </p>
                            )
                        ) : errors.performingDuration ? (
                            <p className="text-xs mt-3 text-[#fea116] tracking-normal">
                                {errors.performingDuration.message}
                            </p>
                        ) : null}
                        <input
                            type="submit"
                            disabled={submitLoading}
                            className={cls(
                                "cursor-pointer border border-[#fea116] mt-24 mb-14 mx-auto text-[#fea116] font-thin tracking-tight lg:text-2xl text-lg lg:w-52 w-36 lg:py-5 py-3 hover:bg-[#00000080] transition",
                                submitLoading ? "bg-[#00000080]" : "bg-[#00000033]"
                            )}
                            value={
                                submitLoading
                                    ? locale === "en"
                                        ? "Loading..."
                                        : "로딩중..."
                                    : locale === "en"
                                        ? "SUBMIT"
                                        : "제출"
                            }
                        />
                    </div>
                </form>
            </motion.div>

            {submitPopup ? (
                <>
                    <motion.div
                        className="absolute w-full h-full bg-[rgba(0,0,0,0.6)] top-0 z-40 transtion flex justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.div
                            className="fixed top-[40%] z-40 w- bg-white lg:px-24 px-16 py-10 flex flex-col justify-center items-center gap-10"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                        >
                            <h1 className="text-gray-800 font-thin tracking-wider">{locale === "en" ? "Application has been completed." : "신청이 완료되었습니다."}</h1>
                            <button
                                className="text-lg text-[#fea116] hover:text-black transition tracking-tighter"
                                onClick={() => set_submitPopup(false)}
                            >
                                {locale === "en" ? "Check" : "확인"}
                            </button>
                        </motion.div>
                    </motion.div>
                </>
            ) : null}

        </>

    );
}