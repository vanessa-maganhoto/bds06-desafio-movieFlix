import { Genre } from "./genre";

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    imgUrl: string;
    synopsis: string;
    year: number,
    genre: Genre;
}