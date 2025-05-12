export const getSpineIntroduction = () => {
  return {
    title: "Chirurgie du Rachis",
    subtitle: "Soins Spécialisés de la Colonne Vertébrale",
    introduction: {
      beginning:
        "La colonne vertébrale est une structure complexe et fondamentale du corps humain, composée de",
      emphasis:
        "vertèbres empilées, séparées par des disques intervertébraux qui agissent comme des amortisseurs naturels",
      following:
        "protégeant la moelle épinière et les racines nerveuses tout en permettant flexibilité et mobilité du tronc et du cou.",
    },
    details: [
      "Les pathologies du rachis, qu'elles soient dégénératives (hernies discales, canal lombaire étroit), traumatiques ou déformatives, peuvent affecter significativement la qualité de vie. Ces affections peuvent causer des douleurs importantes dans le dos ou irradiant dans les membres, voire des déficits neurologiques. La chirurgie du rachis a considérablement évolué ces dernières décennies, offrant des solutions adaptées à chaque pathologie lorsque les traitements médicaux ne sont plus efficaces.",
    ],
  };
};

export const getSpineDownloads = () => {
  return {
    title: "Fiches d'Information",
    subtitle:
      "Téléchargez nos fiches d'information préopératoires sur les principales interventions du rachis et les soins associés.",
    downloads: [
      {
        title: "Information Préopératoire - Hernie Discale Lombaire",
        description:
          "Document complet expliquant la procédure de discectomie lombaire, les risques potentiels et les résultats attendus.",
        fileName: "hernie-discale-lombaire.pdf",
      },
      {
        title: "Information Préopératoire - Hernie Discale Cervicale",
        description:
          "Document détaillant l'intervention pour hernie discale cervicale, ses indications, risques et bénéfices.",
        fileName: "hernie-discale-cervicale.pdf",
      },
      {
        title: "Information Préopératoire - Canal Lombaire Étroit",
        description:
          "Document expliquant la décompression rachidienne pour canal lombaire étroit, ses risques et résultats attendus.",
        fileName: "canal-lombaire-etroit.pdf",
      },
    ],
  };
};

