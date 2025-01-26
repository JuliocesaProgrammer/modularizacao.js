const p = require('./services/products');
const config = require('./services/config');

async function main() {
  // console.log('Carrinho de compras');
  // p.getFullName("408", " Mousepad")
  // p.getFullName("508", " Mouse")
  // p.getProductLabel("Mousepad")

  console.log(config.production)
}

main();