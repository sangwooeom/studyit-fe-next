'use client'

import { ButtonType } from '@/enum';
import styles from './index.module.scss';
import cn from 'classnames'
import Image from 'next/image';
import { kakaoImg, googleImg } from '@/images';

interface ButtonProps {
    type: ButtonType,
    children?: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button(props: ButtonProps) {
    const { type } = props;

    return (
        <button 
            onClick={(event) => props.onClick && props.onClick(event)}
            className={
                cn(
                    styles.btn,
                    {
                        [styles.primary]: type === ButtonType.primary,
                        [styles.kakao]: type === ButtonType.kakao,
                        [styles.google]: type === ButtonType.google
                    }
                )
            }
        >
            {type === ButtonType.kakao && <Image src={kakaoImg} alt="카카오 로고"/>}
            {type === ButtonType.google && <Image src={googleImg} alt="구글 로고"/>}
            {props.children}
        </button>
    )
}