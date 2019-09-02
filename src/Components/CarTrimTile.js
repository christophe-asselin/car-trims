import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Cell} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import Card, {
    CardPrimaryContent,
    CardMedia
} from "@material/react-card";
import '@material/react-card/dist/card.css';
import { Headline6, Subtitle2 } from '@material/react-typography';
import '@material/react-typography/dist/typography.css';

export class CarTrimTile extends Component {
    render() {
        return (
            <Cell columns='2'>
                <Card onClick={() => this.props.onClick()}>
                    <CardPrimaryContent>
                        <CardMedia wide imageUrl='https://st.motortrend.com/uploads/sites/10/2018/01/2018-Toyota-Corolla-ECO-front-three-quarter.jpg'/>
                        <Headline6>{`${this.props.trimInfo.brand} ${this.props.trimInfo.model} ${this.props.trimInfo.trim}`}</Headline6>
                        <Subtitle2>{
                            `Gen. ${this.props.trimInfo.generation} (${this.props.trimInfo.startYear} - ${this.props.trimInfo.endYear})`
                        }</Subtitle2>
                    </CardPrimaryContent>
                </Card>
            </Cell>
        )
    }
}

// propTypes
CarTrimTile.propTypes = {
    onClick: PropTypes.func.isRequired,
    trimInfo: PropTypes.object.isRequired
};

export default CarTrimTile;
