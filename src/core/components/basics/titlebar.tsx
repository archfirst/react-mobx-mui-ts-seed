// Example: <Titlebar>Home</Titlebar>

import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';

interface TitlebarProps {
    // tslint:disable-next-line
    children: any;
}

export function Titlebar(props: TitlebarProps) {

    const { children } = props;

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography type="title" color="inherit">{children}</Typography>
            </Toolbar>
        </AppBar>
    );
}
