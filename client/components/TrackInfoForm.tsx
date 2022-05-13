import React from 'react';
import {Grid, TextField} from "@mui/material";
import {useInput} from "../hooks/useInput";

const TrackInfoForm: React.FC<Props> = ({artist, name, text}) => {
    return (
        <Grid container direction={'column'} style={{ padding: 20}}>
            <TextField style={{ marginTop: 10}} label={'Название трека'} {...name}/>
            <TextField style={{ marginTop: 10}} label={'Имя исполнителя'} {...artist}/>
            <TextField style={{ marginTop: 10}} label={'Текст к песне'}
                       multiline rows={3} {...text}/>
        </Grid>
    );
};

interface Props {
    name: ReturnType<typeof useInput>
    artist: ReturnType<typeof useInput>
    text: ReturnType<typeof useInput>
}

export default TrackInfoForm;