import {Link} from 'react-router-dom'
import {categorySlugMap} from '../lib/categorySlug'
import type {Category} from '../types/content'

const categories: Category[] = [
  '자기소개/도입형',
  '인성/태도',
  '경험/역량',
  '조직적합성/지원동기',
  '압박형',
  '추정형/브레인티저',
  '직무 방법론',
  '역질문',
  '기타',
]

interface Props {
  currentCategory?: Category | null
}

export default function CategoryNav({currentCategory}: Props) {
  return (
    <nav className="my-6">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Link
          to="/"
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
            !currentCategory
              ? 'bg-white text-zinc-950 shadow'
              : 'bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700/80'
          }`}
        >
          전체 보기
        </Link>
        {categories.map((cat) => {
          const slug = categorySlugMap[cat]
          const isActive = currentCategory === cat

          return (
            <Link
              key={cat}
              to={`/questions/${slug}`}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                isActive
                  ? 'bg-red-500 text-white shadow shadow-red-500/20'
                  : 'bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700/80'
              }`}
            >
              {cat}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
