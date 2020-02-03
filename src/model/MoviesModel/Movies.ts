import CommonModel from '../CommonModel';

export declare type Movies = Movie[];

export declare type UTMovie = Movie | undefined;

export default interface Movie extends CommonModel {
  id: number;
  title: string;
  image: string;
}