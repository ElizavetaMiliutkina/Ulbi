import '../../../../app/styles/index.scss';
import { StoryFn, Decorator } from '@storybook/react';

export const styleDecorator: Decorator = (Story: StoryFn) => (
    <div className="your-style-class">
        <Story />
    </div>
);
