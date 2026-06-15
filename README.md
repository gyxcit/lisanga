# Lisanga 🤝

**Lisanga** est une application web bienveillante et sécurisée, conçue pour apporter un soutien psychologique, juridique et pratique aux victimes de violences basées sur le genre (VBG) en Afrique. 

Le mot "Lisanga" signifie "rassemblement" ou "communauté" en Lingala, symbolisant l'union et l'entraide face aux épreuves.

## 🌟 Fonctionnalités

*   **Chat IA Bienveillant** : Un assistant intelligent et empathique (propulsé par Mistral AI) disponible 24/7 pour écouter, conseiller et orienter les victimes de façon 100% anonyme.
*   **Annuaire d'Urgence** : Accès rapide aux numéros d'urgence de la police, de la gendarmerie et des urgences médicales par pays.
*   **Aide Psychologique** : Mise en relation sécurisée avec des professionnels et répertoire d'ONG locales (Croix-Rouge, MSF, Fondation Panzi).
*   **Droits & Démarches** : Un guide complet des lois et procédures pénales par pays africain pour accompagner les victimes dans leurs démarches juridiques.
*   **Bouton Panique** : Un bouton d'urgence permanent (en rouge) permettant de masquer instantanément l'application et de verrouiller l'interface en cas de danger immédiat.
*   **Demandes par email** : Les formulaires de demande de contact (groupes de soutien et aide psychologique) envoient automatiquement les coordonnées laissées par les utilisatrices vers une boîte mail, via **Web3Forms** (gratuit, sans serveur). Le chat reste, lui, totalement anonyme et n'est jamais transmis.

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

3.  **Configurer les variables d'environnement** :
    Copiez le fichier `.env.example` en `.env` à la racine du projet, puis renseignez les deux clés :
    ```env
    # Clé API Mistral AI (chat) — https://console.mistral.ai/
    # ⚠️ PAS de préfixe VITE_ : cette clé reste côté serveur, jamais exposée au navigateur.
    MISTRAL_API_KEY=votre_cle_mistral_ici

    # Clé d'accès Web3Forms (réception des demandes par email) — https://web3forms.com/
    VITE_WEB3FORMS_KEY=votre_cle_web3forms_ici
    ```
    > La clé Web3Forms s'obtient gratuitement : entrez votre email sur [web3forms.com](https://web3forms.com/) pour la recevoir. Elle n'est pas secrète (elle sert uniquement à router les envois vers votre boîte mail).

4.  **Lancer le serveur de développement** :
    ```bash
    # Pour travailler l'interface uniquement (le chat IA ne répondra pas) :
    npm run dev

    # Pour TOUT faire fonctionner localement, y compris le chat IA :
    # (nécessite la CLI Netlify : npm i -g netlify-cli, ou utilisez npx netlify-cli dev)
    npm run dev:netlify
    ```
    > Le chat passe par une fonction serverless (`netlify/functions/chat.js`). En local, seule la commande `netlify dev` la rend disponible sur `/api/chat`. Avec `npm run dev` (Vite seul), l'interface s'affiche mais le chat renverra une erreur de connexion — c'est normal.

## 📩 Réception des demandes par email (Web3Forms)

Les formulaires où une utilisatrice laisse un moyen de contact envoient leurs données par email, sans backend, grâce à [Web3Forms](https://web3forms.com/) :

| Formulaire | Emplacement | Objet du mail reçu |
| --- | --- | --- |
| Inscription groupe (modal) | `RegistrationModal.jsx` | *Nouvelle demande de contact — Groupe de soutien Lisanga* |
| Rejoindre un groupe | `Resources/SupportGroups.jsx` | *Nouvelle demande d'accès — Groupe de soutien Lisanga* |
| Rendez-vous psychologique | `Resources/PsychologicalHelp.jsx` | *Nouvelle demande de rendez-vous — Aide psychologique Lisanga* |

La logique d'envoi est centralisée dans [`src/utils/sendWeb3Form.js`](src/utils/sendWeb3Form.js). Tous les formulaires partagent la clé `VITE_WEB3FORMS_KEY` et envoient vers la même boîte mail.

> ⚠️ **Le chat (`MistralChatInterface.jsx`) est volontairement exclu** : l'application promet un anonymat total, les conversations ne sont donc jamais envoyées par email.

**Bon à savoir :**
*   Service **100 % gratuit et illimité**, sans carte bancaire.
*   Web3Forms refuse les envois côté serveur sur l'offre gratuite : c'est sans impact, l'application envoie toujours depuis le navigateur.
*   Pour recevoir les demandes sur **une autre adresse**, générez une nouvelle clé Web3Forms avec cet email et remplacez `VITE_WEB3FORMS_KEY`.
*   L'ajout de destinataires en copie (`ccemail`) est une fonctionnalité payante (PRO) ; une règle de transfert Gmail fait la même chose gratuitement.

## 🔒 Sécurité

L'accès à l'IA et l'application sont protégés sur plusieurs niveaux :

*   **Clé Mistral jamais exposée** : l'appel à Mistral passe par une fonction serverless ([`netlify/functions/chat.js`](netlify/functions/chat.js)). La clé `MISTRAL_API_KEY` reste côté serveur — impossible de la voler depuis le navigateur pour abuser de l'IA aux frais du projet.
*   **Garde-fous de l'IA** : le prompt système (côté serveur, non modifiable) cadre le rôle de Lisanga. Elle refuse poliment les usages détournés (assistant généraliste, jailbreak, changement de rôle) et ne révèle jamais ses instructions.
*   **Limites anti-abus** : la fonction limite le débit par IP (rate limiting), borne la longueur des messages et la taille de l'historique. Le champ de saisie est également plafonné côté client.
*   **En-têtes de sécurité HTTP** : définis dans `netlify.toml` (CSP, anti-clickjacking `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, HSTS…).

> ℹ️ Le limiteur de débit est en mémoire (best-effort par instance). Pour un blocage strict à grande échelle, brancher un store partagé (Netlify Blobs, Upstash Redis…).

## 🌍 Déploiement

Ce projet est optimisé pour être déployé très facilement sur **Netlify**. Le fichier `netlify.toml` est déjà configuré (fonctions + en-têtes de sécurité).

Lors du déploiement, ajoutez les variables d'environnement dans *Site settings → Environment variables*, puis redéployez :

| Variable | Rôle | Exposée au navigateur ? |
| --- | --- | --- |
| `MISTRAL_API_KEY` | Clé du chat IA (proxy serverless) | ❌ Non (secrète) |
| `VITE_WEB3FORMS_KEY` | Réception des demandes par email | ✅ Oui (non secrète) |

> ⚠️ Si vous migrez depuis une ancienne version : renommez `VITE_MISTRAL_API_KEY` en `MISTRAL_API_KEY` (sans le préfixe `VITE_`), sinon la clé resterait exposée publiquement.

---

*L'application a été développée avec cœur pour apporter un réel soutien technologique à une cause humaine vitale.* ❤️
