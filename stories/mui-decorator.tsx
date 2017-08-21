import React from 'react';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import createTypography from 'material-ui/styles/typography';

const palette = createPalette({
    primary: blue,
    accent: pink,
    type: 'light'
});

const typography = createTypography(palette, {
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
});

const theme = createMuiTheme({ palette, typography });

export const MuiDecorator = story =>
    <MuiThemeProvider theme={theme}>
        {story()}
    </MuiThemeProvider>;
