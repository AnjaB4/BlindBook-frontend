import { useEffect, useState } from "react";
import { createBoardByUsername, getMyBoards } from "../api/boardApi"
import CreateBoardForm from "../components/CreateBoardForm"
import BoardCard from "../components/BoardCard"
import Button from "../components/Button"
import MainLayout from "../layouts/MainLayout"
import Toast from "../components/Toast"

function BoardsPage() {

    const [boards, setBoards] = useState([])
    const [showCreateBoard, setShowCreateBoard] = useState(false)
    const [username, setUsername] = useState("")
    const [toast, setToast] = useState(null)

    useEffect(() => {
        loadBoards()
    }, []); // u [] ide koliko puta i kada se ponavlja effect, sad ovde samo jednom

    async function loadBoards() {
        try {
            const data = await getMyBoards()

            setBoards(data)

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

    // Napravi novi board
    async function handleCreateBoard() {

        if (!username.trim()) {
            return
        }

        try {
            await createBoardByUsername(username)

            setUsername("")
            setShowCreateBoard(false)

            showToast("Board created successfully.")

            loadBoards()

        } catch (error) {
            console.error(error)

            showToast("User not found.", "error")
        }
    }


    return (
        <MainLayout>
            <h1 className="text-3xl font-bold text-emerald-400 mb-3">My Boards</h1>

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                />
            )}

            <div className="my-6 max-w-xs">
                <Button
                    variant="secondary"
                    onClick={() => setShowCreateBoard(!showCreateBoard)}
                >
                    Create board
                </Button>
            </div>

            {showCreateBoard && (
                <CreateBoardForm
                    username={username}
                    setUsername={setUsername}
                    onCreate={handleCreateBoard}
                />
            )}


            {/* mapiranje, kreira karticu za svaki board */}
            <div className="space-y-4">
                {boards.map(board => (
                    <BoardCard key={board.id} board={board} />
                )) }
            </div>

        </MainLayout>
    )
}

export default BoardsPage