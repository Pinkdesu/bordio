import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemLink = styled(Link)`
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1rem;
  text-decoration: none;
`;

export { ItemLink };
