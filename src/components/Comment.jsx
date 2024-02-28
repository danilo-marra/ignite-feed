import styles from './Comment.module.css';

import { ThumbsUp } from '@phosphor-icons/react';
import { Trash } from '@phosphor-icons/react/dist/ssr';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/danilo-marra.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Danilo Marra</strong>
              <time title="11 de maio às 8h13" dateTime="2023-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
