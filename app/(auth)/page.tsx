import { BeakerIcon, BoltIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import NewChat from "@components/NewChat";
import { getServerSession } from "next-auth";
import { authOptions } from "@api/auth/[...nextauth]";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "@lib/firebase";
import Link from "next/link";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const chatConfiguration = await getDoc(doc(db, "users", session?.user?.email!));
  const chatConfig = chatConfiguration.data()?.config;

  return (
    <div className="flex flex-1 flex-col items-center justify-center py-8 px-4">
      <h1 className="typography-heading-3 mb-10 md:mb-20">Szumrak GPT</h1>

      <div className="mb-8">
        {chatConfig ? (
          <Link href="chat">
            <button className="typography-subtitle-1 hover:text-primary-500">
              Lets Chat with {chatConfig.name}
            </button>
          </Link>
        ) : (
          <NewChat />
        )}
      </div>

      <div className="flex max-w-4xl flex-col gap-x-2 gap-y-6 text-center md:flex-row">
        <div className="flex-1">
          <div className="mb-4 flex flex-col items-center md:mb-6">
            <BeakerIcon className="h-8 w-8 text-primary-500" />
            <h2 className="typography-subtitle-1">Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="info-text">Explain Something to me</p>
            <p className="info-text">What is the difference between a dog and a cat?</p>
            <p className="info-text">What is the color of the sun?</p>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4 flex flex-col items-center md:mb-6">
            <BoltIcon className="h-8 w-8 text-primary-500" />
            <h2 className="typography-subtitle-1">Capabilities</h2>
          </div>
          <div className="space-y-2">
            {/*<p className="info-text">Change the ChatGPT Model to use</p>*/}
            <p className="info-text">Messages are stored in Firebase's Firestore</p>
            {/*<p className="info-text">Hot Toast notifications when ChtGPT is thinking!</p>*/}
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4 flex flex-col items-center md:mb-6">
            <ExclamationTriangleIcon className="h-8 w-8 text-primary-500" />
            <h2 className="typography-subtitle-1">Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="info-text">May occasionally generate incorrect information</p>
            <p className="info-text">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="info-text">Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
