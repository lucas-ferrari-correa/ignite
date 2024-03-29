import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import React from 'react';

interface ButtonProps extends RectButtonProps {
  color: string;
  children: React.ReactNode;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: 15px;
  align-items: center;
  justify-content: center;

  background-color: ${({ color }) => color};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;