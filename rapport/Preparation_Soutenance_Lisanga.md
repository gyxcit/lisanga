# 🎤 Guide de préparation à la soutenance — Lisanga
### Document destiné à présenter et défendre le projet, même sans bagage technique

---

## Comment utiliser ce document

Ce guide a un seul but : te permettre de **comprendre Lisanga assez bien pour en parler avec assurance**, et de répondre à n'importe quelle question, de la plus simple à la plus pointue.

Il est organisé en 5 parties :
1. **Le projet en 1 minute** — ce que tu dois pouvoir dire les yeux fermés.
2. **Le dictionnaire des mots compliqués** — chaque terme technique expliqué avec une image simple.
3. **L'histoire du projet** — pour raconter, pas réciter.
4. **Questions / Réponses** — classées du plus facile au plus difficile, + les questions pièges.
5. **Anti-sèche finale** — les phrases à retenir, et ce qu'il ne faut surtout pas dire.

> 💡 **Conseil d'or :** si on te pose une question dont tu ne connais pas la réponse, ne paniques pas et n'invente pas. Dis : *« C'est un point que nous avons identifié, voici comment nous l'aborderions… »* ou *« Je préfère être honnête, je n'ai pas le détail technique exact, mais le principe est le suivant… »*. **L'honnêteté impressionne plus qu'un mensonge mal assuré.** (C'est d'ailleurs un principe du projet lui-même !)

---

## Partie 1 — Le projet en 1 minute

**Si on te demande « C'est quoi Lisanga ? », tu réponds :**

> « Lisanga est une application web qui vient en aide aux femmes victimes de violences en Afrique. Le mot veut dire "communauté" en lingala. L'idée, c'est d'offrir un **premier refuge** : un espace anonyme et sécurisé où une femme peut, à toute heure, **parler à une intelligence artificielle bienveillante**, **trouver les numéros d'urgence de son pays**, **connaître ses droits**, et **être mise en relation avec des associations**. Il y a même un **bouton panique** qui cache l'application instantanément en cas de danger. Tout ça est **gratuit** et pensé d'abord pour **protéger l'anonymat et la sécurité** de l'utilisatrice. »

**Les 5 fonctions à retenir (compte-les sur tes doigts) :**
1. 💬 Le **chat** avec une IA qui écoute
2. 📞 L'**annuaire d'urgence** par pays
3. ⚖️ Les **droits et démarches**
4. 🤝 La **mise en relation** avec des associations / un soutien psychologique
5. 🆘 Le **bouton panique**

**Les 3 valeurs à retenir :**
- **Anonymat** (les conversations ne sont jamais enregistrées)
- **Sécurité** (on protège l'utilisatrice ET l'application)
- **Gratuité** (pour que ça puisse durer)

---

## Partie 2 — Le dictionnaire des mots compliqués

Voici chaque terme technique du rapport, expliqué comme à un enfant de 12 ans. **Apprends les images, pas les définitions.**

### Application web
Un logiciel qui fonctionne dans un **navigateur** (Chrome, Safari…), sans rien installer. Comme YouTube ou Gmail : tu vas sur un site, et ça marche.

### React
C'est l'**outil de construction** qu'on a utilisé pour fabriquer l'interface (les écrans, les boutons). 
🧱 *Image :* React, ce sont des **briques Lego**. Au lieu de tout sculpter à la main, on assemble des morceaux réutilisables (un bouton, un formulaire…).

### Composant
Un **morceau réutilisable** de l'interface. Le bouton panique est un composant, le chat en est un autre.
🧱 *Image :* une seule brique Lego dans la construction.

### Vite
L'outil qui **assemble** tout notre code et le rend rapide. 
🏭 *Image :* l'**usine** qui prend toutes les briques et en fait un produit fini, prêt à livrer.

