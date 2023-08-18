import styles from './post.module.css';
import Comment from '../Comment/comment';
import Avatar from '../Avatar/avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

function Post({ post }: PostProps) {   // pode ser apenas '(props)', incluindo 'props.' no className

    const [comments, setComments] = useState([
        'Post muito bacana, hein?'
    ])
    
    const [newCommentText, setNewCommentText] = useState('')

    console.log(newCommentText);

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete: string) {

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;
    
    return (

        <article className={styles.post}>

            <header>

                <div className={styles.author}>

                    <Avatar src={post.author.avatarUrl} />

                    <div className={styles.authorInfo}>

                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>

                    </div>

                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>

            </header>

            <div className={styles.content}>

                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

                <strong>Deixe seu comentário</strong>

                <textarea 
                    placeholder='Deixe um comentário' 
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button> 
                </footer>

            </form>

            <div className={styles.commentList}>

                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}

            </div>

        </article>
    )
}

export default Post;