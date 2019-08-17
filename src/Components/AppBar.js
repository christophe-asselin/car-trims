import React from 'react';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import TopAppBar, {
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

export default function AppBar() {
    return (
        <React.Fragment>
            <TopAppBar>
                <TopAppBarRow>
                    <TopAppBarSection align='start'>
                        <TopAppBarIcon navIcon tabIndex={0}>
                            <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')} />
                        </TopAppBarIcon>
                        <TopAppBarTitle>CarTrims.info</TopAppBarTitle>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
        </React.Fragment>
    )
}

