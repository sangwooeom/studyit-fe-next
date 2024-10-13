'use client'

import { Badge, Bookmark } from '@/components';
import styles from './index.module.scss';
import { layout } from '@/scss';
import cn from 'classnames';
import { ProcessType, ProjectType, RecruitingType } from '@/enum';
import Image from 'next/image';
import { expandingMoreIcon, bookmarkInIcon } from '@/images';
import { useState } from 'react';

interface Position {
    name: string;
    total: number;
    current: number;
}


interface StudyCardProps {
    seq: number;
    title: string;
    skills: string[],
    bookmark: boolean,
    recruitingType: RecruitingType,
    projectType: ProjectType,
    processType: ProcessType
    total: number;
    current: number;
    positions: Position[],
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    onChangeBookmark?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function StudyCard(props: StudyCardProps) {
    const {
        seq,
        title, 
        skills, 
        bookmark, 
        recruitingType, 
        processType, 
        projectType, 
        total, 
        current, 
        positions
    } = props;

    const [showPositions, setShowPositions] = useState<boolean>(false);

    return (
        <div className={cn(styles.wrapper)}>
            <div className={cn(layout.card, styles.container)}>
                <div className={cn(styles.top)} onClick={(event) => props.onClick && props.onClick(event)}>
                    <div className={cn(styles.content)}>
                        <div className={cn(styles.header)}>
                            <h4>{title}</h4>
                            <span className={cn(styles.gray100)}>{skills.map(skill => `#${skill}`).join(' ')}</span>
                        </div>
                        <div className={cn(styles.badges)}>
                            <Badge type={recruitingType} />
                            <Badge type={projectType} />
                            <Badge type={processType} />
                        </div>
                    </div>
                    <div>
                        <Bookmark 
                            seq={seq} 
                            bookmark={bookmark} 
                            onChange={(event) => props.onChangeBookmark && props.onChangeBookmark(event)} 
                        />
                    </div>
                </div>
                <div className={cn(styles.bottom, styles.bodySmall)}>
                    <div className={cn(styles.cnt)}>
                        <span className={cn(styles.gray200)}>모집인원</span>
                        <span className={cn(styles.gray200)}>{current}/{total}</span>
                    </div>
                    <div className={cn(styles.positionBtn)}>
                        <span className={cn(styles.gray200)}>포지션 현황</span>
                        <Image 
                            src={expandingMoreIcon} 
                            alt="포지션 현황 열기" 
                            onMouseOver={() => setShowPositions(true)}
                            onMouseOut={() => setShowPositions(false)}
                        />
                    </div>
                </div>
            </div>
            {showPositions && <div className={cn(styles.positionWrapper)}>
                <div className={cn(styles.positions)}>
                    {positions.map(({name, total, current}) => (<div className={cn(styles.position)}>
                        <span className={cn(styles.bodyTiny)}>{name}</span>
                        <span className={cn(styles.bodyTiny)}>{current}/{total}</span>
                    </div>))}
                </div>
            </div>}
        </div>
    )
}