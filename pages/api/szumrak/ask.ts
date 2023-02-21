import { NextApiRequest, NextApiResponse } from "next";
import query from "@lib/chatgpt/query-api";
import { Message } from "@types";
import { adminDb } from "@lib/firebase/admin";
import admin from "firebase-admin";

type Data = {
  answer: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { prompt, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a message!" });
    return;
  }

  const response = await query(prompt, model);

  const answerMessage: Message = {
    text: response || "ChatGPT wan unable to find an answer for that!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "SzumrakGPT",
      name: "SzumrakGPT",
      avatar: "https://ui-avatars.com/api/?name=Szumrak"
    }
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("messages")
    .add(answerMessage);

  res.status(200).json({ answer: answerMessage.text });
}
