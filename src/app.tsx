import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import createTypography from 'material-ui/styles/typography';
import { Provider } from 'mobx-react';

import Shell from './shell';

class App extends React.Component<{}, {}> {
    render() {
        const palette = createPalette({
            primary: blue,
            accent: pink,
            error: red,
            type: 'light'
        });

        const typography = createTypography(palette, {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
        });

        const theme = createMuiTheme({ palette, typography });

        return (
            <MuiThemeProvider theme={theme}>
                <Provider>
                    <Router>
                        <Shell />
                    </Router>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
