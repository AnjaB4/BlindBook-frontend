import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import BoardsPage from "./pages/BoardsPage"
import BoardDetailPage from "./pages/BoardDetailPage"
import PromptDetailPage from "./pages/PromptDetailPage"


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/boards" element={<BoardsPage />} />
          <Route path="/boards/:boardId" element={<BoardDetailPage />} />
          <Route path="/boards/:boardId/prompts/:promptId" element={<PromptDetailPage />} />

        </Routes>
      </BrowserRouter>
  )

}


export default App