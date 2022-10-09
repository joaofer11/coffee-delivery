import { useState, createContext, ReactNode } from 'react';


interface IAddress {
   cep: string;
   street: string;
   streetNumber: string;
   complement?: string;
   district: string;
   city: string;
   payment: string;
   country: string;
}


interface IAddressContextProps {
   children: ReactNode
}

interface IAddressContextProviderData {
   address: IAddress;
   setAddress_byForm: (newAddress: IAddress) => void;
}

export const AddressContext = createContext({} as IAddressContextProviderData);

export const AddressContextProvider = ({ 
	children 
}: IAddressContextProps) => {
	const [address, setAdress] = useState<IAddress>({} as IAddress);
   
   
	const setAddress_byForm = (newAddress: IAddress) => {
		setAdress(newAddress);
	};
   
	return (
		<AddressContext.Provider
			value={{
				address,
				setAddress_byForm,
			}}
		>
			{children}
		</AddressContext.Provider>
	);
};
