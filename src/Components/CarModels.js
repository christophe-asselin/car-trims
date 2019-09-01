import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Grid, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import CarModelTile from './CarModelTile';

const models = [
    { brand: 'Honda', model: 'Civic', generation: 10, startYear: 2016, endYear: 2019 },
    { brand: 'Honda', model: 'Civic', generation: 9, startYear: 2011, endYear: 2015 },
    { brand: 'Toyota', model: 'Corolla', generation: 12, startYear: 2018, endYear: 2019 },
    { brand: 'Toyota', model: 'Corolla', generation: 11, startYear: 2012, endYear: 2019 }
];

export class CarModels extends Component {
    renderModelTiles = () => {
        return models.filter(model => this.props.brand ? model.brand === this.props.brand : true).map(model => (
            <CarModelTile
            key={`${model.brand}-${model.model}-${model.generation}`}
            modelInfo={model}
            handleClick={this.props.handleModelSelect}
            />
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
    brand: PropTypes.string.isRequired,
    handleModelSelect: PropTypes.func.isRequired
};

export default CarModels;
