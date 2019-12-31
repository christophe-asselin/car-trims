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
        const last_year = this.props.modelInfo.last_year === null ? 'now' : this.props.modelInfo.last_year;
        return (
            <Cell columns='2'>
                <Card
                onClick={() =>
                    this.props.handleClick(this.props.modelInfo.id, this.props.modelInfo.maker_name)
                }>
                    <CardPrimaryContent>
                        <CardMedia wide imageUrl={this.props.modelInfo.img_url}/>
                        <Headline6>{this.props.modelInfo.maker_name + ' ' + this.props.modelInfo.model_name}</Headline6>
                        <Subtitle2>{
                            `Gen. ${this.props.modelInfo.generation_no} (${this.props.modelInfo.first_year} - ${last_year})`
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
    handleClick: PropTypes.func.isRequired
}

export default CarModelTile;
