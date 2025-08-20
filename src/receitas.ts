export interface Receita {
  titulo: string;
  descricao: string;
  ingredientes: string[];
  preparo: string;
}

export const receitas: Receita[] = [
  {
    titulo: "Bolo de Cenoura",
    descricao: "Um bolo fofinho com cobertura de chocolate.",
    ingredientes: [
      "3 cenouras médias",
      "3 ovos",
      "2 xícaras de farinha de trigo",
      "1 xícara de óleo",
      "2 xícaras de açúcar",
      "1 colher (sopa) de fermento"
    ],
    preparo: "Bata cenouras, ovos, óleo e açúcar no liquidificador. Misture a farinha e o fermento. Asse por 40 minutos a 180°C. Cubra com calda de chocolate."
  },
  
  {
    titulo: "Lasanha de Carne",
    descricao: "Massa intercalada com carne moída e queijo.",
    ingredientes: [
      "500g de carne moída",
      "1 pacote de massa para lasanha",
      "300g de queijo mussarela",
      "Molho de tomate",
      "Temperos a gosto"
    ],
    preparo: "Refogue a carne com temperos. Monte camadas de massa, molho, carne e queijo. Asse por 30 minutos."
  },

  {
    titulo: "Arroz à Grega",
    descricao: "Arroz colorido com legumes.",
    ingredientes: [
      "2 xícaras de arroz",
      "1 cenoura picada",
      "1/2 xícara de ervilhas",
      "1/2 pimentão picado",
      "Temperos a gosto"
    ],
    preparo: "Cozinhe o arroz normalmente. Refogue os legumes e misture ao arroz cozido."
  },

  {
    titulo: "Strogonoff de Frango",
    descricao: "Clássico brasileiro com creme de leite.",
    ingredientes: [
      "500g de peito de frango em cubos",
      "1 cebola picada",
      "1 lata de creme de leite",
      "Molho de tomate",
      "Ketchup e mostarda"
    ],
    preparo: "Refogue o frango com cebola. Adicione molho, ketchup e mostarda. Finalize com creme de leite. Sirva com arroz e batata palha."
  },

  {
    titulo: "Panquecas Americanas",
    descricao: "Fofinhas e rápidas para o café da manhã.",
    ingredientes: [
      "1 xícara de farinha",
      "1 ovo",
      "1 xícara de leite",
      "2 colheres (sopa) de açúcar",
      "1 colher (sopa) de fermento"
    ],
    preparo: "Misture todos os ingredientes até formar uma massa grossa. Aqueça uma frigideira untada e coloque pequenas porções. Vire quando formar bolhas."
  },

  {
    titulo: "Salada Caesar",
    descricao: "Leve e crocante, com molho especial.",
    ingredientes: [
      "Alface americana",
      "Croutons",
      "Queijo parmesão",
      "Molho Caesar pronto ou caseiro"
    ],
    preparo: "Rasgue a alface em pedaços, adicione croutons e parmesão. Regue com molho Caesar e misture."
  },

  {
    titulo: "Feijão Tropeiro",
    descricao: "Tradicional da culinária mineira.",
    ingredientes: [
      "2 xícaras de feijão cozido",
      "150g de bacon",
      "2 ovos",
      "Farinha de mandioca",
      "Couve refogada"
    ],
    preparo: "Frite o bacon, adicione ovos mexidos, misture feijão e farinha. Sirva com couve refogada."
  },

  {
    titulo: "Pizza Caseira",
    descricao: "Massa simples com cobertura à escolha.",
    ingredientes: [
      "2 xícaras de farinha de trigo",
      "1 colher (sopa) de fermento biológico",
      "1 xícara de água morna",
      "Molho de tomate",
      "Queijo e recheios a gosto"
    ],
    preparo: "Misture farinha, água e fermento até formar uma massa. Deixe crescer por 1 hora. Abra, adicione molho e recheios. Asse até dourar."
  },

  {
    titulo: "Omelete Simples",
    descricao: "Rápida e nutritiva.",
    ingredientes: [
      "2 ovos",
      "Sal e pimenta",
      "Queijo ou presunto opcional"
    ],
    preparo: "Bata os ovos, tempere, despeje em frigideira aquecida e adicione recheio se desejar. Dobre ao meio e sirva."
  },

  {
    titulo: "Brigadeiro",
    descricao: "Doce brasileiro clássico.",
    ingredientes: [
      "1 lata de leite condensado",
      "2 colheres (sopa) de chocolate em pó",
      "1 colher (sopa) de manteiga",
      "Granulado para enrolar"
    ],
    preparo: "Misture leite condensado, chocolate e manteiga em fogo baixo, mexendo até desgrudar do fundo. Enrole e passe no granulado."
  }
];