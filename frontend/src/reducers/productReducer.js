import image from '../assets/images/carne.jpg';

const initialState = {
	items: [
		{ Nome: 'Bife de cachorro', Valor: 'R$25,90', Categoria: ['Açougue'], Quantidade: '1kg', image },
		{
			Nome: 'Vodka Smirnoff',
			Valor: 'R$30,00',
			Categoria: ['Bebidas'],
			Quantidade: '2',
			image: 'https://images-americanas.b2w.io/produtos/01/00/img/1296035/6/1296035607_1GG.jpg'
		},
		{
			Nome: 'Papel Toalha Yuri',
			Valor: 'R$20,00',
			Categoria: ['Utensílios'],
			Quantidade: '12',
			image: 'https://images-na.ssl-images-amazon.com/images/I/617eg0Oj2JL._AC_SX679_.jpg'
		},
		{
			Nome: 'Cocaína de goiaba',
			Valor: 'R$25,90',
			Categoria: ['Açougue'],
			Quantidade: '1kg',
			image: 'https://veja.abril.com.br/wp-content/uploads/2018/02/brsail-cocaina-explanada-dos-ministerios.jpg'
		},
		{
			Nome: 'Cursed food',
			Valor: 'R$2005,90',
			Categoria: ['Tristeza'],
			Quantidade: '1 Unidade',
			image: 'https://img-9gag-fun.9cache.com/photo/a83MNE1_460s.jpg'
		},
		{
			Nome: 'RTX 2080 TI',
			Valor: 'R$25000,90',
			Categoria: ['Hardware'],
			Quantidade: '1 Unidade',
			image:
				'https://asset.msi.com/resize/image/global/product/product_8_20190725103458_5d391552ebf28.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png'
		},

		{
			Nome: 'Pizza com feijão',
			Valor: 'R$0,90',
			Categoria: ['Deus na causa'],
			Quantidade: '1 Unidade',
			image:
				'https://i.redd.it/tex04w5opk911.jpg'
		},

		{
			Nome: 'Música foda do n-buna',
			Valor: 'R$50000,90',
			Categoria: ['Waifu e husbando'],
			Quantidade: '1 Unidade',
			image:
				'https://images.genius.com/b73cec3bac23000b0fe7396bd326a17a.800x800x1.jpg'
		},

		{
			Nome: 'Dark souls II SOFTS',
			Valor: 'R$79,90',
			Categoria: ['Jogos'],
			Quantidade: '1 Unidade',
			image:
				'https://upload.wikimedia.org/wikipedia/pt/2/22/Dark_Souls_2_capa.png'
		},

		{
			Nome: 'Dark Souls Remastered',
			Valor: 'R$119,90',
			Categoria: ['JogoWaifu e husbando'],
			Quantidade: '1 Unidade',
			image:
				'https://lojasaraiva.vteximg.com.br/arquivos/ids/3445928/1005224923.jpg?v=637039062052830000'
		},

		{
			Nome: 'Skyrim',
			Valor: 'R$100,00',
			Categoria: ['Jogo'],
			Quantidade: '1 Unidade',
			image:
				'data:image/jpeg;base64,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'
		},

		{
			Nome: 'Ghost of Tsushima',
			Valor: 'R$500,00',
			Categoria: ['Jogo'],
			Quantidade: '1 Unidade',
			image:
				'https://live.staticflickr.com/65535/49210891223_9ba2f131af_o.png'
		},

		{
			Nome: 'Picanha',
			Valor: 'R$98,00',
			Categoria: ['Carnes'],
			Quantidade: '1,4 kg',
			image:
				'https://static.carrefour.com.br/medias/sys_master/images/images/h8f/haa/h00/h00/14411119820830.jpg'
		},

		{
			Nome: 'SPICE & WOLF ARTBOOK-THE TENTH YEAR CALVADOS',
			Valor: 'R$350,00',
			Categoria: ['Artbook'],
			Quantidade: '1 Unidade',
			image:
				'https://images-na.ssl-images-amazon.com/images/I/51R3CVIKIHL._SX352_BO1,204,203,200_.jpg'
		},

		{
			Nome: 'Elma',
			Valor: 'R$200,00',
			Categoria: ['Album'],
			Quantidade: '1 Unidade',
			image:
				'https://m.media-amazon.com/images/I/91odfMw68sL._SS500_.jpg'
		},

		{
			Nome: 'Shiro',
			Valor: 'R$50000,90',
			Categoria: ['Livros'],
			Quantidade: '1 Unidade',
			image:
				'https://vignette.wikia.nocookie.net/no-game-no-life/images/b/ba/TBR.png/revision/latest?cb=20200718001344'
		}
	]
};

export default function (state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
