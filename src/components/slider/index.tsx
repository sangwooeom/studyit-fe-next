import styles from './index.module.scss';
import cn from 'classnames';
import { chevronLeftIcon, chevronRightIcon } from '@/images';
import Image from 'next/image';

interface SliderProps {
    children?: React.ReactNode;
}

export default function Slider(props: SliderProps) {
    const { children } = props;

    return (
        <div className={cn(styles.list)}>
            <h3>스터디 찾기</h3>
            <div className={cn(styles.slider)}>
                <div className={cn(styles.btn)}>
                    <button>
                        <Image src={chevronLeftIcon} alt="이전 버튼" />
                    </button>
                </div>
                <div className={cn(styles.content)}>
                    {children}
                </div>
                <div className={cn(styles.btn)}>
                    <button>
                        <Image src={chevronRightIcon} alt="다음 버튼" />
                    </button>
                </div>
            </div>
        </div>
    )
}