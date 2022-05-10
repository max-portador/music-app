import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";

const MainLayout: React.FC<Props> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{
                margin: '90px 0 240px 90px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;

type Props = {
    children?: React.ReactNode
}