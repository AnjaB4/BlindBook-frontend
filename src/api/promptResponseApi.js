import axios from "axios"
import { getToken } from "../utils/token"

const API_URL = "http://localhost:8080/prompts"

export async function getResponsesForPrompt(promptId) {
    const response = await axios.get(`${API_URL}/${promptId}/responses`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data
}

export async function createPromptResponse(
    promptId,
    boardId,
    text,
    bookName,
    imageUrl,
    note
) {
    const response = await axios.post(
        `${API_URL}/${promptId}/responses`,
        {
            boardId: boardId,
            text: text || null,
            bookName: bookName || null,
            imageUrl: imageUrl || null,
            note: note || null
        },
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    )

    return response.data
}

export async function deletePromptResponse(promptId, promptResponseId) {
    const response = await axios.delete(`${API_URL}/${promptId}/responses/${promptResponseId}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    )

    return response.data
}

