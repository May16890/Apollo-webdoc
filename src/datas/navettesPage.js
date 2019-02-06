import testImg from "../assets/img/ApolloSoyuz3.png";

const NavettesMockup = [
    [{
        name: "Juno I",
        src: testImg,
        desc: `C'est la première version spatiale du missile Redstone.
        Le lanceur Juno I place en orbite le premier satellite américains le 31 janvier 1958 Explorer 1.
        Haut de 20,9 m, c'est un lanceur à 4 étages d'un diamètre de 1,78 m.
        Le premier étage est le missile Redstone proprement dit allongé haut de 17 m. 
        Son unique moteur A7 de 37,4 tonnes de poussée brûle un mélange de UDMH et diéthylène triamine.
        Les trois autres étages sont à propergols solides`,
        target: ['premice', 1],
    },
    {
        name: "Mercury-Redstone",
        src: testImg,
        desc: `JLe lanceur composite Mercury-Redstone était une fusée qui permit aux États-Unis
        d'accomplir ses premières incursions habitées dans l'espace dans le cadre du projet Mercury.
        Le véhicule propulsif tirait sa substance du Jupiter C, une variante issue du missile Redstone
        sur lequel les ingénieurs renforcèrent sa fiabilité pour l'adapter aux missions spatiales.
        Six mises à feu furent réalisées dont les deux dernières avec un astronaute à bord.
        Du fait de sa puissance limitée la Mercury-Redstone ne permettait qu'un vol suborbital. 
        Pour les missions Mercury suivantes ce lanceur fut remplacé par la fusée Atlas D.`,
        target: ['premice', 2],
    },
    {
        name: "Atlas",
        src: testImg,
        desc: `Atlas est une famille de lanceurs spatiaux américains dérivé du missile Atlas 
        premier missile balistique intercontinental américain mis au point à la fin des années 1950. 
        Le lanceur Atlas est utilisé dans la même configuration que le missile pour lancer les premiers 
        astronautes américains en orbite dans le cadre du programme Mercury (1962). 
        On lui adjoint rapidement un deuxième étage pour lancer des satellites et des sondes 
        spatiales : l'étage Agena (1960) puis, après une longue mise au point l'étage 
        Centaur dont les caractéristiques révolutionnaires permettent d'accroître fortement la 
        charge utile qui passe à 4 tonnes en orbite basse et 1 tonne pour les sondes 
        interplanétaires.`,
        target: ['premice', 3],
    },
    {
        name: "Titan II",
        src: testImg,
        desc: `Le Titan II est plus lourd et plus puissant qu'Atlas et Titan I et est 
        donc proposé pour le lancement des capsules habitées Gemini, plus lourdes que les capsules 
        Mercury qui étaient lancées par la fusée Atlas D.`,
        target: ['premice', 3],
    },
    {
        name: "Mercury",
        src: testImg,
        desc: `Le vaisseau spatial Mercury est le premier véhicule spatial américain à avoir été 
        utilisé pour envoyer un homme dans l’espace.
        De forme conique et conçu pour accueillir un seul astronaute, il est doté de moteurs 
        lui permettant de s'orienter dans l'espace ainsi que de rétrofusées pour sa rentrée dans l’atmosphère.
        À la base du cône un bouclier thermique constitué d'un matériau ablatif permet au 
        vaisseau de résister à la température engendrée par sa rentrée atmosphérique à 
        très grande vitesse dans les couches denses de l'atmosphère. 
        Le vaisseau Mercury est conçu pour amerrir en pleine mer.`,
        target: ['premice', 3],
    },
    {
        name: "Saturn V",
        src: testImg,
        desc: `Saturn V est un lanceur géant développé dans les années 
        1960 par la NASA. Il a placé en orbite les vaisseaux qui ont déposé les astronautes américains 
        sur le sol lunaire. Elle est capable de placer 140 tonnesen orbite basse terrestre.
        C'est le premier lanceur à mettre en œuvre des moteurs brûlant le mélange 
        cryogénique performant d'hydrogène et d'oxygène liquides. Il reste en 2019 
        le lanceur le plus puissant (charge utile) jamais développé, car aucun programme aussi 
        ambitieux que le programme Apollo n'a pu aboutir par la suite.`,
        target: ['premice', 3],
    },
    {
        name: "Apollo XI",
        src: testImg,
        desc: `Je suis un blabla e suis un blabla e suis un blabla 
        e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
        Je suis un blabla e suis un blabla e suis un blabla 
        e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
        target: ['premice', 3],
    },
    {
        name: "Colombia",
        src: testImg,
        desc: `Je suis un blabla e suis un blabla e suis un blabla 
        e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
        Je suis un blabla e suis un blabla e suis un blabla 
        e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
        target: ['premice', 3],
    },
    {
        name: "Apollo Intrepid",
        src: testImg,
        desc: `Je suis un blabla e suis un blabla e suis un blabla 
        e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
        Je suis un blabla e suis un blabla e suis un blabla 
        e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
        target: ['premice', 3],
    }],
    [{
        name: "Aquarius",
        src: testImg,
        desc: `Je suis un blabla e suis un blabla e suis un blabla 
        e suis un blabla e suis un blabla e suis un blabla e suis un blabla 
        Je suis un blabla e suis un blabla e suis un blabla 
        e suis un blabla e suis un blabla e suis un blabla e suis un blabla `,
        target: ['premice', 3],
    },
    {
        name: "Saturn I-B",
        src: testImg,
        desc: `La fusée spatiale Saturn I-B était une version améliorée du lanceur Saturn I, 
        qui disposait d'un second étage plus puissant, le S-IVB. Contrairement à Saturn I, 
        le modèle IB était capable de placer le module de commande d'Apollo en orbite terrestre, 
        ce qui en faisait un lanceur de choix pour tester le vaisseau Apollo pendant que la 
        fusée Saturn V nécessaire au lancement complet, était encore en cours d'élaboration. 
        Saturn IB fut utilisé plus tard, pour les missions habitées Skylab et le projet Apollo-Soyouz.`,
        target: ['premice', 3],
    }
    ]
]

export default NavettesMockup;