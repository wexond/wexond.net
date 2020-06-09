import React from 'react';

import { StyledButton, Icon, Label } from './style';

interface SharedProps {
  to: string;
  icon?: string;
  iconWhite?: boolean;
  children?: React.ReactNode;
}

interface Props extends SharedProps {
  outlined?: boolean;
  foreground?: string;
  background?: string;
}

export const Button = ({
  to,
  icon,
  outlined,
  iconWhite,
  foreground,
  background,
  children,
}: Props) => {
  return (
    <StyledButton
      href={to}
      outlined={outlined}
      foreground={foreground}
      background={background}
    >
      {icon && <Icon src={icon} white={iconWhite} />}
      <Label>{children}</Label>
    </StyledButton>
  );
};

Button.defaultProps = {
  foreground: '#fff',
  background: 'linear-gradient(to right, #00a6ff, #3d5afe)',
  iconWhite: true,
} as Partial<Props>;

export const OutlinedButton = (props: SharedProps) => {
  return (
    <Button
      {...props}
      foreground="#000"
      background="#000"
      iconWhite={false}
      outlined
    />
  );
};
