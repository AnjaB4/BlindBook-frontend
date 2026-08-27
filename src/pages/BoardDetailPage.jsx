import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMyBoards } from "../api/boardApi"
import { createPrompt, deletePrompt, getPromptsForBoard } from "../api/promptApi"
import Button from "../components/Button"
import CreatePromptForm from "../components/CreatePromptForm"
import MainLayout from "../layouts/MainLayout"
import PromptCard from "../components/PromptCard"
import Toast from "../components/Toast"


function BoardDetailPage() {

    const { boardId } = useParams()
    const [prompts, setPrompts] = useState([])
    const [board, setBoard] = useState(null)
    const [showCreatePrompt, setShowCreatePrompt] = useState(false) //prikaz forme
    const [promptText, setPromptText] = useState("") //unos teksta
    const [promptNote, setPromptNote] = useState("") //unost note
    const [promptImageUrl, setPromptImageUrl] = useState("") //dodavanje slike
    const [toast, setToast] = useState(null) // poruka

    useEffect(() => {
        loadPrompts()
        loadBoard()
    }, [boardId])


    {/* Ucitaj Board info za naslov */}
    async function loadBoard() {
        try {
            const boards = await getMyBoards()
            const currentBoard = boards.find(board => board.id === boardId)
            setBoard(currentBoard)
        } catch (error) {
            console.error(error)
        }
    }

    {/* Ucitaj sve promptove */}
    async function loadPrompts() {
        try {
            const data = await getPromptsForBoard(boardId)
            setPrompts(data)
        } catch (error) {
            console.error(error)
        }
    }

    {/* Toast poruka */}
    function showToast(message, type = "success") {
        setToast({ message, type })

        setTimeout(() => {
            setToast(null)
        }, 4000)
    }

    {/* Napravi novi prompt */}
    async function handleCreatePrompt() {
        if (!promptText.trim()) {
            return
        }

        try {
            await createPrompt(boardId, promptText, promptNote, promptImageUrl)

            setPromptText("") //resetovanje
            setPromptNote("")
            setPromptImageUrl("")
            setShowCreatePrompt(false)

            loadPrompts()
        } catch (error) {
            console.error(error)
        }
    }

    {/* Obrisi prompt */}
    async function handleDeletePrompt(promptId) {
        const confirmed = window.confirm("Are you sure you want to delete this prompt?")

        if (!confirmed) {
            return
        }

        try {
            await deletePrompt(boardId, promptId)

            showToast("Prompt deleted successfully.")
            loadPrompts()
        } catch (error) {
            console.error(error)

            showToast("Failed to delete prompt.", "error")

        }
    }

    return (
        <MainLayout>
            <h1 className="text-3xl font-bold text-teal-400">
                {board ? `Board with ${board.otherUsername}` : "Board"}
            </h1>

            <p className="text-stone-500 mt-2 mb-8">
                Board ID: {boardId}
            </p>


            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                />
            )}


            <div className="mb-6 max-w-xs">
                <Button
                    variant="secondary"
                    onClick={() => setShowCreatePrompt(!showCreatePrompt)}
                > {/* isto dugme otvara i zatvara formu */}
                    Write a new prompt
                </Button>
            </div>

            {showCreatePrompt && (
                <CreatePromptForm
                    promptText={promptText}
                    setPromptText={setPromptText}
                    promptNote={promptNote}
                    setPromptNote={setPromptNote}
                    promptImageUrl={promptImageUrl}
                    setPromptImageUrl={setPromptImageUrl}
                    onCreate={handleCreatePrompt}
                />
            )}


            <div className="space-y-4">
                {prompts.map(prompt => (
                    <PromptCard
                        key={prompt.id}
                        prompt={prompt}
                        onDelete={handleDeletePrompt}
                    />
                ))}
            </div>
        </MainLayout>
    )

}

export default BoardDetailPage