import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import BrandTile from './BrandTile';
import axios from 'axios';

const BRANDS_API_URL = 'http://localhost:5000/makers';

export class Brands extends Component {

    state = {
        brands: []
    };

    getBrands = () => {
        axios.get(BRANDS_API_URL).then(brands => {
            const sortedBrands = brands.data.sort((a,b) => {
                return (a.maker_name > b.maker_name) ? 1 : ((b.maker_name > a.maker_name) ? -1 : 0)
            });
            this.setState({ brands: sortedBrands });
        }).catch(e => {
            console.error('Error while getting maker info: ' + e);
        });
    };
    
    renderImageTiles = () => {
        return this.state.brands.map(brand => (
            <BrandTile
            key={brand.maker_name}
            name={brand.maker_name}
            logoUrl={brand.logo_url}
            handleClick={this.props.handleBrandSelect}/>
        ));
    };

    componentDidMount() {
        this.getBrands();
    }

    componentDidUpdate() {
        this.getBrands();
    }

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

