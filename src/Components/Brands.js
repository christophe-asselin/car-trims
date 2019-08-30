import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import BrandTile from './BrandTile';

const brands = [
    { name: 'Honda', logoUrl: 'https://www.carlogos.org/logo/Honda-logo-1920x1080.png' },
    { name: 'Toyota', logoUrl: 'https://www.carlogos.org/logo/Honda-logo-1920x1080.png' },
    { name: 'Ford', logoUrl: 'https://www.carlogos.org/logo/Honda-logo-1920x1080.png' },
    { name: 'Chevrolet', logoUrl: 'https://www.carlogos.org/logo/Honda-logo-1920x1080.png' },
    { name: 'Jeep', logoUrl: 'https://www.carlogos.org/logo/Honda-logo-1920x1080.png' },
    { name: 'Mercedes-Benz', logoUrl: 'https://www.carlogos.org/logo/Honda-logo-1920x1080.png' },
    { name: 'BMW', logoUrl: 'https://www.carlogos.org/logo/Honda-logo-1920x1080.png' },
    { name: "Porsche", logoUrl: 'https://www.carlogos.org/logo/Honda-logo-1920x1080.png' }
];

export class Brands extends Component {
    
    renderImageTiles = () => {
        return brands.map((brand) => (
            <BrandTile
            key={brand.name}
            name={brand.name}
            logoUrl={brand.logoUrl}
            handleClick={this.props.handleBrandSelect}/>
        ));
    };

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        {this.renderImageTiles()}
                    </Row>
                </Grid>
            </div>
        )
    }
}

Brands.propTypes = {
    handleBrandSelect: PropTypes.func.isRequired
}

export default Brands;

