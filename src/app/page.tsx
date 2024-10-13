import { Button, Container } from '@/components';
import styles from './page.module.scss';
import { mainImg } from '@/images';
import { ButtonType } from '@/enum';
import Image from 'next/image';
import cn from 'classnames';
import { chevronLeftIcon, chevronRightIcon } from '@/images';

export default async function Home() {
    const data = await fetch('http://localhost:5000/test');
    console.log(data); 
    return (
        <>
            <section className={cn(styles.gate)}>
                <div className={cn(styles.container)}>
                    <div className={cn(styles.left)}>
                        <div className={cn(styles.description)}>
                            <h1>
                                스터딧에서<br />
                                스터디 IT 해보세요
                            </h1>
                            <p>
                                기획자, 개발자, 디자이너를 위한<br />
                                IT 스터디 플랫폼
                            </p>
                        </div>
                        <div className={cn(styles.btn)}>
                            <Button type={ButtonType.primary}>탐색 시작하기</Button>
                        </div>
                    </div>
                    <div className={cn(styles.right)}>
                        <Image src={mainImg} alt="메인 이미지" />
                    </div>
                </div>
            </section>
            <section className={styles.main}>
                <Container>
                    <div className={cn(styles.container)}>
                        <div className={cn(styles.list)}>
                            <h3>스터디 찾기</h3>
                            <div className={cn(styles.slider)}>
                                <div className={cn(styles.btn)}>
                                    <button>
                                        <Image src={chevronLeftIcon} alt="이전 버튼" />
                                    </button>
                                </div>
                                <div className={cn(styles.content)}>
                                    <div className={styles.card}>card1</div>
                                    <div className={styles.card}>card1</div>
                                    <div className={styles.card}>card1</div>
                                </div>
                                <div className={cn(styles.btn)}>
                                    <button>
                                        <Image src={chevronRightIcon} alt="다음 버튼" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={cn(styles.list)}>
                            <h3>맴버 찾기</h3>
                            <div className={cn(styles.slider)}>
                                <div className={cn(styles.btn)}>
                                    <button>
                                        <Image src={chevronLeftIcon} alt="이전 버튼" />
                                    </button>
                                </div>
                                <div className={cn(styles.content)}>
                                    <div className={styles.card}>card1</div>
                                    <div className={styles.card}>card1</div>
                                    <div className={styles.card}>card1</div>
                                </div>
                                <div className={cn(styles.btn)}>
                                    <button>
                                        <Image src={chevronRightIcon} alt="다음 버튼" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
