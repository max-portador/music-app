import React from 'react';
import MainLayout from "../../layout/MainLayout";
import {Box, Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";

const TrackPage = () => {
    const tracks: ITrack[] = [
        {_id: '1', artist: "А1",
            audio: 'http://localhost:5555/audio/ecc268f6-c57b-4072-bf6e-cbfa83c6d44e.mp3',
            picture: 'http://localhost:5555/image/014c7afd-3630-45ee-abac-9fce3a3f9f82.jpg',
            listens: 5,
            name: 'Track1',
            comments: [],
            text: 'Some text'},
        {_id: '2', artist: "А2",
            audio: 'http://localhost:5555/audio/ecc268f6-c57b-4072-bf6e-cbfa83c6d44e.mp3',
            picture: 'http://localhost:5555/image/014c7afd-3630-45ee-abac-9fce3a3f9f82.jpg',
            listens: 5,
            name: 'Track2',
            comments: [{_id: 'wgew', text: "шалалалала", username: 'Falcon'}],
            text: 'Some text'},
        {_id: '3', artist: "А3",
            audio: 'http://localhost:5555/audio/ecc268f6-c57b-4072-bf6e-cbfa83c6d44e.mp3',
            picture: 'http://localhost:5555/image/014c7afd-3630-45ee-abac-9fce3a3f9f82.jpg',
            listens: 5,
            name: 'Track3',
            comments: [],
            text: 'Some text'},
    ]
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
                <img src={track.picture} alt='' width={200} height={200}/>
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