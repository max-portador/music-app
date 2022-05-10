import React from 'react';
import MainLayout from "../../layout/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
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
            comments: [],
            text: 'Some text'},
        {_id: '3', artist: "А3",
            audio: 'http://localhost:5555/audio/ecc268f6-c57b-4072-bf6e-cbfa83c6d44e.mp3',
            picture: 'http://localhost:5555/image/014c7afd-3630-45ee-abac-9fce3a3f9f82.jpg',
            listens: 5,
            name: 'Track3',
            comments: [],
            text: 'Some text'},
    ]
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button href='tracks/create'>
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;