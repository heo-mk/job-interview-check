import type {Category} from '../types/content'

export const categorySlugMap: Record<Category, string> = {
  '자기소개/도입형': 'self-intro',
  '인성/태도': 'attitude',
  '경험/역량': 'experience',
  '조직적합성/지원동기': 'culture-fit',
  '압박형': 'pressure',
  '추정형/브레인티저': 'estimation',
  '직무 방법론': 'methodology',
  '역질문': 'reverse-question',
  '기타': 'etc',
}

export const slugToCategoryMap: Record<string, Category> = Object.fromEntries(
  Object.entries(categorySlugMap).map(([category, slug]) => [slug, category as Category])
)
