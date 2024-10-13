import styles from './index.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { bookmarkInIcon, bookmarkNotIcon } from '@/images';

interface BookmarkProps {
    seq: number;
    bookmark: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Bookmark(props: BookmarkProps) {
    const { seq, bookmark } = props;
    const bookmarkSeq = `bookmark-${seq}`;

    return (<div className={styles.bookmark}>
        <input 
            id={bookmarkSeq} 
            type='checkbox' 
            checked={bookmark} 
            onChange={(event) => props.onChange && props.onChange(event)} 
        />
        <label htmlFor={bookmarkSeq}>
            {bookmark && <Image src={bookmarkInIcon} alt="북마크 설정" />}
            {!bookmark && <Image src={bookmarkNotIcon} alt="북마크 해제" />}
        </label>
    </div>)
}