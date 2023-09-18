import Image from "next/image"
import styles from './moviecard.module.css'
import heart from '../assets/heart.svg'
import ellipse from '../assets/Ellipse.svg'
import { getDateFormat } from "@/utils/utils"
import Link from "next/link"
interface Props {
    title: string,
    releaseDate: string,
    posterPath: string
}
export default function MovieCard(props: any) {

    const imageLoader = ({ src, width, quality }: any) => {
        return `https://image.tmdb.org/t/p/w500/${src}`
    }
    const { title, releaseDate, posterPath, id } = props
    const isSearch = props?.isSearch
    return (
        <div style={{ width: "245px", height: "375px" }} key={title}>
            { !isSearch ? <div style={{ position: "relative" }}>
                <div className={styles.favouriteIcon}>
                    <Image
                        src={ellipse}
                        alt={"bg-heart"}
                        width={30}
                        height={30}
                        priority
                        className={styles.image2}
                    />
                    <Image
                        src={heart}
                        alt={"heart"}
                        width={25}
                        height={25}
                        priority
                        className={styles.imageHeart}
                        onClick={() => alert(`${title} added to favourite`)}
                    />

                </div>
            </div> : <></>}



            <div className={styles.cardContainer} data-testid="movie-card">

                <Link
                    href={`/movies/${id}`}
                    className={styles.card}
                    id={title}
                >
                {isSearch ? 
                <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} style={{width: '200px', height: '295px', position: 'relative',borderRadius: '10px'}}/> :
                    <div>
                        <Image
                            loader={imageLoader}
                            src={posterPath}
                            alt={title}
                            width={200}
                            height={295}
                            priority
                            data-testid="movie-poster"
                            className={styles.image1}

                        />
                    </div>}

                    <div className={styles.pdxs}>
                    <p data-testid='movie-release-date'>{getDateFormat(releaseDate)}</p>
                    </div>

                    <div>
                    <h4 className={styles.pdxs} data-testid='movie-title'>{title}</h4>
                    </div>

                </Link>
            </div>
        </div>


    )
}
