import {instance} from "./base";
import {IComment} from "../types/track";

export const commentAPI = {
    addComment: async (username: string, text: string, trackId: string): Promise<IComment> => {
        try {
            const response = await instance.post<IComment>('tracks/comment', {
                username,
                text,
                trackId
            })

            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
}
