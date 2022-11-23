import styled from 'styled-components';

const Avatar = styled.img.attrs((props) => ({
  alt: props.alt || 'avatar',
}))`
  width: 22px;
  height: 22px;
  object-fit: cover;
  border-radius: 50%;
`;

export { Avatar };
