import React, { FC, ReactNode } from 'react';
import { Box } from '@silicon-ui/atoms/lib';
import { useThemeUI } from 'theme-ui';

// @ts-ignore
const document: any = window?.document || {};

export interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = (props: WrapperProps) => {
  const { theme } = useThemeUI();
  if (document?.body) {
    document.body.style.backgroundColor = theme.colors?.background;
  }
  return <Box height="100%">{props.children}</Box>;
};

export default Wrapper;
