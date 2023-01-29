import './App.css'
import Movie from './Movie'
import list from './MovieList'

export default function App() {
    const movies =list.map(movie => {
        return(
            <Movie 
            key={movie.id}
            movie={movie}
            />
        )
    })

    return(
        <>
            <section className='card--container'>
                {movies}
            </section>
        </>
    )
}