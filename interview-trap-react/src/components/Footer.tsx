
export default function Footer() {
  return (
    <footer className="mt-auto py-10 border-t border-zinc-800 text-center text-xs text-zinc-500">
      <div className="max-w-4xl mx-auto px-4 space-y-2">
        <p className="font-medium text-zinc-400">
          개발자 취업 면접 함정 질문 분석소
        </p>
        <p>
          본 콘텐츠는 채용 평가 원칙, 합격자 경험 및 제보 데이터를 바탕으로 재구성한 분석 자료입니다.
        </p>
        <p className="text-zinc-600">
          © {new Date().getFullYear()} Interview Trap Analysis. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
