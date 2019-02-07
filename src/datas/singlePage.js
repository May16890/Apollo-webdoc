import testImg from '../assets/img/4_19.jpg';
//import astro1Apollo13 from '../assets/img/apollo13/astro1Apollo13.png';
//import astro2Apollo13 from '../assets/img/apollo13/astro2Apollo13.png';
//import astro3Apollo13 from '../assets/img/apollo13/astro3Apollo13.png';
import astroAllApollo13 from '../assets/img/apollo13/astroAllApollo13.png';
//import logoApollo13 from '../assets/img/apollo13/logoApollo13.png';
//import navetteApollo13 from '../assets/img/apollo13/navetteApollo13.png';
import guerreFroide from '../assets/img/guerre_froide.png';
import intro2 from '../assets/img/wernher.png';
import GFLogo from '../assets/img/GF_logo.png';
import USAURSS from '../assets/img/URSS_USA.png';
import moon from '../assets/img/moon.png';
import AtlasContent from '../assets/img/Atlas_content.png';
//import ImgIntro2 from '../assets/img/intro2.png';
import Journal from '../assets/img/tintin_journal.png';
import GeminiPatch from '../assets/img/geminiPatch.png';
import MercuryPatch from '../assets/img/mercuryPatch.png';
import GeminiSchema from '../assets/img/Gemini1.png';
import geminiPic from '../assets/img/paraglider.jpg';
import MSL from '../assets/img/MSLaboratory.png';
import rover from '../assets/img/roverCuriosity.jpg';
import Juno from '../assets/img/Juno_mission.svg';
import MSLPic1 from '../assets/img/MSL_cruise.png';
import MSLPic2 from '../assets/img/MSL_pic.jpg';
import Osiris from '../assets/img/Osiris.png';
import Apollo7 from '../assets/img/Apollo7_logo.png';
import Apollo9 from '../assets/img/Apollo-9.png';
import Apollo11 from '../assets/img/Apollo_11.png';

