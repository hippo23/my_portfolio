import Image from "next/image";
import { PageOne, PageTwo, PageThree } from "./page_one";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center bg-black">
      <PageOne />
      <PageTwo />
      <PageThree />
    </main>
  );
}
