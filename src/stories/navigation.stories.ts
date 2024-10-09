import { Navigation } from "@/components";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
    title: 'Components/Navigation',
    component: Navigation,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Navigation>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};