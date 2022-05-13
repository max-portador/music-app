import React, {useState} from 'react';
import MainLayout from "../../layout/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid} from "@mui/material";
import TrackInfoForm from "../../components/TrackInfoForm";
import FileUpload from "../../components/FileUpload";
import {useInput} from "../../hooks/useInput";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)


    const next = () => {
        if (activeStep !== 2) {
            setActiveStep((actual) => actual + 1)
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
                    <TrackInfoForm/>
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