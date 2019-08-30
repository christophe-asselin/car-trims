import React, { Component } from 'react';
import './App.scss';
import "@material/react-drawer/dist/drawer.css";
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-list/dist/list.css';
import TopAppBar, {
    TopAppBarFixedAdjust, 
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';
import Drawer, { DrawerAppContent, DrawerContent } from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
import List, { ListItem, ListItemGraphic, ListItemText } from '@material/react-list';
import Brands from './Components/Brands';
import HomePage from './Components/HomePage';
import CarModels from './Components/CarModels';

class App extends Component {
    state = {
        selectedIndex: 0,
        open: false,
        selectedBrand: ''
    };

    toggle = () => {
        this.setState({
            selectedIndex: this.state.selectedIndex,
            open: !this.state.open,
            selectedBrand: this.state.selectedBrand
        });
    };

    onTitleClick = () => {
        this.setState({
            selectedIndex: 0,
            open: false,
            selectedBrand: ''
        });
    };

    handleSelect = (selectedIndex) => {
        this.setState({
            selectedIndex: selectedIndex,
            open: false,
            selectedBrand: ''
        });
    };

    handleBrandSelect = (brand) => {
        this.setState({
            selectedIndex: 2,
            open: false,
            selectedBrand: brand
        });
    };

    renderPage = () => {
        switch (this.state.selectedIndex) {
            case 1:
                return (<Brands handleBrandSelect={this.handleBrandSelect}/>);
            case 2:
                return (<CarModels brand={this.state.selectedBrand}/>);
            case 3:
                return (<p>About</p>);
            default:
                return (<HomePage/>);
        }
    }

    render() {
        return (
            <div className='drawer-container'>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <TopAppBar className='elevation-z2'>
                    <TopAppBarRow>
                        <TopAppBarSection align='start'>
                            <TopAppBarIcon navIcon tabIndex={0}>
                                <MaterialIcon hasRipple icon='menu' onClick={this.toggle} />
                            </TopAppBarIcon>
                            <TopAppBarTitle
                            onClick={this.onTitleClick}
                            style={{cursor: 'pointer'}}
                            >CarTrims.info</TopAppBarTitle>
                        </TopAppBarSection>
                    </TopAppBarRow>
                </TopAppBar>

                <TopAppBarFixedAdjust className='top-app-bar-fix-adjust'>
                    <Drawer modal open={this.state.open}>
                        <DrawerContent>
                            <List
                            singleSelection
                            selectedIndex={this.state.selectedIndex}
                            handleSelect={this.handleSelect}
                            >
                                <ListItem>
                                    <ListItemGraphic graphic={<MaterialIcon icon='home' />} />
                                    <ListItemText primaryText='Home' />
                                </ListItem>
                                <ListItem>
                                    <ListItemGraphic graphic={<MaterialIcon icon='directions_car' />} />
                                    <ListItemText primaryText='Brands' />
                                </ListItem>
                                <ListItem>
                                    <ListItemGraphic graphic={<MaterialIcon icon='filter_list' />} />
                                    <ListItemText primaryText='Models' />
                                </ListItem>
                                <ListItem>
                                    <ListItemGraphic graphic={<MaterialIcon icon='alternate_email' />} />
                                    <ListItemText primaryText='About' />
                                </ListItem>
                            </List>
                        </DrawerContent>
                    </Drawer>

                    <DrawerAppContent className='drawer-app-content'>
                        {this.renderPage()}
                    </DrawerAppContent>
                </TopAppBarFixedAdjust>
            </div>
        );
    }
}

export default App;
