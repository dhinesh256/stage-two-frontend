'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MovieCard from '@/components/MovieCard'
import { useState, useEffect } from 'react'

export default function Home() {

  let [topMovies, setTopMovies] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTdiYTIwYzVjZDdjMGUzNzJmMWQwMGU4OTdhZDc0NCIsInN1YiI6IjY1MDQ4Y2NkNzk4ZTA2MDBjYTFkMmQzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fSqhDHpgxuaI3UH-wgUKlgW807v97LWNDg4cq7rLH9w'
    }
  };

  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setTopMovies(response.results.slice(0, 10)))
    .catch(err => console.error(err));
  }, [])

  console.log(topMovies)
  return (
    <main className={styles.main}>
      <Header />

      <h3 style={{ padding: "7%" }}>Featured movies</h3>
      <div style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
        <div className={styles.grid}>
          {topMovies.map((movie) =>
            <MovieCard
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              posterPath={movie.poster_path}
            />
          )}
        </div>

      </div>

    </main>
  )
}
