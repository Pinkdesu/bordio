import styled, { css } from 'styled-components';

import { CardStyle } from '../model/styled.types';

const Container = styled.article<CardStyle>`
  padding: 0.9375rem;
  border-radius: ${({ theme }) => theme.radius.small};
  background-color: ${({ theme, cardStyle, isCompleted }) =>
    isCompleted ? theme.color.gray400 : cardStyle.backgroundColor};
`;

const Description = styled.p<Pick<CardStyle, 'isCompleted'>>`
  line-height: 1rem;
  margin-bottom: 2px;

  ${({ theme, isCompleted }) => css`
    color: ${isCompleted ? theme.color.gray700 : theme.color.primary};
    font-size: ${theme.font.normal};
    font-weight: ${theme.fontWeight.normal};
    text-decoration: ${isCompleted && 'line-through'};
  `}
`;

const Time = styled.p<CardStyle>`
  line-height: 0.9375rem;

  ${({ theme, cardStyle, isCompleted }) => css`
    color: ${isCompleted ? theme.color.gray700 : cardStyle.color};
    font-size: ${theme.font.small};
    font-weight: ${theme.fontWeight.normal};
  `}
`;

export { Container, Description, Time };
