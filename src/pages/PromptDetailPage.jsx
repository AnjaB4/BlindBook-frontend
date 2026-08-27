import Button from "../components/Button"
import Toast from "../components/Toast"
import CreatePromptResponseForm from "../components/CreateResponseForm"
import  { createPromptResponse, deletePromptResponse, getResponsesForPrompt } from "../api/promptResponseApi"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import PromptResponseCard from "../components/PromptResponseCard"


function PromptDetailPage() {
    const { boardId, promptId } = useParams()
    const [promptResponses, setPromptResponses] = useState([])
    const [showCreateResponse, setShowCreateResponse] = useState(false)
    const [responseText, setResponseText] = useState("")
    const [bookName, setBookName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [note, setNote] = useState("")
    const [toast, setToast] = useState(null)

    useEffect(() => {
        loadPromptResponses()
    }, [promptId])

    // Ucitaj sve responses
    async function loadPromptResponses() {
        try {
            const data = await getResponsesForPrompt(promptId)
            setPromptResponses(data)
        } catch (error) {
            console.error(error)
        }
    }

    // Toast poruka
    function showToast(message, type = "success") {
        setToast({ message, type })

        setTimeout(() => {
            setToast(null)
        }, 4000)
    }

    // Napravi novi response
    async function handleCreatePromptResponse() {
        if (!bookName.trim() && !responseText.trim() && !note.trim() && !imageUrl.trim()) {
            return
        }

        try {
            await createPromptResponse(
                promptId,
                boardId,
                responseText,
                bookName,
                imageUrl,
                note
            )

            setResponseText("")
            setBookName("")
            setImageUrl("")
            setNote("")
            setShowCreateResponse(false)

            loadPromptResponses()
        } catch (error) {
            console.error(error)
        }
    }

    // Obrisi prompt response
    async function handleDeletePromptResponse(promptResponseId) {
        const confirmed = window.confirm("Are you sure you want to delete this response?")

        if (!confirmed) {
            return
        }

        try {
            await deletePromptResponse(promptId, promptResponseId)

            showToast("Response deleted successfully.")
            loadPromptResponses()
        } catch (error) {
            console.error(error)

            showToast("Failed to deleted successfully.", "error")
        }
    }

    return (
        <MainLayout>
            <h1 className="text-3xl font-bold text-teal-400">
                Prompt responses
            </h1>

            <p className="text-stone-500 mb-8">
                Responses for this prompt
            </p>


            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                />
            )}


            {/* Forma */}
            <div className="mb-6 max-w-xs">
                <Button
                    variant="secondary"
                    onClick={() => setShowCreateResponse(!showCreateResponse)}
                >
                    Add response
                </Button>
            </div>

            {showCreateResponse && (
                <CreatePromptResponseForm
                    responseText={responseText}
                    setResponseText={setResponseText}
                    bookName={bookName}
                    setBookName={setBookName}
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    note={note}
                    setNote={setNote}
                    onCreate={handleCreatePromptResponse}
                />
            )}

            <div className="space-y-4">
                {promptResponses.map(promptResponse => (
                    <PromptResponseCard
                        key={promptResponse.id}
                        promptResponse={promptResponse}
                        onDelete={handleDeletePromptResponse}
                    />
                ))}
            </div>
        </MainLayout>
    )
}

export default PromptDetailPage