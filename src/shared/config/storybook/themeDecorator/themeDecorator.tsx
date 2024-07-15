import '../../../../app/styles/index.scss';
import React from 'react';
import { StoryFn, Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const themeDecorator = (theme: Theme): Decorator => (Story: StoryFn) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
