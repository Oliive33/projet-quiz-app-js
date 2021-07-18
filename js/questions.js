// Array avec le num des questions, les réponses, les options
let questions = [
  {
    numb: 1,
    question:
      "Quelle méthode Javascript permet de filtrer les éléments d'un tableau?",
    answer: "filter()",
    options: ["indexOf()", "map()", "filter()", "reduce()"],
  },
  {
    numb: 2,
    question:
      "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau?",
    answer: "includes()",
    options: ["isNaN()", "includes()", "findIndex()", "isOdd()"],
  },
  {
    numb: 3,
    question: "Quelle méthode transforme du JSON en un objet Javascript ?",
    answer: "JSON.parse()",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
  },
  {
    numb: 4,
    question:
      "Quel objet Javascript permet d'arrondir à l'entier le plus proche?",
    answer: "Math.round()",
    options: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
  },
  {
    numb: 5,
    question: "Que fait i++ ?",
    answer: "incrémente i de 1",
    options: [
      "renvoie la chaîne 'i+'",
      "incrémente i de 1",
      "n'existe pas en JavaScript",
      "décale la valeur binaire de i",
    ],
  },

  {
    numb: 6,
    question:
      "Dans la hiérarchie des objets, quel est le parent direct de l'objet 'form' ?",
    answer: "document()",
    options: ["location()", "body()", "document()", "window()"],
  },
  {
    numb: 7,
    question: "Comment passer à l'itération suivante dans une boucle for() ?",
    answer: "continue",
    options: ["continue", "break", "next", "return"],
  },
  {
    numb: 8,
    question: "Comment sortir d'une boucle for() ou while() ?",
    answer: "break",
    options: ["exit", "continue", "end", "break"],
  },
  {
    numb: 9,
    question:
      "Quelle fonction permet de temporiser l'exécution d'une commande ?",
    answer: "setTimeout()",
    options: ["SetTimer()", "sleep()", "setTimeout()", "wait()"],
  },
  {
    numb: 10,
    question: "Quel est l'objet de plus haut niveau en JavaScript ?",
    answer: "window",
    options: ["document", "url", "top", "window"],
  },
];
