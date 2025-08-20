import data from "./data/data.json"
import { ScoreSection } from "./components/ScoreSection"
import { SummarySection } from "./components/SummarySection"

interface userData {
  score: number
  categories: {
    category: string
    score: number
    icon: string
    color: string
  }[]
}

function App() {
  const results = data.user as userData

  return (
    <main className="font-[Hanken_Grotesk] min-h-screen bg-[hsl(221,100%,96%)] flex flex-col items-center justify-center md:p-4">
      <div className="bg-white md:rounded-3xl shadow-lg grid md:grid-cols-2 w-full max-w-2xl overflow-hidden">
        <ScoreSection score={results.score} />
        <SummarySection data={results.categories} />
      </div>
      <div className="text-center my-4 mx-2 text-sm">
        Challenge by{" "}
        <a
          className="text-[hsl(246,100%,66%)]"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-[hsl(246,100%,66%)]"
          href="https://github.com/SortJakke"
          target="_blank"
          rel="noopener"
        >
          Sortjakke
        </a>
        .
      </div>
    </main>
  )
}

export default App
