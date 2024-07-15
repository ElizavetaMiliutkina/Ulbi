import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
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
