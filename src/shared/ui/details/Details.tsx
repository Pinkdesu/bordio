import { ReactNode, useState } from 'react';

import * as S from './styled';

type Props<T> = {
  text: string;
  items: T[];
  className?: string;
  renderItem: (item: T, index: number) => ReactNode;
};

const Details = <T,>(props: Props<T>) => {
  const { text, items, className, renderItem } = props;

  const [isOpen, setIsOpen] = useState(true);

  const toggleDetails = () => setIsOpen((prevState) => !prevState);

  return (
    <div className={className}>
      <S.Button onClick={toggleDetails}>
        <S.MarkerIcon isOpen={isOpen} />
        <S.Text>{text}</S.Text>
      </S.Button>
      {isOpen && <S.Content>{items.map(renderItem)}</S.Content>}
    </div>
  );
};

export { Details };
