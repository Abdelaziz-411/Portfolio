import eventManager from "../Assets/img_projects/event-manager.png";
import configurateur from "../Assets/img_projects/configurateur.png";
import marronWeb from "../Assets/img_projects/marronWeb.png";
import accueilMobile from "../Assets/img_projects/accueilMobile.jpg";
import usersMobile from "../Assets/img_projects/usersMobile.jpg";
import workflowN8n from "../Assets/img_stage/n8n.png";
import gestionTickets from "../Assets/img_stage/GestionDeTickets.png";
import gestionFactures from "../Assets/img_stage/Gestion de factures.png";

export const projects = [
  {
    id: "stage-n8n",
    title: "Automatisation des Workflows (n8n)",
    description:
      "Projet realise durant le stage de 2eme annee chez Nanika Le Mans. Mise en place de workflows d'automatisation avec n8n pour orchestrer des taches recurrentes, connecter des APIs REST et exploiter des webhooks. L'objectif etait de reduire les manipulations manuelles, fiabiliser les traitements et assurer un meilleur suivi des executions.",
    imgPath: workflowN8n,
    skills: [
      "4.1 : Analyser les objectifs et les modalites d'organisation d'un projet",
      "4.3 : Evaluer les indicateurs de suivi d'un projet et analyser les ecarts",
      "1.2 : Exploiter des referentiels, normes et standards adoptes par le prestataire informatique",
      "2.1 : Collecter, suivre et orienter des demandes",
      "5.1 : Realiser les tests d'integration et d'acceptation d'un service",
      "5.2 : Deployer un service"
    ]
  },
  {
    id: "stage-ticket-manager",
    title: "Gestion de Tickets",
    description:
      "Application web developpee durant le stage de 2eme annee pour centraliser les demandes de support client. Le projet permet de creer et suivre des tickets, gerer les statuts, historiser les echanges et structurer le traitement des demandes. Technologies utilisees : PHP, MySQL, JavaScript, Bootstrap et GitHub.",
    imgPath: gestionTickets,
    skills: [
      "4.1 : Analyser les objectifs et les modalites d'organisation d'un projet",
      "4.2 : Planifier les activites",
      "2.1 : Collecter, suivre et orienter des demandes",
      "2.2 : Traiter des demandes concernant les services reseau et systeme, applicatifs",
      "2.3 : Traiter des demandes concernant les applications",
      "3.3 : Participer a l'evolution d'un site Web exploitant les donnees de l'organisation",
      "5.1 : Realiser les tests d'integration et d'acceptation d'un service",
      "5.2 : Deployer un service"
    ]
  },
  {
    id: "stage-invoice-manager",
    title: "Gestionnaire de Factures",
    description:
      "Application web realisee durant le stage de 2eme annee pour creer, gerer et exporter des factures au format PDF. Le projet comprend la gestion de la TVA, des statuts de paiement, des totaux automatiques et la generation de documents professionnels. Technologies utilisees : PHP, MySQL, JavaScript, Bootstrap et Dompdf.",
    imgPath: gestionFactures,
    skills: [
      "4.1 : Analyser les objectifs et les modalites d'organisation d'un projet",
      "2.3 : Traiter des demandes concernant les applications",
      "3.3 : Participer a l'evolution d'un site Web exploitant les donnees de l'organisation",
      "5.1 : Realiser les tests d'integration et d'acceptation d'un service",
      "5.2 : Deployer un service",
      "5.3 : Accompagner les utilisateurs dans la mise en place d'un service",
      "1.5 : Gerer des sauvegardes"
    ]
  },
  {
    id: "event-manager",
    title: "Gestion d'Événements",
    description: "Une plateforme web de gestion d'événements développée avec PHP et MySQL. Le site permet aux utilisateurs de créer, gérer et s'inscrire à des événements. Fonctionnalités principales : création d'événements, système d'inscription, gestion des participants, et interface d'administration. Le projet met en œuvre une architecture MVC et utilise une base de données relationnelle pour stocker les données des événements et des utilisateurs.",
    imgPath: eventManager,
    ghLink: "https://gitlab.bts-malraux72.net/sts11/ap-slam/g3webasso.git",
    demoLink: "https://web.bts-malraux72.net/~abdelaziz.khalifa/webasso/",
    skills: [
      "B1.2.2 : Traiter les demandes concernant les applications",
      "B1.3.3 : Participer à l’évolution d’un site Web exploitant les données de l’organisation",
      "B1.4.1 : Analyser les objectifs et les modalités d’organisation d'un projet",
      "B2.1 : Modéliser une solution applicative",
      "B2.2 : Réaliser des composants logiciels",
      "B2.2 : Exploiter les technologies Web pour mettre en œuvre les échanges entre applications, y compris de mobilité",
      "B2.2 : Utiliser des composants d'accès aux données",
      "B2.3 : Concevoir ou adapter une base de données",
      "B2.3 : Développer des fonctionnalités applicatives au sein d'un système des gestion de base de données (relationnel ou non)"
    ]
  },
  {
    id: "configurateur",
    title: "Configurateur de Véhicules Aménagés",
    description: "Application web permettant de configurer des véhicules aménagés avec différents kits et options. Fonctionnalités : sélection de véhicules, configuration avec kits d'aménagement, ajout d'options, calcul automatique des prix, génération de devis PDF, interface d'administration sécurisée. Réalisé en PHP/MySQL avec gestion des droits et sécurité.",
    imgPath: configurateur,
    ghLink: "https://github.com/Abdelaziz-411/ConfigurateurDevis",
    demoLink: "http://labicoque.rf.gd/",
    skills: [
      "B1.1.3 : Mettre en place et vérifier des niveaux d’habilitation associés à un service",
      "B2.1 : Analyser un besoin exprimé et son contexte juridique",
      "B2.2 : Réaliser des composants logiciels",
      "B2.3 : Concevoir ou adapter une base de données",
      "B2.3 : Développer des fonctionnalités applicatives au sein d'un système des gestion de base de données (relationnel ou non)",
      "B3.1 : Recenser les traitements sur les données à caractère personnel au sein de l’organisation",
      "B3.3 : Gérer les accès et les privilèges appropriés",
      "B3.3 : Vérifier l’efficacité de la protection"
    ]
  },
  {
    id: "marron-web",
    title: "Marron Web",
    description:
      "Objectif du projet : développer une application web fonctionnelle pour la gestion associative, permettant de consulter les informations d’un utilisateur via l’API, d’afficher les événements disponibles et de s’inscrire directement depuis la page. Réalisée en JavaScript moderne (ES modules) avec HTML5, CSS3 et Bootstrap 5, l’application consomme une API REST (Symfony / API Platform). La logique réseau (GET/POST/DELETE, gestion des IRIs et du format Hydra) est centralisée dans data.js, l’orchestration et le binding DOM dans main.js, et le rendu dynamique dans vue.js. Ce projet a été mené dans le cadre des Ateliers Professionnels (AP) du BTS SIO pour proposer des outils simples et accessibles aux associations. Cette première phase se concentre sur le front-end ; des évolutions (API avancée, application mobile) sont prévues dans des lots ultérieurs.",
    imgPath: marronWeb,
    ghLink: "https://gitlab.bts-malraux72.net/sts2/ap-slam/equipe-marron/marron-web",
    demoLink: "https://web.bts-malraux72.net/~abdelaziz.khalifa/AP_SLAM/marron-web/",
    skills: [
      "3.1 : Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
      "3.3 : Participer à l’évolution d’un site Web exploitant les données de l’organisation",
      "4.1 : Analyser les objectifs et les modalités d’organisation d’un projet",
      "4.2 : Planifier les activités",
      "4.3 : Évaluer les indicateurs de suivi d’un projet et analyser les écarts",
      "5.1 : Réaliser les tests d’intégration et d’acceptation d’un service",
      "5.2 : Déployer un service",
      "6.1 : Mettre en place son environnement d’apprentissage personnel"
    ]
  },
  {
    id: "marron-mobile",
    title: "Marron Mobile",
    description:
      "Marron Mobile est une application Android native conçue pour offrir une vue d’ensemble rapide des informations clés d’une association : santé financière, événements et membres. Développée en Kotlin avec une architecture Single-Activity (Fragments), l’interface s’appuie sur Material Design 3 (BottomAppBar avec encoche, FloatingActionButton, CoordinatorLayout), ConstraintLayout pour des écrans responsives et RecyclerView pour des listes performantes. La persistance est assurée en local via SQLite (SQLiteOpenHelper) avec des opérations CRUD sur les adhérents, les événements et le solde. Le tableau de bord dynamique agrège les données (solde actuel, dernier événement et inscrits, nombre total d’adhérents). Ce projet met en œuvre une conception soignée, une navigation moderne et une gestion robuste des données, dans Android Studio avec Gradle.",
    imgPath: accueilMobile,
    demoImgPath: usersMobile,
    imgCaption: "Page d'accueil",
    demoImgCaption: "Page utilisateurs",
    ghLink: "https://gitlab.bts-malraux72.net/sts2/ap-slam/equipe-marron/marron-mobile/-/tree/dev?ref_type=heads",
    demoLink: "https://web.bts-malraux72.net/~abdelaziz.khalifa/AP_SLAM/marron-mobile/",
    skills: [
      "2.2 : Réaliser des composants logiciels",
      "2.3 : Exploiter les fonctionnalités d’un environnement de développement et de test",
      "2.3 : Réaliser, analyser et mettre à jour les informations sur une version d’une solution applicative",
      "2.3 : Elaborer et réaliser les tests des éléments mis à jour",
      "4.1 : Analyser les objectifs et les modalités d’organisation d’un projet",
      "4.2 : Planifier les activités",
      "4.3 : Évaluer les indicateurs de suivi d’un projet et analyser les écarts",
      "5.1 : Réaliser les tests d’intégration et d’acceptation d’un service"
    ]
  }
];
