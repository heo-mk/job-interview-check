
interface Props {
  quote?: string
}

export default function TaglineQuote({quote}: Props) {
  if (!quote) return null

  // 개행 문자로 문단을 분리하여 렌더링
  const paragraphs = quote.split('\n\n')

  return (
    <div className="relative my-8 p-6 rounded-2xl bg-gradient-to-r from-red-950/20 via-zinc-900 to-zinc-900/60 border border-red-500/20 shadow-lg shadow-black/20">
      <div className="flex items-start gap-4">
        <span className="text-3xl select-none text-red-400 font-serif leading-none">“</span>
        <div className="space-y-3">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={`leading-relaxed ${
                i === 0 ? 'text-lg font-semibold text-zinc-100' : 'text-sm text-zinc-400'
              }`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
