import { useFormContext } from 'react-hook-form';
import { TCheckoutFormValidationSchema } from '../../';

import * as S from './styles';
import * as I from '../../../../styles/icons';

export const Payment = () => {
	const { register } = useFormContext<TCheckoutFormValidationSchema>();
   
	return (
		<S.Payment>
			<S.Wrapper>
				<I.CurrencyDollar weight="regular" size={22} />
				<S.Title>Pagamento</S.Title>
				<S.Subtitle>
               O pagamento é feito na entrega. Escolha a forma que deseja pagar
				</S.Subtitle>
			</S.Wrapper>
         
			<S.CreditCardWrapper>
				<input
					form="checkoutForm"
					id="creditCard"
					type="radio"
					required
					value="Cartão de Credito"
					{...register('payment')}
				/>
				<I.CreditCard weight="regular" size={16} />
				<label htmlFor="creditCard">cartão de credito</label>
			</S.CreditCardWrapper>
         
			<S.DebitCardWrapper>
				<input
					form="checkoutForm"
					id="debitCard"
					type="radio"
					required
					value="Cartão de Debito"
					{...register('payment')}
				/>
				<I.Bank weight="regular" size={16} />
				<label htmlFor="debitCard">cartão de debito</label>
			</S.DebitCardWrapper>
         
			<S.MoneyWrapper>
				<input
					form="checkoutForm"
					id="money"
					type="radio"
					required
					value="Dinheiro a vista"
					{...register('payment')}
				/>
				<I.Money weight="regular" size={16} />
				<label htmlFor="money">dinheiro</label>
			</S.MoneyWrapper>
		</S.Payment>
	);
};
