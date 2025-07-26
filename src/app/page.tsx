import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p>Projects Team</p>
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left space-x-2">
          <span className="mb-2 tracking-[-.01em]">
            <code className="font-bold">{">_"}</code>Alex Cinatra Hutasoit
          </span>
          <span className="tracking-[-.01em]">
            <code className="font-bold">{">_"}</code>Arkananta Fijratullah
          </span>
          <span className="tracking-[-.01em]">
            <code className="font-bold">{">_"}</code>Hani Bubul
          </span>
          <span className="tracking-[-.01em]">
            <code className="font-bold">{">_"}</code>Naras Ayu
          </span>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        <Link href={'/dashboard'}>Go to The Dashboard  →</Link>
      </footer>
    </div>
  );
}
