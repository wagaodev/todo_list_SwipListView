import React from 'react';
import styled, { css } from 'styled-components/native';

const Item = styled.TouchableHighlight`
  flex-direction: row;
  padding: 10px 20px;
  background-color: #eee;
  align-items: center;
  margin-bottom: 10px;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
  padding: 5px;
  color: ${({ checkDone }) => (checkDone ? 'rgba(137,125,224,0.76)' : '#333')};
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 10px;
  border: 5px solid #555;
  ${({ checkDone }) =>
    checkDone &&
    css`
      background: #897de0;
      border: 0;
      width: 30%;
    `}
`;
const Indicator = styled.View`
  width: 10px;
  height: 50px;
  border-radius: 10px;
  background-color: #897de0;
`;

export default ({ data, Checkbox }) => {
  return (
    <Item onPress={Checkbox} underlayColor="#ccc">
      <>
        {data.done === true && <Indicator style={{ position: 'absolute' }} />}
        <ItemText checkDone={data.done}>{data.task}</ItemText>
        <ItemText checkDone={data.done}>
          {data.done === true ? data.description : ''}
        </ItemText>
        <ItemCheck checkDone={data.done} />
      </>
    </Item>
  );
};
