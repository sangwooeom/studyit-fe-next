import { Button } from "@/components";
import { ButtonType } from "@/enum";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: ButtonType.primary,
        children: '기본 버튼'
    }
}

export const kakao: Story = {
    args: {
        type: ButtonType.kakao,
        children: '카카오 버튼'
    }
}

export const google: Story = {
    args: {
        type: ButtonType.google,
        children: '구글 버튼'
    }
}