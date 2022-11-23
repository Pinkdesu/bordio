import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.radius.small};
  padding-left: 0.625rem;
  background-color: ${({ theme }) => theme.color.ocean500};
`;

const SearchField = styled.input`
  display: inline;
  border: none;
  outline: none;
  background: none;
  width: 100%;
  flex: 1 1 140px;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1;
  padding: 0.5625rem 0;
`;

const SerchButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.625rem;
  background: none;
`;

const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export { SearchWrapper, SearchField, SerchButton, ButtonIcon };
