import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
  // state = variáveis que eu quero que o componente monitore
  const [comments, setComments] = useState(['Post show de bola!']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR },
  );

  const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    //const newCommentText = event.target.comment.value; Forma imperativa
    //imutabilidade

    setComments([...comments, newCommentText]);
    setNewCommentText(''); //forma declarativa
    //event.target.comment.value = ''; Forma imperativa
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    //imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete; //NOVA lista sem o comentário deletado
    });

    setComments(commentsWithoutDeleteOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((text) => {
          if (text.type === 'paragraph') {
            return <p key={text.content}>{text.content}</p>;
          } else if (text.type === 'link') {
            return (
              <p key={text.content}>
                <a href="#">{text.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText} //forma declarativa
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment} //'on' - Ação do usuário
            />
          );
        })}
      </div>
    </article>
  );
}
