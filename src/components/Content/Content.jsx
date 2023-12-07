import React from "react";
import {AiFillForward, AiFillStar} from "react-icons/ai";
import {BiTrendingUp} from "react-icons/bi";
import MovieStrip from "../MovieStrip/MovieStrip";

export default function Content(){

    return (
        <div className="bg-dark-gray p-6 space-y-3 "> {/*ini adalah script untuk konten biar nambah kontennnya gampang. ini juga buat layering*/}
            <MovieStrip
                name="Populer"
                icon={<BiTrendingUp size={20} color="#F21B3F"/>}
                request={`/discover/movie?language=en-US&include_adult=false&sort_by=popularity.desc`}
            />
            <MovieStrip
                name="Rating Tinggi"
                icon={<AiFillStar size={20} color="#FFE156"/>}
                request={`/discover/movie?language=en-US&include_adult=false&sort_by=vote_count.desc`}
            />
            <MovieStrip
                name="Segera Hadir"
                icon={<AiFillForward size={20} color="#00FFFF"/>}
                request={`/discover/movie?language=en-US&include_adult=false&primary_release_year=2023`}
            />
        </div>
    );
}