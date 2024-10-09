'use client'

import Link from 'next/link';
import styles from './index.module.scss';
import cn from 'classnames';

export default function Navigation() {
    return (
        <nav className={cn(styles.navigation)}>
            <div className={cn(styles.container)}>
                <i className={styles.logo}></i>
                <div className={styles.btn}>
                    <button>스터디 생성하기</button>
                    <Link href="/">스터디 찾기</Link>
                    <Link href="/">멤버 찾기</Link>
                    <Link href="/login">로그인</Link>
                </div>
            </div>
        </nav>
    )
}