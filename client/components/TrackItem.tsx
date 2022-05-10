import React from 'react';
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@mui/material";
import css from '../styles/TrackItem.module.scss'
import {Delete, Pause, PlayArrow} from "@material-ui/icons";
import {useRouter} from "next/router";

const TrackItem: React.FC<Props> = ({ track, active=false}) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(`tracks/${track._id}`)
    }

    return (
        <Card className={css.track} onClick={() => handleClick()}>
            <IconButton onClick={(e)=> {e.stopPropagation()}}>{
                active
                ? <Pause/>
                : <PlayArrow/>
            }</IconButton>
            <img src={track.picture} alt="" width={70} height={70}/>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton
                onClick={(e)=> {e.stopPropagation()}}
                style={{marginLeft: 'auto'}}>
                <Delete/>
            </IconButton>

        </Card>
    );
};

export default TrackItem;

interface Props {
    track: ITrack;
    active?: boolean;
}