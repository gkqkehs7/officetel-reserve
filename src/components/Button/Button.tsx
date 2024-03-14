import { ButtonContainer } from './style';

interface ButtonComponentProps {
	title: string;
	onClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
	title,
	onClick,
}) => {
	return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export default ButtonComponent;
