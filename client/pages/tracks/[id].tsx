import React from 'react';
import MainLayout from "../../layout/MainLayout";
import {Box, Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import {baseURL} from "../../api/base";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const TrackPage = () => {
    const { tracks } = useTypedSelector(state => state.track)
    const router = useRouter()
    const handleClick = () => {
        router.push(`/tracks`)
    }

    const track = tracks[Number(router.query.id) - 1]
    // console.table(track)
    return (
        <MainLayout>
            <Button
                variant={'outlined'}
                style={{fontSize: 32}}
                onClick={() => handleClick()}>
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}} >
                <img src={`${baseURL}/${track.picture}`} alt='' width={200} height={200}/>
                <Box ml={3}>
                    <h1>Название трека - {track.name} </h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </Box>
            </Grid>

            <h1>Lyrics</h1>
            <p>{track.text}</p>
            <Grid container>
                <h1>Комментарии</h1>
                <TextField
                    label={"Ваше имя"}
                    fullWidth
                />
                <TextField
                    label={"Коментарий"}
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <Box>
                {
                    track.comments.map( comment =>
                        <div key={comment._id}>
                            <div>{comment.username}</div>
                            <div>{comment.text}</div>
                        </div>
                    )
                }
            </Box>
        </MainLayout>
    );
};

export default TrackPage;