export const PRICE_KIT = 6.99;
export const PRICE = 0.49;
export const MIN_QUANTITY = 20;

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
    name: "Cobertura de Luxo com Piscina ou 1 Milhão e Meio no PIX! 🍀💰 - 30/09/2024",
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
  amarokJetski: {
    id: 4,
    name: "1 VW/ AMAROK 2019 + 1 JETSKI (1219)",
    description: "Imagina ganhar 1 VW/ AMAROK 2019 + 1 JETSKI (1219) por 0,55 centavos?",
    price: 0.55,
    image: "/amarok.jpeg",
    path: "/amarok-jetski",
    code: "GB011/4091"
  },
  frotaVida: {
    id: 5,
    name: "FROTA MUDANÇA DE VIDA (1179)",
    description: "Imagina ganhar FROTA MUDANÇA DE VIDA (1179) com apenas 2,89 centavos?",
    price: 1.59,
    image: "/frota-vida.jpeg",
    path: "/frota-vida",
    code: "GB017/1021"
  },
  mustang: {
    id: 6,
    name: "1 FORD MUSTANG + 1 JETSKI 2022 (911)",
    description: "Imagina ganhar 1 FORD MUSTANG + 1 JETSKI 2022 (911) por 1,49 centavos?",
    price: 1.49,
    image: "/mustang.jpeg",
    path: "/mustang-jetski",
    code: "GB021/9123"
  },
  bmw: {
    id: 7,
    name: "1 BMW R 1250 GSA 2024 (1199)",
    description: "Imagina ganhar 1 BMW R 1250 GSA 2024 (1199) por 0,33 centavos?",
    price: 0.33,
    image: "/bmw-r.jpeg",
    path: "/bmw-gsa",
    code: "GB012/1121"
  },
  sw4: {
    id: 8,
    name: "KIT MUDANÇA DE VIDA (1003)",
    description: "Imagina ganhar 4 TOYOTA HILUX SW4 com apenas 2,89 centavos?",
    price: 2.89,
    image: "/sw4.jpeg",
    path: "/hilux-sw4",
    code: "GB040/1029"
  },
  carretaHilux: {
    id: 9,
    name: "KIT MUDANÇA DE VIDA (1020)",
    description: "Imagina ganhar KIT MUDANÇA DE VIDA com apenas 4,99 centavos?",
    price: 4.99,
    image: "/carreta-hilux.jpeg",
    path: "/carreta-hilux",
    code: "GB041/1121"
  },
  kitPolo: {
    id: 10,
    name: "KIT MUDANÇA DE VIDA (1150)",
    description: "Imagina ganhar 1 KIT MUDANÇA DE VIDA com apenas 1,99 centavos?",
    price: 1.99,
    image: "/kit-polo.jpeg",
    path: "/kit-polo-mudanca-de-vida",
    code: "GB042/1122"
  },
}

export const productWithIds = {
  "1": products.kit,
  "2": products.caminhao,
  "3": products.kitMilionario,
  "4": products.amarokJetski,
  "5": products.frotaVida,
  "6": products.mustang,
  "7": products.bmw,
  "8": products.sw4,
  "9": products.carretaHilux,
  "10": products.kitPolo,
}
