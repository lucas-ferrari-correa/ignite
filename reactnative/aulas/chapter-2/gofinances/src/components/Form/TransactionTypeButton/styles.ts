import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down';
};

interface ContainerProps extends IconProps {
  isActive: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  ${({ isActive, type }) => 
    isActive 
    && type === 'up'
    && css`
      background-color: ${({ theme }) => theme.colors.success_light};
      border: 1.5px solid ${({ theme }) => theme.colors.success_light};
    `
  };

  ${({ isActive, type }) => 
    isActive 
    && type === 'down'
    && css`
      background-color: ${({ theme }) => theme.colors.attention_light};
      border: 1.5px solid ${({ theme }) => theme.colors.attention_light};
    `
  };
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }) => 
    type === 'up' ? theme.colors.success : theme.colors.attention
  }
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;