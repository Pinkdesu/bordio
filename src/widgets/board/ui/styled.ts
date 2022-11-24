import styled, { css } from 'styled-components';

const tableGrid = css`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

const BoardHeader = styled.header`
  ${tableGrid}

  border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
`;

const BoardBody = styled.div`
  flex: 1 1;

  ${tableGrid}

  &::after {
    content: '';
    border-left: 1px solid ${({ theme }) => theme.color.gray200};
  }
`;

export { Container, BoardHeader, BoardBody };
