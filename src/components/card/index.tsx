import styles from './index.module.scss';
import cn from 'classnames';

export default function Card({children} : {children?: React.ReactNode}) {
    return <div className={cn(styles.card)}>{children}</div>
}