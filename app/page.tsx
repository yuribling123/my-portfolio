import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-4">
    <h1 className="text-4xl font-bold">Hi, I'm Yuri 👋</h1>
    <p className="text-lg mt-4">Full-Stack Developer | Machine Learning Enthusiast</p>
    <div className="mt-6 flex gap-4">
      <Link href="/about" className="px-6 py-2 bg-blue-600 text-white rounded-lg">About Me</Link>
      <Link href="/projects" className="px-6 py-2 bg-green-600 text-white rounded-lg">Projects</Link>
      <Link href="/contact" className="px-6 py-2 bg-gray-600 text-white rounded-lg">Contact</Link>
    </div>
  </main>
  );
}
