# Lisanga 🤝

**Lisanga** est une application web bienveillante et sécurisée, conçue pour apporter un soutien psychologique, juridique et pratique aux victimes de violences basées sur le genre (VBG) en Afrique. 

Le mot "Lisanga" signifie "rassemblement" ou "communauté" en Lingala, symbolisant l'union et l'entraide face aux épreuves.

## 🌟 Fonctionnalités

*   **Chat IA Bienveillant** : Un assistant intelligent et empathique (propulsé par Mistral AI) disponible 24/7 pour écouter, conseiller et orienter les victimes de façon 100% anonyme.
*   **Annuaire d'Urgence** : Accès rapide aux numéros d'urgence de la police, de la gendarmerie et des urgences médicales par pays.
*   **Aide Psychologique** : Mise en relation sécurisée avec des professionnels et répertoire d'ONG locales (Croix-Rouge, MSF, Fondation Panzi).
*   **Droits & Démarches** : Un guide complet des lois et procédures pénales par pays africain pour accompagner les victimes dans leurs démarches juridiques.
*   **Bouton Panique** : Un bouton d'urgence permanent (en rouge) permettant de masquer instantanément l'application et de verrouiller l'interface en cas de danger immédiat.

## 🛠 Technologies utilisées

*   **Frontend** : React.js (via Vite)
*   **Styling** : CSS natif avec des variables CSS globales pour une maintenance facile.
*   **Icônes** : Lucide React
*   **Intelligence Artificielle** : API Mistral AI (`mistral-small-latest`)

## 🚀 Installation en local

1.  **Cloner le dépôt** :
    ```bash
    git clone https://github.com/votre-nom/lisanga.git
    cd lisanga
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

3.  **Configurer la variable d'environnement** :
    Créez un fichier `.env` à la racine du projet et ajoutez votre clé API Mistral :
    ```env
    VITE_MISTRAL_API_KEY=votre_cle_secrete_ici
    ```

4.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```

## 🌍 Déploiement

Ce projet est optimisé pour être déployé très facilement sur **Netlify**. Le fichier `netlify.toml` est déjà configuré. 
Lors du déploiement, assurez-vous de bien ajouter la variable d'environnement `VITE_MISTRAL_API_KEY` dans les paramètres de votre hébergeur (Netlify, Vercel, etc.).

---

*L'application a été développée avec cœur pour apporter un réel soutien technologique à une cause humaine vitale.* ❤️
