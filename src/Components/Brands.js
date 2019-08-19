import React from 'react';

const brands = [
    { name: 'Honda', logoLink: 'https://www.carlogos.org/logo/Honda-logo-1920x1080.png' },
    { name: 'Toyota', logoLink: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1665.png' },
    { name: 'Ford', logoLink: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1666.png' },
    { name: 'Chevrolet', logoLink: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1644.png' },
    { name: 'Jeep', logoLink: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1648.png' },
    { name: 'Mercedes-Benz', logoLink: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1655.png' },
    { name: 'BMW', logoLink: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1641.png' },
    { name: "Porsche", logoLink: 'http://pngimg.com/uploads/car_logo/car_logo_PNG1663.png' }
];

const renderImageList = () => {
    return brands.map((brand) => (
        <div style={getListElementStyle(brand.logoLink)}>
            <span style={getTileLabelStyle()}>{brand.name}</span>
        </div>
    ));
};

const getListStyle = () => {
    return {
        'display': 'flex',
        'flex-direction': 'row',
        'flex-wrap': 'wrap'
    };
};

const getListElementStyle = (link) => {
    return {
        backgroundImage: 'url(' + link + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        margin: '5px',
        borderRadius: 5 + 'px',
        width: 200 + 'px',
        height: 200 + 'px'
    };
};

const getTileLabelStyle = () => {
    return {
        backgroundColor: '#80808080',
        verticalAlign: 'bottom'
    };
};

export default function Brands() {
    return (
        <div style={getListStyle()}>
            {renderImageList()}
        </div>
    )
}

