

export interface Movie {
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
}

export interface MovieList {
    Search: Array<Movie>;
    totalResults: number;
    Response: string;
};