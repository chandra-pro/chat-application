import Image from "next/image";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function Home() {
  return (
    <div>
      <main>
        <MessageList />
        <MessageInput />
      </main>
    </div>
  );
}
