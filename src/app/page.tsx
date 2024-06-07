import { PageOne, PageTwo, PageThree, PageFour, NavBar } from "./page_one";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center bg-white">
      <NavBar />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </main>
  );
}
