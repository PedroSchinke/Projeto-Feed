import { ImgHTMLAttributes } from 'react';
import styles from './avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

function Avatar({ hasBorder = true, ...props }: AvatarProps) {

    return (

        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    )
}

export default Avatar;