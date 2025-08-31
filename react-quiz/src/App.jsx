import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ROUTES } from './const.js'
import HomePage from './pages/HomePage.jsx'
import QuizPage from './pages/QuizPage.jsx'
import ResultPage from './pages/ResultPage.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.QUIZ} element={<QuizPage />} />
          <Route path={ROUTES.RESULT} element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
