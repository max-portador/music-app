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

    createTrack: async (formData: FormData): Promise<ITrack> => {
        const response = await instance.post<ITrack>('/tracks', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        return response.data
    },


}

export default TrackAPI