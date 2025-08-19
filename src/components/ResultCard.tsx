type ResultProps = {
  category: string
  score: number
  icon: string
}

export function ResultCard({ category, score, icon }: ResultProps) {
  console.log("Rendering ResultCard for category:", category)
  console.log("Icon path:", icon)
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
      <div className="flex items-center gap-2">
        <img src={icon} alt={`${category} icon`} className="w-6 h-6" />
        <span className="font-medium text-gray-700">{category}</span>
      </div>
      <span className="font-bold text-blue-600">{score}</span>
    </div>
  )
}
