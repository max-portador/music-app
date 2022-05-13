import React from 'react';
import MainLayout from "../../layout/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import TrackList from "../../components/TrackList";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTracks} from "../../store/reducers/trackReducer";

const Index = () => {
    const {tracks, errorMessage} = useTypedSelector(state => state.track)

    if (errorMessage){
        return <MainLayout>
           <h1>{errorMessage}</h1>
        </MainLayout>
    }

    return (
        <MainLayout title={'Список треков'}>
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

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks())
    return null
})


export default Index;

