import Input from "./Input";
import Button from "./Button";

function CreatePromptForm({
    promptText,
    setPromptText,
    promptNote,
    setPromptNote,
    promptImageUrl,
    setPromptImageUrl,
    onCreate
}) {
    return (
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 mb-6 space-y-4">
            <Input
                id="promptText"
                name="promptText"
                placeholder="Give a new prompt..."
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
            />

            <Input
                id="promptNote"
                name="promptNote"
                placeholder="Optional note..."
                value={promptNote}
                onChange={(e) => setPromptNote(e.target.value)}
            />

            <Input
                id="promptImageUrl"
                name="promptImageUrl"
                placeholder="Optional image..."
                value={promptImageUrl}
                onChange={(e) => setPromptImageUrl(e.target.value)}
            />

            <Button
                variant="secondary"
                onClick={onCreate}
            >
                Create
            </Button>
        </div>
    )
}

export default CreatePromptForm

