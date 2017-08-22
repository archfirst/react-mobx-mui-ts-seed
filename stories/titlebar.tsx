import * as React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';

import { Titlebar } from '../src/shared/components';
import { MuiDecorator } from './mui-decorator';

addDecorator(MuiDecorator);

storiesOf('Titlebar', module).add('default', () =>
    <Titlebar>React MobX MUI Seed</Titlebar>
);
