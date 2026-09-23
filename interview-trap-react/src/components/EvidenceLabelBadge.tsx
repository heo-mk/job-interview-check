import type {EvidenceLabel} from '../types/content'

interface Props {
  label: EvidenceLabel | string
  className?: string
}

export default function EvidenceLabelBadge({label, className = ''}: Props) {
  let badgeColor = 'bg-slate-800/80 text-slate-300 border-slate-700'

  if (label === '원칙 기반') {
    badgeColor = 'bg-indigo-950/70 text-indigo-300 border-indigo-700/50'
  } else if (label === '경험 기반') {
    badgeColor = 'bg-amber-950/70 text-amber-300 border-amber-700/50'
  } else if (label === '제보 기반') {
    badgeColor = 'bg-emerald-950/70 text-emerald-300 border-emerald-700/50'
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeColor} ${className}`}
    >
      [{label}]
    </span>
  )
}
