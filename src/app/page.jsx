import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-5 bg-zinc-50 font-sans dark:bg-black flex-col">
      <h1 className="text-2xl font-bold">next js fetching and rendaring</h1>
      <button className="btn-secondary">Get Started.</button>
    </div>
  );
}
