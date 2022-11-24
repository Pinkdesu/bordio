import styled, { css } from 'styled-components';

import { StylingProps } from './styled.types';

const SearchWrapper = styled.div<StylingProps>`
  display: flex;

  ${({ view, theme }) =>
    view === 'primary'
      ? css`
          padding-left: 0.625rem;
          border-radius: ${theme.radius.small};
          background-color: ${theme.color.ocean500};
        `
      : css`
          padding-left: 1rem;
          border-radius: ${theme.radius.normal};
          background-color: ${theme.color.gray500};
        `}
`;

const SearchField = styled.input<StylingProps>`
  display: inline;
  border: none;
  outline: none;
  background: none;
  width: 100%;
  flex: 1 1 140px;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  ${({ view }) =>
    view === 'primary'
      ? css`
          padding: 0.5625rem;
          line-height: 0.875rem;
        `
      : css`
          padding: 0.75rem;
          line-height: 1rem;
        `}
`;

const SerchButton = styled.button<StylingProps>`
  display: flex;
  align-items: center;
  padding: 0 ${({ view }) => (view === 'primary' ? '0.625rem' : '1.125rem')};
`;

const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export { SearchWrapper, SearchField, SerchButton, ButtonIcon };
