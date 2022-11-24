import styled from 'styled-components';

const Column = styled.section`
  display: flex;
  flex-direction: column;
  gap: 9.59px;
  padding: 39px 10px;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.color.gray200};
  }
`;

export { Column };
