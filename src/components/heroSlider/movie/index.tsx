import type { MovieProps } from "@components/heroSlider/movie/types";
import React from "react";
export const Movie: React.FC<MovieProps> = ({ autPlay, loop, muted, video }) => {
    return (
        <div className="video-bg">
            <video autoPlay={autPlay} muted={muted} loop={loop}>
                {Array.isArray(video) ? video.map(item => (
                    <source src={item.url} type={`video/${item.type}`} />
                )) : null}
            </video>
        </div>
    )
}
