import { useForm, FormProvider } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useContext } from 'react';
import { Form } from './components/Form';
import { Payment } from './components/Payment';
import { Cart } from './components/Cart';
import { ProductsContext } from '../../contexts/ProductsContext';

import {
	CheckoutContainer,
	Title,
} from './styles';

const checkoutFormValidationSchema = zod.object({
	cep: zod.string().length(9, 'O CEP deve conter no mínimo 8 algarismos.'),
	street: zod.string().min(1, 'Informe o nome da sua rua.'),
	district: zod.string().min(1, 'Informe o nome do seu bairro.'),
	city: zod.string().min(1, 'Informe o nome da sua cidade.'),
	streetNumber: zod
		.string()
		.min(1, 'O número deve conter no mínimo 1 algarismo.')
		.max(4, 'O número  deve conter no maximo 4 algarismos.'),
	complement: zod.string().min(0),
	country: zod.string().length(2, 'O estado deve conter dois caracteres'),
	payment: zod.string()
});

export type TCheckoutFormValidationSchema = zod.infer<typeof checkoutFormValidationSchema>

export const Checkout = () => {
	const { productsTotalAmount } = useContext(ProductsContext);
   
	const checkoutForm = useForm<TCheckoutFormValidationSchema>({
		resolver: zodResolver(checkoutFormValidationSchema),
		defaultValues: {
			cep: '',
			street: '',
			district: '',
			city: '',
			complement: '',
			streetNumber: '',
			country: ''
		}
	});
   
	return (
		<CheckoutContainer>
			<section>
				<Title>Complete seu pedido</Title>
            
				<FormProvider {...checkoutForm}>
					<Form />
					<Payment />
				</FormProvider>
			</section>
         
			{!!productsTotalAmount && (
				<section>
					<Title>Cafés selecionados</Title>
					<Cart />
				</section>
			)}
		</CheckoutContainer>
	);
};
