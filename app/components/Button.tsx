import { FC, ReactNode } from 'react';

import { Button } from 'antd';

interface IProps {
    children: ReactNode;
    type: 'primary' | 'dashed' | 'text' | 'link';
}

const ButtonComponent: FC<IProps> = ({ children, type }) => {
  return (
    <>
        <Button type={type}>{children}</Button>
    </>
  )
}

export default ButtonComponent