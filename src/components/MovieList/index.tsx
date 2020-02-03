import React from 'react';
import {FlatList} from 'react-native';
import MovieItem from '../MovieItem';
import {Movies} from '../../model/MoviesModel/Movie';
import {ListContainer} from './styled';

interface MovieListProps {
  movies: Movies;
  onItemPress: any;
}

export default function MovieList({
  movies,
  onItemPress,
}: MovieListProps) {
  return (
    <ListContainer>
      <FlatList
        keyExtractor={(item: any) => item.id.toString()}
        data={movies}
        renderItem={({item}) => (
          <MovieItem movie={item} onPress={onItemPress} />
        )}
      />
    </ListContainer>
  );
}