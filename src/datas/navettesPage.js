import Colombia from "../assets/img/ApolloSoyuz3.png";
import Juno from "../assets/img/juno-I.png";
import MercuryRedstone from "../assets/img/mercury-redstone.png";
import Atlas from "../assets/img/atlas.png";
import Titan from "../assets/img/titan-II.png";
import Mercury from "../assets/img/mercury.png";
import SaturnV from "../assets/img/saturn-V.png";
import Apollo from "../assets/img/apollo-11.png";
import SaturnIB from "../assets/img/saturn-IB.png";
import Curiosity from '../assets/img/Curiosity.png';
import ApolloLunarModule from '../assets/img/ApolloLunarModule.png';
import Mir from '../assets/img/Mir.png';

const NavettesMockup = [
    [{
        name: "Juno I",
        src: Juno,
        desc: `C'est la première version spatiale du missile Redstone.
        Le lanceur Juno I place en orbite le premier satellite américains le 31 janvier 1958 Explorer 1.
        Haut de 20,9 m, c'est un lanceur à 4 étages d'un diamètre de 1,78 m.
        Le premier étage est le missile Redstone proprement dit allongé haut de 17 m. 
        Son unique moteur A7 de 37,4 tonnes de poussée brûle un mélange de UDMH et diéthylène triamine.
        Les trois autres étages sont à propergols solides.`,
        target: ['premice', 0],
    },
    {
        name: "Mercury-Redstone",
        src: MercuryRedstone,
        desc: `Le lanceur composite Mercury-Redstone était une fusée qui permit aux États-Unis
        d'accomplir ses premières incursions habitées dans l'espace dans le cadre du projet Mercury.
        Le véhicule propulsif tirait sa substance du Jupiter C, une variante issue du missile Redstone
        sur lequel les ingénieurs renforcèrent sa fiabilité pour l'adapter aux missions spatiales.
        Six mises à feu furent réalisées dont les deux dernières avec un astronaute à bord.
        Du fait de sa puissance limitée la Mercury-Redstone ne permettait qu'un vol suborbital. 
        Pour les missions Mercury suivantes ce lanceur fut remplacé par la fusée Atlas D.`,
        target: ['premice', 0],
    },
    {
        name: "Atlas",
        src: Atlas,
        desc: `Atlas est une famille de lanceurs spatiaux américains dérivé du missile Atlas 
        premier missile balistique intercontinental américain mis au point à la fin des années 1950. 
        Le lanceur Atlas est utilisé dans la même configuration que le missile pour lancer les premiers 
        astronautes américains en orbite dans le cadre du programme Mercury (1962). 
        On lui adjoint rapidement un deuxième étage pour lancer des satellites et des sondes 
        spatiales : l'étage Agena (1960) puis, après une longue mise au point l'étage 
        Centaur dont les caractéristiques révolutionnaires permettent d'accroître fortement la 
        charge utile qui passe à 4 tonnes en orbite basse et 1 tonne pour les sondes 
        interplanétaires.`,
        target: ['premice', 1],
    },
    {
        name: "Titan II",
        src: Titan,
        desc: `Le Titan II est plus lourd et plus puissant qu'Atlas et Titan I et est 
        donc proposé pour le lancement des capsules habitées Gemini, plus lourdes que les capsules 
        Mercury qui étaient lancées par la fusée Atlas D.`,
        target: ['premice', 2],
    },
    {
        name: "Mercury",
        src: Mercury,
        desc: `Le vaisseau spatial Mercury est le premier véhicule spatial américain à avoir été 
        utilisé pour envoyer un homme dans l’espace.
        De forme conique et conçu pour accueillir un seul astronaute, il est doté de moteurs 
        lui permettant de s'orienter dans l'espace ainsi que de rétrofusées pour sa rentrée dans l’atmosphère.
        À la base du cône un bouclier thermique constitué d'un matériau ablatif permet au 
        vaisseau de résister à la température engendrée par sa rentrée atmosphérique à 
        très grande vitesse dans les couches denses de l'atmosphère. 
        Le vaisseau Mercury est conçu pour amerrir en pleine mer.`,
        target: ['premice', 1],
    },
    {
        name: "Saturn V",
        src: SaturnV,
        desc: `Saturn V est un lanceur géant développé dans les années 
        1960 par la NASA. Il a placé en orbite les vaisseaux qui ont déposé les astronautes américains 
        sur le sol lunaire. Elle est capable de placer 140 tonnesen orbite basse terrestre.
        C'est le premier lanceur à mettre en œuvre des moteurs brûlant le mélange 
        cryogénique performant d'hydrogène et d'oxygène liquides. Il reste en 2019 
        le lanceur le plus puissant (charge utile) jamais développé, car aucun programme aussi 
        ambitieux que le programme Apollo n'a pu aboutir par la suite.`,
        target: ['apollo1', 1],
    },
    {
        name: "Apollo XI",
        src: Apollo,
        desc: `
        Le module de commande Apollo est la partie dans laquelle les trois astronautes séjournent 
        durant la mission, sauf lorsque deux d'entre eux descendent sur la Lune au moyen du module lunaire. 
        De forme conique, sa structure externe comporte une double paroi : une enceinte 
        constituée de tôles et nid d'abeilles à base d'aluminium qui renferme la zone pressurisée et un 
        épais bouclier thermique qui recouvre la première paroi et qui permet au module de résister à la 
        chaleur produite par la rentrée atmosphérique et qui lui permet d'y survivre. C'est le seul des 
        quatre modules qui revient à la surface de la Terre. L'espace pressurisé dans lequel doivent 
        vivre les astronautes est très exigu car son volume habitable est de 6,5 m.`,
        target: ['apollo2', 0],
    },
    {
        name: "Module Lunaire Apollo",
        src: ApolloLunarModule,
        desc: `
        Le module lunaire ou LEM (pour Lunar Excursion Module) ou LM (pour Lunar Module) est le véhicule 
        spatial utilisé dans le cadre du programme spatial américain Apollo (1961-1972) pour débarquer des hommes 
        sur la Lune. Son rôle est de faire atterrir sur la Lune deux des trois membres d'équipage du vaisseau Apollo 
        avec des équipements scientifiques, de leur permettre d'y séjourner de deux à quatre jours avant de 
        décoller pour rejoindre le module de commande et de service (CSM) resté en orbite lunaire et chargé 
        de ramener l'équipage sur Terre.`,
        target: ['apollo2', 1],
    },
    {
        name: "Colombia",
        src: Colombia,
        desc: `Columbia ou OV-102 (Orbital Vehicle-102) est la première navette spatiale américaine à 
        avoir été dans l'espace lors de son premier vol le 12 avril 1981. Elle s'est désintégrée lors 
        de son retour sur Terre le 1er février 2003. Elle a réalisé 28 vols spatiaux pour un total de 300,74 
        jours en orbite, pendant lesquelles elle a réalisé 4 808 rotations autour de la Terre et parcouru 
        201 497 772 kilomètres. Elle détient le record du plus long vol pour une navette établi lors du 
        vol STS-80 avec 17 jours et 15 heures. Elle fut la première navette commandée par une femme, 
        Eileen Collins, lors du vol STS-93 en 1999.`,
        target: ['apollo3', 1],
    }],
    [{
        name: "Saturn I-B",
        src: SaturnIB,
        desc: `La fusée spatiale Saturn I-B était une version améliorée du lanceur Saturn I, 
        qui disposait d'un second étage plus puissant, le S-IVB. Contrairement à Saturn I, 
        le modèle IB était capable de placer le module de commande d'Apollo en orbite terrestre, 
        ce qui en faisait un lanceur de choix pour tester le vaisseau Apollo pendant que la 
        fusée Saturn V nécessaire au lancement complet, était encore en cours d'élaboration. 
        Saturn IB fut utilisé plus tard, pour les missions habitées Skylab et le projet Apollo-Soyouz.`,
        target: ['apolloSoyouz', 0],
    },
    {
        name: "Rover Curiosity",
        src: Curiosity,
        desc: `Le rover Curiosity est un engin particulièrement imposant avec une masse de 899 kg à comparer aux 174 
        kg pour les rovers Spirit et Opportunity, et à peine 10,6 kg pour Sojourner. Sa taille lui permet d'embarquer 
        75 kg d'instruments contre 6,8 kg pour les rovers MER. Le rover est long de 2,7 m. La partie centrale du rover 
        montée sur roues, la « boîte électronique chaude » (warm electronics box ou WEB) renferme l'électronique et 
        les deux instruments scientifiques qui doivent analyser les échantillons de sol et de roche. Un mât, qui est 
        implanté sur l'avant de ce boîtier et qui culmine à 2,13 mètres, porte plusieurs caméras, des sondes atmosphériques, 
        ainsi que le spectromètre laser.`,
        target: ['today', 0],
    },
    {
        name: "Station spatiale Mir",
        src: Mir,
        desc: `Mir (du russe : Мир signifiant « paix » et « monde ») était une station spatiale russe placée en orbite terrestre 
        basse par l'Union soviétique. Mise en orbite le 19 février 1986 et détruite volontairement le 23 mars 2001, elle fut 
        assemblée en orbite entre 1986 et 1996. Mir était la première station spatiale composée de plusieurs modules, possédait une masse 
        supérieure à celle de n'importe quel satellite précédent et détenait le record du plus grand satellite artificiel en orbite autour de 
        la Terre jusqu'à sa désorbitation le 21 mars 2001 (record aujourd'hui détenu par la Station spatiale internationale). Mir a servi de 
        laboratoire de recherche en micropesanteur.`,
        target: ['apolloSoyouz', 0],
    }],
    // [{
    //     name: "Saturn I-B",
    //     src: SaturnIB,
    //     desc: `La fusée spatiale Saturn I-B était une version améliorée du lanceur Saturn I, 
    //     qui disposait d'un second étage plus puissant, le S-IVB. Contrairement à Saturn I, 
    //     le modèle IB était capable de placer le module de commande d'Apollo en orbite terrestre, 
    //     ce qui en faisait un lanceur de choix pour tester le vaisseau Apollo pendant que la 
    //     fusée Saturn V nécessaire au lancement complet, était encore en cours d'élaboration. 
    //     Saturn IB fut utilisé plus tard, pour les missions habitées Skylab et le projet Apollo-Soyouz.`,
    //     target: ['premice', 3],
    // }
    // ]
]

export default NavettesMockup;