'use client'

import { InputType } from "@/enum";
import styles from './index.module.scss';
import cn from 'classnames';
import Image from "next/image";
import { visibilityOffIcon, visibilityOnIcon } from "@/images";
import { useState } from "react";

interface InputProps {
    name: string;
    placeholder?: string;
    type: InputType;
    onInput?: (event: React.FormEvent<HTMLDivElement>) => void;
}

export default function Input(props: InputProps) {
    const { name, placeholder, type } = props;

    const [visibility, setVisibility] = useState<boolean>(false);

    return (
        <div 
            className={cn(styles.input)}
        >
            <label>{name}</label>
            <div className={cn(styles.content)}>
                <input
                    type={visibility ? 'text' : type}
                    placeholder={placeholder || ''}
                    onInput={(event) => props.onInput && props.onInput(event)}
                />
                {type === InputType.password && <button onClick={() => setVisibility(!visibility)}>
                    <Image src={visibility ? visibilityOnIcon : visibilityOffIcon} alt="비밀번호 가시성 버튼" />
                </button>}
            </div>
        </div>
    )
}