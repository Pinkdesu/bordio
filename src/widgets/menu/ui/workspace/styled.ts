import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -1rem;
  padding: 0.375rem 1rem;
  background-color: ${({ theme }) => theme.color.ocean400};
`;

const Name = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1rem;
  margin-left: 8px;
  background-color: ${({ theme }) => theme.color.ocean400};
`;

export { Container, Name };
