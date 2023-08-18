import styles from './comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react'; 
import Avatar from '../Avatar/avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment:string) => void
}

function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {

        onDeleteComment(content)
    }

    function handleLikeComment() {

        setLikeCount(likeCount + 1);
    }

    return (

        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/141946876?v=4" alt='' />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>

                    <header>

                        <div className={styles.authorAndTime}>

                            <strong>Pedro Schinke</strong>
                            <time title='15 de agosto de 2023 às 23:06' dateTime='2023-08-15 23:06'>Há 1h</time>

                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>

                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}

export default Comment;