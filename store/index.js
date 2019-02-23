import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: {},
      products: [
        {
          name: 'Arugula (1 lb.)',
          price: 3.99,
          category: 'produce',
          sale: true,
          org: true,
          article: 'shoe',
          img: 'arugula.jpg',
          producer: 'greg',
          proximity: '10'
        },
        {
          name: 'Beets (2 lb.)',
          price: 2.99,
          category: 'produce',
          sale: false,
          org: true,
          article: 'staples',
          img: 'beetroot-1.jpg',
          producer: 'greg',
          proximity: '10'
        },
        {
          name: 'Kale (1 lb.)',
          price: 2.99,
          category: 'produce',
          sale: true,
          org: true,
          article: 'greens',
          img: 'kale.jpg',
          producer: 'greg',
          proximity: '10'

        },
        {
          name: 'Piglets',
          price: 90.00,
          category: 'farm',
          sale: true,
          org: true,
          article: 'animals',
          img: 'piglets.jpg',
          producer: 'greg',
          proximity: '10'
        },
        {
          name: 'Swiss Chard (1 lb.)',
          price: 2.99,
          category: 'staples',
          sale: true,
          org: true,
          article: 'hats',
          img: 'chard.jpg',
          producer: 'greg',
          proximity: '10'
        },
        {
          name: 'Plums (2 lb. basket)',
          price: 2.99,
          category: 'produce',
          sale: true,
          org: false,
          article: 'fruit',
          img: 'plums.jpg',
          producer: 'greg',
          proximity: '10'
        },
        {
          name: 'Strawberries (1 lb. basket)',
          price: 29.99,
          category: 'produce',
          sale: true,
          org: true,
          article: 'fruit',
          img: 'strawberries.jpg',
          producer: 'greg',
          proximity: '10'
        },
        {
          name: 'Peaches (1 lb. basket)',
          price: 2.99,
          category: 'produce',
          sale: true,
          org: true,
          article: 'fruit',
          img: 'peaches.jpg',
          producer: 'greg',
          proximity: '10'
        },
        {
          name: 'Collard Greens (1 lb.)',
          price: 1.99,
          category: 'produce',
          sale: true,
          org: true,
          article: 'greens',
          img: 'collardgreens.jpg',
          producer: 'greg',
          proximity: '10',
          source: '274 Organics',
          desc: 'these greens are delicate and delicious, grown at 8400 foot elevation'
        },
        {
          name: 'Mizuna Mustard Greens (1 lb.)',
          price: 1.99,
          category: 'staples',
          sale: true,
          org: true,
          article: 'greens',
          img: 'mizuna.png',
          producer: 'greg',
          proximity: '15',
          source: '274 Organics',
          desc: 'these greens are delicate and delicious, grown at 8400 foot elevation'
        },
        {
          name: 'Basil ( 1 oz.)',
          price: 3.99,
          category: 'produce',
          sale: true,
          org: true,
          article: 'greens',
          img: 'basil.jpg',
          producer: 'greg',
          proximity: '10'
        },
        {
          name: 'Lettuce ( ~1 lb head.)',
          price: 1.79,
          category: 'produce',
          sale: true,
          org: true,
          article: 'greens',
          img: 'lettuce.jpg',
          producer: 'greg',
          proximity: '10'
        },
        {
          name: 'Fresh Rosemary Herbs ( 0.5 oz)',
          price: 2.99,
          category: 'herbs',
          sale: true,
          org: true,
          article: 'herbs',
          img: 'rosemary.jpg',
          producer: 'greg',
          proximity: '10'
        },
        {
          name: 'Snow Peas ( 1 lb.)',
          price: 4.99,
          category: 'staples',
          sale: true,
          org: true,
          article: 'jacket',
          img: 'snowpeas.jpg',
          producer: 'greg',
          proximity: '10'

        }
      ],
      farmers: [
        {
          name: 'Woody',
          business: 'Magnolia Grown Meats',
          region: 'Colorado Front Range' ,
          farming_style: 'meat production',
          address: '',
          email: '',
          phone: '',
          insta: 'magnoliagrownbeef',
          liason: 'geog',
          seasonal_orders_avail: 'geoghub'
        },
        {
          name: 'greg',
          business: '274 Organics',
          region: 'Colorado Front Range' ,
          farming_style: 'medicinals',
          address: '',
          email: '',
          phone: '',
          insta: 'ecocitylearningportal',
          liason: 'geog',
          seasonal_orders_avail: 'geoghub'
        }
      ],
      selling_style: [
        {
          name: 'Woody',
          farming_style: 'meat production',
          sales: 'pay before hub dropoff',
          seasonal_orders_avail: 'true'
        }
      ],
      customer: [
        {
          name: 'Geog',
          business: 'SCD Hub',
          region: 'Colorado Front Range' ,
          farming_style: 'medicinals,herbs,seeds,',
          address: '274 W. Spring St, Nederland, CO 80466',
          email: 'greg@scdhub.org',
          phone: '303 720 6790',
          insta: 'ecocitylearningportal',
          faceyboo: 'ecocity',
          liason: 'reid',
          driver: 'reid',
          seasonal_orders_avail: 'geoghub'
        }
      ],
      orders: [
        {
          orderID: '0000001',
          region: 'Colorado Front Range' ,
          farming_style: 'medicinals,herbs,seeds,',
          address: '274 W. Spring St, Nederland, CO 80466',
          email: 'greg@scdhub.org',
          phone: '303 720 6790',
          insta: 'ecocitylearningportal',
          faceyboo: 'ecocity',
          liason: 'reid',
          driver: 'reid',
          seasonal_orders_avail: 'geoghub'
        }
      ],
      order_items: [
        {
          itemID: '0000001',
          orderID: '0000001',
          name: 'perch',
          source: '420 Anglers',
          amount: '2 lb',
          price: '$4'
        },
        {
          itemID: '0000002',
          orderID: '0000001',
          name: 'beef prime cut',
          source: 'Woody',
          amount: '3 lb',
          price: '$45'
        }
      ]
    },
    getters: {
      produce: state => filter(state.products, 'category', 'produce'),
      herbs: state => filter(state.products, 'category', 'herbs'),
      medicinals: state => filter(state.products, 'category', 'medicinals'),
      meats: state => filter(state.products, 'category', 'meats'),
      farm: state => filter(state.products, 'category', 'farm'),
      staples: state => filter(state.products, 'category', 'staples'),
      sale: state => filter(state.products, 'sale', true),
      org: state => filter(state.products, 'org', true),
      pvol: state => filter(state.products, 'pvol', true)

    },
    mutations: {
      switchSale: state => {
        state.sale = !state.sale;
      },
      switchOrg: state => {
        state.org = !state.org;
      },
      switchPvol: state => {
        state.pvol = !state.pvol;
      },
      clearCartCount: state => {
        state.cartTotal = 0;
      },
      clearCartContents: state => {
        state.cart = {};
      },
      addItem: (state, item) => {
        state.cartTotal++;
        if (item.name in state.cart) {
          state.cart[item.name].count++;
        } else {
          let stateItem = Object.assign({}, item);
          stateItem.count = 1;
          state.cart[item.name] = stateItem;
        }
      }
    }
  });
};

export default createStore;

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);
