import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Grid, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import CarModelTile from './CarModelTile';
import axios from 'axios';

const MODELS_API_BASE_URL = 'http://localhost:5000/models';

export class CarModels extends Component {

    state = {
        models: []
    };

    getModels = () => {
        // restrict to certain brand if brand was selected
        const url = this.props.brand ? MODELS_API_BASE_URL + '/maker/' + this.props.brand : MODELS_API_BASE_URL;
        axios.get(url).then((models) => {
            console.log(models.data);
            this.setState({ models: models.data });
        }).catch((e) => {
            console.error('Error while getting models: ' + e);
        });
    };

    renderModelTiles = () => {
        return this.state.models.map(model => (
            <CarModelTile
            key={model.id}
            modelInfo={model}
            handleClick={this.props.handleModelSelect}
            />
        ));
    };

    componentDidMount() {
        this.getModels();
    }

    componentDidUpdate() {
        this.getModels();
    }

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
