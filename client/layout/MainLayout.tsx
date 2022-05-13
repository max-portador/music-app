import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";
import Player from "../components/Player";
import Head from "next/head";
import css from '../styles/MainLayout.module.scss'

const MainLayout: React.FC<Props> = ({title, description, keywords, children}) => {
    return (
        <>
            <Head>
                <title>{ title || 'Музыкальная платформа' }</title>
                <meta
                    name='description'
                    content={['Music-app NextJS, ReactJS', description || ''].join(' ') }/>
                <meta
                    name='robots'
                    content='index, follow'/>
                <meta
                    name='keywords'
                    content={keywords || '' + 'music, spotify'}/>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'/>
            </Head>
            <Navbar/>
            <Container className={css.container} >
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;

type Props = {
    children?: React.ReactNode,
    title?: string,
    description?: string,
    keywords?: string,

}