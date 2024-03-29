import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="dark:bg-slate-900 dark:text-white">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-6 px-4 md:gap-12">
        <h1 className="mb-4 text-4xl font-extrabold  md:text-6xl">
          <span>🚀</span>
          <span className="bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent">
            David Khierl
          </span>
        </h1>
        <p className="text-center text-lg md:text-xl">
          I&apos;m launching something new ✨ if you are a ReactJS and
          Typescript enthusiast stay tuned! 😍
        </p>
        <Link
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-300/40 px-6 py-4 transition hover:bg-gray-500/25"
          href="https://github.com/davidkhierl">
          <Github />
          Check my Github
        </Link>
      </div>
    </main>
  )
}
