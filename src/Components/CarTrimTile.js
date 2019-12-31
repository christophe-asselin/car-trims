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
        const last_year = this.props.trimInfo.model.last_year === null ? 'now' : this.props.trimInfo.model.last_year;
        return (
            <Cell columns='2'>
                <Card onClick={() => this.props.onClick()}>
                    <CardPrimaryContent>
                        <CardMedia wide imageUrl={this.props.trimInfo.img_url}/>
                        <Headline6>{
                            `${this.props.trimInfo.model.maker_name} ${this.props.trimInfo.model.model_name} ${this.props.trimInfo.trim_name}`
                        }</Headline6>
                        <Subtitle2>{
                            `Gen. ${this.props.trimInfo.model.generation_no} (${this.props.trimInfo.model.first_year} - ${last_year})`
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