export const getSpineData = () => {
  return {
    overview: {
      title: "De quoi s'agit-il ?",
      items: [
        "La chirurgie du rachis comprend un ensemble de procédures visant à traiter différentes pathologies de la colonne vertébrale qui comprennent principalement :",
        "La hernie discale lombaire : lorsque le noyau d'un disque intervertébral s'échappe à travers une déchirure de l'anneau fibreux et comprime une racine nerveuse, provoquant une douleur dans la jambe (sciatique ou cruralgie).",
        "La hernie discale cervicale : similaire à la hernie lombaire mais au niveau du cou, provoquant une névralgie cervico-brachiale avec douleur irradiant dans le bras.",
        "Le canal lombaire étroit : un rétrécissement du canal rachidien qui comprime les racines nerveuses, entraînant des difficultés à la marche et des douleurs dans les jambes qui s'intensifient à l'effort et s'améliorent au repos.",
        "Les causes des atteintes rachidiennes sont principalement la dégénérescence liée à l'âge (arthrose), mais aussi les traumatismes, l'usure professionnelle, et plus rarement des maladies congénitales.",
        "L'évolution en l'absence de traitement est généralement la persistance ou l'aggravation des douleurs et des symptômes neurologiques.",
        "Lorsque le traitement médical (repos, médicaments, kinésithérapie, infiltrations) n'est plus efficace après plusieurs semaines, différentes options chirurgicales peuvent être envisagées selon la pathologie concernée.",
      ],
    },
    disclaimer: {
      title: "Considérations importantes",
      items: [
        "Les informations présentées sur cette page sont fournies à titre informatif et ne peuvent remplacer une consultation médicale personnalisée.",
        "En accord avec votre chirurgien et selon la balance bénéfice-risque, il vous sera proposé une intervention adaptée à votre pathologie spécifique. Les alternatives à cette intervention vous seront expliquées en détail par le chirurgien.",
        "Il va de soi que votre chirurgien pourra, le cas échéant et en fonction des découvertes peropératoires ou d'une difficulté rencontrée, procéder à une autre technique jugée par lui plus profitable à votre cas spécifique.",
      ],
    },
    diagnosis: {
      title: "Avant le traitement",
      content: [
        {
          subtitle: "Imagerie et examens",
          items: [
            "Un bilan radiographique complet est réalisé incluant des radiographies standard, une IRM et parfois un scanner ou d'autres examens spécifiques permettant de confirmer le diagnostic et de planifier précisément la chirurgie.",
            "Un bilan préopératoire standard (prise de sang, électrocardiogramme) sera effectué pour évaluer votre état général et écarter toute contre-indication à la chirurgie.",
          ],
        },
      ],
    },
    treatments: {
      title: "Quels traitements ?",
      content: [
        {
          subtitle: "Hernie discale lombaire - Discectomie",
          items: [
            "L'objectif est de supprimer la compression du nerf en retirant la hernie discale.",
            "La chirurgie est réalisée sous anesthésie générale et dure entre 1 et 2 heures.",
            "Une incision de 2 à 5 cm est pratiquée dans le dos, au niveau de la hernie.",
            "Après écartement des muscles paravertébraux, une petite fenêtre osseuse est créée pour accéder au canal rachidien.",
            "La hernie discale est retirée, en préservant au maximum le reste du disque.",
            "Des techniques mini-invasives avec microscope ou endoscope peuvent être utilisées, réduisant la taille de l'incision et la durée d'hospitalisation.",
            "Un drain peut être mis en place et retiré après 1 à 2 jours.",
          ],
        },
        {
          subtitle: "Hernie discale cervicale",
          items: [
            "L'intervention se déroule sous anesthésie générale.",
            "La voie d'abord est classiquement antéro-latérale (par l'avant du cou), permettant d'accéder au disque sans manipuler la moelle épinière.",
            "Après ablation du disque endommagé, la hernie est retirée, souvent sous microscope.",
            "L'intervention est généralement complétée par une arthrodèse (fusion des vertèbres) pour stabiliser la zone, ou parfois par la mise en place d'une prothèse discale.",
            "La voie postérieure (par l'arrière du cou) est rarement utilisée en raison des risques neurologiques plus élevés.",
          ],
        },
        {
          subtitle: "Canal lombaire étroit - Laminectomie/Recalibrage",
          items: [
            "Le but est d'élargir le canal rachidien pour libérer les racines nerveuses comprimées.",
            "L'intervention est réalisée sous anesthésie générale.",
            "Une incision médiane est pratiquée dans le dos, de longueur variable selon le nombre de niveaux à traiter.",
            "Les structures osseuses et ligamentaires responsables de la compression (lames vertébrales, ligaments, excroissances osseuses) sont partiellement retirées.",
            "En cas de glissement vertébral (spondylolisthésis) ou d'instabilité préexistante, une stabilisation par arthrodèse peut être associée.",
            "Un drain est généralement mis en place et retiré après 1 à 3 jours.",
          ],
        },
        {
          subtitle: "Arthrodèse (fusion vertébrale)",
          items: [
            "Réalisée sous anesthésie générale, cette intervention vise à fusionner deux ou plusieurs vertèbres lorsqu'une instabilité est présente.",
            "Après exposition des vertèbres concernées, le disque intervertébral dégénéré est retiré et remplacé par une cage intersomatique contenant un substitut osseux.",
            "Des vis pédiculaires et des tiges sont placées pour stabiliser les vertèbres pendant la fusion osseuse.",
            "Cette technique peut être associée à une décompression dans les cas de canal lombaire étroit ou de hernie discale avec instabilité.",
          ],
        },
      ],
    },
    recovery: {
      title: "Et après ?",
      content: [
        {
          subtitle: "Premiers jours après l'intervention",
          items: [
            "Un drain peut être mis en place et sera retiré après 1 à 3 jours selon l'intervention.",
            "La verticalisation et la marche sont autorisées dès le lendemain ou le surlendemain selon le type d'intervention, sauf avis contraire du chirurgien.",
            "Des antalgiques adaptés vous seront prescrits pour contrôler la douleur post-opératoire.",
            "Afin d'éviter les phlébites, un traitement anticoagulant préventif est généralement prescrit pendant plusieurs semaines selon le type d'intervention. Des bas de contention peuvent être utilisés également.",
          ],
        },
        {
          subtitle: "Retour à domicile et suivi",
          items: [
            "Après quelques jours d'hospitalisation (variable selon l'intervention), votre chirurgien autorisera votre sortie avec les ordonnances de soins nécessaires (pansement, antalgiques, kinésithérapie).",
            "Vous serez revu en consultation avec des radiographies de contrôle selon un calendrier défini par votre chirurgien.",
            "La rééducation peut être nécessaire et sera prescrite en fonction du type d'intervention et de votre situation particulière.",
          ],
        },
        {
          subtitle: "Reprise des activités et retour à l'autonomie",
          items: [
            "Les délais de reprise des activités sont variables selon le type d'intervention :",
            "Pour une discectomie simple : reprise de la position assise progressive après 2 semaines, reprise du travail après 4 à 8 semaines selon le type d'activité professionnelle.",
            "Pour une laminectomie : reprise des activités légères après 2 à 4 semaines, activités plus exigeantes après 6 à 12 semaines.",
            "Pour une arthrodèse : port d'un corset pendant 2 à 3 mois possible, reprise d'activités légères après 6 semaines, activités plus exigeantes après 3 à 6 mois.",
            "La conduite automobile peut généralement être reprise entre 2 et 6 semaines selon le type d'intervention.",
            "Ces délais sont indicatifs et seront précisés par votre chirurgien en fonction de votre situation particulière.",
          ],
        },
      ],
    },
    complications: {
      title: "Complications Potentielles",
      content: [
        {
          subtitle: "Les plus fréquentes",
          items: [
            "La douleur post-opératoire est normale et généralement bien contrôlée par les médicaments prescrits. Une persistance de certaines douleurs pendant quelques semaines est fréquente et ne doit pas inquiéter.",
            "L'hématome postopératoire est possible et peut nécessiter une évacuation chirurgicale s'il est important ou compressif. Dans la chirurgie cervicale, un hématome volumineux peut être dangereux en comprimant les voies respiratoires.",
            "La phlébite peut survenir malgré le traitement anticoagulant préventif. Elle peut, dans des cas rares, se compliquer d'une embolie pulmonaire.",
            "Les difficultés à uriner dans les premiers jours sont classiques, surtout chez l'homme, et peuvent nécessiter un sondage temporaire.",
            "Dans la chirurgie cervicale, des troubles transitoires de la déglutition ou de la voix peuvent survenir par irritation de l'œsophage ou des nerfs.",
          ],
        },
        {
          subtitle: "Plus rarement",
          items: [
            "L'infection du site opératoire est rare (environ 2/1000) mais sérieuse. Elle peut être superficielle et se traiter avec des soins locaux, ou profonde au niveau de l'os et du disque (spondylodiscite), nécessitant un traitement antibiotique prolongé.",
            "Les complications neurologiques : elles sont rares mais toujours possibles. Il peut s'agir d'une simple diminution de force ou de sensibilité dans les membres, mais dans des cas exceptionnels (<1/1000), des déficits plus graves peuvent survenir (syndrome de la queue de cheval avec paralysie des sphincters ou, très exceptionnellement, une paralysie des membres).",
            "La brèche durale (ouverture accidentelle de l'enveloppe contenant le liquide céphalo-rachidien) peut survenir surtout lors des réopérations. Elle est généralement sans conséquence mais peut parfois entraîner des maux de tête ou, si le liquide s'écoule par la cicatrice, un risque d'infection méningée nécessitant une réintervention urgente.",
            "La récidive herniaire est possible dans 5-10% des cas après discectomie, parfois très précocement. Elle ne nécessite pas toujours une nouvelle opération.",
            "Pour les arthrodèses, une non-fusion des vertèbres ou un déplacement du matériel d'ostéosynthèse peut survenir, particulièrement chez les fumeurs.",
            "L'instabilité rachidienne après décompression extensive peut nécessiter une intervention complémentaire de stabilisation.",
            "L'algodystrophie (syndrome douloureux régional complexe) est une réaction inflammatoire excessive et imprévisible pouvant entraîner des douleurs persistantes.",
            "Des complications exceptionnelles ont été décrites : lésion des gros vaisseaux, des organes voisins, ou troubles visuels liés à l'installation sur la table d'opération.",
            "La liste n'est pas exhaustive et une complication particulièrement exceptionnelle peut survenir, liée à l'état local ou à une variabilité technique.",
          ],
        },
      ],
    },
    results: {
      title: "Les résultats attendus",
      content: [
        {
          subtitle: "Résultats et Perspectives",
          items: [
            "Les résultats de la chirurgie rachidienne varient selon la pathologie traitée et le type d'intervention :",
            "Pour la hernie discale lombaire : soulagement rapide des douleurs sciatiques ou crurales dans les jambes (80-90% des cas) dès le réveil, avec parfois persistance de douleurs lombaires modérées, surtout si vous aviez des douleurs de dos anciennes.",
            "Pour la hernie discale cervicale : diminution des douleurs dans le bras dans 80-90% des cas, avec des résultats plus aléatoires sur les douleurs cervicales.",
            "Pour le canal lombaire étroit : amélioration progressive du périmètre de marche sans arrêt (80-90% des cas), mais résultats moins prévisibles sur les douleurs lombaires.",
            "Les troubles neurologiques (paralysies, troubles sensitifs) peuvent mettre plusieurs semaines ou mois à récupérer, et ne récupèrent parfois qu'incomplètement.",
            "La reprise des activités quotidiennes est progressive, avec un retour à la conduite automobile généralement possible entre 15 jours et 1 mois selon l'intervention.",
            "La reprise du travail se fait habituellement entre 1 et 3 mois selon la pénibilité du poste et le type d'intervention.",
            "Les sports doux comme la natation ou le vélo peuvent être repris après 1 mois, tandis que les sports plus exigeants nécessitent souvent un délai de 3 mois.",
            "En aucun cas, on ne peut assurer une guérison définitive. Des récidives ou l'apparition de nouvelles lésions dégénératives sont toujours possibles.",
          ],
        },
      ],
    },
    conclusion: {
      title: "En résumé",
      content: [
        {
          subtitle: "Synthèse",
          items: [
            "La chirurgie du rachis offre des solutions efficaces pour les pathologies vertébrales invalidantes lorsque les traitements conservateurs ont échoué.",
            "Chaque intervention est adaptée à la pathologie spécifique et à la situation particulière du patient.",
            "Les techniques modernes, souvent mini-invasives, permettent de réduire les complications et d'accélérer la récupération.",
            "Une participation active du patient au processus de récupération (respect des consignes post-opératoires, kinésithérapie, hygiène de vie) est essentielle pour optimiser les résultats.",
            "Un suivi régulier est nécessaire pour s'assurer de la bonne évolution et détecter précocement d'éventuelles complications.",
          ],
        },
      ],
    },
  };
};
