export type EvidenceLabel = '원칙 기반' | '경험 기반' | '제보 기반'

export type Category =
  | '자기소개/도입형'
  | '인성/태도'
  | '경험/역량'
  | '조직적합성/지원동기'
  | '압박형'
  | '추정형/브레인티저'
  | '직무 방법론'
  | '역질문'
  | '기타'

export interface TrapQuestion {
  _id: string
  title: string
  slug: {current: string}
  category: Category
  riskReason: string
  evidenceLabel: EvidenceLabel
  improvedDirection?: string
  exampleAnswer?: string
  sourceNote?: string
}

export interface SiteSettings {
  heroHeadline: string
  heroSubheadline: string
  heroIntro: string
  taglineQuote: string
  ctaButtonText: string
}
