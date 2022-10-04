import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Rejil raj',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Joelha',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: 1,
      name: 'Chocolate cake',
      slug: 'chocolate-cake',
      category: 'Cake',
      image: '/images/p1.jpg',
      price: 450,
      countInStock: 5,
      brand: 'homemadecake',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality chocolate',
    },

    {
      //_id: 2,
      name: 'Vanilla cake',
      slug: 'vanilla-cake',
      category: 'Cake',
      image: '/images/p2.jpg',
      price: 440,
      countInStock: 7,
      brand: 'homemadecake',
      rating: 4.4,
      numReviews: 10,
      description: 'Taste better than vanilla ice cream',
    },

    {
      //_id: 3,
      name: 'Strawberry cake',
      slug: 'strawberry-cake',
      category: 'Cake',
      image: '/images/p3.jpg',
      price: 470,
      countInStock: 4,
      brand: 'homemadecake',
      rating: 4.7,
      numReviews: 10,
      description: 'Yummy',
    },

    {
      //_id: 4,
      name: 'Chocolate shake',
      slug: 'chocolate-shake',
      category: 'Shake',
      image: '/images/p4.jpg',
      price: 450,
      countInStock: 5,
      brand: 'homemadecake',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality chocolate',
    },

    {
      //_id: 5,
      name: 'Vanilla shake',
      slug: 'vanilla-shake',
      category: 'Shake',
      image: '/images/p5.jpg',
      price: 450,
      countInStock: 5,
      brand: 'homemadecake',
      rating: 4.5,
      numReviews: 10,
      description: 'Taste better than vanilla ice cream',
    },

    {
      //_id: 6,
      name: 'Strawberry shake',
      slug: 'strawberry-shake',
      category: 'Shake',
      image: '/images/p6.jpg',
      price: 450,
      countInStock: 5,
      brand: 'homemadecake',
      rating: 4.5,
      numReviews: 10,
      description: 'Yummy',
    },
  ],
};

export default data;
