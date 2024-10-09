import Link from 'next/link';
import styles from './index.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { logo } from '@/images';

export default function Navigation() {
    return (
        <nav className={cn(styles.navigation)}>
            <div className={cn(styles.container)}>
                <Link href="/">
                    <Image className={cn(styles.logo)} src={logo} alt="로고" />
                </Link>
                <div className={styles.btn}>
                    <button>스터디 생성하기</button>
                    <Link href="/studies">스터디 찾기</Link>
                    <Link href="/members">멤버 찾기</Link>
                    <Link href="/login">로그인</Link>
                </div>
            </div>
        </nav>
    )
}