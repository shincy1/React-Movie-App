import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json"
    },
});

instance.interceptors.request.use( //requesst API dari TMDB biar bisa mainin datanya
    (config) => { 
        config.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTU4NDRkM2ZhZDFmYWUwYjk2MWU1YjIzOGI1NjQ5MSIsInN1YiI6IjY1NmVmNTFjM2RjMzEzMDEzODdiOTQ0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TKrCZazDG6CkUO3uzJntE67Kht4dw-qHIaOHAroMobQ`;
        return config;
    },
    (error) => {
        console.log("REQUEST ERROR")
        return Promise.reject(error);
    }
)

export default instance;