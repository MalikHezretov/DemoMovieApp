import React from 'react';
import { Movie } from '../../model/MoviesModel/Movie';
import {
  TransactionStyle,
  ImageContainer,
  TitleStyle,
} from './styled';

interface MoviItemProps {
  movie: Movie;
  nav: () => void,
}

export default function MoviItem({
    movie,
    nav
}: MoviItemProps) {


  const showItem = () => {
    if(movie){
      return (
        <TransactionStyle testID="cardItem" onPress={() => nav('DetailScreen', { itemId: movie.imdbID})}>
          <ImageContainer  source={{ uri: movie.Poster }} />
          <TitleStyle>{movie.Title}</TitleStyle>
        </TransactionStyle>
      );
    }
  }

  return showItem();
}