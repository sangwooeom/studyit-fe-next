import { StudyCard } from "@/components";
import { ProcessType, ProjectType, RecruitingType } from "@/enum";
import { Meta, StoryObj } from "@storybook/react";
import '@/app/globals.scss';
import { fn } from "@storybook/test";
import { useArgs } from "storybook/internal/preview-api";

const meta = {
    title: 'Components/StudyCard',
    component: StudyCard,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        onClick: fn(),
    }
} satisfies Meta<typeof StudyCard>

export default meta;
type Story = StoryObj<typeof meta>;

export const studyCard: Story = {
    args: {
        seq: 1,
        title: '포트폴리오용 프로젝트 팀원 구합니다.',
        skills: ['Spring', 'React.js', 'JavaScript', 'jQuery'],
        bookmark: false,
        recruitingType: RecruitingType.모집중,
        projectType: ProjectType.사이드_프로젝트,
        processType: ProcessType.온_오프라인,
        total: 5,
        current: 2,
        positions: [
            { name: '백엔드 개발자', total: 1, current: 1 },
            { name: '프론트 개발자', total: 1, current: 2 },
            { name: 'UX/UI 디자이너', total: 0, current: 2 }
        ]
    },
    render: function render(args) {
        const [{ bookmark }, updateArgs ] = useArgs<typeof args>();

        function onChangeBookmark(event: React.ChangeEvent<HTMLInputElement>) {
            updateArgs({bookmark: event.target.checked});
        }

        return <StudyCard {...args} onChangeBookmark={onChangeBookmark} bookmark={bookmark}/>
    }
}