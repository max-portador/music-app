import React from 'react';
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@mui/material";
import {Delete, Pause, PlayArrow} from "@material-ui/icons";
import {useRouter} from "next/router";
import {useActions} from "../hooks/useAction";
import css from '../styles/TrackItem.module.scss'
import {baseURL} from "../api/base";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {audio} from "./Player";

const TrackItem: React.FC<Props> = ({ track, active=false}) => {
    const router = useRouter()
    const { deleteTrack,  pauseTrack, playTrack, setActive } = useActions()
    const { pause } = useTypedSelector(state => state.player)

    const handleClick = () => {
        router.push(`tracks/${track._id}`)
    }

    const handleDeleteBtn = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (active){
            setActive(null)
        }
        deleteTrack(track._id)
    }

    const play = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!active) {
            pauseTrack()
            setActive(track);
        } else {
            if (!pause) {
                pauseTrack()
                audio.pause()
            }
            else {
                playTrack()
                audio.play()
            }
        }
    }

    return (
        <Card className={css.track} onClick={() => handleClick()}>
            <IconButton onClick={play}>
                {active && !pause
                ? <Pause/>
                : <PlayArrow/>
            }
            </IconButton>
            <img src={`${baseURL}/${track?.picture}`} alt="" width={70} height={70}/>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <IconButton
                onClick={handleDeleteBtn}
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