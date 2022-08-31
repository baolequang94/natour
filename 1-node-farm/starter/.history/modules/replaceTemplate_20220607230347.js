module.exports = (temp, product) => {
  const key = {
    id: 'ID',
    productName: 'PRODUCTNAME',
    image: 'IMAGE',
    from: 'FROM',
    nutrients: 'NUTRIENTS',
    quantity: 'QUANTITY',
    price: 'PRICE',
    description: 'DESCRIPTION',
  };

  let output = Object.entries(key).reduce((prev, [key, value]) => {
    console.log(prev, key, value);

    const regex = /%${value}%/g;
    return prev.replace(regex, product[key]);
  }, temp);
  // let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  // output = output.replace(/{%IMAGE%}/g, product.image);
  // output = output.replace(/{%PRICE%}/g, product.price);
  // output = output.replace(/{%FROM%}/g, product.from);
  // output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  // output = output.replace(/{%QUANTITY%}/g, product.quantity);
  // output = output.replace(/{%DESCRIPTION%}/g, product.description);
  // output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  }
  return output;
};
