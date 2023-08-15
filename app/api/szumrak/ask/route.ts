import query from "@lib/chatgpt/query-api";
import { Message } from "@types";
import admin from "firebase-admin";
import { adminDb } from "@lib/firebase/admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { prompt, model, session } = await request.json();

  if (!prompt) {
    return NextResponse.json(
      { answer: "Please provide a message!" },
      {
        status: 400
      }
    );
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

  return NextResponse.json({ answer: answerMessage.text }, { status: 200 });
}
