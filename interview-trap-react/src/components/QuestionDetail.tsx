import type {TrapQuestion} from '../types/content'
import EvidenceLabelBadge from './EvidenceLabelBadge'

interface Props {
  question: TrapQuestion
}

export default function QuestionDetail({question}: Props) {
  return (
    <article className="space-y-8">
      {/* 질문 헤더 */}
      <div className="space-y-4 border-b border-zinc-800 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-zinc-300 bg-zinc-800 px-2.5 py-1 rounded-md">
            {question.category}
          </span>
          <EvidenceLabelBadge label={question.evidenceLabel} />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Q. {question.title}
        </h1>
      </div>

      {/* 1. 왜 위험한가 */}
      <section className="p-6 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-3">
        <div className="flex items-center gap-2 text-red-400 font-bold text-sm sm:text-base">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2>왜 이 질문이 위험할까요?</h2>
        </div>
        <p className="text-zinc-200 text-sm sm:text-base leading-relaxed whitespace-pre-line pl-7">
          {question.riskReason}
        </p>
      </section>

      {/* 2. 개선된 답변 방향 */}
      {question.improvedDirection && (
        <section className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm sm:text-base">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h2>어떻게 답변을 재구성해야 할까</h2>
          </div>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line pl-7">
            {question.improvedDirection}
          </p>
        </section>
      )}

      {/* 3. 모범답안 예시 */}
      {question.exampleAnswer && (
        <section className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm sm:text-base">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2>행동 근거 중심 모범답안 예시</h2>
          </div>
          <blockquote className="pl-7 pr-2 py-1 text-zinc-200 text-sm sm:text-base leading-relaxed italic border-l-2 border-emerald-500/40 whitespace-pre-line">
            “{question.exampleAnswer}”
          </blockquote>
        </section>
      )}

      {/* 출처 표기 (선택) */}
      {question.sourceNote && (
        <div className="pt-2 text-right text-xs text-zinc-500">
          (출처: {question.sourceNote})
        </div>
      )}
    </article>
  )
}
