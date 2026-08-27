import axios from "axios"
import { getToken } from "../utils/token"

const API_URL = "http://localhost:8080/boards"

// get:  url - config (headers)
export async function getPromptsForBoard(boardId) {
    const response = await axios.get(`${API_URL}/${boardId}/prompts`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return response.data
}

// post:  url - body - config (headers)
export async function createPrompt(boardId, pomptText, promptNote, promptImageUrl) {
    const response = await axios.post(`${API_URL}/${boardId}/prompts`,
        {
            text: pomptText,
            note: promptNote || null,
            imageUrl: promptImageUrl || null
        },
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    )

    return response.data
}

export async function deletePrompt(boardId, promptId) {
    const response = await axios.delete(`${API_URL}/${boardId}/prompts/${promptId}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    )

    return response.data
}
