import { CREATE_MESSAGE } from "./types"


// Create message
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    }
}
