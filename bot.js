require('dotenv').config() // on ajoute la librairie dotenv
const CommandoClient = require('./client'); // Chargement du client de Discord Commando
const path = require('path'); // on ajoute la librairie path

const client = new CommandoClient({
	commandPrefix: '?', // Préfixe des commandes (ex: ?help)
	owner: '277201882588381184', // ID de l'owner du bot, peut également être un tableau d'id pour plusieurs owners, ex: ['ID1', 'ID2']
        disableMentions: 'everyone' // Désactive, par sécurité, l'utilisation du everyone par le bot
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['divers', 'Divers'], // la première valeur correspond à la section 'group' de votre commande, la deuxième valeur sera utilisée pour l'affichage du nom du groupe, dans l'aide par exemple.
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))
;

// Lancement du bot, avec le token spécifié (que vous avez généré précédemment)
client.login(process.env.DISCORD_TOKEN);