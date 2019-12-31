import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Grid, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import CarTrimTile from './CarTrimTile';
import TrimInfo from './TrimInfo';
import axios from 'axios';
 
const TRIMS_API_BASE_URL = 'http://localhost:5000/trims';

// const trims = [
//     { brand: 'Honda', model: 'Civic', trim: 'Si', generation: 10, startYear: 2016, endYear: 2019 },
//     { brand: 'Toyota', model: 'Corolla', trim: 'L', generation: 11, startYear: 2012, endYear: 2019 },
//     { brand: 'Toyota', model: 'Corolla', trim: 'LE', generation: 11, startYear: 2012, endYear: 2019 },
//     { brand: 'Toyota', model: 'Corolla', trim: 'LE Eco', generation: 11, startYear: 2012, endYear: 2019 },
//     { brand: 'Toyota', model: 'Corolla', trim: 'S', generation: 11, startYear: 2012, endYear: 2019 }
// ];

export class CarTrims extends Component {
    state = {
        trimInfoVisible: 'hidden',
        trims: []
    };

    showTrimInfo = () => this.setState({ trimInfoVisible: 'visible' });

    hideTrimInfo = () => this.setState({ trimInfoVisible: 'hidden' });

    getTrims = () => {
        // restrict to certain brand if brand was selected
        const url = this.props.modelId === -1 ? TRIMS_API_BASE_URL : TRIMS_API_BASE_URL + '/model/' + this.props.modelId;
        axios.get(url).then(trims => {
            this.setState({
                trimInfoVisible: this.state.trimInfoVisible,
                trims: trims.data
            });
        }).catch(e => {
            console.error('Error while getting trims: ' + e);
        });
    };

    renderCarTrimTiles = () => {
        return this.state.trims.map(trim => (
                <CarTrimTile
                key={trim.id}
                trimInfo={trim}
                onClick={this.showTrimInfo}
                />
            )
        );
    };

    componentDidMount() {
        this.getTrims();
    }

    componentDidUpdate() {
        this.getTrims();
    }

    render() {
        return (
            <div>
                <TrimInfo
                id={0}
                visible={this.state.trimInfoVisible}
                onClose={this.hideTrimInfo}/>
                <Grid>
                    <Row>
                        {this.renderCarTrimTiles()}
                    </Row>
                </Grid>
            </div>
        )
    }
}

CarTrims.propTypes = {
    modelId: PropTypes.number.isRequired,
};

export default CarTrims;
