import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, ActivityIndicator, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DetailAction from '../../redux/action/DetailAction';
import { BackgroundImage, PosterContainer, PosterImage, 
        HorizontalContainer, PosterTextBold, PosterTextWhite,
        Seperator, StoryLineContainer, SectionTitleStyle,
        StoryLineContent } from './styled';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailScreen = ({ navigation: { goBack, state: { params } } }: any) => {
    const movieData = useSelector(state => state.detailData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction.getMovieDetail(params.itemId));
    }, []);


    const showView = () => {
        const { detail } = movieData;
        if(detail){
            return (
                <ScrollView>
                    <TouchableOpacity onPress={() => goBack()}><Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Go Back</Text></TouchableOpacity>
                    <BackgroundImage source={{ uri: detail.Poster }} />
                    <Seperator />
                    <PosterContainer>
                        <PosterImage source={{ uri: detail.Poster }} />
                        <HorizontalContainer>
                            <View style={{marginTop: 25}}><PosterTextBold>Title: <PosterTextWhite>{detail.Title}</PosterTextWhite></PosterTextBold></View>
                            <PosterTextBold>Running Time: <PosterTextWhite>{detail.Runtime}</PosterTextWhite></PosterTextBold>
                            <PosterTextBold>Release Date: <PosterTextWhite>{detail.Released}</PosterTextWhite></PosterTextBold>
                            <PosterTextBold>Director: <PosterTextWhite>{detail.Director}</PosterTextWhite></PosterTextBold>
                            <PosterTextBold>Writer: <PosterTextWhite>{detail.Writer}</PosterTextWhite></PosterTextBold>
                        </HorizontalContainer>
                    </PosterContainer>
                    <Seperator />
                    <StoryLineContainer>
                        <SectionTitleStyle>
                            Storyline
                        </SectionTitleStyle>
                        <StoryLineContent>
                            {detail.Plot}
                        </StoryLineContent>
                    </StoryLineContainer>
                    <Seperator />
                </ScrollView>
            )
        }
        return <ActivityIndicator />
    }

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1d1e28' }}>
            {showView()}
        </SafeAreaView>
    )
}

export default DetailScreen