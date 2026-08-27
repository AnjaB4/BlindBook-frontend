import axios from "axios"
import { getToken } from "../utils/token"

const API_URL = "http://localhost:8080/boards"

export async function getMyBoards() {
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    })

    return response.data
}

export async function createBoardByUsername(username) {
    const response = await axios.post(`${API_URL}/by-username?username=${username}`, null, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    })

    return response.data
}