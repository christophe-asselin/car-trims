import React, { Component } from 'react';
import './App.css';
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
import Drawer, { DrawerAppContent, DrawerContent, DrawerHeader, DrawerTitle } from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
import List, { ListItem, ListItemGraphic, ListItemText } from '@material/react-list';
import Brands from './Components/Brands';

class App extends Component {
    state = {
        selectedIndex: 0,
        open: false
    };

    toggle = () => {
        this.setState({
            selectedIndex: this.state.selectedIndex,
            open: !this.state.open
        });
    }

    handleSelect = (selectedIndex) => {
        this.setState({
            selectedIndex: selectedIndex,
            open: this.state.open
        });
    }

    renderPage = () => {
        switch (this.state.selectedIndex) {
            case 0:
                return (
                    <Brands/>
                );
            case 1:
                return (
                    <p>Models</p>
                );
            case 2:
                return (
                    <p>Trims</p>
                );
            case 3:
                return (
                    <p>About</p>
                );
            default:
                return (
                    <p>Brands</p>
                );
        }
    }

    render() {
        return (
            <div className='drawer-container'>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <TopAppBar>
                    <TopAppBarRow>
                        <TopAppBarSection align='start'>
                            <TopAppBarIcon navIcon tabIndex={0}>
                                <MaterialIcon hasRipple icon='menu' onClick={this.toggle} />
                            </TopAppBarIcon>
                            <TopAppBarTitle>CarTrims.info</TopAppBarTitle>
                        </TopAppBarSection>
                    </TopAppBarRow>
                </TopAppBar>

                <TopAppBarFixedAdjust className='top-app-bar-fix-adjust'>
                    <Drawer dismissible open={this.state.open}>
                        <DrawerHeader>
                            <DrawerTitle tag='h2'>
                                Site Map
                            </DrawerTitle>
                        </DrawerHeader>

                        <DrawerContent>
                            <List
                            singleSelection
                            selectedIndex={this.state.selectedIndex}
                            handleSelect={this.handleSelect}
                            >
                                <ListItem>
                                    <ListItemGraphic graphic={<MaterialIcon icon='directions_car' />} />
                                    <ListItemText primaryText='Brands' />
                                </ListItem>
                                <ListItem>
                                    <ListItemGraphic graphic={<MaterialIcon icon='filter_list' />} />
                                    <ListItemText primaryText='Models' />
                                </ListItem>
                                <ListItem>
                                    <ListItemGraphic graphic={<MaterialIcon icon='attach_money' />} />
                                    <ListItemText primaryText='Trims' />
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
