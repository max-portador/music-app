import React, {useEffect} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton} from "@mui/material";
import css from '../styles/Player.module.scss'
import Progress from "./Progress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";
import {baseURL} from "../api/base";

export let audio: HTMLAudioElement

const Player = () => {
    const {active, currentTime, duration, pause, volume} = useTypedSelector(state => state.player)
    const { tracks } = useTypedSelector(state => state.track)
    const {playTrack, pauseTrack, setVolume, setActive, setCurrentTime, setDuration} = useActions()

    useEffect(() => {
        if (!audio) {
            audio = new Audio();
            pauseTrack()
        } else {
            setAudio()
            play()
        }
    }, [active])

    const setAudio = () => {
        if (active) {
            audio.src = `${baseURL}/${active.audio}`;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                setDuration(~~(audio.duration))
            }

            audio.ontimeupdate = () => {
                setCurrentTime(~~(audio.currentTime))
                if (audio.currentTime === audio.duration){
                    pauseTrack()
                    const index = tracks.indexOf(active)
                    if (index < tracks.length - 1){
                        setActive(tracks[index + 1])
                    }
                    else {
                        setActive(tracks[0])
                    }
                }
            }
        }

    }

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))
    }

    if (!active) {
        return  null
    }


    return (
        <div className={css.player}>
            <IconButton onClick={play}>
                {!pause
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
                <div>{active?.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{active?.artist}</div>
            </Grid>
            <Progress left={currentTime} right={duration}
                      onChange={changeCurrentTime}
                      width={50} minuteFormat={true}
            />
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <Progress left={volume} right={100} onChange={changeVolume}/>
        </div>
    );
};

export default Player;