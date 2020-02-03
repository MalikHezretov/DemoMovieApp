import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 25px;
`;

export const UpdateButton = styled.TouchableOpacity`
  background-color: #0080ff;
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: 100px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16;
`;

export const ListContainer = styled.View`
  background-color: #eee;
`;

export const ContinaerStyle = styled.TouchableOpacity`
  margin-horizontal: 16px;
  margin-top: 16px;
`;

export const ImageContainer = styled.Image`
  width: 100%;
  height: 150px;
  background-color: #ccc;
`;

export const ContentStyle = styled.View`
  padding: 10px;
  background-color: #fff;
  border-color: #bbb;
  border-width: 1px;
  border-top-width: 0px;
`;

export const TitleStyle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Footer = styled.View`
  flex-direction: row;
`;

export const Cause = styled.Text`
  flex: 2;
`;

export const Price = styled.Text`
  flex: 1;
  text-align: right;
`;

