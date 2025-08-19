import results from "./data/data.json"
import { ResultCard } from "./components/ResultCard"

function App() {
  return (
    <main className="max-w-md mx-auto mt-10 space-y-4">
      {results.map((item, index) => (
        <ResultCard
          key={index}
          category={item.category}
          score={item.score}
          icon={`/assets/${item.icon}`}
        />
      ))}
    </main>
  )
}

export default App
