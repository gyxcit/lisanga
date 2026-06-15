// Utilitaire partagé d'envoi de formulaire par email via Web3Forms (gratuit, sans backend).
//
// La clé d'accès n'est pas secrète : elle sert uniquement à router les envois vers ton email.
// Définis VITE_WEB3FORMS_KEY dans ton .env (et sur Netlify), ou remplace le texte ci-dessous.
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || 'REMPLACE_PAR_TA_CLE_WEB3FORMS';

/**
 * Envoie les champs d'un formulaire vers l'email configuré via Web3Forms.
 *
 * @param {Object} params
 * @param {string} params.subject - Objet du mail reçu.
 * @param {Object} params.fields  - Paires libellé → valeur affichées dans le mail.
 * @returns {Promise<Object>} La réponse JSON de Web3Forms en cas de succès.
 * @throws {Error} Si l'envoi échoue (réseau ou réponse non "success").
 */
export async function sendWeb3Form({ subject, fields }) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: 'Lisanga',
      subject,
      ...fields,
    }),
  });

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || "L'envoi a échoué. Veuillez réessayer.");
  }

  return data;
}
