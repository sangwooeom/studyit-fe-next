import { Bookmark } from "@/components";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from '@storybook/preview-api';


const meta = {
    title: 'Components/Bookmark',
    component: Bookmark,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Bookmark>;

export default meta;
type Story = StoryObj<typeof meta>

export const bookmark = {
    args: {
        seq: 1,
        bookmark: false,
    },
    render: function Render(args) {
        const [{ bookmark }, updateArgs ] = useArgs();

        function onChange(event: React.ChangeEvent<HTMLInputElement>) {
            updateArgs({bookmark: event.target.checked})
        }

        return <Bookmark {...args} onChange={onChange} bookmark={bookmark}/>
    }
} satisfies Story