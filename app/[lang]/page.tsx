import { getDictionary } from "./dictionaries"
import Portfolio from "./components/portfolio"

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <Portfolio dict={dict} lang={lang} />
}
