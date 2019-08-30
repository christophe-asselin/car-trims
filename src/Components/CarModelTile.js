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

export class CarModelTile extends Component {
    render() {
        return (
            <Cell columns='2'>
                <Card>
                    <CardPrimaryContent>
                        <CardMedia wide imageUrl='https://st.motortrend.com/uploads/sites/10/2018/01/2018-Toyota-Corolla-ECO-front-three-quarter.jpg' />
                        <Headline6>{this.props.modelInfo.brand + ' ' + this.props.modelInfo.model}</Headline6>
                        <Subtitle2>{
                            `Gen. ${this.props.modelInfo.generation} (${this.props.modelInfo.startYear} - ${this.props.modelInfo.endYear})`
                        }</Subtitle2>
                    </CardPrimaryContent>
                </Card>
            </Cell>
        )
    }
}

// propTypes
CarModelTile.propTypes = {
    modelInfo: PropTypes.object.isRequired,
}

export default CarModelTile;
