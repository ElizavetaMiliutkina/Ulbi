import '../../../../app/styles/index.scss';
import React from 'react';
import { StoryFn, StoryContext } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

export const routerDecorator = (Story: StoryFn, context: StoryContext) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
