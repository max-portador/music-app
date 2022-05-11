import React from 'react';
import {Grid, TextField} from "@mui/material";

const TrackInfoForm: React.FC = () => {
    return (
        <Grid container direction={'column'} style={{ padding: 20}}>
            <TextField style={{ marginTop: 10}} label={'Название трека'}/>
            <TextField style={{ marginTop: 10}} label={'Имя исполнителя'}/>
            <TextField style={{ marginTop: 10}} label={'Текст к песне'} multiline rows={3}/>
        </Grid>
    );
};

export default TrackInfoForm;