"use client"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

interface LanguageSelectorProps {
  currentLang: string
  dict: any
}

export function LanguageSelector({ currentLang, dict }: LanguageSelectorProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLang: string) => {
    const segments = pathname.split("/")
    segments[1] = newLang
    const newPath = segments.join("/")
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
        >
          <Globe className="h-4 w-4" />
          {currentLang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
        <DropdownMenuItem
          onClick={() => switchLanguage("en")}
          className="text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white focus:bg-zinc-100 dark:focus:bg-zinc-700 focus:text-zinc-900 dark:focus:text-white"
        >
          🇺🇸 {dict.language.english}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLanguage("es")}
          className="text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white focus:bg-zinc-100 dark:focus:bg-zinc-700 focus:text-zinc-900 dark:focus:text-white"
        >
          🇪🇸 {dict.language.spanish}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
