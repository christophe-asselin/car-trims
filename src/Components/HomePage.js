import React from 'react';
import { Headline1 } from '@material/react-typography';
import background from '../assets/car_background.jpg';
import '@material/react-typography/dist/typography.css';

const homePageStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: 100 + '%'
};

const titleContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgb(98, 0, 238)',
    color: 'white'
};

const titleStyle = {
    fontSize: 6 + "vw",
    paddingTop: 5 + '%',
    paddingBottom: 5 + '%'
};

export default function HomePage() {
    return (
        <div style={homePageStyle}>
            <div className='elevation-z1' style={titleContainerStyle}>
                <Headline1 style={titleStyle}>Welcome to CarTrims.info</Headline1>
            </div>
        </div>
    )
}
