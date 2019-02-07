import testImg from '../assets/img/4_19.jpg';
import astro1Apollo13 from '../assets/img/apollo13/astro1Apollo13.png';
import astro2Apollo13 from '../assets/img/apollo13/astro2Apollo13.png';
import astro3Apollo13 from '../assets/img/apollo13/astro3Apollo13.png';
import astroAllApollo13 from '../assets/img/apollo13/astroAllApollo13.png';
import logoApollo13 from '../assets/img/apollo13/logoApollo13.png';
import navetteApollo13 from '../assets/img/apollo13/navetteApollo13.png';
import guerreFroide from '../assets/img/guerre_froide.png';
import intro2 from '../assets/img/wernher.png';
import GFLogo from '../assets/img/GF_logo.png';
import USAURSS from '../assets/img/URSS_USA.png';
import moon from '../assets/img/moon.png';
import AtlasContent from '../assets/img/Atlas_content.png';
import ImgIntro2 from '../assets/img/intro2.png';
import Journal from '../assets/img/tintin_journal.png';
import GeminiPatch from '../assets/img/geminiPatch.png';
import MercuryPatch from '../assets/img/mercuryPatch.png';
import GeminiSchema from '../assets/img/Gemini1.png';
import geminiPic from '../assets/img/paraglider.jpg';

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
        manœuvre et rendez-vous spatial, mettre au point les techniques permettant de travailler dans l'espace au cours de sorties extra-véhiculaires, perfectionner les méthodes de retour sur Terre des vaisseaux spatiaux et leur atterrissage et étudier les conséquences de l'apesanteur sur la physiologie humaine au cours de vols de longue durée.
        `,
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
    apollo2: [
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
    ]
};

export default erasDatas;