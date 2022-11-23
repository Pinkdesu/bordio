import styled from 'styled-components';

import arrowDownSVG from 'shared/assets/icons/arrowDown.svg';

import { MarkerProps } from './styled.types';

const Button = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  border: none;
  background: none;
`;

const MarkerIcon = styled.img.attrs({
  src: arrowDownSVG,
  alt: 'arrow',
})<MarkerProps>`
  width: 24px;
  height: 24px;
  transform: ${({ isOpen }) => !isOpen && 'rotate(-180deg)'};
`;

const Text = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 16px;
  margin-left: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  gap: 18px;
`;

export { Button, MarkerIcon, Text, Content };
