import Input from "./Input"
import Button from "./Button"

function CreatePromptResponseForm({
                                      responseText,
                                      setResponseText,
                                      bookName,
                                      setBookName,
                                      imageUrl,
                                      setImageUrl,
                                      note,
                                      setNote,
                                      onCreate
                                  }) {
    return (
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 mb-6 space-y-4">
            <Input
                id="bookName"
                name="bookName"
                placeholder="Book title..."
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
            />

            <Input
                id="responseText"
                name="responseText"
                placeholder="Response text..."
                value={responseText}
                onChange={(e) => setResponseText(e.target.value)}
            />

            <Input
                id="responseImageUrl"
                name="responseImageUrl"
                placeholder="Optional image URL..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />

            <Input
                id="responseNote"
                name="responseNote"
                placeholder="Optional note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />

            <Button variant="secondary" onClick={onCreate}>
                Create response
            </Button>
        </div>
    )
}

export default CreatePromptResponseForm