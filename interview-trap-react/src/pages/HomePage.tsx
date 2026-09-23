import {useRef} from 'react'
import {useSiteSettings} from '../hooks/useSiteSettings'
import {useTrapQuestions} from '../hooks/useTrapQuestions'
import Hero from '../components/Hero'
import TaglineQuote from '../components/TaglineQuote'
import CategoryNav from '../components/CategoryNav'
import QuestionCard from '../components/QuestionCard'
import Footer from '../components/Footer'

export default function HomePage() {
  const {data: settings} = useSiteSettings()
  const {data: questions, loading: questionsLoading} = useTrapQuestions()
  const questionsSectionRef = useRef<HTMLDivElement>(null)

  const handleCtaClick = () => {
    questionsSectionRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8">
        <Hero settings={settings} onCtaClick={handleCtaClick} />

        {settings?.taglineQuote && <TaglineQuote quote={settings.taglineQuote} />}

        <div ref={questionsSectionRef} className="pt-8">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
            <h2 className="text-xl font-bold text-white">함정 질문 목록</h2>
            <span className="text-xs text-zinc-400">
              총 {questions.length}개의 질문
            </span>
          </div>

          <CategoryNav />

          {questionsLoading ? (
            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-36 rounded-2xl bg-zinc-900/60 animate-pulse border border-zinc-800/60" />
              ))}
            </div>
          ) : questions.length === 0 ? (
            <div className="py-16 text-center text-zinc-500">
              등록된 함정 질문이 없습니다.
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              {questions.map((q) => (
                <QuestionCard key={q._id} question={q} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
