import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Cell} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import '@material/react-card/dist/card.css';
import { Headline6, Subtitle2 } from '@material/react-typography';
import '@material/react-typography/dist/typography.css';

const models = [
    { brand: 'Honda', model: 'Civic', generation: 10, startYear: 2016, endYear: 2019 },
    { brand: 'Honda', model: 'Civic', generation: 9, startYear: 2011, endYear: 2015 },
    { brand: 'Toyota', model: 'Corolla', generation: 12, startYear: 2018, endYear: 2019 },
    { brand: 'Toyota', model: 'Corolla', generation: 11, startYear: 2012, endYear: 2019 }
];

export class CarModels extends Component {
    renderModelTiles = () => {
        return models.filter(model => this.props.brand ? model.brand === this.props.brand : true).map(model => (
            <Cell key={`${model.brand}-${model.model}-${model.generation}`} columns='2'>
                <Card>
                    <CardPrimaryContent>
                        <CardMedia wide imageUrl='https://st.motortrend.com/uploads/sites/10/2018/01/2018-Toyota-Corolla-ECO-front-three-quarter.jpg' />
                        <Headline6>{model.brand + ' ' + model.model}</Headline6>
                        <Subtitle2>{`Gen. ${model.generation} (${model.startYear} - ${model.endYear})`}</Subtitle2>
                    </CardPrimaryContent>
                </Card>
            </Cell>
        ));
    };

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        {this.renderModelTiles()}
                    </Row>
                </Grid>                
            </div>
        )
    }
}

CarModels.propTypes = {
    brand: PropTypes.string.isRequired
}

export default CarModels;
