'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './searchbar.module.css'
import searchIcon from '../assets/search-icon.svg'
import MovieCard from './MovieCard'

const imageLoader = ({ src, width, quality }: any) => {
  return `https://image.tmdb.org/t/p/w500/${src}`
}


const SearchResults = (props: any) => {

  let results = props.result
  return (
    <div className={styles.resultContainer}>
    {
      results?.map((result: { id: any; poster_path: any; title: any; release_date: any }) => 
      (result.id && result.poster_path ) &&
        <div style={{marginInline:"1%"}} key={result.id}>

        <MovieCard
        id={result?.id}
        title={result?.title}
        releaseDate={result?.release_date}
        posterPath={result?.poster_path}
        isSearch={true}
        />

        </div>
        
      )
  }
  
  </div>
  )
}

const SearchBar = () => {

  const [queryString, setQueryString] = useState('')

  const [searchResult, setSearchResults] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTdiYTIwYzVjZDdjMGUzNzJmMWQwMGU4OTdhZDc0NCIsInN1YiI6IjY1MDQ4Y2NkNzk4ZTA2MDBjYTFkMmQzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fSqhDHpgxuaI3UH-wgUKlgW807v97LWNDg4cq7rLH9w'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${queryString}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setSearchResults(response?.results))
      .catch(err => console.error(err));
  },[queryString])

  return (
    <div>
      <div className={styles.searchContainer}>
        <input className={styles.inputField} onChange={(e) => setQueryString(e.target?.value)} placeholder='What do you want to watch?'/>
        <Image 
        src={searchIcon}
        alt="search icon"
        width={50}
        height={20}
        style={{marginTop:"3%"}}
        priority/>
    </div>
    {searchResult.length ? <SearchResults result={searchResult}/> : <></>}
    </div>
    
  )
}

export default SearchBar