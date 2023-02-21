import { Timestamp } from "@firebase/firestore";
import admin from "firebase-admin";

export type Message = {
  text: string;
  createdAt: Timestamp | admin.firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
};

export type ChatConfig = {
  model: string;
  name: string;
  avatar: string;
};
