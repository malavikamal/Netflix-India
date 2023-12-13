import { useEffect, useState } from "react";
import instance from "../instance";
import './Banner.css';

function Banner({ fetchurl }) {
    const [movie, setMovieBanner] = useState();
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async () => {
        const { data } = await instance.get(fetchurl);

        setMovieBanner(data.results[Math.floor(Math.random() * data.results.length)]);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div style={{ height: "600px", width: "100%", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundImage: `url(${base_url}${movie?.backdrop_path})` , backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="banner-content">
                    <h1>{movie?.name}</h1>
                    <button className="btn btn-danger">Play &nbsp;<i class="fa-solid fa-play bg-transparent"></i></button>
                    <button className="btn border-white ms-3 more">More Info &nbsp;<i class="fa-solid fa-caret-down bg-transparent"></i></button>
                    <h4>{movie?.overview?.slice(0,200)}...</h4>
                </div>
            </div>
        </>
    )
}

export default Banner;