// api.js
const products = [
    { 
      id: 1, 
      name: 'Classic Burger', 
      description: 'Juicy beef patty with lettuce, tomato, onion, and pickles', 
      price: 6.99,
      imageUrl: '/images/classic-burger.jpg',
    },
    { 
      id: 2, 
      name: 'Cheeseburger', 
      description: 'Classic burger with melted cheese on top', 
      price: 7.49,
      imageUrl: '/images/cheeseburger.jpg',
    },
    { 
      id: 3, 
      name: 'Bacon Burger', 
      description: 'Classic burger with crispy bacon strips', 
      price: 7.99,
      imageUrl: '/images/bacon-burger.jpg',
    },
    { 
      id: 4, 
      name: 'Veggie Burger', 
      description: 'Grilled vegetable patty with lettuce, tomato, and avocado', 
      price: 6.49,
      imageUrl: '/images/veggie-burger.jpg',
    },
    { 
      id: 5, 
      name: 'Double Burger', 
      description: 'Double the beef, double the flavor', 
      price: 8.99,
      imageUrl: '/images/double-burger.jpg',
    },
    { 
      id: 6, 
      name: 'Spicy Burger', 
      description: 'Classic burger with a spicy kick', 
      price: 7.49,
      imageUrl: '/images/spicy-burger.jpg',
    },
  ];
  
  export const getProducts = () => products;
  
  export const getProductById = (productId) =>
    products.find((product) => product.id === productId);
  