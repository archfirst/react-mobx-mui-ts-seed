import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import createTypography from 'material-ui/styles/typography';
import { blue, pink, red } from 'material-ui/styles/colors';
import { Provider } from 'mobx-react';
import Shell from './shell';

let styleManager;

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

        const theme = createMuiTheme({palette, typography});

        if (!styleManager) {
            const themeContext = MuiThemeProvider.createDefaultContext({theme});
            styleManager = themeContext.styleManager;
        }
        else {
            styleManager.updateTheme(theme);
        }

        return (
            <MuiThemeProvider theme={theme} styleManager={styleManager}>
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
