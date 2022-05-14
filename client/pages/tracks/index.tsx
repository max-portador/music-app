import React, {useState} from 'react';
import {Box, Button, Card, Grid, TextField} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTracks} from "../../store/reducers/trackReducer";
import MainLayout from "../../layout/MainLayout";
import TrackList from "../../components/TrackList";
import {useActions} from "../../hooks/useAction";

const Index = () => {
    const {tracks, errorMessage} = useTypedSelector(state => state.track)
    const [query, setQuery] = useState<string>()
    const [timer, setTimer] = useState(null)
    const {searchTrack} = useActions()

    if (errorMessage) {
        return <MainLayout>
            <h1>{errorMessage}</h1>
        </MainLayout>
    }

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        if (timer) {
            clearTimeout(timer)
        }
        setTimer(setTimeout(async () => {
            await searchTrack(query)
            },500))
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
                    <TextField
                        placeholder={'Поиск в списке треков'}
                        fullWidth
                        style={{padding: '0 30px'}}
                        value={query}
                        onChange={search}
                    />
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

