import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Grid, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import CarTrimTile from './CarTrimTile';
import TrimInfo from './TrimInfo';

const trims = [
    { brand: 'Honda', model: 'Civic', trim: 'Si', generation: 10, startYear: 2016, endYear: 2019 },
    { brand: 'Toyota', model: 'Corolla', trim: 'L', generation: 11, startYear: 2012, endYear: 2019 },
    { brand: 'Toyota', model: 'Corolla', trim: 'LE', generation: 11, startYear: 2012, endYear: 2019 },
    { brand: 'Toyota', model: 'Corolla', trim: 'LE Eco', generation: 11, startYear: 2012, endYear: 2019 },
    { brand: 'Toyota', model: 'Corolla', trim: 'S', generation: 11, startYear: 2012, endYear: 2019 }
];

export class CarTrims extends Component {
    state = { trimInfoVisisble: 'hidden' }

    showTrimInfo = () => this.setState({ trimInfoVisisble: 'visible' });

    hideTrimInfo = () => this.setState({ trimInfoVisisble: 'hidden' });

    renderCarTrimTiles = () => {
        return trims.filter(
                trim => this.props.model ?
                    (this.props.model === trim.model && this.props.brand === trim.brand && this.props.generation === trim.generation) :
                    true
            ).map(trim => (
                <CarTrimTile
                key={`${trim.brand}-${trim.model}-${trim.generation}-${trim.trim}`}
                trimInfo={trim}
                onClick={this.showTrimInfo}
                />
            )
        );
    };

    render() {
        return (
            <div>
                <TrimInfo
                id={0}
                visible={this.state.trimInfoVisisble}
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
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    generation: PropTypes.number.isRequired
};

export default CarTrims;
