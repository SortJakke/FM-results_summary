interface ScoreSectionProps {
  score: number
  maxScore?: number // opcional, default 100
}

export function ScoreSection({ score, maxScore = 100 }: ScoreSectionProps) {
  return (
    <section className="bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] text-[hsl(241,100%,89%)] rounded-b-3xl md:rounded-3xl p-8 flex flex-col items-center justify-center text-center w-full">
      <h2 className="text-lg font-medium mb-6">Your Result</h2>

      <div className="bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-6">
        <div>
          <p className="text-5xl text-white font-bold">{score}</p>
          <p className="text-sm text-[hsl(241,100%,89%)]">of {maxScore}</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-2 text-white">Great</h3>
      <p className="text-sm max-w-xs">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  )
}