### API
Une façon pour deux logiciels de **se parler**. 
🍽️ *Image :* un **serveur de restaurant**. Tu ne vas pas en cuisine ; tu passes commande au serveur (l'API), qui revient avec le plat. Nous, on « commande » des réponses à l'IA via son API.

### Intelligence Artificielle (IA) / LLM
Un programme entraîné sur d'énormes quantités de textes, capable de **comprendre et de produire du langage**. On utilise **Mistral**, une IA française. 
🧠 *Image :* un **interlocuteur très cultivé** qui a énormément lu, et qui peut discuter de presque tout — mais qu'il faut **bien cadrer**.

### Prompt (ou « prompt système »)
Les **instructions secrètes** qu'on donne à l'IA pour définir **sa personnalité et ses règles**. 
🎭 *Image :* le **scénario donné à un acteur** avant qu'il entre en scène. On dit à l'IA : « Tu es Lisanga, douce, à l'écoute, tu ne mens jamais, tu restes dans ton rôle. »

### Serverless (« sans serveur »)
Du code qui s'exécute **à la demande**, sur l'ordinateur de l'hébergeur, sans qu'on ait à gérer une machine allumée en permanence. 
💡 *Image :* une **lampe à détecteur de mouvement**. Elle ne reste pas allumée tout le temps ; elle s'allume **seulement quand on en a besoin**, puis s'éteint. On ne paie que ce qu'on utilise.

### Proxy
Un **intermédiaire** par lequel passe une demande. 
🛡️ *Image :* un **gardien à l'entrée**. Au lieu de laisser le visiteur (le navigateur) entrer directement dans le coffre-fort, le gardien (le proxy) prend le message, va chercher ce qu'il faut, et revient. Le visiteur ne voit jamais le contenu du coffre.

### Clé d'API (la clé secrète)
Un **mot de passe** qui permet d'utiliser un service payant comme l'IA. 
🔑 *Image :* la **clé de ta maison**. Si tu la laisses sous le paillasson (dans le code public), n'importe qui peut entrer et **dépenser à ta place**. Il faut la garder **cachée**.

### JAMstack
Le **style d'architecture** moderne qu'on a choisi : une interface livrée en fichiers tout prêts + des petits services à la demande. 
📦 *Image :* des **plats préparés livrés rapidement**, plutôt qu'un grand restaurant à faire tourner en permanence. Plus rapide, moins cher, plus sûr.

### Hébergeur / Netlify
L'entreprise qui **met le site en ligne** et le rend accessible à tous. 
🏠 *Image :* le **terrain et l'adresse** où ta maison (le site) est construite, pour que les gens puissent venir.

### Déploiement continu
Chaque fois qu'on améliore le code, le site **se met à jour automatiquement** en ligne. 
🔄 *Image :* un magasin dont la **vitrine se réactualise toute seule** dès qu'on change un produit en réserve.

### En-têtes de sécurité (CSP, etc.)
Des **règles de protection** qu'on active sur le site pour bloquer les attaques courantes. 
🚧 *Image :* les **panneaux et barrières de sécurité** d'un bâtiment : « interdit d'entrer par ici », « pas de copie de la clé », etc.

### Rate limiting (limitation de débit)
Empêcher quelqu'un d'**envoyer trop de messages d'un coup** pour abuser du système. 
🚦 *Image :* un **videur de boîte de nuit** qui ne laisse entrer qu'un certain nombre de personnes à la fois.

### Anonymat / « pas de base de données »
On n'a **aucun endroit** où les conversations sont stockées. 
🗑️ *Image :* une conversation qui s'efface au fur et à mesure, comme des mots écrits **sur du sable** que la vague emporte. Comme rien n'est gardé, rien ne peut fuiter.

### Web3Forms
Le service gratuit qui **transforme un formulaire en e-mail**. Quand une femme laisse son contact pour une association, ça arrive dans une boîte mail, sans qu'on ait besoin de serveur. 
📬 *Image :* une **boîte aux lettres automatique**.

---

## Partie 3 — L'histoire du projet (pour raconter, pas réciter)

Un bon orateur **raconte une histoire**. Voici la trame :

1. **Le constat.** Beaucoup de femmes victimes de violences se taisent — par honte, par peur, par manque d'information. Le silence aggrave la souffrance. On appelle ça « le cercle de l'isolement ».
2. **L'idée.** Le téléphone est l'objet le plus intime et le plus répandu. Et s'il devenait un **premier refuge** ? Discret, disponible jour et nuit, anonyme.
3. **La construction.** On a bâti l'application module par module : d'abord l'interface, puis les ressources (numéros, droits), puis l'IA, puis la mise en relation par e-mail.
4. **Le déclic sécurité.** En cours de route, on a réalisé un **vrai problème** : la clé secrète de l'IA était visible dans le code public — n'importe qui pouvait la voler et l'utiliser à nos frais. On a donc **repensé l'architecture** pour la cacher derrière un « gardien » (le proxy serverless).
5. **Le résultat.** Une application fonctionnelle, déployée, gratuite, qui protège à la fois l'utilisatrice et le projet.

> 👉 Si tu retiens **cette histoire en 5 temps**, tu peux improviser n'importe quelle présentation.

---

## Partie 4 — Questions / Réponses

### 🟢 Niveau facile (compréhension générale)

**Q : C'est quoi Lisanga, en une phrase ?**
R : Une application web gratuite et anonyme qui aide les femmes victimes de violences en Afrique, en offrant une écoute par IA, des numéros d'urgence, des informations sur leurs droits, et une mise en relation avec des associations.

**Q : Pourquoi ce nom, « Lisanga » ?**
R : Ça veut dire « rassemblement » ou « communauté » en lingala. Ça résume l'esprit du projet : recréer du lien autour de celles que la violence isole.

**Q : À qui s'adresse l'application ?**
R : En priorité aux femmes confrontées à des violences basées sur le genre, mais elle accueille toute personne qui a besoin d'écoute et d'orientation.

**Q : Pourquoi une application, et pas juste un numéro de téléphone ?**
R : Parce qu'un appel suppose de pouvoir parler à voix haute — impossible si l'agresseur est à côté. L'application permet de chercher de l'aide **en silence**, discrètement, à toute heure. Et elle regroupe au même endroit l'écoute, l'information et l'orientation.

**Q : Qu'est-ce que le bouton panique ?**
R : Un bouton toujours visible qui, en cas de danger immédiat, **cache instantanément** l'application. C'est un filet de sécurité physique pour l'utilisatrice.

**Q : Combien ça coûte de faire tourner Lisanga ?**
R : Quasiment rien. On a volontairement choisi des services gratuits, parce qu'un projet humanitaire doit pouvoir **durer** sans budget.

**Q : Est-ce que ça marche sur téléphone ?**
R : Oui, c'est conçu d'abord pour le mobile, mais ça fonctionne aussi sur ordinateur.

---

### 🟡 Niveau moyen (technique vulgarisé)

**Q : Avec quelles technologies l'avez-vous construite ?**
R : L'interface est faite avec **React** (un outil pour construire des écrans à partir de briques réutilisables), assemblée par **Vite**. L'intelligence artificielle vient de **Mistral**. L'envoi des e-mails passe par **Web3Forms**. Et tout est hébergé sur **Netlify**.

**Q : Comment fonctionne le chat avec l'IA ?**
R : Quand l'utilisatrice écrit un message, celui-ci est envoyé à l'IA Mistral, qui génère une réponse bienveillante en suivant des **instructions précises** qu'on lui a données (son « prompt »). La réponse s'affiche dans le chat.

**Q : L'IA, est-ce que c'est vous qui l'avez créée ?**
R : Non, et c'est important de le dire honnêtement. On **utilise** une IA existante (Mistral) via son API. Notre travail, c'est de **l'encadrer** : lui donner la bonne personnalité, les bonnes limites, et la **brancher de façon sécurisée**. C'est comme engager un acteur très talentueux et lui écrire son rôle.

**Q : Que se passe-t-il avec les conversations ? Sont-elles enregistrées ?**
R : Non, jamais. Il n'y a **aucune base de données** pour les stocker. C'est un choix volontaire au cœur du projet : comme rien n'est gardé, rien ne peut fuiter. C'est la garantie de l'anonymat.

**Q : Et les informations laissées dans les formulaires (pour être rappelée) ?**
R : Là, c'est différent et **volontaire** : si une femme veut être recontactée par une association, elle laisse un pseudo et un contact. Ces informations partent par e-mail vers l'association. Mais — point crucial — **ces formulaires sont totalement séparés du chat**. La conversation, elle, n'est jamais transmise.

**Q : Pourquoi avoir séparé le chat des e-mails ?**
R : Pour une raison éthique. Le chat **promet l'anonymat**. Si on envoyait les conversations par mail, on trahirait cette promesse. Donc seul ce que l'utilisatrice décide explicitement de partager (un contact) sort de l'application.

**Q : Comment l'application sait-elle quels numéros d'urgence afficher ?**
R : Les numéros et les associations sont stockés dans des **fichiers de données** organisés par pays. L'utilisatrice cherche son pays, et l'application affiche les bonnes informations. Pour ajouter un pays, il suffit d'ajouter une entrée — c'est simple à faire évoluer.

---

### 🔴 Niveau difficile (technique pointu, sécurité, choix)

**Q : Vous parlez de sécurité. Quelle était la principale vulnérabilité, et comment l'avez-vous corrigée ?**
R : Au départ, l'application appelait l'IA **directement depuis le navigateur**, avec la clé secrète intégrée dans le code. Or **tout code envoyé au navigateur est public** : quelqu'un pouvait inspecter la page, voler la clé, et utiliser l'IA à nos frais. On a corrigé ça en créant un **proxy serverless** : un intermédiaire côté serveur qui détient la clé. Le navigateur parle au proxy, le proxy parle à l'IA. La clé n'est **jamais** exposée.

**Q : Qu'est-ce qui empêche techniquement la clé d'être exposée maintenant ?**
R : Une convention de l'outil de build : une variable préfixée par `VITE_` est intégrée au code public, alors qu'une variable **sans ce préfixe** reste confinée au serveur. On a donc renommé la clé de `VITE_MISTRAL_API_KEY` en `MISTRAL_API_KEY`. Résultat : elle n'apparaît plus jamais dans ce que reçoit le navigateur.

**Q : Comment empêchez-vous les gens d'utiliser votre IA pour autre chose (devoirs, code, détournement) ?**
R : Sur deux niveaux. D'abord le **prompt système**, qui cadre strictement le rôle de l'IA : elle décline poliment tout ce qui sort de sa mission et ne révèle jamais ses instructions. Ce prompt est **côté serveur**, donc impossible à contourner ou à voir. Ensuite, des **limites anti-abus** : un plafond du nombre de messages par minute (rate limiting) et une limite de longueur des messages.

**Q : Votre limitation de débit est-elle vraiment fiable ?**
R : Honnêtement, c'est une protection « best-effort ». Elle fonctionne au niveau de chaque instance du serveur. Pour un blocage **strict à très grande échelle**, il faudrait un système de stockage partagé (comme une base Redis). C'est une limite assumée et une piste d'amélioration identifiée. *(Le jury apprécie quand on connaît les limites de sa propre solution.)*

**Q : Pourquoi avoir choisi une architecture serverless plutôt qu'un serveur classique ?**
R : Trois raisons. **Le coût** : on ne paie que ce qu'on utilise, donc quasiment rien. **La simplicité** : pas de serveur à maintenir, à sécuriser et à mettre à jour en permanence. Et surtout **l'anonymat** : sans serveur permanent ni base de données, il n'y a tout simplement **aucun endroit** où les conversations pourraient être stockées. L'architecture sert directement notre valeur principale.

**Q : Quels sont les en-têtes de sécurité que vous avez mis en place, et à quoi servent-ils ?**
R : On a ajouté plusieurs protections au niveau de l'hébergement : une **politique de sécurité du contenu (CSP)** qui limite les sources autorisées de code, une protection **anti-clickjacking** (empêcher qu'on piège l'utilisateur en intégrant le site dans un cadre invisible), le **forçage du HTTPS** (HSTS), et l'interdiction du « reniflage » de type de fichier. C'est ce qu'on appelle une **défense en profondeur** : plusieurs couches, pour qu'aucune faille unique ne soit fatale.

**Q : Le modèle d'IA peut « halluciner » (inventer). Comment gérez-vous le risque qu'il donne une fausse information juridique ou un faux numéro ?**
R : Très bonne question, c'est un vrai risque. Trois réponses. **Un :** le prompt interdit explicitement à l'IA d'inventer des lois, des numéros ou des faits, et lui demande de dire honnêtement quand elle ne sait pas. **Deux :** les informations critiques (numéros d'urgence, lois) ne dépendent **pas** de l'IA — elles viennent de **données vérifiées** dans des fichiers, affichées telles quelles. **Trois :** un avertissement indique clairement à l'utilisatrice que « l'IA peut se tromper ». On ne fait jamais reposer une information vitale sur la seule parole de l'IA.

