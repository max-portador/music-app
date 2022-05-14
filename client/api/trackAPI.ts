import { instance } from "./base";
import {ITrack} from "../types/track";

const TrackAPI = {
    fetchTrackList: async ():Promise<ITrack[]> => {
        const response = await instance.get<ITrack[]>('/tracks');
        return response.data;
    },

    fetchTrack: async (id: string ):Promise<ITrack> => {
        const response = await instance.get<ITrack>(`/tracks/${id}`);
        return response.data;
    },

    searchTrack: async (term: string ):Promise<ITrack[]> => {
        if (term.trim()) {
            const response = await instance.get<ITrack[]>(`/tracks/search?term=${term}`);
            return response.data;
        }
        else {
            return await TrackAPI.fetchTrackList()
        }


    },

    createTrack: async (formData: FormData): Promise<ITrack> => {
        const response = await instance.post<ITrack>('/tracks', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        return response.data
    },

    deleteTrack: async (track_id: string): Promise<string> => {
        console.log('start delete API')
        const response = await instance.delete<string>(`/tracks/${track_id}` )
        console.log("response", response)
        return response.data
    },


}

export default TrackAPI