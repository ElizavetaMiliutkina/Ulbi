import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LIGHT: Story = {
    args: {},
};

export const DARK: Story = {
    args: {},
};

DARK.decorators = [themeDecorator(Theme.DARK)];