**Q : Comment testez-vous une application pareille ?**
R : À plusieurs niveaux. **Analyse statique** du code (un outil, ESLint, vérifie qu'il n'y a pas d'erreurs). **Test de compilation** pour garantir que ça reste déployable. **Tests fonctionnels manuels** de chaque module. Et un **test isolé du proxy de l'IA** : on a simulé une requête pour vérifier qu'il appelle bien l'IA et gère les erreurs. D'ailleurs, ce test nous a permis de **détecter une clé invalide** — preuve concrète de son utilité.

**Q : Pourquoi React et pas un autre outil ?**
R : Parce que c'est une technologie **mature, très répandue et bien documentée**, qui permet de construire une interface à partir de composants réutilisables. Ça accélère le développement et facilite la maintenance. Cela dit, d'autres outils auraient pu convenir ; React était le meilleur compromis entre puissance, popularité et simplicité pour ce projet.

---

### ⚫ Questions pièges / déstabilisantes

**Q : Au fond, votre projet, ce n'est qu'un ChatGPT déguisé avec quelques pages d'info, non ?**
R : Je comprends la remarque, mais non. La valeur n'est pas dans l'IA elle-même — qu'on n'a pas créée — mais dans **tout ce qu'il y a autour** : l'encadrement strict et sécurisé de l'IA, la garantie d'anonymat, l'information locale vérifiée par pays, la sécurité physique (bouton panique), et une architecture pensée pour le coût zéro. Un assistant généraliste ne fait **rien** de tout ça, et n'est ni spécialisé, ni sûr pour ce public vulnérable.

**Q : Est-ce vraiment utile ? Une vraie victime irait voir la police, pas une appli.**
R : Justement, beaucoup **n'y vont pas** — par peur, par honte, ou par méconnaissance de leurs droits. Lisanga ne remplace pas la police ou les associations : c'est un **premier pas**, le plus difficile, celui qui consiste à rompre le silence. Une fois la parole libérée, l'application **oriente** vers ces ressources humaines. C'est un pont, pas une destination.

**Q : Et si l'IA donne un mauvais conseil à quelqu'un en détresse ? Vous prenez une responsabilité énorme.**
R : C'est précisément pourquoi on a tant insisté sur les **garde-fous** et l'**honnêteté** de l'IA. Elle est explicitement conçue pour **ne pas se substituer** à un professionnel, pour orienter vers les secours en cas de danger, et pour ne jamais prétendre être un médecin ou un thérapeute. Et on affiche clairement qu'elle peut se tromper. La responsabilité, on l'a prise au sérieux dès la conception — c'est même ce qui a guidé nos choix les plus importants.

**Q : Vous dépendez entièrement de services gratuits. Que se passe-t-il s'ils deviennent payants ou disparaissent ?**
R : C'est une dépendance réelle, on l'assume comme une limite. Mais l'architecture est **modulaire** : l'IA, l'e-mail et l'hébergement sont des briques **remplaçables**. Si Mistral devenait inaccessible, on pourrait basculer vers un autre fournisseur d'IA sans tout reconstruire. Le proxy qu'on a mis en place facilite d'ailleurs ce remplacement, puisqu'il **isole** cet appel à un seul endroit.

**Q : Vous dites « anonyme », mais l'hébergeur ou l'IA peuvent voir passer les messages, non ?**
R : Distinction importante. **Nous**, le projet, ne stockons rien : aucune base de données, aucune trace côté Lisanga. Concernant les fournisseurs, les messages transitent techniquement par eux le temps de la réponse, mais ne sont pas reliés à une identité (pas de compte, pas de nom). L'anonymat porte sur le fait qu'**on ne peut pas remonter à la personne**. C'est un anonymat d'usage, honnête, qu'on ne survend pas — et qu'on pourrait renforcer encore.

**Q : Quelle est la plus grande faiblesse de votre projet ?**
R : Je dirais la **couverture des données** (tous les pays ne sont pas encore complets) et l'**absence de modération humaine** : aussi bien encadrée soit-elle, l'IA ne remplace pas un intervenant formé pour les cas critiques. Ce sont nos deux priorités d'évolution, et idéalement via des **partenariats avec des associations** qui valideraient les informations et prendraient le relais humain.

**Q : Qu'avez-vous appris personnellement sur ce projet ?**
R : Sur le plan technique, un cycle complet : de l'idée jusqu'au déploiement. Mais surtout, j'ai appris à **raisonner par le risque** : sur un projet pareil, ce que le logiciel **ne fait pas** (ne pas stocker, ne pas exposer, ne pas juger, ne pas mentir) est aussi important que ce qu'il fait. Et j'ai compris la **responsabilité éthique** qui vient avec la création d'outils pour des personnes vulnérables.

**Q : Si vous deviez recommencer, que feriez-vous différemment ?**
R : J'intégrerais la **sécurité dès le premier jour**, plutôt que de la corriger en cours de route. La vulnérabilité de la clé exposée nous a appris qu'il faut penser « protection des secrets » avant même d'écrire la première ligne. Cela dit, ce parcours a été formateur, parce qu'il rend la leçon concrète.

---

## Partie 5 — Anti-sèche finale

### Les 6 phrases à connaître par cœur

1. « Lisanga, c'est un **premier refuge anonyme** pour les femmes victimes de violences en Afrique. »
2. « On n'a **pas créé l'IA**, on l'a **encadrée et sécurisée**. »
3. « Les conversations ne sont **jamais enregistrées** — c'est notre garantie d'anonymat. »
4. « Notre plus gros défi technique : **cacher la clé secrète de l'IA**, grâce à un proxy. »
5. « On ne fait **jamais reposer une information vitale sur la seule parole de l'IA** ; les numéros et les lois viennent de données vérifiées. »
6. « Lisanga est un **pont vers l'aide humaine**, pas un remplacement. »

### Ce qu'il NE faut PAS dire

- ❌ « C'est nous qui avons créé l'intelligence artificielle. » → Faux, on utilise Mistral.
- ❌ « C'est 100 % sécurisé / impossible à pirater. » → Aucun système ne l'est ; parle de **défense en profondeur** et de limites assumées.
- ❌ « L'IA peut tout faire / donne des conseils médicaux et juridiques fiables. » → Non : elle **oriente**, elle ne remplace pas un professionnel.
- ❌ Inventer une réponse technique quand on ne sait pas. → Préfère : « Le principe est le suivant…, pour le détail exact je reste prudent. »
- ❌ Survendre l'anonymat comme un secret militaire. → Reste honnête : on ne stocke rien, on ne peut pas remonter à la personne.

### Posture le jour J

- **Respire et souris.** Tu connais le projet mieux que personne dans la salle.
- **Raconte une histoire** (les 5 temps de la Partie 3) plutôt que de réciter.
- **Une question difficile n'est pas une attaque** : c'est une occasion de montrer que tu connais les **limites** de ton projet. Reconnaître une limite = signe de maturité.
- **Reformule** si tu n'as pas compris : « Si je comprends bien, vous me demandez… ? »
- **Conclus toujours par le sens** : derrière la technique, il y a une femme qu'on aide à rompre le silence.

---

> 🌿 **À retenir avant d'entrer :** tu ne défends pas seulement du code. Tu défends une idée simple et forte — *utiliser la technologie pour redonner une voix à celles qu'on a réduites au silence.* Le reste n'est que des outils au service de cette idée.

*Bonne chance ! 🍀*
