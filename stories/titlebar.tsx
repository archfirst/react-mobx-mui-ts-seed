import React from 'react';
import { storiesOf } from '@storybook/react';

import { Titlebar } from 'shared/components';
import { MuiDecorator } from './mui-decorator';

storiesOf('Titlebar', module)
    .addDecorator(MuiDecorator)
    .add('default', () => <Titlebar>React MobX MUI Seed</Titlebar>);
