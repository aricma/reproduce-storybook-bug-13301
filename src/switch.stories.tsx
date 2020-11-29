import React from 'react';
import {Meta, Story} from "@storybook/react";
import SwitchTheme, { SwitchProps } from './switch';


const SwitchThemeTemplate: Story<SwitchProps> = (...p) => (<SwitchTheme {...p} />);

export const SwitchThemeStateless = SwitchThemeTemplate.bind({});
SwitchThemeStateless.args = {
    isActive: true,
    onSelect: () => {},
} as SwitchProps;


export default {
    title: 'Components / Switch',
    component: SwitchThemeStateless,
} as Meta;
