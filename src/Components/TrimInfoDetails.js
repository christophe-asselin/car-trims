import React, { Component } from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import '@material/react-tab-bar/dist/tab-bar.css';
import '@material/react-tab-scroller/dist/tab-scroller.css';
import '@material/react-tab/dist/tab.css';
import '@material/react-tab-indicator/dist/tab-indicator.css';
import List, {
    ListItem, ListItemText, ListGroup,
    ListGroupSubheader,ListDivider
  } from '@material/react-list';
import '@material/react-list/dist/list.css';

const stubList = (
    <ListGroup>
        <ListGroupSubheader tag='h2'>Body and Chassis</ListGroupSubheader>
        <List nonInteractive twoLine>
            <ListItem>
                <ListItemText
                primaryText='Class'
                secondaryText='Compact Car'/>
            </ListItem>
            <ListItem>
                <ListItemText
                primaryText='Body Style'
                secondaryText='4-door sedan'
                />
            </ListItem>
            <ListItem>
                <ListItemText
                primaryText='Layout'
                secondaryText='Front-engine, front-wheel-drive'/>
            </ListItem>
        </List>
        <ListDivider tag='div'/>
        <ListGroupSubheader tag='h2'>Body and Chassis</ListGroupSubheader>
        <List nonInteractive twoLine>
            <ListItem>
                <ListItemText
                primaryText='Class'
                secondaryText='Compact Car'/>
            </ListItem>
            <ListItem>
                <ListItemText
                primaryText='Body Style'
                secondaryText='4-door sedan'
                />
            </ListItem>
            <ListItem>
                <ListItemText
                primaryText='Layout'
                secondaryText='Front-engine, front-wheel-drive'/>
            </ListItem>
        </List>
    </ListGroup>
);

export default class TrimInfoDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0, width: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    updateWindowDimensions = () => this.setState({ activeIndex: this.state.activeIndex, width: window.innerWidth });

    handleActiveIndexUpdate = (activeIndex) => this.setState({ activeIndex, width: this.state.width });

    renderTabContent = () => {
        switch (this.state.activeIndex) {
            default:
                return this.renderOverviewTabContent();
            case 1:
                return this.renderMechanicalTabContent();
            case 2:
                return this.renderEquipmentTabContent();
        }
    };

    renderOverviewTabContent = () => stubList;

    renderMechanicalTabContent = () => stubList;

    renderEquipmentTabContent = () => stubList;

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    tabBarStyle = {
        boxShadow: '0 2px 4px -4px rgba(0,0,0,.2), 0 4px 5px -5px rgba(0,0,0,.14), 0 1px 10px -10px rgba(0,0,0,.12)'
    };

    render() {
        return (
            <React.Fragment>
                <TabBar
                style={this.tabBarStyle}
                activeIndex={this.state.activeIndex}
                handleActiveIndexUpdate={this.handleActiveIndexUpdate}>
                    <Tab style={{ width: (this.state.width / 3) }}>
                        <span className='mdc-tab__text-label'>Overview</span>
                    </Tab>
                    <Tab style={{ width: (this.state.width / 3) }}>
                        <span className='mdc-tab__text-label'>Mechanical</span>
                    </Tab>
                    <Tab style={{ width: (this.state.width / 3) }}>
                        <span className='mdc-tab__text-label'>Equipment</span>
                    </Tab>
                </TabBar>
                <div style={{overflowY: 'auto'}}>
                    {this.renderTabContent()}
                </div>
            </React.Fragment>
        )
    }
}
