import styled, { css } from 'styled-components';

import { AvatarProps } from './styled.types';

const Avatar = styled.img.attrs((props) => ({
  alt: props.alt || 'avatar',
}))<AvatarProps>`
  object-fit: cover;
  border-radius: 50%;

  ${({ size = 'medium' }) =>
    size === 'medium'
      ? css`
          width: 40px;
          height: 40px;
        `
      : css`
          width: 22px;
          height: 22px;
        `}
`;

export { Avatar };
