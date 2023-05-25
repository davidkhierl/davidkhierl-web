import { Metadata } from 'next'
import Link from 'next/link'
import { GoMarkGithub } from 'react-icons/go'

export const metadata: Metadata = {
  title: 'David Khierl',
  description: 'Senior software engineer based from Dubai, UAE',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 font-sans dark:bg-slate-900 dark:text-white">
      <h1 className="mb-4 text-xl font-extrabold  md:text-6xl">
        <span>🚀</span>
        <span className="bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent">
          David Khierl
        </span>
      </h1>
      <p className="text-2xl">
        I&apos;m launching something new ✨ if you are a ReactJS and Typescript
        enthusiast stay tune! 😍
      </p>
      <Link
        className="flex items-center gap-2 rounded-lg border border-gray-300/40 px-6 py-4 transition hover:bg-gray-500/25"
        href="https://github.com/davidkhierl">
        <GoMarkGithub />
        Check my Github
      </Link>
    </main>
  )
}
