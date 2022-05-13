import React, {useState} from 'react';
import MainLayout from "../../layout/MainLayout";
import {Box, Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";
import {baseURL} from "../../api/base";
import {GetServerSideProps} from "next";
import trackAPI from "../../api/trackAPI";
import {useInput} from "../../hooks/useInput";
import {commentAPI} from "../../api/commentAPI";
import css from '../../styles/TrackPage.module.scss'

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState(serverTrack)
    const router = useRouter();
    const username = useInput('')
    const comment = useInput('')

    const handleClick = () => {
        router.push(`/tracks`)
    }

    const addComment = async () => {
        try {
            if (username.value && comment.value) {
                const newComment = await commentAPI.addComment(username.value, comment.value, track._id);
                setTrack({
                    ...track,
                    comments: [...track.comments, newComment]
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <MainLayout title={`${track.name} - ${track.artist}`} keywords={track.artist} >
            <Button
                variant={'outlined'}
                style={{fontSize: 32}}
                onClick={() => handleClick()}>
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={`${baseURL}/${track?.picture}`} alt='' width={200} height={200}/>
                <Box ml={3}>
                    <h1>Название трека - {track.name} </h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </Box>
            </Grid>

            <h1>Lyrics</h1>
            <pre>{track.text}</pre>
            <Grid container>
                <h1>Комментарии</h1>
                <TextField
                    label={"Ваше имя"}
                    fullWidth
                    {...username}
                />
                <TextField
                    label={"Комментарий"}
                    fullWidth
                    multiline
                    style={{marginTop: '20px'}}
                    {...comment}
                    rows={4}
                />
                <Button onClick={addComment}>Отправить</Button>
            </Grid>
            <Box>
                {
                    track.comments.map(comment =>
                        <div key={comment._id}
                            className={css.comment_wrapper}
                        >
                            <div className={css.comment_username}>
                                {comment.username}</div>

                            <div className={css.comment_text}>
                                {comment.text}
                            </div>
                        </div>
                    )
                }
            </Box>
        </MainLayout>
    );
};

export default TrackPage;


export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const track = await trackAPI.fetchTrack(params.id as string)
    return {
        props: {
            serverTrack: track
        }
    }
}
