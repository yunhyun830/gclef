import { prisma } from "@/server/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await addApp(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}
//패키지 빌드에 prisma generate && next build을 설정해야 호스팅 시 DB와 연동이 된다.
async function addApp(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const newApp = await prisma.writeForm.create({
      data: {
        site: "g-clef",
        firstName: body.firstName,
        lastName: body.lastName,
        birthday: body.birthday,
        school: body.school,
        ageProof: body.ageProof,
        teamMember: body.teamMember,
        section: body.section,
        ageCategory: body.ageCategory,
        email: body.email,
        phone: body.phone,
        videoLink: body.videoLink,
        depostisor: body.depostisor,
        teacher: body.teacher,
        teacherEmail: body.teacherEmail,
        performingPiece: {
          piece: body.performingPiece,
          duration: body.performingDuration
        }
      },
    });
    return res.status(200).json({ data: newApp, success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error add notice", success: false });
  }
}