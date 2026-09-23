import {Link} from 'react-router-dom'
import {categorySlugMap} from '../lib/categorySlug'
import type {TrapQuestion} from '../types/content'
import EvidenceLabelBadge from './EvidenceLabelBadge'

interface Props {
  question: TrapQuestion
}

export default function QuestionCard({question}: Props) {
  const categorySlug = categorySlugMap[question.category] || 'etc'
  const detailUrl = `/questions/${categorySlug}/${encodeURIComponent(question.slug?.current || question._id)}`

  return (
    <Link
      to={detailUrl}
      className="group block p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-850 border border-zinc-800/80 hover:border-zinc-700 transition duration-200 shadow-sm hover:shadow-md hover:shadow-black/40"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-medium text-zinc-400 bg-zinc-800/90 px-2 py-0.5 rounded-md">
          {question.category}
        </span>
        <EvidenceLabelBadge label={question.evidenceLabel} />
      </div>

      <h3 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-red-400 transition-colors leading-snug">
        Q. {question.title}
      </h3>

      {question.riskReason && (
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
          {question.riskReason}
        </p>
      )}

      <div className="mt-4 flex items-center justify-end text-xs font-semibold text-zinc-500 group-hover:text-red-400 transition-colors gap-1">
        <span>의도 분석 및 모범 답변 보기</span>
        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
