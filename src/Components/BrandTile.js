import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/react-layout-grid/dist/layout-grid.css';
import {Cell} from '@material/react-layout-grid';

export class BrandTile extends Component {

    listElementStyle = {
        backgroundImage: 'url(' + this.props.logoUrl + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        backgroundClip: 'padding-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderRadius: 8 + 'px',
        paddingTop: 78 + '%'
    };
    
    tileLabelStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        verticalAlign: 'bottom',
        padding: '16px'
    };

    render() {
        return (
            <Cell
            columns='2'
            className='tile'
            style={this.listElementStyle}
            onClick={() => this.props.handleClick(this.props.name)}>
                <span style={this.tileLabelStyle}>{this.props.name}</span>
            </Cell>
        )
    }
}

// propTypes
BrandTile.propTypes = {
    name: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default BrandTile;

