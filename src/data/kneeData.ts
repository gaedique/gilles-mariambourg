// src/data/kneeData.ts

export const getKneeIntroduction = () => {
  return {
    title: "Prothèse de Genou",
    subtitle: "Soins Spécialisés du Genou",
    introduction: {
      beginning:
        "L'articulation du genou est l'une des plus complexes du corps humain, comprenant",
      emphasis:
        "trois compartiments articulaires, quatre ligaments principaux et un système musculaire élaboré",
      following:
        "qui fonctionnent ensemble pour soutenir le poids du corps et permettre la mobilité.",
    },
    details: [
      "L'arthrose du genou et d'autres conditions dégénératives affectent des millions de personnes à travers le monde, limitant considérablement leur mobilité et leur qualité de vie. La prothèse de genou, ou arthroplastie, représente une solution chirurgicale avancée qui a transformé le traitement de ces pathologies.",
      "Notre approche combine des évaluations préopératoires minutieuses, des techniques chirurgicales de pointe et des protocoles de réhabilitation personnalisés pour offrir à nos patients les meilleurs résultats possibles et un retour rapide à une vie active.",
    ],
  };
};

export const getKneeDownloads = () => {
  return {
    title: "Fiches d'Information",
    subtitle:
      "Téléchargez nos fiches d'information détaillées sur la prothèse de genou et les soins associés.",
    downloads: [
      {
        title: "Guide Pré-opératoire",
        description:
          "Tout ce que vous devez savoir pour vous préparer à une chirurgie de prothèse de genou.",
        fileName: "guide-preoperatoire-prothese-genou.pdf",
      },
      {
        title: "Programme de Rééducation",
        description:
          "Programme complet d'exercices et recommandations pour optimiser votre récupération après une prothèse de genou.",
        fileName: "reeducation-prothese-genou.pdf",
      },
      {
        title: "Vivre avec une Prothèse de Genou",
        description:
          "Conseils pratiques pour adapter votre quotidien et préserver votre prothèse à long terme.",
        fileName: "vivre-avec-prothese-genou.pdf",
      },
    ],
  };
};

