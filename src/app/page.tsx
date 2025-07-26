import { Coins, AlarmCheck, Handshake, Globe } from 'lucide-react';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-2xl text-center sm:text-left">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            ARCHANGEL: Solusi Anti-Judi Online & Pencucian Uang Berbasis AI & Web3
          </h1>
          <h2 className="text-lg text-gray-600">
            Melawan Siklus Pelarian Digital dengan Prediksi & Forensik Canggih
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            ARCHANGEL adalah platform terpadu yang memanfaatkan kecerdasan buatan dan teknologi blockchain
            untuk secara preemptif mendeteksi, mencegah, dan menelusuri aktivitas judi online serta
            pencucian dana ilegal di ekosistem digital dan keuangan.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 mt-6 text-left w-full">
          <li className="flex items-start gap-3">
            <Globe className="text-indigo-600 w-6 h-6" />
            <span className="font-medium">Prediksi Domain Judi Baru</span>
          </li>
          <li className="flex items-start gap-3">
            <Coins className="text-indigo-600 w-6 h-6" />
            <span className="font-medium">Pelacakan Dana Kripto</span>
          </li>
          <li className="flex items-start gap-3">
            <AlarmCheck className="text-red-600 w-6 h-6" />
            <span className="font-medium">Deteksi Fraud Real-time</span>
          </li>
          <li className="flex items-start gap-3">
            <Handshake className="text-green-600 w-6 h-6" />
            <span className="font-medium">Kolaborasi Lintas Lembaga</span>
          </li>
        </ul>

        <div className="mt-10">
          <p className="text-sm font-semibold">Projects Team</p>
          <ol className="font-mono list-inside list-decimal text-sm/6 mt-2 space-y-1">
            <li><code className="font-bold">{">_"}</code> Hanifah Putri Ariani</li>
            <li><code className="font-bold">{">_"}</code> Nares Ayu Prabowo</li>
            <li><code className="font-bold">{">_"}</code> Alex Cinatra Hutasoit</li>
            <li><code className="font-bold">{">_"}</code> Arkananta Fijratullah</li>
            <li><code className="font-bold">{">_"}</code> DAFFA ASKAR FATHIN</li>
          </ol>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[12px] flex-wrap items-center justify-center text-sm">
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        <Link href="/dashboard" className="text-blue-600 hover:underline">
          Go to The MockUp Simulation →
        </Link>
      </footer>
    </div>
  );
}
