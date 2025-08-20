import { ResultCard } from "./ResultCard"

interface SummaryItem {
  category: string
  score: number
  icon: string
  color: string
}

interface SummarySectionProps {
  data: SummaryItem[]
}

export function SummarySection({ data }: SummarySectionProps) {
  return (
    <section className="p-8 w-full flex flex-col justify-between">
      <h2 className="text-lg font-bold text-[hsl(224,30%,27%)] mb-6">
        Summary
      </h2>

      <div className="flex flex-col gap-4 mb-6">
        {data.map(({category, score, icon, color}, index) => (
          <ResultCard
            key={index}
            category={category}
            score={score}
            icon={icon}
            color={color}
          />
        ))}
      </div>

      <button type="button" className="cursor-pointer bg-[hsl(224,30%,27%)] hover:bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] text-white font-semibold py-3 rounded-full transition-colors">
        Continue
      </button>
    </section>
  )
}
