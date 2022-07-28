import { IButton } from '../../@types';
import { Container } from './styles';

export const Button: React.FC<IButton> = ({
  title,
  color,
  disabled,
  loading,
  iconLeft,
  ...rest
}) => {
  return (
    <Container color={color} disabled={disabled ?? false} {...rest}>
      <>
        {iconLeft}
        {title}
      </>
    </Container>
  );
};
