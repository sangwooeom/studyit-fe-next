import styles from './index.module.scss';
import cn from 'classnames';

export default function Container({children}: {children?: React.ReactNode}) {
    return (<div className={cn(styles.container)}>{children || ''}</div>)
}