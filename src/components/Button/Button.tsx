import { ButtonContainer } from './style';

interface ButtonComponentProps {
	title: string;
	color: string;
	onClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
	title,
	color,
	onClick,
}) => {
	return (
		<ButtonContainer style={{ backgroundColor: color }} onClick={onClick}>
			{title}
		</ButtonContainer>
	);
};

export default ButtonComponent;