export const getKneeData = () => {
  return {
    overview: {
      title: "Aperçu Général",
      items: [
        "La prothèse de genou est une intervention chirurgicale qui consiste à remplacer les surfaces articulaires endommagées du genou par des implants artificiels, généralement composés de métal et de polyéthylène.",
        "Cette procédure est principalement indiquée pour soulager la douleur et restaurer la fonction chez les patients souffrant d'arthrose avancée ou d'autres pathologies dégénératives du genou.",
        "Selon la localisation des lésions, l'intervention peut concerner l'ensemble de l'articulation (prothèse totale) ou seulement une partie (prothèse unicompartimentale).",
        "L'arthroplastie du genou figure parmi les chirurgies orthopédiques les plus réussies, avec un taux de satisfaction des patients supérieur à 90% et une durée de vie des implants pouvant dépasser 15 à 20 ans.",
      ],
    },
    conditions: {
      title: "Indications",
      content: [
        {
          subtitle: "Pathologies Dégénératives",
          items: [
            "Arthrose Primaire : Usure progressive du cartilage articulaire liée à l'âge et aux facteurs génétiques.",
            "Arthrose Post-traumatique : Dégénérescence articulaire faisant suite à des traumatismes (fractures, lésions ligamentaires, etc.).",
            "Arthrite Rhumatoïde : Maladie auto-immune causant une inflammation chronique des articulations.",
            "Arthropathies Microcristallines : Comme la goutte ou la chondrocalcinose, qui peuvent conduire à une destruction articulaire.",
          ],
        },
        {
          subtitle: "Déformations",
          items: [
            "Genu Varum : Déformation en « jambes arquées » où les genoux s'écartent l'un de l'autre.",
            "Genu Valgum : Déformation en « genoux cagneux » où les genoux se rapprochent l'un de l'autre.",
            "Déformations Post-traumatiques : Mauvaise consolidation après fracture affectant l'alignement du membre inférieur.",
          ],
        },
        {
          subtitle: "Autres Indications",
          items: [
            "Nécrose Aseptique des Condyles Fémoraux : Mort tissulaire locale due à une mauvaise circulation sanguine.",
            "Échec d'Ostéotomie : Lorsqu'une intervention préalable de réalignement osseux n'a pas donné les résultats escomptés.",
            "Séquelles de Fractures Articulaires : Irrégularités persistantes des surfaces articulaires après guérison d'une fracture.",
          ],
        },
      ],
    },
    diagnosis: {
      title: "Évaluation Préopératoire",
      content: [
        {
          subtitle: "Consultation Initiale",
          items: [
            "Anamnèse Complète : Historique médical, antécédents chirurgicaux, allergies, médications actuelles et évaluation de la douleur.",
            "Examen Clinique : Évaluation de la mobilité, de la stabilité, de l'alignement du membre inférieur et de la force musculaire.",
            "Évaluation Fonctionnelle : Analyse de la marche et impact des symptômes sur les activités quotidiennes.",
            "Discussion des Attentes : Clarification des résultats attendus et des limitations post-opératoires.",
          ],
        },
        {
          subtitle: "Examens Complémentaires",
          items: [
            "Radiographies : Vues standards (face, profil, défilé fémoro-patellaire) et clichés en charge pour évaluer l'alignement.",
            "IRM : Pour visualiser précisément l'état du cartilage, des ménisques et des ligaments en cas de doute diagnostique.",
            "Scanner : Parfois nécessaire pour planifier précisément l'intervention, notamment pour les cas complexes.",
            "Bilan Biologique : Recherche d'infection ou d'inflammation, évaluation de l'état général en vue de l'anesthésie.",
          ],
        },
        {
          subtitle: "Planification Préopératoire",
          items: [
            "Choix du Type de Prothèse : En fonction de l'étendue des lésions, de l'âge et du niveau d'activité du patient.",
            "Dimensionnement des Implants : Mesures précises basées sur l'imagerie pour sélectionner la taille optimale des composants.",
            "Planification Chirurgicale Assistée par Ordinateur : Pour les cas complexes ou lors de l'utilisation de guides de coupe personnalisés.",
            "Optimisation de l'État de Santé : Correction des facteurs de risque modifiables (anémie, diabète déséquilibré, etc.).",
          ],
        },
      ],
    },
    treatments: {
      title: "Types de Prothèses et Techniques Chirurgicales",
      content: [
        {
          subtitle: "Types de Prothèses",
          items: [
            "Prothèse Totale de Genou (PTG) : Remplace l'ensemble des surfaces articulaires (compartiments fémoro-tibial interne, externe et fémoro-patellaire).",
            "Prothèse Unicompartimentale : Remplace uniquement un compartiment, généralement l'interne, préservant les structures saines.",
            "Prothèse Fémoro-Patellaire : Dédiée au remplacement isolé de l'articulation entre la rotule et le fémur.",
            "Prothèses à Haute Flexion : Conçues pour permettre une amplitude de flexion supérieure, adaptées aux patients souhaitant maintenir des activités nécessitant une flexion importante.",
            "Prothèses de Révision : Implants spécifiques utilisés lors du remplacement d'une prothèse défaillante, offrant une stabilité accrue.",
          ],
        },
        {
          subtitle: "Techniques Chirurgicales",
          items: [
            "Approche Conventionnelle : Voie d'abord antérieure ou médiale avec exposition complète de l'articulation.",
            "Chirurgie Mini-Invasive : Utilisation d'incisions réduites et de techniques spécifiques limitant les dommages musculaires.",
            "Navigation Assistée par Ordinateur : Système de guidage informatisé permettant un positionnement précis des implants.",
            "Chirurgie Robotique : Utilisation d'un bras robotisé pour exécuter les coupes osseuses avec une précision millimétrique.",
            "Implantation Sur Mesure : Utilisation de guides de coupe personnalisés créés à partir des images scanner du patient pour un positionnement optimal des implants.",
            "Balance Ligamentaire Informatisée : Mesure précise des tensions ligamentaires pour optimiser l'équilibre de l'articulation prothétique.",
          ],
        },
        {
          subtitle: "Matériaux et Innovations",
          items: [
            "Alliages Métalliques : Généralement en titane ou chrome-cobalt pour les composants fémoraux et tibiaux, offrant résistance et biocompatibilité.",
            "Polyéthylène Hautement Réticulé : Matériau perfectionné pour l'insert tibial, offrant une résistance accrue à l'usure.",
            "Céramique : Utilisée dans certains designs pour réduire la production de débris d'usure.",
            "Revêtements Antibactériens : Innovation récente visant à réduire le risque d'infection prothétique.",
            "Fixation Sans Ciment : Implants à surface poreuse permettant l'ostéointégration directe, particulièrement adaptés aux patients plus jeunes.",
          ],
        },
      ],
    },
    recovery: {
      title: "Récupération et Réhabilitation",
      content: [
        {
          subtitle: "Phase Hospitalière",
          items: [
            "Gestion de la Douleur : Protocole multimodal comprenant analgésiques, cryothérapie et techniques d'anesthésie locale.",
            "Mobilisation Précoce : Mise en charge et mobilisation assistée généralement dès le jour de l'intervention ou le lendemain.",
            "Exercices Initiaux : Programme supervisé par un kinésithérapeute incluant contractions isométriques, flexion/extension du genou et exercices de proprioception.",
            "Éducation du Patient : Formation aux précautions post-opératoires, à l'utilisation des aides à la marche et à la détection des signes de complications.",
          ],
        },
        {
          subtitle: "Rééducation Ambulatoire",
          items: [
            "Programme Progressif : Intensification graduelle des exercices sur 6 à 12 semaines post-opératoires.",
            "Renforcement Musculaire : Focus sur les quadriceps, ischio-jambiers et muscles stabilisateurs de la hanche.",
            "Travail Proprioceptif : Exercices spécifiques pour améliorer l'équilibre et le contrôle neuromusculaire.",
            "Récupération Fonctionnelle : Réapprentissage des activités quotidiennes avec adaptation aux spécificités de la prothèse.",
            "Gestion des Œdèmes : Techniques de drainage et conseils pour limiter le gonflement post-opératoire.",
          ],
        },
        {
          subtitle: "Suivi à Long Terme",
          items: [
            "Consultations Régulières : Évaluation clinique et radiologique à intervalles définis (3 mois, 1 an, puis tous les 2-5 ans).",
            "Maintenance de la Prothèse : Conseils pour maximiser la longévité de l'implant.",
            "Ajustements d'Activité : Recommandations personnalisées concernant le sport et les activités physiques.",
            "Surveillance des Complications Tardives : Vigilance concernant l'usure, le descellement ou l'infection prothétique.",
          ],
        },
      ],
    },
    prevention: {
      title: "Vie avec une Prothèse de Genou",
      items: [
        "Maintenir un poids de forme pour réduire les contraintes sur la prothèse et optimiser sa longévité.",
        "Pratiquer des activités physiques adaptées comme la natation, le vélo ou la marche, en évitant les sports à impact élevé.",
        "Porter des chaussures adaptées offrant un bon amorti et un soutien adéquat.",
        "Éviter les positions prolongées à genoux et les accroupissements profonds qui peuvent augmenter l'usure des composants.",
        "Suivre les recommandations d'antibioprophylaxie lors de certaines procédures médicales ou dentaires pour prévenir les infections hématogènes.",
        "Rester attentif aux signes d'alerte comme une douleur nouvelle, un gonflement persistant ou des bruits anormaux lors des mouvements.",
        "Maintenir une musculature forte autour du genou pour optimiser la stabilité et la fonction de l'articulation prothétique.",
        "Informer systématiquement les professionnels de santé de la présence d'une prothèse, notamment avant tout examen d'imagerie.",
      ],
    },
    results: {
      title: "Résultats et Perspectives",
      content: [
        {
          subtitle: "Bénéfices Attendus",
          items: [
            "Soulagement de la Douleur : Amélioration significative pour plus de 90% des patients dans les activités quotidiennes.",
            "Récupération Fonctionnelle : Restauration d'une amplitude articulaire généralement comprise entre 0° et 120-130° de flexion.",
            "Durabilité des Implants : Taux de survie supérieur à 90% à 15 ans pour les prothèses modernes.",
            "Amélioration de la Qualité de Vie : Impact positif sur l'autonomie, le sommeil et la participation sociale.",
          ],
        },
        {
          subtitle: "Limites et Considérations",
          items: [
            "Sensations Proprioceptives : Malgré les améliorations techniques, le genou prothétique ne reproduit pas parfaitement les sensations naturelles.",
            "Restrictions d'Activité : Certaines activités à fort impact ou impliquant des torsions importantes restent déconseillées.",
            "Durée de Vie Limitée : Possibilité de révision nécessaire après 15-20 ans, particulièrement chez les patients jeunes et actifs.",
            "Résultats Variables : Les facteurs individuels comme l'âge, le poids, les comorbidités et la motivation influencent significativement les résultats.",
          ],
        },
        {
          subtitle: "Innovations et Avenir",
          items: [
            "Prothèses Intelligentes : Développement d'implants équipés de capteurs pour le suivi post-opératoire et l'évaluation de l'usure.",
            "Matériaux Biomimétiques : Recherche sur des matériaux reproduisant plus fidèlement les propriétés mécaniques des tissus naturels.",
            "Médecine Régénérative : Exploration des thérapies cellulaires et de la bio-ingénierie comme alternatives aux prothèses conventionnelles.",
            "Intelligence Artificielle : Utilisation des algorithmes prédictifs pour optimiser la sélection des patients et le positionnement des implants.",
          ],
        },
      ],
    },
  };
};
