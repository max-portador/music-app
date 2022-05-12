import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton} from "@mui/material";
import css from '../styles/Player.module.scss'
import {ITrack} from "../types/track";
import Progress from "./Progress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";
import {useSelector} from "react-redux";
import {RootState} from "../store";

const Player = () => {
    const track: ITrack = {
        _id: '1', artist: "А1",
        audio: 'http://localhost:5555/audio/ecc268f6-c57b-4072-bf6e-cbfa83c6d44e.mp3',
        picture: 'http://localhost:5555/image/014c7afd-3630-45ee-abac-9fce3a3f9f82.jpg',
        listens: 5,
        name: 'Track1',
        comments: [],
        text: 'Some text'
    };
    let active = false;

    const a = useTypedSelector(state => state)
    // const {active, currentTime, duration, pause, volume} = useSelector<RootState>(state => state.player)
    const {playTrack, pauseTrack} = useActions()

    const play = () => {
        if (active) {
            playTrack()
        } else {
            pauseTrack()
        }
    }
    debugger

    return (
        <div className={css.player}>
            {JSON.stringify(a)}
            <IconButton onClick={(e) => {
                e.stopPropagation()
            }}>
                {active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <Progress left={0} right={100} onChange={(e) => {}}/>
            <VolumeUp style={{marginLeft: 'auto'}} />
            <Progress left={0} right={100} onChange={(e) => {}}/>
        </div>
    );
};

export default Player;