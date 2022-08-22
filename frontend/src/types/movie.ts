import { Genre } from "./genre";
import { Review } from "./review";

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    imgUrl: string;
    synopsis: string;
    year: number,
    genre: Genre;
    reviews: Review[];
}