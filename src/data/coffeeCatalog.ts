import expressoTradicionalIMG from '../assets/expresso_coffee.png';
import expressoAmericanoIMG from '../assets/expresso_americano_coffee.png';
import expressoCremosoIMG from '../assets/expresso_cremoso_coffee.png';
import expressoGeladoIMG from '../assets/expresso_gelado_coffee.png';
import cafeComLeiteIMG from '../assets/cafe_com_leite_coffee.png';
import latteIMG from '../assets/latte_coffee.png';
import capuccinoIMG from '../assets/capuccino_coffee.png';
import macchiatoIMG from '../assets/macchiato_coffee.png';
import mocaccinoIMG from '../assets/mocaccino_coffee.png';
import chocolateQuenteIMG from '../assets/chocolate_quente_coffee.png';
import cubanoIMG from '../assets/cubano_coffee.png';
import havaianoIMG from '../assets/havaiano_coffee.png';
import arabeIMG from '../assets/arabe_coffee.png';
import irlandesIMG from '../assets/irlandes_coffee.png';

import { ICoffeeCatalog } from '../interfaces/coffeeCatalog';

export const coffeeCatalog: ICoffeeCatalog[] = [
	{
		id: 1,
		imagePath: expressoTradicionalIMG,
		tags: ['tradicional'],
		name: 'Expresso Tradicional', 
		description: 'O tradicional café feito com água quente e grãos moídos',
		price: 9.90,
	},
	{
		id: 2,
		imagePath: expressoAmericanoIMG,
		tags: ['tradicional'],
		name: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		price: 13.78,
	},
	{
		id: 3,
		imagePath: expressoCremosoIMG,
		tags: ['tradicional'],
		name: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		price: 18.99,
	},
	{
		id: 4,
		imagePath: expressoGeladoIMG,
		tags: ['tradicional', 'gelado'],
		name: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		price: 9.90,
	},
	{
		id: 5,
		imagePath: cafeComLeiteIMG,
		tags: ['tradicional', 'com leite'],
		name: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		price: 11.80,
	},
	{
		id: 6,
		imagePath: latteIMG,
		tags: ['tradicional', 'com leite'],
		name: 'Latte',
		description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		price: 14.50,
	},
	{
		id: 7,
		imagePath: capuccinoIMG,
		tags: ['tradicional', 'com leite'],
		name: 'Capuccino',
		description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
		price: 19.99,
	},
	{
		id: 8,
		imagePath: macchiatoIMG,
		tags: ['tradicional', 'com leite'],
		name: 'Macchiato',
		description: 'Café expresso misturado com um pouco de leite quente e espuma',
		price: 16.69,
	},
	{
		id: 9,
		imagePath: mocaccinoIMG,
		tags: ['tradicional', 'com leite'],
		name: 'Mocaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		price: 17.90,
	},
	{
		id: 10,
		imagePath: chocolateQuenteIMG,
		tags: ['especial', 'com leite'],
		name: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		price: 10.99,
	},
	{
		id: 11,
		imagePath: cubanoIMG,
		tags: ['especial', 'alcoólico', 'gelado'],
		name: 'Cubano',
		description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
		price: 21.99,
	},
	{
		id: 12,
		imagePath: havaianoIMG,
		tags: ['especial'],
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		price: 16.50,
	},
	{
		id: 13,
		imagePath: arabeIMG,
		tags: ['especial'],
		name: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		price: 22.50,
	},
	{
		id: 14,
		imagePath: irlandesIMG,
		tags: ['especial', 'alcoólico'],
		name: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		price: 25.50,
	},
];
