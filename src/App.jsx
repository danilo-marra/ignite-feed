import { Header } from './components/Header';
import { Post } from './Posts';

import './global.css';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Danilo Marra"
            content="
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nemo dolorum, sapiente corporis repudiandae illo doloribus provident obcaecati odit consequuntur consequatur facilis omnis unde earum expedita deleniti molestiae ratione eius"
          />
          <Post author="Diego Moura" content="Teste conteudo" />
        </main>
      </div>
    </div>
  );
}
