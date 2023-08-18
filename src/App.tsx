import './global.css';
import styles from './App.module.css';
import Header from './components/Header/header';
import Sidebar from './components/SideBar/sidebar';
import Post from './components/Post/post'
import { PostType } from './components/Post/post';

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/141946876?v=4',
      name: 'Pedro Schinke',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-08-16 17:01')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://vejario.abril.com.br/wp-content/uploads/2018/05/dave-hogan_getty.jpg?quality=70&strip=info',
      name: 'Ozzy Osbourne',
      role: 'Musician'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-08-14 14:43')
  }

];

function App() {

  return (

    <>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}   

        </main>

      </div>
      
    </>

  )
}

export default App
