import {useParams, Link} from 'react-router-dom'
import {slugToCategoryMap} from '../lib/categorySlug'
import {useTrapQuestions} from '../hooks/useTrapQuestions'
import CategoryNav from '../components/CategoryNav'
import QuestionCard from '../components/QuestionCard'
import Footer from '../components/Footer'

export default function CategoryPage() {
  const {categorySlug} = useParams<{categorySlug: string}>()
  const category = categorySlug ? slugToCategoryMap[categorySlug] : undefined
  const {data: questions, loading} = useTrapQuestions(category)

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8">
        {/* 상단 네비게이션 */}
        <div className="mb-6 flex items-center gap-2 text-xs text-zinc-400">
          <Link to="/" className="hover:text-zinc-200 transition">
            홈
          </Link>
          <span>/</span>
          <span className="text-zinc-200 font-medium">카테고리</span>
          <span>/</span>
          <span className="text-red-400 font-semibold">{category || '알 수 없음'}</span>
        </div>

        <div className="border-b border-zinc-800 pb-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            {category || '카테고리를 찾을 수 없습니다'}
          </h1>
          <p className="mt-1 text-sm text-zinc-400">
            {category ? `${category} 유형의 면접 함정 질문과 분석입니다.` : '유효하지 않은 카테고리 경로입니다.'}
          </p>
        </div>

        <CategoryNav currentCategory={category} />

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 mt-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-36 rounded-2xl bg-zinc-900/60 animate-pulse border border-zinc-800/60" />
            ))}
          </div>
        ) : questions.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <p className="text-zinc-500">이 카테고리에는 아직 질문이 등록되지 않았습니다.</p>
            <Link
              to="/"
              className="inline-block px-4 py-2 rounded-lg bg-zinc-800 text-xs font-semibold text-zinc-200 hover:bg-zinc-700 transition"
            >
              전체 질문 보러가기
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 mt-6">
            {questions.map((q) => (
              <QuestionCard key={q._id} question={q} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
