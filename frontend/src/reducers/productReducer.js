import image from '../assets/images/carne.jpg';

const initialState = {
	items: [
		{ Nome: 'Bife de cachorro', Valor: 'R$25,90', Categoria: [ 'Açougue' ], Quantidade: '1kg', image },
		{ Nome: 'Vodka Smirnoff', Valor: 'R$30,00', Categoria: [ 'Bebidas' ], Quantidade: '2', image },
		{ Nome: 'Papel Toalha Yuri', Valor: 'R$20,00', Categoria: [ 'Utensílios' ], Quantidade: '12', image },
		{ Nome: 'Cocaína de goiaba', Valor: 'R$25,90', Categoria: [ 'Açougue' ], Quantidade: '1kg', image },
		{
			Nome: 'Edição limitada de emergence',
			Valor: 'R$2005,90',
			Categoria: [ 'Tristeza' ],
			Quantidade: '1 Unidade',
			image
		},
		{ Nome: 'RTX 2080 TI', Valor: 'R$25000,90', Categoria: [ 'Hardware' ], Quantidade: '1 Unidade', image }
	]
};

export default function(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
