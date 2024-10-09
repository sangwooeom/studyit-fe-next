import Link from 'next/link';
import styles from './page.module.scss';
import cn from 'classnames';
import { Button, Input } from '@/components';
import { ButtonType, InputType } from '@/enum';

export default function Page() {
    return (
        <div className={cn(styles.container)}>
            <header>
                <h1>로그인</h1>
                <p>
                    환영합니다.<br />
                    로그인 후 스터딧헤보세요!
                </p>
            </header>
            <section className={styles.inputSec}>
                <Input name='이메일' type={InputType.text} placeholder='example@studyit.com'/>
                <Input name='비밀번호' type={InputType.password} placeholder='비밀번호를 입력해 주세요'/>
            </section>
            <section className={styles.eventSec}>
                <section className={styles.btnSec}>
                    <Button type={ButtonType.primary}>이메일로 로그인하기</Button>
                    <Button type={ButtonType.kakao}>카카오로 로그인하기</Button>
                    <Button type={ButtonType.google}>구글로 로그인하기</Button>
                </section>
                <section className={styles.linkSec}>
                    <Link href="/">아직 회원이 아니신가요?</Link>
                    <Link href="/">비밀번호 찾기</Link>
                </section>
            </section>
        </div>
    )
}