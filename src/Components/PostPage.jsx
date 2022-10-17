import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './PostPage.css';
import styles from './PostPage.module.css';
import posts from '../Json/posts.json';
import ModelPost from './ModelPost';
import ReactMarkdown from 'react-markdown';
import Page404 from 'Pages/Page404';
import PageDefault from './PageDefault';
import Post from './Post';

export default function PostPage(){

  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  })

  if(!post) {
    return <Page404 />
  }

  const postsRecomendados = posts
  .filter((post) => post.id !== Number(params.id))
  .sort((a, b) => b.id - a.id)
  .slice(0, 3);

  return (
    <Routes>
    <Route path="*" element={<PageDefault/>}>
        <Route index element={
            <ModelPost
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

            <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
            </h2>

            <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>

            </ModelPost>
        } />
    </Route>
</Routes>

  )
}

