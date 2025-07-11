import { getDictionary } from "./dictionaries"
import Portfolio from "./components/portfolio"

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }]
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as "en" | "es")

  return <Portfolio dict={dict} lang={lang} />
}
