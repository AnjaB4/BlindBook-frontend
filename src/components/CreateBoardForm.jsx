import Input from "./Input"
import Button from "./Button"

function CreateBoardForm({
    username,
    setUsername,
    onCreate
}) {
    return (
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 mb-8 space-y-4">
            <Input
                id="boardUsername"
                name="boardUsername"
                placeholder="Enter username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <Button variant="secondary" onClick={onCreate}>
                Create board
            </Button>
        </div>
    )
}

export default CreateBoardForm