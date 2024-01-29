// import BenderImg from "./assets/bender.png";

const charList = [
  {
    name: "Bender",
    imageSRC: "public\bender.png",
    desc: "Un robot sarcastique avec une personnalité anticonformiste, il dévie de sa programmation initiale pour mener une vie pleine d'excès. Physiquement, il a une forme métallique avec des bras en pince et des yeux en fente. Alimenté par de l'alcool, il est connu pour ses commentaires cinglants et son attachement ambigu à l'humanité.",
    id: 1,
  },
  {
    name: "Lara Croft",
    imageSRC: "../public/lara-croft.png",
    desc: "Connue pour son intelligence, sa force physique et ses compétences en tir. Physiquement, elle est souvent représentée avec une silhouette athlétique, des cheveux bruns et ses pistolets jumeaux. Elle est une figure emblématique du monde du jeu vidéo depuis sa première apparition en 1996.",
    id: 2,
  },
  {
    name: "Heisenberg",
    imageSRC: "./assets/heisenberg.png",
    desc: "Personnage principal d'une série, professeur de chimie transformé en fabricant de méthamphétamine en raison d'un cancer. Son évolution va d'un homme timide à un criminel impitoyable. Physiquement, il a des cheveux rasés et une barbe, reflétant son changement. Il est connu pour son intelligence et son attitude impitoyable.",
    id: 3,
  },
  {
    name: "Dark Vador",
    imageSRC: "src/assets/dark-vador.png",
    datePlace: "src/assets/dark-vador-date.jpg",
    id: 4,
    questions: [
      {
        question:
          "Si tu avais des pouvoirs de la Force, comment les utiliserais-tu pour atteindre tes objectifs et dominer la galaxie ?",
        answerGood:
          "Je me servirais de mes pouvoirs pour instaurer l'ordre et la discipline, éliminant toute résistance sur mon chemin. Mon but serait d'apporter une stabilité absolue à la galaxie, sous mon commandement.",
        answerBad:
          "Eh bien, je pense que je les utiliserai pour des tours de magie amusants lors des fêtes. Imaginez faire léviter des verres de vin, ce serait un spectacle génial, non ?",
      },
      {
        question:
          " Si tu découvrais qu'un proche était en train de comploter contre l'Empire, que ferais-tu ?",
        answerGood:
          "Je l'éliminerais sans hésitation. La loyauté envers l'Empire est primordiale, et toute trahison doit être éradiquée. Rien ne peut menacer l'ordre que j'essaie d'établir.",
        answerBad:
          "Je tenterais probablement une intervention de médiation. Peut-être que je pourrais les convaincre de changer d'avis plutôt que de recourir à des mesures drastiques. La paix et l'amour, vous savez ?",
      },
      {
        question:
          "Si tu devais conquérir une planète pour en faire ton propre royaume, laquelle choisirais-tu et comment gouvernerais-tu ?",
        answerGood:
          "Je choisirais Coruscant, le cœur de la galaxie, et je gouvernerais avec une main de fer. Ma domination serait totale, et toute opposition serait impitoyablement écrasée.",
        answerBad:
          "Je pense que je prendrais une planète plus tranquille, peut-être Endor. J'encouragerais la paix, la coexistence et la protection de l'environnement. Un peu comme un havre de vacances galactique, non ?",
      },
    ],
  },
  {
    name: "R2D2",
    imageSRC: "src/assets/r2d2.png",
    datePlace: "src/assets/r2d2-date.png",
    id: 5,
    questions: [
      {
        question:
          "Comment exprimerais-tu ton affection à travers des séquences de 0 et de 1 ?",
        answerGood:
          "01001001 01101110 01110111 01101111 01110010 01101011 01101100 01101001 01101110 01101110 01101111 01110101 01110010 (Traduction : Je trouverais un moyen de te montrer mon amour à travers des séquences binaires uniques).",
        answerBad:
          "Bleep bloop bleep beep beep. Bleep bleep bloop bloop ? (Traduction : Je ne suis pas vraiment intéressé par des signaux binaires. On peut simplement s'aimer sans codes, non ?)",
      },
      {
        question:
          " Si nous devions voyager ensemble à travers la galaxie, quel endroit choisirais-tu ?",
        answerGood:
          "01100011 01101111 01101110 01110100 01110010 01101111 01101100 01100101 01110010 01101100 01101111 01101101 01110010 01101111 01101101 (Traduction : Contrôle central d'Orléans).",
        answerBad:
          "01001001 01101110 01100111 01101111 01101101 01101110 01101011 01110011 01110011 01101111 01101110 01101110 01101110 01101111 01110101 01110110 01101111 01111001 01100001 01101110 (Traduction : Ingomnkssonnouvoyanan - Réponse incompréhensible).",
      },
      {
        question: "Quelle est ton opinion sur les Ewoks ?",
        answerGood:
          "01001001 01101100 01110011 01110011 01101111 01101110 01110100 01110010 01101111 01110101 01101110 01101110 01101111 01110101 01101111 01111011 01110011 01110011 (Traduction : Ils sont mignons et bien intentionnés).",
        answerBad:
          "01001001 01101100 01110011 01110011 01101111 01101110 01110100 01110011 01110010 01101111 01110101 01101110 01101110 01101111 01110101 01111011 (Traduction : Ils sont trop bruyants et peu utiles).",
      },
    ],
  },
  {
    name: "Princesse Leia",
    imageSRC: "src/assets/princesse-leia.png",
    datePlace: "src/assets/leia-date.png",
    id: 6,
    questions: [
      {
        question:
          "Si tu étais un Jedi, comment utiliserais-tu la Force pour aider les autres et maintenir la paix dans la galaxie ?",
        answerGood:
          "Je crois en l'équilibre et en la justice. J'utiliserais la Force pour protéger les innocents, défendre les opprimés et œuvrer en faveur de la paix. Tout comme vous, Princesse Leia.",
        answerBad:
          "Eh bien, je pense que je ferais de la Force un excellent outil pour attraper la télécommande quand je suis trop paresseux pour me lever. La paix dans la galaxie peut attendre, non ?",
      },
      {
        question:
          "Si tu devais choisir un rôle dans l'Alliance Rebelle, que choisiras-tu et pourquoi ?",
        answerGood:
          "Je rejoindrais les pilotes de l'escadron rebelle. La liberté et la lutte contre l'oppression sont des valeurs qui me tiennent à cœur, et je serais prêt à risquer ma vie pour la cause de l'Alliance.",
        answerBad:
          "Je suis plus un planificateur stratégique depuis mon fauteuil. Les pilotes rebelle peuvent se débrouiller seuls. J'ai des talents plus, euh, administratifs.",
      },
      {
        question:
          "Si tu découvrais que tu as une connexion familiale avec l'Empire, comment réagirais-tu? Jusqu'où irais-tu pour défendre la vérité et la loyauté envers ceux que tu aimes ?",
        answerGood:
          "Peu importe mes liens familiaux, je resterais fidèle à mes convictions. La vérité et la loyauté envers la justice sont plus importantes que les liens du sang. Je ferais tout pour soutenir la cause juste.",
        answerBad:
          "Eh bien, peut-être que je jetterais quelques piques sarcastiques à ma famille impériale lors des réunions de famille. Rien de sérieux, juste pour les embêter un peu. La loyauté a ses limites, non ?",
      },
    ],
  },
  {
    name: "Personnage mystère",
    imageSRC: "../src/assets/mystere.png",
    datePlace: "",
    id: 7,
  },
];

export default charList;
