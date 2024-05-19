
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="grid w-full min-h-screen gap-2 lg:grid-cols-[275px_1fr]">
      <div className="hidden py-8 space-y-2 text-base border-r md:block">
        <Link
          className="flex items-center space-x-2 font-medium text-gray-900 hover:text-gray-900/90 dark:text-gray-100 dark:hover:text-gray-50"
          href="/"
        >
          <XIcon className="w-5 h-5" />
          <span>홈</span>
        </Link>
        <div className="space-y-1">
          <Link className="flex items-center space-x-2 font-medium text-gray-900 dark:text-gray-100" href="url">
            <XIcon className="w-4 h-4 transform rotate-90 translate-x-0.5" />
            <span>URL 입력</span>
          </Link>
          <Link className="flex items-center space-x-2 font-medium text-gray-900 dark:text-gray-100" href="#">
            <XIcon className="w-4 h-4 transform rotate-90 translate-x-0.5" />
            <span>진단 기준</span>
          </Link>
          <Link className="flex items-center space-x-2 font-medium text-gray-900 dark:text-gray-100" href="#">
            <XIcon className="w-4 h-4 transform rotate-90 translate-x-0.5" />
            <span>통계</span>
          </Link>
          <Link className="flex items-center space-x-2 font-medium text-gray-900 dark:text-gray-100" href="/chatbot">
            <XIcon className="w-4 h-4 transform rotate-90 translate-x-0.5" />
            <span>챗봇</span>
          </Link>
        </div>
      </div>
      <div className="w-full min-h-screen py-8 bg-gray-100 md:min-h-screen/8 lg:min-h-screen/6xl dark:bg-gray-800">
        <div className="container px-4 space-y-8 text-center md:space-y-10 lg:space-y-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">메인페이지</h1>
           
          </div>
          
        </div>
      </div>
    </div>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}