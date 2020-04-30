import React from 'react';
import { FlatList } from 'react-native';
import MovieItem from '../MovieItem';
import { MovieList } from '../../model/MoviesModel/Movie';

interface MovieListProps {
  movieList: MovieList;
  nav: any
}

export default function MovieCards({
  movieList,
  nav
}: MovieListProps) {
  return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.imdbID}
        data={movieList}
        renderItem={(movie) => ( <MovieItem nav={nav} movie={movie.item} /> )}
      />
  );
}