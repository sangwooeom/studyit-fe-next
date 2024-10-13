import { BadgeType, RecruitingType } from '@/enum';
import styles from './index.module.scss';
import cn from 'classnames';

export default function Badge({type}: {type: BadgeType}) {
    const className = cn(
        styles.badge,
        {
            [styles['blue']]: type === RecruitingType.모집중,
            [styles['bg-blue']]: type === RecruitingType.모집중,
            [styles['red']]: type === RecruitingType.모집_완료,
            [styles['bg-red']]: type === RecruitingType.모집_완료,
        }
    )
    return <span className={className}>{type}</span>;
}