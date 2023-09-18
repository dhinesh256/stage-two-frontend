'use client'

import Image from 'next/image'
import styles from './id.module.css'
import logo from '../../../assets/logo.png'
import home from '../../../assets/Home.png'
import movie from "../../../assets/Movie Projector.png"
import tv from "../../../assets/TV Show.png"
import upcoming from "../../../assets/Calendar.png"
import play from '../../../assets/Play.png'
import Link from 'next/link'
import { useEffect, useState } from 'react'


const page = ( params: any ) => {

    const [movieDetails, setMovieDetails] = useState({} as any)

    const imageLoader = ({ src, width, quality }: any) => {
        return `https://image.tmdb.org/t/p/original/${src}`
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTdiYTIwYzVjZDdjMGUzNzJmMWQwMGU4OTdhZDc0NCIsInN1YiI6IjY1MDQ4Y2NkNzk4ZTA2MDBjYTFkMmQzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fSqhDHpgxuaI3UH-wgUKlgW807v97LWNDg4cq7rLH9w'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${params.id}`, options)
            .then(response => response.json())
            .then(response => setMovieDetails(response))
            .catch(err => console.error(err));
    }, [params.id])

    console.log(movieDetails)
    return (
        <div style={{ display: "flex", flexDirection: 'row' ,backgroundColor: 'white'}}>
            <div className={styles.sideBarContainer}>
                <div className={styles.logoContainer}>
                    <Image src={logo}
                        alt="Vercel Logo"
                        width={50}
                        height={50}
                        priority
                        />
                    <div>
                        <Link href={'/'}>MovieBox

                        </Link></div>
                </div>

                <div className={styles.menuContainer}>
                    <div className={styles.menuField}>
                        <Image src={home}
                            alt="Vercel Logo"
                            width={25}
                            height={25}
                            priority
                            style={{ marginInline: "20px" }} />
                        <Link href={'/'}>Home</Link>
                    </div>
                    <div className={styles.menuField}>
                        <Image src={movie}
                            alt="Vercel Logo"
                            width={25}
                            height={25}
                            priority
                            style={{ marginInline: "20px" }} />
                        <div>Movies</div>
                    </div>
                    <div className={styles.menuField}>
                        <Image src={tv}
                            alt="Vercel Logo"
                            width={25}
                            height={25}
                            priority
                            style={{ marginInline: "20px" }} />
                        <div>TV series</div>
                    </div>
                    <div className={styles.menuField}>
                        <Image src={upcoming}
                            alt="Vercel Logo"
                            width={25}
                            height={25}
                            priority
                            style={{ marginInline: "20px" }} />
                        <div>Upcoming</div>
                    </div>


                </div>
            </div>
            <div className={styles.idField}>
                <div style={{ margin: "2%", borderRadius: "10px" }}>
                    <Image
                        loader={imageLoader}
                        src={movieDetails.backdrop_path}
                        alt={movieDetails.title}
                        width={900}
                        height={400}
                        priority
                        data-testid="movie-poster"
                        style={{borderRadius:"15px"}}
                    />
                </div>
                                
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div data-testid="movie-title" className={styles.idDetails}>{movieDetails.title}</div>
                    <span>&#x2022;</span>
                    <div data-testid="movie-release-date" className={styles.idDetails}>{movieDetails.release_date}</div>
                    <span>&#x2022;</span>
                    <div data-testid="movie-runtime" className={styles.idDetails}>{movieDetails.runtime}m</div>
                </div>

                <div data-testid="movie-overview" className={styles.idOverview}>{movieDetails.overview}</div>
            </div>
        </div>

    )
}

export default page