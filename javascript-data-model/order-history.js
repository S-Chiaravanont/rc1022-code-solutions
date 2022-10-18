var orderHistory = [
  {
    order_date: 'date',
    orderConfirmation: 'string',
    buyerInfo: 'string', // string of url to userAccout
    totalCost: 0, // number
    deliveryInfo: 'string',
    orderItems: [
      {
        nameOfItem: 'string',
        productDescription: 'string',
        distributor: 'string',
        productCategory: 'string', // electronic, clothes, beauty
        price: 0, // number
        itemImage: 'string url', // URL in string form
        miscellaneousInfo: {
          // for example books
          isbn: 'string',
          title: 'string',
          author: 'string',
          publish_date: 'string'
        }
      },
      {
        nameOfItem: 'string',
        productDescription: 'string',
        distributor: 'string',
        productCategory: 'string',
        price: 0,
        itemImage: 'string url',
        miscellaneousInfo: {
          isbn: 'string',
          title: 'string',
          author: 'string',
          publish_date: 'string'
        }
      }
    ]
  }
];
