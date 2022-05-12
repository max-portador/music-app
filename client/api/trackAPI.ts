import { instance } from "./base";
import {ITrack} from "../types/track";

const TrackAPI = {
    fetchTrack: async ():Promise<ITrack[]> => {
        debugger
        const response = await instance.get<ITrack[]>('/tracks');
        return response.data;
    }
}

export default TrackAPI