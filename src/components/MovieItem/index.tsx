  
import React from 'react';
import Movie from '../../model/MoviesModel/Movie';
import {
  TransactionStyle,
  ImageContainer,
  ContentStyle,
  TitleStyle,
  Footer,
  Cause,
  Price,
} from './styled';

interface MovieItemProps {
  movie: Movie;
  onPress: () => void;
}

export default function TransactionItem({
  movie,
  onPress,
}: MovieItemProps) {

  return (
    <TransactionStyle>
      <ImageContainer source={{ uri: movie.homepage }} />
      <ContentStyle>
        <TitleStyle>{movie.title}</TitleStyle>
        <Footer>
          {movie.adult && <Cause>REFUNDED</Cause>}
          <Price>{movie.popularity} S$</Price>
        </Footer>
      </ContentStyle>
    </TransactionStyle>
  );
}