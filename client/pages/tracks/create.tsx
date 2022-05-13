import React, {useState} from 'react';
import MainLayout from "../../layout/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid} from "@mui/material";
import TrackInfoForm from "../../components/TrackInfoForm";
import FileUpload from "../../components/FileUpload";
import {useInput} from "../../hooks/useInput";
import {useRouter} from "next/router";
import trackAPI from "../../api/trackAPI";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter();


    const next = async () => {
        if (activeStep !== 2) {
            setActiveStep((actual) => actual + 1)
        } else {
            const formData = new FormData();
            formData.append('name', name.value)
            formData.append('text', text.value)
            formData.append('artist', artist.value)
            formData.append('picture', picture)
            formData.append('audio', audio)
            await trackAPI.createTrack(formData)
            router.push('/tracks')
        }
    }

    const back = () => {
        setActiveStep((actual) => actual - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {
                    activeStep === 0 &&
                    <TrackInfoForm name={name} artist={artist} text={text}/>
                }
                {
                    activeStep === 1 &&
                    <FileUpload
                        accept={'image/*'}
                        setFile={setPicture}
                    >
                    <Button>Загрузите обложку</Button>
                    </FileUpload>
                }
                {
                    activeStep === 2 &&
                    <FileUpload
                        accept={'audio/*'}
                        setFile={setAudio}
                    >
                        <Button>Загрузите аудио</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent={'space-between'}>
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button onClick={next}>Вперед</Button>
            </Grid>

        </MainLayout>
    );
};

export default Create;