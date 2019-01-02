const { forwardTo } = require('prisma-binding');

const Query = {
    prices: forwardTo('db'),
    price: forwardTo('db')
}

module.exports = Query;