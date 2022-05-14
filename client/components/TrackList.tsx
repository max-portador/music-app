import {Box, Grid} from '@mui/material';
import React from 'react';
import {ITrack} from "../types/track";
import TrackItem from "./TrackItem";
import {useTypedSelector} from "../hooks/useTypedSelector";

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
    const { active } = useTypedSelector(state => state.player)
    return (
        <Grid container direction='column'>
            <Box p={2}>
                {tracks.map( track =>
                    <TrackItem
                        key={track._id}
                        track={track}
                        active={track._id === active?._id}
                    />
                )}
            </Box>
        </Grid>
    );
};

export default TrackList;

interface TrackListProps {
    tracks: ITrack[];
}