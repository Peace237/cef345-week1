
const products = [
  {
    name: "Rice (50 kg bag)",
    qty: 2,
    minQty: 2,
    buy: 21000,
    sell: 23500
  },
  {
    name: "Groundnut oil (1 L)",
    qty: 1,
    minQty: 6,
    buy: 1100,
    sell: 1300
  },
  {
    name: "Sugar (1 kg)",
    qty: 0,
    minQty: 5,
    buy: 750,
    sell: 900
  },
  {
    name: "Maggi cubes (packet)",
    qty: 30,
    minQty: 10,
    buy: 900,
    sell: 1000
  }
];

// Identify products that need restocking
const lowStock = products.filter(
  (p) => p.qty < p.minQty
);

console.log("Products to restock:");

for (const p of lowStock) {
  console.log(`- ${p.name}: ${p.qty} left`);
}

// Calculate stock value at buying price
const stockValue = products.reduce(
  (total, p) => total + p.qty * p.buy,
  0
);

console.log(
  `Stock value at buying price: ${stockValue} XAF`
);

// Calculate profit per unit
function profitPerUnit(product) {
   if (!product) {
    return 0;
  }
  return product.sell - product.buy;
}

// Find the product with the highest profit per unit
const highestProfit = products.reduce(
  (best, p) =>
    profitPerUnit(p) > profitPerUnit(best) ? p : best
);

console.log(
  `Highest profit per unit: ${highestProfit.name}`
);

console.log(
  `Profit per unit: ${profitPerUnit(highestProfit)} XAF`
);

// Return products that are completely out of stock
function outOfStock() {
  return products.filter((p) => p.qty === 0);
}

console.log("Products completely out of stock:");

for (const p of outOfStock()) {
  console.log(`- ${p.name}`);
}

// Calculate stock value at selling price
const sellingValue = products.reduce(
  (total, p) => total + p.qty * p.sell,
  0
);

console.log(
  `Stock value at selling price: ${sellingValue} XAF`
);

// Calculate total profit if all current stock is sold
const totalProfit = sellingValue - stockValue;

console.log(
  `Total profit if everything is sold: ${totalProfit} XAF`
);
