import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css';
import { Headline5, Subtitle1 } from '@material/react-typography';
import '@material/react-typography/dist/typography.css';
import TrimInfoDetails from './TrimInfoDetails';

export class TrimInfo extends Component {

    getStyle = () => {
        return {
            width: '100%',
            height: '100%',
            visibility: this.props.visible,
            position: 'fixed',
            zIndex: 2,
            backgroundColor: 'white'
        };
    };

    backButtonContainerStyle = {position: 'absolute'};

    backButtonStyle = {
        color: 'white',
        cursor: 'pointer',
        padding: '12px'
    };

    backgroundImageStyle = {
        height: '25%',
        width: '100%',
        backgroundImage: 'url(https://st.motortrend.com/uploads/sites/10/2018/01/2018-Toyota-Corolla-ECO-front-three-quarter.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
        backgroundSize: 'cover'
    };

    contentContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '75%',
        overflow: 'hidden'
    };

    titleStyle = { padding: '15px 25px' };

    render() {
        return (
            <div style={this.getStyle()}>
                <div className='mdc-top-app-bar__section' style={this.backButtonContainerStyle}>
                    <MaterialIcon
                    className='mdc-top-app-bar__navigation-icon'
                    icon='arrow_back'
                    hasRipple
                    style={this.backButtonStyle}
                    onClick={() => this.props.onClose()}
                    />
                </div>
                <div style={this.backgroundImageStyle}></div>
                <div style={this.contentContainerStyle}>
                    <div style={this.titleStyle}>
                        <Headline5>Toyota Corolla S</Headline5>
                        <Subtitle1>Gen. 11 (2012 - 2019)</Subtitle1>
                    </div>
                    <TrimInfoDetails/>
                </div>
            </div>
        )
    }
}

TrimInfo.propTypes = {
    id: PropTypes.number.isRequired,
    visible: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default TrimInfo;
