"use client";
import { useRouter } from "next/navigation";

export default function StartPage() {
  const router = useRouter();

  return (
   <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
  {/* Animated gradient or floating circles */}
  <div className="absolute inset-0">
    <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
    <div className="absolute -bottom-32 -right-24 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
  </div>

  {/* Glass card */}
  <div className="relative z-10 flex flex-col items-center text-center bg-white/20 backdrop-blur-xl px-10 py-12 rounded-3xl shadow-2xl">
    <h1 className="text-6xl font-extrabold text-white drop-shadow-lg mb-4">
      Flashcard Frenzy
    </h1>
    <p className="text-lg text-white/90 mb-8">
      Sharpen your memory. Beat the clock. Have fun!
    </p>
    <button
      onClick={() => router.push("/login")}
      className="px-10 py-4 bg-yellow-400 text-purple-800 font-bold text-lg rounded-2xl shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform"
    >
      🚀 Login to Play
    </button>
  </div>
</div>

  );
}

