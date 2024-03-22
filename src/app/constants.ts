export const PRICE_KIT = 6.99;
export const PRICE = 1.69;
export const MIN_QUANTITY = 6;

export const products = {
  kit: {
    id: 1,
    name: "KIT MUDANÇA DE VIDA MILIONÁRIA (881)",
    price: PRICE_KIT,
    image: "/caminhao.jpeg",
    path: "/kit-mudanca-vida",
    code: "GB081/2301"
  },
  caminhao: {
    id: 2,
    name: "CAMINHÃO VW/30.330 + 2 VIRTUS HL 2023/2024 COM APENAS 1,69",
    price: PRICE,
    image: "/image1.jpeg",
    path: "/caminhao-vw-30-virtus",
    code: "GB017/3102"
  },
  kitMilionario: {
    id: 3,
    name: "KIT MILIONÁRIO (1133)",
    price: 3.49,
    image: "/kit-milionario.jpeg",
    path: "/kit-milionario",
    code: "GB081/2301"
  },
}

export const productWithIds = {
  "1": products.kit,
  "2": products.caminhao,
  "3": products.kitMilionario,
}
