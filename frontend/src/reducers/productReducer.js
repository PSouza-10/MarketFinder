import image from '../assets/images/carne.jpg';

const initialState = {
	items: [
		{ Nome: 'Bife de cachorro', Valor: 'R$25,90', Categoria: [ 'Açougue' ], Quantidade: '1kg', image },
		{
			Nome: 'Vodka Smirnoff',
			Valor: 'R$30,00',
			Categoria: [ 'Bebidas' ],
			Quantidade: '2',
			image: 'https://images-americanas.b2w.io/produtos/01/00/img/1296035/6/1296035607_1GG.jpg'
		},
		{
			Nome: 'Papel Toalha Yuri',
			Valor: 'R$20,00',
			Categoria: [ 'Utensílios' ],
			Quantidade: '12',
			image: 'https://images-na.ssl-images-amazon.com/images/I/617eg0Oj2JL._AC_SX679_.jpg'
		},
		{
			Nome: 'Cocaína de goiaba',
			Valor: 'R$25,90',
			Categoria: [ 'Açougue' ],
			Quantidade: '1kg',
			image: 'https://veja.abril.com.br/wp-content/uploads/2018/02/brsail-cocaina-explanada-dos-ministerios.jpg'
		},
		{
			Nome: 'Cursed food',
			Valor: 'R$2005,90',
			Categoria: [ 'Tristeza' ],
			Quantidade: '1 Unidade',
			image: 'https://img-9gag-fun.9cache.com/photo/a83MNE1_460s.jpg'
		},
		{
			Nome: 'RTX 2080 TI',
			Valor: 'R$25000,90',
			Categoria: [ 'Hardware' ],
			Quantidade: '1 Unidade',
			image:
				'https://asset.msi.com/resize/image/global/product/product_8_20190725103458_5d391552ebf28.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
		}
	]
};

export default function(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
