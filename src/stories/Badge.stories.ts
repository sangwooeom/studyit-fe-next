import Badge from "@/components/badge";
import { BadgeType, ProcessType, ProjectType, RecruitingType } from "@/enum";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            description: '배지 유형',
            options: [...Object.values(RecruitingType), ...Object.values(ProjectType), ...Object.values(ProcessType)],
            control: {
                type: 'select'
            }
        }
    }
} satisfies Meta<typeof Badge>

export default meta;
type Story = StoryObj<typeof meta>;

function createBadge(type: BadgeType): Story {
    const badge: Story = {args: {type}}
    return badge;
}

export const RecruitingBadge: Story = createBadge(RecruitingType.모집중);
export const RecruitedBadge: Story = createBadge(RecruitingType.모집_완료);
export const SideProjectBadge: Story = createBadge(ProjectType.사이드_프로젝트);
export const StudyBadge: Story = createBadge(ProjectType.지식_공유_및_탐구);
export const OnlineBadge: Story = createBadge(ProcessType.온라인);
export const OfflineBadge: Story = createBadge(ProcessType.오프라인);
export const OnOfflineBadge: Story = createBadge(ProcessType.온_오프라인);