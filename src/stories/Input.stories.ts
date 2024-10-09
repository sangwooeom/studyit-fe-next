import { Input } from "@/components"
import { InputType } from "@/enum";
import { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

const meta = {
    title: 'Example/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: { onInput: fn() }
} satisfies Meta<typeof Input>

export default meta;
type Story = StoryObj<typeof meta>

export const Text: Story = {
    args: {
        name: '텍스트 입력',
        placeholder: '텍스트 입력',
        type: InputType.text
    }
}

export const Password: Story = {
    args: {
        name: '비밀번호 입력',
        placeholder: '비밀번호 입력',
        type: InputType.password
    }
}