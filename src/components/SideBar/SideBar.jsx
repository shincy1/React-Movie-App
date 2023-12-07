import React from "react";
import SideTile from "../SideTile/SideTile";

export default function SideBar(){

    const [genres, setGenres] = React.useState([]);
    React.useEffect(() => {
        setGenres(prevState => {
            return sampleGenreData.genres.map((genre, i) => {
                return <SideTile
                    key={genre.id}
                    genre={genre}
                    pos={i}
                />
            });
        })
    },[]);

    return(
        <div className="bg-neutral-800 text-neutral-100 p-2 pr-0 h-auto drop-shadow-lg">
            <ul className="text-sm cursor-pointer space-y-0.5">
                {genres}
            </ul>
        </div>
    );
}

const sampleGenreData = { // ini ada input genre yang saya tambahkan, id genrenya diambil dari web tmdb juga informasinya
    "genres": [
        {
            "id": 28,
            "name": "Aksi"
        },
        {
            "id": 12,
            "name": "Petualangan"
        },
        {
            "id": 16,
            "name": "Animasi"
        },
        {
            "id": 35,
            "name": "Komedi"
        },
        {
            "id": 80,
            "name": "Kasus"
        },
        {
            "id": 99,
            "name": "Dokumenter"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Keluarga"
        },
        {
            "id": 14,
            "name": "Fantasi"
        },
        {
            "id": 36,
            "name": "Sejarah"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Musik"
        },
        {
            "id": 9648,
            "name": "Misteri"
        },
        {
            "id": 10749,
            "name": "Romantis"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "Perang"
        },
        {
            "id": 37,
            "name": "Barat"
        }
    ]
}