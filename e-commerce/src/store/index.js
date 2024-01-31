import { createStore } from 'vuex'
import log from './log.js'
import _ from 'lodash'
export default createStore({
  state: {
    products: [
      {
        id: 1,
        nome: 'Tênis Nike Air Max',
        marca: 'nike',
        parcela: 12,
        img: 'https://static.zattini.com.br/produtos/tenis-nike-air-max-excee-masculino/72/HZM-3176-172/HZM-3176-172_zoom1.jpg?ts=1579864861&amp;',
        preco: 639.99,
        class: '500+',
        tipo: 'tenis',
        descricao: 'Termine sua última repetição com força e acelere com um rugido que atordoa o chão da academia no Nike Air Max. Amortecimento Air Max oferece estabilidade confortável para levantar peso, seja um dia leve ou pesado. Uma base ampla e plana oferece estabilidade e aderência aprimoradas para todos os tipos de treinos difíceis sem sacrificar o estilo, enquanto você percorre de estação em estação e de set a set.',
        frete: 'frete gratis',
        qtd: 1,
        total: 639.99
      },
      {
        id: 2,
        nome: 'Camiseta Nike Dri-FIT',
        marca: 'nike',
        parcela: 10,
        img: "https://static.netshoes.com.br/produtos/camiseta-nike-dri-fit-miler-masculina/06/D12-5984-006/D12-5984-006_zoom1.jpg?ts=1629825716",
        preco: 119.90,
        class: '101-300',
        tipo: 'camiseta',
        descricao: 'A camiseta DRY-FIT  é versátil e de fácil usuabilidade. Sua estrutura é composta de material tecnológico que drena o suor para a parte externa da camiseta para melhor extração e evaporação, trazendo a sensação de frescor e suavidade. Seu material é extremamente macio e maleável, ideal para o uso no dia a dia e para prática de atividades físicas. Estampa da marca em material refletivo para prática mais segura de esporte noturnos. Prático, composto de materila 100 % poliéster, vai te surpreender com a sua rápida secagem pós lavagem e o melhor, não precisa passar.',
        qtd: 1,
        total: 119.90
      },
      {
        id: 3,
        nome: 'Moletom Nike Sportswear',
        marca: 'nike',
        parcela: 12,
        img: "https://static.dafiti.com.br/p/Nike-Sportswear-Moletom-Flanelado-Fechado-Nike-Sportswear-Heritage-Preto-6739-5013744-3-zoom.jpg",
        preco: 180.49,
        class: '101-300',
        tipo: 'moletom',
        descricao: 'Os moletons em fleece são confortáveis e mantém você aquecido durante os dias de frio. O modelo da Nike te acompanha durante os treinos e ainda pode ser usado no dia a dia.',
        qtd: 1,
        total: 180.49
      },
      {
        id: 4,
        nome: 'Calça Nike Pro',
        marca: 'nike',
        parcela: 10,
        img: "https://imgcentauro-a.akamaihd.net/900x900/91552102/calca-legging-nike-pro-tight-feminina-img.jpg",
        preco: 99.99,
        class: '50-100',
        tipo: 'calça',
        descricao: 'Invista na Calça Nike Pro 365 7/8 Hi Rise para elevar seu desempenho diário! Confeccionada em poliéster reciclado e elastano e a calça legging Nike Pró 365 possui tela nas panturrilhas que permitem um fluxo de ar para ajudar a manter o frescor durante os treinos, tecido macio com tecnologia Dri-FIT que absorve o suor da sua pele e proporciona uma evaporação mais rápida para manter seu corpo seco e confortável, além de oferecer um caimento justo para uma sensação de sustentação do corpo, comprimento 7/8, cintura alta e costura curva na parte de trás. Compre já a sua!',
        qtd: 1,
        total: 99.99
      },
      {
        id: 5,
        nome: 'Tênis Adidas Ultraboost',
        marca: 'adidas',
        parcela: 12,
        preco: 999.99,
        class: '500+',
        img: "https://static.ativaesportes.com.br/public/ativaesportes/imagens/produtos/tenis-adidas-ultraboost-20-masculino-eg0692-13431.jpg",
        tipo: 'tenis',
        descricao: 'O Tênis Adidas Ultraboost Light é o calçado ideal para quem busca leveza e agilidade durante corridas ou treinos.  A entressola conta com a famosa tecnologia Boost que promove alto retorno de energia e um amortecimento extremamente macio. O cabedal respirável garante respirabilidade para os seus pés e maior flexibilidade nos movimentos. Além do desempenho, conta com um design moderno e elegante',
        frete: 'frete gratis',
        qtd: 1,
        total: 999.99

      },
      {
        id: 6,
        nome: 'Camiseta Adidas Primeblue',
        marca: 'adidas',
        parcela: 12,
        preco: 349.99,
        class: '301-500',
        img: "https://sp.yimg.com/ib/th?id=OPHS.BJsmCk5WI1FBDg474C474&amp;o=5&amp;pid=21.1&amp;w=&amp;h=",
        tipo: 'camiseta',
        descricao: 'Renove seu guarda-roupa do dia a dia com esta versátil camisa polo Adicolor. Confeccionada em tecido macio de algodão, esta peça confortável é perfeita para um dia no parque ou uma noite fora para jantar. As Três Listras ao longo dos braços e o clássico logo Trefoil adicionam o toque emblemático da marca. Detalhes contrastantes na gola e nas mangas reinventam o estilo vintage.',
        frete: 'frete gratis',
        qtd: 1,
        total: 349.99
      },
      {
        id: 7,
        nome: 'Moletom Adidas Essentials',
        marca: 'adidas',
        parcela: 10,
        preco: 256.65,
        img: "https://static.zattini.com.br/produtos/moletom-adidas-essentials-3-stripes/06/COL-5505-006/COL-5505-006_zoom2.jpg?ts=1593602448&amp;",
        tipo: 'moletom',
        class: '101-300',
        descricao: 'Garanta conforto e estilo para sua rotina nos dias mais frios, com a Blusa Moletom Adidas 3 Listras Essentials Classic! Desenvolvida em algodão, poliéster reciclado e viscose, a blusa moletom Adidas Essentials Classic oferece um tecido macio, com toque suave e bom conforto térmico, ideal para épocas de temperatura amena. A blusa moletom masculina da Adidas possui capuz com cordão de ajuste, mangas longas com punho, bolso canguru, modelagem padrão que acompanha os movimentos, garantindo comodidade e liberdade para andar de skate, alongar e flexionar com naturalidade e conforto. Invista!',
        qtd: 1,
        total: 256.65
      },
      {
        id: 8,
        nome: 'tenis de corrida feminino mizuno howk 4',
        marca: 'mizuno',
        parcela: 12,
        preco: 249.99,
        img: "https://mizunobr.vtexassets.com/arquivos/ids/233652-800-800?v=638223602562030000&amp;width=800&amp",
        tipo: 'tenis',
        descricao: 'O tênis ideal para te acompanhar em todas as suas atividades. Sua entressola de Eva proporciona mais conforto e seu solado possui borracha garantindo aderência e durabilidade. Além disso, seu cabedal possui um tecido que garante respirabilidade e flexibilidade para os pés.',
        class: '101-300',
        qtd: 1,
        total: 249.99
      },
      {
        id: 9,
        nome: 'tênis unissex mizuno wave prophecy 13',
        marca: 'mizuno',
        parcela: 12,
        preco: 1779.99,
        img: "https://mizunobr.vtexassets.com/arquivos/ids/237839/102183001_3-456-01.jpg?v=638367186867630000",
        tipo: 'tenis',
        descricao: 'O Wave Prophecy 13 é a nova versão da consagrada franquia da Mizuno. O cabedal confeccionado em mesh de monofilamento resistente proporciona respirabilidade, trazendo maior conforto para o pé . A entressola é feita de EVA com tecnologia U4ic, que garante leveza e amortecimento para o produto, somada a placa Infinity Wave, dando mais estabilidade ao produto. Possui placa Wave, tecnologia consagrada da Mizuno, que proporciona amortecimento e estabilidade para o atleta. A sola conta com tecnologia X10; um composto de borracha com carbono que garante mais tração e maior durabilidade.',
        frete: 'frete gratis',
        class: '500+',
        qtd: 1,
        total: 1779.99
      }
    ],
    filteredproducts: [],
    details: [],
    cart: [],
    total: 0
  },
  getters: {
    showstore(state) {
      if (state.filteredproducts.length === 0) {
        return state.products
      }
      else {
        return state.filteredproducts
      }
    },
    productdetails(state){
      return state.details
    },
    cart(state){
      return state.cart
    }
  },
  mutations: {
    filtrarprecos(state, payload) {
      state.filteredproducts.push(...payload)
    },
    removercategoria(state, payload) {
      state.filteredproducts = state.filteredproducts.filter(product => !payload.some(item => _.isEqual(item, product)));
    },
    searchitems(state, payload) {
      state.filteredproducts = payload
    },
    findproduct(state, payload){
      state.details = [payload]
      console.log(payload)
    },
    addtocart(state, payload){
      state.cart.push(payload)
      state.total += payload.preco
    },
    deleteproduct(state, payload){
      const index = state.cart.findIndex(product => product.id === payload.id);

  if (index !== -1) {
    state.total -= state.cart[index].total;
    state.cart.splice(index, 1);
    }
  },
    addqtd(state, payload){
      const find = state.cart.find(product => product.id === payload)
      find.qtd += 1
      state.total += find.preco
      find.total = find.preco * find.qtd 
    },
    dimqtd(state, payload){
      const find = state.cart.find(product => product.id === payload)
      find.qtd -= 1
      state.total -= find.preco 
    },
    finalizar(state){
      state.total = 0
      state.cart = [] 
    }
  },
  actions: {
    filtraritens({ commit, state }, payload) {
      const products = state.products
      let filter = [];
    
    if(filter.length === 0){
      filter = products.filter(product => product.class.includes(payload));
    }

    if (filter.length === 0) {
        filter = products.filter(product => product.parcela === payload);
    }
    
    if(filter.length === 0){
      filter = products.filter(products => products.marca.includes(payload))
    }
    if(filter.length === 0){
      filter = products.filter(products => products.tipo.includes(payload))
    }
    if(filter.length === 0){
      filter = products.filter(products => products.frete === payload)
    }
    
    filter = filter.filter(product => !state.filteredproducts.includes(product) || !state.filteredproducts === payload);
    
      if (filter.length > 0) {
        commit('filtrarprecos', filter);
        console.log(filter);
      } else {
        console.log('Nenhum produto corresponde ao filtro: ' + payload);
    }
},
  removefilter({ commit, state }, payload){
    let productToRemove = state.filteredproducts.filter(product => 
      product.class.includes(payload) ||
      product.parcela === payload ||
      product.marca.includes(payload) ||
      product.tipo.includes(payload) ||
      product.frete === payload
    );
  
    if (productToRemove.length >= 0) {
      commit('removercategoria', productToRemove);
      console.log('Produto removido: ', productToRemove);
    } else {
      
      console.log('Nenhum produto corresponde ao filtro: ' + payload);
    }
  
  },
  search({ commit, state }, payload){
    const text = payload.toLowerCase();
    if (text.includes('tenis') || text.includes('tênis')) {
      const filter = state.products.filter(tenis => tenis.tipo.includes('tenis'))
      commit('searchitems', filter)
      console.log(filter)
      if (text.includes('adidas')) {
        const adidas = state.filteredproducts.filter(item => item.marca.includes('adidas'))
        console.log(filter)
        if (adidas) {
          commit('searchitems', adidas)
        }
      }
      if (text.includes('nike')) {
        const nike = state.filteredproducts.filter(item => item.marca.includes('nike'))
        if (nike) {
          commit('searchitems', nike)
        }
      }
      if (text.includes('mizuno')) {
        const mizuno = state.filteredproducts.filter(item => item.marca.includes('mizuno'))
        if (mizuno) {
          commit('searchitems', mizuno)
        }
      }
    }
  
    if (text.includes('camiseta') || text.includes('camisa')) {
      const filter = state.products.filter(item => item.tipo === 'camiseta')
      commit('searchitems', filter)
      if (text.includes('nike')) {
        const nike = state.filteredproducts.filter(item => item.marca.includes('nike'))
        if (nike) {
          commit('searchitems', nike)
        }
      }
    }
  
    if (text.includes('moletom') || text.includes('moleton')) {
      const filter = state.products.filter(item => item.tipo === 'moletom')
      commit('searchitems', filter)
      if (text.includes('nike')) {
        const nike = state.filteredproducts.filter(item => item.marca.includes('nike'))
        if (nike) {
          commit('searchitems', nike)
        }
      }
      if (text.includes('adidas')) {
        const adidas = state.filteredproducts.filter(item => item.marca.includes('adidas'))
        if (adidas) {
          commit('searchitems', adidas)
        }
      }
    }
    if (text.includes('adidas')) {
      const filter = state.products.filter(item => item.marca === 'adidas')
      commit('searchitems', filter)
      if (text.includes('tenis') || text.includes('tênis')) {
        const adidas = state.filteredproducts.filter(item => item.tipo.includes('tenis'))
        if (adidas) {
          commit('searchitems', adidas)
        }
      }
      if (text.includes('moleton') || text.includes('moletom')) {
        const adidas = state.filteredproducts.filter(item => item.tipo.includes('moletom'))
        if (adidas) {
          commit('searchitems', adidas)
        }
      }
      if (text.includes('moleton') || text.includes('moletom')) {
        const adidas = state.filteredproducts.filter(item => item.tipo.includes('moletom'))
        if (adidas) {
          commit('searchitems', adidas)
        }
      }
  
    }
  
    if (text.includes('nike')) {
      const filter = state.products.filter(item => item.marca === 'nike')
      commit('searchitems', filter)
      if (text.includes('camiseta') || text.includes('camisa')) {
        const nike = state.filteredproducts.filter(item => item.tipo.includes('camiseta'))
        if (nike) {
          commit('searchitems', nike)
        }
      }
      if (text.includes('moleton') || text.includes('moletom')) {
        const nike = state.filteredproducts.filter(item => item.tipo.includes('moletom'))
        if (nike) {
          commit('searchitems', nike)
        }
      }
      if (text.includes('calça') || text.includes('calca')) {
        const nike = state.filteredproducts.filter(item => item.tipo.includes('calça'))
        if (nike) {
          commit('searchitems', nike)
        }
      }
      if (text.includes('tênis') || text.includes('tenis')) {
        const nike = state.filteredproducts.filter(item => item.tipo.includes('tenis'))
        if (nike) {
          commit('searchitems', nike)
        }
      }
  
    }
    if (text.includes('mizuno')) {
      const filter = state.products.filter(item => item.marca === 'mizuno')
      commit('searchitems', filter)
      if (text.includes('tênis') || text.includes('tenis')) {
        const nike = state.filteredproducts.filter(item => item.tipo.includes('tenis'))
        if (nike) {
          commit('searchitems', nike)
        }
      }
    }
  
    if (!payload) {
      state.filteredproducts = []
    }
  },
  product({commit, state}, payload){
    const product = state.products 
    const findproduct = product.find(item => item.id == payload)
    console.log(findproduct)
    console.log(payload)
    commit('findproduct', findproduct)
  },
  addtocart({commit, state}, payload){
    const addproduct = state.products.find(product => product.id === payload)
    const productexists = state.cart.find(product => product === addproduct)
    console.log(addproduct)
    console.log(productexists)
    if(!productexists){
      commit('addtocart', addproduct)
    }
  },
  deleteproduct({commit, state}, payload){
    const find = state.cart.find(product => product.id === payload)

    commit('deleteproduct', find)
  },
  addqtd({commit}, payload){
      commit('addqtd', payload)
  },
  finalizar({commit}){
    commit('finalizar')
  }
},
modules: {
  login: log
}
})
