import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Button, { ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Example/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

PrimaryDark.decorators = [themeDecorator(Theme.DARK)];

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
