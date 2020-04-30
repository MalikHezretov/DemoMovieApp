import React from 'react';
import MovieItem from '../';
import { MockItem } from '../mockData';
import { render, fireEvent } from 'react-native-testing-library';

  describe("Movie item", () => {
    let wrapper: any = null;
    let item = MockItem;
    const movie={item}
    const navigate: any = jest.isMockFunction;
    const navigation: any = {
      navigate,
      state: {
        params: {
          itemId: 'tt2620204',
        },
      },
    };

    beforeEach(() => {
      wrapper = render(
        <MovieItem movie={movie} nav={navigation} />
      );
    });

    test('Movie item should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    // test('should press on movie item', () => {
    //   const { rerender, getByTestId } = wrapper;
    //   rerender(
    //     <MovieItem movie={movie} nav={navigation} />
    //   );
    //   fireEvent.press(getByTestId('cardItem'));
    //   expect(navigation.navigate).toHaveBeenCalled();
    // });
  });