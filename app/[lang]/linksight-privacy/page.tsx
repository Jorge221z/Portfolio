import Image from "next/image"
import { getDictionary } from "../dictionaries"
import { LanguageSelector } from "../components/language-selector"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, FileText, Lock, CreditCard, Share2 } from "lucide-react"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang as "en" | "es")
  return {
    title: dict.linksightPrivacy.metaTitle,
    description: dict.linksightPrivacy.metaDescription,
  }
}

export default async function PrivacyPage({ params }: Props) {
  const { lang } = await params
  const dict = await getDictionary(lang as "en" | "es")
  const t = dict.linksightPrivacy

  // Icons mapping for sections to make it look visually outstanding and modern
  const sectionIcons = {
    introduction: <FileText className="h-5 w-5 text-indigo-500" />,
    dataCollection: <Lock className="h-5 w-5 text-emerald-500" />,
    payments: <CreditCard className="h-5 w-5 text-blue-500" />,
    dataUsage: <Share2 className="h-5 w-5 text-amber-500" />,
    contact: <Mail className="h-5 w-5 text-rose-500" />,
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-zinc-800/80 bg-slate-50/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-end">
          <LanguageSelector currentLang={lang} dict={dict} />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="mb-6 relative h-24 w-24 overflow-hidden rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-md bg-white dark:bg-zinc-900">
            <Image
              src="/logo_margins.jpg"
              alt="LinkSight Logo"
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-zinc-300 dark:to-white bg-clip-text text-transparent mb-5">
            {t.appName}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-slate-700 dark:text-zinc-300 mb-2">
            {t.title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-zinc-500 font-medium">
            {t.lastUpdated}
          </p>
        </div>

        <Card className="border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-xl shadow-slate-100 dark:shadow-none backdrop-blur-sm overflow-hidden">
          <CardContent className="p-6 md:p-10 space-y-8">
            {Object.keys(t.sections).map((key) => {
              const section = t.sections[key as keyof typeof t.sections]
              const icon = sectionIcons[key as keyof typeof sectionIcons]

              return (
                <section key={key} className="space-y-3 group border-b border-slate-100 dark:border-zinc-800 last:border-0 pb-6 last:pb-0">
                  <div className="flex items-center gap-3">
                    {icon}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed pl-8">
                    {section.content}
                  </p>
                </section>
              )
            })}
          </CardContent>
        </Card>

        {/* Footer info specific to the app privacy page */}
        <div className="text-center mt-12 text-xs text-slate-400 dark:text-zinc-600">
          <p>© {new Date().getFullYear()} {t.appName}. {dict.footer.rights}</p>
        </div>
      </main>
    </div>
  )
}
