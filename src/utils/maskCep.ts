export const maskCep = (cep: string) => {
	let cepDraft = cep;
	cepDraft = cepDraft.replace(/\D/g, '');
	cepDraft = cepDraft.replace(/^(\d{5})(\d)/, '$1-$2');
   
	return cepDraft;
};