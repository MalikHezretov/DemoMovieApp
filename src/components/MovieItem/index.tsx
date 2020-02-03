  
import React from 'react';
import Movie from '../../model/MoviesModel/Movie';
import {
  ContinaerStyle,
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

export default function MovieItem({
  movie,
  onPress,
}: MovieItemProps) {
  return (
    <ContinaerStyle>
      <ImageContainer source={{ uri: movie.homepage }} />
      <ContentStyle>
        <TitleStyle>{movie.title}</TitleStyle>
        <Footer>
          {movie.adult && <Cause>REFUNDED</Cause>}
          <Price>{movie.popularity} S$</Price>
        </Footer>
      </ContentStyle>
    </ContinaerStyle>
  );
}