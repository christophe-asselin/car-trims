import React from 'react';
import {Grid, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import BrandTile from './BrandTile';

const brands = [
    { name: 'Honda', logoUrl: 'https://www.carlogos.org/logo/Honda-logo-1920x1080.png' },
    { name: 'Toyota', logoUrl: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1665.png' },
    { name: 'Ford', logoUrl: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1666.png' },
    { name: 'Chevrolet', logoUrl: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1644.png' },
    { name: 'Jeep', logoUrl: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1648.png' },
    { name: 'Mercedes-Benz', logoUrl: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1655.png' },
    { name: 'BMW', logoUrl: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1641.png' },
    { name: "Porsche", logoUrl: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1663.png' }
];

const renderImageTiles = () => {
    return brands.map((brand) => (
        <BrandTile name={brand.name} logoUrl={brand.logoUrl}/>
    ));
};

export default function Brands() {
    return (
        <div>
            <Grid>
                <Row>
                    {renderImageTiles()}
                </Row>
            </Grid>
        </div>
    )
}

