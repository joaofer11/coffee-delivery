import * as S from './styles';
import { useContext } from 'react';
import * as I from '../../styles/icons';
import { AddressContext } from '../../contexts/AddressContext';

import illustrationIMG from '../../assets/illustration_success.png';

export const CheckoutSuccess = () => {
	const { address } = useContext(AddressContext);
   
	return (
		<S.Success>
			<S.Title>Uhu! Pedido confirmado</S.Title>
			<S.Subtitle>
            Agora é só aguardar que logo o café chegará até você
			</S.Subtitle>
         
			<S.OrderInfo>
				<S.Local>
					<S.IconWrapper bg="purple">
						<I.MapPin weight="fill" size={16} />
					</S.IconWrapper>
               
					<span>Entrega em <strong>{address.street}, {address.streetNumber}</strong></span>
					<span>{address.district} - {address.city}, {address.country}</span>
				</S.Local>
            
				<S.Time>
					<S.IconWrapper bg="yellow">
						<I.Timer weight="fill" size={16} />
					</S.IconWrapper>
               
					<span>Previsão de entrega</span>
					<span>
						<strong>20 min - 30 min</strong>
					</span>
				</S.Time>
            
				<S.Payment>
					<S.IconWrapper bg="yellowDark">
						<I.CurrencyDollar weight="regular" size={16} />
					</S.IconWrapper>
               
					<span>Pagamento na entrega</span>
					<span>
						<strong>{address.payment}</strong>
					</span>
				</S.Payment>
			</S.OrderInfo>
         
			<img src={illustrationIMG} alt=""/>
		</S.Success>
	);
};
