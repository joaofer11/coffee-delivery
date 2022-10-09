import { BenefitsList } from './components/BenefitsList';
import { CoffeeCatalog } from './components/CoffeeCatalog';

import { 
	IntroCalling,
	Title,
	Subtitle
} from './styles';
import CoffeeDeliveryCupPNG from '../../assets/coffee_delivery_cup.png';


export const Home = () => {
	return (
		<main>
		   <IntroCalling>
		      <Title>
		         Encontre o café perfeito para qualquer hora do dia
		      </Title>
		      <Subtitle>
		         Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
		      </Subtitle>
		      
		      <img src={CoffeeDeliveryCupPNG} alt="Coffee Delivery Cup" />
		      <BenefitsList />
		   </IntroCalling>
		   
		   <CoffeeCatalog />
		</main>
	);
};
