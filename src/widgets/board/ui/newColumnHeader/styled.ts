import styled from 'styled-components';

const Container = styled.div`
  flex: 1.2 1;
  padding: 1.8125rem 0.75rem 0.8125rem 0.75rem;
  border-left: 1px solid ${({ theme }) => theme.color.gray200};
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
`;

const BtnText = styled.span`
  color: ${({ theme }) => theme.color.gray800};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1rem;
  margin-left: 4px;
`;

export { Container, AddButton, BtnText };
