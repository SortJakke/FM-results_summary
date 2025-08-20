type ResultProps = {
  category: string
  score: number
  icon: string
  color: string
}

export function ResultCard({ category, score, icon, color }: ResultProps) {
  return (
    <div
      key={category}
      className={`flex items-center justify-between rounded-lg p-4 ${color}`}
    >
      <div className="flex items-center gap-3">
        <img src={icon} alt={category} className="w-5 h-5" />
        <span className="font-medium">{category}</span>
      </div>
      <span className="text-[hsl(224,30%,27%)] font-bold">
        {score} <span className="text-gray-400">/ 100</span>
      </span>
    </div>
  )
}
