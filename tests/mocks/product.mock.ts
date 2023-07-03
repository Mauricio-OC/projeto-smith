const validationName = 'Martelo do Batima';
const validationPrice = '30 peças de ouro';
const validationOrderID = 3;

const productBody = { 
    name: validationName,
    price: validationPrice,
    orderId: validationOrderID,
 };

const OKresponse = {
  id: 3,
  name: validationName,
  price: validationPrice,
  orderId: validationOrderID,
};

export default {
  productBody,
  OKresponse,
};