const erasDatas = {
    premice: [
        {
        'logo': GFLogo,
        'titleCard': `Guerre <span style='color:red;'>Froide</span><span style='font-size:16px;'> 1947-1991</span> `,
        'intro': `Durant les années 1950, la guerre froide bat son plein entre les États-Unis et l’Union soviétique, les deux superpuissances de l’époque. Celle-ci se traduit par des affrontements militaires indirects, et une course aux armements qui porte notamment sur le développement de missiles intercontinentaux porteurs de têtes militaires nucléaires capables d’atteindre le territoire national de l’adversaire.
        <br><br/>
        L’Union soviétique prend une certaine avance en réussissant en 1956 le premier tir d’un missile intercontinental, la R-7 Semiorka, ancêtre direct de la fusée <span style='font-weight: 800;'>Soyouz.<span/>`,
        'intro1': guerreFroide,
        'intro2' : intro2,
        'content': `En juillet 1955, les États-Unis et l’URSS annoncent, chacun de leur côté, qu’ils lanceront un satellite artificiel dans le cadre des travaux scientifiques prévus pour l’Année géophysique internationale.
        <br><br/>
        À la surprise générale, le 4 octobre 1957, l’Union soviétique est la première à placer en orbite le satellite <span style='font-weight: 800;'>Spoutnik 1</span>. L’opinion internationale est fascinée par cet événement qui semble présager le début d’une nouvelle ère technique et scientifique.
        <br><br/>
        L’équipe de <span style='font-weight: 800;'>Wernher von Braun</span> parvient finalement à lancer le premier satellite américain, Explorer 1, le 1er février 1958 grâce au lanceur <span style='font-weight:800'>Juno I</span> improvisé à partir d’un missile balistique <span style='font-weight: 800'></span>Redstone.`,
        'teamImg': USAURSS,
        'moon': moon
        },
        {
        'logo': MercuryPatch,
        'titleCard': `Création de la NASA et programme <span style='color:red;'>Mercury</span>`,
        'intro': `Bien que réticent à investir massivement dans le spatial civil, le président américain <span style='font-weight: 800'>Dwight D. Eisenhower</span> décide le 29 juillet 1958 de la création d’une agence spatiale civile, la NASA, qui doit permettre de fédérer les efforts américains pour mieux contrer les réussites soviétiques : la course à l’espace est lancée.
        <br /><br />
        La même année voit le début du <span style='font-weight: 800'>programme Mercury</span> (7 octobre 1958) qui doit permettre la mise en orbite des premières missions habitées américaines.
        `,
        'content': `Les objectifs du programme étaient de placer un homme en orbite autour de la Terre, d’étudier les effets de l’impesanteur sur l’organisme humain et de mettre au point un système de récupération fiable du vaisseau spatial et de son équipage.
        Six vols spatiaux habités (et dix-neuf vols sans astronaute) ont eu lieu entre 1959 et 1963 : deux vols suborbitaux lancés par une fusée Mercury-Redstone et quatre vols orbitaux lancés par une fusée <span style='font-weight: 800'>Atlas</span>. 
        <br><br/>
        <br><br/>
        La mission <span style='font-weight:800'>Mercury 3 </span>(5 mai 1961) avec à son bord <span style='font-weight: 800'>Alan Shepard</span>, premier vol spatial habité américain, parcourut une trajectoire balistique culminant à 186 km. Le premier vol orbital eut lieu le 20 février 1962 avec <span style='font-weight: 800'>Mercury 6</span> (équipage <span style='font-weight: 800'>John Glenn</span>), qui boucla trois tours autour de la Terre. La sixième mission habitée fut la plus longue : la capsule de <span style="font-weight: 800">Mercury 9</span> (équipage <span style='font-weight: 800'>Gordon Cooper</span>) parcourut 22 orbites en environ 36 heures. Le programme ne connaîtra aucun échec, malgré des défaillances parfois graves de la capsule Mercury.`,
       // 'audio': 'azzazaza zazazazaz aza zaza zaza zazaza zazaza.',
        'navetteName': 'ATLAS',
        'AtlasContent': AtlasContent,
        'journal': Journal,
        },
        {
        'logo': GeminiPatch,
        'titleCard': `Programme <span style='color:red;'>Gemini</span>`,
        'intro': `Alors que la fin du programme spatial américain Mercury se profile, les dirigeants de la NASA lancent un programme destiné à maîtriser les techniques de localisation, 
        manœuvre et rendez-vous spatial, mettre au point les techniques permettant de travailler dans l'espace au cours de sorties extra-véhiculaires, perfectionner les méthodes de retour sur Terre des vaisseaux spatiaux et leur atterrissage et étudier les conséquences de l'apesanteur sur la physiologie humaine au cours de vols de longue durée.`,
       'geminiPic' : geminiPic,
        'content': `Le vaisseau spatial <span style='font-weight: 800'>Gemini</span>, qui devait initialement être une simple version améliorée de la capsule Mercury, se transforme au fur et à mesure de son développement en un vaisseau complètement différent, capable de voler avec deux astronautes durant deux semaines. Le vaisseau était lancé par une fusée <span style='font-weight: 800'>Titan II</span>, missile de l'armée de l'air américaine reconverti en lanceur. Le programme rencontra des problèmes de mise au point. 
        Toutefois, fin 1963, tout était rentré dans l'ordre et deux vols sans équipage purent avoir lieu en 1964 et début 1965. 
        <br><br/>
        <br><br/>
        Le premier vol habité Gemini 3 emporta les astronautes <span style='font-weight: 800'>Virgil Grissom</span> et <span style='font-weight: 800'>John Young</span> le 23 mars 1965. Au cours de la mission suivante, l'astronaute <span style='font-weight: 800'>Edward White</span> réalise la première sortie dans l'espace américaine. Huit autres missions, émaillées d'incidents sans conséquence, s'échelonnèrent jusqu'en novembre 1966 : elles permirent de mettre au point les techniques de rendez-vous spatial et d'amarrage, de réaliser des vols de longue durée (Gemini 7 resta près de 14 jours en orbite) ainsi que d'effectuer de nombreuses autres expériences.`,
        'audio': 'azzazaza zazazazaz aza zaza zaza zazaza zazaza.',
        'navetteName': 'GEMINI',
        'navette': GeminiSchema,
        'teamImg1': astroAllApollo13,
        },
    ],
    apollo1: [
        {
            'logo': Apollo7,
            'titleCard': `Apollo 7 et 8`,
            'intro': `Apollo 7 est la première mission lunaire habitée. Son but était de valider les avancées techniques réalisées suite à l'échec d'Apollo 1. Au cours de son séjour en orbite, l’équipage avec Walter Schirra comme commandant de bord, teste les manœuvres qui seront utilisées lors des missions lunaires.`,
            'content': `Après avoir quitté l'orbite terrestre et effectué leur rentrée dans l'atmosphère, la capsule et son équipage sont récupérés sans incident dans l'Atlantique. C'était aussi la première mission américaine à envoyer une équipe de trois hommes dans l'espace ainsi qu'à diffuser des images pour la télévision.
            <br><br/>
            <br><br/>
            Le 21 décembre 1968 est lancée la mission Apollo 8 avec Frank Borman  comme commandant de bord. Elle est la première mission du programme a quitter l'orbite terrestre pour se rendre sur celle de la lune.
            <br><br/>
            La fusée spatiale Saturn V utilisée pour mettre en orbite Apollo 8 fut désignée SA-503. Il s'agissait du troisième exemplaire construit. 
            Les astronautes firent au total 10 révolutions autour du satellite terrestre. Durant leur expédition, ils purent prendre différents clichés dont le premier d'un lever de Terre. Apollo 8 permit à l'Homme de voir directement la «face cachée» de la Lune. L'une des tâches dédiées à l'équipage consistait à effectuer une reconnaissance en vue d'un atterrissage, surtout de la mer de la Tranquillité où devait se poser Apollo 11.`,
            'navetteName': 'GEMINI',
            
        },
        {
            'logo': Apollo9,
            'titleCard': `Apollo 9 et 10`,
            'intro': `Apollo 9 forme le premier test en vol de la totalité des équipements prévus pour une mission lunaire, qui porte à la fois sur le CSM, le Lem et le lanceur Saturn. Pour la première fois, on baptise le CSM (Gumdrop) et le Lem (Spider).`,
            'content': `L'équipage effectue l'ensemble des manœuvres de la mission lunaire. En orbite terrestre, il simule un atterrissage du Lem et réalise le premier rendez-vous réel entre Lem et CSM. Les astronautes effectuent aussi une sortie extra-véhiculaire de 56 minutes pour tester un transfert d'équipage du Lem au CSM par l'extérieur.<br><br/> En outre, ils testent des manœuvres de secours, entre autres une procédure durant laquelle les astronautes pourraient utiliser&nbsp;le Lem comme «canot de sauvetage» au cas où le module de commande deviendrait non manœuvrable ou inhabitable ; c'est cette procédure qui sera ensuite utilisée pour récupérer l'équipage d'Apollo 13.
            <br><br/>
            <br><br/>
            Apollo 10 cette mission était avant tout une répétition pour la phase qui précédait l'atterrissage. Le module lunaire, surnommé «Snoopy», fut envoyé à 15, 6 km de la surface lunaire. En dehors de cela, la mission reproduisait les principales étapes du vol final, à la fois dans l'espace et au sol. Peu après avoir quitté son orbite terrestre basse, le module de commande se sépara du troisième étage de Saturn V, effectua une rotation à 180° puis arrima son nez au sommet du module lunaire, lequel était toujours attaché à la fusée Saturn.<br><br/>
            La totalité module de service et module lunaire se sépara ensuite du lanceur. Les moteurs du module de commande propulsèrent les deux vaisseaux jusqu'à la Lune. John W. Young prit les commandes du CSM tandis que Thomas Stafford et Eugene Cernan prenaient le contrôle du module lunaire. 
            Ils vérifièrent surtout son radar et son moteur d'ascension, mais aussi le site d'atterrissage dans la mer de la Tranquillité.
                        `,
            'navetteName': 'GEMINI',
            
        },
    ],
    apollo2: [
        {
            'logo': Apollo11,
            'titleCard': `Apollo 11`,
            'intro': `Le 21 juillet 1969 restera une date clé. En effet ce jour-là, l'Homme a marché sur la Lune pour la première fois ! La mission des deux astronautes Neil Armstrong et Edwin Aldrin va rentrer dans l'histoire. Armstrong s'élance et déclare après son premier pas sur la Lune : « C'est un petit pas pour l'homme (que je viens de faire), mais c'est un bond de géant pour l'Humanité ».`,
            'content': `Armstrong et Aldrin installèrent ensuite un réflecteur laser (sa fonction est d'envoyer des ondes vers la Terre pour mesurer avec une précision de 45 m la distance Terre-Lune), un sismographe ultra-sensible (cet appareil enverra un signal électrique dès le moindre tremblement) et déroulèrent une feuille d'aluminium conçue pour capter les particules solaires. C'est à 14h32 (Heure Française) que la capsule spatiale Apollo XI est partie de Cap Kennedy, au sommet d'une fusée Saturn V de 111 m de haut, pesant 3100 tonnes et d'une puissance de 155 millions de chevaux.
            <br><br/>
            <br><br/>
            "Apollo XI" doit, pour la première fois dans l'histoire de l'Humanité, amener des hommes sur la lune. Le 19 Juillet, "Apollo XI" s'est satellisée avec son équipage composé de Neil Armstrong, Edwin Aldrin et Michael Collins autour de la Lune. Après une vérification approfondie de toutes les installations techniques, la séparation du module d'exploration lunaire (LEM) "Eagle" s'effectue le 20 Juillet, emportant Armstrong et Aldrin vers leur objectif, Collins restant seul aux commandes d' Apollo XI en orbite autour de la Lune. Après une manoeuvre plus que délicate, le LEM touche la surface lunaire à 21 h 17. Après un séjour de quelques heures dans le LEM, la sortie se prépare. Le premier homme à poser le pied sur la lune, Neil Armstrong, accomplit le geste historique le 21 Juillet à 3 h 56 et prononce sa phrase devenue célèbre depuis : "C'est un petit pas pour l'homme, un bond de géant pour l'Humanité".            <br><br/>
            La fusée spatiale Saturn V utilisée pour mettre en orbite Apollo 8 fut désignée SA-503. Il s'agissait du troisième exemplaire construit. 
            Les astronautes firent au total 10 révolutions autour du satellite terrestre. Durant leur expédition, ils purent prendre différents clichés dont le premier d'un lever de Terre. Apollo 8 permit à l'Homme de voir directement la «face cachée» de la Lune. L'une des tâches dédiées à l'équipage consistait à effectuer une reconnaissance en vue d'un atterrissage, surtout de la mer de la Tranquillité où devait se poser Apollo 11.`,
            'navetteName': 'GEMINI',
            
        },
        {
            'logo': Apollo11,
            'titleCard': `Apollo 11`,
            'intro': `Edwin Aldrin le suit quelques minutes plus tard. Les deux astronautes resteront en tout 22 heures sur la Lune, dont environ 2 à l'extérieur du LEM. Des images des opérations sont transmises en direct de la Lune à la Terre : on estime que 500 millions de téléspectateurs assistent de par le monde aux retransmissions, comme lors de l'envol d' "Apollo XI".`,
            'content': `Le programme de travail des astronautes sur le sol Lunaire comprend la mise en place de certains dispositifs scientifiques, par exemple pour la mesure du vent solaire, ainsi qu'une série d'exercices de mouvement sur un sol où la gravité ne représente que 20% de celle qui règne sur la Terre. La première conversation téléphonique entre la Lune et la Terre a lieu entre les astronautes et le Président Richard Nixon. Le départ de la Lune a lieu le soir du 21 Juillet à 18 h 54 précises, avec l'allumage de la fusée de l'étage du LEM servant de retour. Le module s'arrime à la capsule mère Columbia à 22 h 35, les deux "hommes de la Lune", Armstrong et Aldrin, rejoignant Collins. Le lendemain "Apollo XI", après le largage de l'étage du LEM, rallume ses moteurs et entame sa route vers la Terre.
            <br><br/>
            <br><br/>
            Le 24 Juillet à 17 h 51, la capsule touche le Pacifique dans la zone prévue : la première expédition humaine sur la Lune s'achève. En souvenir du premier alunissage, les astronautes américains ont laissé sur le sol lunaire un drapeau US en Nylon, ainsi qu'une plaque d’acier inaltérable sur laquelle de futurs "touristes lunaires" pourront lire&nbsp;: "C'est ici que des êtres humains de la planète Terre posèrent pour la première fois le pied sur la Lune, en 1969 après J-C. Nous sommes venus en paix pour toute l'Humanité. Neil A. Armstrong, astronaute, Edwin E. Aldrin, astronaute, Michael Collins, astronaute, Richard Nixon, Président des Etats-Unis d'Amérique".`,
            'navetteName': 'GEMINI',
            
        }
    ],
    apollo3: [
        [
            ['text', 'jkdsjdkjsd djksqjdksqjdks jdskjdksjqdkqsjd jdksqjdksqjdsq jkdsjqkdjqsk.'],
            ['img', testImg],
            ['img', testImg],
            ['text', 'azzazaza zazazazaz aza zaza zaza zazaza zazaza.'],
        ],
        [
            ['text', 'jkdsjdkjsd djksqjdksqjdks jdskjdksjqdkqsjd jdksqjdksqjdsq jkdsjqkdjqsk.'],
            ['img', testImg],
            ['img', testImg],
            ['text', 'azzazaza zazazazaz aza zaza zaza zazaza zazaza.'],
        ],
        [
            ['text', 'jkdsjdkjsd djksqjdksqjdks jdskjdksjqdkqsjd jdksqjdksqjdsq jkdsjqkdjqsk.'],
            ['img', testImg],
            ['img', testImg],
            ['text', 'azzazaza zazazazaz aza zaza zaza zazaza zazaza.'],
        ],
        [
            ['text', 'jkdsjdkjsd djksqjdksqjdks jdskjdksjqdkqsjd jdksqjdksqjdsq jkdsjqkdjqsk.'],
            ['img', testImg],
            ['img', testImg],
            ['text', 'azzazaza zazazazaz aza zaza zaza zazaza zazaza.'],
        ],
    ],
    apolloSoyuz: [
        [
            ['text', 'jkdsjdkjsd djksqjdksqjdks jdskjdksjqdkqsjd jdksqjdksqjdsq jkdsjqkdjqsk.'],
            ['img', testImg],
            ['img', testImg],
            ['text', 'azzazaza zazazazaz aza zaza zaza zazaza zazaza.'],
        ],
        [
            ['text', 'jkdsjdkjsd djksqjdksqjdks jdskjdksjqdkqsjd jdksqjdksqjdsq jkdsjqkdjqsk.'],
            ['img', testImg],
            ['img', testImg],
            ['text', 'azzazaza zazazazaz aza zaza zaza zazaza zazaza.'],
        ],
    ],
    today: [
             {
            'logo': MSL,
            'titleCard': `Mars Science Laboratory`,
            'intro': `Mars Science Laboratory mission d'exploration de la planète <span style='font-weight:800'>Mars</span> à l'aide d'une astromobile, le <span style='font-weight:800'>rover Curiosity</span>. Il peut se déplacer grâce à six roues et à un générateur d’énergie nucléaire au plutonium, ce qui lui donne plus d’autonomie que les panneaux solaires d’autres missions. Curiosity dispose d’un bras télécommandé de 2.1 mètres de long qui lui permet d’analyser le sol et les roches aux alentours, mais aussi de forer et de récolter des échantillons pour les autres instruments.`,
           'rover' : rover,
            'content': `Il possède un mât avec une caméra couleur stéréo et haute définition, ainsi qu’un laser capable de vaporiser la surface du sol jusqu’à une distance de sept mètres. Il peut ainsi faire une <span style='font-weight: 800'>analyse spectroscopique</span> à distance et choisir les meilleures cibles. Le rover contient de nombreux autres instruments, caméra microscopique, spectromètre à rayons X, détecteur de neutrons, détecteur de radiation, station météorologique, spectromètre de masse.`,
            'navetteName': 'GEMINI',
            'MSLPic1' : MSLPic1,
            'MSLPic2' : MSLPic2,
            },
            {
            'logo': Juno,
            'titleCard': `Juno`,
            'intro': `Juno est une mission spatiale de la NASA qui a pour objectif l'étude de la planète Jupiter. La structure de cette planète géante gazeuse et son mode de formation restent, au lancement de la mission, largement inconnus malgré plusieurs missions spatiales et les observations astronomiques faites depuis la Terre`,
            'content': `La sonde spatiale, lancée en 2011, doit collecter sur place des données sur les couches internes de Jupiter, la composition de son atmosphère et les caractéristiques de sa magnétosphère. Ces éléments doivent permettre de reconstituer la manière dont Jupiter s'est formée et de corriger ou d'affiner le scénario de formation des planètes du Système solaire dans lequel Jupiter a, du fait de sa masse importante, joué un rôle majeur.
            <br><br/>
            <br><br/>
            Juno a été lancée par une fusée Atlas V le 5 août 2011. Deux ans après son lancement, Juno a effectué un survol à basse altitude de la Terre qui, par assistance gravitationnelle, lui a fourni le surcroît de vitesse nécessaire pour atteindre Jupiter. La phase scientifique de la mission débute après la mise en orbite autour de Jupiter le 5 juillet 2016. Juno commence ses observations, effectuées à partir d'une orbite polaire très elliptique d'une période de 53 jours qui fait passer la sonde à très basse altitude au-dessus de la planète de pôle en pôle, en évitant en grande partie la ceinture de radiations très intense, susceptible de l'endommager. 
            <br><br/>
            <br><br/>
            La phase scientifique de la mission comprend 36 survols de la planète et devait durer vingt mois. Un problème rencontré sur la propulsion principale en octobre 2016 n'a pas permis de faire passer la sonde spatiale sur l'orbite courte de 14 jours visée. Pour réaliser le nombre de survols souhaité, la mission doit être prolongée jusqu'en 2021 et devra survivre jusque-là à l'exposition prolongée au rayonnement.
            `,
            'navetteName': 'GEMINI',
            
            },
            {
            'logo': Osiris,
            'titleCard': `OSIRIS-REx`,
            'intro': `Arrivée à proximité de  <span style='font-weight: 800'>l’astéroïde Bennu</span> le 3 décembre, la sonde <span style='font-weight: 800'>Osiris-Rex</span> y stationne autour, à seulement une vingtaine de kilomètres de distance. Depuis cette date, elle renvoie des images et des données extraordinaires d'un nouveau monde.`,
            'content': `Il y a deux jours, l'équipe scientifique de la mission a annoncé les premiers résultats et certains sont « très excitants et enthousiasmants comme la présence de minéraux hydratés, c'est à dire des minéraux qui ont interagi avec l'eau », explique Patrick Michel, astrophysicien, directeur de recherches au CNRS et membre de l'équipe scientifique de la mission.
            <br><br/>
            Les observations de Bennu ont débuté dès la phase d'approche et ont continué avec des survols à basses altitudes, à seulement 7 kilomètres de sa surface. Elles ont confirmé ce à quoi les scientifiques s'attendaient en termes « de forme, de masse et de densité ». L'astéroïde ressemble étonnamment au modèle de forme, dérivé des données acquises par le radar d'Arecibo réalisé en 2013. Quant à sa densité (1,19 grammes par centimètres cube), elle est aussi très proche de celle estimée depuis le sol terrestre avec une technique alors inédite qui a consisté à « mesurer l'effet thermique, appelé <span style='font-weight: 800'>Yarkovsky</span>, qui perturbe la trajectoire de l'astéroïde autour du Soleil ». À l'avenir, cette technique validée pourra ainsi être utilisée pour caractériser les astéroïdes les plus proches de la Terre avec des résultats proches de la réalité.
            <br><br/>
            <br><br/>
            Les données spectrales indiquent que Bennu est lié aux <span style='font-weight: 800'>chondrites carbonées</span> de type CM et CI, ce qui en fait un « objet très primitif » dont le corps parent se serait « formé très tôt dans l'histoire de la formation du Système Solaire dans une région riche en eau ». La composition de cet objet d'environ 500 mètres de diamètre est donc « fidèle à celle du matériau présent dans les premières phases de formation du Système solaire il y a 4,6 milliards d'années » ; ce qui va permettre aux scientifiques d'approfondir leurs connaissances sur cette époque.
            `,
            'navetteName': 'GEMINI',
            
            },
    ]
};

export default erasDatas;