import {useParams, Link} from 'react-router-dom'
import {slugToCategoryMap} from '../lib/categorySlug'
import {useTrapQuestionBySlug} from '../hooks/useTrapQuestionBySlug'
import QuestionDetail from '../components/QuestionDetail'
import Footer from '../components/Footer'

export default function QuestionDetailPage() {
  const {categorySlug, slug} = useParams<{categorySlug: string; slug: string}>()
  const {data: question, loading} = useTrapQuestionBySlug(slug)

  const category = categorySlug ? slugToCategoryMap[categorySlug] : undefined

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-8">
        {/* 상단 빵부스러기(Breadcrumb) 네비게이션 */}
        <div className="mb-8 flex items-center gap-2 text-xs text-zinc-400">
          <Link to="/" className="hover:text-zinc-200 transition">
            홈
          </Link>
          <span>/</span>
          {categorySlug && (
            <>
              <Link to={`/questions/${categorySlug}`} className="hover:text-zinc-200 transition">
                {category || categorySlug}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-zinc-500 truncate max-w-[200px]">
            {question ? question.title : '상세'}
          </span>
        </div>

        {loading ? (
          <div className="space-y-6 animate-pulse">
            <div className="h-8 bg-zinc-900 rounded-lg w-3/4"></div>
            <div className="h-32 bg-zinc-900/60 rounded-2xl"></div>
            <div className="h-28 bg-zinc-900/60 rounded-2xl"></div>
          </div>
        ) : !question ? (
          <div className="py-20 text-center space-y-4">
            <h2 className="text-xl font-bold text-zinc-300">질문을 찾을 수 없습니다.</h2>
            <p className="text-sm text-zinc-500">삭제되었거나 잘못된 접근입니다.</p>
            <Link
              to={categorySlug ? `/questions/${categorySlug}` : '/'}
              className="inline-block px-5 py-2.5 rounded-xl bg-zinc-800 text-sm font-semibold text-white hover:bg-zinc-700 transition"
            >
              목록으로 돌아가기
            </Link>
          </div>
        ) : (
          <div className="space-y-10">
            <QuestionDetail question={question} />

            {/* 하단 네비게이션 액션 */}
            <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
              <Link
                to={categorySlug ? `/questions/${categorySlug}` : '/'}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-zinc-300 border border-zinc-800 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {category ? `${category} 목록으로` : '전체 목록으로'}
              </Link>
              <Link
                to="/"
                className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition"
              >
                홈으로 이동
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
