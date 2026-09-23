import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import QuestionDetailPage from './pages/QuestionDetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions/:categorySlug" element={<CategoryPage />} />
        <Route path="/questions/:categorySlug/:slug" element={<QuestionDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
