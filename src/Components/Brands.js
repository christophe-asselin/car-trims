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
        axios.get(BRANDS_API_URL).then(brands => {
            this.setState({ brands: brands.data });
        }).catch(e => {
            console.error('Error while getting maker info: ' + e);
        });
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

