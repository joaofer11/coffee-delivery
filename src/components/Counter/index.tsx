import * as S from './styles';
import * as I from '../../styles/icons';

interface ICounterProps {
   count: number;
   onIncrementCount: () => void;
   onDecrementCount: () => void;
}

export const Counter = ({ 
	count, 
	onIncrementCount, 
	onDecrementCount,
}: ICounterProps) => {
   
	const handleIncrementCount = () => {
		onDecrementCount();
	};
   
	const handleDecrementCount = () => {
		onIncrementCount();
	};
   
	return (
		<S.Counter>
			<I.Minus onClick={handleIncrementCount} weight="bold" size={14} />
			<span>{count}</span>
			<I.Plus onClick={handleDecrementCount} weight="bold" size={14} />
		</S.Counter>
	);
};
