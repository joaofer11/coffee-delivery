import { useEffect, useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { maskCep } from '../../../../utils/maskCep';

import { TCheckoutFormValidationSchema } from '../../';
import { AddressContext } from '../../../../contexts/AddressContext';

import * as S from './styles';
import * as I from '../../../../styles/icons';

export const Form = () => {
	const {
		setValue,
		watch,
		register,
		handleSubmit, 
		formState
	} = useFormContext<TCheckoutFormValidationSchema>();
	const { errors } = formState;
   
	const { setAddress_byForm } = useContext(AddressContext);
	const navigate = useNavigate();
   
	const cepInputValue = watch('cep');
	const hasValueInCepInput = cepInputValue;
   
	const complementInputValue = watch('complement');
	const hasComplementInputValue = complementInputValue !== '';
   
	useEffect(() => {
		if (hasValueInCepInput) {
			setValue('cep', maskCep(cepInputValue));
		}
	}, [cepInputValue]);

   
	const handleFormValidation = (data: TCheckoutFormValidationSchema) => {
		setAddress_byForm(data);
		navigate('/checkout/success');
	};
   
	return (
		<S.FormWrapper>
			<I.MapPinLine weight="regular" size={22} /> 
			<S.Title>Endereço de Entrega</S.Title> 
			<S.Subtitle>Informe o endereço onde deseja receber seu pedido</S.Subtitle>
         
			<S.Form id="checkoutForm" onSubmit={handleSubmit(handleFormValidation)}>
				<S.CepLabel>
					<input
						id="cep"
						maxLength={9}
						type="tel" 
						autoComplete="off"
						inputMode="numeric"
						placeholder="CEP" 
						{...register('cep')}
					/>
					<span>{errors.cep?.message}</span>
				</S.CepLabel>
            
				<S.StreetLabel>
					<input
						id="street"
						type="text" 
						placeholder="Rua" 
						{...register('street')}
					/>
					<span>{errors.street?.message}</span>
				</S.StreetLabel>
            
				<S.StreetNumberLabel>
					<input
						id="streetNumber"
						type="tel"
						placeholder="Número"
						minLength={1}
						maxLength={4}
						{...register('streetNumber')}
					/>
					<span>{errors.streetNumber?.message}</span>
				</S.StreetNumberLabel>
            
				<S.ComplementLabel 
					hasComplementInputValue={hasComplementInputValue}
				>
					<input
						type="text"
						placeholder="Complemento"
						{...register('complement')}
					/>
				</S.ComplementLabel>
            
				<S.DistrictLabel>
					<input
						id="district"
						type="text"
						placeholder="Bairro" 
						{...register('district')}
					/>
					<span>{errors.district?.message}</span>
				</S.DistrictLabel>
            
				<S.CityLabel>
					<input
						id="city"
						type="text" 
						placeholder="Cidade" 
						{...register('city')}
					/>
					<span>{errors.city?.message}</span>
				</S.CityLabel>
            
				<S.CountryLabel>
					<input
						id="city"
						type="text"
						placeholder="ES"
						maxLength={2}
						{...register('country')}
					/>
					<span>{errors.country?.message}</span>
				</S.CountryLabel>
			</S.Form>
		</S.FormWrapper>
	);
};
