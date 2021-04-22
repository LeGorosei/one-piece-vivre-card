const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "=";

client.on("ready", () => {
console.log("Bonjour !");
});

client.on("guildMemberAdd", member => {
    member.guild.channels.cache.find(channel => channel.id === "826947966727225374").send("Bienvenue à <@" + member.id + "> !\n **Nous sommes désormais** " + "**" + member.guild.memberCount + "**" + " **sur le serveur !**");
    member.roles.add("826917612926795856")
    member.send("Bienvenue sur le server ***__Le Raid - Évent Mush__***. N'hésite pas à te servir de la commande *=aide*, toutes **__les informations dont as besoin te seront directement envoyé en message privé.__**");
});


client.on("message", message => {
if(message.author.bot) return;

const member = message.mentions.members.first() || message.member;

if(message.content == prefix + "janvier"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#f6ff00")
    .setTitle("***__Anniversaires Janvier__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Anniversaire")
    .setAuthor("Anniversaires Janvier", "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg", "https://www.pinterest.ch/pin/516717757232354409/?nic_v2=1a3W92F9C")
    .setDescription("__Le Mois de Janvier regroupe les Anniversaires des personnages disponibles nés en Janvier (6).__")
    .setThumbnail("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .addField("*__Anniversaires Janvier disponibles :__*", "**__-Anjoh 01/01 \n \n-Buddle 16/01 \n \n-Merry 22/01 \n \n-Roxanne 23/01 \n \n-Domo-kun 30/01 \n \n-Ippon Matsu 31/01__**", true)
    .setImage("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .setTimestamp()
    .setFooter("Anniveraires Janvier | " + message.author.username, "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "fevrier"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#5fffff")
    .setTitle("***__Anniversaires Février__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Anniversaire")
    .setAuthor("Anniversaires Février", "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg", "https://www.pinterest.ch/pin/516717757232354409/?nic_v2=1a3W92F9C")
    .setDescription("__Le Mois de Février regroupe les Anniversaires des personnages disponibles nés en Février (14).__")
    .setThumbnail("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .addField("*__Anniversaires Février disponibles :__*", "**__-NEFERTARI Vivi 02/02 \n \n-Carotte 02/02 \n \n-NICO Robin 06/02 \n \n-Buchi 07/02 \n \n-Chiken 08/02 \n \n-BARTHOLOMEW Kuma 09/02 \n \n-Carne 09/02 \n \n-Ukkari 17/02 \n \n-Cocofox 19/02 \n \n-Freaky Domingos 19/02 \n \n-Makino 23/02 \n \n-Funambules Brothers 25/02 \n \n-HOOP Slap 28/02 \n \n-Pandaman 29/02__**", true)
    .setImage("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .setTimestamp()
    .setFooter("Anniveraires Février | " + message.author.username, "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "mars"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#89d795")
    .setTitle("***__Anniversaires Mars__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Anniversaire")
    .setAuthor("Anniversaires Mars", "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg", "https://www.pinterest.ch/pin/516717757232354409/?nic_v2=1a3W92F9C")
    .setDescription("__Le Mois de Mars regroupe les Anniversaires des personnages disponibles nés en Mars (12).__")
    .setThumbnail("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .addField("*__Anniversaires Mars disponibles :__*", "**__-VINSMOKE Sanji 02/03 \n \n-Gyoru 07/03 \n \n-Franky 09/03 \n \n-Shanks 09/03 \n \n-DRACULE Mihawk 09/03 \n \n-Patty 12/03 \n \n-Alvida 14/03 \n \n-Smoker 14/03\n \n-Ideaman 17/03 \n \n-Sapi 22/03 \n \n-MIKIO Itoo 26/03 \n \n-Shioyaki 27/03__**", true)
    .setImage("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .setTimestamp()
    .setFooter("Anniveraires Mars | " + message.author.username, "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "avril"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#4a0e71")
    .setTitle("***__Anniversaires Avril__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Anniversaire")
    .setAuthor("Anniversaires Avril", "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg", "https://www.pinterest.ch/pin/516717757232354409/?nic_v2=1a3W92F9C")
    .setDescription("__Le Mois d'Avril regroupe les Anniversaires des personnages disponibles nés en Avril (11).__")
    .setThumbnail("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .addField("*__Anniversaires Avril disponibles :__*", "**__-Usopp 01/04 \n \n-Jinbe 02/04 \n \n-Zeff 02/04 \n \n-Brook 03/04 \n \n-Gin 07/04 \n \n-Piment 09/04 \n \n-Meuh-Meuh 09/04 \n \n-Oignon 10/04 \n \n-Morgan 13/04 \n \n-Sham 19/04 \n \n-Kuro 22/04__**", true)
    .setImage("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .setTimestamp()
    .setFooter("Anniveraires Avril | " + message.author.username, "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "mai"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffce")
    .setTitle("***__Anniversaires Mai__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Anniversaire")
    .setAuthor("Anniversaires Mai", "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg", "https://www.pinterest.ch/pin/516717757232354409/?nic_v2=1a3W92F9C")
    .setDescription("__Le Mois de Mai regroupe les Anniversaires des personnages disponibles nés en Mai (10).__")
    .setThumbnail("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .addField("*__Anniversaires Mai disponibles :__*", "**__-Arlong 03/05 \n \n-Kôshirô 04/05 \n \n-MONKEY D Luffy 05/05 \n \n-Polo 11/05 \n \n-Koby 13/05 \n \n-~~Pudding-Pudding 16/05~~ \n \n-~~Hokker 17/05~~ \n \n-John Giant 19/05 \n \n-Smack 23/05 \n \n-Koze 27/05__**", true)
    .setImage("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .setTimestamp()
    .setFooter("Anniveraires Mai | " + message.author.username, "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "juin"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#ffc300")
    .setTitle("***__Anniversaires Juin__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Anniversaire")
    .setAuthor("Anniversaires Juin", "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg", "https://www.pinterest.ch/pin/516717757232354409/?nic_v2=1a3W92F9C")
    .setDescription("__Le Mois de Juin regroupe les Anniversaires des personnages disponibles nés en Juin (5).__")
    .setThumbnail("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .addField("*__Anniversaires Juin disponibles :__*", "**__-Ripper 13/06 \n \n-Chabo 14/06 \n \n-Genzo 17/06 \n \n-Rika 18/06 \n \n-Rokkaku 19/06__**", true)
    .setImage("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .setTimestamp()
    .setFooter("Anniveraires Juin | " + message.author.username, "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "juillet"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#ff500e")
    .setTitle("***__Anniversaires Juillet__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Anniversaire")
    .setAuthor("Anniversaires Juillet", "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg", "https://www.pinterest.ch/pin/516717757232354409/?nic_v2=1a3W92F9C")
    .setDescription("__Le Mois de Juillet regroupe les Anniversaires des personnages disponibles nés en Juillet (12).__")
    .setThumbnail("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .addField("*__Anniversaires Juillet disponibles :__*", "**__-Gardes du Manoir 01/07 \n \n-~~Batchee 01/07~~ \n \n-Nakoh 01/07 \n \n-Nami 03/07 \n \n-Lucky Roux 06/07 \n \n-Pearl 11/07 \n \n-Équilibristes 13/07 \n \n-Hermep 16/07 \n \n-Yu 19/07 \n \n-Richie 23/07 \n \n-Nojiko 25/07 \n \n-Hustle 28/07__**", true)
    .setImage("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .setTimestamp()
    .setFooter("Anniveraires Juillet | " + message.author.username, "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "aout"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#ff500e")
    .setTitle("***__Anniversaires Août__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Anniversaire")
    .setAuthor("Anniversaires Août", "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg", "https://www.pinterest.ch/pin/516717757232354409/?nic_v2=1a3W92F9C")
    .setDescription("__Le Mois d'Août regroupe les Anniversaires des personnages disponibles nés en Août (9).__")
    .setThumbnail("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .addField("*__Anniversaires Août disponibles :__*", "**__-Yasopp 02/08 \n \n-Barbe Noire 03/08 \n \n-Gaimon 05/08 \n \n-Baggy 08/08 \n \n-Octo 08/08 \n \n-Pisaro 14/08 \n \n-Take 21/08 \n \n-Kaya 24/08 \n \n-Requin-Panda 29/08__**", true)
    .setImage("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .setTimestamp()
    .setFooter("Anniveraires Août | " + message.author.username, "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "septembre"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#0c521d")
    .setTitle("***__Anniversaires Septembre__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Anniversaire")
    .setAuthor("Anniversaires Septembre", "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg", "https://www.pinterest.ch/pin/516717757232354409/?nic_v2=1a3W92F9C")
    .setDescription("__Le Mois de Septembre regroupe les Anniversaires des personnages disponibles nés en Septembre (15).__")
    .setThumbnail("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .addField("*__Anniversaires Septembre disponibles :__*", "**__-BOA Hancock 02/09 \n \n-Heppoko 02/03 \n \n-Peppoko 02/03 \n \n-Poppoko 02/03 \n \n-Brannew 03/09 \n \n-Crocodile 05/09 \n \n-GECKO Moria 06/09 \n \n-Fullbody 07/09 \n \n-Cabaji 08/09 \n \n-Monstre de la Baie 14/09 \n \n-~~Kuina 17/09~~ \n \n-DON Krieg 19/09 \n \n-Hanger 23/09 \n \n-Kaicho Pinky 29/09 \n \n-Kumate 29/09__**", true)
    .setImage("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .setTimestamp()
    .setFooter("Anniveraires Septembre | " + message.author.username, "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "octobre"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#0005ff")
    .setTitle("***__Anniversaires Octobre__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Anniversaire")
    .setAuthor("Anniversaires Octobre", "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg", "https://www.pinterest.ch/pin/516717757232354409/?nic_v2=1a3W92F9C")
    .setDescription("__Le Mois d'Octobre regroupe les Anniversaires des personnages disponibles nés en Octobre (9).__")
    .setThumbnail("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .addField("*__Anniversaires Octobre disponibles :__*", "**__-Morge 01/10 \n \n-MONKEY D Dragon 05/10 \n \n-TRAFALGAR D WATER Law 06/10 \n \n-Tashigi 06/10 \n \n-Morning 15/10 \n \n-Sam 21/10 \n \n-DON QUIXOTE Doflamingo 23/10 \n \n-Kuroobi 25/10 \n \n-Kagikko 27/10__**", true)
    .setImage("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .setTimestamp()
    .setFooter("Anniveraires Octobre | " + message.author.username, "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "novembre"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#3c2411")
    .setTitle("***__Anniversaires Novembre__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Anniversaire")
    .setAuthor("Anniversaires Novembre", "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg", "https://www.pinterest.ch/pin/516717757232354409/?nic_v2=1a3W92F9C")
    .setDescription("__Le Mois de Novembre regroupe les Anniversaires des personnages disponibles nés en Novembre (11).__")
    .setThumbnail("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .addField("*__Anniversaires Novembre disponibles :__*", "**__-BEN Beckman 09/11 \n \n-Yosaku 10/11 \n \n-RORONOA Zoro 11/11 \n \n-~~Soro  11/11~~ \n \n-Johnny 12/11 \n \nRirika 15/11 \n \n-Moodie 17/11 \n \n-~~Higuma 18/11~~ \n \n-Monstar 21/11 \n \n-Mamy Mee 21/11 \n \n-Chouchou 22/11__**", true)
    .setImage("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .setTimestamp()
    .setFooter("Anniveraires Novembre | " + message.author.username, "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "decembre"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#3c2411")
    .setTitle("***__Anniversaires Décembre__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Anniversaire")
    .setAuthor("Anniversaires Décembre", "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg", "https://www.pinterest.ch/pin/516717757232354409/?nic_v2=1a3W92F9C")
    .setDescription("__Le Mois de Décembre regroupe les Anniversaires des personnages disponibles nés en Décembre (12).__")
    .setThumbnail("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .addField("*__Anniversaires Décembre disponibles :__*", "**__-Ipponume 01/12 \n \n-Kaneshiro 02/12 \n \n-~~Belmer 03/12~~ \n \n-Packi 09/12 \n \n-EDWARD Weeble 10/12 \n \n-Nezumi 12/12 \n \n-~~Bankina 17/12~~ \n \n-TONY TONY Chopper 24/12 \n \n-Mashikaku 26/12 \n \n-~~Lines 27/12~~ \n \n-Jango 28/12 \n \n-~~GOL D Roger 31/12~~__**", true)
    .setImage("https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg")
    .setTimestamp()
    .setFooter("Anniveraires Décembre | " + message.author.username, "https://i.pinimg.com/564x/ec/5e/d2/ec5ed206fd1e027a5b01ea712d58d0c2.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "sommaire east blue"){
const exampleEmbed = new Discord.MessageEmbed()
.setColor("#69ebff")
.setTitle("***__Sommaire East Blue__***")
.setURL("https://onepiece.fandom.com/fr/wiki/East_Blue")
.setAuthor("Sommaire East Blue", "https://static.wikia.nocookie.net/onepiece/images/3/3a/%C3%89pisode_d%27East_Blue_Infobox.png/revision/latest?cb=20170626060655&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/East_Blue")
.setDescription("*__Le sommaire d'East Blue regroupe toutes les Sagas disponibles d'East Blue (1).__*")
.setThumbnail("https://static.wikia.nocookie.net/onepiece/images/3/3a/%C3%89pisode_d%27East_Blue_Infobox.png/revision/latest?cb=20170626060655&path-prefix=fr")
.addField("*__Saga East Blue disponible :__*", "**__-East Blue #0001 - #0125__**")
.setImage("https://static.wikia.nocookie.net/onepiece/images/3/3a/%C3%89pisode_d%27East_Blue_Infobox.png/revision/latest?cb=20170626060655&path-prefix=fr")
.setTimestamp()
.setFooter("Sommaire East Blue | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/3/3a/%C3%89pisode_d%27East_Blue_Infobox.png/revision/latest?cb=20170626060655&path-prefix=fr")

message.channel.send(exampleEmbed);
}

if(message.content == prefix + "east blue"){
const exampleEmbed = new Discord.MessageEmbed()
.setColor("#69ebff")
.setTitle("***__Arcs East Blue__***")
.setURL("https://onepiece.fandom.com/fr/wiki/East_Blue")
.setAuthor("Arcs East Blue", "https://static.wikia.nocookie.net/onepiece/images/3/3a/%C3%89pisode_d%27East_Blue_Infobox.png/revision/latest?cb=20170626060655&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/East_Blue")
.setDescription("*__Voici les Arcs d'East Blue disponibles (7).__*")
.setThumbnail("https://static.wikia.nocookie.net/onepiece/images/3/3a/%C3%89pisode_d%27East_Blue_Infobox.png/revision/latest?cb=20170626060655&path-prefix=fr")
.addField("*__Arcs East Blue disponible :__*", "**__-Romance Dawn #0001 - #0027 \n \n-Shells Town #0028 - #0042 \n \n-Orange Town #0043 - #0057 \n \n-Sirop #0058 - #0070 \n \n-Baratie #0071 - #0091 \n \n-Arlong Park #0093 - #0114 \n \n-Loguetown #0115 - #0125__**")
.setImage("https://static.wikia.nocookie.net/onepiece/images/3/3a/%C3%89pisode_d%27East_Blue_Infobox.png/revision/latest?cb=20170626060655&path-prefix=fr")
.setTimestamp()
.setFooter("Arcs East Blue | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/3/3a/%C3%89pisode_d%27East_Blue_Infobox.png/revision/latest?cb=20170626060655&path-prefix=fr")
    
message.channel.send(exampleEmbed);
}

if(message.content == prefix + "romance dawn"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#ff0d00")
    .setTitle('***__Classeur Vivre Cards Romance Dawn__***')
    .setURL('https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes')
    .setAuthor("Classeur Vivre Cards Romance Dawn", "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setDescription("*__Le Classeur de Romance Dawn regroupe toutes les Vivre Cards disponibles de l'Arc Romance Dawn (27).__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .addField("*__Vivre Cards Romance Dawn disponibles :__*", "**__-MONKEY D Luffy #0001 \n \n-RORONOA Zoro #0002 \n \n-Nami #0003 \n \n-Usopp #0004 \n \n-VINSMOKE Sanji #0005 \n \n-TONY TONY Chopper #0006 \n \n-NICO Robin #0007 \n \n-Franky #0008 \n \n-Brook #0009 \n \n-Jinbe #0010 \n \n-Vogue Merry #0011 \n \n-Thousand Sunny #0012 \n \n-NEFERTARI Vivi #0013 \n \n-GOL D Roger #0014 \n \n-Anjoh #0015 \n \n-Monstar #0016 \n \n-Shanks #0017 \n \n-Lucky Roux #0018 \n \n-Yasopp #0019 \n \n-BEN Beckman #0020 \n \n-MIKIO Itoo #0021 \n \n-Makino #0022 \n \n-Higuma #0023 \n \n-Gyoru #0024 \n \n-Chiken #0025 \n \n-HOOP Slap #0026 \n \n-Monstre de la Baie #0027__**")
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .setTimestamp()
    .setFooter("Classeur Vivre Cards Romance Dawn | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "luffy"){
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setTitle('***__Vivre Card MONKEY D Luffy #0001__***')
	.setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
	.setAuthor('MONKEY D Luffy', 'https://www.grandlinetimes.net/wp-content/uploads/Luffy_Une.jpg', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
	.setDescription('*__La Vivre Card de Luffy__* est la **__#0001__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
	.setThumbnail('https://www.grandlinetimes.net/wp-content/uploads/Luffy_Une.jpg')
    .addField('*__Informations officielles :__*', "*Il est __né le 5 mai__ et a __19 ans.__ Il __mesure 1m74,__ ce qui est une taille plutôt basse pour un homme. \n \n-Avant de rencontrer Shanks, __Luffy s’intéressait déjà aux pirates.__ Il a __toujours eu le goût pour l’aventure.__ \n \n-C’était assez évident, mais le __Red Hawk sert d’hommage à Portgas D Ace.__ \n \n-La Vivre Card de Luffy indique aussi que __le précédent roi des pirates portait également un chapeau de paille,__ bien qu’elle ne spécifie pas si c’est le même chapeau ou non. \n \n-La Vivre Card de Luffy laisse également penser que __Momonosuke et lui pouvaient entendre Zunisha__ qui était bel et bien __la voix de toutes choses.__*", true)
    .addField('*__Primes :__*', "**__~~30,000,000 Berrys~~ \n \n~~100,000,000 Berrys~~ \n \n~~300,000,000 Berrys~~ \n \n~~400,000,000 Berrys~~ \n \n~~500,000,000 Berrys~~ \n \n1,500,000,000 Berrys__**", true)
    .addField("*__Fruit du Démon :__*", "**__Gomu Gomu no Mi__** *__Fruit du Caoutchouc)__*")
	.setImage('https://www.grandlinetimes.net/wp-content/uploads/Luffy_Une.jpg')
	.setTimestamp()
	.setFooter("Vivre Card de MONKEY D Luffy | " + message.author.username, "https://www.grandlinetimes.net/wp-content/uploads/Luffy_Une.jpg");

message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "zoro"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('***__Vivre Card RORONOA Zoro #0002__***')
        .setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
        .setAuthor('RORONOA Zoro', 'https://i.pinimg.com/originals/e9/ed/ff/e9edff15b3b9cb36a9f58de7c80cb824.jpg', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
        .setDescription('*__La Vivre Card de Zoro__* est la **__#0002__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
        .setThumbnail('https://i.pinimg.com/originals/e9/ed/ff/e9edff15b3b9cb36a9f58de7c80cb824.jpg')
        .addField('*__Informations officielles :__*', "*-Il est __né le 11 novembre__ et a __21 ans.__ Il __mesure 1m81,__ ce qui est une taille correcte pour un homme. \n \n-La Vivre Card de Zoro nous apprends que les __Lames Noires sont créées à partir de Haki.__ Elle affirme que le __Sandai Kitetsu__ et le __Wado Ichimonji__ peuvent également __devenir des Lames Noires en utilisant le Haki.__ \n \n-En tant que __membre le plus fort de l’équipage après le capitaine__, il __combat habituellement le deuxième membre le plus fort des adversaires.__ \n \n-On remarque que __dans les moments difficiles Zoro a agi comme vice-capitaine en aidant l’équipage comme la voix de la raison.__ \n \n-Même étant __originaire de l’extérieur du pays, Zoro est capable de tenir tête à beaucoup d'habitants puissants de Wano Kuni.__ Des assassins en avaient après lui, mais il les a tous repoussé.*", true)
        .addField('*__Primes :__*', "**__~~60,000,000 Berrys~~ \n \n~~120,000,000 Berrys~~ \n \n320,000,000 Berrys__**", true)
        .setImage('https://i.pinimg.com/originals/e9/ed/ff/e9edff15b3b9cb36a9f58de7c80cb824.jpg')
        .setTimestamp()
        .setFooter("Vivre Card de RORONOA Zoro | " + message.author.username, "https://i.pinimg.com/originals/e9/ed/ff/e9edff15b3b9cb36a9f58de7c80cb824.jpg");
    
    message.channel.send(exampleEmbed);
        }

        if(message.content == prefix + "nami"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('***__Vivre Card Nami #0003__***')
            .setURL('https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/')
            .setAuthor('Nami', 'https://vignette.wikia.nocookie.net/onepiece/images/6/60/Nami_grimace.jpg/revision/latest?cb=20141208225507&path-prefix=fr', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
            .setDescription('*__La Vivre Card de Nami__* est la **__#0003__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
            .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/6/60/Nami_grimace.jpg/revision/latest?cb=20141208225507&path-prefix=fr')
            .addField('*__Informations officielles :__*', "*-Elle est __née le 3 juillet__ et a __20 ans.__ Elle __mesure 1m70,__ ce qui est une taille plutôt grande pour une femme. \n \n__-Nami considère Genzo comme son père et Belmer comme sa mère.__ Cela est __symbolisé dans son tatouage__ avec __le moulinet__ et __la mandarine.__ \n \n-__Belmer a trouvé Nami et Nojiko dans le Royaume d’Oykot sur East Blue.__ Cependant, elle __ne précise pas si Nami est née là-bas ou non, seulement qu’elle y a été trouvée.__*", true)
            .addField('*__Primes :__*', "**__~~16,000,000 Berrys~~ \n \n66,000,000 Berrys__**", true)
            .setImage('https://vignette.wikia.nocookie.net/onepiece/images/6/60/Nami_grimace.jpg/revision/latest?cb=20141208225507&path-prefix=fr')
            .setTimestamp()
            .setFooter("Vivre Card de Nami | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/6/60/Nami_grimace.jpg/revision/latest?cb=20141208225507&path-prefix=fr");
        
        message.channel.send(exampleEmbed);
            }

            if(message.content == prefix + "usopp"){
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle('***__Vivre Card Usopp #0004__***')
                .setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                .setAuthor('Usopp', 'https://i.ytimg.com/vi/Q1BqlYsTb7E/maxresdefault.jpg', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                .setDescription('*__La Vivre Card de Usopp__* est la **__#0004__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                .setThumbnail('https://i.ytimg.com/vi/Q1BqlYsTb7E/maxresdefault.jpg')
                .addField('*__Informations officielles :__*', "*-Il est __né le 1 avril__ et a __19 ans.__ Il __mesure 1m76,__ ce qui est une taille plutôt correcte pour un homme. \n \n-Il est confirmé que __Usopp a éveillé son Haki de l'Observation durant l'arc Dressrosa.__*", true)
                .addField('*__Primes :__*', "**__~~30,000,000 Berrys~~ \n \n200,000,000 Berrys__**", true)
                .setImage('https://i.ytimg.com/vi/Q1BqlYsTb7E/maxresdefault.jpg')
                .setTimestamp()
                .setFooter("Vivre Card de Usopp | " + message.author.username, "https://i.ytimg.com/vi/Q1BqlYsTb7E/maxresdefault.jpg");
            
            message.channel.send(exampleEmbed);
                }

                if(message.content == prefix + "sanji"){
                    const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('***__Vivre Card VINSMOKE Sanji #0005__***')
                    .setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                    .setAuthor('VINSMOKE Sanji', 'https://media.melty.fr/article-4206277-ratio15_720-f6/media.jpg', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                    .setDescription('*__La Vivre Card de Sanji__* est la **__#0005__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                    .setThumbnail('https://media.melty.fr/article-4206277-ratio15_720-f6/media.jpg')
                    .addField('*__Informations officielles :__*', "*-Il est __né le 2 mars__ et a __21 ans.__ Il __mesure 1m80,__ ce qui est une taille correcte pour un homme. \n \n-Sanji est __incroyablement puissant et compétent en matière de combat et de cuisine.__*", true)
                    .addField('*__Primes :__*', "**__~~77,000,000 Berrys~~ \n \n~~177,000,000 Berrys~~ \n \n330,000,000 Berrys__**", true)
                    .setImage("https://media.melty.fr/article-4206277-ratio15_720-f6/media.jpg")
                    .setTimestamp()
                    .setFooter("Vivre Card de VINSMOKE Sanji | " + message.author.username, "https://media.melty.fr/article-4206277-ratio15_720-f6/media.jpg");
                
                message.channel.send(exampleEmbed);
                    }

                    if(message.content == prefix + "chopper"){
                        const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#ff0000')
                        .setTitle('***__Vivre Card TONY TONY Chopper #0006__***')
                        .setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                        .setAuthor('TONY TONY Chopper', 'https://vignette.wikia.nocookie.net/onepiece/images/a/a2/Horn_Point_Post_Ellipse.png/revision/latest?cb=20180702133229&path-prefix=fr', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                        .setDescription('*__La Vivre Card de Chopper__* est la **__#0006__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                        .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/a/a2/Horn_Point_Post_Ellipse.png/revision/latest?cb=20180702133229&path-prefix=fr')
                        .addField('*__Informations officielles :__*', "*-Il est __né le 24 décembre__ et a __17 ans.__ Il n'a __pas de taille précise puisqu'elle varie en fonction de ses transformations.__ \n \n-__Chopper a goûté à la barbe à papa pour la première fois lors Davy Back Fight__ et en est ensuite devenu fou.*", true)
                        .addField('*__Primes :__*', "**__~~50 Berrys~~ \n \n100 Berrys__**", true)
                        .addField("*__Fruit du Démon :__*", "**__Hito Hito no Mi Version Humain__** *__(Fruit de l'Homme)__*")
                        .setImage('https://vignette.wikia.nocookie.net/onepiece/images/a/a2/Horn_Point_Post_Ellipse.png/revision/latest?cb=20180702133229&path-prefix=fr')
                        .setTimestamp()
                        .setFooter("Vivre Card de TONY TONY Chopper | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/a/a2/Horn_Point_Post_Ellipse.png/revision/latest?cb=20180702133229&path-prefix=fr");
                    
                    message.channel.send(exampleEmbed);
                        }

                        if(message.content == prefix + "robin"){
                            const exampleEmbed = new Discord.MessageEmbed()
                            .setColor('#ff0000')
                            .setTitle('***__Vivre Card NICO Robin #0007__***')
                            .setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                            .setAuthor('NICO Robin', 'https://vignette.wikia.nocookie.net/onepiece/images/5/5f/Robin_Veut_Vivre.png/revision/latest/scale-to-width-down/340?cb=20190820081947&path-prefix=fr', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                            .setDescription('*__La Vivre Card de Robin__* est la **__#0007__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                            .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/5/5f/Robin_Veut_Vivre.png/revision/latest/scale-to-width-down/340?cb=20190820081947&path-prefix=fr')
                            .addField('*__Informations officielles :__*', "*-Elle est __née le 6 février__ et a __30 ans.__ Elle __mesure 1m88,__ ce qui est une taille très grande pour une femme. \n \n-La raison pour laquelle __l’Armée Révolutionnaire considère Robin comme la 'Lumière de la Révolution'__ est due à __sa capacité à déchiffrer les Ponéglyphes__ (cela laisse entendre que __l’Armée Révolutionnaire serait intéressée par le Siècle Oublié).__*", true)
                            .addField('*__Primes :__*', "**__~~79,000,000 Berrys~~ \n \n~~80,000,000 Berrys~~ \n \n130,000,000 Berrys__**", true)
                            .addField("*__Fruit du Démon :__*", "**__Hana Hana no Mi__** *__(Fruit de l'Éclosion)__*")
                            .setImage('https://vignette.wikia.nocookie.net/onepiece/images/5/5f/Robin_Veut_Vivre.png/revision/latest/scale-to-width-down/340?cb=20190820081947&path-prefix=fr')
                            .setTimestamp()
                            .setFooter("Vivre Card de NICO Robin | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/5/5f/Robin_Veut_Vivre.png/revision/latest/scale-to-width-down/340?cb=20190820081947&path-prefix=fr");
                        
                        message.channel.send(exampleEmbed);
                            }

                            if(message.content == prefix + "franky"){
                                const exampleEmbed = new Discord.MessageEmbed()
                                .setColor('#ff0000')
                                .setTitle('***__Vivre Card Franky #0008__***')
                                .setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                .setAuthor('Franky', 'https://static.hitek.fr/img/actualite/2017/08/07/w_cit-6.png', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                .setDescription('*__La Vivre Card de Franky__* est la **__#0008__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                .setThumbnail('https://static.hitek.fr/img/actualite/2017/08/07/w_cit-6.png')
                                .addField('*__Informations officielles :__*', "*-Il est __né le 9 mars__ et a __36 ans.__ Il __mesure 2m40,__ ce qui est une taille plutôt grande pour un cyborg. \n \n-__Franky a su tirer profit des nombreuses inventions de Vegapunk,__ et __il est désormais capable de tirer des rayons lasers comme les Pacifistas.__*", true)
                                .addField('*__Primes :__*', "**__~~44,000,000 Berrys~~ \n \n94,000,000 Berrys__**", true)
                                .setImage('https://static.hitek.fr/img/actualite/2017/08/07/w_cit-6.png')
                                .setTimestamp()
                                .setFooter("Vivre Card de Franky | " + message.author.username, "https://static.hitek.fr/img/actualite/2017/08/07/w_cit-6.png");
                            
                            message.channel.send(exampleEmbed);
                                }

                                if(message.content == prefix + "brook"){
                                    const exampleEmbed = new Discord.MessageEmbed()
                                    .setColor('#ff0000')
                                    .setTitle('***__Vivre Card Brook #0009__***')
                                    .setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                    .setAuthor('Brook', 'https://i.ytimg.com/vi/KWPKPfpNFE8/maxresdefault.jpg', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                    .setDescription('*__La Vivre Card de Brook__* est la **__#0009__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                    .setThumbnail('https://i.ytimg.com/vi/KWPKPfpNFE8/maxresdefault.jpg')
                                    .addField('*__Informations officielles :__*', "*-Il est __né le 3 avril__ et a __90 ans.__ Il __mesure 2m77,__ ce qui est une taille immense pour un homme. \n \n-__ Etant donné qu'il revient du monde des morts, sa capacité à geler ses adversaires vient effectivement des pouvoirs de son fruit du démon.__ Pendant l'ellipse, __il a également appris à lancer des attaques à distance__ tout comme Zoro.*", true)
                                    .addField('*__Primes :__*', "**__~~33,000,000 Berrys~~ \n \n83,000,000 Berrys__**", true)
                                    .addField("*__Fruit du Démon :__*", "**__Yomi Yomi no Mi__** *__(Fruit de la Résurrection)__*")
                                    .setImage('https://i.ytimg.com/vi/KWPKPfpNFE8/maxresdefault.jpg')
                                    .setTimestamp()
                                    .setFooter("Vivre Card de Brook | " + message.author.username, "https://i.ytimg.com/vi/KWPKPfpNFE8/maxresdefault.jpg");
                                
                                message.channel.send(exampleEmbed);
                                    }

                                    if(message.content == prefix + "jinbe"){
                                        const exampleEmbed = new Discord.MessageEmbed()
                                        .setColor('#ff0000')
                                        .setTitle('***__Vivre Card Jinbe #0010__***')
                                        .setURL('https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/')
                                        .setAuthor('Jinbe', 'https://global-img.gamergen.com/one-piece-burning-blood-3_0000827963.jpg', 'https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/')
                                        .setDescription('*__La Vivre Card de Jinbe__* est la **__#0010__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                        .setThumbnail('https://global-img.gamergen.com/one-piece-burning-blood-3_0000827963.jpg')
                                        .addField('*__Informations officielles :__*', "*-Il est __né le 2 avril__ et a __46 ans.__ Il __mesure 3m01,__ ce qui est une taille plutôt grande pour un homme-poisson. \n \n-Comme il était présent à la Tea Party, __il rejoint officiellement l'équipage à Whole Cake Island.__ \n \n-Si il est le timonier de l’équipage c'est parce qu’__il est incroyablement compétent en ce qui concerne les courants marins et la gestion d'un navire.__ \n \n-__Sa prime actuelle__ est de **__438,000,000 Berrys,__** ce qui en fait le __2ème membre le plus recherché de l’équipage après Luffy.__ \n \n-À l’origine, Oda pensait faire de __Jinbe l'antagoniste qui tirait les ficelles derrière Arlong.__ Il a finalement __abandonné l’idée__ et a fait de __Jinbe quelqu'un se reprochant profondément les actions d'Arlong.__ \n \n-Jinbe est __incroyablement compétent dans le domaine du Karaté des Hommes-Poissons.__ Il a d'ailleurs __été capable de repousser la Yonko Big Mom avec un seul coup de poing.__ \n \n-Il est __confirmé qu'il utilise le Haki de l'Armement ainsi que le Haki de l'Observation__.*", true)
                                        .addField('*__Primes :__*', "**__~~76,000,000 Berrys~~ \n \n~~250,000,000 Berrys~~ \n \n438,000,000 Berrys__**", true)
                                        .setImage('https://global-img.gamergen.com/one-piece-burning-blood-3_0000827963.jpg')
                                        .setTimestamp()
                                        .setFooter("Vivre Card de Jinbe | " + message.author.username, "https://global-img.gamergen.com/one-piece-burning-blood-3_0000827963.jpg");
                                    
                                    message.channel.send(exampleEmbed);
                                        }

                                        
                                if(message.content == prefix + "vogue merry"){
                                    const exampleEmbed = new Discord.MessageEmbed()
                                    .setColor('#ff0000')
                                    .setTitle('***__Vivre Card Vogue Merry #0011__***')
                                    .setURL('https://thelibraryofohara.com/2019/03/09/vivre-card-databook-vol-7-all-the-new-information/')
                                    .setAuthor('Vogue Merry', 'https://vignette.wikia.nocookie.net/onepiece/images/5/57/Vogue_Merry_Anime_Infobox.png/revision/latest?cb=20130909115223&path-prefix=fr', 'https://thelibraryofohara.com/2019/03/09/vivre-card-databook-vol-7-all-the-new-information/')
                                    .setDescription('*__La Vivre Card du Vogue Merry__* est la **__#0011__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                    .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/5/57/Vogue_Merry_Anime_Infobox.png/revision/latest?cb=20130909115223&path-prefix=fr')
                                    .addField('*__Informations officielles :__*', "*Il mesurait __11m de haut__ pour __13m de large__ ce qui est un gabarit plutôt faible pour une caravelle. \n \n-__Le Vogue Merry avait réellement une volonté propre.__*", true)
                                    .addField('*__Type :__*', "**__Caravelle__**", true)
                                    .setImage('https://vignette.wikia.nocookie.net/onepiece/images/5/57/Vogue_Merry_Anime_Infobox.png/revision/latest?cb=20130909115223&path-prefix=fr')
                                    .setTimestamp()
                                    .setFooter("Vivre Card du Vogue Merry | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/5/57/Vogue_Merry_Anime_Infobox.png/revision/latest?cb=20130909115223&path-prefix=fr");
                                
                                message.channel.send(exampleEmbed);
                                    }

                                    if(message.content == prefix + "thousand sunny"){
                                        const exampleEmbed = new Discord.MessageEmbed()
                                        .setColor('#ff0000')
                                        .setTitle('***__Vivre Card Thousand Sunny #0012__***')
                                        .setURL('https://thelibraryofohara.com/2019/03/09/vivre-card-databook-vol-7-all-the-new-information/')
                                        .setAuthor('Thousand Sunny', 'https://vignette.wikia.nocookie.net/onepiece/images/1/1e/Thousand_Sunny_Anime_Infobox.png/revision/latest?cb=20150330211959&path-prefix=fr', 'https://thelibraryofohara.com/2019/03/09/vivre-card-databook-vol-7-all-the-new-information/')
                                        .setDescription('*__La Vivre Card du Thousand Sunny__* est la **__#0012__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                        .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/1/1e/Thousand_Sunny_Anime_Infobox.png/revision/latest?cb=20150330211959&path-prefix=fr')
                                        .addField('*__Informations officielles :__*', "*Il mesure __56m de haut__ pour __39m de large__ ce qui est un gabarit plutôt imposant pour un brigantin. \n \n-__Le Sunny est 5 fois plus haut que le Merry. Ses 56m de haut sont surement un clin d'oeil au chiffre fétiche de Luffy '56'__ (en japonais 5 = Go et 6 = Mu / 56 = Gomu).*", true)
                                        .addField('*__Type :__*', "**__Brigantin__**", true)
                                        .setImage('https://vignette.wikia.nocookie.net/onepiece/images/1/1e/Thousand_Sunny_Anime_Infobox.png/revision/latest?cb=20150330211959&path-prefix=fr')
                                        .setTimestamp()
                                        .setFooter("Vivre Card du Thousand Sunny | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/1/1e/Thousand_Sunny_Anime_Infobox.png/revision/latest?cb=20150330211959&path-prefix=fr");
                                    
                                    message.channel.send(exampleEmbed);
                                        }

                                        if(message.content == prefix + "vivi"){
                                            const exampleEmbed = new Discord.MessageEmbed()
                                            .setColor('#ff0000')
                                            .setTitle('***__Vivre Card NEFERTARI Vivi #0013__***')
                                            .setURL('https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/')
                                            .setAuthor('NEFERTARI Vivi', 'https://pbs.twimg.com/media/DgPhe85WkAAp_pT.jpg', 'https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/')
                                            .setDescription('*__La Vivre Card de Vivi__* est la **__#0013__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                            .setThumbnail('https://pbs.twimg.com/media/DgPhe85WkAAp_pT.jpg')
                                            .addField('*__Informations officielles :__*', "*-Elle est __née le 2 février__ et a __18 ans.__ Elle __mesure 1m69,__ ce qui est une taille plutôt grande pour une femme. \n \n-__Vivi est officiellement considérée comme un ancien membre de l’équipage.__ \n \n-__Elle s’entend très bien avec ses citoyens__ car __elle interagit souvent avec eux depuis qu’elle est toute petite.__ \n \n-__Vivi a exagéré sa personnalité en tant que Miss Wednesday__ pour qu’__elle construise une bonne relation avec l'étrange Mister 9.__ \n \n-__Sa nourriture préférée__ est un __plat Égyptien__ car __Alabasta a été inspiré de cette culture.__*", true)
                                            .addField('*__Titres :__*', "**__~~Miss Wednesday~~ \n \nPrincesse du Royaume d'Alabasta__**", true)
                                            .setImage('https://pbs.twimg.com/media/DgPhe85WkAAp_pT.jpg')
                                            .setTimestamp()
                                            .setFooter("Vivre Card de NEFERTARI Vivi | " + message.author.username, "https://pbs.twimg.com/media/DgPhe85WkAAp_pT.jpg");
                                        
                                        message.channel.send(exampleEmbed);
                                            }

                                            if(message.content == prefix + "roger"){
                                                const exampleEmbed = new Discord.MessageEmbed()
                                                .setColor('#543900')
                                                .setTitle('***__Vivre Card GOL D Roger #0014__***')
                                                .setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                                .setAuthor('GOL D Roger', 'https://media.melty.fr/article-4040121-ratio15_720-f5/media.jpg', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                                .setDescription('*__La Vivre Card de Roger__* est la **__#0014__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                .setThumbnail('https://media.melty.fr/article-4040121-ratio15_720-f5/media.jpg')
                                                .addField('*__Informations officielles :__*', "*-Il est __né le 31 décembre__ et est décédé à l'âge de __53 ans.__ Il __mesurait 2m74,__ ce qui était taille immense pour un homme. \n \n-__Roger détestait les gens contrôlant les mers,__ ainsi __il n’était pas d’accord avec le plan de Shiki__ car __il recherchait la liberté par dessus tout.__ \n \n-__Même ses ennemis ne pouvaient s’empêcher de l’apprécier.__ \n \n-Une fois sa maladie diagnostiquée, __Roger a mis 3 ans à trouver le One Piece.__ \n \n-__Roger était conscient de la signification du D et était fier de l’avoir en son nom.__ \n \n-Il est confirmé que __Roger a trouvé le One Piece. Il ne l’a pas créé ou fabriqué, il l’a trouvé sur Laugh Tale.__ \n \n-__Le chapeau de paille qu'il porte__ est dit être __'semblable à celui de Luffy'.__ C’est dur de savoir si cela sigifie qu'__'ils se ressemblent alors ce sont les mêmes'__ ou si cela signifie au contraire qu’'__ils sont deux chapeaux différents'.__ \n \n-Oda dit que __le chapeau de paille pourrait cacher de nombreux mystères...__*", true)
                                                .addField('*__Prime :__*', "**__~~5,564,800,000 Berrys~~__**", true)
                                                .setImage('https://media.melty.fr/article-4040121-ratio15_720-f5/media.jpg')
                                                .setTimestamp()
                                                .setFooter("Vivre Card de GOL D Roger | " + message.author.username, "https://media.melty.fr/article-4040121-ratio15_720-f5/media.jpg");
                                            
                                            message.channel.send(exampleEmbed);
                                                }
                                                if(message.content == prefix + "anjoh"){
                                                    const exampleEmbed = new Discord.MessageEmbed()
                                                    .setColor('#00ffff')
                                                    .setTitle('***__Vivre Card Anjoh #0015__***')
                                                    .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                                                    .setAuthor('Anjou', 'https://cdn.discordapp.com/attachments/766065475821240320/767361807244591104/Anjou_One_Piece_Vivre_Card_-_015.png', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                                                    .setDescription('*__La Vivre Card de Anjoh__* est la **__#0015__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                    .setThumbnail('https://cdn.discordapp.com/attachments/766065475821240320/767361807244591104/Anjou_One_Piece_Vivre_Card_-_015.png')
                                                    .addField('*__Informations officielles :__*', "*-Il est __né le 1 janvier.__ \n \n-__Anjoh est un fan de pirates originaire d'East Blue qui était présent à l’exécution de GOL D Roger, il fut vraiment ému par ses dernières paroles.__*", true)
                                                    .setImage('https://cdn.discordapp.com/attachments/766065475821240320/767361807244591104/Anjou_One_Piece_Vivre_Card_-_015.png')
                                                    .setTimestamp()
                                                    .setFooter("Vivre Card de Anjoh | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/767361807244591104/Anjou_One_Piece_Vivre_Card_-_015.png");
                                                
                                                message.channel.send(exampleEmbed);
                                                    }

                                                    if(message.content == prefix + "monstar"){
                                                        const exampleEmbed = new Discord.MessageEmbed()
                                                        .setColor('#6b0000')
                                                        .setTitle('***__Vivre Card Monstar #0016__***')
                                                        .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                                                        .setAuthor('Monstar', 'https://static.wikia.nocookie.net/onepiece/images/0/0b/Monstar.jpg/revision/latest/smart/width/200/height/200?cb=20130105202825&path-prefix=fr', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                                                        .setDescription('*__La Vivre Card de Monstar__* est la **__#0016__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                        .setThumbnail('https://static.wikia.nocookie.net/onepiece/images/0/0b/Monstar.jpg/revision/latest/smart/width/200/height/200?cb=20130105202825&path-prefix=fr')
                                                        .addField('*__Informations officielles :__*', "*-Il est __né le 21 novembre.__ \n \n-__Monstar est un singe originaire de Dawn__ qui a __rejoint les pirates de Shanks le Roux en faisant la fête au bar de Makino.__ \n \n-Depuis, il est devenu ami avec l’équipage. __Certains spéculent sur le fait qu’il serait le singe que l'on a pu voir à Marine Ford sur le dos d'un membre de l'équipage de Shanks. Cette hypothèse est plus que probable,__ malheureusement la Vivre Card n'en dit pas plus.*", true)
                                                        .setImage('https://static.wikia.nocookie.net/onepiece/images/0/0b/Monstar.jpg/revision/latest/smart/width/200/height/200?cb=20130105202825&path-prefix=fr')
                                                        .setTimestamp()
                                                        .setFooter("Vivre Card de Monstar | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/0/0b/Monstar.jpg/revision/latest/smart/width/200/height/200?cb=20130105202825&path-prefix=fr");
                                                    
                                                    message.channel.send(exampleEmbed);
                                                        }

                                                        if(message.content == prefix + "shanks"){
                                                            const exampleEmbed = new Discord.MessageEmbed()
                                                            .setColor('#6b0000')
                                                            .setTitle('***__Vivre Card Shanks #0017__***')
                                                            .setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                                            .setAuthor('Shanks', 'https://i.ytimg.com/vi/8pH630v-kMk/maxresdefault.jpg', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                                            .setDescription('*__La Vivre Card de Shanks__* est la **__#0017__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                            .setThumbnail('https://i.ytimg.com/vi/8pH630v-kMk/maxresdefault.jpg')
                                                            .addField('*__Informations officielles :__*', "*-Il est __né le 9 mars__ et a __39 ans.__ Il __mesure 1m99,__ ce qui est une taille plutôt grande pour un homme. \n \n-__Il est originaire de West Blue__ et lorsqu'il était jeune, __il a fait partie de l’équipage de Roger.__ Lors de la __Bataille d'Ed War, il avait 12 ans.__ \n \n-Il a parcouru un long chemin, __ayant rivalisé avec Mihawk, devenant Yonko et ayant pu se tenir aux côtés de Barbe Blanche d'égal à égal.__ \n \n-__Shanks n’est pas considéré comme le capitaine mais comme le 'boss' de son équipage__. \n \n-__Shanks est incroyablement sympa et courtois, même avec ses adversaires.__ Il montre __un certain respect lorsque nécessaire.__ \n \n-Cela dépend de ses émotions, mais __Shanks fera la fête n’importe quand.__ \n \n-__Gryphon est le nom de son sabre, un sabre puissant capable de bloquer le poing magmatique d’Akainu avec 'l’élégance d’un lion'.__ \n \n-C'est confirmé, __Shanks maitrise les 3 types de Haki.__ \n \n-__Shanks fut l'un des premiers personnages déssinés par Oda, c'est le mentor de Luffy.__*", true)
                                                            .addField('*__Prime :__*', "**__4,048,900,000 Berrys__**", true)
                                                            .setImage('https://i.ytimg.com/vi/8pH630v-kMk/maxresdefault.jpg')
                                                            .setTimestamp()
                                                            .setFooter("Vivre Card de Shanks | " + message.author.username, "https://i.ytimg.com/vi/8pH630v-kMk/maxresdefault.jpg");
                                                        
                                                        message.channel.send(exampleEmbed);
                                                            }

                                                            if(message.content == prefix + "lucky roux"){
                                                                const exampleEmbed = new Discord.MessageEmbed()
                                                                .setColor('#6b0000')
                                                                .setTitle('***__Vivre Card Lucky Roux #0018__***')
                                                                .setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                                                .setAuthor('Lucky Roux', 'https://pbs.twimg.com/media/EUoEDD3XgAAofq-.jpg', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                                                .setDescription('*__La Vivre Card de Lucky Roux__* est la **__#0018__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                                .setThumbnail('https://pbs.twimg.com/media/EUoEDD3XgAAofq-.jpg')
                                                                .addField('*__Informations officielles :__*', "*-Il est __né le 6 juillet__ et a __35 ans.__ Il __mesure 2m41,__ ce qui est une taille immense pour un homme. \n \n-Il est originaire de __South Blue__ et fut l'__un des premiers membres des Pirates du Roux.__ \n \n-Même si __il est gros et rond,__ c’est __un combattant très agile et très rapide.__ \n \n-__Il est toujours de bonne humeur et prêt à s’amuser.__ \n \n-Malgré son attitude, __il peut devenir sérieux en un instant__ si le besoin s'en fait ressentir. __Il respecte Shanks et suit toujours ses ordres.__ \n \n-__Tout comme Shanks, il se soucie profondément de Luffy__ et __aime garder un oeil sur lui de temps en temps.__ \n \n-__Il est celui qui a acquis le Gomu Gomu no Mi sur un navire ennemi.__ \n \n-__C’est un gros buveur, qui parfois boit des tonneaux de bière entiers.__ \n \n-__Il est listé comme le 'combattant' des Pirates du Roux__ tout __comme Zoro chez les Mugiwara.__ \n \n-__Il possède__ bel et bien __une prime, mais son montant n'est pas révélé.__*", true)
                                                                .addField('*__Prime :__*', "**__? Berrys__**", true)
                                                                .setImage('https://pbs.twimg.com/media/EUoEDD3XgAAofq-.jpg')
                                                                .setTimestamp()
                                                                .setFooter("Vivre Card de Lucky Roux | " + message.author.username, "https://pbs.twimg.com/media/EUoEDD3XgAAofq-.jpg");
                                                            
                                                            message.channel.send(exampleEmbed);
                                                                }

                                                                if(message.content == prefix + "yasopp"){
                                                                    const exampleEmbed = new Discord.MessageEmbed()
                                                                    .setColor('#6b0000')
                                                                    .setTitle('***__Vivre Card Yasopp #0019__***')
                                                                    .setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                                                    .setAuthor('Yasopp', 'https://2.bp.blogspot.com/-wPOy-RSbGKY/WpFf5BddQAI/AAAAAAAAJUw/xriQCouh6NIBOvZRRJ-9fZOoGoLe68RcQCLcBGAs/s640/42324b4274283907f531189e65c369ee920e4e6e_hq.jpg', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                                                    .setDescription('*__La Vivre Card de Yasopp__* est la **__#0019__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                                    .setThumbnail('https://2.bp.blogspot.com/-wPOy-RSbGKY/WpFf5BddQAI/AAAAAAAAJUw/xriQCouh6NIBOvZRRJ-9fZOoGoLe68RcQCLcBGAs/s640/42324b4274283907f531189e65c369ee920e4e6e_hq.jpg')
                                                                    .addField('*__Informations officielles :__*', "*-Il est __né le 2 août__ et a __47 ans.__ Il __mesure 1m83,__ ce qui est une taille plutôt correcte pour un homme. \n \n-__Il est originaire d'East Blue.__ \n \n__Shanks s’est spécialement rendu au village de Sirop pour le recruter__ car __il avait eu vent des ses talents de sniper.__ \n \n-__Yasopp est un expert en tir de précision__ qui affirme qu’__il pourrait toucher l’antenne d’une fourmi à distance.__ \n \n-__Yasopp a quitté sa femme et est partie en mer sans jamais voir son fils.__ Cependant, __après les évènements de Dressrosa, il fut soulagé d'apprendre que son fils était quelqu'un de bien.__ \n \n-Dans l'Arc Post-Enies Lobby, __Oda voulait que Garp dise à Usopp__ que __son père était craint dans le Nouveau Monde__ par __son surnom 'Le Chasseur',__ mais __la scène fut supprimée suite à la limitation de pages.__ \n \n-__Il est listé comme le 'sniper' des Pirates du Roux__ tout __comme Usopp chez les Mugiwara.__ \n \n-__Il possède__ bel et bien __une prime, mais son montant n'est pas révélé.__*", true)
                                                                    .addField('*__Prime :__*', "**__? Berrys__**", true)
                                                                    .setImage('https://2.bp.blogspot.com/-wPOy-RSbGKY/WpFf5BddQAI/AAAAAAAAJUw/xriQCouh6NIBOvZRRJ-9fZOoGoLe68RcQCLcBGAs/s640/42324b4274283907f531189e65c369ee920e4e6e_hq.jpg')
                                                                    .setTimestamp()
                                                                    .setFooter("Vivre Card de Yasopp | " + message.author.username, "https://2.bp.blogspot.com/-wPOy-RSbGKY/WpFf5BddQAI/AAAAAAAAJUw/xriQCouh6NIBOvZRRJ-9fZOoGoLe68RcQCLcBGAs/s640/42324b4274283907f531189e65c369ee920e4e6e_hq.jpg");
                                                                
                                                                message.channel.send(exampleEmbed);
                                                                    }

                                                                    if(message.content == prefix + "beckman"){
                                                                        const exampleEmbed = new Discord.MessageEmbed()
                                                                        .setColor('#6b0000')
                                                                        .setTitle('***__Vivre Card BEN Beckman #0020__***')
                                                                        .setURL('https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                                                        .setAuthor('BEN Beckman', 'https://pbs.twimg.com/media/CyXx7zNXcAEyGjA.jpg', 'https://thelibraryofohara.com/2019/03/28/vivre-card-databook-vol-1-all-the-new-information-remake/')
                                                                        .setDescription('*__La Vivre Card de Beckman__* est la **__#0020__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                                        .setThumbnail('https://pbs.twimg.com/media/CyXx7zNXcAEyGjA.jpg')
                                                                        .addField('*__Informations officielles :__*', "*-Il est __né le 9 novembre__ et a __50 ans.__ Il __mesure 2m06,__ ce qui est une taille très grande pour un homme. \n \n-__Originaire de North Blue, il a au cours de ses nombreux voyages acquis énormément d’expérience. Il possède une intelligence incroyablement avancée ainsi que de grandes capacités de réflexion__ jusqu'au point d'être __le personnage le plus intelligent de la 'Saga East Blue'.__ \n \n-__Il est très puissant en combat physique__ et sa carte dit même qu'__il est comparable à Shanks. Son existence elle même est redoutée par les plus grands noms du Nouveau Monde !__ Cependant, __on ne sait pas à quoi se réfère le mot 'existence'.__ \n \n-__C'est un homme calme et digne__ qui __assure la sûreté de l'équipage lorsque Shanks est imprudent.__ \n \n-__Fumer l'aide à rester calme et détendu lors des batailles.__ \n \n-__C’est le vice-capitaine du navire et c'est pour cela qu'il est celui qui comprend le mieux Shanks.__ \n \n-__Il possède__ bel et bien __une prime,__ mais __son montant n'est pas révélé.__*", true)
                                                                        .addField('*__Prime :__*', "**__? Berrys__**", true)
                                                                        .setImage('https://pbs.twimg.com/media/CyXx7zNXcAEyGjA.jpg')
                                                                        .setTimestamp()
                                                                        .setFooter("Vivre Card de BEN Beckman | " + message.author.username, "https://pbs.twimg.com/media/CyXx7zNXcAEyGjA.jpg");
                                                                    
                                                                    message.channel.send(exampleEmbed);
                                                                        }

                                                                        if(message.content == prefix + "itoo"){
                                                                            const exampleEmbed = new Discord.MessageEmbed()
                                                                            .setColor('#00ff11')
                                                                            .setTitle('***__Vivre Card MIKIO Itoo #0021__***')
                                                                            .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                                                                            .setAuthor('MIKIO Itoo', 'https://cdn.discordapp.com/attachments/766065475821240320/767800927570362428/MIKIO_Itoo_One_Piece_Vivre_Card_-_021.png', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                                                                            .setDescription('*__La Vivre Card de Itoo__* est la **__#0021__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                                            .setThumbnail('https://cdn.discordapp.com/attachments/766065475821240320/767800927570362428/MIKIO_Itoo_One_Piece_Vivre_Card_-_021.png')
                                                                            .addField('*__Informations officielles :__*', "*-Il est __né le 26 mars.__ \n \n-__Originaire d'East Blue, ce personnage porte le nom d'un ancien collègue d’Oda__ ayant lui aussi __travaillé en tant qu'assistant sur le manga 'Rurouni Kenshin'.__*", true)
                                                                            .addField('*__Prime :__*', "**__1,000,000 Berrys__**", true)
                                                                            .setImage('https://cdn.discordapp.com/attachments/766065475821240320/767800927570362428/MIKIO_Itoo_One_Piece_Vivre_Card_-_021.png')
                                                                            .setTimestamp()
                                                                            .setFooter("Vivre Card de MIKIO Itoo | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/767800927570362428/MIKIO_Itoo_One_Piece_Vivre_Card_-_021.png");
                                                                        
                                                                        message.channel.send(exampleEmbed);
                                                                            }

if(message.content == prefix + "makino"){
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#00ffff')
.setTitle('***__Vivre Card Makino #0022__***')
.setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
.setAuthor('Makino', 'https://vignette.wikia.nocookie.net/onepiece/images/4/40/Makino_17_ans_Anime.png/revision/latest?cb=20190408112525&path-prefix=fr', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
.setDescription('*__La Vivre Card de Makino__* est la **__#0022__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
.setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/4/40/Makino_17_ans_Anime.png/revision/latest?cb=20190408112525&path-prefix=fr')
.addField('*__Informations officielles :__*', "*-Elle est __née le 23 février__ et a __31 ans.__ Elle mesure __1m66__ ce qui est une taille assez grande pour une femme. \n \n-Originaire de Dawn, __Makino s'occupe très bien des enfants.__ \n \n-__Ses aliments préférés__ sont les __jus et les gâteaux aux fruits.__*", true)
.addField('*__Titre :__*', "**__Tenante du 'Bar Partys'__**", true)
.setImage('https://vignette.wikia.nocookie.net/onepiece/images/4/40/Makino_17_ans_Anime.png/revision/latest?cb=20190408112525&path-prefix=fr')
.setTimestamp()
.setFooter("Vivre Card de Makino | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/4/40/Makino_17_ans_Anime.png/revision/latest?cb=20190408112525&path-prefix=fr");
                                                                            
message.channel.send(exampleEmbed);
    }

if(message.content == prefix + "higuma"){
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#00ff11')
.setTitle('***__Vivre Card Higuma #0023__***')
.setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
.setAuthor('Higuma', 'https://vignette.wikia.nocookie.net/onepiece/images/7/75/Higuma_Portrait.png/revision/latest?cb=20170901191108&path-prefix=fr', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
.setDescription("*__La Vivre Card de Higuma__* est la **__#0023__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
.setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/7/75/Higuma_Portrait.png/revision/latest?cb=20170901191108&path-prefix=fr')
.addField('*__Informations officielles :__*', "*-Il est __né le 18 novembre__ et est décédé à l'âge de __46 ans.__ Il mesurait __1m90__ ce qui était une taille plutôt grande pour un homme. \n \n-Originaire d'East Blue, les aliments préférés d'Higuma étaient le __sake, les herbes sauvages et la viande d'ours.__*", true)
.addField('*__Prime :__*', "**__~~8,000,000 Berrys~~__**", true)
.setImage('https://vignette.wikia.nocookie.net/onepiece/images/7/75/Higuma_Portrait.png/revision/latest?cb=20170901191108&path-prefix=fr')
.setTimestamp()
.setFooter("Vivre Card de Higuma | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/7/75/Higuma_Portrait.png/revision/latest?cb=20170901191108&path-prefix=fr");
                                                                                    
        message.channel.send(exampleEmbed);
            }

if(message.content == prefix + "gyoru"){
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#00ffff')
.setTitle('***__Vivre Card Gyoru #0024__***')
.setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
.setAuthor('Gyoru', 'https://vignette.wikia.nocookie.net/onepiece/images/0/03/Gyoru_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20131216224540&path-prefix=fr', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
.setDescription('*__La Vivre Card de Gyoru__* est la **__#0024__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
.setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/0/03/Gyoru_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20131216224540&path-prefix=fr')
.addField('*__Informations officielles :__*', "*-Il est __né le 7 mars.__ \n \n-Originaire de Dawn, __Gyoru est le poissonnier du village de Fuchsia.__*", true)
.addField('*__Titre :__*', "**__Poissonnier de Fuchsia__**", true)
.setImage('https://vignette.wikia.nocookie.net/onepiece/images/0/03/Gyoru_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20131216224540&path-prefix=fr')
.setTimestamp()
.setFooter("Vivre Card de Gyoru | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/0/03/Gyoru_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20131216224540&path-prefix=fr");
                                                                                            
message.channel.send(exampleEmbed);
}

if(message.content == prefix + "chiken"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setTitle('***__Vivre Card Chiken #0025__***')
    .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
    .setAuthor('Chiken', 'https://vignette.wikia.nocookie.net/onepiece/images/3/3e/Chiken_Anime_Infobox.png/revision/latest?cb=20190124095452&path-prefix=fr', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
    .setDescription('*__La Vivre Card de Chiken__* est la **__#0025__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
    .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/3/3e/Chiken_Anime_Infobox.png/revision/latest?cb=20190124095452&path-prefix=fr')
    .addField('*__Informations officielles :__*', "*-Elle est __née le 8 février.__ \n \n-Originaire de Dawn, __Chiken est la femme de Gyoru. Elle l'aide à tenir la boutique.__*", true)
    .setImage('https://vignette.wikia.nocookie.net/onepiece/images/3/3e/Chiken_Anime_Infobox.png/revision/latest?cb=20190124095452&path-prefix=fr')
    .setTimestamp()
    .setFooter("Vivre Card de Chiken | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/3/3e/Chiken_Anime_Infobox.png/revision/latest?cb=20190124095452&path-prefix=fr");
                                                                                                
    message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "slap"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#00ffff')
        .setTitle('***__Vivre Card HOOP Chiken #0026__***')
        .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
        .setAuthor('HOOP Slap', 'https://pbs.twimg.com/media/DmaQtNRW4AAosgs.jpg', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
        .setDescription('*__La Vivre Card de Slap__* est la **__#0026__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
        .setThumbnail('https://pbs.twimg.com/media/DmaQtNRW4AAosgs.jpg')
        .addField('*__Informations officielles :__*', "*-Il est __né le 28 février.__ \n \n-Originaire de Dawn, __il n'a même pas eu droit à une carte.__ De ce fait, __aucune nouvelle information à son sujet n'a été révélée.__*", true)
        .addField("*__Titre :__*", "**__Maire de Fuchsia__**", true)
        .setImage('https://pbs.twimg.com/media/DmaQtNRW4AAosgs.jpg')
        .setTimestamp()
        .setFooter("Vivre Card de HOOP Slap | " + message.author.username, "https://pbs.twimg.com/media/DmaQtNRW4AAosgs.jpg");
                                                                                                    
        message.channel.send(exampleEmbed);
        }

if(message.content == prefix + "monstre de la baie"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#bbb9b9')
    .setTitle('***__Vivre Card Monstre de la Baie #0027__***')
    .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
    .setAuthor('Monstre de la Baie', 'https://vignette.wikia.nocookie.net/onepiece/images/4/41/Monstre_de_la_Baie_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20130401173850&path-prefix=fr', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
    .setDescription('*__La Vivre Card du Monstre de la Baie__* est la **__#0027__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
    .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/4/41/Monstre_de_la_Baie_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20130401173850&path-prefix=fr')
    .addField('*__Informations officielles :__*', "*-Il est __né le 14 septembre.__ \n \n-Né dans les eaux d'East Blue, __c'est un 'Roi des Mers' de petite taille.__ \n \n-Il est celui qui __a avalé Higuma__ ainsi que __le bras gauche de Shanks.__*", true)
    .addField("*__Espèce :__*", "**__Roi des Mers__**", true)
    .setImage('https://vignette.wikia.nocookie.net/onepiece/images/4/41/Monstre_de_la_Baie_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20130401173850&path-prefix=fr')
    .setTimestamp()
    .setFooter("Vivre Card du Monstre de la Baie | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/4/41/Monstre_de_la_Baie_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20130401173850&path-prefix=fr");
                                                                                                        
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "shells town"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#0507c0")
    .setTitle("***__Classeur Vivre Cards Shells Town__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setAuthor("Classeur Vivre Cards Shells Town", "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setDescription("*__Le Classeur de Shells Town regroupe toutes les Vivre Cards disponibles de l'Arc Shells Town (15).__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .addField("*__Vivre Cards Shells Town disponibles :__*", "**__-Koby #0028 \n \n-Alvida #0029 \n \n-Heppoko #0030 \n \n-Peppoko #0031 \n \n-Poppoko #0032 \n \n-Rika #0033 \n \n-Hermep #0034 \n \n-Soro #0035 \n \n-Ririka #0036 \n \n-Morgan #0037 \n \n-Rokkaku #0038 \n \n-Ukkari #0039 \n \n-Kuina #0040 \n \n-Kôshirô #0041 \n \n-Ripper #0042__**")
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .setTimestamp()
    .setFooter("Classeur Vivre Cards Shells Town | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "koby"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0088fe')
    .setTitle('***__Vivre Card Koby #0028__***')
    .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
    .setAuthor('Koby', 'https://i.pinimg.com/originals/85/bb/8c/85bb8cdb69c3cf890aa3c3fc56d2315e.jpg', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
    .setDescription('*__La Vivre Card de Koby__* est la **__#0028__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
    .setThumbnail('https://i.pinimg.com/originals/85/bb/8c/85bb8cdb69c3cf890aa3c3fc56d2315e.jpg')
    .addField('*__Informations officielles :__*', "*-Il est __né le 13 mai__ et a __18 ans.__ Il __mesure 1m67,__ ce qui est une taille plutôt petite pour un homme. \n \n-Originaire d'East Blue, __'Koby' est le bon orthographe.__ \n \n-__Ses plats préférés__ sont __les boulettes de riz de Rika__ et __les pommes de terre écrasées au beurre.__ \n \n-__Koby maitrise le Haki de l'Observation.__*", true)
    .addField('*__Grade :__*', "**__~~Première Classe~~ \n \nColonel__**", true)
    .setImage('https://i.pinimg.com/originals/85/bb/8c/85bb8cdb69c3cf890aa3c3fc56d2315e.jpg')
    .setTimestamp()
    .setFooter("Vivre Card de Koby | " + message.author.username, "https://i.pinimg.com/originals/85/bb/8c/85bb8cdb69c3cf890aa3c3fc56d2315e.jpg");

message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "alvida"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#543900')
        .setTitle('***__Vivre Card Alvida #0029__***')
        .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
        .setAuthor('Alvida', 'https://www.nautiljon.com/images/description/00/42/1402936042782_image.jpg', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
        .setDescription('*__La Vivre Card de Alvida__* est la **__#0029__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
        .setThumbnail('https://www.nautiljon.com/images/description/00/42/1402936042782_image.jpg')
        .addField('*__Informations officielles :__*', "*-Elle est __née le 14 mars__ et a __27 ans.__ Elle __mesure 1m98,__ ce qui est une taille très grande pour une femme. \n \n-Originaire d'East Blue, __Alvida est née le Jour National de la Beauté.__ \n \n-__Ses aliments préférés__ sont __des baies bonnes pour la peau.__*", true)
        .addField('*__Prime :__*', "**__5,000,000 Berrys__**", true)
        .addField("*__Fruit du Démon :__*", "**__Sube Sube no Mi__** *__(Fruit du Glisse-Glisse)__*")
        .setImage('https://www.nautiljon.com/images/description/00/42/1402936042782_image.jpg')
        .setTimestamp()
        .setFooter("Vivre Card de Alvida | " + message.author.username, "https://www.nautiljon.com/images/description/00/42/1402936042782_image.jpg");
    
    message.channel.send(exampleEmbed);
        }

        if(message.content == prefix + "heppoko"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#543900')
            .setTitle('***__Vivre Card Heppoko #0030__***')
            .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
            .setAuthor('Heppoko', 'https://rei.animecharactersdatabase.com/uploads/chars/5457-1923704743.jpg', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
            .setDescription('*__La Vivre Card de Heppoko__* est la **__#0030__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
            .setThumbnail('https://rei.animecharactersdatabase.com/uploads/chars/5457-1923704743.jpg')
            .addField('*__Informations officielles :__*', "*-Il est __né le 2 septembre.__ \n \n-En plus d'être __un ancien subordonné d'Alvida, il est triplet avec Peppoko et Poppoko.__*", true)
            .setImage('https://rei.animecharactersdatabase.com/uploads/chars/5457-1923704743.jpg')
            .setTimestamp()
            .setFooter("Vivre Card de Heppoko | " + message.author.username, "https://rei.animecharactersdatabase.com/uploads/chars/5457-1923704743.jpg");
        
        message.channel.send(exampleEmbed);
            }

            if(message.content == prefix + "peppoko"){
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#543900')
                .setTitle('***__Vivre Card Peppoko #0031__***')
                .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                .setAuthor('Peppoko', 'https://vignette.wikia.nocookie.net/onepiece/images/e/ed/Peppoko.png/revision/latest/scale-to-width-down/340?cb=20150220161151&path-prefix=fr', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                .setDescription('*__La Vivre Card de Peppoko__* est la **__#0031__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/e/ed/Peppoko.png/revision/latest/scale-to-width-down/340?cb=20150220161151&path-prefix=fr')
                .addField('*__Informations officielles :__*', "*-Il est __né le 2 septembre.__ \n \n-En plus d'être __un ancien subordonné d'Alvida, il est triplet avec Heppoko et Poppoko.__*", true)
                .setImage('https://vignette.wikia.nocookie.net/onepiece/images/e/ed/Peppoko.png/revision/latest/scale-to-width-down/340?cb=20150220161151&path-prefix=fr')
                .setTimestamp()
                .setFooter("Vivre Card de Peppoko | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/e/ed/Peppoko.png/revision/latest/scale-to-width-down/340?cb=20150220161151&path-prefix=fr");
            
            message.channel.send(exampleEmbed);
                }

                if(message.content == prefix + "poppoko"){
                    const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#543900')
                    .setTitle('***__Vivre Card Poppoko #0032__***')
                    .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                    .setAuthor('Poppoko', 'https://rei.animecharactersdatabase.com/uploads/chars/5457-873531605.jpg', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                    .setDescription('*__La Vivre Card de Poppoko__* est la **__#0032__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                    .setThumbnail('https://rei.animecharactersdatabase.com/uploads/chars/5457-873531605.jpg')
                    .addField('*__Informations officielles :__*', "*-Il est __né le 2 septembre.__ \n \n-En plus d'être __un ancien subordonné d'Alvida, il est triplet avec Heppoko et Peppoko.__*", true)
                    .setImage('https://rei.animecharactersdatabase.com/uploads/chars/5457-873531605.jpg')
                    .setTimestamp()
                    .setFooter("Vivre Card de Poppoko | " + message.author.username, "https://rei.animecharactersdatabase.com/uploads/chars/5457-873531605.jpg");
                
                message.channel.send(exampleEmbed);
                    }

                    if(message.content == prefix + "rika"){
                        const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#00ffff')
                        .setTitle('***__Vivre Card Rika #0033__***')
                        .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                        .setAuthor('Rika', 'https://static.wikia.nocookie.net/onepiece/images/9/94/Rika.jpg/revision/latest?cb=20110211002746&path-prefix=de', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                        .setDescription('*__La Vivre Card de Rika__* est la **__#0033__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                        .setThumbnail('https://static.wikia.nocookie.net/onepiece/images/9/94/Rika.jpg/revision/latest?cb=20110211002746&path-prefix=de')
                        .addField('*__Informations officielles :__*', "*-Elle est __née le 18 juin.__ \n \n-Originaire de Shells Town, c'est la fille qui __a nourri Zoro pendant qu'il était emprisonné__ car __ce dernier lui avait sauvé la vie.__*", true)
                        .setImage('https://static.wikia.nocookie.net/onepiece/images/9/94/Rika.jpg/revision/latest?cb=20110211002746&path-prefix=de')
                        .setTimestamp()
                        .setFooter("Vivre Card de Rika | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/9/94/Rika.jpg/revision/latest?cb=20110211002746&path-prefix=de");
                    
                    message.channel.send(exampleEmbed);
                        }

                        if(message.content == prefix + "hermep"){
                            const exampleEmbed = new Discord.MessageEmbed()
                            .setColor('#0088fe')
                            .setTitle('***__Vivre Card Hermep #0034__***')
                            .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                            .setAuthor('Hermep', 'https://vignette.wikia.nocookie.net/onepiece/images/8/83/Hermep_Kukris_Post_Ellipse.png/revision/latest/scale-to-width-down/340?cb=20190411063853&path-prefix=fr', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                            .setDescription('*__La Vivre Card de Hermep__* est la **__#0034__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                            .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/8/83/Hermep_Kukris_Post_Ellipse.png/revision/latest/scale-to-width-down/340?cb=20190411063853&path-prefix=fr')
                            .addField('*__Informations officielles :__*', "*-Il est __né le 16 juillet__ et a __22 ans.__ Il mesure __1m79__ ce qui est une taille correcte pour un homme.\n \n-Originaire de Shells Town, __les armes qu'il manie sont des 'Khukuri'__ qui __sont conçues pour couper, frapper mais aussi poignarder.__ \n \n-__Ses plats préférés__ sont __la viande de luxe__ et __le caviar.__*", true)
                            .addField("*__Grade :__*", "**__~~Apprenti~~ \n \n~~Sergent~~ \n \nLieutenant-Commandant__**", true)
                            .setImage('https://vignette.wikia.nocookie.net/onepiece/images/8/83/Hermep_Kukris_Post_Ellipse.png/revision/latest/scale-to-width-down/340?cb=20190411063853&path-prefix=fr')
                            .setTimestamp()
                            .setFooter("Vivre Card de Hermep | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/8/83/Hermep_Kukris_Post_Ellipse.png/revision/latest/scale-to-width-down/340?cb=20190411063853&path-prefix=fr");
                        
                        message.channel.send(exampleEmbed);
                            }

                            if(message.content == prefix + "soro"){
                                const exampleEmbed = new Discord.MessageEmbed()
                                .setColor('#bbb9b9')
                                .setTitle('***__Vivre Card Soro #0035__***')
                                .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                                .setAuthor('Soro', 'https://static.wikia.nocookie.net/onepiece/images/2/22/Soro_Anime_Infobox.png/revision/latest?cb=20130123225106', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                                .setDescription('*__La Vivre Card de Soro__* est la **__#0035__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                .setThumbnail('https://static.wikia.nocookie.net/onepiece/images/2/22/Soro_Anime_Infobox.png/revision/latest?cb=20130123225106')
                                .addField('*__Informations officielles :__*', "*-Il est __né le 11 novembre.__ \n \n-Originaire d'East Blue, __c'est le loup que Zoro a tué pour sauver la vie de Rika.__*", true)
                                .setImage('https://static.wikia.nocookie.net/onepiece/images/2/22/Soro_Anime_Infobox.png/revision/latest?cb=20130123225106')
                                .setTimestamp()
                                .setFooter("Vivre Card de Soro | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/2/22/Soro_Anime_Infobox.png/revision/latest?cb=20130123225106");
                            
                            message.channel.send(exampleEmbed);
                                }

                                if(message.content == prefix + "ririka"){
                                    const exampleEmbed = new Discord.MessageEmbed()
                                    .setColor('#00ffff')
                                    .setTitle('***__Vivre Card Ririka #0036__***')
                                    .setURL('https://onepiece.fandom.com/fr/wiki/Ririka')
                                    .setAuthor('Ririka', 'https://vignette.wikia.nocookie.net/onepiece/images/b/b2/Ririka_potrait.jpeg/revision/latest/scale-to-width-down/120?cb=20140616102911&path-prefix=fr', 'https://onepiece.fandom.com/fr/wiki/Ririka')
                                    .setDescription('*__La Vivre Card de Ririka__* est la **__#0036__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                    .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/b/b2/Ririka_potrait.jpeg/revision/latest/scale-to-width-down/120?cb=20140616102911&path-prefix=fr')
                                    .addField('*__Informations officielles :__*', "*-Elle est __née le 15 novembre.__ \n \n-Originaire de Shells Town, __c'est la tenante du 'Bar Shells Town'.__*", true)
                                    .addField("*__Titre :__*", "**__Tenante du 'Bar Shells Town'__**", true)
                                    .setImage('https://vignette.wikia.nocookie.net/onepiece/images/b/b2/Ririka_potrait.jpeg/revision/latest/scale-to-width-down/120?cb=20140616102911&path-prefix=fr')
                                    .setTimestamp()
                                    .setFooter("Vivre Card de Ririka | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/b/b2/Ririka_potrait.jpeg/revision/latest/scale-to-width-down/120?cb=20140616102911&path-prefix=fr");
                                
                                message.channel.send(exampleEmbed);
                                    }

                                    if(message.content == prefix + "morgan"){
                                        const exampleEmbed = new Discord.MessageEmbed()
                                        .setColor('#00ff11')
                                        .setTitle('***__Vivre Card Morgan #0037__***')
                                        .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                                        .setAuthor('Morgan', 'https://api.duniagames.co.id/api/content/upload/file/14180898091568284045.jpg', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
                                        .setDescription('*__La Vivre Card de Morgan__* est la **__#0037__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                        .setThumbnail('https://api.duniagames.co.id/api/content/upload/file/14180898091568284045.jpg')
                                        .addField('*__Informations officielles :__*', "*-Il est __né le 13 avril__ et a __44 ans.__ Il mesure __2m85__ ce qui est une taille immense pour un homme.\n \n-Originaire de Shells Town, __ses plats préférés__ sont issus de __la cuisine gastronomique.__*", true)
                                        .addField("*__Grade :__*", "**__~~Colonel~~__**", true)
                                        .setImage('https://api.duniagames.co.id/api/content/upload/file/14180898091568284045.jpg')
                                        .setTimestamp()
                                        .setFooter("Vivre Card de Morgan | " + message.author.username, "https://api.duniagames.co.id/api/content/upload/file/14180898091568284045.jpg");
                                    
                                    message.channel.send(exampleEmbed);
                                        }

                                        if(message.content == prefix + "rokkaku"){
                                            const exampleEmbed = new Discord.MessageEmbed()
                                            .setColor('#0088fe')
                                            .setTitle('***__Vivre Card Rokkaku #0038__***')
                                            .setURL('https://onepiece.fandom.com/fr/wiki/Rokkaku')
                                            .setAuthor('Rokkaku', 'https://i.skyrock.net/9358/73649358/pics/2915333237_1.jpg', 'https://onepiece.fandom.com/fr/wiki/Rokkaku')
                                            .setDescription('*__La Vivre Card de Rokkaku__* est la **__#0038__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                            .setThumbnail('https://i.skyrock.net/9358/73649358/pics/2915333237_1.jpg')
                                            .addField('*__Informations officielles :__*', "*-Il est __né le 19 juin.__ \n \n-__C'est le marine qui a désobéi à Morgan lorsque celui-ci lui demandait de tuer Rika.__ \n \n-Après l'ellipse, on le revoit ce qui signifie qu'__il a survécu au coup de hache de Morgan.__*", true)
                                            .addField("*__Grade :__*", "**__Vice-Lieutenant__**", true)
                                            .setImage('https://i.skyrock.net/9358/73649358/pics/2915333237_1.jpg')
                                            .setTimestamp()
                                            .setFooter("Vivre Card de Rokkaku | " + message.author.username, "https://i.skyrock.net/9358/73649358/pics/2915333237_1.jpg");
                                        
                                        message.channel.send(exampleEmbed);
                                            }

                                            if(message.content == prefix + "ukkari"){
                                                const exampleEmbed = new Discord.MessageEmbed()
                                                .setColor('#0088fe')
                                                .setTitle('***__Vivre Card Ukkari #0039__***')
                                                .setURL('https://onepiece.fandom.com/fr/wiki/Ukkari')
                                                .setAuthor('Ukkari', 'https://vignette.wikia.nocookie.net/onepiece/images/a/ad/Ukkari_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20190502122028&path-prefix=fr', 'https://onepiece.fandom.com/fr/wiki/Ukkari')
                                                .setDescription('*__La Vivre Card de Ukkari__* est la **__#0039__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/a/ad/Ukkari_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20190502122028&path-prefix=fr')
                                                .addField('*__Informations officielles :__*', "*-Il est __né le 17 février.__*", true)
                                                .setImage('https://vignette.wikia.nocookie.net/onepiece/images/a/ad/Ukkari_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20190502122028&path-prefix=fr')
                                                .setTimestamp()
                                                .setFooter("Vivre Card de Ukkari | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/a/ad/Ukkari_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20190502122028&path-prefix=fr");
                                            
                                            message.channel.send(exampleEmbed);
                                                }

if(message.content == prefix + "kuina"){
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#00ffff')
.setTitle('***__Vivre Card Kuina #0040__***')
.setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
.setAuthor('Kuina', 'https://img.over-blog-kiwi.com/2/62/96/56/20180208/ob_e54290_zoro-flashback-bong-voyage.png', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
.setDescription('*__La Vivre Card de Kuina__* est la **__#0040__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
.setThumbnail('https://img.over-blog-kiwi.com/2/62/96/56/20180208/ob_e54290_zoro-flashback-bong-voyage.png')
.addField('*__Informations officielles :__*', "*-Elle est __née le 17 septembre__ et est décédée à l'âge de __11 ans.__ Elle mesurait __1m50__ ce qui était une taille moyenne pour une enfant.\n \n-Originaire du village Shimotsuki, __Kuina est confirmée comme étant bel et bien morte.__ Cepandant, dans le 'Green Databook', __Sabo était lui aussi marqué comme mort.__ Il est alors plus probable que __ce soit juste son statut tel que nous le connaissons actuellement.__ \n \n-En plus de cela, __son âge nous permet enfin de découvrir à quel moment le flashback de Zoro a eu lieu,__ ce qui fut __un mystère pendant 21 ans !__ C’était __il y à 11 ans,__ quand __Kuina avait 11 ans__ et __Zoro 10.__ \n \n-__Ses aliments préférés__ étaient __le lait et les oeufs au plat.__*", true)
.addField("*__Titre :__*", "**__~~Maître du Dojo Isshin~~__**", true)
.setImage('https://img.over-blog-kiwi.com/2/62/96/56/20180208/ob_e54290_zoro-flashback-bong-voyage.png')
.setTimestamp()
.setFooter("Vivre Card de Kuina | " + message.author.username, "https://img.over-blog-kiwi.com/2/62/96/56/20180208/ob_e54290_zoro-flashback-bong-voyage.png");
                                                
message.channel.send(exampleEmbed);
}

if(message.content == prefix + "kôshirô"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#00ffff')
    .setTitle('***__Vivre Card Kôshirô #0041__***')
    .setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
    .setAuthor('Kôshirô', 'https://vignette.wikia.nocookie.net/onepiece/images/a/a6/K%C3%B4shir%C3%B4_Anime_Pre_Ellipse_Infobox.png/revision/latest?cb=20200525200035&path-prefix=fr', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
    .setDescription('*__La Vivre Card de Kôshirô__* est la **__#0041__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
    .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/a/a6/K%C3%B4shir%C3%B4_Anime_Pre_Ellipse_Infobox.png/revision/latest?cb=20200525200035&path-prefix=fr')
    .addField('*__Informations officielles :__*', "*-Il est __né le 4 mai__ et a __51 ans.__ Il mesure __1m85__ ce qui est une taille correcte pour un homme.\n \n-Etrangement, __il n'est pas originaire du village Shimotsuki, seulement de 'quelque part sur East Blue'.__ \n \n-__Sa nourriture préférée__ est __la pastèque,__ surtout quand __il en mange prêt de son Dojo.__*", true)
    .addField("*__Titre :__*", "**__Professeur du Dojo Isshin__**", true)
    .setImage('https://vignette.wikia.nocookie.net/onepiece/images/a/a6/K%C3%B4shir%C3%B4_Anime_Pre_Ellipse_Infobox.png/revision/latest?cb=20200525200035&path-prefix=fr')
    .setTimestamp()
    .setFooter("Vivre Card de Kôshirô | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/a/a6/K%C3%B4shir%C3%B4_Anime_Pre_Ellipse_Infobox.png/revision/latest?cb=20200525200035&path-prefix=fr");
                                                    
    message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "ripper"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0088fe')
        .setTitle('***__Vivre Card Ripper #0042__***')
        .setURL('https://onepiece.fandom.com/fr/wiki/Ripper')
        .setAuthor('Ripper', 'https://static.wikia.nocookie.net/onepiece/images/4/48/Ripper_in_Shellstown.jpg/revision/latest?cb=20120708205024&path-prefix=de', 'https://onepiece.fandom.com/fr/wiki/Ripper')
        .setDescription('*__La Vivre Card de Ripper__* est la **__#0042__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
        .setThumbnail('https://static.wikia.nocookie.net/onepiece/images/4/48/Ripper_in_Shellstown.jpg/revision/latest?cb=20120708205024&path-prefix=de')
        .addField('*__Informations officielles :__*', "*-Il est __né le 13 juin.__ \n \n-Après la défaite de Morgan, __c'est lui qui reprend la base de Shells Town en main.__ C'est aussi __une personne dévouée et compréhensive.__ \n \n-Il parait que __sa 'Justice' est unique au sein de la Marine__ puisqu'__il est bloqué entre la 'Justice Absolue' et la 'Justice Morale'.__*", true)
        .addField('*__Grade :__*', "**__Commandant__**", true)
        .setImage('https://static.wikia.nocookie.net/onepiece/images/4/48/Ripper_in_Shellstown.jpg/revision/latest?cb=20120708205024&path-prefix=de')
        .setTimestamp()
        .setFooter("Vivre Card de Ripper | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/4/48/Ripper_in_Shellstown.jpg/revision/latest?cb=20120708205024&path-prefix=de");
    
    message.channel.send(exampleEmbed);
        }

        if(message.content == prefix + "orange town"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor("#da8a01")
            .setTitle("***__Classeur Vivre Cards Orange Town__***")
            .setURL("https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
            .setAuthor("Classeur Vivre Cards Orange Town", "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
            .setDescription("*__Le Classeur de Orange Town regroupe toutes les Vivre Cards disponibles de l'Arc Orange Town (15).__*")
            .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
            .addField("*__Vivre Cards Orange Town disponibles :__*", "**__-Kaicho Pinky #0043 \n \n-Funambules Brothers #0044 \n \n-Freaky Domingos #0045 \n \n-Baggy #0046 \n \n-Domo-kun #0047 \n \n-Équilibristes #0048 \n \n-Morge #0049 \n \n-Richie #0050 \n \n-Chouchou #0051 \n \n-Buddle #0052 \n \n-Hokker #0053 \n \n-Polo #0054 \n \n-Cabaji #0055 \n \n-Cocofox #0056 \n \n-Gaimon #0057__**")
            .setImage("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
            .setTimestamp()
            .setFooter("Classeur Vivre Cards Orange Town | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr");
        
            message.channel.send(exampleEmbed);
        }

        if(message.content == prefix + "kaicho pinky"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor("#e276db")
            .setTitle("***__Vivre Card Kaicho Pinky #0043__***")
            .setURL("https://onepiece.fandom.com/fr/wiki/Kaicho_Pinky")
            .setAuthor("Kaicho Pinky", "https://cdn.discordapp.com/attachments/766065475821240320/768498967792844840/unknown.png", "https://onepiece.fandom.com/fr/wiki/Kaicho_Pinky")
            .setDescription("*__La Vivre Card du Kaicho Pinky__* est la **__#0043__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
            .setThumbnail("https://cdn.discordapp.com/attachments/766065475821240320/768498967792844840/unknown.png")
            .addField("*__Informations officielles :__*", "*-Il est __né le 29 septembre.__ \n \n-__Les 'Kaicho Pinky'__ sont des __oiseaux géants de couleur rose.__ \n \n-C'est d'ailleurs __un oiseau de cette espèce qui a amené Luffy sur Orange Town.__*", true)
            .addField("*__Espèce :__*", "**__Kaicho Pinky__**", true)
            .setImage("https://cdn.discordapp.com/attachments/766065475821240320/768498967792844840/unknown.png")
            .setTimestamp()
            .setFooter("Vivre Card du Kaicho Pinky | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/768498967792844840/unknown.png");
        
            message.channel.send(exampleEmbed);
        }

        if(message.content == prefix + "funambules brothers"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor("#773e93")
            .setTitle("***__Vivre Card Funambules Brothers #0044__***")
            .setURL("https://onepiece.fandom.com/fr/wiki/Funambules_Brothers")
            .setAuthor("Funambules Brothers", "https://vignette.wikia.nocookie.net/onepiece/images/6/6d/Funambules_Brothers_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20180326152534&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Funambules_Brothers")
            .setDescription("*__La Vivre Card des Funambules Brothers__* est la **__#0044__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
            .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/6/6d/Funambules_Brothers_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20180326152534&path-prefix=fr")
            .addField("*__Informations officielles :__*", "*-Ils sont __nés le 25 février.__ \n \n-Les __Funambules Brothers__ sont les __3 pirates de l'équipage de Baggy__ qui __se sont fait dépouiller par Nami au début de l'arc.__*", true)
            .setImage("https://vignette.wikia.nocookie.net/onepiece/images/6/6d/Funambules_Brothers_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20180326152534&path-prefix=fr")
            .setTimestamp()
            .setFooter("Vivre Card des Funambules Brothers | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/6/6d/Funambules_Brothers_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20180326152534&path-prefix=fr");
        
            message.channel.send(exampleEmbed);
        }

        if(message.content == prefix + "freaky domingos"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor("#773e93")
            .setTitle("***__Vivre Card Freaky Domingos #0045__***")
            .setURL("https://onepiece.fandom.com/fr/wiki/Freaky_Domingos")
            .setAuthor("Freaky Domingos", "https://vignette.wikia.nocookie.net/onepiece/images/3/36/Anime_Superhuman_Domingos_Infobox.png/revision/latest/scale-to-width-down/300?cb=20130504162531&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Freaky_Domingos")
            .setDescription("*__La Vivre Card des Freaky Domingos__* est la **__#0045__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
            .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/3/36/Anime_Superhuman_Domingos_Infobox.png/revision/latest/scale-to-width-down/300?cb=20130504162531&path-prefix=fr")
            .addField("*__Informations officielles :__*", "*-Ils sont __nés le 19 février.__ \n \n-Les __Freaky Domingos__ sont les __3 pirates de l'équipage de Baggy__ qui __se sont fait battre par Luffy au début de l'arc.__*", true)
            .setImage("https://vignette.wikia.nocookie.net/onepiece/images/3/36/Anime_Superhuman_Domingos_Infobox.png/revision/latest/scale-to-width-down/300?cb=20130504162531&path-prefix=fr")
            .setTimestamp()
            .setFooter("Vivre Card des Freaky Domingos | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/3/36/Anime_Superhuman_Domingos_Infobox.png/revision/latest/scale-to-width-down/300?cb=20130504162531&path-prefix=fr");
        
            message.channel.send(exampleEmbed);
        }

if(message.content == prefix + "baggy"){
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#773e93')
.setTitle('***__Vivre Card Baggy #0046__***')
.setURL('https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
.setAuthor('Baggy', 'https://i.ytimg.com/vi/sTwvlzMTI90/maxresdefault.jpg', 'https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/')
.setDescription('*__La Vivre Card de Baggy__* est la **__#0046__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
.setThumbnail('https://i.ytimg.com/vi/sTwvlzMTI90/maxresdefault.jpg')
.addField('*__Informations officielles :__*', "*-Il est __né le 8 août__ et a __39 ans.__ Il __mesure 1m92,__ ce qui est une taille plutôt grande pour un homme. \n \n-__Baggy est né sur Grand Line.__*", true)
.addField('*__Prime :__*', "**__~~15,000,000 Berrys~~__**", true)
.addField("*__Fruit du Démon :__*", "**__Bara Bara no Mi__** *__(Fruit de la Fragmentation)__*")
.setImage('https://i.ytimg.com/vi/sTwvlzMTI90/maxresdefault.jpg')
.setTimestamp()
.setFooter("Vivre Card de Baggy | " + message.author.username, "https://i.ytimg.com/vi/sTwvlzMTI90/maxresdefault.jpg");
                                            
message.channel.send(exampleEmbed);
}

if(message.content == prefix + "domo-kun"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Domo-Kun #0047__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Domo-kun_et_Nnke-kun")
    .setAuthor("Domo-Kun", "https://vignette.wikia.nocookie.net/onepiece/images/a/a5/Domo-kun_Portrait.png/revision/latest?cb=20140712132902&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Domo-kun_et_Nnke-kun")
    .setDescription("*__La Vivre Card de Domo-Kun__* est la **__#0047__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/a/a5/Domo-kun_Portrait.png/revision/latest?cb=20140712132902&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 30 janvier.__ \n \n-__C'est un personnage inventé par Oda lors d'un 'SBS'. Il apparaitra__ ensuite __aux côtés des pirates de Baggy.__*", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/a/a5/Domo-kun_Portrait.png/revision/latest?cb=20140712132902&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Domo-Kun | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/a/a5/Domo-kun_Portrait.png/revision/latest?cb=20140712132902&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "équilibristes"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#773e93")
    .setTitle("***__Vivre Card Équilibristes #0048__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Équilibristes")
    .setAuthor("Équilibristes", "https://vignette.wikia.nocookie.net/onepiece/images/b/ba/%C3%89quilibristes_Anime_Infobox.png/revision/latest/scale-to-width-down/250?cb=20150531133641&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Équilibristes")
    .setDescription("*__La Vivre Card des Équilibristes__* est la **__#0048__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/b/ba/%C3%89quilibristes_Anime_Infobox.png/revision/latest/scale-to-width-down/250?cb=20150531133641&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Ils sont __nés le 13 juillet.__ \n \n-Les __Équilibristes__ sont les __4 pirates de l'équipage de Baggy__ qui __se sont fait stopper par Zoro alors qu'ils attaquaient Nami.__*", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/b/ba/%C3%89quilibristes_Anime_Infobox.png/revision/latest/scale-to-width-down/250?cb=20150531133641&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card des Équilibristes | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/b/ba/%C3%89quilibristes_Anime_Infobox.png/revision/latest/scale-to-width-down/250?cb=20150531133641&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "morge"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#773e93")
    .setTitle("***__Vivre Card Morge #0049__***")
    .setURL("https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/")
    .setAuthor("Morge", "https://i.skyrock.net/4238/87434238/pics/3193440051_1_4_k0YMFnd3.jpg", "https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/")
    .setDescription("*__La Vivre Card de Morge__* est la **__#0049__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://i.skyrock.net/4238/87434238/pics/3193440051_1_4_k0YMFnd3.jpg")
    .addField("*__Informations officielles :__*", "*-Il est __né le 1 octobre__ et a __29 ans.__ Il mesure __1m97__ ce qui est une taille très grande pour un homme. \n \n-Originaire d'East Blue, il __ne possède pas de prime.__ \n \n-__Sa nourriture préférée__ est __le cornichon.__*", true)
    .addField("*__Titre :__*", "**__Dresseur des Pirates de Baggy__**", true)
    .setImage("https://i.skyrock.net/4238/87434238/pics/3193440051_1_4_k0YMFnd3.jpg")
    .setTimestamp()
    .setFooter("Vivre Card de Morge | " + message.author.username, "https://i.skyrock.net/4238/87434238/pics/3193440051_1_4_k0YMFnd3.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "richie"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#773e93")
    .setTitle("***__Vivre Card Richie #0050__***")
    .setURL("https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/")
    .setAuthor("Richie", "https://vignette.wikia.nocookie.net/onepiece/images/7/7f/Richy_Anime_Avant_Ellipse_Infobox.png/revision/latest/scale-to-width-down/340?cb=20170514141516&path-prefix=fr", "https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/")
    .setDescription("*__La Vivre Card de Richie__* est la **__#0050__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/7/7f/Richy_Anime_Avant_Ellipse_Infobox.png/revision/latest/scale-to-width-down/340?cb=20170514141516&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 23 juillet.__ \n \n-__Sa nourriture préférée__ est __la viande.__*", true)
    .addField("*__Espèce :__*", "**__Lion__**")
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/7/7f/Richy_Anime_Avant_Ellipse_Infobox.png/revision/latest/scale-to-width-down/340?cb=20170514141516&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Richie | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/7/7f/Richy_Anime_Avant_Ellipse_Infobox.png/revision/latest/scale-to-width-down/340?cb=20170514141516&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "chouchou"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#bbb9b9")
    .setTitle("***__Vivre Card Chouchou #0051__***")
    .setURL("https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/")
    .setAuthor("Chouchou", "https://vignette.wikia.nocookie.net/onepiece/images/d/d0/Chouchou_Anime_Pr%C3%A9_Ellipse_Infobox.png/revision/latest/scale-to-width-down/340?cb=20180703081219&path-prefix=fr", "https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/")
    .setDescription("*__La Vivre Card de Chouchou__* est la **__#0051__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/d/d0/Chouchou_Anime_Pr%C3%A9_Ellipse_Infobox.png/revision/latest/scale-to-width-down/340?cb=20180703081219&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 22 novembre__ et a __14 ans (78 ans en âge humain).__ Il mesure __40cm de haut__ ce qui est une taille assez petite pour un chien. \n \n-Originaire d'Orange Town, __sa nourriture préférée__ est __la nourriture pour chien du magasin de son maitre.__*", true)
    .addField("*__Espèce :__*", "**__Chien__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/d/d0/Chouchou_Anime_Pr%C3%A9_Ellipse_Infobox.png/revision/latest/scale-to-width-down/340?cb=20180703081219&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Chouchou | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/d/d0/Chouchou_Anime_Pr%C3%A9_Ellipse_Infobox.png/revision/latest/scale-to-width-down/340?cb=20180703081219&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "buddle"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Buddle #0052__***")
    .setURL("https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/")
    .setAuthor("Buddle", "https://vignette.wikia.nocookie.net/onepiece/images/6/63/Boodle_Portrait.png/revision/latest?cb=20131209111202&path-prefix=id", "https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/")
    .setDescription("*__La Vivre Card de Buddle__* est la **__#0052__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/6/63/Boodle_Portrait.png/revision/latest?cb=20131209111202&path-prefix=id")
    .addField("*__Informations officielles :__*", "*-Il est __né le 16 janvier__ et a __75 ans.__ Il mesure __1m72__ ce qui est une taille assez basse pour un homme. \n \n-__Sa nourriture préférée__ est __le saumon.__*", true)
    .addField("*__Titre :__*", "**__Maire de Orange Town__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/6/63/Boodle_Portrait.png/revision/latest?cb=20131209111202&path-prefix=id")
    .setTimestamp()
    .setFooter("Vivre Card de Buddle | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/6/63/Boodle_Portrait.png/revision/latest?cb=20131209111202&path-prefix=id");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "hokker"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Hokker #0053__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Hokker")
    .setAuthor("Hokker", "https://vignette.wikia.nocookie.net/onepiece/images/1/11/Hokker_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20180822143137&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Hokker")
    .setDescription("*__La Vivre Card de Hokker__* est la **__#0053__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/1/11/Hokker_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20180822143137&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 17 mai.__ \n \n-En plus d'être __le maitre de Chouchou__ et __le propriétaire du 'Pet Food',__ il était __l'ami du maire Buddle.__ Malheureusement, __il est décédé d'une maladie inconnue.__*", true)
    .addField("*__Titre :__*", "**__~~Propriétaire du 'Pet Food'~~__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/1/11/Hokker_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20180822143137&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Hokker | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/1/11/Hokker_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20180822143137&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "polo"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Polo #0054__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Polo")
    .setAuthor("Polo", "https://vignette.wikia.nocookie.net/onepiece/images/3/34/Polo_Avant_Ellipse_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20150704100303&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Polo")
    .setDescription("*__La Vivre Card de Polo__* est la **__#0054__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/3/34/Polo_Avant_Ellipse_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20150704100303&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 11 mai.__ \n \n-C'est lui qui __a mené la révolte des habitants lorsque Buddle s'est fait assommer par Luffy.__*", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/3/34/Polo_Avant_Ellipse_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20150704100303&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Polo | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/3/34/Polo_Avant_Ellipse_Anime_Infobox.png/revision/latest/scale-to-width-down/340?cb=20150704100303&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "cabaji"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#773e93")
    .setTitle("***__Vivre Card Cabaji #0055__***")
    .setURL("https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/")
    .setAuthor("Cabaji", "https://cdn.discordapp.com/attachments/766065475821240320/768538531949707297/unknown.png", "https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/")
    .setDescription("*__La Vivre Card de Cabaji__* est la **__#0055__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://cdn.discordapp.com/attachments/766065475821240320/768538531949707297/unknown.png")
    .addField("*__Informations officielles :__*", "*-Il est __né le 8 septembre__ et a __34 ans.__ Il mesure __2m08__ ce qui est une taille très grande pour un homme. \n \n-Originaire d'East Blue, il __ne possède pas de prime.__ \n \n-__Sa nourriture préférée__ est __le popcorn.__*", true)
    .addField("*__Titre :__*", "**__Chef d'État-Major des Pirates de Baggy__**", true)
    .setImage("https://cdn.discordapp.com/attachments/766065475821240320/768538531949707297/unknown.png")
    .setTimestamp()
    .setFooter("Vivre Card de Cabaji | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/768538531949707297/unknown.png");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "cocofox"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#bbb9b9")
    .setTitle("***__Vivre Card Cocofox #0056__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Animaux/East_Blue#Cocofox")
    .setAuthor("Cocofox", "https://vignette.wikia.nocookie.net/onepiece/images/1/12/Cocofox_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181210161104&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Animaux/East_Blue#Cocofox")
    .setDescription("*__La Vivre Card du Cocofox__* est la **__#0056__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/1/12/Cocofox_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181210161104&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 19 février.__ \n \n-__Le Cocofox est un mélange entre un renard et un coq.__*", true)
    .addField("*__Espèce :__*", "**__Cocofox__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/1/12/Cocofox_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181210161104&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card du Cocofox | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/1/12/Cocofox_Portrait.png/revision/latest/scale-to-width-down/120?cb=20181210161104&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "gaimon"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#98f700")
    .setTitle("***__Vivre Card Gaimon #0057__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Gaimon")
    .setAuthor("Gaimon", "https://vignette.wikia.nocookie.net/onepiece/images/5/5e/Gaimon_Anime_Pre_Ellipse_Infobox.png/revision/latest/scale-to-width-down/340?cb=20180405120543&path-prefix=fr", "https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setDescription("*__La Vivre Card de Gaimon__* est la **__#0057__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/5/5e/Gaimon_Anime_Pre_Ellipse_Infobox.png/revision/latest/scale-to-width-down/340?cb=20180405120543&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 5 août__ et a __45 ans.__ Il mesure __1m30__ ce qui est une taille plutôt grande pour un homme coincé dans un coffre. \n \n-__Le navire sur lequel il naviguait s’appelait le 'Matina Hallelujah'.__*", true)
    .addField("*__Titres :__*", "**__~~Pirate~~ \n \nGardien de l'Île des Animaux Rares__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/5/5e/Gaimon_Anime_Pre_Ellipse_Infobox.png/revision/latest/scale-to-width-down/340?cb=20180405120543&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Gaimon | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/5/5e/Gaimon_Anime_Pre_Ellipse_Infobox.png/revision/latest/scale-to-width-down/340?cb=20180405120543&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "sirop"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#3a3324")
    .setTitle("***__Classeur Vivre Cards Sirop__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setAuthor("Classeur Vivre Cards Sirop", "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setDescription("*__Le Classeur de Sirop regroupe toutes les Vivre Cards disponibles de l'Arc Sirop (13).__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .addField("*__Vivre Cards Sirop disponibles :__*", "**__-Morning #0058 \n \n-Oignon #0059 \n \n-Piment #0060 \n \n-Carotte #0061 \n \n-Kuro #0062 \n \n-Kaya #0063 \n \n-Gardes du Manoir #0064 \n \n-Merry #0065 \n \n-Jango #0066 \n \n-Sham #0067 \n \n-Buchi #0068 \n \n-NIGURE Yainu #0069 \n \n-Bankina #0070__**")
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .setTimestamp()
    .setFooter("Classeur Vivre Cards Sirop | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "morning"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Morning #0058__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Morning")
    .setAuthor("Morning", "https://vignette.wikia.nocookie.net/onepiece/images/b/ba/Morning_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20170916203915&path-prefix=fr", "https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setDescription("*__La Vivre Card de Morning__* est la **__#0058__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/b/ba/Morning_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20170916203915&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 15 octobre.__ \n \n-Lorsqu'__il entendait Usopp crier aux pirates, il savait qu'il était l'heure d'aller travailler.__*", true)
    .addField("*__Titre :__*", "**__Maire de Sirop__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/b/ba/Morning_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20170916203915&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Morning | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/b/ba/Morning_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20170916203915&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "oignon"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Oignon #0059__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Oignon")
    .setAuthor("Oignon", "https://vignette.wikia.nocookie.net/onepiece/images/4/45/Oignon_Apr%C3%A8s_Ellipse_Manga_Couleur.png/revision/latest/scale-to-width-down/46?cb=20181014135338&path-prefix=fr", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de Oignon__* est la **__#0059__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/4/45/Oignon_Apr%C3%A8s_Ellipse_Manga_Couleur.png/revision/latest/scale-to-width-down/46?cb=20181014135338&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 10 avril__ et a __11 ans.__ Il mesure __1m24__ ce qui est une taille assez petite pour un enfant.\n \n-Originaire de Sirop, __son rêve est de devenir auteur.__ \n \n-__Son plat préféré__ est __les rondelles d'oignons fries.__*", true)
    .addField("*__Titre :__*", "**__~~Membre des Pirates de Usopp~~__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/4/45/Oignon_Apr%C3%A8s_Ellipse_Manga_Couleur.png/revision/latest/scale-to-width-down/46?cb=20181014135338&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Oignon | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/4/45/Oignon_Apr%C3%A8s_Ellipse_Manga_Couleur.png/revision/latest/scale-to-width-down/46?cb=20181014135338&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "piment"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Piment #0060__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Piment")
    .setAuthor("Piment", "https://static.wikia.nocookie.net/onepiece/images/3/35/Piment_Apr%C3%A8s_Ellipse_Manga_Couleur.png/revision/latest/scale-to-width-down/210?cb=20181014152941&path-prefix=fr", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de Piment__* est la **__#0060__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/3/35/Piment_Apr%C3%A8s_Ellipse_Manga_Couleur.png/revision/latest/scale-to-width-down/210?cb=20181014152941&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 9 avril__ et a __11 ans.__ Il mesure __1m20__ ce qui est une taille assez petite pour un enfant.\n \n-Originaire de Sirop, __son rêve est de devenir charpentier.__ \n \n-__Son plat préféré__ est __la viande farcie aux oignons verts.__*", true)
    .addField("*__Titre :__*", "**__~~Membre des Pirates de Usopp~~__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/3/35/Piment_Apr%C3%A8s_Ellipse_Manga_Couleur.png/revision/latest/scale-to-width-down/210?cb=20181014152941&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Piment | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/3/35/Piment_Apr%C3%A8s_Ellipse_Manga_Couleur.png/revision/latest/scale-to-width-down/210?cb=20181014152941&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "carotte"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Carotte #0061__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Carotte")
    .setAuthor("Carotte", "https://vignette.wikia.nocookie.net/onepiece/images/7/7e/Carotte_Apr%C3%A8s_Ellipse_Manga_Couleur.png/revision/latest/scale-to-width-down/57?cb=20181014162950&path-prefix=fr", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de Carotte__* est la **__#0061__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/7/7e/Carotte_Apr%C3%A8s_Ellipse_Manga_Couleur.png/revision/latest/scale-to-width-down/57?cb=20181014162950&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 2 février__ et a __11 ans.__ Il mesure __1m27__ ce qui est une taille assez petite pour un enfant.\n \n-Originaire de Sirop, __son rêve est d'ouvrir une taverne.__ \n \n-__Son plat préféré__ est __le jus de carottes.__*", true)
    .addField("*__Titre :__*", "**__~~Membre des Pirates de Usopp~~__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/7/7e/Carotte_Apr%C3%A8s_Ellipse_Manga_Couleur.png/revision/latest/scale-to-width-down/57?cb=20181014162950&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Carotte | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/7/7e/Carotte_Apr%C3%A8s_Ellipse_Manga_Couleur.png/revision/latest/scale-to-width-down/57?cb=20181014162950&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "kuro"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Kuro #0062__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Kuro")
    .setAuthor("Kuro", "https://vignette.wikia.nocookie.net/onepiece/images/4/40/Capitaine_Kuro.png/revision/latest/scale-to-width-down/120?cb=20181016150127&path-prefix=fr", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de Kuro__* est la **__#0062__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/4/40/Capitaine_Kuro.png/revision/latest/scale-to-width-down/120?cb=20181016150127&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 22 avril__ et a __35 ans.__ Il mesure __2m07__ ce qui est une taille très grande pour un homme.\n \n-Il parait qu'__il peut courir le 100m en 4 secondes.__ \n \n-__Son fruit préféré__ est __la banane.__*", true)
    .addField("*__Prime :__*", "**__~~16,000,000 Berrys~~__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/4/40/Capitaine_Kuro.png/revision/latest/scale-to-width-down/120?cb=20181016150127&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Kuro | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/4/40/Capitaine_Kuro.png/revision/latest/scale-to-width-down/120?cb=20181016150127&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "kaya"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Kaya #0063__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Kaya")
    .setAuthor("Kaya", "https://vignette.wikia.nocookie.net/onepiece/images/6/69/Kaya_Avec_Des_Lunettes.png/revision/latest/scale-to-width-down/113?cb=20190502162201&path-prefix=fr", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de Kaya__* est la **__#0063__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/6/69/Kaya_Avec_Des_Lunettes.png/revision/latest/scale-to-width-down/113?cb=20190502162201&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Elle est __née le 24 août__ et a __19 ans.__ Elle mesure __1m69__ ce qui est une taille plutôt grande pour une femme.\n \n-Originaire de Sirop, __son rêve est de devenir médecin.__ \n \n-__Ses aliments préférés__ sont __les fruits de mer.__*", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/6/69/Kaya_Avec_Des_Lunettes.png/revision/latest/scale-to-width-down/113?cb=20190502162201&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Kaya | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/6/69/Kaya_Avec_Des_Lunettes.png/revision/latest/scale-to-width-down/113?cb=20190502162201&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "gardes du manoir"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Gardes du Manoir #0064__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Gardes_du_Manoir")
    .setAuthor("Gardes du Manoir", "https://vignette.wikia.nocookie.net/onepiece/images/8/8d/Gardes_du_Manoir_Anime_Infobox.png/revision/latest/scale-to-width-down/250?cb=20141224083310&path-prefix=fr", "https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setDescription("*__La Vivre Card des Gardes du Manoir__* est la **__#0064__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/8/8d/Gardes_du_Manoir_Anime_Infobox.png/revision/latest/scale-to-width-down/250?cb=20141224083310&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Ils sont __nés le 1 juillet.__ \n \n-__Ils sont très dévoués, au point de donner leur vie pour Kaya.__ Cepependant, __ils font énormément de pauses.__*", true)
    .addField("*__Titre :__*", "**__Gardes de Kaya__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/8/8d/Gardes_du_Manoir_Anime_Infobox.png/revision/latest/scale-to-width-down/250?cb=20141224083310&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card des Gardes du Manoir | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/8/8d/Gardes_du_Manoir_Anime_Infobox.png/revision/latest/scale-to-width-down/250?cb=20141224083310&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "merry"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Merry #0065__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Merry")
    .setAuthor("Merry", "https://img2.wikia.nocookie.net/__cb20130619155328/onepiece/fr/images/7/7c/Merry_Anime_Infobox.png", "https://onepiece.fandom.com/fr/wiki/Merry")
    .setDescription("*__La Vivre Card de Merry__* est la **__#0065__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://img2.wikia.nocookie.net/__cb20130619155328/onepiece/fr/images/7/7c/Merry_Anime_Infobox.png")
    .addField("*__Informations officielles :__*", "*-Il est __né le 22 janvier.__ \n \n-En plus d'être __le majordome de Kaya, c'est lui qui a conçu les plans du Vogue Merry.__*", true)
    .addField("*__Titre :__*", "**__Majordome de Kaya__**", true)
    .setImage("https://img2.wikia.nocookie.net/__cb20130619155328/onepiece/fr/images/7/7c/Merry_Anime_Infobox.png")
    .setTimestamp()
    .setFooter("Vivre Card de Merry | " + message.author.username, "https://img2.wikia.nocookie.net/__cb20130619155328/onepiece/fr/images/7/7c/Merry_Anime_Infobox.png");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "jango"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#7002d0")
    .setTitle("***__Vivre Card Jango #0066__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Jangoo")
    .setAuthor("Jango", "https://vignette.wikia.nocookie.net/onepiece/images/1/18/Jango_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200509141250&path-prefix=fr", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de Jango__* est la **__#0066__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/1/18/Jango_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200509141250&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 28 décembre__ et a __29 ans.__ Il mesure __2m07__ ce qui est une taille très grande pour un homme.\n \n-__Son plat préféré__ est __'Spaghettis Champignons' !__*", true)
    .addField("*__Prime :__*", "**__~~9,000,000 Berrys~~__**", true)
    .addField("*__Grade :__*", "**__~~Troisième Classe~~__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/1/18/Jango_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200509141250&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Jango | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/1/18/Jango_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200509141250&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "sham"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Sham #0067__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Sham")
    .setAuthor("Sham", "https://vignette.wikia.nocookie.net/onepiece/images/7/77/Sham_Anime_Infobox.png/revision/latest?cb=20180430145100&path-prefix=fr", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de Sham__* est la **__#0067__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/7/77/Sham_Anime_Infobox.png/revision/latest?cb=20180430145100&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 19 avril__ et a __23 ans.__ Il mesure __2m01__ ce qui est une taille très grande pour un homme.\n \n-__Son plat préféré__ est __le poisson grillé.__*", true)
    .addField("*__Prime :__*", "**__7,000,000 Berrys (avec Buchi)__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/7/77/Sham_Anime_Infobox.png/revision/latest?cb=20180430145100&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Sham | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/7/77/Sham_Anime_Infobox.png/revision/latest?cb=20180430145100&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "buchi"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Buchi #0068__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Buchi")
    .setAuthor("Buchi", "https://images.shoutwiki.com/featdirectory/4/44/BuchiOnePieceAnime.png", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de Buchi__* est la **__#0068__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://images.shoutwiki.com/featdirectory/4/44/BuchiOnePieceAnime.png")
    .addField("*__Informations officielles :__*", "*-Il est __né le 7 février__ et a __23 ans.__ Il mesure __2m16__ ce qui est une taille très grande pour un homme.\n \n-__Son plat préféré__ est __le 'Fish n' Chips'.__*", true)
    .addField("*__Prime :__*", "**__7,000,000 Berrys (avec Sham)__**", true)
    .setImage("https://images.shoutwiki.com/featdirectory/4/44/BuchiOnePieceAnime.png")
    .setTimestamp()
    .setFooter("Vivre Card de Buchi | " + message.author.username, "https://images.shoutwiki.com/featdirectory/4/44/BuchiOnePieceAnime.png");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "yainu"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card NIGURE Yaibu #0069__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Nugire_Yainu")
    .setAuthor("NIGURE Yainu", "https://vignette.wikia.nocookie.net/onepiece/images/5/58/Nugire_Yainu_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20180618154027&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Nugire_Yainu")
    .setDescription("*__La Vivre Card de Yainu__* est la **__#0069__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/5/58/Nugire_Yainu_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20180618154027&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-C'était le __charpentier des Pirates de Kuro__ mais aussi celui qui __s'est fait executer à la place de Kuro__ 3 ans avant le début de l'histoire.*", true)
    .addField("*__Titre :__*", "**__~~Charpentier des Pirates de Kuro~~__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/5/58/Nugire_Yainu_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20180618154027&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de NIGURE Yainu | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/5/58/Nugire_Yainu_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20180618154027&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "bankina"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Bankina #0070__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Bankina")
    .setAuthor("Bankina", "https://vignette.wikia.nocookie.net/onepiece/images/4/48/Banchina_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20130423124021&path-prefix=fr", "https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setDescription("*__La Vivre Card de Bankina__* est la **__#0070__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/4/48/Banchina_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20130423124021&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Elle est __née le 17 décembre.__ \n \n-Originaire de Sirop, __la défunte mère d'Usopp,__ disait __être fière des choix de son mari__ et __voulait que son fils devienne comme lui.__*", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/4/48/Banchina_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20130423124021&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Bankina | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/4/48/Banchina_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20130423124021&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "baratie"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#fff300")
    .setTitle("***__Classeur Vivre Cards Baratie__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setAuthor("Classeur Vivre Cards Baratie", "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setDescription("*__Le Classeur de Baratie regroupe toutes les Vivre Cards disponibles de l'Arc Baratie (20).__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .addField("*__Vivre Cards Baratie disponibles :__*", "**__-Yosaku #0071 \n \n-Johnny #0072 \n \n-Fullbody #0073 \n \n-Moodie #0075 \n \n-Zeff #0076 \n \n-Batchee #0077 \n \n-Patty #0078 \n \n-Lines #0079 \n \n-Pandaman #0080 \n \n-Gin #0081 \n \n-Carne #0082 \n \n-Roxanne #0083 \n \n-DON Krieg #0084 \n \n-DRACULE Mihawk #0085 \n \n-Pearl #0086 \n \n-Ideaman #0087 \n \n-Hustle #0088 \n \n-Kumate #0089 \n \n-Kagikko #0090 \n \nRequin-Panda #0091__**")
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .setTimestamp()
    .setFooter("Classeur Vivre Cards Baratie | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "yosaku"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#98f700")
    .setTitle("***__Vivre Card Yosaku #0071__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Yosaku", "https://cdn.myanimelist.net/images/characters/4/49656.jpg", "https://onepiece.fandom.com/fr/wiki/Yosaku")
    .setDescription("*__La Vivre Card de Yosaku__* est la **__#0071__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://cdn.myanimelist.net/images/characters/4/49656.jpg")
    .addField("*__Informations officielles :__*", "*-Il est __né le 10 novembre__ et a __26 ans.__ Il mesure __1m85__ ce qui est une taille plutôt grande pour un homme. \n \n-Originaire d'East Blue, __ses aliments préférés__ sont __les germes de haricots sautés.__*", true)
    .addField("*__Titre :__*", "**__Chasseur de Primes__**", true)
    .setImage("https://cdn.myanimelist.net/images/characters/4/49656.jpg")
    .setTimestamp()
    .setFooter("Vivre Card de Yosaku | " + message.author.username, "https://cdn.myanimelist.net/images/characters/4/49656.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "johnny"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#98f700")
    .setTitle("***__Vivre Card Johnny #0072__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Johnny", "https://www.nautiljon.com/images/perso/00/18/johnny_16481.jpg", "https://onepiece.fandom.com/fr/wiki/Johnny")
    .setDescription("*__La Vivre Card de Johnny__* est la **__#0072__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://www.nautiljon.com/images/perso/00/18/johnny_16481.jpg")
    .addField("*__Informations officielles :__*", "*-Il est __né le 12 novembre__ et a __25 ans.__ Il mesure __1m86__ ce qui est une taille plutôt grande pour un homme. \n \n-Originaire d'East Blue, __sa nourriture préférée__ est __la patate.__*", true)
    .addField("*__Titre :__*", "**__Chasseur de Primes__**", true)
    .setImage("https://www.nautiljon.com/images/perso/00/18/johnny_16481.jpg")
    .setTimestamp()
    .setFooter("Vivre Card de Johnny | " + message.author.username, "https://www.nautiljon.com/images/perso/00/18/johnny_16481.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "fullbody"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#0088fe")
    .setTitle("***__Vivre Card Fullbody #0073__***")
    .setURL("https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
    .setAuthor("Fullbody", "https://vignette.wikia.nocookie.net/onepiece/images/2/29/Fullbody_Post_Ellipse_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200224101036&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Fullbody")
    .setDescription("*__La Vivre Card de Fullbody__* est la **__#0073__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/2/29/Fullbody_Post_Ellipse_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200224101036&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 7 septembre__ et a __28 ans.__ Il mesure __1m84__ ce qui est une taille plutôt grande pour un homme. \n \n-Originaire de North Blue, __sa boisson préférée__ est __le vin de Stein Itelzbulger.__*", true)
    .addField("*__Grades :__*", "**__~~Lieutenant~~ \n \nTroisième Classe__**", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/2/29/Fullbody_Post_Ellipse_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200224101036&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Fullbody | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/2/29/Fullbody_Post_Ellipse_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200224101036&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "moodie"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Moodie #0075__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Moodie", "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Moodie_Anime_Infobox.png/revision/latest/scale-to-width-down/250?cb=20161010151327&path-prefix=fr", "https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setDescription("*__La Vivre Card de Moodie__* est la **__#0075__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Moodie_Anime_Infobox.png/revision/latest/scale-to-width-down/250?cb=20161010151327&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Elle est __née le 17 novembre.__ \n \n-C'est __la femme que Fullbody invite au Baratie.__*", true)
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Moodie_Anime_Infobox.png/revision/latest/scale-to-width-down/250?cb=20161010151327&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Moodie | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Moodie_Anime_Infobox.png/revision/latest/scale-to-width-down/250?cb=20161010151327&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "zeff"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ff11")
    .setTitle("***__Vivre Card Zeff #0076__***")
    .setURL("https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setAuthor("Zeff", "https://static.wikia.nocookie.net/onepiece/images/f/f4/Zeff_Portrait.png/revision/latest/scale-to-width-down/120?cb=20170903133520&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Zeff")
    .setDescription("*__La Vivre Card de Zeff__* est la **__#0076__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/f/f4/Zeff_Portrait.png/revision/latest/scale-to-width-down/120?cb=20170903133520&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 2 avril__ et a __67 ans.__ Il mesure __1m89__ ce qui est une taille assez grande pour un homme. \n \n-En plus d'__avoir navigué sur Grand Line__ et d'__être le mentor de Sanji, ses aliments préférés__ sont __les ailes de poulet épicées.__*", true)
    .addField("*__Prime :__*", "**__Inconnue__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/f/f4/Zeff_Portrait.png/revision/latest/scale-to-width-down/120?cb=20170903133520&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Zeff | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/f/f4/Zeff_Portrait.png/revision/latest/scale-to-width-down/120?cb=20170903133520&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "batchee"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#bbb9b9")
    .setTitle("***__Vivre Card Batchee #0077__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Batchee", "https://static.wikia.nocookie.net/onepiece/images/3/3b/Batchee_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20140313143829&path-prefix=fr", "https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setDescription("*__La Vivre Card de Batchee__* est la **__#0077__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/3/3b/Batchee_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20140313143829&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 1 juillet.__ \n \n-C'est __l'insecte que l'on a vu dans la soupe de Fullbody__ lors de l'arc Baratie.*", true)
    .addField("*__Espèce :__*", "**__Insecte__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/3/3b/Batchee_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20140313143829&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Batchee | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/3/3b/Batchee_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20140313143829&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "patty"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#98f700")
    .setTitle("***__Vivre Card Patty #0078__***")
    .setURL("https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setAuthor("Patty", "https://static.wikia.nocookie.net/onepiece/images/a/a8/Patty_Boss_Luffy_Episode_Sp%C3%A9cial.png/revision/latest/scale-to-width-down/81?cb=20180116122138&path-prefix=fr", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de Patty__* est la **__#0078__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/a/a8/Patty_Boss_Luffy_Episode_Sp%C3%A9cial.png/revision/latest/scale-to-width-down/81?cb=20180116122138&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 12 mars__ et a __29 ans.__ Il mesure __2m04__ ce qui est une taille très grande pour un homme. \n \n-__Son plat préféré__ est __le pudding.__*", true)
    .addField("*__Titre :__*", "**__Cuisinier du Baratie__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/a/a8/Patty_Boss_Luffy_Episode_Sp%C3%A9cial.png/revision/latest/scale-to-width-down/81?cb=20180116122138&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Patty | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/a/a8/Patty_Boss_Luffy_Episode_Sp%C3%A9cial.png/revision/latest/scale-to-width-down/81?cb=20180116122138&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "lines"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#0088fe")
    .setTitle("***__Vivre Card Lines #0079__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Lines")
    .setAuthor("Lines", "https://static.wikia.nocookie.net/onepiece/images/9/9d/Lines_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20181027135315&path-prefix=fr", "https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setDescription("*__La Vivre Card de Lines__* est la **__#0079__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/9/9d/Lines_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20181027135315&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 27 décembre__. \n \n-Originaire d'East Blue et sous les ordres de Fullbody, c'est __le marine qui s'est fait tuer par Gin__ lorsque ce dernier s'était échappé.*", true)
    .addField("*__Grade :__*", "**__~~Première Classe~~__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/9/9d/Lines_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20181027135315&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Lines | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/9/9d/Lines_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20181027135315&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "pandaman"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#98f700")
    .setTitle("***__Vivre Card Pandaman #0080__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Pandaman")
    .setAuthor("Pandaman", "https://static.wikia.nocookie.net/onepiece/images/6/6f/Pandaman_Manga_Infobox.png/revision/latest/scale-to-width-down/340?cb=20190305094852&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Pandaman")
    .setDescription("*__La Vivre Card de Pandaman__* est la **__#0080__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/6/6f/Pandaman_Manga_Infobox.png/revision/latest/scale-to-width-down/340?cb=20190305094852&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 27 février.__ Il __mesure 2m00__ et __pèse 122kg,__ ce qui est impressionnant pour un homme-panda. \n \n-__Son rôle d'Easter egg__ et __ses déplacements sont dus__ à __une immense dette qu'il fuit.__ \n \n-Il paraît que __lui même ne connaît pas son âge.__ \n \n-Après son __introduction au chapitre 44 lors de l'arc Baratie,__ il sera __présent dans tout les arcs__ sauf celui d'__Amazon Lily, l'Île des Femmes, où il sera remplacé par Pandawoman.__*", true)
    .addField("*__Titre :__*", "**__~~Catcheur Professionnel~~ \n \nCapitaine de la Panda Family__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/6/6f/Pandaman_Manga_Infobox.png/revision/latest/scale-to-width-down/340?cb=20190305094852&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Pandaman | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/6/6f/Pandaman_Manga_Infobox.png/revision/latest/scale-to-width-down/340?cb=20190305094852&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "gin"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Gin #0081__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Gin")
    .setAuthor("Gin", "https://pm1.narvii.com/6426/09553dded1cb5158562d93805588f2ca70c8d8fe_00.jpg", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de Gin__* est la **__#0081__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://pm1.narvii.com/6426/09553dded1cb5158562d93805588f2ca70c8d8fe_00.jpg")
    .addField("*__Informations officielles :__*", "*-Il est __né le 7 avril__ et a __27 ans.__ Il __mesure 1m86,__ ce qui est une taille plutôt grande pour un homme. \n \n-Son __groupe sanguin__ est de __type S.__* \n \n-__Son plat préféré__ est le__ Pilaf que Sanji lui avait préparé__ lorsqu'il lui sauva la vie.", true)
    .addField("*__Prime :__*", "**__12,000,000 Berrys__**", true)
    .setImage("https://pm1.narvii.com/6426/09553dded1cb5158562d93805588f2ca70c8d8fe_00.jpg")
    .setTimestamp()
    .setFooter("Vivre Card de Gin | " + message.author.username, "https://pm1.narvii.com/6426/09553dded1cb5158562d93805588f2ca70c8d8fe_00.jpg");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "carne"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#98f700")
    .setTitle("***__Vivre Card Carne #0082__***")
    .setURL("https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setAuthor("Carne", "https://static.wikia.nocookie.net/onepiece/images/a/a3/Carne_Anime_Avant_Ellipse_Infobox.png/revision/latest/scale-to-width-down/325?cb=20140912165059&path-prefix=fr", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de Carne__* est la **__#0082__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/a/a3/Carne_Anime_Avant_Ellipse_Infobox.png/revision/latest/scale-to-width-down/325?cb=20140912165059&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 9 février__ et a __34 ans.__ Il __mesure 1m71,__ ce qui est une taille plutôt basse pour un homme. \n \n-Son __groupe sanguin__ est de __type S.__* \n \n-__Son plat préféré__ est le __Rosbif.__", true)
    .addField("*__Titre :__*", "**__Cuisinier du Baratie__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/a/a3/Carne_Anime_Avant_Ellipse_Infobox.png/revision/latest/scale-to-width-down/325?cb=20140912165059&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Carne | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/a/a3/Carne_Anime_Avant_Ellipse_Infobox.png/revision/latest/scale-to-width-down/325?cb=20140912165059&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "krieg"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card DON Krieg #0084__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Krieg")
    .setAuthor("DON Krieg", "https://static.wikia.nocookie.net/onepiece/images/8/85/We_Are_%28Remix%29_-_Don_Krieg.png/revision/latest/scale-to-width-down/849?cb=20140917131856&path-prefix=fr", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de DON Krieg__* est la **__#0084__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/8/85/We_Are_%28Remix%29_-_Don_Krieg.png/revision/latest/scale-to-width-down/849?cb=20140917131856&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 19 septembre__ et a __44 ans.__ Il mesure __2m43,__ ce qui est une taille immense pour un homme. \n \n-Son __groupe sanguin__ est de __type X-F.__ \n \n-Son __plat préféré__ est la __dorade grillée.__*", true)
    .addField("*__Prime :__*", "**__17,000,000 Berrys__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/8/85/We_Are_%28Remix%29_-_Don_Krieg.png/revision/latest/scale-to-width-down/849?cb=20140917131856&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de DON Krieg | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/8/85/We_Are_%28Remix%29_-_Don_Krieg.png/revision/latest/scale-to-width-down/849?cb=20140917131856&path-prefix=fr");

    message.channel.send(exampleEmbed);
}


if(message.content == prefix + "mihawk"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#773e93')
    .setTitle('***__Vivre Card DRACULE Mihawk #0085__***')
    .setURL('https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/')
    .setAuthor('DRACULE Mihawk', 'https://pbs.twimg.com/media/ET0RXVzXQAAa8Wn.jpg', 'https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/')
    .setDescription('*__La Vivre Card de Mihawk__* est la **__#0085__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
    .setThumbnail('https://pbs.twimg.com/media/ET0RXVzXQAAa8Wn.jpg')
    .addField('*__Informations officielles :__*', "*-Il est __né le 9 mars__ et a __43 ans.__ Il __mesure 1m93,__ ce qui est une taille assez grande pour un homme. \n \n-__Il est considéré comme l'épeiste le plus puissant au monde.__ \n \n-__Mihawk était célèbre avant même que l’ère de la piraterie lancée par GOL D Roger ne commence.__ \n \n-__Il s’entraîna sans relâche pendant de nombreuses années, défiant des ennemis de plus en plus puissants, jusqu’à ne plus avoir de challengers.__ \n \n-Après la mort de Roger, __il est devenu Shichibukai pour voyager librement__ en dépit de n’avoir aucun équipage. __Il passe la plupart de son temps à naviguer pour le plaisir.__ \n \n-__Il attend avec impatience le jour où un sabreur digne de ce nom émergera pour le surpasser lui et son rival, Shanks le Roux__ (cela signifie qu’__il veut rencontrer un adversaire encore plus puissant que Shanks).__ \n \n-Il est confirmé qu'__il maitrise les Haki de l'Armement et de l'Observation,__ mais __rien n'est précisé pour le Haki des Rois.__*", true)
    .addField('*__Prime :__*', "**__? Berrys__**", true)
    .setImage('https://pbs.twimg.com/media/ET0RXVzXQAAa8Wn.jpg')
    .setTimestamp()
    .setFooter("Vivre Card de DRACULE Mihawk | " + message.author.username, "https://pbs.twimg.com/media/ET0RXVzXQAAa8Wn.jpg");
                                                
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "pearl"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Pearl #0086__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Pearl")
    .setAuthor("Pearl", "https://static.wikia.nocookie.net/onepiece/images/0/05/Pearl_Portrait.png/revision/latest/scale-to-width-down/500?cb=20180810120248&path-prefix=fr", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
    .setDescription("*__La Vivre Card de Pearl__* est la **__#0086__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/0/05/Pearl_Portrait.png/revision/latest/scale-to-width-down/500?cb=20180810120248&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 11 juillet__ et a __25 ans.__ Il __mesure 2m39,__ ce qui est une taille immense pour un homme. \n \n-Son __groupe sanguin__ est de __type F__ tout comme Luffy. \n \n-__Son plat préféré__ est les __coquilles Saint-Jaques.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/0/05/Pearl_Portrait.png/revision/latest/scale-to-width-down/500?cb=20180810120248&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Pearl | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/0/05/Pearl_Portrait.png/revision/latest/scale-to-width-down/500?cb=20180810120248&path-prefix=fr");
                                                
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "ideaman"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Ideaman #0087__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Ideaman", "https://static.wikia.nocookie.net/onepiece/images/e/e6/Ideaman_Anim%C3%A9_Infobox.png/revision/latest/scale-to-width-down/290?cb=20130902120439&path-prefix=fr", "https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setDescription("*__La Vivre Card de Ideaman__* est la **__#0087__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/e/e6/Ideaman_Anim%C3%A9_Infobox.png/revision/latest/scale-to-width-down/290?cb=20130902120439&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 17 mars.__ \n \n-C'est un __pirate de l'équipage de DON Krieg.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/e/e6/Ideaman_Anim%C3%A9_Infobox.png/revision/latest/scale-to-width-down/290?cb=20130902120439&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Ideaman | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/e/e6/Ideaman_Anim%C3%A9_Infobox.png/revision/latest/scale-to-width-down/290?cb=20130902120439&path-prefix=fr");
                                                
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "hustle"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Hustle #0088__***")
    .setURL("https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/")
    .setAuthor("Hustle", "https://static.wikia.nocookie.net/onepiece/images/7/7a/Hustle_Manga_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200510203625&path-prefix=fr", "https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/")
    .setDescription("*__La Vivre Card de Hustle__* est la **__#0088__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/7/7a/Hustle_Manga_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200510203625&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 28 juillet.__ \n \n-C'est un __pirate de l'équipage de DON Krieg.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/7/7a/Hustle_Manga_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200510203625&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Hustle | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/7/7a/Hustle_Manga_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200510203625&path-prefix=fr");
                                                
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "kumate"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ff11")
    .setTitle("***__Vivre Card Kumate #0089__***")
    .setURL("https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/")
    .setAuthor("Kumate", "https://static.wikia.nocookie.net/onepiece/images/b/bd/Kumate_Anime_Infobox.png/revision/latest/scale-to-width-down/640?cb=20170531174617&path-prefix=fr", "https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/")
    .setDescription("*__La Vivre Card des Kumate__* est la **__#0089__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/b/bd/Kumate_Anime_Infobox.png/revision/latest/scale-to-width-down/640?cb=20170531174617&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Elle est __née le 29 septembre.__ \n \n-C'est la __tribu cannibale__ qui a __capturé Baggy lors de mini-aventure.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/b/bd/Kumate_Anime_Infobox.png/revision/latest/scale-to-width-down/640?cb=20170531174617&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card des Kumate | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/b/bd/Kumate_Anime_Infobox.png/revision/latest/scale-to-width-down/640?cb=20170531174617&path-prefix=fr");
                                                
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "kagikko"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Kagikko #0090__***")
    .setURL("https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/")
    .setAuthor("Kagikko", "https://static.wikia.nocookie.net/onepiece/images/e/e3/Kagikko_Manga_Infobox.png/revision/latest/scale-to-width-down/136?cb=20170718202719&path-prefix=fr", "https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/")
    .setDescription("*__La Vivre Card de Kagikko__* est la **__#0090__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/e/e3/Kagikko_Manga_Infobox.png/revision/latest/scale-to-width-down/136?cb=20170718202719&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 27 octobre.__ \n \n-C'est un __pirate de l'équipage de DON Krieg.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/e/e3/Kagikko_Manga_Infobox.png/revision/latest/scale-to-width-down/136?cb=20170718202719&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Kagikko | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/e/e3/Kagikko_Manga_Infobox.png/revision/latest/scale-to-width-down/136?cb=20170718202719&path-prefix=fr");
                                                
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "requin-panda"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#bbb9b9')
    .setTitle('***__Vivre Card Requin-Panda #0091__***')
    .setURL('https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/')
    .setAuthor('Requin-Panda', 'https://static.wikia.nocookie.net/onepiece/images/7/75/Requin_Panda.png/revision/latest/scale-to-width-down/381?cb=20190812151233&path-prefix=fr', 'https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/')
    .setDescription('*__La Vivre Card du Requin-Panda__* est la **__#0091__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
    .setThumbnail('https://static.wikia.nocookie.net/onepiece/images/7/75/Requin_Panda.png/revision/latest/scale-to-width-down/381?cb=20190812151233&path-prefix=fr')
    .addField('*__Informations officielles :__*', "*-Il est __né le 29 août.__ \n \n-C'est le __Requin-Panda qui avait avalé Yosaku__ à la fin de l'arc Baratie.*", true)
    .addField("*__Espèce :__*", "**__Requin-Panda__**", true)
    .setImage('https://static.wikia.nocookie.net/onepiece/images/7/75/Requin_Panda.png/revision/latest/scale-to-width-down/381?cb=20190812151233&path-prefix=fr')
    .setTimestamp()
    .setFooter("Vivre Card du Requin-Panda | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/7/75/Requin_Panda.png/revision/latest/scale-to-width-down/381?cb=20190812151233&path-prefix=fr");
                                                                                                        
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "arlong park"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00f5ff")
    .setTitle("***__Classeur Vivre Cards Arlong Park__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setAuthor("Classeur Vivre Cards Arlong Park", "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setDescription("*__Le Classeur d'Arlong Park regroupe toutes les Vivre Cards disponibles de l'Arc Arlong Park (22).__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .addField("*__Vivre Cards Arlong Park disponibles :__*", "**__-Nezumi #0093 \n \n-Arlong #0094 \n \n-Octo #0095 \n \n-Chabo #0096 \n \n-Nojiko #0097 \n \n-Genzo #0098 \n \n-Kaneshiro #0099 \n \n-Pisaro #0100 \n \n-Meuh-Meuh #0101 \n \n-Smack #0102 \n \n-Kuroobi #0103 \n \n-Shioyaki #0104 \n \n-Take #0105 \n \n-Pudding-Pudding #0106 \n \n-Belmer #0107 \n \n-Nakoh #0108 \n \n-Mamy Mee #0109 \n \n-Sam #0110 \n \n-Escargophones #0111 \n \n-Martins Facteur #0112 \n \n-Brannew #0113 \n \n-John Giant #0114__**")
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .setTimestamp()
    .setFooter("Classeur Vivre Cards Arlong Park | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "nezumi"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#0088fe")
    .setTitle("***__Vivre Card Nezumi #0093__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Nezumi", "https://static.wikia.nocookie.net/onepiece/images/9/9d/Nezumi_Anime_Infobox.png/revision/latest/scale-to-width-down/521?cb=20190101164602&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Nezumi")
    .setDescription("*__La Vivre Card de Nezumi__* est la **__#0093__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/9/9d/Nezumi_Anime_Infobox.png/revision/latest/scale-to-width-down/521?cb=20190101164602&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 12 décembre__ et a __36 ans.__ Il __mesure 1m82,__ ce qui est une taille plutôt grande pour un homme. \n \n-__Originaire d'East Blue, son plat préféré__ est le __fromage.__*", true)
    .addField("*__Grade :__*", "**__Capitaine__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/9/9d/Nezumi_Anime_Infobox.png/revision/latest/scale-to-width-down/521?cb=20190101164602&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Nezumi | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/9/9d/Nezumi_Anime_Infobox.png/revision/latest/scale-to-width-down/521?cb=20190101164602&path-prefix=fr");
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "arlong"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Arlong #0094__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Arlong", "https://static.wikia.nocookie.net/onepiece/images/c/c0/Arlong_Furieux.png/revision/latest/scale-to-width-down/340?cb=20190509213229&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Arlong")
    .setDescription("*__La Vivre Card de Arlong__* est la **__#0094__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/c/c0/Arlong_Furieux.png/revision/latest/scale-to-width-down/340?cb=20190509213229&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 3 mai__ et a __41 ans.__ Il __mesure 2m63,__ ce qui est une taille correcte pour un homme-poisson. \n \n-Après sa défaite face à Luffy, __il fut emprisonné.__ \n \n-__Son plat préféré__ est le __boeuf grillé.__ \n \n-Son __groupe sanguin__ est de __type F.__*", true)
    .addField("*__Prime :__*", "**__~~20,000,000 Berrys~~__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/c/c0/Arlong_Furieux.png/revision/latest/scale-to-width-down/340?cb=20190509213229&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Arlong | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/c/c0/Arlong_Furieux.png/revision/latest/scale-to-width-down/340?cb=20190509213229&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "octo"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ff11")
    .setTitle("***__Vivre Card Octo #0095__***")
    .setURL("https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
    .setAuthor("Octo", "https://static.wikia.nocookie.net/onepiece/images/e/e1/Octo_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20180209083818&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Octo")
    .setDescription("*__La Vivre Card de Octo__* est la **__#0095__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/e/e1/Octo_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20180209083818&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 8 août__ et a __38 ans.__ Il __mesure 2m20,__ ce qui est une taille assez basse pour un homme-poisson. \n \n-Après la destruction d'Arlong Park, __il fut le seul membre de l'équipage d'Arlong à réussir à s'échapper.__ \n \n-__Ses plats préférés__ sont les __takoyaki__ et les __biscuits au takoyaki.__ \n \n-Son __groupe sanguin__ est de __type S.__ \n \n-__Sa prime est inférieure à celle de Kuroobi__ car __ce dernier était considéré comme le bras droit d'Arlong.__ \n \n-Sa carte révèle que __Octo est bien son vrai nom__ et que __Octy est seulement un surnom.__*", true)
    .addField("*__Prime :__*", "**__8,000,000 Berrys__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/e/e1/Octo_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20180209083818&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Octo | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/e/e1/Octo_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20180209083818&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "chabo"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Chabo #0096__***")
    .setURL("https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/")
    .setAuthor("Chabo", "https://static.wikia.nocookie.net/onepiece/images/a/a4/Chabo_Anime_Avant_Ellipse_Infobox.png/revision/latest/scale-to-width-down/225?cb=20141019112200&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Chabo")
    .setDescription("*__La Vivre Card de Chabo__* est la **__#0096__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/a/a4/Chabo_Anime_Avant_Ellipse_Infobox.png/revision/latest/scale-to-width-down/225?cb=20141019112200&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 14 juin.__ \n \n-__Originaire du village de Gosa,__ il voulait __venger son père en tuant Arlong.__ \n \n-Aujourd'hui, il est __employé dans l'usine de mandarines de Bellemer.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/a/a4/Chabo_Anime_Avant_Ellipse_Infobox.png/revision/latest/scale-to-width-down/225?cb=20141019112200&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Chabo | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/a/a4/Chabo_Anime_Avant_Ellipse_Infobox.png/revision/latest/scale-to-width-down/225?cb=20141019112200&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "nojiko"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Nojiko #0097__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Nojiko", "https://static.wikia.nocookie.net/onepiece/images/6/63/Nojiko_Anime_Pre_Ellipse_Infobox.png/revision/latest?cb=20180124101928&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Nojiko")
    .setDescription("*__La Vivre Card de Nojiko__* est la **__#0097__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/6/63/Nojiko_Anime_Pre_Ellipse_Infobox.png/revision/latest?cb=20180124101928&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Elle est __née le 25 juillet__ et a __22 ans.__ Elle __mesure 1m70,__ ce qui est une taille correcte pour une femme. \n \n-__Son plat préféré__ est la __mandarine mikan.__ \n \n-Son __groupe sanguin__ est de __type S.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/6/63/Nojiko_Anime_Pre_Ellipse_Infobox.png/revision/latest?cb=20180124101928&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Nojiko | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/6/63/Nojiko_Anime_Pre_Ellipse_Infobox.png/revision/latest?cb=20180124101928&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "genzo"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Genzo #0098__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Genzo", "https://static.wikia.nocookie.net/onepiece/images/6/6c/Genz%C3%B4_Portrait.png/revision/latest/scale-to-width-down/480?cb=20150405023213&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Genzô")
    .setDescription("*__La Vivre Card de Genzo__* est la **__#0098__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/6/6c/Genz%C3%B4_Portrait.png/revision/latest/scale-to-width-down/480?cb=20150405023213&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 17 juin__ et a __48 ans.__ Il __mesure 1m73,__ ce qui est une taille correcte pour un homme. \n \n-__Originaire de Kokoyashi, son plat préféré__ est le __melon au jambon cru.__ \n \n-Son __groupe sanguin__ est de __type F.__*", true)
    .addField("*__Titres :__*", "**__Sheriff de Kokoyashi \n \nMaire de Kokoyashi__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/6/6c/Genz%C3%B4_Portrait.png/revision/latest/scale-to-width-down/480?cb=20150405023213&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Genzo | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/6/6c/Genz%C3%B4_Portrait.png/revision/latest/scale-to-width-down/480?cb=20150405023213&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "kaneshiro"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Kaneshiro #0099__***")
    .setURL("https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/")
    .setAuthor("Kaneshiro", "https://static.wikia.nocookie.net/onepiece/images/a/ab/Kaneshiro_Portrait.png/revision/latest/scale-to-width-down/294?cb=20190704112204&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Kaneshiro")
    .setDescription("*__La Vivre Card de Kaneshiro__* est la **__#0099__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/a/ab/Kaneshiro_Portrait.png/revision/latest/scale-to-width-down/294?cb=20190704112204&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 2 décembre.__ \n \n-Il était le __charpentier de l'équipage d'Arlong.__ \n \n-__Il a fait partie de l'équipage des Pirates du Soleil.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/a/ab/Kaneshiro_Portrait.png/revision/latest/scale-to-width-down/294?cb=20190704112204&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Kaneshiro | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/a/ab/Kaneshiro_Portrait.png/revision/latest/scale-to-width-down/294?cb=20190704112204&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "pisaro"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Pisaro #0100__***")
    .setURL("https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/")
    .setAuthor("Pisaro", "https://static.wikia.nocookie.net/onepiece/images/b/b7/Pisaro_Anime_Infobox.png/revision/latest/scale-to-width-down/251?cb=20170718203040&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Pisaro")
    .setDescription("*__La Vivre Card de Pisaro__* est la **__#0100__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/b/b7/Pisaro_Anime_Infobox.png/revision/latest/scale-to-width-down/251?cb=20170718203040&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 14 août.__ \n \n-Il était le __musicien de l'équipage d'Arlong.__ \n \n-__Il a fait partie de l'équipage des Pirates du Soleil.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/b/b7/Pisaro_Anime_Infobox.png/revision/latest/scale-to-width-down/251?cb=20170718203040&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Pisaro | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/b/b7/Pisaro_Anime_Infobox.png/revision/latest/scale-to-width-down/251?cb=20170718203040&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "meuh-meuh"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#bbb9b9')
    .setTitle('***__Vivre Card Meuh-Meuh #0101__***')
    .setURL('https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/')
    .setAuthor('Meuh-Meuh', 'https://static.wikia.nocookie.net/onepiece/images/b/b6/Momoo_Anime_Infobox.png/revision/latest?cb=20130212013602', 'https://onepiece.fandom.com/fr/wiki/Meuh-Meuh')
    .setDescription('*__La Vivre Card de Meuh-Meuh__* est la **__#0101__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
    .setThumbnail('https://static.wikia.nocookie.net/onepiece/images/b/b6/Momoo_Anime_Infobox.png/revision/latest?cb=20130212013602')
    .addField('*__Informations officielles :__*', "*-Il est __né le 9 avril__ et a __16 ans.__ Il mesure __36m00,__ ce qui est une taille plutôt grande pour un monstre marin. \n \n-Bien que __dans sa Vivre Card son nom soit orthographié 'Momoo',__ pour moi __cela restera 'Meuh-Meuh'.__ \n \n-__Originaire de Grand Line, ses plats préférés__ sont le __porc maruyaki__ et le __requin.__ \n \n-Son __groupe sanguin__ est de __type S.__ \n \n-Désormais, il est __considéré comme l'animal de compagnie de l'équipage de Caribou.__ \n \n-Il a développé __un traumatisme à cause de la souffrance que lui ont infligé Luffy et Sanji__ et la __panique l'envahit dès qu'il les voit.__*", true)
    .setImage('https://static.wikia.nocookie.net/onepiece/images/b/b6/Momoo_Anime_Infobox.png/revision/latest?cb=20130212013602')
    .setTimestamp()
    .setFooter("Vivre Card de Meuh-Meuh | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/b/b6/Momoo_Anime_Infobox.png/revision/latest?cb=20130212013602");
                                                                                                        
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "smack"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Smack #0102__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Smack", "https://i.skyrock.net/4238/87434238/pics/3222608625_1_2_8BeirHLW.jpg", "https://onepiece.fandom.com/fr/wiki/Smack")
    .setDescription("*__La Vivre Card de Smack__* est la **__#0102__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://i.skyrock.net/4238/87434238/pics/3222608625_1_2_8BeirHLW.jpg")
    .addField("*__Informations officielles :__*", "*-Il est __né le 23 mai__ et a __35 ans.__ Il __mesure 2m57,__ ce qui est une taille correcte pour un homme-poisson. \n \n-Après sa défaite face à Usopp, __il fut emprisonné.__ \n \n-__Son plat préféré__ est la __soupe miso aux palourdes.__ \n \n-Son __groupe sanguin__ est de __type X.__*", true)
    .addField("*__Prime :__*", "**__~~5,500,000 Berrys~~__**", true)
    .setImage("https://i.skyrock.net/4238/87434238/pics/3222608625_1_2_8BeirHLW.jpg")
    .setTimestamp()
    .setFooter("Vivre Card de Smack | " + message.author.username, "https://i.skyrock.net/4238/87434238/pics/3222608625_1_2_8BeirHLW.jpg");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "kuroobi"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Kuroobi #0103__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Kuroobi", "https://static.wikia.nocookie.net/onepiece/images/4/45/Kuroobi_Portrait.png/revision/latest/scale-to-width-down/515?cb=20160630104717&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Kuroobi")
    .setDescription("*__La Vivre Card de Kuroobi__* est la **__#0103__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/4/45/Kuroobi_Portrait.png/revision/latest/scale-to-width-down/515?cb=20160630104717&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 25 octobre__ et a __38 ans.__ Il __mesure 2m52,__ ce qui est une taille correcte pour un homme-poisson. \n \n-Après sa défaite face à Sanji, __il fut emprisonné.__ \n \n-Au départ, __Kuroobi a été conçu comme le n°2 d'Arlong, son bras droit.__ Pourtant, __ce détail n'a pas été mentionné dans le manga.__ \n \n-__Sa prime__ est donc __plus élevée que celle d'Octo__ et __représente sa dangerosité et sa puissance.__ \n \n-__Son plat préféré__ est l'__anguille au sashimi.__ \n \n-Son __groupe sanguin__ est de __type XF.__*", true)
    .addField("*__Prime :__*", "**__~~9,000,000 Berrys~~__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/4/45/Kuroobi_Portrait.png/revision/latest/scale-to-width-down/515?cb=20160630104717&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Kuroobi | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/4/45/Kuroobi_Portrait.png/revision/latest/scale-to-width-down/515?cb=20160630104717&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "shioyaki"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Shioyaki #0104__***")
    .setURL("https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/")
    .setAuthor("Shioyaki", "https://static.wikia.nocookie.net/onepiece/images/8/8a/Shioyaki_Portrait.png/revision/latest/scale-to-width-down/120?cb=20160730100613&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Shioyaki")
    .setDescription("*__La Vivre Card de Shioyaki__* est la **__#0104__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/8/8a/Shioyaki_Portrait.png/revision/latest/scale-to-width-down/120?cb=20160730100613&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 27 mars.__ \n \n-Il était le __chef des banquets de l'équipage d'Arlong.__ \n \n-__Il a fait partie de l'équipage des Pirates du Soleil.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/8/8a/Shioyaki_Portrait.png/revision/latest/scale-to-width-down/120?cb=20160730100613&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Shioyaki | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/8/8a/Shioyaki_Portrait.png/revision/latest/scale-to-width-down/120?cb=20160730100613&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "take"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Take #0105__***")
    .setURL("https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/")
    .setAuthor("Take", "https://static.wikia.nocookie.net/onepiece/images/c/c7/Take_Anime_Infobox.png/revision/latest/scale-to-width-down/227?cb=20141010102147&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Take")
    .setDescription("*__La Vivre Card de Take__* est la **__#0105__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/c/c7/Take_Anime_Infobox.png/revision/latest/scale-to-width-down/227?cb=20141010102147&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 21 août.__ \n \n-Il était le __superviseur des banquets de l'équipage d'Arlong.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/c/c7/Take_Anime_Infobox.png/revision/latest/scale-to-width-down/227?cb=20141010102147&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Take | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/c/c7/Take_Anime_Infobox.png/revision/latest/scale-to-width-down/227?cb=20141010102147&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "pudding-pudding"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#0088fe")
    .setTitle("***__Vivre Card Pudding-Pudding #0106__***")
    .setURL("https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/")
    .setAuthor("Pudding-Pudding", "https://static.wikia.nocookie.net/onepiece/images/f/f7/Pudding_Pudding_Portrait.png/revision/latest/scale-to-width-down/264?cb=20160830104643&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Pudding_Pudding")
    .setDescription("*__La Vivre Card de Pudding-Pudding__* est la **__#0106__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/f/f7/Pudding_Pudding_Portrait.png/revision/latest/scale-to-width-down/264?cb=20160830104643&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 16 mai.__ \n \n-__Originaire d'East Blue,__ c'est le __marine qui a tenté d'évacuer les citoyens de Kokoyashi, en vain.__*", true)
    .addField("*__Grade :__*", "**__~~Commodore~~__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/f/f7/Pudding_Pudding_Portrait.png/revision/latest/scale-to-width-down/264?cb=20160830104643&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Pudding-Pudding | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/f/f7/Pudding_Pudding_Portrait.png/revision/latest/scale-to-width-down/264?cb=20160830104643&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "belmer"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Belmer #0107__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Belmer", "https://static.wikia.nocookie.net/onepiece/images/7/73/Bell-m%C3%A8re_Portrait.png/revision/latest/scale-to-width-down/480?cb=20150321003710&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Bell-mère")
    .setDescription("*__La Vivre Card de Belmer__* est la **__#0107__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/7/73/Bell-m%C3%A8re_Portrait.png/revision/latest/scale-to-width-down/480?cb=20150321003710&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Elle est __née le 3 décembre__ et est décédée a __30 ans.__ Elle __mesurait 1m86,__ ce qui était une taille assez grande pour une femme. \n \n-Bien que __dans sa Vivre Card son nom soit orthographié 'Bellemere',__ pour moi __cela restera 'Belmer'.__ \n \n-__Originaire de Kokoyashi, son plat préféré__ est la __mandarine mikan.__ \n \n-Son __groupe sanguin__ est de __type S.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/7/73/Bell-m%C3%A8re_Portrait.png/revision/latest/scale-to-width-down/480?cb=20150321003710&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Belmer | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/7/73/Bell-m%C3%A8re_Portrait.png/revision/latest/scale-to-width-down/480?cb=20150321003710&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "nakoh"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Nakoh #0108__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Nakoh")
    .setAuthor("Nakoh", "https://static.wikia.nocookie.net/onepiece/images/4/4f/Nako_Anime_Infobox.png/revision/latest/scale-to-width-down/625?cb=20140430121035&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Nakoh")
    .setDescription("*__La Vivre Card de Nakoh__* est la **__#0108__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/4/4f/Nako_Anime_Infobox.png/revision/latest/scale-to-width-down/625?cb=20140430121035&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 1 juillet.__ \n \n-C'est le __médecin de Kokoyashi.__*", true)
    .addField("*__Titre :__*", "**__Médecin de Kokoyashi__**",true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/4/4f/Nako_Anime_Infobox.png/revision/latest/scale-to-width-down/625?cb=20140430121035&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Nakoh | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/4/4f/Nako_Anime_Infobox.png/revision/latest/scale-to-width-down/625?cb=20140430121035&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "mamy mee"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Mamy Mee #0109__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Mamy_Mee_et_Daddy_Dee")
    .setAuthor("Mamy Mee", "https://static.wikia.nocookie.net/onepiece/images/b/b0/Mamy_Mee_Anime_Infobox.png/revision/latest/scale-to-width-down/198?cb=20170718204024&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Mamy_Mee_et_Daddy_Dee")
    .setDescription("*__La Vivre Card de Mamy Mee__* est la **__#0109__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/b/b0/Mamy_Mee_Anime_Infobox.png/revision/latest/scale-to-width-down/198?cb=20170718204024&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Elle est __née le 21 novembre.__ \n \n-Elle avait voulu __accueillir Nami et Nojiko dans son orphelinat__ mais Belmer avait refusé.*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/b/b0/Mamy_Mee_Anime_Infobox.png/revision/latest/scale-to-width-down/198?cb=20170718204024&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Mamy Mee | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/b/b0/Mamy_Mee_Anime_Infobox.png/revision/latest/scale-to-width-down/198?cb=20170718204024&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "sam"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Sam #0110__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Sam")
    .setAuthor("Sam", "https://static.wikia.nocookie.net/onepiece/images/c/cb/Sam_Anime_Infobox.png/revision/latest/scale-to-width-down/232?cb=20180531152004&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Sam")
    .setDescription("*__La Vivre Card de Sam__* est la **__#0110__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/c/cb/Sam_Anime_Infobox.png/revision/latest/scale-to-width-down/232?cb=20180531152004&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 21 octobre.__ \n \n-C'est __un Easter Egg__ qui __aime beaucoup faire la fête.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/c/cb/Sam_Anime_Infobox.png/revision/latest/scale-to-width-down/232?cb=20180531152004&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Sam | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/c/cb/Sam_Anime_Infobox.png/revision/latest/scale-to-width-down/232?cb=20180531152004&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "escargophones"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#bbb9b9")
    .setTitle("***__Vivre Card Escargophones #0111__***")
    .setURL("https://twitter.com/newworldartur/status/1081580244807700480")
    .setAuthor("Escargophones", "https://pbs.twimg.com/media/DwKLcKRWsAAcDHk?format=jpg&name=small", "https://www.quora.com/q/onepiece/Vivre-Card-Baroque-Works-Fishman-Island-Dawn-of-One-Piece")
    .setDescription("*__La Vivre Card des Escargophones__* est la **__#0111__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://pbs.twimg.com/media/DwKLcKRWsAAcDHk?format=jpg&name=small")
    .addField("*__Informations officielles :__*", "*-Il existe __10 types d'escargophones !__ \n \n-Leur __sexe varie en fonction des individus.__ \n \n-__Leur plat préféré__ est l'__herbe__.*", true)
    .setImage("https://pbs.twimg.com/media/DwKLcKRWsAAcDHk?format=jpg&name=small")
    .setTimestamp()
    .setFooter("Vivre Card des Escargophones | " + message.author.username, "https://pbs.twimg.com/media/DwKLcKRWsAAcDHk?format=jpg&name=small");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "martins facteur"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#bbb9b9")
    .setTitle("***__Vivre Card Martins Facteur #0112__***")
    .setURL("https://twitter.com/newworldartur/status/1081581758217375746")
    .setAuthor("Martins Facteur", "https://pbs.twimg.com/media/DwKM3FiWwAAAzSU?format=jpg&name=large", "https://www.quora.com/q/onepiece/Vivre-Card-Baroque-Works-Fishman-Island-Dawn-of-One-Piece")
    .setDescription("*__La Vivre Card des Martins Facteur__* est la **__#0112__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://pbs.twimg.com/media/DwKM3FiWwAAAzSU?format=jpg&name=large")
    .addField("*__Informations officielles :__*", "*-__Originaire de Grand Line, les Martins Facteur livrent sur toutes les mers, exceptées quelques zones maritimes.__ \n \n-Leur __sexe varie en fonction des individus.__ \n \n-__Leur plat préféré__ est la __sardine__.*", true)
    .addField("*__Espèce :__*", "**__Martin Facteur__**", true)
    .setImage("https://pbs.twimg.com/media/DwKM3FiWwAAAzSU?format=jpg&name=large")
    .setTimestamp()
    .setFooter("Vivre Card des Martins Facteur | " + message.author.username, "https://pbs.twimg.com/media/DwKM3FiWwAAAzSU?format=jpg&name=large");
    
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "brannew"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#0088fe")
    .setTitle("***__Vivre Card Brannew #0113__***")
    .setURL("https://thelibraryofohara.com/2019/04/14/vivre-card-databook-vol-8-all-the-new-information/")
    .setAuthor("Brannew", "https://static.wikia.nocookie.net/onepiece/images/3/3d/Brannew_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20210118100643&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Brannew")
    .setDescription("*__La Vivre Card de Brannew__* est la **__#0113__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/3/3d/Brannew_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20210118100643&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 3 septembre__ et a __56 ans.__ Il __mesure 1m90,__ ce qui est une taille plutôt grande pour un homme. \n \n-Brannew est __généralement montré en présentant les primes de l'équipage au chapeau de paille__ à la fin d'un arc. \n \n-__Originaire de Grand Line, son plat préféré__ est le __blanc-manger.__ \n \n-Son __groupe sanguin__ est de __type X.__*", true)
    .addField("*__Grade :__*", "**__~~Commandant~~ \n \nCommodore__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/3/3d/Brannew_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20210118100643&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Brannew | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/3/3d/Brannew_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20210118100643&path-prefix=fr");
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "john giant"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#0088fe")
    .setTitle("***__Vivre Card John Giant #0114__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/John_Giant")
    .setAuthor("John Giant", "https://static.wikia.nocookie.net/onepiece/images/1/1e/John_Giant_Portrait.png/revision/latest/scale-to-width-down/392?cb=20180623164819&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/John_Giant")
    .setDescription("*__La Vivre Card de John Giant__* est la **__#0114__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/1/1e/John_Giant_Portrait.png/revision/latest/scale-to-width-down/392?cb=20180623164819&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 19 mai__ et a __plus de 63 ans.__ \n \n-John Giant fut l'__un des premiers à comprendre la réelle menace que représentait Luffy.__ \n \n-Il a __combattu aux côtés des autres Vice-Amiraux lors de la Guerre au Sommet.__*", true)
    .addField("*__Grade :__*", "**__Vice-Amiral__**", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/1/1e/John_Giant_Portrait.png/revision/latest/scale-to-width-down/392?cb=20180623164819&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de John Giant | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/1/1e/John_Giant_Portrait.png/revision/latest/scale-to-width-down/392?cb=20180623164819&path-prefix=fr");
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "loguetown"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#6b2000")
    .setTitle("***__Classeur Vivre Cards Loguetown__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setAuthor("Classeur Vivre Cards Loguetown", "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setDescription("*__Le Classeur de Loguetown regroupe toutes les Vivre Cards disponibles de l'Arc Loguetown (11).__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .addField("*__Vivre Cards Loguetown disponibles :__*", "**__-Packi #0115 \n \n-Koze #0116 \n \n-Hanger #0117 \n \n-Ippon Matsu #0118 \n \n-Ipponume #0119 \n \nSapi #0120 \n \n-Mashikaku #0121 \n \n-Smoker #0122 \n \n-Yu #0123 \n \n-Tashigi #0124 \n \n-MONKEY D Dragon #0125__**")
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .setTimestamp()
    .setFooter("Classeur Vivre Cards Loguetown | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "packi"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Packi #0115__***")
    .setURL("https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
    .setAuthor("Packi", "https://static.wikia.nocookie.net/onepiece/images/6/67/Packi_Infobox.png/revision/latest/scale-to-width-down/270?cb=20150102210648&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Packi")
    .setDescription("*__La Vivre Card de Packi__* est la **__#0115__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/6/67/Packi_Infobox.png/revision/latest/scale-to-width-down/270?cb=20150102210648&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 9 décembre.__ \n \n-Il est __l'un des pirates qui s'est fait battre facilement par Tashigi__ lorsque celle-ci avait perdu ses lunettes. \n \n-Il fait parti de __l'équipage des Pirates Yes.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/6/67/Packi_Infobox.png/revision/latest/scale-to-width-down/270?cb=20150102210648&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Packi | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/6/67/Packi_Infobox.png/revision/latest/scale-to-width-down/270?cb=20150102210648&path-prefix=fr");
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "koze"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Vivre Card Koze #0116__***")
    .setURL("https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
    .setAuthor("Koze", "https://static.wikia.nocookie.net/onepiece/images/6/6a/Koze_Infobox.png/revision/latest/scale-to-width-down/270?cb=20131031172505&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Koze")
    .setDescription("*__La Vivre Card de Koze__* est la **__#0116__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/6/6a/Koze_Infobox.png/revision/latest/scale-to-width-down/270?cb=20131031172505&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 27 mai.__ \n \n-Il est __l'un des pirates qui s'est fait battre facilement par Tashigi__ lorsque celle-ci avait perdu ses lunettes. \n \n-Il fait parti de __l'équipage des Pirates Yes.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/6/6a/Koze_Infobox.png/revision/latest/scale-to-width-down/270?cb=20131031172505&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Koze | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/6/6a/Koze_Infobox.png/revision/latest/scale-to-width-down/270?cb=20131031172505&path-prefix=fr");
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "hanger"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Hanger #0117__***")
    .setURL("https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
    .setAuthor("Hanger", "https://static.wikia.nocookie.net/onepiece/images/2/2f/Hanger_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20181010191210&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Hanger")
    .setDescription("*__La Vivre Card de Hanger__* est la **__#0117__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/2/2f/Hanger_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20181010191210&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 23 septembre.__ \n \n-Il s'agit du __vendeur de vêtements de Loguetown.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/2/2f/Hanger_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20181010191210&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Hanger | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/2/2f/Hanger_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20181010191210&path-prefix=fr");
    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "ippon matsu"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00ffff")
    .setTitle("***__Vivre Card Ippon Matsu #0118__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Ippon Matsu", "https://static.wikia.nocookie.net/onepiece/images/c/c7/Ippon_Matsu_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20140806232415&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Ippon_Matsu")
    .setDescription('*__La Vivre Card de Ippon Matsu__* est la **__#0118__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/c/c7/Ippon_Matsu_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20140806232415&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 31 septembre__ et a __40 ans.__ Il __mesure 1m57,__ ce qui est une taille très petite pour un homme. \n \n-__Il est né sur East Blue__ est le __Ippon Udon.__ \n \n-__Son groupe sanguin est X.__*", true)
    .setImage("https://static.wikia.nocookie.net/onepiece/images/c/c7/Ippon_Matsu_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20140806232415&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Ippon Matsu | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/c/c7/Ippon_Matsu_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20140806232415&path-prefix=fr");

message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "ipponume"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#00ffff")
        .setTitle("***__Vivre Card Ipponume #0119__***")
        .setURL("https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
        .setAuthor("Ipponume", "https://static.wikia.nocookie.net/onepiece/images/8/84/Ipponnume_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20190111195956&path-prefix=fr", "https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
        .setDescription('*__La Vivre Card de Ipponume__* est la **__#0119__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
        .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/8/84/Ipponnume_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20190111195956&path-prefix=fr")
        .addField("*__Informations officielles :__*", "*-Elle est __née le 1 décembre.__ \n \n-C'est la __femme de Ippon Matsu.__ \n \n-Elle __s'occupe également de la vente des sabres__ et __était contre le fait que son mari offre ses deux meilleurs sabres à Zoro.__*", true)
        .setImage("https://static.wikia.nocookie.net/onepiece/images/8/84/Ipponnume_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20190111195956&path-prefix=fr")
        .setTimestamp()
        .setFooter("Vivre Card de Ipponume | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/8/84/Ipponnume_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20190111195956&path-prefix=fr");
    
    message.channel.send(exampleEmbed);
        }

        if(message.content == prefix + "sapi"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor("#00ffff")
            .setTitle("***__Vivre Card Sapi #0120__***")
            .setURL("https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
            .setAuthor("Sapi", "https://static.wikia.nocookie.net/onepiece/images/5/5c/Sapi.png/revision/latest/scale-to-width-down/270?cb=20130324132256&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Sapî")
            .setDescription('*__La Vivre Card de Sapi__* est la **__#0120__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
            .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/5/5c/Sapi.png/revision/latest/scale-to-width-down/270?cb=20130324132256&path-prefix=fr")
            .addField("*__Informations officielles :__*", "*-Il est __né le 22 mars.__ \n \n-Il s'agit du __pêcheur qui a vendu le thon géant à Sanji.__*", true)
            .setImage("https://static.wikia.nocookie.net/onepiece/images/5/5c/Sapi.png/revision/latest/scale-to-width-down/270?cb=20130324132256&path-prefix=fr")
            .setTimestamp()
            .setFooter("Vivre Card de Sapi | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/5/5c/Sapi.png/revision/latest/scale-to-width-down/270?cb=20130324132256&path-prefix=fr");
        
        message.channel.send(exampleEmbed);
            }
if(message.content == prefix + "mashikaku"){
const exampleEmbed = new Discord.MessageEmbed()
.setColor("#0088fe")
.setTitle("***__Vivre Card Mashikaku #0121__***")
.setURL("https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
.setAuthor("Mashikaku", "https://static.wikia.nocookie.net/onepiece/images/e/e2/Mashikaku_%28Marine%29_Portrait.png/revision/latest/scale-to-width-down/192?cb=20160723170848&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Mashikaku_(Marine)")
.setDescription('*__La Vivre Card de Mashikaku__* est la **__#0121__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
.setThumbnail("https://static.wikia.nocookie.net/onepiece/images/e/e2/Mashikaku_%28Marine%29_Portrait.png/revision/latest/scale-to-width-down/192?cb=20160723170848&path-prefix=fr")
.addField("*__Informations officielles :__*", "*-Il est __né le 26 décembre.__ \n \n-Il est __originaire d'East Blue__ est le marine qui __avait fait irruption dans le bureau de Smoker sans frapper à la porte pour l'informer de la présence de Luffy.__*", true)
.addField("*__Grade :__*", "**__Officier__**", true)
.setImage("https://static.wikia.nocookie.net/onepiece/images/e/e2/Mashikaku_%28Marine%29_Portrait.png/revision/latest/scale-to-width-down/192?cb=20160723170848&path-prefix=fr")
.setTimestamp()
.setFooter("Vivre Card de Mashikaku | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/e/e2/Mashikaku_%28Marine%29_Portrait.png/revision/latest/scale-to-width-down/192?cb=20160723170848&path-prefix=fr");
            
message.channel.send(exampleEmbed);
}

if(message.content == prefix + "smoker"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#0088fe")
    .setTitle("***__Vivre Card Smoker #0122__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Smoker", "https://static.wikia.nocookie.net/onepiece/images/1/1d/Smoker_Anime_Pre_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20160618222838&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Smoker")
    .setDescription("*__La Vivre Card de Smoker__* est la **__#0122__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
    .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/1/1d/Smoker_Anime_Pre_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20160618222838&path-prefix=fr")
    .addField("*__Informations officielles :__*", "*-Il est __né le 14 mars__ et a __36 ans.__ Il __mesure 2m09,__ ce qui est une taille très grande pour un homme. \n \n-__Il est né sur Grand Line__ et __son plat préféré__ est le __poulet fumé.__ \n \n-Smoker se bat pour __protéger les autres__ et plus particulièrement __ses subordonnés.__ \n \n-__Il aime Fujitora__ et était __pour la destitution de l'Ordre des Shichibukai.__ \n \n-__L'un de ses épithètes, 'Le Chien Sauvage',__ vient du fait qu'__il est toujours en colère contre ses supérieurs.__ \n \n-Il est confirmé que __Smoker utilise le Haki de l'Armement ainsi que le Haki de l'Observation.__ \n \n-__Son groupe sanguin__ est de type __XF.__*", true)
    .addField("*__Grade :__*", "**__~~Colonel~~ \n \n~~Commodore~~ \n \nVice-Amiral__**", true)
    .addField("*__Fruit du Démon :__*", "**__Moku Moku no Mi__** *__(Fruit de la Fumée)__*")
    .setImage("https://static.wikia.nocookie.net/onepiece/images/1/1d/Smoker_Anime_Pre_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20160618222838&path-prefix=fr")
    .setTimestamp()
    .setFooter("Vivre Card de Smoker | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/1/1d/Smoker_Anime_Pre_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20160618222838&path-prefix=fr");
                                                
    message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "yu"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#543900")
        .setTitle("***__Vivre Card Yu #0123__***")
        .setURL("https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
        .setAuthor("Yu", "https://static.wikia.nocookie.net/onepiece/images/8/8e/Anime_Yu_Infobox.png/revision/latest/scale-to-width-down/240?cb=20130324135429&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Yu")
        .setDescription("*__La Vivre Card de Yu__* est la **__#0123__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
        .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/8/8e/Anime_Yu_Infobox.png/revision/latest/scale-to-width-down/240?cb=20130324135429&path-prefix=fr")
        .addField("*__Informations officielles :__*", "*-Elle est __née le 19 juillet.__\n \n-C'est la fille qui __avait renversé sa glace sur Smoker.__*", true)
        .setImage("https://static.wikia.nocookie.net/onepiece/images/8/8e/Anime_Yu_Infobox.png/revision/latest/scale-to-width-down/240?cb=20130324135429&path-prefix=fr")
        .setTimestamp()
        .setFooter("Vivre Card de Yu | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/8/8e/Anime_Yu_Infobox.png/revision/latest/scale-to-width-down/240?cb=20130324135429&path-prefix=fr");
                                                    
        message.channel.send(exampleEmbed);
        }

        if(message.content == prefix + "tashigi"){
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor("#0088fe")
            .setTitle("***__Vivre Card Tashigi #0124__***")
            .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
            .setAuthor("Tashigi", "https://static.wikia.nocookie.net/onepiece/images/3/3e/Tashigi_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20131116135844&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Tashigi")
            .setDescription("*__La Vivre Card de Tashigi__* est la **__#0124__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
            .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/3/3e/Tashigi_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20131116135844&path-prefix=fr")
            .addField("*__Informations officielles :__*", "*-Elle est __née le 6 octobre__ et a __23 ans.__ Elle __mesure 1m70,__ ce qui est une taille assez grande pour une femme. \n \n-__Elle est née sur East Blue__ et __sa boisson préférée__ est le __café chaud.__ \n \n-Il est précisé qu'__elle ressemble juste à Kuina.__ \n \n-Il est confirmé qu'__elle maîtrise le Haki de l'Armement ainsi que le Haki de l'Observation.__*", true)
            .addField("*__Grade :__*", "**__~~Commandant~~ \n \n~~Lieutenant~~ \n \nCapitaine__**", true)
            .setImage("https://static.wikia.nocookie.net/onepiece/images/3/3e/Tashigi_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20131116135844&path-prefix=fr")
            .setTimestamp()
            .setFooter("Vivre Card de Tashigi | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/3/3e/Tashigi_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20131116135844&path-prefix=fr");
                                                        
            message.channel.send(exampleEmbed);
            }

if(message.content == prefix + "dragon"){
const exampleEmbed = new Discord.MessageEmbed()
.setColor("#8000ff")
.setTitle("***__Vivre Card MONKEY D Dragon #0125__***")
.setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
.setAuthor("MONKEY D Dragon", "https://static.wikia.nocookie.net/onepiece/images/7/75/Monkey_D._Dragon_Post_Ellipse_Anime_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20160809125023&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Monkey_D._Dragon")
.setDescription("*__La Vivre Card de MONKEY D Dragon__* est la **__#0125__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
.setThumbnail("https://static.wikia.nocookie.net/onepiece/images/7/75/Monkey_D._Dragon_Post_Ellipse_Anime_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20160809125023&path-prefix=fr")
.addField("*__Informations officielles :__*", "*-Il est __né le 5 octobre__ et a __55 ans.__ Il __mesure 2m56,__ ce qui est une taille immense pour un homme. \n \n-Il est __originaire du Royaume de Goa.__\n \n-À un certain moment de sa vie, __Dragon à réalisé à quel point le monde était vraiment pourri,__ ce qui l'a amener à fonder l'Armée Révolutionnaire. \n \n-__L'Armée Révolutionnaire à été fondée entre l'exécution de Roger et la naissance de Luffy.__ \n \n-__Il valorise__ par dessus tout __la sincérité et la discipline parmi ses hommes.__ \n \n-__Son objectif principal est la paix. Ses victoires des guerres__ ne sont rien de plus que __des moyens d'y parvenir, pas quelque chose que l'on peut apprécier.__ \n \n-__Sa Vivre Card suggère un possible secret sur son passé.__ Cependant, __même si ses subordonnés apprenaient la vérité, ils le suivraient toujours sans hésiter.__ \n \n-__Son bateau est le 'Viento Granma'. 'Viento' signifie 'vent' en cubain__ et __'Granma'__ est le __bateau qui a été utilisé par Fidel Castro lors de la Révolution Cubaine.__*", true)
.addField("*__Grade :__*", "**__Chef de l'Armée Révolutionnaire__**", true)
.setImage("https://static.wikia.nocookie.net/onepiece/images/7/75/Monkey_D._Dragon_Post_Ellipse_Anime_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20160809125023&path-prefix=fr")
.setTimestamp()
.setFooter("Vivre Card de MONKEY D Dragon | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/7/75/Monkey_D._Dragon_Post_Ellipse_Anime_Infobox.png/revision/latest/scale-to-width-down/1000?cb=20160809125023&path-prefix=fr");
                                                            
message.channel.send(exampleEmbed);
}

if(message.content == prefix + "cap des jumeaux"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#fe5052")
    .setTitle("***__Classeur Vivre Cards Cap des Jumeaux__***")
    .setURL("https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setAuthor("Classeur Vivre Cards Cap des Jumeaux", "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Databooks_One_Piece/Vivre_Card_-_One_Piece_Visual_Dictionary_-_Cartes")
    .setDescription("*__Le Classeur du Cap des Jumeaux regroupe toutes les Vivre Cards disponibles de l'Arc Cap des Jumeaux (3).__*")
    .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .addField("*__Vivre Cards Cap des Jumeaux disponibles :__*", "**__-Crocodile #0174 \n \n-DON QUIXOTE Doflamingo #0266 \n \n-BARTHOLOMEW Kuma #0267 \n \n-Barbe Noire #0274 \n \n-GECKO Moria #0483 \n \n-TRAFALGAR D WATER Law #0518 \n \n-BOA Hancock #0557 \n \n-EDWARD Weeble #0947__**")
    .setImage("https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr")
    .setTimestamp()
    .setFooter("Classeur Vivre Cards Cap des Jumeaux | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/8/8c/Vivre_Card_-_One_Piece_Visual_Dictionary.png/revision/latest?cb=20180905195409&path-prefix=fr");

    message.channel.send(exampleEmbed);
}

if(message.content == prefix + "crocodile"){
const exampleEmbed = new Discord.MessageEmbed()
.setColor("#773e93")
.setTitle("***__Vivre Card Crocodile #0174__***")
.setURL("https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
.setAuthor("Crocodile", "https://bandofgeeks.fr/wp-content/uploads/2015/04/Crocodile-One-Piece.png", "https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
.setDescription("*__La Vivre Card de Crocodile__* est la **__#0174__**. Dedans y sont contenues de *__nombreuses informations officielles.__*")
.setThumbnail("https://bandofgeeks.fr/wp-content/uploads/2015/04/Crocodile-One-Piece.png")
.addField("*__Informations officielles :__*", "*-Il est __né le 5 septembre__ et a __46 ans.__ Il __mesure 2m53,__ ce qui est une taille immense pour un homme. \n \n-__Il est né sur Grand Line__ et __a reçu de nouvelles primes depuis l'ellipse mais leurs montants sont encore inconnus.__ \n \n-Sur sa Vivre Card, __il n'est pas précisé qu'il maîtrise le Haki__ mais rien n'indique qu'il ne le maîtrise pas. \n \n-Oda a déclaré qu’__il a une faiblesse en lien avec son passé et qu’il ne peut s’y opposer. Il a certainement quelque chose qu’Ivankov lui a donné__. \n \n-Il a vu l’exécution de Roger il y a 24 ans et a décidé de prendre la mer. __Il est rapidement devenu Shichibukai de sorte à 'geler' sa prime,__ mais en entrant dans le Nouveau Monde, __il a subi une défaite contre Barbe Blanche.__ \n \n-Il est ensuite __retourné au Paradis et a formé 'Baroque Works' dans le but de trouver l’Arme Antique 'Pluton' cachée quelque part à Alabasta.__ \n \n-__Le nom de son navire est le 'Baroque Gustave',__ probablement une référence au célèbre crocodile Gustave.*", true)
.addField("*__Primes :__*", "**__~~81,000,000 Berrys~~ \n \n? Berrys__**", true)
.addField("*__Fruit du Démon :__*", "**__Suna Suna no Mi__** *__(Fruit du Sable)__*")
.setImage("https://bandofgeeks.fr/wp-content/uploads/2015/04/Crocodile-One-Piece.png")
.setTimestamp()
.setFooter("Vivre Card de Crocodile | " + message.author.username, "https://bandofgeeks.fr/wp-content/uploads/2015/04/Crocodile-One-Piece.png");
                                            
message.channel.send(exampleEmbed);
}

                                                if(message.content == prefix + "doflamingo"){
                                                    const exampleEmbed = new Discord.MessageEmbed()
                                                    .setColor('#773e93')
                                                    .setTitle('***__Vivre Card DON QUIXOTE Doflamingo #0266__***')
                                                    .setURL('https://thelibraryofohara.com/2019/05/13/vivre-card-databook-vol-9-all-the-new-information/')
                                                    .setAuthor('DON QUIXOTE Doflamingo', 'https://i.ytimg.com/vi/_6dXdLHj-E0/maxresdefault.jpg', 'https://thelibraryofohara.com/2019/05/13/vivre-card-databook-vol-9-all-the-new-information/')
                                                    .setDescription('*__La Vivre Card de Doflamingo__* est la **__#0266__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                    .setThumbnail('https://i.ytimg.com/vi/_6dXdLHj-E0/maxresdefault.jpg')
                                                    .addField('*__Informations officielles :__*', "*-Il est __né le 23 octobre__ et a __41 ans.__ Il __mesure 3m01,__ ce qui est une taille immense pour un homme. \n \n-Entre __la revente d’armes__ dans de nombreux pays, __la production des 'SMILE'__ et __le trafic d’êtres humains, Joker contrôlait la plus grande organisation criminelle du Nouveau Monde.__ \n \n-En raison de son passé avec les Dragons Célestes, __Doflamingo avait des liens solides avec les membres les plus importants du Gouvernement Mondial,__ ce dont il a utilisé à son avantage sur Dressrosa. \n \n-Même enfant, __Doflamingo n'a jamais flanché devant la mort__ ce qui lui a __permis de gagner le respect et la loyauté de sa famille.__ \n \n-Après __avoir assassiné son père, Doflamingo a commencé à rire peu importe la gravité de la situation,__ ce qu’il fait encore aujourd'hui. Cependant, __la raison pour laquelle il a commencé à le faire n'est pas précisée.__ \n \n-__Doflamingo connaît la nature du Trésor National de Marie Geoise.__ D'ailleurs, Oda se demande comment __ce trésor affectera le monde.__*", true)
                                                    .addField('*__Prime :__*', "**__~~340,000,000 Berrys~~__**", true)
                                                    .addField("*__Fruit du Démon :__*", "**__Ito Ito no Mi__** *__(Fruit des Fils)__*")
                                                    .setImage('https://i.ytimg.com/vi/_6dXdLHj-E0/maxresdefault.jpg')
                                                    .setTimestamp()
                                                    .setFooter("Vivre Card de DON QUIXOTE Doflamingo | " + message.author.username, "https://i.ytimg.com/vi/_6dXdLHj-E0/maxresdefault.jpg");
                                                
                                                message.channel.send(exampleEmbed);
                                                    }

                                                    if(message.content == prefix + "kuma"){
                                                        const exampleEmbed = new Discord.MessageEmbed()
                                                        .setColor('#773e93')
                                                        .setTitle('***__Vivre Card BARTHOLOMEW Kuma #0267__***')
                                                        .setURL('https://thelibraryofohara.com/2019/07/13/vivre-card-databook-vol-11-all-the-new-information/')
                                                        .setAuthor('BARTHOLOMEW Kuma', 'https://vignette.wikia.nocookie.net/onepiece/images/1/1e/Nikyu_Nikyu_no_Mi_Anime_Infobox.png/revision/latest?cb=20160910150602&path-prefix=fr', 'https://thelibraryofohara.com/2019/07/13/vivre-card-databook-vol-11-all-the-new-information/')
                                                        .setDescription('*__La Vivre Card de Kuma__* est la **__#0267__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                        .setThumbnail('https://vignette.wikia.nocookie.net/onepiece/images/1/1e/Nikyu_Nikyu_no_Mi_Anime_Infobox.png/revision/latest?cb=20160910150602&path-prefix=fr')
                                                        .addField('*__Informations officielles :__*', "*-Il est __né le 9 février__ et a __47 ans.__ Il __mesure 6m89,__ ce qui est une taille immense pour un cyborg. \n \n-__Le royaume de Solbay se situe sur South Blue et Kuma en est l'ancien roi. Il est également originaire du même océan que Bonney.__ \n \n-__Son surnom de 'Tyran' lui a été donné avant qu’il ne rejoigne l’Armée Révolutionnaire.__ \n \n-Il semblerait que cela __provenienne du temps où il régnait sur le Royaume de Solbay,__ mais ce n’est pas clair. De plus, __lorsqu'il était pirate,__ on disait de lui qu’__il était impitoyable.__ \n \n-__Dans son enfance, Kuma était très diligent et semblait s'intéresser particulièrement à un certain livre.__ \n \n-La raison pour laquelle __il a été asservi par les Dragons Célestes__ est due au fait d’avoir __aidé un pirate tel que Luffy à s'échapper de l'Archipel Sabaody après qu'il ait frappé un Dragon Céleste.__ \n \n-À l’origine, __Kuma avait un design différent qui a finalement été réutilisé pour Shiki.__*", true)
                                                        .addField('*__Prime :__*', "**__~~296,000,000 Berrys~~__**", true)
                                                        .addField("*__Fruit du Démon :__*", "**__Nikyu Nikyu no Mi__** *__(Fruit des Coussinets)__*")
                                                        .setImage('https://vignette.wikia.nocookie.net/onepiece/images/1/1e/Nikyu_Nikyu_no_Mi_Anime_Infobox.png/revision/latest?cb=20160910150602&path-prefix=fr')
                                                        .setTimestamp()
                                                        .setFooter("Vivre Card de BARTHOLOMEW Kuma | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/1/1e/Nikyu_Nikyu_no_Mi_Anime_Infobox.png/revision/latest?cb=20160910150602&path-prefix=fr");
                                                    
                                                    message.channel.send(exampleEmbed);
                                                        }

                                                    if(message.content == prefix + "teach"){
                                                        const exampleEmbed = new Discord.MessageEmbed()
                                                        .setColor('#000000')
                                                        .setTitle('***__Vivre Card Marshall D Teach #0274__***')
                                                        .setURL('https://thelibraryofohara.com/2019/02/11/vivre-card-databook-vol-6-all-the-new-information/')
                                                        .setAuthor('Marshall D Teach', 'https://media.discordapp.net/attachments/751846822980485180/767016889476972564/vlcsnap-2020-10-17-15h30m22s007.png?width=1194&height=671', 'https://thelibraryofohara.com/2019/02/11/vivre-card-databook-vol-6-all-the-new-information/')
                                                        .setDescription('*__La Vivre Card de Marshall D Teach__* est la **__#0274__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                        .setThumbnail('https://media.discordapp.net/attachments/751846822980485180/767016889476972564/vlcsnap-2020-10-17-15h30m22s007.png?width=1194&height=671')
                                                        .addField('*__Informations officielles :__*', "*-Il est __né le 3 août__ et a __40 ans.__ Il __mesure 3m44,__ ce qui est une taille immense pour un homme. \n \n-__C'est l'un des 4 Yonko mais aussi un membre du clan 'D' et de la Pire Génération. Pour atteindre ses objectifs, il n'a pas hésité à cacher sa puissance et ses véritables intentions.__ \n \n-Quand il était encore __sur le navire de Barbe Blanche, il a fait profil bas,__ ce qui lui a permis de __prendre Shanks par surprise et de le blesser.__ \n \n-__La raison de la possession de ses 2 Fruits du Démon est encore inconnue__ mais __selon Marco, cela vient de son corps qui est 'différent'.__ \n \n-Malgré sa mauvaise réputation, __c’est quelqu’un qui affirme que les rêves des Hommes ne mourront jamais.__ \n \n-__Teach a grandi quelque part sur Grand Line__ où __il a eu une enfance douloureuse et solitaire.__ \n \n-Au départ, __Oda voulait qu’il porte un cache oeil__. \n \n-Il est confirmé qu'__il utilise les Haki de l'Armement et de l'Observation,__ mais __rien n'est précisé pour le Haki des Rois.__*", true)
                                                        .addField('*__Prime :__*', "**__2,247,600,000 Berrys__**", true)
                                                        .addField("*__Fruits du Démon :__*", "**__Yami Yami no Mi__** *__(Fruit des Ténèbres)__* \n \n**__Gura Gura no Mi__** *__(Fruit du Tremblement)__*")
                                                        .setImage('https://media.discordapp.net/attachments/751846822980485180/767016889476972564/vlcsnap-2020-10-17-15h30m22s007.png?width=1194&height=671')
                                                        .setTimestamp()
                                                        .setFooter("Vivre Card de Marshall D Teach | " + message.author.username, "https://media.discordapp.net/attachments/751846822980485180/767016889476972564/vlcsnap-2020-10-17-15h30m22s007.png?width=1194&height=671");
                                                    
                                                    message.channel.send(exampleEmbed);
                                                        }

                                                        if(message.content == prefix + "moria"){
                                                            const exampleEmbed = new Discord.MessageEmbed()
                                                            .setColor('#543900')
                                                            .setTitle('***__Vivre Card GECKO Moria #0483__***')
                                                            .setURL('https://thelibraryofohara.com/2019/07/13/vivre-card-databook-vol-11-all-the-new-information/')
                                                            .setAuthor('GECKO Moria', 'https://www.grandlinetimes.net/wp-content/uploads/GeckoMoria_925.jpg', 'https://thelibraryofohara.com/2019/07/13/vivre-card-databook-vol-11-all-the-new-information/')
                                                            .setDescription('*__La Vivre Card de Moria__* est la **__#0483__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                            .setThumbnail('https://www.grandlinetimes.net/wp-content/uploads/GeckoMoria_925.jpg')
                                                            .addField('*__Informations officielles :__*', "*-Il est __né le 6 septembre__ et a __50 ans.__ Il __mesure 6m92,__ ce qui est une taille immense pour un homme. \n \n-__Moria a reçu sa prime actuelle avant même de combattre Kaido pour la première fois.__ \n \n-Après sa défaite, __Moria est retourné sur sa mer natale, West Blue__ où __il a construit Thriller Bark. Il est plus tard devenu l’un des 7 Shichibukai.__ \n \n-Au vu de sa faiblesse dans le combat, __(son fruit du démon reposant plus sur la construction d’une armée que sur le combat pur)__ Moria s'est vu retiré des Shichibukai après n'avoir quasiment __rien fait durant la Guerre au Sommet où l'on attendait beaucoup de lui.__ \n \n-__C’est bien Moria qui a volé le corps de Ryuma et son sabre Shusui.__ Pour construire son armée, __Moria a volé des cadavres dans le monde entier et les a stocké à Thriller Bark.__ \n \n-__Bien que limité en absorbant toutes les ombres de Thriller Bark, Moria devient incroyablement puissant au point d'être capable de briser le sol de l’île en une seule attaque.__*", true)
                                                            .addField('*__Prime :__*', "**__320,000,000 Berrys__**", true)
                                                            .addField("*__Fruit du Démon :__*", "**__Kage Kage no Mi__** *__(Fruit des Ombres)__*")
                                                            .setImage('https://www.grandlinetimes.net/wp-content/uploads/GeckoMoria_925.jpg')
                                                            .setTimestamp()
                                                            .setFooter("Vivre Card de GECKO Moria | " + message.author.username, "https://www.grandlinetimes.net/wp-content/uploads/GeckoMoria_925.jpg");
                                                        
                                                        message.channel.send(exampleEmbed);
                                                            }

                                                    if(message.content == prefix + "law"){
                                                        const exampleEmbed = new Discord.MessageEmbed()
                                                        .setColor('#773e93')
                                                        .setTitle('***__Vivre Card TRAFALGAR D WATER Law #0518__***')
                                                        .setURL('https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/')
                                                        .setAuthor('TRAFALGAR D WATER Law', 'https://pm1.narvii.com/6338/eca376cc0d63ce092ca822b7596ce54fa1355f0f_hq.jpg', 'https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/')
                                                        .setDescription('*__La Vivre Card de Law__* est la **__#0518__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                        .setThumbnail('https://pm1.narvii.com/6338/eca376cc0d63ce092ca822b7596ce54fa1355f0f_hq.jpg')
                                                        .addField('*__Informations officielles :__*', "*-Il est __né le 6 octobre__ et a __26 ans.__ Il __mesure 1m91,__ ce qui est une taille plutôt grande pour un homme. \n \n-C’est à la fois __le capitaine et le docteur des Hearth Pirates.__ \n \n-Le nom de son équipage est __un hommage à Corazon__ puisque __c'est un clin d'oeil à son nom__ et que __ce dernier a changé le coeur de Law.__ \n \n-__Oda a essayé différents modèles pour le chapeau de Law__ avant d'opter pour celui que l'on connaît tous.*", true)
                                                        .addField('*__Primes :__*', "**__~~200,000,000 Berrys~~ \n \n~~440,000,000 Berrys~~ \n \n500,000,000 Berrys__**", true)
                                                        .addField("*__Fruit du Démon :__*", "**__Ope Ope no Mi__** *__(Fruit du Bistouri)__*")
                                                        .setImage('https://pm1.narvii.com/6338/eca376cc0d63ce092ca822b7596ce54fa1355f0f_hq.jpg')
                                                        .setTimestamp()
                                                        .setFooter("Vivre Card de TRAFALGAR D WATER Law | " + message.author.username, "https://pm1.narvii.com/6338/eca376cc0d63ce092ca822b7596ce54fa1355f0f_hq.jpg");
                                                    
                                                    message.channel.send(exampleEmbed);
                                                        }

                                                        if(message.content == prefix + "hancock"){
                                                            const exampleEmbed = new Discord.MessageEmbed()
                                                            .setColor('#773e93')
                                                            .setTitle('***__Vivre Card BOA Hancock #0557__***')
                                                            .setURL('https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/')
                                                            .setAuthor('BOA Hancock', 'https://otakucave.com/wp-content/uploads/2020/04/boa-hancock-one-piece.jpg', 'https://thelibraryofohara.com/2018/12/03/vivre-card-databook-vol-4-all-the-new-information/')
                                                            .setDescription('*__La Vivre Card de Hancock__* est la **__#0557__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                            .setThumbnail('https://otakucave.com/wp-content/uploads/2020/04/boa-hancock-one-piece.jpg')
                                                            .addField('*__Informations officielles :__*', "*-Elle est __née le 2 septembre__ et a __31 ans.__ Elle __mesure 1m91,__ ce qui est une taille très grande pour une femme. \n \n-__Hancock est l’impératrice d’Amazon Lily,__ c’est pourquoi __on la surnomme l’Impératrice Pirate.__ \n \n-__Le navire sur lequel naviguent Hancock et les Pirates Kuja est appelé le Serpent de Parfum.__ \n \n-__Hancock possède les 3 types de Haki.__ \n \n-__Hancock est l'aînée__ et a 1 an d'écart avec Sandersonia et 3 avec Marygold. \n \n-__Sa nourriture préférée__ est un __plat Chinois__ car __Amazon Lily a été inspiré de cette culture.__*", true)
                                                            .addField('*__Prime :__*', "**__~~80,000,000 Berrys~~__**", true)
                                                            .addField("*__Fruit du Démon :__*", "**__Mero Mero no Mi__** *__(Fruit de la Passion)__*")
                                                            .setImage('https://otakucave.com/wp-content/uploads/2020/04/boa-hancock-one-piece.jpg')
                                                            .setTimestamp()
                                                            .setFooter("Vivre Card de BOA Hancock | " + message.author.username, "https://otakucave.com/wp-content/uploads/2020/04/boa-hancock-one-piece.jpg");
                                                        
                                                        message.channel.send(exampleEmbed);
                                                            }

                                                            if(message.content == prefix + "weeble"){
                                                                const exampleEmbed = new Discord.MessageEmbed()
                                                                .setColor('#773e93')
                                                                .setTitle('***__Vivre Card EDWARD Weeble #0947__***')
                                                                .setURL('https://thelibraryofohara.com/2019/07/13/vivre-card-databook-vol-11-all-the-new-information/')
                                                                .setAuthor('EDWARD Weeble', 'https://www.grandlinetimes.net/wp-content/uploads/Weeble2.jpg', 'https://thelibraryofohara.com/2019/07/13/vivre-card-databook-vol-11-all-the-new-information/')
                                                                .setDescription('*__La Vivre Card de Weeble__* est la **__#0947__**. Dedans y sont contenues de *__nombreuses informations officielles.__*')
                                                                .setThumbnail('https://www.grandlinetimes.net/wp-content/uploads/Weeble2.jpg')
                                                                .addField('*__Informations officielles :__*', "*-Il est __né le 10 décembre__ et a __35 ans.__ Il __mesure 6m80,__ ce qui est une taille immense pour un homme. \n \n-__Son principal point faible__ se situe au niveau de __ses jambes__ car __elles sont maigres__ alors que __son corps supérieur est massif.__ Ainsi, quand Miss Bakkin est en colère contre lui, elle le frappe sur les jambes. \n \n-Lorsqu'il a appris la mort de Barbe Blanche, __Weeble a juré de se venger et d'arrêter Barbe Noire,__ bien que __Miss Bakkin ne s’intéresse pas particulièrement à Teach.__ \n \n-__Webble a anéanti la plupart des alliés de Barbe Blanche avec une facilité déconcertante montrant qu’il était l'un des Shichibukai le plus puissant.__ \n \n-__Weeble maitrise les Haki de l'Armement et de l'Observation,__ mais __rien n'est précisé pour le Haki des Rois.__*", true)
                                                                .addField('*__Prime :__*', "**__~~480,000,000 Berrys~~__**", true)
                                                                .setImage('https://www.grandlinetimes.net/wp-content/uploads/Weeble2.jpg')
                                                                .setTimestamp()
                                                                .setFooter("Vivre Card de EDWARD Weeble | " + message.author.username, "https://www.grandlinetimes.net/wp-content/uploads/Weeble2.jpg");
                                                            
                                                            message.channel.send(exampleEmbed);
                                                            }

                                                            if(message.content == prefix + "pegre"){
                                                                const exampleEmbed = new Discord.MessageEmbed()
                                                                .setColor('#012e19')
                                                                .setTitle('***__Pègre Organisations :__***')
                                                                .setURL('https://onepiece.fandom.com/fr/wiki/P%C3%A8gre')
                                                                .setAuthor("Pègre Organisation", "https://vignette.wikia.nocookie.net/oproleplaying/images/a/a2/Underworld.png/revision/latest?cb=20161220011117", "https://onepiece.fandom.com/fr/wiki/P%C3%A8gre")
                                                                .setDescription("*__La Pègre a accès à toutes les organisations disponibles (1).__*")
                                                                .setThumbnail("https://vignette.wikia.nocookie.net/oproleplaying/images/a/a2/Underworld.png/revision/latest?cb=20161220011117")
                                                                .addField("*__Organisations disponibles :__*", "**__-Ordre des 7 Shichibukai__**")
                                                                .setImage("https://vignette.wikia.nocookie.net/oproleplaying/images/a/a2/Underworld.png/revision/latest?cb=20161220011117")
                                                                .setTimestamp()
                                                                .setFooter("Pègre Organisations | " + message.author.username, "https://vignette.wikia.nocookie.net/oproleplaying/images/a/a2/Underworld.png/revision/latest?cb=20161220011117");
                                                            
                                                                message.channel.send(exampleEmbed);
                                                            }
    
    if(message.content == prefix + "shichibukai"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#773e93')
        .setTitle('***__Ordre des Shichibukai__***')
        .setURL('https://onepiece.fandom.com/fr/wiki/Pirates/Sept_Grands_Corsaires')
        .setAuthor('Ordre des Shichibukai', 'https://www.pirates-corsaires.com/img3/les-7-capitaines-corsaires-one-piece.jpg', 'https://onepiece.fandom.com/fr/wiki/Pirates/Sept_Grands_Corsaires')
        .setDescription("*__L'Ordre des Shichibukai__ est composée de **__7 membres__**. Durant l'histoire, __cet ordre fut rejoint par un total de__* ***__11 membres.__***")
        .setThumbnail("https://www.pirates-corsaires.com/img3/les-7-capitaines-corsaires-one-piece.jpg")
        .addField("*__Informations officielles :__*", "-*__L'Ordre des Shichibukai était un groupe consistué de 7 pirates à la puissance, l'influence et la renommée mondiale.__ \n \n-__Tout les membres de cet ordre passaient un pacte avec le Gouvernement Mondial__ qui leur permettaient d'__avoir une prime inactive__ et d'__agir comme bon leur semblaient__ en contrepartie de __devoir aider le Gouvernement Mondial lorsque ceux-ci en faisait la demande.__ \n \n-__Cet ordre participait au maintien de l'équilibre mondial avec les 3 Amiraux et les 4 Yonko.__ \n \n-Lors de la Guerre au Sommet, __la totalité des Shichibukai fut convoquée à Marine Ford pour associer leur puissance aux 3 Amiraux et contrer l'attaque de Barbe Blanche.__ \n \n-Suite aux récents évènements de la Rêverie, __il a été décidé que cet ordre soit révoqué à cause des agissements de certains Shichibukai (Crocodile, Doflamingo,...),__ ainsi __leurs primes sont redevenues actives__ et __leur liberté d'action réduite.__*", true)
        .addField("*__Membres des Shichibukai :__*", "**__~~-Jinbe #0010 \n \n-Baggy #0046 \n \n-DRACULE Mihawk #0085 \n \n-Crocodile #0174 \n \n-DON QUIXOTE Doflamingo #0266 \n \n-BARTHOLOMEW Kuma #0267 \n \n-Barbe Noire #0274 \n \n-GECKO Moria #0483 \n \n-TRAFALGAR D WATER Law #0518 \n \n-BOA Hancock #0557 \n \n-EDWARD Weeble #0947~~__**", true)
        .setImage("https://www.pirates-corsaires.com/img3/les-7-capitaines-corsaires-one-piece.jpg")
        .setTimestamp()
        .setFooter("Ordre des Shichibukai | " + message.author.username, "https://www.pirates-corsaires.com/img3/les-7-capitaines-corsaires-one-piece.jpg");
        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "tableau1"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0f0b3f')
        .setTitle('***__Tableau Primes > 1 Milliard Berrys__***')
        .setURL('https://onepiece.fandom.com/fr/wiki/Wanted')
        .setAuthor("Tableau Primes > 1 Milliard Berrys", "https://bleachmx.fr/wp-content/uploads/One-Piece-Bounty-1.jpg", "https://onepiece.fandom.com/fr/wiki/Wanted")
        .setDescription("*__Ce Tableau regroupe et classe par ordre décroissant toutes les primes supérieures à 1 Milliard de Berrys disponibles (4).__*")
        .setThumbnail("https://bleachmx.fr/wp-content/uploads/One-Piece-Bounty-1.jpg")
        .addField("*__Primes disponibles :__*", "**__1- ~~GOL D Roger 5,564,800,000 Berrys~~ \n \n2- Shanks 4,048,900,000 Berrys \n \n3- Barbe Noire 2,247,600,000 Berrys \n \n4- MONKEY D Luffy 1,500,000,000 Berrys__**")
        .setImage("https://bleachmx.fr/wp-content/uploads/One-Piece-Bounty-1.jpg")
        .setTimestamp()
        .setFooter("Tableau Primes > 1 Milliard Berrys | " + message.author.username, "https://bleachmx.fr/wp-content/uploads/One-Piece-Bounty-1.jpg");
    
        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime roger"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#543900")
        .setTitle("***__Prime GOL D Roger__***")
        .setURL("https://www.deviantart.com/axel0w/art/Wanted-Poster-Gold-Roger-5-5-Billion-Berrys-824339233")
        .setAuthor("Prime GOL D Roger", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddmsg81-f67a43c9-2cc4-4e20-9663-e89f2683ddad.png/v1/fill/w_1920,h_2864,q_80,strp/wanted_poster_gold_roger_5_5_billion_berrys_by_axel0w_ddmsg81-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZG1zZzgxLWY2N2E0M2M5LTJjYzQtNGUyMC05NjYzLWU4OWYyNjgzZGRhZC5wbmciLCJoZWlnaHQiOiI8PTI4NjQiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80OGEwOGVlOC00NDg3LTRiMzMtYTFjOC1lNjQ4MTBiNjI3MDhcL2F4ZWwwdy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.PAsa-7OZQZ3nWkZYCMrjSQQNMAFx2V22WrR6DejLua0", "https://www.deviantart.com/axel0w/art/Wanted-Poster-Gold-Roger-5-5-Billion-Berrys-824339233")
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddmsg81-f67a43c9-2cc4-4e20-9663-e89f2683ddad.png/v1/fill/w_1920,h_2864,q_80,strp/wanted_poster_gold_roger_5_5_billion_berrys_by_axel0w_ddmsg81-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZG1zZzgxLWY2N2E0M2M5LTJjYzQtNGUyMC05NjYzLWU4OWYyNjgzZGRhZC5wbmciLCJoZWlnaHQiOiI8PTI4NjQiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80OGEwOGVlOC00NDg3LTRiMzMtYTFjOC1lNjQ4MTBiNjI3MDhcL2F4ZWwwdy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.PAsa-7OZQZ3nWkZYCMrjSQQNMAFx2V22WrR6DejLua0")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddmsg81-f67a43c9-2cc4-4e20-9663-e89f2683ddad.png/v1/fill/w_1920,h_2864,q_80,strp/wanted_poster_gold_roger_5_5_billion_berrys_by_axel0w_ddmsg81-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZG1zZzgxLWY2N2E0M2M5LTJjYzQtNGUyMC05NjYzLWU4OWYyNjgzZGRhZC5wbmciLCJoZWlnaHQiOiI8PTI4NjQiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80OGEwOGVlOC00NDg3LTRiMzMtYTFjOC1lNjQ4MTBiNjI3MDhcL2F4ZWwwdy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.PAsa-7OZQZ3nWkZYCMrjSQQNMAFx2V22WrR6DejLua0")
        .setTimestamp()
        .setFooter("Prime de GOL D Roger | " + message.author.username, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddmsg81-f67a43c9-2cc4-4e20-9663-e89f2683ddad.png/v1/fill/w_1920,h_2864,q_80,strp/wanted_poster_gold_roger_5_5_billion_berrys_by_axel0w_ddmsg81-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZG1zZzgxLWY2N2E0M2M5LTJjYzQtNGUyMC05NjYzLWU4OWYyNjgzZGRhZC5wbmciLCJoZWlnaHQiOiI8PTI4NjQiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80OGEwOGVlOC00NDg3LTRiMzMtYTFjOC1lNjQ4MTBiNjI3MDhcL2F4ZWwwdy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.PAsa-7OZQZ3nWkZYCMrjSQQNMAFx2V22WrR6DejLua0");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime shanks"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#6b0000")
        .setTitle("***__Prime Shanks__***")
        .setURL("https://www.deviantart.com/axel0w/art/Wanted-Poster-The-Yonko-Shanks-4-0-Billion-Berrys-814805013")
        .setAuthor("Prime Shanks", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddh43kl-5d3e69d2-8291-489d-a9db-3c7afb636c0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZGg0M2tsLTVkM2U2OWQyLTgyOTEtNDg5ZC1hOWRiLTNjN2FmYjYzNmMwYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.05uKy0PQJUnk9paQfM2U4IPvAYYseQtmlI88binKhMw", "https://www.deviantart.com/axel0w/art/Wanted-Poster-The-Yonko-Shanks-4-0-Billion-Berrys-814805013")
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddh43kl-5d3e69d2-8291-489d-a9db-3c7afb636c0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZGg0M2tsLTVkM2U2OWQyLTgyOTEtNDg5ZC1hOWRiLTNjN2FmYjYzNmMwYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.05uKy0PQJUnk9paQfM2U4IPvAYYseQtmlI88binKhMw")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddh43kl-5d3e69d2-8291-489d-a9db-3c7afb636c0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZGg0M2tsLTVkM2U2OWQyLTgyOTEtNDg5ZC1hOWRiLTNjN2FmYjYzNmMwYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.05uKy0PQJUnk9paQfM2U4IPvAYYseQtmlI88binKhMw")
        .setTimestamp()
        .setFooter("Prime de Shanks | " + message.author.username, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddh43kl-5d3e69d2-8291-489d-a9db-3c7afb636c0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZGg0M2tsLTVkM2U2OWQyLTgyOTEtNDg5ZC1hOWRiLTNjN2FmYjYzNmMwYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.05uKy0PQJUnk9paQfM2U4IPvAYYseQtmlI88binKhMw");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime barbe noire"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("***__Prime Barbe Noire__***")
        .setURL("https://www.pinterest.fr/pin/485122191114524646/?nic_v2=1a3W92F9C")
        .setAuthor("Prime Barbe Noire", "https://i.pinimg.com/564x/a0/74/9e/a0749e63948cdd6fedbafd1b4f438b7d.jpg", "https://www.pinterest.fr/pin/485122191114524646/?nic_v2=1a3W92F9C")
        .setThumbnail("https://i.pinimg.com/564x/a0/74/9e/a0749e63948cdd6fedbafd1b4f438b7d.jpg")
        .setImage("https://i.pinimg.com/564x/a0/74/9e/a0749e63948cdd6fedbafd1b4f438b7d.jpg")
        .setTimestamp()
        .setFooter("Prime de Barbe Noire | " + message.author.username, "https://i.pinimg.com/564x/a0/74/9e/a0749e63948cdd6fedbafd1b4f438b7d.jpg");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime luffy"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("***__Prime MONKEY D Luffy__***")
        .setURL("https://www.deviantart.com/axel0w/art/Wanted-Poster-Monkey-D-Luffy-1-5-Billion-Berrys-3-833862615")
        .setAuthor("Prime MONKEY D Luffy", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddsgkif-5b06862f-bb9f-4f27-bade-d5c96273c6ff.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZHNna2lmLTViMDY4NjJmLWJiOWYtNGYyNy1iYWRlLWQ1Yzk2MjczYzZmZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.T9iqlnEyBQsxF17MHrUJ3k_95FTm8BLoRkw2-toO17U", "https://www.deviantart.com/axel0w/art/Wanted-Poster-Monkey-D-Luffy-1-5-Billion-Berrys-3-833862615")
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddsgkif-5b06862f-bb9f-4f27-bade-d5c96273c6ff.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZHNna2lmLTViMDY4NjJmLWJiOWYtNGYyNy1iYWRlLWQ1Yzk2MjczYzZmZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.T9iqlnEyBQsxF17MHrUJ3k_95FTm8BLoRkw2-toO17U")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddsgkif-5b06862f-bb9f-4f27-bade-d5c96273c6ff.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZHNna2lmLTViMDY4NjJmLWJiOWYtNGYyNy1iYWRlLWQ1Yzk2MjczYzZmZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.T9iqlnEyBQsxF17MHrUJ3k_95FTm8BLoRkw2-toO17U")
        .setTimestamp()
        .setFooter("Prime de MONKEY D Luffy | " + message.author.username, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddsgkif-5b06862f-bb9f-4f27-bade-d5c96273c6ff.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZHNna2lmLTViMDY4NjJmLWJiOWYtNGYyNy1iYWRlLWQ1Yzk2MjczYzZmZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.T9iqlnEyBQsxF17MHrUJ3k_95FTm8BLoRkw2-toO17U");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "tableau2"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0f0b3f')
        .setTitle('***__Tableau Primes > 100 Millions Berrys__***')
        .setURL('https://onepiece.fandom.com/fr/wiki/Wanted')
        .setAuthor("Tableau Primes > 100 Millions Berrys", "https://bleachmx.fr/wp-content/uploads/One-Piece-Bounty-1.jpg", "https://onepiece.fandom.com/fr/wiki/Wanted")
        .setDescription("*__Ce Tableau regroupe et classe par ordre décroissant toutes les primes inférieures à 1 Milliard de Berrys et supérieures à 100 Millions de Berrys disponibles (10).__*")
        .setThumbnail("https://bleachmx.fr/wp-content/uploads/One-Piece-Bounty-1.jpg")
        .addField("*__Primes disponibles :__*", "**__1- TRAFALGAR D WATER Law 500,000,000 Berrys \n \n2- ~~EDWARD Weeble 480,000,000 Berrys~~ \n \n3- Jinbe 438,000,000 Berrys \n \n4- ~~DON QUIXOTE Doflamingo 340,000,000 Berrys~~ \n \n5- VINSMOKE Sanji 330,000,000 Berrys \n \n6- RORONOA Zoro 320,000,000 Berrys \n \n6- GECKO Moria 320,000,000 Berrys \n \n8- ~~BARTHOLOMEW Kuma 296,000,000 Berrys~~ \n \n9- Usopp 200,000,000 Berrys \n \n10- NICO Robin 130,000,000 Berrys__**")
        .setImage("https://bleachmx.fr/wp-content/uploads/One-Piece-Bounty-1.jpg")
        .setTimestamp()
        .setFooter("Tableau Primes > 100 Millions Berrys | " + message.author.username, "https://bleachmx.fr/wp-content/uploads/One-Piece-Bounty-1.jpg");
    
        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime law"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#773e93")
        .setTitle("***__Prime TRAFALGAR D WATER Law__***")
        .setURL("https://www.pinterest.fr/pin/738520038876995592/?nic_v2=1a3W92F9C")
        .setAuthor("Prime TRAFALGAR D WATER Law", "https://i.pinimg.com/564x/0d/eb/f8/0debf8b9ea95b0ec0883415c914ef5f2.jpg", "https://www.pinterest.fr/pin/738520038876995592/?nic_v2=1a3W92F9C")
        .setThumbnail("https://i.pinimg.com/564x/0d/eb/f8/0debf8b9ea95b0ec0883415c914ef5f2.jpg")
        .setImage("https://i.pinimg.com/564x/0d/eb/f8/0debf8b9ea95b0ec0883415c914ef5f2.jpg")
        .setTimestamp()
        .setFooter("Prime de TRAFALGAR D WATER Law | " + message.author.username, "https://i.pinimg.com/564x/0d/eb/f8/0debf8b9ea95b0ec0883415c914ef5f2.jpg");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime weeble"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#773e93")
        .setTitle("***__Prime EDWARD Weeble__***")
        .setURL("https://onepiece.fandom.com/fr/wiki/Edward_Weevil")
        .setAuthor("Prime EDWARD Weeble", "https://vignette.wikia.nocookie.net/onepiece/images/3/35/Edward_Weevil_Avis_de_Recherche.png/revision/latest/scale-to-width-down/340?cb=20190708053921&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Edward_Weevil")
        .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/3/35/Edward_Weevil_Avis_de_Recherche.png/revision/latest/scale-to-width-down/340?cb=20190708053921&path-prefix=fr")
        .setImage("https://vignette.wikia.nocookie.net/onepiece/images/3/35/Edward_Weevil_Avis_de_Recherche.png/revision/latest/scale-to-width-down/340?cb=20190708053921&path-prefix=fr")
        .setTimestamp()
        .setFooter("Prime de EDWARD Weeble | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/3/35/Edward_Weevil_Avis_de_Recherche.png/revision/latest/scale-to-width-down/340?cb=20190708053921&path-prefix=fr");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime doflamingo"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#773e93")
        .setTitle("***__Prime DON QUIXOTE Doflamingo__***")
        .setURL("https://www.deviantart.com/san999/art/wanted-donquixote-doflamingo-108216420")
        .setAuthor("Prime DON QUIXOTE Doflamingo", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfgbo-c96c35f3-3431-4ac1-846f-d053ac905fb4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmZ2JvLWM5NmMzNWYzLTM0MzEtNGFjMS04NDZmLWQwNTNhYzkwNWZiNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.2TMI3iQXelW94lhHrNH9LcnYFOFEfW2PntPiJUhh1GE", "https://www.deviantart.com/san999/art/wanted-donquixote-doflamingo-108216420")
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfgbo-c96c35f3-3431-4ac1-846f-d053ac905fb4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmZ2JvLWM5NmMzNWYzLTM0MzEtNGFjMS04NDZmLWQwNTNhYzkwNWZiNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.2TMI3iQXelW94lhHrNH9LcnYFOFEfW2PntPiJUhh1GE")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfgbo-c96c35f3-3431-4ac1-846f-d053ac905fb4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmZ2JvLWM5NmMzNWYzLTM0MzEtNGFjMS04NDZmLWQwNTNhYzkwNWZiNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.2TMI3iQXelW94lhHrNH9LcnYFOFEfW2PntPiJUhh1GE")
        .setTimestamp()
        .setFooter("Prime de DON QUIXOTE Doflamingo | " + message.author.username, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfgbo-c96c35f3-3431-4ac1-846f-d053ac905fb4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmZ2JvLWM5NmMzNWYzLTM0MzEtNGFjMS04NDZmLWQwNTNhYzkwNWZiNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.2TMI3iQXelW94lhHrNH9LcnYFOFEfW2PntPiJUhh1GE");
        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime jinbe"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("***__Prime Jinbe__***")
        .setURL("https://onepiece.fandom.com/fr/wiki/Jinbe")
        .setAuthor("Prime Jinbe", "https://vignette.wikia.nocookie.net/onepiece/images/d/d9/Jinbe_Avis_de_Recherche.png/revision/latest?cb=20190819155022&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Jinbe")
        .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/d/d9/Jinbe_Avis_de_Recherche.png/revision/latest?cb=20190819155022&path-prefix=fr")
        .setImage("https://vignette.wikia.nocookie.net/onepiece/images/d/d9/Jinbe_Avis_de_Recherche.png/revision/latest?cb=20190819155022&path-prefix=fr")
        .setTimestamp()
        .setFooter("Prime de Jinbe | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/d/d9/Jinbe_Avis_de_Recherche.png/revision/latest?cb=20190819155022&path-prefix=fr");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime sanji"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("***__Prime VINSMOKE Sanji__***")
        .setURL("https://www.grandlinetimes.net/actualite/le-germa-66-exclu-de-lalliance-mondiale/")
        .setAuthor("Prime VINSMOKE Sanji", "https://www.grandlinetimes.net/wp-content/uploads/Sanji_Wanted.jpg", "https://www.grandlinetimes.net/actualite/le-germa-66-exclu-de-lalliance-mondiale/")
        .setThumbnail("https://www.grandlinetimes.net/wp-content/uploads/Sanji_Wanted.jpg")
        .setImage("https://www.grandlinetimes.net/wp-content/uploads/Sanji_Wanted.jpg")
        .setTimestamp()
        .setFooter("Prime de VINSMOKE Sanji | " + message.author.username, "https://www.grandlinetimes.net/wp-content/uploads/Sanji_Wanted.jpg");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime zoro"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("***__Prime RORONOA Zoro__***")
        .setURL("https://www.deviantart.com/axel0w/art/Wanted-Poster-Roronoa-Zoro-320-Million-Berrys-V2-0-814808871")
        .setAuthor("Prime RORONOA Zoro", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddh46jr-91fe4eca-ea06-4574-a9da-7767d1fb703f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZGg0NmpyLTkxZmU0ZWNhLWVhMDYtNDU3NC1hOWRhLTc3NjdkMWZiNzAzZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.fio_9i5jP5-Uj8epK89lmNFWbgET8UMeVau75AoobzU", "https://www.deviantart.com/axel0w/art/Wanted-Poster-Roronoa-Zoro-320-Million-Berrys-V2-0-814808871")
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddh46jr-91fe4eca-ea06-4574-a9da-7767d1fb703f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZGg0NmpyLTkxZmU0ZWNhLWVhMDYtNDU3NC1hOWRhLTc3NjdkMWZiNzAzZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.fio_9i5jP5-Uj8epK89lmNFWbgET8UMeVau75AoobzU")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddh46jr-91fe4eca-ea06-4574-a9da-7767d1fb703f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZGg0NmpyLTkxZmU0ZWNhLWVhMDYtNDU3NC1hOWRhLTc3NjdkMWZiNzAzZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.fio_9i5jP5-Uj8epK89lmNFWbgET8UMeVau75AoobzU")
        .setTimestamp()
        .setFooter("Prime de RORONOA Zoro | " + message.author.username, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddh46jr-91fe4eca-ea06-4574-a9da-7767d1fb703f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZGg0NmpyLTkxZmU0ZWNhLWVhMDYtNDU3NC1hOWRhLTc3NjdkMWZiNzAzZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.fio_9i5jP5-Uj8epK89lmNFWbgET8UMeVau75AoobzU");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime moria"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#543900")
        .setTitle("***__Prime GECKO Moria__***")
        .setURL("https://www.deviantart.com/san999/art/wanted-gecko-moria-108216816")
        .setAuthor("Prime GECKO Moria", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfgmo-7842554f-2609-4d44-b248-aebd068f2b14.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmZ21vLTc4NDI1NTRmLTI2MDktNGQ0NC1iMjQ4LWFlYmQwNjhmMmIxNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gsuG-P3ky3uInHAQ3PPBe3hTUxaxPI6M4_RqBk7XlWA", "https://www.deviantart.com/san999/art/wanted-gecko-moria-108216816")
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfgmo-7842554f-2609-4d44-b248-aebd068f2b14.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmZ21vLTc4NDI1NTRmLTI2MDktNGQ0NC1iMjQ4LWFlYmQwNjhmMmIxNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gsuG-P3ky3uInHAQ3PPBe3hTUxaxPI6M4_RqBk7XlWA")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfgmo-7842554f-2609-4d44-b248-aebd068f2b14.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmZ21vLTc4NDI1NTRmLTI2MDktNGQ0NC1iMjQ4LWFlYmQwNjhmMmIxNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gsuG-P3ky3uInHAQ3PPBe3hTUxaxPI6M4_RqBk7XlWA")
        .setTimestamp()
        .setFooter("Prime de GECKO Moria | " + message.author.username, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfgmo-7842554f-2609-4d44-b248-aebd068f2b14.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmZ21vLTc4NDI1NTRmLTI2MDktNGQ0NC1iMjQ4LWFlYmQwNjhmMmIxNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gsuG-P3ky3uInHAQ3PPBe3hTUxaxPI6M4_RqBk7XlWA");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime kuma"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#773e93")
        .setTitle("***__Prime BARTHOLOMEW Kuma__***")
        .setURL("https://www.deviantart.com/san999/art/wanted-bartholomew-kuma-108216116")
        .setAuthor("Prime BARTHOLOMEW Kuma", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfg38-6c2e284c-e00d-47fb-8f8f-44d218efe3cd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmZzM4LTZjMmUyODRjLWUwMGQtNDdmYi04ZjhmLTQ0ZDIxOGVmZTNjZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.LaDTVwCiK4pb0jClWs5a_5Fvisw3VCRAdDA4bKSNBI4", "https://www.deviantart.com/san999/art/wanted-bartholomew-kuma-108216116")
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfg38-6c2e284c-e00d-47fb-8f8f-44d218efe3cd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmZzM4LTZjMmUyODRjLWUwMGQtNDdmYi04ZjhmLTQ0ZDIxOGVmZTNjZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.LaDTVwCiK4pb0jClWs5a_5Fvisw3VCRAdDA4bKSNBI4")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfg38-6c2e284c-e00d-47fb-8f8f-44d218efe3cd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmZzM4LTZjMmUyODRjLWUwMGQtNDdmYi04ZjhmLTQ0ZDIxOGVmZTNjZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.LaDTVwCiK4pb0jClWs5a_5Fvisw3VCRAdDA4bKSNBI4")
        .setTimestamp()
        .setFooter("Prime de BARTHOLOMEW Kuma | " + message.author.username, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfg38-6c2e284c-e00d-47fb-8f8f-44d218efe3cd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmZzM4LTZjMmUyODRjLWUwMGQtNDdmYi04ZjhmLTQ0ZDIxOGVmZTNjZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.LaDTVwCiK4pb0jClWs5a_5Fvisw3VCRAdDA4bKSNBI4");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime usopp"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("***__Prime Usopp__***")
        .setURL("https://onepiece.fandom.com/fr/wiki/Usopp")
        .setAuthor("Prime Usopp", "https://vignette.wikia.nocookie.net/onepiece/images/e/ed/God_Usopp_Avis_de_Recherche_Post_Dressrosa.png/revision/latest/scale-to-width-down/340?cb=20160621162448&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Usopp")
        .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/e/ed/God_Usopp_Avis_de_Recherche_Post_Dressrosa.png/revision/latest/scale-to-width-down/340?cb=20160621162448&path-prefix=fr")
        .setImage("https://vignette.wikia.nocookie.net/onepiece/images/e/ed/God_Usopp_Avis_de_Recherche_Post_Dressrosa.png/revision/latest/scale-to-width-down/340?cb=20160621162448&path-prefix=fr")
        .setTimestamp()
        .setFooter("Prime de Usopp | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/e/ed/God_Usopp_Avis_de_Recherche_Post_Dressrosa.png/revision/latest/scale-to-width-down/340?cb=20160621162448&path-prefix=fr");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime robin"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("***__Prime NICO Robin__***")
        .setURL("https://onepiece.fandom.com/fr/wiki/Nico_Robin")
        .setAuthor("Prime NICO Robin", "https://vignette.wikia.nocookie.net/onepiece/images/4/49/Nico_Robin_Avis_de_Recherche_Post_Dressrosa.png/revision/latest/scale-to-width-down/340?cb=20161231135634&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Nico_Robin")
        .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/4/49/Nico_Robin_Avis_de_Recherche_Post_Dressrosa.png/revision/latest/scale-to-width-down/340?cb=20161231135634&path-prefix=fr")
        .setImage("https://vignette.wikia.nocookie.net/onepiece/images/4/49/Nico_Robin_Avis_de_Recherche_Post_Dressrosa.png/revision/latest/scale-to-width-down/340?cb=20161231135634&path-prefix=fr")
        .setTimestamp()
        .setFooter("Prime de NICO Robin | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/4/49/Nico_Robin_Avis_de_Recherche_Post_Dressrosa.png/revision/latest/scale-to-width-down/340?cb=20161231135634&path-prefix=fr");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "tableau3"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0f0b3f')
        .setTitle('***__Tableau Primes < 100 Millions de Berrys__***')
        .setURL('https://onepiece.fandom.com/fr/wiki/Wanted')
        .setAuthor("Tableau Primes < 100 Millions de Berrys", "https://bleachmx.fr/wp-content/uploads/One-Piece-Bounty-1.jpg", "https://onepiece.fandom.com/fr/wiki/Wanted")
        .setDescription("*__Ce Tableau regroupe et classe par ordre décroissant toutes les primes inférieures à 100 Millions de Berrys disponibles (24).__*")
        .setThumbnail("https://bleachmx.fr/wp-content/uploads/One-Piece-Bounty-1.jpg")
        .addField("*__Primes disponibles :__*", "**__1- Franky 94,000,000 Berrys \n \n2- Brook 83,000,000 Berrys \n \n3- ~~Crocodile 81,000,000 Berrys~~ \n \n4- ~~BOA Hancock 80,000,000 Berrys~~ \n \n5- Nami 66,000,000 Berrys \n \n6- ~~Arlong 20,000,000 Berrys~~ \n \n 7-DON Krieg 17,000,000 Berrys \n \n8- Kuro 16,000,000 Berrys \n \n9- ~~Baggy 15,000,000 Berrys~~ \n \n10- Gin 12,000,000 Berrys \n \n11- ~~Jango 9,000,000 Berrys~~ \n \n12- ~~Kuroobi 9,000,000 Berrys~~ \n \n 13- ~~Higuma 8,000,000 Berrys~~ \n \n13- Octo 8,000,000 Berrys \n \n15- Sham & Buchi 7,000,000 Berrys \n \n16- ~~Smack 5,500,000 Berrys~~ \n \n17- Alvida 5,000,000 Berrys \n \n18- MIKIO Itoo 1,000,000 Berrys \n \n19- TONY TONY Chopper 100 Berrys \n \n20- Lucky Roux Inconnue \n \n20- Yasopp Inconnue \n \n20- BEN Beckman Inconnue \n \n20- Zeff Inconnue \n \n20- DRACULE Mihawk Inconnue__**")
        .setImage("https://bleachmx.fr/wp-content/uploads/One-Piece-Bounty-1.jpg")
        .setTimestamp()
        .setFooter("Tableau Primes < 100 Millions Berrys | " + message.author.username, "https://bleachmx.fr/wp-content/uploads/One-Piece-Bounty-1.jpg");
    
        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime franky"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("***__Prime Franky__***")
        .setURL("https://onepiece.fandom.com/fr/wiki/Franky")
        .setAuthor("Prime Franky", "https://vignette.wikia.nocookie.net/onepiece/images/b/b6/Franky_Avis_de_Recherche_Post_Dressrosa.png/revision/latest/scale-to-width-down/340?cb=20160621162241&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Franky")
        .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/b/b6/Franky_Avis_de_Recherche_Post_Dressrosa.png/revision/latest/scale-to-width-down/340?cb=20160621162241&path-prefix=fr")
        .setImage("https://vignette.wikia.nocookie.net/onepiece/images/b/b6/Franky_Avis_de_Recherche_Post_Dressrosa.png/revision/latest/scale-to-width-down/340?cb=20160621162241&path-prefix=fr")
        .setTimestamp()
        .setFooter("Prime de Franky | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/b/b6/Franky_Avis_de_Recherche_Post_Dressrosa.png/revision/latest/scale-to-width-down/340?cb=20160621162241&path-prefix=fr");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime brook"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("***__Prime Brook__***")
        .setURL("https://www.pinterest.com.au/pin/597078863071421870/?nic_v2=1a3W92F9C")
        .setAuthor("Prime Brook", "https://i.pinimg.com/564x/41/68/0a/41680aed2d03498209ff44f7b34e907a.jpg", "https://www.pinterest.com.au/pin/597078863071421870/?nic_v2=1a3W92F9C")
        .setThumbnail("https://i.pinimg.com/564x/41/68/0a/41680aed2d03498209ff44f7b34e907a.jpg")
        .setImage("https://i.pinimg.com/564x/41/68/0a/41680aed2d03498209ff44f7b34e907a.jpg")
        .setTimestamp()
        .setFooter("Prime de Brook | " + message.author.username, "https://i.pinimg.com/564x/41/68/0a/41680aed2d03498209ff44f7b34e907a.jpg");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime crocodile"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#773e93")
        .setTitle("***__Prime Crocodile__***")
        .setURL("https://onepiece.fandom.com/fr/wiki/Crocodile")
        .setAuthor("Prime Crocodile", "https://vignette.wikia.nocookie.net/onepiece/images/2/2d/Crocodile_Avis_de_Recherche_Vivre_Card.png/revision/latest?cb=20190113202411&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Crocodile")
        .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/2/2d/Crocodile_Avis_de_Recherche_Vivre_Card.png/revision/latest?cb=20190113202411&path-prefix=fr")
        .setImage("https://vignette.wikia.nocookie.net/onepiece/images/2/2d/Crocodile_Avis_de_Recherche_Vivre_Card.png/revision/latest?cb=20190113202411&path-prefix=fr")
        .setTimestamp()
        .setFooter("Prime de Crocodile | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/2/2d/Crocodile_Avis_de_Recherche_Vivre_Card.png/revision/latest?cb=20190113202411&path-prefix=fr");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime hancock"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#773e93")
        .setTitle("***__Prime BOA Hancock__***")
        .setURL("https://www.deviantart.com/san999/art/wanted-boa-hancock-108217599")
        .setAuthor("Prime BOA Hancock", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfh8f-6b844a12-e066-4329-a47d-24d844479974.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmaDhmLTZiODQ0YTEyLWUwNjYtNDMyOS1hNDdkLTI0ZDg0NDQ3OTk3NC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Q1W1--p2-6lZwxvKYPgWP00vt85jOp-osNhTeE6_PzU", "https://www.deviantart.com/san999/art/wanted-boa-hancock-108217599")
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfh8f-6b844a12-e066-4329-a47d-24d844479974.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmaDhmLTZiODQ0YTEyLWUwNjYtNDMyOS1hNDdkLTI0ZDg0NDQ3OTk3NC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Q1W1--p2-6lZwxvKYPgWP00vt85jOp-osNhTeE6_PzU")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfh8f-6b844a12-e066-4329-a47d-24d844479974.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmaDhmLTZiODQ0YTEyLWUwNjYtNDMyOS1hNDdkLTI0ZDg0NDQ3OTk3NC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Q1W1--p2-6lZwxvKYPgWP00vt85jOp-osNhTeE6_PzU")
        .setTimestamp()
        .setFooter("Prime de BOA Hancock | " + message.author.username, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1sfh8f-6b844a12-e066-4329-a47d-24d844479974.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXNmaDhmLTZiODQ0YTEyLWUwNjYtNDMyOS1hNDdkLTI0ZDg0NDQ3OTk3NC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Q1W1--p2-6lZwxvKYPgWP00vt85jOp-osNhTeE6_PzU");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime nami"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("***__Prime Nami__***")
        .setURL("https://www.deviantart.com/axel0w/art/Wanted-Poster-Nami-66-Million-Berrys-832152835")
        .setAuthor("Prime Nami", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddrfx8j-3dfb1455-ef94-41df-bcc8-4e53432d6560.png/v1/fill/w_1920,h_2864,strp/wanted_poster_nami_66_million_berrys_by_axel0w_ddrfx8j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZHJmeDhqLTNkZmIxNDU1LWVmOTQtNDFkZi1iY2M4LTRlNTM0MzJkNjU2MC5wbmciLCJoZWlnaHQiOiI8PTI4NjQiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80OGEwOGVlOC00NDg3LTRiMzMtYTFjOC1lNjQ4MTBiNjI3MDhcL2F4ZWwwdy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.SuRFyY1gnZ67dGU44emAKTAVsq-2h5SnjQRn2xSWga8", "https://www.deviantart.com/axel0w/art/Wanted-Poster-Nami-66-Million-Berrys-832152835")
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddrfx8j-3dfb1455-ef94-41df-bcc8-4e53432d6560.png/v1/fill/w_1920,h_2864,strp/wanted_poster_nami_66_million_berrys_by_axel0w_ddrfx8j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZHJmeDhqLTNkZmIxNDU1LWVmOTQtNDFkZi1iY2M4LTRlNTM0MzJkNjU2MC5wbmciLCJoZWlnaHQiOiI8PTI4NjQiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80OGEwOGVlOC00NDg3LTRiMzMtYTFjOC1lNjQ4MTBiNjI3MDhcL2F4ZWwwdy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.SuRFyY1gnZ67dGU44emAKTAVsq-2h5SnjQRn2xSWga8")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddrfx8j-3dfb1455-ef94-41df-bcc8-4e53432d6560.png/v1/fill/w_1920,h_2864,strp/wanted_poster_nami_66_million_berrys_by_axel0w_ddrfx8j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZHJmeDhqLTNkZmIxNDU1LWVmOTQtNDFkZi1iY2M4LTRlNTM0MzJkNjU2MC5wbmciLCJoZWlnaHQiOiI8PTI4NjQiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80OGEwOGVlOC00NDg3LTRiMzMtYTFjOC1lNjQ4MTBiNjI3MDhcL2F4ZWwwdy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.SuRFyY1gnZ67dGU44emAKTAVsq-2h5SnjQRn2xSWga8")
        .setTimestamp()
        .setFooter("Prime de Nami | " + message.author.username, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a08ee8-4487-4b33-a1c8-e64810b62708/ddrfx8j-3dfb1455-ef94-41df-bcc8-4e53432d6560.png/v1/fill/w_1920,h_2864,strp/wanted_poster_nami_66_million_berrys_by_axel0w_ddrfx8j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDhhMDhlZTgtNDQ4Ny00YjMzLWExYzgtZTY0ODEwYjYyNzA4XC9kZHJmeDhqLTNkZmIxNDU1LWVmOTQtNDFkZi1iY2M4LTRlNTM0MzJkNjU2MC5wbmciLCJoZWlnaHQiOiI8PTI4NjQiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80OGEwOGVlOC00NDg3LTRiMzMtYTFjOC1lNjQ4MTBiNjI3MDhcL2F4ZWwwdy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.SuRFyY1gnZ67dGU44emAKTAVsq-2h5SnjQRn2xSWga8");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime arlong"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#543900")
        .setTitle("***__Prime Arlong__***")
        .setURL("https://onepiece.fandom.com/fr/wiki/Arlong")
        .setAuthor("Prime Arlong", "https://static.wikia.nocookie.net/onepiece/images/6/65/Arlong_Avis_de_Recherche.png/revision/latest/scale-to-width-down/340?cb=20160727182308&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Arlong")
        .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/6/65/Arlong_Avis_de_Recherche.png/revision/latest/scale-to-width-down/340?cb=20160727182308&path-prefix=fr")
        .setImage("https://static.wikia.nocookie.net/onepiece/images/6/65/Arlong_Avis_de_Recherche.png/revision/latest/scale-to-width-down/340?cb=20160727182308&path-prefix=fr")
        .setTimestamp()
        .setFooter("Prime de Arlong | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/6/65/Arlong_Avis_de_Recherche.png/revision/latest/scale-to-width-down/340?cb=20160727182308&path-prefix=fr");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime krieg"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#543900")
        .setTitle("***__Prime DON Krieg__***")
        .setURL("https://onepiece.fandom.com/fr/wiki/Krieg")
        .setAuthor("Prime DON Krieg", "https://static.wikia.nocookie.net/onepiece/images/6/6c/Krieg_Avis_de_Recherche.png/revision/latest/scale-to-width-down/340?cb=20150303201105&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Krieg")
        .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/6/6c/Krieg_Avis_de_Recherche.png/revision/latest/scale-to-width-down/340?cb=20150303201105&path-prefix=fr")
        .setImage("https://static.wikia.nocookie.net/onepiece/images/6/6c/Krieg_Avis_de_Recherche.png/revision/latest/scale-to-width-down/340?cb=20150303201105&path-prefix=fr")
        .setTimestamp()
        .setFooter("Prime de DON Krieg | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/6/6c/Krieg_Avis_de_Recherche.png/revision/latest/scale-to-width-down/340?cb=20150303201105&path-prefix=fr");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime kuro"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#543900")
        .setTitle("***__Prime Kuro__***")
        .setURL("https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
        .setAuthor("Prime Kuro", "https://cdn.discordapp.com/attachments/766065475821240320/768873821792108580/Kuro_One_Piece_Vivre_Card_-_062.png", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
        .setThumbnail("https://cdn.discordapp.com/attachments/766065475821240320/768873821792108580/Kuro_One_Piece_Vivre_Card_-_062.png")
        .setImage("https://cdn.discordapp.com/attachments/766065475821240320/768873821792108580/Kuro_One_Piece_Vivre_Card_-_062.png")
        .setTimestamp()
        .setFooter("Prime de Kuro | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/768873821792108580/Kuro_One_Piece_Vivre_Card_-_062.png");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime baggy"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#773e93")
        .setTitle("***__Prime Baggy__***")
        .setURL("https://onepiece.fandom.com/fr/wiki/Baggy")
        .setAuthor("Prime Baggy", "https://static.wikia.nocookie.net/onepiece/images/8/8e/Baggy_Premier_Avis_de_Recherche.png/revision/latest/scale-to-width-down/180?cb=20171202205359&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Baggy")
        .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/8/8e/Baggy_Premier_Avis_de_Recherche.png/revision/latest/scale-to-width-down/180?cb=20171202205359&path-prefix=fr")
        .setImage("https://static.wikia.nocookie.net/onepiece/images/8/8e/Baggy_Premier_Avis_de_Recherche.png/revision/latest/scale-to-width-down/180?cb=20171202205359&path-prefix=fr")
        .setTimestamp()
        .setFooter("Prime de Baggy | " + message.author.username, "https://static.wikia.nocookie.net/onepiece/images/8/8e/Baggy_Premier_Avis_de_Recherche.png/revision/latest/scale-to-width-down/180?cb=20171202205359&path-prefix=fr");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime gin"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#543900")
        .setTitle("***__Prime Gin__***")
        .setURL("https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
        .setAuthor("Prime Gin", "https://cdn.discordapp.com/attachments/766065475821240320/805480531542016000/unknown.png", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
        .setThumbnail("https://cdn.discordapp.com/attachments/766065475821240320/805480531542016000/unknown.png")
        .setImage("https://cdn.discordapp.com/attachments/766065475821240320/805480531542016000/unknown.png")
        .setTimestamp()
        .setFooter("Prime de Gin | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/805480531542016000/unknown.png");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime jango"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#7002d0")
        .setTitle("***__Prime Jango__***")
        .setURL("https://onepiece.fandom.com/fr/wiki/Jango")
        .setAuthor("Prime Jango", "https://vignette.wikia.nocookie.net/onepiece/images/e/e6/Jango_Avis_de_Recherche_Manga.png/revision/latest/scale-to-width-down/81?cb=20190305104506&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Jango")
        .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/e/e6/Jango_Avis_de_Recherche_Manga.png/revision/latest/scale-to-width-down/81?cb=20190305104506&path-prefix=fr")
        .setImage("https://vignette.wikia.nocookie.net/onepiece/images/e/e6/Jango_Avis_de_Recherche_Manga.png/revision/latest/scale-to-width-down/81?cb=20190305104506&path-prefix=fr")
        .setTimestamp()
        .setFooter("Prime de Jango | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/e/e6/Jango_Avis_de_Recherche_Manga.png/revision/latest/scale-to-width-down/81?cb=20190305104506&path-prefix=fr");

        message.channel.send(exampleEmbed);
    }

if(message.content == prefix + "prime kuroobi"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Prime Kuroobi__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Prime Kuroobi", "https://cdn.discordapp.com/attachments/766065475821240320/806589317426053181/unknown.png", "https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setThumbnail("https://cdn.discordapp.com/attachments/766065475821240320/806589317426053181/unknown.png")
    .setImage("https://cdn.discordapp.com/attachments/766065475821240320/806589317426053181/unknown.png")
    .setTimestamp()
    .setFooter("Prime de Kuroobi | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/806589317426053181/unknown.png");

    message.channel.send(exampleEmbed);
}

    if(message.content == prefix + "prime higuma"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#00ff11")
        .setTitle("***__Prime Higuma__***")
        .setURL("https://onepiece.fandom.com/ru/wiki/%D0%A5%D0%B8%D0%B3%D1%83%D0%BC%D0%B0")
        .setAuthor("Prime Baggy", "https://vignette.wikia.nocookie.net/onepiece/images/6/6a/Higuma_Bounty_Poster.png/revision/latest?cb=20140326090458&path-prefix=ru", "https://onepiece.fandom.com/ru/wiki/%D0%A5%D0%B8%D0%B3%D1%83%D0%BC%D0%B0")
        .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/6/6a/Higuma_Bounty_Poster.png/revision/latest?cb=20140326090458&path-prefix=ru")
        .setImage("https://vignette.wikia.nocookie.net/onepiece/images/6/6a/Higuma_Bounty_Poster.png/revision/latest?cb=20140326090458&path-prefix=ru")
        .setTimestamp()
        .setFooter("Prime de Higuma | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/6/6a/Higuma_Bounty_Poster.png/revision/latest?cb=20140326090458&path-prefix=ru");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime octo"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#00ff11")
        .setTitle("***__Prime Octo__***")
        .setURL("https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
        .setAuthor("Prime Octo", "https://cdn.discordapp.com/attachments/766065475821240320/806265429932113960/unknown.png", "https://thelibraryofohara.com/2019/01/12/vivre-card-databook-vol-5-all-the-new-information/")
        .setThumbnail("https://cdn.discordapp.com/attachments/766065475821240320/806265429932113960/unknown.png")
        .setImage("https://cdn.discordapp.com/attachments/766065475821240320/806265429932113960/unknown.png")
        .setTimestamp()
        .setFooter("Prime de Octo | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/806265429932113960/unknown.png");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime freres siamois"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#543900")
        .setTitle("***__Prime Sham & Buchi__***")
        .setURL("https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
        .setAuthor("Prime Sham & Buchi", "https://cdn.discordapp.com/attachments/766065475821240320/768925304445206538/Freres_Siamois_One_Piece_Avis_de_Recherche_7000000_Berrys.png", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
        .setThumbnail("https://cdn.discordapp.com/attachments/766065475821240320/768925304445206538/Freres_Siamois_One_Piece_Avis_de_Recherche_7000000_Berrys.png")
        .setImage("https://cdn.discordapp.com/attachments/766065475821240320/768925304445206538/Freres_Siamois_One_Piece_Avis_de_Recherche_7000000_Berrys.png")
        .setTimestamp()
        .setFooter("Prime de Sham & Buchi | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/768925304445206538/Freres_Siamois_One_Piece_Avis_de_Recherche_7000000_Berrys.png");

        message.channel.send(exampleEmbed);
    }

if(message.content == prefix + "prime smack"){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#543900")
    .setTitle("***__Prime Smack__***")
    .setURL("https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setAuthor("Prime Smack", "https://cdn.discordapp.com/attachments/766065475821240320/806565233605738526/unknown.png", "https://thelibraryofohara.com/2018/11/07/vivre-card-databook-vol-3-all-the-new-information/")
    .setThumbnail("https://cdn.discordapp.com/attachments/766065475821240320/806565233605738526/unknown.png")
    .setImage("https://cdn.discordapp.com/attachments/766065475821240320/806565233605738526/unknown.png")
    .setTimestamp()
    .setFooter("Prime de Smack | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/806565233605738526/unknown.png");

     message.channel.send(exampleEmbed);
}

    if(message.content == prefix + "prime alvida"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#543900")
        .setTitle("***__Prime Alvida__***")
        .setURL("https://onepiece.fandom.com/fr/wiki/Alvida")
        .setAuthor("Prime Alvida", "https://vignette.wikia.nocookie.net/onepiece/images/6/68/Alvida_Avis_de_Recherche.png/revision/latest/scale-to-width-down/120?cb=20190305105517&path-prefix=fr", "https://onepiece.fandom.com/fr/wiki/Alvida")
        .setThumbnail("https://vignette.wikia.nocookie.net/onepiece/images/6/68/Alvida_Avis_de_Recherche.png/revision/latest/scale-to-width-down/120?cb=20190305105517&path-prefix=fr")
        .setImage("https://vignette.wikia.nocookie.net/onepiece/images/6/68/Alvida_Avis_de_Recherche.png/revision/latest/scale-to-width-down/120?cb=20190305105517&path-prefix=fr")
        .setTimestamp()
        .setFooter("Prime de Alvida | " + message.author.username, "https://vignette.wikia.nocookie.net/onepiece/images/6/68/Alvida_Avis_de_Recherche.png/revision/latest/scale-to-width-down/120?cb=20190305105517&path-prefix=fr");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime itoo"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#00ff11")
        .setTitle("***__Prime MIKIO Itoo__***")
        .setURL("https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/")
        .setAuthor("Prime MIKIO Itoo", "https://cdn.discordapp.com/attachments/766065475821240320/767800927570362428/MIKIO_Itoo_One_Piece_Vivre_Card_-_021.png", "https://thelibraryofohara.com/2018/09/06/vivre-card-databook-vol-1-all-the-new-information/")
        .setThumbnail("https://cdn.discordapp.com/attachments/766065475821240320/767800927570362428/MIKIO_Itoo_One_Piece_Vivre_Card_-_021.png")
        .setImage("https://cdn.discordapp.com/attachments/766065475821240320/767800927570362428/MIKIO_Itoo_One_Piece_Vivre_Card_-_021.png")
        .setTimestamp()
        .setFooter("Prime de MIKIO Itoo | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/767800927570362428/MIKIO_Itoo_One_Piece_Vivre_Card_-_021.png");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime chopper"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("***__Prime TONY TONY Chopper__***")
        .setURL("https://onepiece.fandom.com/fr/f/p/3100000000000164138/r/3087807785176253436")
        .setAuthor("Prime TONY TONY Chopper", "https://static.wikia.nocookie.net/ff7e4963-9cdd-4983-be1f-9dcb8468d268", "https://onepiece.fandom.com/fr/f/p/3100000000000164138/r/3087807785176253436")
        .setThumbnail("https://static.wikia.nocookie.net/ff7e4963-9cdd-4983-be1f-9dcb8468d268")
        .setImage("https://static.wikia.nocookie.net/ff7e4963-9cdd-4983-be1f-9dcb8468d268")
        .setTimestamp()
        .setFooter("Prime de TONY TONY Chopper | " + message.author.username, "https://static.wikia.nocookie.net/ff7e4963-9cdd-4983-be1f-9dcb8468d268");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime lucky roux"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#6b0000")
        .setTitle("***__Prime Lucky Roux__***")
        .setURL("https://www.deviantart.com/san999/art/wanted-lucky-roo-117613178")
        .setAuthor("Prime Lucky Roux", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1y0uwq-526305d1-4e2f-49f7-8e7d-e05bafe40bed.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXkwdXdxLTUyNjMwNWQxLTRlMmYtNDlmNy04ZTdkLWUwNWJhZmU0MGJlZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.GGyCNUcCbUeorFFR6nb17ZevCAFzzsdys7yEWgvnDBE", "https://www.deviantart.com/san999/art/wanted-lucky-roo-117613178")
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1y0uwq-526305d1-4e2f-49f7-8e7d-e05bafe40bed.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXkwdXdxLTUyNjMwNWQxLTRlMmYtNDlmNy04ZTdkLWUwNWJhZmU0MGJlZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.GGyCNUcCbUeorFFR6nb17ZevCAFzzsdys7yEWgvnDBE")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1y0uwq-526305d1-4e2f-49f7-8e7d-e05bafe40bed.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXkwdXdxLTUyNjMwNWQxLTRlMmYtNDlmNy04ZTdkLWUwNWJhZmU0MGJlZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.GGyCNUcCbUeorFFR6nb17ZevCAFzzsdys7yEWgvnDBE")
        .setTimestamp()
        .setFooter("Prime de Lucky Roux | " + message.author.username, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1y0uwq-526305d1-4e2f-49f7-8e7d-e05bafe40bed.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXkwdXdxLTUyNjMwNWQxLTRlMmYtNDlmNy04ZTdkLWUwNWJhZmU0MGJlZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.GGyCNUcCbUeorFFR6nb17ZevCAFzzsdys7yEWgvnDBE");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime yasopp"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#6b0000")
        .setTitle("***__Prime Yasopp__***")
        .setURL("https://www.deviantart.com/san999/art/wanted-yasopp-117613327")
        .setAuthor("Prime Yasopp", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1y0v0v-88af7806-6b68-41b7-8341-259a88875728.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXkwdjB2LTg4YWY3ODA2LTZiNjgtNDFiNy04MzQxLTI1OWE4ODg3NTcyOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.dVGu6azt53WG76CF_-uMK9r6qp5bfNmbuY9AyOODjIU", "https://www.deviantart.com/san999/art/wanted-yasopp-117613327")
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1y0v0v-88af7806-6b68-41b7-8341-259a88875728.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXkwdjB2LTg4YWY3ODA2LTZiNjgtNDFiNy04MzQxLTI1OWE4ODg3NTcyOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.dVGu6azt53WG76CF_-uMK9r6qp5bfNmbuY9AyOODjIU")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1y0v0v-88af7806-6b68-41b7-8341-259a88875728.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXkwdjB2LTg4YWY3ODA2LTZiNjgtNDFiNy04MzQxLTI1OWE4ODg3NTcyOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.dVGu6azt53WG76CF_-uMK9r6qp5bfNmbuY9AyOODjIU")
        .setTimestamp()
        .setFooter("Prime de Yasopp | " + message.author.username, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1y0v0v-88af7806-6b68-41b7-8341-259a88875728.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXkwdjB2LTg4YWY3ODA2LTZiNjgtNDFiNy04MzQxLTI1OWE4ODg3NTcyOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.dVGu6azt53WG76CF_-uMK9r6qp5bfNmbuY9AyOODjIU");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime beckman"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#6b0000")
        .setTitle("***__Prime BEN Beckman__***")
        .setURL("https://www.deviantart.com/san999/art/wanted-ben-beckman-117613034")
        .setAuthor("Prime BEN Beckman", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1y0usq-bb7b6a25-d211-43ad-888c-fa7889979841.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXkwdXNxLWJiN2I2YTI1LWQyMTEtNDNhZC04ODhjLWZhNzg4OTk3OTg0MS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.1cs4J6WLXZGCJiKFVj53WeqTPTa8Dlpli0CIo4T72tY", "https://www.deviantart.com/san999/art/wanted-ben-beckman-117613034")
        .setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1y0usq-bb7b6a25-d211-43ad-888c-fa7889979841.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXkwdXNxLWJiN2I2YTI1LWQyMTEtNDNhZC04ODhjLWZhNzg4OTk3OTg0MS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.1cs4J6WLXZGCJiKFVj53WeqTPTa8Dlpli0CIo4T72tY")
        .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1y0usq-bb7b6a25-d211-43ad-888c-fa7889979841.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXkwdXNxLWJiN2I2YTI1LWQyMTEtNDNhZC04ODhjLWZhNzg4OTk3OTg0MS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.1cs4J6WLXZGCJiKFVj53WeqTPTa8Dlpli0CIo4T72tY")
        .setTimestamp()
        .setFooter("Prime de BEN Beckman | " + message.author.username, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c8c0b1d-507b-4eaf-8d58-9b0097dd54bb/d1y0usq-bb7b6a25-d211-43ad-888c-fa7889979841.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWM4YzBiMWQtNTA3Yi00ZWFmLThkNTgtOWIwMDk3ZGQ1NGJiXC9kMXkwdXNxLWJiN2I2YTI1LWQyMTEtNDNhZC04ODhjLWZhNzg4OTk3OTg0MS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.1cs4J6WLXZGCJiKFVj53WeqTPTa8Dlpli0CIo4T72tY");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime zeff"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#00ff11")
        .setTitle("***__Prime Zeff__***")
        .setURL("https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
        .setAuthor("Prime Zeff", "https://cdn.discordapp.com/attachments/766065475821240320/771880960031064084/Prime_Inconnue_Zeff_One_Piece_Avis_de_Recherche.png", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
        .setThumbnail("https://cdn.discordapp.com/attachments/766065475821240320/771880960031064084/Prime_Inconnue_Zeff_One_Piece_Avis_de_Recherche.png")
        .setImage("https://cdn.discordapp.com/attachments/766065475821240320/771880960031064084/Prime_Inconnue_Zeff_One_Piece_Avis_de_Recherche.png")
        .setTimestamp()
        .setFooter("Prime de Zeff | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/771880960031064084/Prime_Inconnue_Zeff_One_Piece_Avis_de_Recherche.png");

        message.channel.send(exampleEmbed);
    }

    if(message.content == prefix + "prime mihawk"){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#773e93")
        .setTitle("***__Prime DRACULE Mihawk__***")
        .setURL("https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
        .setAuthor("Prime DRACULE Mihawk", "https://cdn.discordapp.com/attachments/766065475821240320/771881698522038272/Prime_Inconnue_DRACULE_Mihawk_One_Piece_Avis_de_Recherche.png", "https://thelibraryofohara.com/2018/10/08/vivre-card-databook-vol-2-all-the-new-information/")
        .setThumbnail("https://cdn.discordapp.com/attachments/766065475821240320/771881698522038272/Prime_Inconnue_DRACULE_Mihawk_One_Piece_Avis_de_Recherche.png")
        .setImage("https://cdn.discordapp.com/attachments/766065475821240320/771881698522038272/Prime_Inconnue_DRACULE_Mihawk_One_Piece_Avis_de_Recherche.png")
        .setTimestamp()
        .setFooter("Prime de DRACULE Mihawk | " + message.author.username, "https://cdn.discordapp.com/attachments/766065475821240320/771881698522038272/Prime_Inconnue_DRACULE_Mihawk_One_Piece_Avis_de_Recherche.png");

        message.channel.send(exampleEmbed);
    }
    
   if(message.content == prefix + "aide"){
       const exampleEmbed = new Discord.MessageEmbed()
       .setColor("#0050fe")
       .setTitle("***__Commandes et fonctionnement :__***")
       .setAuthor('Commandes et fonctionnement', "https://i.pinimg.com/originals/c7/dd/3c/c7dd3c5f1866f056f813587f3142da9b.jpg")
       .setDescription("*__Le Bot__* ***__One Piece Vivre Card__*** *__est dédié à l'information. Apporter des éléments officiels en rapport avec__* ***__One Piece__*** *__n'est pas sa seule fonctionnalité puisqu'il possède également des fonctionnalités modératrices.__*")
       .setThumbnail("https://i.pinimg.com/originals/c7/dd/3c/c7dd3c5f1866f056f813587f3142da9b.jpg")
       .addField("*__Modération :__*", "*=bann @user* permet d'**__exclure__** un membre du serveur. \n \n*=kick @user* permet de **__virer__** un membre du serveur. \n \n*=mute @user* permet de **__rendre muet__** un membre du serveur. \n \n*=unmute @user* permet de **__rendre la parole__** à un membre du serveur. \n \n*=tempmute @user* permet de **__rendre muet temporairement__** un membre du serveur.")
       .addField("*__Informations :__*", "*=mois* **__fournit l'anniversaire de tout les personnages disponibles nés dans le mois sélectionné__** \n \n*=arc* permet d'**__afficher la liste de toutes les Vivre Cards disponibles de l'arc sélectionné.__** \n \n*=personnage* permet d'**__afficher la Vivre Card__** du personnage sélectionné. \n \n*=pegre* permet d'**__afficher la liste de toutes les organisations disponibles.__** \n \n*=organisation* permet d'**__afficher la description__** de l'organisation sélectionnée. \n \n*=tableau page* **__regroupe et classe par ordre décroissant toutes les primes disponibles de la page sélectionnée.__** \n \n*=prime personnage* permet d'**__afficher la prime__** du personnage sélectionné.")
       .setTimestamp()
       .setFooter("Commandes et fonctionnement | " + message.author.username, "https://i.pinimg.com/originals/c7/dd/3c/c7dd3c5f1866f056f813587f3142da9b.jpg");
       message.member.send(exampleEmbed);
   }

   if(message.member.hasPermission("ADMINISTRATOR")){
    if(message.content.startsWith(prefix + "bann")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Veuillez mentionner un utilisateur.");
        }
        else {
            if(mention.bannable){
                mention.ban();
                message.channel.send("<@" + mention.id + "> à été banni avec succès.");
            }
            else {
                message.reply("Impossible de bannir cet utilisateur.");
            }
        }
    }

    else if(message.content.startsWith(prefix + "kick")){
         let mention = message.mentions.members.first();

    if(mention == undefined){
        message.reply("Veuillez mentionner un utilisateur.");
    }
    else {
        if(mention.kickable){
            mention.kick();
            message.channel.send("<@" + mention.id + "> à été kick avec succès.");
        }
        else {
            message.reply("Impossible de kick cet utilisateur.");
        }
     }
    }
    else if(message.content.startsWith(prefix + "mute")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Veuillez mentionner un utilisateur.");
        }
        else {
            mention.roles.add("766021556266598422");
            message.reply("<@" + mention.id + "> à été mute avec succès.");
        }
    }
    else if(message.content.startsWith(prefix + "unmute")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply("Veuillez mentionner un utilisateur.");
        }
        else {
            mention.roles.remove("766021556266598422");
            message.reply("<@" + mention.id + "> à été unmute avec succès.");
        }
     }
     else if(message.content.startsWith(prefix + "tempmute")){
         let mention = message.mentions.members.first();

         if(mention == undefined){
             message.reply("Veuillez mentionner un utilisateur.");
         }
         else {
             let args = message.content.split(" ");

             mention.roles.add("766021556266598422");
             setTimeout(function() {
                 mention.roles.remove("766021556266598422");
                 message.channel.send("<@" + mention.id + "> à été unmute avec succès.");
             }, args[2] * 1000);
         }
     }
    
     const memb = message.mentions.members.first() || message.member;
     if(message.content == prefix + "972"){
     if(message.member.roles.cache.has("826916161588690954")){
         message.delete()
         memb.roles.add("830838476202311681")
         message.reply("\n▪️`" + message.author.username + "` 🗣️ Ener aurait du revenir au chapitre 972... \n▪️`Eiichiro Oda` 🗣️ Ahem.. Oui, j'ai du changer mes plans à la dernière minute...")
         message.member.send("***__Commande Secrète :__*** \n \n-`=972` Tu obtiens un ⚡")
     }
     }
     
     if(message.content == prefix + "aide"){
         message.channel.send("<@" + message.author.id + "> vient de recevoir de l'aide !")
         const exampleEmbed = new Discord.MessageEmbed()
            .setColor("#0050fe")
            .setTitle("***__Aide du Jeu :__***")
            .setDescription("Le bot <@!" + "689799577309806650" + "> sera ce soir dédié entièrement à ce nouvel évent : ***__Le Raid !__***")
            .setThumbnail("https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
            .addField("*__But du Jeu :__*", "```Le but est simple, être le premier à remplir la mission. Pour cela il vous faudra franchir les obstacles qui se dresseront devant vous le plus vite possible et devancer les autres joueurs.```")
            .addField("*__Durée du Jeu :__*", "`Le record est de 50 minutes ! Il est détenu par` <@" + "645689674613915668" + "> `! Comptez donc entre 1h00 et 1h30 de jeu.`")
            .addField("*__Règles du Jeu :__*", "```-Pour que cet évent se déroule dans la bonne humeur et la bienséance, nous vous demandons de respecter les règles déjà présentes sur le serveur. \n-En plus de cela, je me dois de vous informer que l'usage d'internet n'est pas recommandé. En effet, si certains joueurs bloquent sur une énigme, nous leurs fourniront des indices au fil de la soirée. \n-L'usage d'internet sera donc considéré comme tricherie (bien que nous ne pouvions pas le vérifier). Cependant vous avez le droit d'ouvrir un tome de One Piece (si vous n'avez pas de tomes chez vous, vous pouvez utiliser internet dans le but de lire les scans en ligne).\n-L'entraide entre les joueurs est acceptée. En effet, les échange ou dons d'informations ne dépendent que de votre envie. Cependant, ils devront se faire en MESSAGE PRIVÉ !```")
            .addField("*__Commandes :__*", "```=inscription permet de s'inscrire et de participer à l'évent. \n \n=pnj permet d'intéragir avec le niveau dans lequel vous vous trouver. \n \n=I1, I2, I3 permettent de diriger son aventure. \n \n='réponse énigme' permet d'avancer dans l'évent en inscrivant la réponse à l'énigme (ex: =zoro).```")
            .addField("*__Conseils :__*", "```-Pour quelquonques incompréhensions veuillez nous contacter le plus rapidement possible afin de vous aider. \n-Si vous ne souhaitez pas faire d'échanges d'informations avec les autres joueurs et que vous bloquez sur une énigme, contactez-nous pour recevoir un indice. Bien sur, réfléchissez quelques minutes avant d'agir. Également, nous nous réservons le droit de vous aider ou non selon de notre jugement en fonction de votre attitude ou avancée dans l'aventure. \nUne équipe sera disponible en vocal et à l'écris toute la soirée en tant que support.\n-Si vous ne  savez pas quoi faire, utilisez la commande =pnj et surtout, ne vous précipitez pas !```")
            .setTimestamp()
            .setFooter("Aide du Jeu | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
            message.member.send(exampleEmbed);
     }
     
     if(message.member.hasPermission("ADMINISTRATOR")){
     if(message.content == prefix + "explications"){
         message.delete()
         message.channel.send("Bonsoir <@&" + "826917612926795856" + "> et bienvenue dans ***__Le Raid__*** ! \n \nCe nouvel évent sera une véritable descente aux enfers où seront semés des mini-jeux sous forme d'obstacle à franchir. \n \nAfin de bien comprendre toutes les règles et le but du jeu, faites appel à la commande `=aide` dans le salon <#" + client.channels.cache.get("826946419525025852") + "> ! \n \nBien, maintenant que tout est clair, vous pouvez commencer en vous inscrivant avec la commande `=inscription` dans <#" + client.channels.cache.get("826946419525025852") + "> !")
     }
     }
     
     const member = message.mentions.members.first() || message.member;
     if(message.content == prefix + "inscription"){
     if(message.member.roles.cache.has("826917612926795856")){
         member.roles.add("826916161588690954")
         member.roles.add("826915881429762090")
         member.roles.remove("826917612926795856")
         message.channel.send("<@" + message.author + "> vient de s'inscrire !")
         const exampleEmbed = new Discord.MessageEmbed()
         .setColor("#020433")
         .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/4/44/Courtier_Infobox.png/revision/latest?cb=20170324142027&path-prefix=fr")
         .addField("*__Extrait d'une lettre destinée aux membres de la Pègre__*", "`     Chers membres de la Pègre, \nSi aujourd'hui je vous écrit cette lettre, c'est pour vous informer de la capture de celui que l'on appele 'JOKER', Don Quichotte Doflamingo. En effet, suite à sa défaite face au pirate Monkey D Luffy, la marine s'est lachement emparée de lui et l'a destituée de son poste de Shichibukai. C'est pourquoi, afin de reprendre nos activités respectives et notre commerce, nous avons décidé de lancer un raid dans la prison d'Impel Down. Ce sera notre manière à nous de montrer au Gouvernement Mondial qui dirige réellement le monde. Aussi, nous nous inspirerons des évènements d'il y a deux ans. C'est pourquoi nous vous recommandons de vous allier avec des prionniers dans le but de surcharger le personnel présent là-bas. Nous accorderons bien évidemment le statut de` **@Chef de la Pègre** `à celui qui accomplira la mission.\n     Si vous souhaitez être de la partie, rendez-vous au` <#" + client.channels.cache.get("826947375264170041") + "> `!`")
         .setTimestamp()
         .setFooter("Lettre de la Pègre | Le Gorosei", "https://static.wikia.nocookie.net/onepiece/images/4/44/Courtier_Infobox.png/revision/latest?cb=20170324142027&path-prefix=fr");
     
         message.member.send(exampleEmbed);
     }
     }
     
     if(message.content == prefix + "pnj"){
     if (message.member.roles.cache.has("826915881429762090")){
         const exampleEmbed = new Discord.MessageEmbed()
         .setColor("#8f3333")
         .setTitle("***__🌴 Impel Down, Calm Belt__***")
         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_1_:_L.27Enfer_.C3.89carlate_ou_l.27Enfer_Pourpre")
         .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
         .setDescription("💀 **__Niveau 1, L'Enfer Alphabétique__** \n🗨️ `Dans ce niveau, les prisonniers sont forcés de courir à travers la forêt tout en étant poursuivis par des araignées venimeuses et les gardes.` Es-tu prêt à relever le défi ? \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Relever le défi \n╠▪️`=I2` **·** [...] \n╚▪️`=I3` **·** [...]")
         .setImage("https://static.wikia.nocookie.net/onepiece/images/8/8f/Impel_Down_Niveau_1.png/revision/latest/scale-to-width-down/250?cb=20180203120720&path-prefix=fr")
         .setTimestamp()
         .setFooter("L'Enfer Alphabétique | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
     
     message.channel.send(exampleEmbed);
         }
     } else {
     
     }
     
     if(message.content == prefix + "pnj"){
         if (message.member.roles.cache.has("829836525910622268")){
             const exampleEmbed = new Discord.MessageEmbed()
             .setColor("#8f3333")
             .setTitle("***__🌴 Impel Down, Calm Belt__***")
             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_1_:_L.27Enfer_.C3.89carlate_ou_l.27Enfer_Pourpre")
             .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
             .setDescription("💀 **__Niveau 1, L'Enfer Alphabétique__** \n🗨️ `Dans ce niveau, les prisonniers sont forcés de courir à travers la forêt tout en étant poursuivis par des araignées venimeuses et les gardes.` Es-tu prêt à relever le défi ? \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Relever le défi \n╠▪️`=I2` **·** [...] \n╚▪️`=I3` **·** [...]")
             .setImage("https://static.wikia.nocookie.net/onepiece/images/8/8f/Impel_Down_Niveau_1.png/revision/latest/scale-to-width-down/250?cb=20180203120720&path-prefix=fr")
             .setTimestamp()
             .setFooter("L'Enfer Alphabétique | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
         
         message.channel.send(exampleEmbed);
             }
         } else {
         
         }
     
     if(message.content == prefix + "I1"){
     if(message.member.roles.cache.has("826915881429762090")){
         message.reply("\n▪️`" + message.author.username + "` 🗣️ Devant vous se dresse un immense cadre où vous distinguez une grille de mots croisés. Ne sachant pas comment aller au niveau 2, vous décidez de la résoudre.")
             const exampleEmbed = new Discord.MessageEmbed()
             .setColor("#8f3333")
             .setTitle("📓 Grille Mots Croisés [LIEN VERS ENIGME]")
             .setURL("https://lockee.fr/o/6ql/grille-niveau1")
             .setDescription("🔑 Le mot de passe est ouvrir !")
             .setTimestamp()
             .setFooter("Grille Mots Croisés | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
         
             message.member.send(exampleEmbed);
     } else {
     
     }
     }
     
     if(message.content == prefix + "fgqxy"){
     if(message.member.roles.cache.has("826915881429762090")){
         message.delete()
         memb.roles.add("829836525910622268")
         memb.roles.remove("826915881429762090")
         message.reply("\n▪️`" + message.author.username + "` 🗣️ En inscrivant ces dernières lettres dans le bon ordre, une phrase apparait alors, vous essayez de la traduire afin de trouver le moyen de se rendre au niveau 2 mais...")
         const exampleEmbed = new Discord.MessageEmbed()
             .setColor("#8f3333")
             .setTitle("📓 Phrase Mystère [LIEN VERS ENIGME]")
             .setURL("https://lockee.fr/o/6ql/phrase-mystere-niveau1")
             .setDescription("🔑 Le mot de passe est fgqxy !")
             .setTimestamp()
             .setFooter("Phrase Mystère | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
         
             message.member.send(exampleEmbed);
     } else {
     
     } 
     }
     
     if(message.content == prefix + "trou"){
         if(message.member.roles.cache.has("829836525910622268")){
             message.delete()
             memb.roles.add("826915879035076701")
             memb.roles.remove("829836525910622268")
             message.member.send("▪️`" + message.author.username + "` 🗣️ Vous finissez par trouver le trou et vous sautez dedans. Vous voilà au <#" + client.channels.cache.get("826947330439249930") + "> !")
         } else {
             
         } 
         }
     
         if(message.content == prefix + "trou"){
             if(message.member.roles.cache.has("829836525910622268")){
                 const exampleEmbed = new Discord.MessageEmbed()
                 .setColor("#8f3333")
                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_2_:_L.27Enfer_des_B.C3.AAtes_D.C3.A9moniaques")
                 .setAuthor(message.author.username + " saute", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                 .setDescription("***__🕳️ Trou, Niveau 1__*** \n \n<@!" +  member.id + "> saute vers le <@&" + "826915879035076701" + "> .")
                 .setImage("https://gogiantrobot.files.wordpress.com/2018/07/impel_down_arc.png?w=640")
                 .setTimestamp()
                 .setFooter("Trou, Niveau 1 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
             
                 message.channel.send(exampleEmbed);
             }
             }
     
         if(message.content == prefix + "pnj"){
         if (message.member.roles.cache.has("826915879035076701")){
                 const exampleEmbed = new Discord.MessageEmbed()
                 .setColor("#38608d")
                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_2_:_L.27Enfer_des_B.C3.AAtes_D.C3.A9moniaques")
                 .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                 .setDescription("💀 **__Niveau 2, L'Enfer des Ombres Démoniaques__** \n🗨️ `Je n'ai même plus assez d'énergie pour avoir peur. Tôt ou tard, nous leur servirons de repas...` Une étrange ombre s'approche toi... \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Fuir \n╠▪️`=I2` **·** Identifier \n╚▪️`=I3` **·** Attaquer")
                 .setImage("https://static.wikia.nocookie.net/onepiece/images/4/48/Impel_Down_Niveau_2.png/revision/latest/scale-to-width-down/250?cb=20180203120813&path-prefix=fr")
                 .setTimestamp()
                 .setFooter("L'Enfer des Ombres Démoniaques | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
             
             message.channel.send(exampleEmbed);
                 }
             } else {
             
             }
     
             if(message.content == prefix + "pnj"){
                 if (message.member.roles.cache.has("826915857254449192")){
                         const exampleEmbed = new Discord.MessageEmbed()
                         .setColor("#38608d")
                         .setTitle("***__🌴 Impel Down, Calm Belt__***")
                         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_2_:_L.27Enfer_des_B.C3.AAtes_D.C3.A9moniaques")
                         .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                         .setDescription("💀 **__Niveau 2, L'Enfer des Ombres Démoniaques__** \n🗨️ `Je n'ai même plus assez d'énergie pour avoir peur. Tôt ou tard, nous leur servirons de repas...` Une étrange ombre s'approche toi... \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Fuir \n╠▪️`=I2` **·** Identifier \n╚▪️`=I3` **·** Attaquer")
                         .setImage("https://static.wikia.nocookie.net/onepiece/images/4/48/Impel_Down_Niveau_2.png/revision/latest/scale-to-width-down/250?cb=20180203120813&path-prefix=fr")
                         .setTimestamp()
                         .setFooter("L'Enfer des Ombres Démoniaques | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                     
                     message.channel.send(exampleEmbed);
                         }
                     } else {
                     
                     }
     
                     if(message.content == prefix + "pnj"){
                         if (message.member.roles.cache.has("826914146569551893")){
                                 const exampleEmbed = new Discord.MessageEmbed()
                                 .setColor("#38608d")
                                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_2_:_L.27Enfer_des_B.C3.AAtes_D.C3.A9moniaques")
                                 .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                 .setDescription("💀 **__Niveau 2, L'Enfer des Ombres Démoniaques__** \n🗨️ `Je n'ai même plus assez d'énergie pour avoir peur. Tôt ou tard, nous leur servirons de repas...` Une étrange ombre s'approche toi... \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Fuir \n╠▪️`=I2` **·** Identifier \n╚▪️`=I3` **·** Attaquer")
                                 .setImage("https://static.wikia.nocookie.net/onepiece/images/4/48/Impel_Down_Niveau_2.png/revision/latest/scale-to-width-down/250?cb=20180203120813&path-prefix=fr")
                                 .setTimestamp()
                                 .setFooter("L'Enfer des Ombres Démoniaques | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                             
                             message.channel.send(exampleEmbed);
                                 }
                             } else {
                             
                             }
     
                             if(message.content == prefix + "pnj"){
                                 if (message.member.roles.cache.has("826914146351054878")){
                                         const exampleEmbed = new Discord.MessageEmbed()
                                         .setColor("#38608d")
                                         .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_2_:_L.27Enfer_des_B.C3.AAtes_D.C3.A9moniaques")
                                         .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                         .setDescription("💀 **__Niveau 2, L'Enfer des Ombres Démoniaques__** \n🗨️ `Je n'ai même plus assez d'énergie pour avoir peur. Tôt ou tard, nous leur servirons de repas...` Une étrange ombre s'approche toi... \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Fuir \n╠▪️`=I2` **·** Identifier \n╚▪️`=I3` **·** Attaquer")
                                         .setImage("https://static.wikia.nocookie.net/onepiece/images/4/48/Impel_Down_Niveau_2.png/revision/latest/scale-to-width-down/250?cb=20180203120813&path-prefix=fr")
                                         .setTimestamp()
                                         .setFooter("L'Enfer des Ombres Démoniaques | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                     
                                     message.channel.send(exampleEmbed);
                                         }
                                     } else {
                                     
                                     }
     
             if(message.content == prefix + "I1"){
                 if(message.member.roles.cache.has("826915879035076701")){
                     message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous tentez de fuir mais l'ombre vous rattrape. Essayez autre chose...")
                 } else {
                 
                 }
                 }
     
                 if(message.content == prefix + "I2"){
                 if(message.member.roles.cache.has("826915879035076701")){
                     memb.roles.add("826915857254449192")
                     memb.roles.remove("826915879035076701")
                         message.reply("\n▪️`" + message.author.username + "` 🗣️ Tiens ! Mais c'est un...")
                             const exampleEmbed = new Discord.MessageEmbed()
                             .setColor("#38608d")
                             .setTitle("📓 Ombres Démoniaques [LIEN VERS ENIGME]")
                             .setURL("https://lockee.fr/o/6ql/ombres-demoniaques1-niveau2")
                             .setDescription("🔑 Le mot de passe est ➡️➡️⬇️⬅️⬆️ !")
                             .setTimestamp()
                             .setFooter("Ombres Démoniaques | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                         
                             message.member.send(exampleEmbed);
                     } else {
                     
                     }
                     }
     
                     if(message.content == prefix + "manticore"){
                     if(message.member.roles.cache.has("826915857254449192")){
                         message.delete()
                         memb.roles.add("826914146569551893")
                         memb.roles.remove("826915857254449192")
                         message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous poursuivez votre route et...")
                         const exampleEmbed = new Discord.MessageEmbed()
                         .setColor("#38608d")
                         .setTitle("📓 Ombres Démoniaques [LIEN VERS ENIGME]")
                         .setURL("https://lockee.fr/o/6ql/ombres-demoniaques2-niveau2")
                         .setDescription("🔑 Le mot de passe est ⬇️⬆️⬅️➡️⬅️ !")
                         .setTimestamp()
                         .setFooter("Ombres Démoniaques | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                     
                         message.member.send(exampleEmbed);
                 } else {
                 
                 }
                 }
     
                 if(message.content == prefix + "basilic"){
                     if(message.member.roles.cache.has("826914146569551893")){
                         message.delete()
                         memb.roles.add("826914146351054878")
                         memb.roles.remove("826914146569551893")
                         message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous continuez d'avancer et...")
                         const exampleEmbed = new Discord.MessageEmbed()
                         .setColor("#38608d")
                         .setTitle("📓 Ombres Démoniaques [LIEN VERS ENIGME]")
                         .setURL("https://lockee.fr/o/6ql/ombres-demoniaques3-niveau2")
                         .setDescription("🔑 Le mot de passe est ⬆️⬆️⬆️⬇️⬅️ !")
                         .setTimestamp()
                         .setFooter("Ombres Démoniaques | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                     
                         message.member.send(exampleEmbed);
                 } else {
                 
                 }
                 }
     
                 if(message.content == prefix + "sphinx"){
                     if(message.member.roles.cache.has("826914146351054878")){
                         message.delete()
                         memb.roles.add("826914145776435256")
                         memb.roles.remove("826914146351054878")
                         message.reply("\n▪️`" + message.author.username + "` 🗣️ Devant vous se dresse une dernière ombre, mais... qui est-ce ?")
                         const exampleEmbed = new Discord.MessageEmbed()
                         .setColor("#38608d")
                         .setTitle("📓 Ombres Démoniaques [LIEN VERS ENIGME]")
                         .setURL("https://lockee.fr/o/6ql/ombres-demoniaques4-niveau2")
                         .setDescription("🔑 Le mot de passe est ⬆️⬅️⬇️➡️⬆️ !")
                         .setTimestamp()
                         .setFooter("Ombres Démoniaques | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                     
                         message.member.send(exampleEmbed);
                 } else {
                 
                 }
                 }
     
                 if(message.content == prefix + "saldeath"){
                     if (message.member.roles.cache.has("826914145776435256")){
                             const exampleEmbed = new Discord.MessageEmbed()
                             .setColor("#fffefe")
                             .setTitle("***__🌴 Impel Down, Calm Belt__***")
                             .setURL("https://onepiece.fandom.com/fr/wiki/Saldeath#Futilit.C3.A9s")
                             .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                             .setDescription("💀 **__Saldeath, Chef des Blugoris__** \n🗨️ Halte là ! Je suis Saldeath, Chef des Blugoris et Garde d'Impel Down. Et non, je ne suis pas un singe ! \n \n⌨️ *Interaction avec le personnage* \n╔▪️`=I1` **·** Affronter Saldeath \n╠▪️`=I2` **·** Fuir le combat \n╚▪️`=I3` **·** [...]")
                             .setImage("https://i.imgur.com/dnMDwYM.png")
                             .setTimestamp()
                             .setFooter("PNJ Saldeath | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                         
                         message.channel.send(exampleEmbed);
                             }
                         } else {
                         
                         }
     
     const prison = client.channels.cache.get("826947166568316928");
     if(message.content.startsWith(prefix + "I1")){
     if(message.member.roles.cache.has("826914145776435256")){
         memb.roles.add("826914137715113995")
         memb.roles.remove("826914145776435256")
         setTimeout(function(){memb.roles.remove("826914137715113995") + memb.roles.add("826914138046857248") + message.member.send("`Tu parviens finalement à t'échapper !` \n \n`Te voilà désormais au` <#" + "826947050691362847" + "> `!`")},600000);
     
         message.member.send("▪️`" + message.author.username + "` 🗣️ Vous perdez le combat et vous vous faites capturer !")
         const exampleEmbed = new Discord.MessageEmbed()
         .setColor("#020000")
         .setTitle("***__🌴 Impel Down, Calm Belt__***")
         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Prisonniers")
         .setAuthor("Tu es fait Prisonnier !", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
         .setDescription("***__⛓️ Prison, Niveau 5__*** \n \n`Te voilà fait` <@&" + "826914137715113995" + "> `!` \n \n`Tu sera libéré dans 10 minutes !`")
         .setImage("https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/07/Ace-Impel-Down.jpg")
         .setTimestamp()
         .setFooter("Prison, Niveau 5 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
     
         prison.send(exampleEmbed);
     }else {
     
     }
     }
     
     if(message.content == prefix + "I1"){
         if(message.member.roles.cache.has("826914145776435256")){
             const exampleEmbed = new Discord.MessageEmbed()
             .setColor("#020000")
             .setTitle("***__🌴 Impel Down, Calm Belt__***")
             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Prisonniers")
             .setAuthor(message.author.username + " se fait emprisonner", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
             .setDescription("***__⛓️ Emprisonnement, Niveau 2__*** \n \n<@!" +  member.id + "> devient <@&" + "826914137715113995" + "> .")
             .setImage("https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/07/Ace-Impel-Down.jpg")
             .setTimestamp()
             .setFooter("Emprisonnement, Niveau 2 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
         
             message.channel.send(exampleEmbed);
         }
         }
     
     if(message.content == prefix + "I2"){
     if(message.member.roles.cache.has("826914145776435256")){
         memb.roles.add("826914144598491178")
         memb.roles.remove("826914145776435256")
         message.member.send("▪️`" + message.author.username + "` 🗣️ Vous réussissez finalement à semer Saldeath et vous arrivez devant l'escalier menant au <#" + "826947262647107595" + "> .")
     }
     }
     
     if(message.content == prefix + "I2"){
         if(message.member.roles.cache.has("826914145776435256")){
             const exampleEmbed = new Discord.MessageEmbed()
             .setColor("#feff00")
             .setTitle("***__🌴 Impel Down, Calm Belt__***")
             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_3_:_L.27Enfer_de_la_Faim")
             .setAuthor(message.author.username + " s'en va", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
             .setDescription("***__🚪 Escalier, Niveau 2__*** \n \n<@!" +  member.id + "> s'en va vers le <@&" + "826914144598491178" + "> .")
             .setImage("https://gogiantrobot.files.wordpress.com/2018/07/impel_down_arc.png?w=640")
             .setTimestamp()
             .setFooter("Escalier, Niveau 2 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
         
             message.channel.send(exampleEmbed);
         }
         }
     
                     if(message.content == prefix + "I3"){
                         if(message.member.roles.cache.has("826915879035076701")){
                             message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous tentez d'attaquer l'ombre mais celle-ci esquive. Essayez autre chose...")
                         } else {
                         
                         }
                         }
     
                         if(message.content == prefix + "pnj"){
                             if (message.member.roles.cache.has("826914144598491178")){
                                     const exampleEmbed = new Discord.MessageEmbed()
                                     .setColor("#feff00")
                                     .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                     .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_3_:_L.27Enfer_de_la_Faim")
                                     .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                     .setDescription("💀 **__Niveau 3, L'Enfer de la Nourriture__** \n🗨️ `À ce niveau, les prisonniers sentent la chaleur monter du niveau 4 et reçoivent peu de nourriture et d'eau pour les maintenir dans un état proche de la mort.` Afin de créer une émeute, nourrissez les personnes que vous rencontrerez ! \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Chercher de la nourriture \n╠▪️`=I2` **·** Remonter au Niveau 2 \n╚▪️`=I3` **·** Descendre au Niveau 4")
                                     .setImage("https://static.wikia.nocookie.net/onepiece/images/3/30/Impel_Down_Niveau_3.png/revision/latest/scale-to-width-down/250?cb=20180203121119&path-prefix=fr")
                                     .setTimestamp()
                                     .setFooter("L'Enfer de la Nourriture | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                 
                                 message.channel.send(exampleEmbed);
                                     }
                                 } else {
                                 
                                 }
     
                                 if(message.content == prefix + "pnj"){
                                     if (message.member.roles.cache.has("826914144162152448")){
                                             const exampleEmbed = new Discord.MessageEmbed()
                                             .setColor("#feff00")
                                             .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_3_:_L.27Enfer_de_la_Faim")
                                             .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                             .setDescription("💀 **__Niveau 3, L'Enfer de la Nourriture__** \n🗨️ `À ce niveau, les prisonniers sentent la chaleur monter du niveau 4 et reçoivent peu de nourriture et d'eau pour les maintenir dans un état proche de la mort.` Afin de créer une émeute, nourrissez les personnes que vous rencontrerez ! \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Chercher de la nourriture \n╠▪️`=I2` **·** Remonter au Niveau 2 \n╚▪️`=I3` **·** Descendre au Niveau 4")
                                             .setImage("https://static.wikia.nocookie.net/onepiece/images/3/30/Impel_Down_Niveau_3.png/revision/latest/scale-to-width-down/250?cb=20180203121119&path-prefix=fr")
                                             .setTimestamp()
                                             .setFooter("L'Enfer de la Nourriture | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                         
                                         message.channel.send(exampleEmbed);
                                             }
                                         } else {
                                         
                                         }
     
                                         if(message.content == prefix + "pnj"){
                                             if (message.member.roles.cache.has("826914143285280788")){
                                                     const exampleEmbed = new Discord.MessageEmbed()
                                                     .setColor("#feff00")
                                                     .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                                     .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_3_:_L.27Enfer_de_la_Faim")
                                                     .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                                     .setDescription("💀 **__Niveau 3, L'Enfer de la Nourriture__** \n🗨️ `À ce niveau, les prisonniers sentent la chaleur monter du niveau 4 et reçoivent peu de nourriture et d'eau pour les maintenir dans un état proche de la mort.` Afin de créer une émeute, nourrissez les personnes que vous rencontrerez ! \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Chercher de la nourriture \n╠▪️`=I2` **·** Remonter au Niveau 2 \n╚▪️`=I3` **·** Descendre au Niveau 4")
                                                     .setImage("https://static.wikia.nocookie.net/onepiece/images/3/30/Impel_Down_Niveau_3.png/revision/latest/scale-to-width-down/250?cb=20180203121119&path-prefix=fr")
                                                     .setTimestamp()
                                                     .setFooter("L'Enfer de la Nourriture | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                                 
                                                 message.channel.send(exampleEmbed);
                                                     }
                                                 } else {
                                                 
                                                 }
     
                                                 if(message.content == prefix + "pnj"){
                                                     if (message.member.roles.cache.has("826914142426365995")){
                                                             const exampleEmbed = new Discord.MessageEmbed()
                                                             .setColor("#feff00")
                                                             .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                                             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_3_:_L.27Enfer_de_la_Faim")
                                                             .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                                             .setDescription("💀 **__Niveau 3, L'Enfer de la Nourriture__** \n🗨️ `À ce niveau, les prisonniers sentent la chaleur monter du niveau 4 et reçoivent peu de nourriture et d'eau pour les maintenir dans un état proche de la mort.` Afin de créer une émeute, nourrissez les personnes que vous rencontrerez ! \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Chercher de la nourriture \n╠▪️`=I2` **·** Remonter au Niveau 2 \n╚▪️`=I3` **·** Descendre au Niveau 4")
                                                             .setImage("https://static.wikia.nocookie.net/onepiece/images/3/30/Impel_Down_Niveau_3.png/revision/latest/scale-to-width-down/250?cb=20180203121119&path-prefix=fr")
                                                             .setTimestamp()
                                                             .setFooter("L'Enfer de la Nourriture | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                                         
                                                         message.channel.send(exampleEmbed);
                                                             }
                                                         } else {
                                                         
                                                         }
     
                                                         if(message.content == prefix + "pnj"){
                                                             if (message.member.roles.cache.has("826914142015193138")){
                                                                     const exampleEmbed = new Discord.MessageEmbed()
                                                                     .setColor("#feff00")
                                                                     .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                                                     .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_3_:_L.27Enfer_de_la_Faim")
                                                                     .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                                                     .setDescription("💀 **__Niveau 3, L'Enfer de la Nourriture__** \n🗨️ `À ce niveau, les prisonniers sentent la chaleur monter du niveau 4 et reçoivent peu de nourriture et d'eau pour les maintenir dans un état proche de la mort.` Afin de créer une émeute, nourrissez les personnes que vous rencontrerez ! \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Chercher de la nourriture \n╠▪️`=I2` **·** Remonter au Niveau 2 \n╚▪️`=I3` **·** Descendre au Niveau 4")
                                                                     .setImage("https://static.wikia.nocookie.net/onepiece/images/3/30/Impel_Down_Niveau_3.png/revision/latest/scale-to-width-down/250?cb=20180203121119&path-prefix=fr")
                                                                     .setTimestamp()
                                                                     .setFooter("L'Enfer de la Nourriture | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                                                 
                                                                 message.channel.send(exampleEmbed);
                                                                     }
                                                                 } else {
                                                                 
                                                                 }
     
                                                                 if(message.content == prefix + "pnj"){
                                                                     if (message.member.roles.cache.has("826914140031418418")){
                                                                             const exampleEmbed = new Discord.MessageEmbed()
                                                                             .setColor("#feff00")
                                                                             .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                                                             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_3_:_L.27Enfer_de_la_Faim")
                                                                             .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                                                             .setDescription("💀 **__Niveau 3, L'Enfer de la Nourriture__** \n🗨️ `À ce niveau, les prisonniers sentent la chaleur monter du niveau 4 et reçoivent peu de nourriture et d'eau pour les maintenir dans un état proche de la mort.` Afin de créer une émeute, nourrissez les personnes que vous rencontrerez ! \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Chercher de la nourriture \n╠▪️`=I2` **·** Remonter au Niveau 2 \n╚▪️`=I3` **·** Descendre au Niveau 4")
                                                                             .setImage("https://static.wikia.nocookie.net/onepiece/images/3/30/Impel_Down_Niveau_3.png/revision/latest/scale-to-width-down/250?cb=20180203121119&path-prefix=fr")
                                                                             .setTimestamp()
                                                                             .setFooter("L'Enfer de la Nourriture | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                                                         
                                                                         message.channel.send(exampleEmbed);
                                                                             }
                                                                         } else {
                                                                         
                                                                         }
     
     if(message.content == prefix + "I1"){
     if(message.member.roles.cache.has("826914144598491178")){
         memb.roles.add("826914144162152448")
         memb.roles.remove("826914144598491178")
         message.reply("\n▪️`" + message.author.username + "` 🗣️ Maintenant que tu as fait le stock, tu te mets en marche en quête de provoquer une émeute.")
         message.member.send("▪️`Prisonnier` 🗣️ Hé toi là-bas ! Ce serait pas la nourriture préférée du célèbre pirate MONKEY D Luffy que tu as là ? \n▪️`" + message.author.username + "` 🗣️ Oh tu veux dire...")
     }
     }
     
     if(message.content == prefix + "viande"){
     if(message.member.roles.cache.has("826914144162152448")){
         message.delete()
         memb.roles.add("826914143285280788")
         memb.roles.remove("826914144162152448")
         message.reply("\n▪️`" + message.author.username + "` 🗣️ Après avoir nourri et libéré les prisonniers, vous continuez votre chemin vers le niveau 4.")
         message.member.send("▪️`Prisonnier` 🗣️ Cette odeur, cette couleur... Je les reconnaient ! C'est l'aliment préféré de la Chatte Voleuse, Nami ! \n▪️`" + message.author.username + "` 🗣️ Oui c'est...")
     }
     }
     
     if(message.content == prefix + "mandarine"){
     if(message.member.roles.cache.has("826914143285280788")){
         message.delete()
         memb.roles.add("826914142426365995")
         memb.roles.remove("826914143285280788")
         message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous nourrissez et libérez une nouvelle cellule de prisonniers.")
         message.member.send("▪️`Prisonnier` 🗣️ Eh ! Viens par ici, apporte nous les clés ! Oh mais... Attend ! Ce ne serait pas au Vice-Directeur Magellan ?!\n▪️`" + message.author.username + "` 🗣️ En effet, c'est possible. Il me semble que c'est...")
     }
     }
     
     if(message.content == prefix + "soupe de poison"){
     if(message.member.roles.cache.has("826914142426365995")){
         message.delete()
         memb.roles.add("826914142015193138")
         memb.roles.remove("826914142426365995")
         message.reply("\n▪️`" + message.author.username + "` 🗣️ L'émeute est presque déclenchée, encore un petit effort !")
         message.member.send("▪️`Prisonnier` 🗣️ C'est vrai que tu te rend au niveau 6 ? Il parait que Doflamingo adore ce plat.\n▪️`" + message.author.username + "` 🗣️ Oui, je compte lui apporter son plat préféré !")
     }
     }
     
     if(message.content == prefix + "soupe au poison"){
         if(message.member.roles.cache.has("826914142426365995")){
             message.delete()
             memb.roles.add("826914142015193138")
             memb.roles.remove("826914142426365995")
             message.reply("\n▪️`" + message.author.username + "` 🗣️ L'émeute est presque déclenchée, encore un petit effort !")
             message.member.send("▪️`Prisonnier` 🗣️ C'est vrai que tu te rend au niveau 6 ? Il parait que Doflamingo adore ce plat.\n▪️`" + message.author.username + "` 🗣️ Oui, je compte lui apporter son plat préféré !")
         }
         }
     
     if(message.content == prefix + "homard"){
     if(message.member.roles.cache.has("826914142015193138")){
         message.delete()
         memb.roles.add("826914140031418418")
         memb.roles.remove("826914142015193138")
         message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous avancez dans votre tâche, le niveau 4 n'est plus si loin !")
         message.member.send("▪️`Prisonnier` 🗣️ Cette boisson à ta ceinture ! Je la reconnait, c'était la boisson préférée de Bentham, mon compagnon de cellule ! Donne m'en, c'était mon ami !\n▪️`" + message.author.username + "` 🗣️ Oh tu parle de...")
     }
     }
     
     if(message.content == prefix + "parpoulpe"){
         if(message.member.roles.cache.has("826914140031418418")){
             message.delete()
             memb.roles.add("826914139154546688")
             memb.roles.remove("826914140031418418")
             message.member.send("\n▪️`" + message.author.username + "` 🗣️ Grâce à l'effet de masse, tous les prisonniers sont libres et rassasiés. Ils déclanchent une émeute et scandent votre nom ! Vous profitez de l'émeute pour sauter dans le trou menant au <#" + "826947204018602064" + "> .")
         }
         }
     
         if(message.content == prefix + "octopus parfait"){
             if(message.member.roles.cache.has("826914140031418418")){
                 message.delete()
                 memb.roles.add("826914139154546688")
                 memb.roles.remove("826914140031418418")
                 message.member.send("\n▪️`" + message.author.username + "` 🗣️ Grâce à l'effet de masse, tous les prisonniers sont libres et rassasiés. Ils déclanchent une émeute et scandent votre nom ! Vous profitez de l'émeute pour sauter dans le trou menant au <#" + "826947204018602064" + "> .")
             }
             }
     
     if(message.content == prefix + "parpoulpe"){
     if(message.member.roles.cache.has("826914140031418418")){
         const exampleEmbed = new Discord.MessageEmbed()
         .setColor("#fe8500")
         .setTitle("***__🌴 Impel Down, Calm Belt__***")
         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_4_:_La_Fournaise_ou_l.27Enfer_des_Flammes")
         .setAuthor(message.author.username + " saute", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
         .setDescription("***__🕳️ Trou, Niveau 4__*** \n \n<@!" +  member.id + "> saute vers le <@&" + "826914139154546688" + "> .")
         .setImage("https://gogiantrobot.files.wordpress.com/2018/07/impel_down_arc.png?w=640")
         .setTimestamp()
         .setFooter("Trou, Niveau 4 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
             
         message.channel.send(exampleEmbed);
     }
     }
     
     if(message.content == prefix + "octopus parfait"){
         if(message.member.roles.cache.has("826914140031418418")){
             const exampleEmbed = new Discord.MessageEmbed()
             .setColor("#fe8500")
             .setTitle("***__🌴 Impel Down, Calm Belt__***")
             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_4_:_La_Fournaise_ou_l.27Enfer_des_Flammes")
             .setAuthor(message.author.username + " saute", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
             .setDescription("***__🕳️ Trou, Niveau 4__*** \n \n<@!" +  member.id + "> saute vers le <@&" + "826914139154546688" + "> .")
             .setImage("https://gogiantrobot.files.wordpress.com/2018/07/impel_down_arc.png?w=640")
             .setTimestamp()
             .setFooter("Trou, Niveau 4 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                 
             message.channel.send(exampleEmbed);
         }
         }
     
     if(message.content == prefix + "I2"){
         if(message.member.roles.cache.has("826914144598491178")){
             message.reply("\n▪️`" + message.author.username + "` 🗣️ Votre mission n'est pas terminée ! Vous ne pouvez pas remonter au niveau 2. Essayez autre chose...")
         }
         }
     
     if(message.content == prefix + "I3"){
     if(message.member.roles.cache.has("826914144598491178")){
         message.reply("\n▪️`" + message.author.username + "` 🗣️ Votre devez créer une émeute pour descendre au niveau 4 ! Essayez autre chose...")
         }
     }
     
     if(message.content == prefix + "pnj"){
         if (message.member.roles.cache.has("826914139154546688")){
                 const exampleEmbed = new Discord.MessageEmbed()
                 .setColor("#fe8500")
                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_4_:_La_Fournaise_ou_l.27Enfer_des_Flammes")
                 .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                 .setDescription("💀 **__Niveau 4, Le Code__** \n🗨️ `À ce niveau, une marmite géante est remplie de sang bouillant chauffé par de grandes flammes, ce qui rend l'étage extrêmement chaud.` La porte menant au niveau 5 est étrangement vérouillée par un code digital. Pour l'ouvrir, il vous faut inscrire le propriétaire de ces citations.\n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Casser la porte \n╠▪️`=I2` **·** Demander à Hannyabal de dévérouiller la porte \n╚▪️`=I3` **·** Résoudre l'énigme")
                 .setImage("https://static.wikia.nocookie.net/onepiece/images/6/6f/Impel_Down_Niveau_4.png/revision/latest/scale-to-width-down/250?cb=20180203121922&path-prefix=fr")
                 .setTimestamp()
                 .setFooter("Le Code | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
             
             message.channel.send(exampleEmbed);
                 }
             } else {
             
             }
     
             if(message.content == prefix + "pnj"){
                 if (message.member.roles.cache.has("827229319126188082")){
                         const exampleEmbed = new Discord.MessageEmbed()
                         .setColor("#fe8500")
                         .setTitle("***__🌴 Impel Down, Calm Belt__***")
                         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_4_:_La_Fournaise_ou_l.27Enfer_des_Flammes")
                         .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                         .setDescription("💀 **__Niveau 4, Le Code__** \n🗨️ `À ce niveau, une marmite géante est remplie de sang bouillant chauffé par de grandes flammes, ce qui rend l'étage extrêmement chaud.` La porte menant au niveau 5 est étrangement vérouillée par un code digital. Pour l'ouvrir, il vous faut inscrire le propriétaire de ces citations.\n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Casser la porte \n╠▪️`=I2` **·** Demander à Hannyabal de dévérouiller la porte \n╚▪️`=I3` **·** Résoudre l'énigme")
                         .setImage("https://static.wikia.nocookie.net/onepiece/images/6/6f/Impel_Down_Niveau_4.png/revision/latest/scale-to-width-down/250?cb=20180203121922&path-prefix=fr")
                         .setTimestamp()
                         .setFooter("Le Code | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                     
                     message.channel.send(exampleEmbed);
                         }
                     } else {
                     
                     }
     
                     if(message.content == prefix + "pnj"){
                         if (message.member.roles.cache.has("827229323529814147")){
                                 const exampleEmbed = new Discord.MessageEmbed()
                                 .setColor("#fe8500")
                                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_4_:_La_Fournaise_ou_l.27Enfer_des_Flammes")
                                 .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                 .setDescription("💀 **__Niveau 4, Le Code__** \n🗨️ `À ce niveau, une marmite géante est remplie de sang bouillant chauffé par de grandes flammes, ce qui rend l'étage extrêmement chaud.` La porte menant au niveau 5 est étrangement vérouillée par un code digital. Pour l'ouvrir, il vous faut inscrire le propriétaire de ces citations.\n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Casser la porte \n╠▪️`=I2` **·** Demander à Hannyabal de dévérouiller la porte \n╚▪️`=I3` **·** Résoudre l'énigme")
                                 .setImage("https://static.wikia.nocookie.net/onepiece/images/6/6f/Impel_Down_Niveau_4.png/revision/latest/scale-to-width-down/250?cb=20180203121922&path-prefix=fr")
                                 .setTimestamp()
                                 .setFooter("Le Code | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                             
                             message.channel.send(exampleEmbed);
                                 }
                             } else {
                             
                             }
     
                             if(message.content == prefix + "pnj"){
                                 if (message.member.roles.cache.has("827229328776495174")){
                                         const exampleEmbed = new Discord.MessageEmbed()
                                         .setColor("#fe8500")
                                         .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_4_:_La_Fournaise_ou_l.27Enfer_des_Flammes")
                                         .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                         .setDescription("💀 **__Niveau 4, Le Code__** \n🗨️ `À ce niveau, une marmite géante est remplie de sang bouillant chauffé par de grandes flammes, ce qui rend l'étage extrêmement chaud.` La porte menant au niveau 5 est étrangement vérouillée par un code digital. Pour l'ouvrir, il vous faut inscrire le propriétaire de ces citations.\n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Casser la porte \n╠▪️`=I2` **·** Demander à Hannyabal de dévérouiller la porte \n╚▪️`=I3` **·** Résoudre l'énigme")
                                         .setImage("https://static.wikia.nocookie.net/onepiece/images/6/6f/Impel_Down_Niveau_4.png/revision/latest/scale-to-width-down/250?cb=20180203121922&path-prefix=fr")
                                         .setTimestamp()
                                         .setFooter("Le Code | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                     
                                     message.channel.send(exampleEmbed);
                                         }
                                     } else {
                                     
                                     }
     
                                     if(message.content == prefix + "pnj"){
                                         if (message.member.roles.cache.has("827229328835477535")){
                                                 const exampleEmbed = new Discord.MessageEmbed()
                                                 .setColor("#fe8500")
                                                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_4_:_La_Fournaise_ou_l.27Enfer_des_Flammes")
                                                 .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                                 .setDescription("💀 **__Niveau 4, Le Code__** \n🗨️ `À ce niveau, une marmite géante est remplie de sang bouillant chauffé par de grandes flammes, ce qui rend l'étage extrêmement chaud.` La porte menant au niveau 5 est étrangement vérouillée par un code digital. Pour l'ouvrir, il vous faut inscrire le propriétaire de ces citations.\n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Casser la porte \n╠▪️`=I2` **·** Demander à Hannyabal de dévérouiller la porte \n╚▪️`=I3` **·** Résoudre l'énigme")
                                                 .setImage("https://static.wikia.nocookie.net/onepiece/images/6/6f/Impel_Down_Niveau_4.png/revision/latest/scale-to-width-down/250?cb=20180203121922&path-prefix=fr")
                                                 .setTimestamp()
                                                 .setFooter("Le Code | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                             
                                             message.channel.send(exampleEmbed);
                                                 }
                                             } else {
                                             
                                             }
     
                                             if(message.content == prefix + "pnj"){
                                                 if (message.member.roles.cache.has("827229330118803537")){
                                                         const exampleEmbed = new Discord.MessageEmbed()
                                                         .setColor("#fe8500")
                                                         .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                                         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_4_:_La_Fournaise_ou_l.27Enfer_des_Flammes")
                                                         .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                                         .setDescription("💀 **__Niveau 4, Le Code__** \n🗨️ `À ce niveau, une marmite géante est remplie de sang bouillant chauffé par de grandes flammes, ce qui rend l'étage extrêmement chaud.` La porte menant au niveau 5 est étrangement vérouillée par un code digital. Pour l'ouvrir, il vous faut inscrire le propriétaire de ces citations.\n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Casser la porte \n╠▪️`=I2` **·** Demander à Hannyabal de dévérouiller la porte \n╚▪️`=I3` **·** Résoudre l'énigme")
                                                         .setImage("https://static.wikia.nocookie.net/onepiece/images/6/6f/Impel_Down_Niveau_4.png/revision/latest/scale-to-width-down/250?cb=20180203121922&path-prefix=fr")
                                                         .setTimestamp()
                                                         .setFooter("Le Code | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                                     
                                                     message.channel.send(exampleEmbed);
                                                         }
                                                     } else {
                                                     
                                                     }
     
             if(message.content == prefix + "I1"){
                 if(message.member.roles.cache.has("826914139154546688")){
                     message.reply("\n▪️`" + message.author.username + "` 🗣️ Détruire la porte reviendrait à vous faire repérer. Essayez autre chose...")
                 }
                 }
     
                 if(message.content == prefix + "I2"){
                     if(message.member.roles.cache.has("826914139154546688")){
                         message.reply("\n▪️`" + message.author.username + "` 🗣️ Demander à Hannyabal reviendrait à vous faire repérer. Essayez autre chose...")
                     }
                     }
     
                     if(message.content == prefix + "I3"){
                         if(message.member.roles.cache.has("826914139154546688")){
                             memb.roles.add("827229319126188082")
                             memb.roles.remove("826914139154546688")
                             message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous vous approchez alors du code digital et lisez la citation suivante :")
                             message.member.send("▪️`Code Digital` ☎️ *__Je suis atteint d'une maladie très rare qui fait que je meurt si je ne prends pas de goûter.__*")
                         }
                         }
     
     if(message.content == prefix + "usopp"){
     if(message.member.roles.cache.has("827229319126188082")){
     message.delete()
     memb.roles.add("827229323529814147")
     memb.roles.remove("827229319126188082")
     message.reply("\n▪️`" + message.author.username + "` 🗣️ En inscrivant la bonne réponse, une nouvelle citation apparaît :")
     message.member.send("▪️`Code Digital` ☎️ *__Sans souplesse dans le geste, la force ne sert à rien.__*")
     }
     }
     
     if(message.content == prefix + "mihawk"){
     if(message.member.roles.cache.has("827229323529814147")){
     message.delete()
     memb.roles.add("827229328776495174")
     memb.roles.remove("827229323529814147")
     message.reply("\n▪️`" + message.author.username + "` 🗣️ Très bien ! Vous en êtes à la moitié !")
     message.member.send("▪️`Code Digital` ☎️ *__Dorénavant je veux être maître de mon destin et vivre comme je l'entends !__*")
     }
     }
     
     if(message.content == prefix + "gin"){
         if(message.member.roles.cache.has("827229328776495174")){
         message.delete()
         memb.roles.add("827229328835477535")
         memb.roles.remove("827229328776495174")
         message.reply("\n▪️`" + message.author.username + "` 🗣️ Presque ! Encore un dernier effort !")
         message.member.send("▪️`Code Digital` ☎️ *__As-tu déjà vu un animal féroce dont tu peux dire avec certitude qu'il ne te mordra pas ?__*")
         }
         }
     
         if(message.content == prefix + "zoro"){
             if(message.member.roles.cache.has("827229328835477535")){
             message.delete()
             memb.roles.add("827229330118803537")
             memb.roles.remove("827229328835477535")
             message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous entendez des pas dans l'escalier, dépêchez-vous !")
             message.member.send("▪️`Code Digital` ☎️ *__Même si on ne peux pas le voir, nous avons le droit de changer le futur.__*")
             }
             }
     
             if(message.content == prefix + "bege"){
                 if(message.member.roles.cache.has("827229330118803537")){
                 message.delete()
                 memb.roles.add("826914138046857248")
                 memb.roles.remove("827229330118803537")
                 message.member.send("▪️`" + message.author.username + "` 🗣️ Vous parvenez finalement à ouvrir la porte menant au <#" + "826947050691362847" + "> alors que des soldats, de garde, font leur ronde.")
                 }
                 }
     if(message.content == prefix + "bege"){
     if(message.member.roles.cache.has("827229330118803537")){
     const exampleEmbed = new Discord.MessageEmbed()
     .setColor("#98fff4")
     .setTitle("***__🌴 Impel Down, Calm Belt__***")
     .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_5_:_La_Glaci.C3.A8re_ou_l.27Enfer_des_Glaces")
     .setAuthor(message.author.username + " s'en va", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
     .setDescription("***__🚪 Escalier, Niveau 4__*** \n \n<@!" +  member.id + "> s'en va vers le <@&" + "826914138046857248" + "> .")
     .setImage("https://gogiantrobot.files.wordpress.com/2018/07/impel_down_arc.png?w=640")
     .setTimestamp()
     .setFooter("Escalier, Niveau 4 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
     
     message.channel.send(exampleEmbed);
     }
     }
     
     if(message.content == prefix + "pnj"){
     if (message.member.roles.cache.has("826914138046857248")){
     const exampleEmbed = new Discord.MessageEmbed()
     .setColor("#98fff4")
     .setTitle("***__🌴 Impel Down, Calm Belt__***")
     .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_5_:_La_Glaci.C3.A8re_ou_l.27Enfer_des_Glaces")
     .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
     .setDescription("💀 **__Niveau 5, La rencontre__** \n🗨️ `Les prisonniers qui ne peuvent même pas bouger disparaissent soudainement, sans laisser une seule trace.` One ! Two ! Three ! Gaaaaahhahhaha...\n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Se diriger vers le bruit \n╠▪️`=I2` **·** Aller au niveau 6 \n╚▪️`=I3` **·** [...]")
     .setImage("https://static.wikia.nocookie.net/onepiece/images/0/04/Impel_Down_Niveau_5.png/revision/latest/scale-to-width-down/250?cb=20180203122110&path-prefix=fr")
     .setTimestamp()
     .setFooter("La Rencontre | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
             
     message.channel.send(exampleEmbed);
     }
     } else {
             
     }
     
     if(message.content == prefix + "I1"){
         if(message.member.roles.cache.has("826914138046857248")){
             memb.roles.add("827248638869766174")
             memb.roles.remove("826914138046857248")
             message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous avancez dans la direction du bruit et vous vous retrouvez face à un travelo dansant dans la neige.")
         }
         }
     
         if(message.content == prefix + "pnj"){
             if (message.member.roles.cache.has("827248638869766174")){
             const exampleEmbed = new Discord.MessageEmbed()
             .setColor("#ffffff")
             .setTitle("***__🌴 Impel Down, Calm Belt__***")
             .setURL("https://onepiece.fandom.com/fr/wiki/Bentham")
             .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
             .setDescription("💀 **__Bentham, Mister 2 Bon Clay__** \n🗨️ `Ni Homme, ni Femme je ne suis pas moins un humain, sous le ciel où s'éparpillent les pétales de l'amitié... que s'épanouisse l' Okama-way !!!` Hello mon chou !\n \n⌨️ *Interaction avec le personnage* \n╔▪️`=I1` **·** Bonjour, qui êtes-vous, Monsieur ? \n╠▪️`=I2` **·** Bonjour, qui êtes-vous, Madame ? \n╚▪️`=I3` **·** Qui t'es toi ?")
             .setImage("https://i.imgur.com/Ly6K2cQ.png")
             .setTimestamp()
             .setFooter("Bentham, Mister 2 Bon Clay | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                     
             message.channel.send(exampleEmbed);
             }
             } else {
                     
             }
     
             if(message.content == prefix + "I1"){
                 if(message.member.roles.cache.has("827248638869766174")){
                     memb.roles.add("826914135652565053")
                     memb.roles.remove("827248638869766174")
                     message.member.send("▪️`Bon Clay` 🗣️ Je ne suis ni un homme, ni une femme ! Imbécile ! Le <#" + "826946883846144041" + "> est par là... \n▪️`" + message.author.username + "` 🗣️ ...")
                 }
                 }
     
                 if(message.content == prefix + "I1"){
                     if(message.member.roles.cache.has("827248638869766174")){
                     const exampleEmbed = new Discord.MessageEmbed()
                     .setColor("#0f1544")
                     .setTitle("***__🌴 Impel Down, Calm Belt__***")
                     .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                     .setAuthor(message.author.username + " s'en va", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                     .setDescription("***__🚪 Escalier, Niveau 5__*** \n \n<@!" +  member.id + "> s'en va vers le <@&" + "826914135652565053" + "> .")
                     .setImage("https://gogiantrobot.files.wordpress.com/2018/07/impel_down_arc.png?w=640")
                     .setTimestamp()
                     .setFooter("Escalier, Niveau 5 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                     
                     message.channel.send(exampleEmbed);
                     }
                     }
     
                     if(message.content == prefix + "I2"){
                         if(message.member.roles.cache.has("827248638869766174")){
                             memb.roles.add("826914135652565053")
                             memb.roles.remove("827248638869766174")
                             message.member.send("▪️`Bon Clay` 🗣️ Je ne suis ni un homme, ni une femme ! Imbécile ! Le <#" + "826946883846144041" + "> est par là... \n▪️`" + message.author.username + "` 🗣️ ...")
                         }
                         }
             
                         if(message.content == prefix + "I2"){
                             if(message.member.roles.cache.has("827248638869766174")){
                             const exampleEmbed = new Discord.MessageEmbed()
                             .setColor("#0f1544")
                             .setTitle("***__🌴 Impel Down, Calm Belt__***")
                             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                             .setAuthor(message.author.username + " s'en va", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                             .setDescription("***__🚪 Escalier, Niveau 5__*** \n \n<@!" +  member.id + "> s'en va vers le <@&" + "826914135652565053" + "> .")
                             .setImage("https://gogiantrobot.files.wordpress.com/2018/07/impel_down_arc.png?w=640")
                             .setTimestamp()
                             .setFooter("Escalier, Niveau 5 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                             
                             message.channel.send(exampleEmbed);
                             }
                             }
     
     if(message.content == prefix + "I3"){
     if(message.member.roles.cache.has("827248638869766174")){
     memb.roles.add("827258963690913843")
     memb.roles.remove("827248638869766174")
     message.reply("\n▪️`Bon Clay` 🗣️ Je ne suis ni un homme, ni une femme mais un travelo, Okama-way !!! Suis moi, je vais t'emmener au Paradis des Prisonniers !")
     }
     }
     
     if(message.content == prefix + "pnj"){
         if (message.member.roles.cache.has("827258963690913843")){
         const exampleEmbed = new Discord.MessageEmbed()
         .setColor("#ffffff")
         .setTitle("***__🌴 Impel Down, Calm Belt__***")
         .setURL("https://onepiece.fandom.com/fr/wiki/Bentham")
         .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
         .setDescription("💀 **__Bentham, Mister 2 Bon Clay__** \n🗨️ `Ni Homme, ni Femme je ne suis pas moins un humain, sous le ciel où s'éparpillent les pétales de l'amitié... que s'épanouisse l' Okama-way !!!` Allons au Paradis des Prisonniers !\n \n⌨️ *Interaction avec le personnage* \n╔▪️`=I1` **·** Suivre Bon Clay \n╠▪️`=I2` **·** Refuser poliment \n╚▪️`=I3` **·** [...]")
         .setImage("https://i.imgur.com/Ly6K2cQ.png")
         .setTimestamp()
         .setFooter("Bentham, Mister 2 Bon Clay | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                 
         message.channel.send(exampleEmbed);
         }
         } else {
                 
         }
     
         if(message.content == prefix + "I1"){
             if(message.member.roles.cache.has("827258963690913843")){
                 memb.roles.add("826914136280662067")
                 memb.roles.remove("827258963690913843")
                 message.member.send("▪️`" + message.author.username + "` 🗣️ Vous suivez Bon Clay et vous arrivez finalement au <#" + "826946933481930753" + ">.")
             }
             }
     
             if(message.content == prefix + "I1"){
                 if(message.member.roles.cache.has("827258963690913843")){
                 const exampleEmbed = new Discord.MessageEmbed()
                 .setColor("#d598ff")
                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_5.5_:_Newkama_Land")
                 .setAuthor(message.author.username + " s'en va", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                 .setDescription("***__🛖 Abri, Niveau 5__*** \n \n<@!" +  member.id + "> entre dans le <@&" + "826914136280662067" + ">.")
                 .setImage("https://gogiantrobot.files.wordpress.com/2018/07/impel_down_arc.png?w=640")
                 .setTimestamp()
                 .setFooter("Abri, Niveau 5 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                 
                 message.channel.send(exampleEmbed);
                 }
                 }
     
                 if(message.content == prefix + "I2"){
                     if(message.member.roles.cache.has("827258963690913843")){
                         memb.roles.add("826914135652565053")
                         memb.roles.remove("827258963690913843")
                         message.member.send("▪️`" + message.author.username + "` 🗣️ Désolé, mais je suis préssé... \n▪️`Bon Clay` 🗣️ Imbécile ! Le <#" + "826946883846144041" + "> est dans cette direction ! \n▪️`" + message.author.username + "` 🗣️ ...")
                     }
                     }
             
                     if(message.content == prefix + "I2"){
                         if(message.member.roles.cache.has("827258963690913843")){
                         const exampleEmbed = new Discord.MessageEmbed()
                         .setColor("#0f1544")
                         .setTitle("***__🌴 Impel Down, Calm Belt__***")
                         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                         .setAuthor(message.author.username + " s'en va", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                         .setDescription("***__🚪 Escalier, Niveau 5__*** \n \n<@!" +  member.id + "> entre dans le <@&" + "826914135652565053" + "> .")
                         .setImage("https://gogiantrobot.files.wordpress.com/2018/07/impel_down_arc.png?w=640")
                         .setTimestamp()
                         .setFooter("Escalier, Niveau 5 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                         
                         message.channel.send(exampleEmbed);
                         }
                         }
     
         if(message.content == prefix + "I2"){
             if(message.member.roles.cache.has("826914138046857248")){
                 memb.roles.add("826914135652565053")
                 memb.roles.remove("826914138046857248")
                 message.member.send("▪️`" + message.author.username + "` 🗣️ Vous faîtes demi-tour et vous continuez votre descente vers le <#" + "826946883846144041" + ">.")
             }
             }
     
             if(message.content == prefix + "I2"){
                 if(message.member.roles.cache.has("826914138046857248")){
                 const exampleEmbed = new Discord.MessageEmbed()
                 .setColor("#0f1544")
                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                 .setAuthor(message.author.username + " s'en va", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                 .setDescription("***__🚪 Escalier, Niveau 5__*** \n \n<@!" +  member.id + "> s'en va vers le <@&" + "826914135652565053" + "> .")
                 .setImage("https://gogiantrobot.files.wordpress.com/2018/07/impel_down_arc.png?w=640")
                 .setTimestamp()
                 .setFooter("Escalier, Niveau 5 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                 
                 message.channel.send(exampleEmbed);
                 }
                 }
     
                 if(message.content == prefix + "pnj"){
                     if (message.member.roles.cache.has("826914136280662067")){
                     const exampleEmbed = new Discord.MessageEmbed()
                     .setColor("#d598ff")
                     .setTitle("***__🌴 Impel Down, Calm Belt__***")
                     .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_5.5_:_Newkama_Land")
                     .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                     .setDescription("💀 **__Niveau 5.5, Newkama Land__** \n🗨️ `À l'inverse des autres niveaux de la prison, les résidents passent leur temps à s'amuser et ont surnommé l'endroit le Paradis des Okamas.` Bienvenue au Grand Quizz Paradisiaque ! Les inscriptions sont ouvertes ! \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** C'est quoi ? \n╠▪️`=I2` **·** Payer sa tournée au bar \n╚▪️`=I3` **·** S'inscrire au Grand Quizz Paradisiaque")
                     .setImage("https://static.wikia.nocookie.net/onepiece/images/3/31/Impel_Down_Niveau_5.5.png/revision/latest?cb=20180203122134&path-prefix=fr")
                     .setTimestamp()
                     .setFooter("Newkama Land | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                             
                     message.channel.send(exampleEmbed);
                     }
                     } else {
                             
                     }
     
                     if(message.content == prefix + "pnj"){
                         if (message.member.roles.cache.has("827965282449883156")){
                         const exampleEmbed = new Discord.MessageEmbed()
                         .setColor("#d598ff")
                         .setTitle("***__🌴 Impel Down, Calm Belt__***")
                         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_5.5_:_Newkama_Land")
                         .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                         .setDescription("💀 **__Niveau 5.5, Newkama Land__** \n🗨️ `À l'inverse des autres niveaux de la prison, les résidents passent leur temps à s'amuser et ont surnommé l'endroit le Paradis des Okamas.` Bienvenue au Grand Quizz Paradisiaque ! Les inscriptions sont ouvertes ! \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** C'est quoi ? \n╠▪️`=I2` **·** Payer sa tournée au bar \n╚▪️`=I3` **·** S'inscrire au Grand Quizz Paradisiaque")
                         .setImage("https://static.wikia.nocookie.net/onepiece/images/3/31/Impel_Down_Niveau_5.5.png/revision/latest?cb=20180203122134&path-prefix=fr")
                         .setTimestamp()
                         .setFooter("Newkama Land | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                 
                         message.channel.send(exampleEmbed);
                         }
                         } else {
                                 
                         }
     
                         if(message.content == prefix + "pnj"){
                             if (message.member.roles.cache.has("827965283708043354")){
                             const exampleEmbed = new Discord.MessageEmbed()
                             .setColor("#d598ff")
                             .setTitle("***__🌴 Impel Down, Calm Belt__***")
                             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_5.5_:_Newkama_Land")
                             .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                             .setDescription("💀 **__Niveau 5.5, Newkama Land__** \n🗨️ `À l'inverse des autres niveaux de la prison, les résidents passent leur temps à s'amuser et ont surnommé l'endroit le Paradis des Okamas.` Bienvenue au Grand Quizz Paradisiaque ! Les inscriptions sont ouvertes ! \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** C'est quoi ? \n╠▪️`=I2` **·** Payer sa tournée au bar \n╚▪️`=I3` **·** S'inscrire au Grand Quizz Paradisiaque")
                             .setImage("https://static.wikia.nocookie.net/onepiece/images/3/31/Impel_Down_Niveau_5.5.png/revision/latest?cb=20180203122134&path-prefix=fr")
                             .setTimestamp()
                             .setFooter("Newkama Land | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                     
                             message.channel.send(exampleEmbed);
                             }
                             } else {
                                     
                             }
     
                             if(message.content == prefix + "pnj"){
                                 if (message.member.roles.cache.has("827965284798955540")){
                                 const exampleEmbed = new Discord.MessageEmbed()
                                 .setColor("#d598ff")
                                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_5.5_:_Newkama_Land")
                                 .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                 .setDescription("💀 **__Niveau 5.5, Newkama Land__** \n🗨️ `À l'inverse des autres niveaux de la prison, les résidents passent leur temps à s'amuser et ont surnommé l'endroit le Paradis des Okamas.` Bienvenue au Grand Quizz Paradisiaque ! Les inscriptions sont ouvertes ! \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** C'est quoi ? \n╠▪️`=I2` **·** Payer sa tournée au bar \n╚▪️`=I3` **·** S'inscrire au Grand Quizz Paradisiaque")
                                 .setImage("https://static.wikia.nocookie.net/onepiece/images/3/31/Impel_Down_Niveau_5.5.png/revision/latest?cb=20180203122134&path-prefix=fr")
                                 .setTimestamp()
                                 .setFooter("Newkama Land | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                         
                                 message.channel.send(exampleEmbed);
                                 }
                                 } else {
                                         
                                 }
     
     
     if(message.content == prefix + "I1"){
     if(message.member.roles.cache.has("826914136280662067")){
     message.reply("\n▪️`Newkama Lander` 🗣️ Le Grand Quizz Paradisiaque est organisé chaque semestre par notre Okama vénéré(e), Bon Clay-sama ! Cette fois-ci, le thème porte sur le niveau où nous nous trouvons actuellement, le Paradis des Prisonniers !")
     }
     }
     
     if(message.content == prefix + "I2"){
     if(message.member.roles.cache.has("826914136280662067")){
     message.reply("\n▪️`" + message.author.username + "` 🗣️ Une bière s'il vous plaît. Eh ! Vous autres, je paye ma tournée ! \n▪️`Newkama Landers` 🗣️ Oh ! Super ! \n▪️`" + message.author.username + "` 🗣️ D'ailleurs, à propos de ce Grand Quizz Paradisiaque, vous connaissez les règles ? \n▪️`Newkama Lander` 🗣️ Bien sur, les règles sont simples ! Répondre aux questions posées en donnant la bonne réponse avant les autres !")
     }
     }
     
     if(message.content == prefix + "I3"){
     if(message.member.roles.cache.has("826914136280662067")){
     memb.roles.add("827965282449883156")
     memb.roles.remove("826914136280662067")
     message.reply("\n▪️`Présentateur` 🗣️ Oh et voici notre dernier participant, <@" + message.author + "> !")
     message.member.send("▪️`Présentateur` 🗣️ OK ! Nous allons pouvoir commencer ! La première question est : *__Quel est le créateur de ce noble endroit qu'est le niveau 5.5, que dis-je, le Paradis des Prisonniers, Newkama Land !!!__*")
     }
     }
     
     if(message.content == prefix + "morley"){
     if(message.member.roles.cache.has("827965282449883156")){
     message.delete()
     memb.roles.add("827965283708043354")
     memb.roles.remove("827965282449883156")
     message.reply("\n▪️`Présentateur` 🗣️ Oh ! Et c'est une bonne réponse de la part de <@" + message.author + "> !")
     message.member.send("▪️`Présentateur` 🗣️ Voici la nouvelle question : *__Qui est la prédécesseuse de Bon Clay-sama ?__*")
     }
     }
     
     if(message.content == prefix + "ivankov"){
     if(message.member.roles.cache.has("827965283708043354")){
     message.delete()
     memb.roles.add("827965284798955540")
     memb.roles.remove("827965283708043354")
     message.reply("\n▪️`Présentateur` 🗣️ Nouvelle bonne réponse de <@" + message.author + "> ! Son compteur affiche désormais 2 points !")
     message.member.send("▪️`Présentateur` 🗣️ Et voici la dernière question : *__Entre quels niveaux se situe ce niveau ?__* ```PS : Pour répondre indiquez les deux niveaux séparés d'un - Exemple : =7-8```")
     }
     }
     
     if(message.content == prefix + "5-6"){
     if(message.member.roles.cache.has("827965284798955540")){
     message.delete()
     memb.roles.add("827975438411235328")
     memb.roles.remove("827965284798955540")
     message.reply("\n▪️`Présentateur` 🗣️ Voici notre nouveau champion ! Il se nomme, <@" + message.author + "> !")
     }
     }
     
     if(message.content == prefix + "pnj"){
     if (message.member.roles.cache.has("827975438411235328")){
     const exampleEmbed = new Discord.MessageEmbed()
     .setColor("#e87777")
     .setTitle("***__🌴 Impel Down, Calm Belt__***")
     .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_5.5_:_Newkama_Land")
     .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
     .setDescription("💀 **__Grand Quizz Paradisiaque, Champion__** \n🗨️ `Nous avons un nouveau champion !` Maintenant, comme la tradition l'indique, nous voulons... un... DISCOURS !!! \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Faire un discours \n╠▪️`=I2` **·** [...] \n╚▪️`=I3` **·** [...]")
     .setImage("https://static.wikia.nocookie.net/onepiece/images/3/31/Impel_Down_Niveau_5.5.png/revision/latest?cb=20180203122134&path-prefix=fr")
     .setTimestamp()
     .setFooter("Champion | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                 
     message.channel.send(exampleEmbed);
     }
     } else {
                 
     }
     
     if(message.content == prefix + "I1"){
     if(message.member.roles.cache.has("827975438411235328")){
     memb.roles.add("828017565053354024")
     memb.roles.remove("827975438411235328")
     const exampleEmbed = new Discord.MessageEmbed()
         .setColor("#e87777")
         .setThumbnail("https://static.wikia.nocookie.net/onepiece/images/3/31/Impel_Down_Niveau_5.5.png/revision/latest/scale-to-width-down/250?cb=20180203122134&path-prefix=fr")
         .addField("*__Discours du Champion__*", "`     Alors comme ça,... je suis le Champion ?! Ha ! Ha ! C'est assez embarassant... \nChers Okamas, si je suis venu dans cette prison, c'est pour un objectif précis, libérer l'ex-Shichibukai, Don Quichotte Doflamingo qui séjourne malheureusement au niveau 6 ! J'ai bravé tous les niveaux jusqu'à celui-ci dans cet unique objectif. Après avoir observé votre bravoure, votre générosité et votre sympathie, j'aimerais vous faire sortir d'ici ! Je peux vous promettre la liberté, la richesse et la gloire, en haut, loin de cette prison. \n     Si vous êtes de la partie, préparez-vous, car nous allons causer une réelle émeute et tous nous enfuir ! Sur ce, je m'en vais au` <#" + client.channels.cache.get("826946883846144041") + "> `! Ahem... Quelqu'un connaît le chemin ?...` \n▪️`Bon Clay` 🗣️ Moi mon chou ! Suis-moi. À tout à l'heure mes chouuus ❤️")
         .setTimestamp()
         .setFooter("Discours du Champion | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
     
         message.member.send(exampleEmbed);
     message.member.send("▪️`Bon Clay` 🗣️ Suis-moi mon chouuu ❤️")
     }
     }
     
     if(message.content == prefix + "I1"){
     if(message.member.roles.cache.has("827975438411235328")){
     const exampleEmbed = new Discord.MessageEmbed()
     .setColor("#0f1544")
     .setTitle("***__🌴 Impel Down, Calm Belt__***")
     .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
     .setAuthor(message.author.username + " et Bon Clay s'en vont", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
     .setDescription("***__🚪 Escalier, Niveau 5__*** \n \n<@!" +  member.id + "> et Bon Clay s'en vont vers le <@&" + "828017565053354024" + "> .")
     .setImage("https://gogiantrobot.files.wordpress.com/2018/07/impel_down_arc.png?w=640")
     .setTimestamp()
     .setFooter("Escalier, Niveau 5 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
         
     message.channel.send(exampleEmbed);
     }
     }
     
     if(message.content == prefix + "pnj"){
         if (message.member.roles.cache.has("826914135652565053")){
         const exampleEmbed = new Discord.MessageEmbed()
         .setColor("#0f1544")
         .setTitle("***__🌴 Impel Down, Calm Belt__***")
         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
         .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
         .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
         .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
         .setTimestamp()
         .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                 
         message.channel.send(exampleEmbed);
         }
         } else {
                 
         }
     
         if(message.content == prefix + "pnj"){
             if (message.member.roles.cache.has("828022288351363142")){
             const exampleEmbed = new Discord.MessageEmbed()
             .setColor("#0f1544")
             .setTitle("***__🌴 Impel Down, Calm Belt__***")
             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
             .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
             .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
             .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
             .setTimestamp()
             .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                     
             message.channel.send(exampleEmbed);
             }
             } else {
                     
             }
     
             if(message.content == prefix + "pnj"){
                 if (message.member.roles.cache.has("828022290267504680")){
                 const exampleEmbed = new Discord.MessageEmbed()
                 .setColor("#0f1544")
                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                 .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                 .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
                 .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
                 .setTimestamp()
                 .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                         
                 message.channel.send(exampleEmbed);
                 }
                 } else {
                         
                 }
     
                 if(message.content == prefix + "pnj"){
                     if (message.member.roles.cache.has("828022292495204363")){
                     const exampleEmbed = new Discord.MessageEmbed()
                     .setColor("#0f1544")
                     .setTitle("***__🌴 Impel Down, Calm Belt__***")
                     .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                     .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                     .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
                     .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
                     .setTimestamp()
                     .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                             
                     message.channel.send(exampleEmbed);
                     }
                     } else {
                             
                     }
     
                     if(message.content == prefix + "pnj"){
                         if (message.member.roles.cache.has("828022294504931348")){
                         const exampleEmbed = new Discord.MessageEmbed()
                         .setColor("#0f1544")
                         .setTitle("***__🌴 Impel Down, Calm Belt__***")
                         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                         .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                         .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
                         .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
                         .setTimestamp()
                         .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/830751800981848124/830808434983043072/PP_event_mush.jpg");
                                 
                         message.channel.send(exampleEmbed);
                         }
                         } else {
                                 
                         }
     
                         if(message.content == prefix + "pnj"){
                             if (message.member.roles.cache.has("828022299830648832")){
                             const exampleEmbed = new Discord.MessageEmbed()
                             .setColor("#0f1544")
                             .setTitle("***__🌴 Impel Down, Calm Belt__***")
                             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                             .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                             .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
                             .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
                             .setTimestamp()
                             .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                     
                             message.channel.send(exampleEmbed);
                             }
                             } else {
                                     
                             }
     
                             if(message.content == prefix + "pnj"){
                                 if (message.member.roles.cache.has("828030296418025502")){
                                 const exampleEmbed = new Discord.MessageEmbed()
                                 .setColor("#0f1544")
                                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                                 .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                 .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
                                 .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
                                 .setTimestamp()
                                 .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                         
                                 message.channel.send(exampleEmbed);
                                 }
                                 } else {
                                         
                                 }
     
     if(message.content == prefix + "I1"){
     if(message.member.roles.cache.has("826914135652565053")){
     message.reply("\n▪️`" + message.author.username + "` 🗣️ Appeler Doflamingo agiterait les autres prisonniers et reviendrait à vous faire repérer. Essayez autre chose...")
     }
     }
     
     if(message.content == prefix + "I2"){
     if(message.member.roles.cache.has("826914135652565053")){
     memb.roles.add("828022288351363142")
     memb.roles.remove("826914135652565053")
     message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous avancez vers la première cellule que vous voyez et vous commencez à déchiffrer les émojis...")
     message.member.send("▪️`Cellule n°1` 🐊⏳☀️")
     }
     }
     
     if(message.content == prefix + "crocodile"){
         if(message.member.roles.cache.has("828022288351363142")){
         message.delete()
         memb.roles.add("828022290267504680")
         memb.roles.remove("828022288351363142")
         message.reply("\n▪️`" + message.author.username + "` 🗣️ Ce n'est pas la bonne cellule, poursuivez votre recherche.")
         message.member.send("▪️`Cellule n°2` 👤🐋🌊")
         }
         }
     
         if(message.content == prefix + "jinbe"){
             if(message.member.roles.cache.has("828022290267504680")){
             message.delete()
             memb.roles.add("828022292495204363")
             memb.roles.remove("828022290267504680")
             message.reply("\n▪️`" + message.author.username + "` 🗣️ Ce n'est toujours pas la bonne cellule, explorez d'avantage le niveau 6.")
             message.member.send("▪️`Cellule n°3` 👩🦊🌕")
             }
             }
     
             if(message.content == prefix + "devon"){
                 if(message.member.roles.cache.has("828022292495204363")){
                 message.delete()
                 memb.roles.add("828022294504931348")
                 memb.roles.remove("828022292495204363")
                 message.reply("\n▪️`" + message.author.username + "` 🗣️ Toujours pas ! Continuez.")
                 message.member.send("▪️`Cellule n°4` 🧪🚽")
                 }
                 }
     
                 if(message.content == prefix + "magellan"){
                     if(message.member.roles.cache.has("828022294504931348")){
                     message.delete()
                     memb.roles.add("828022299830648832")
                     memb.roles.remove("828022294504931348")
                     message.reply("\n▪️`" + message.author.username + "` 🗣️ La cellule ne semble plus très loin, encore un dernier effort !")
                     message.member.send("▪️`Cellule n°5` 🦩")
                     }
                     }
     
                     if(message.content == prefix + "doflamingo"){
                         if(message.member.roles.cache.has("828022299830648832")){
                         message.delete()
                         memb.roles.add("828030296418025502")
                         memb.roles.remove("828022299830648832")
                         message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous parvenez enfin à délivrer Doflamingo, essayez maintenant de vous enfuir !")
                         }
                         }
     
                         if(message.content.startsWith(prefix + "fuir")){
                         if(message.member.roles.cache.has("828030296418025502")){
                             memb.roles.add("826914137715113995")
                             memb.roles.remove("828030296418025502")
                             setTimeout(function(){memb.roles.remove("826914137715113995") + memb.roles.add("826914138046857248") + message.member.send("`Tu parviens finalement à t'échapper !` \n \n`Te voilà désormais au` <#" + "826947050691362847" + "> `!`")},300000);
                         
                             message.member.send("▪️`" + message.author.username + "` 🗣️ Sans attendre Bon Clay, vous décidez de fuir précipitamment mais vous vous faites malheureusement capturer.")
                             const exampleEmbed = new Discord.MessageEmbed()
                             .setColor("#020000")
                             .setTitle("***__🌴 Impel Down, Calm Belt__***")
                             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Prisonniers")
                             .setAuthor("Tu es fait Prisonnier !", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                             .setDescription("***__⛓️ Prison, Niveau 5__*** \n \n`Te voilà fait` <@&" + "826914137715113995" + "> `!` \n \n`Tu sera libéré dans 5 minutes !`")
                             .setImage("https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/07/Ace-Impel-Down.jpg")
                             .setTimestamp()
                             .setFooter("Prison, Niveau 5 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                         
                             prison.send(exampleEmbed);
                         }else {
                         
                         }
                         }
     
                         if(message.content == prefix + "fuir"){
                             if(message.member.roles.cache.has("828030296418025502")){
                                 const exampleEmbed = new Discord.MessageEmbed()
                                 .setColor("#020000")
                                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Prisonniers")
                                 .setAuthor(message.author.username + " et Doflamingo se font emprisonner", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                 .setDescription("***__⛓️ Emprisonnement, Niveau 6__*** \n \n<@!" +  member.id + "> et Doflamingo deviennent <@&" + "826914137715113995" + "> .")
                                 .setImage("https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/07/Ace-Impel-Down.jpg")
                                 .setTimestamp()
                                 .setFooter("Emprisonnement, Niveau 6 | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                             
                                 message.channel.send(exampleEmbed);
                             }
                             }
     
     if(message.content == prefix + "pnj"){
         if (message.member.roles.cache.has("828017565053354024")){
         const exampleEmbed = new Discord.MessageEmbed()
         .setColor("#0f1544")
         .setTitle("***__🌴 Impel Down, Calm Belt__***")
         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
         .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
         .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
         .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
         .setTimestamp()
         .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                 
         message.channel.send(exampleEmbed);
         }
         } else {
                 
         }
     
         if(message.content == prefix + "pnj"){
             if (message.member.roles.cache.has("828022302213013574")){
             const exampleEmbed = new Discord.MessageEmbed()
             .setColor("#0f1544")
             .setTitle("***__🌴 Impel Down, Calm Belt__***")
             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
             .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
             .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
             .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
             .setTimestamp()
             .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                     
             message.channel.send(exampleEmbed);
             }
             } else {
                     
             }
     
             if(message.content == prefix + "pnj"){
                 if (message.member.roles.cache.has("828022304452771880")){
                 const exampleEmbed = new Discord.MessageEmbed()
                 .setColor("#0f1544")
                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                 .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                 .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
                 .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
                 .setTimestamp()
                 .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                         
                 message.channel.send(exampleEmbed);
                 }
                 } else {
                         
                 }
     
                 if(message.content == prefix + "pnj"){
                     if (message.member.roles.cache.has("828022306508636160")){
                     const exampleEmbed = new Discord.MessageEmbed()
                     .setColor("#0f1544")
                     .setTitle("***__🌴 Impel Down, Calm Belt__***")
                     .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                     .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                     .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
                     .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
                     .setTimestamp()
                     .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                             
                     message.channel.send(exampleEmbed);
                     }
                     } else {
                             
                     }
     
                     if(message.content == prefix + "pnj"){
                         if (message.member.roles.cache.has("828022308689674311")){
                         const exampleEmbed = new Discord.MessageEmbed()
                         .setColor("#0f1544")
                         .setTitle("***__🌴 Impel Down, Calm Belt__***")
                         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                         .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                         .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
                         .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
                         .setTimestamp()
                         .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                 
                         message.channel.send(exampleEmbed);
                         }
                         } else {
                                 
                         }
     
                         if(message.content == prefix + "pnj"){
                             if (message.member.roles.cache.has("828022310522322986")){
                             const exampleEmbed = new Discord.MessageEmbed()
                             .setColor("#0f1544")
                             .setTitle("***__🌴 Impel Down, Calm Belt__***")
                             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                             .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                             .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
                             .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
                             .setTimestamp()
                             .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                     
                             message.channel.send(exampleEmbed);
                             }
                             } else {
                                     
                             }
     
                             if(message.content == prefix + "pnj"){
                                 if (message.member.roles.cache.has("828030297869385749")){
                                 const exampleEmbed = new Discord.MessageEmbed()
                                 .setColor("#0f1544")
                                 .setTitle("***__🌴 Impel Down, Calm Belt__***")
                                 .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down#Niveau_6_:_L.27Enfer_.C3.89ternel_.2F_Infini")
                                 .setAuthor("Intéraction avec un Personnage Non Joueur", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                                 .setDescription("💀 **__Niveau 6, L'Enfer des Émojis__** \n🗨️ `Les prisonniers de ce niveau ont été condamnés à la peine capitale ou à une peine d'emprisonnement à perpétuité, et ont été rayés de l'histoire.` Dans le but de déboussoller les assassins et de protéger Doflamingo, les barreaux cellules ont été remplacés par des murs où des émojis remplacent les noms des prisonniers. \n \n⌨️ *Interaction avec le niveau* \n╔▪️`=I1` **·** Appeler Doflamingo \n╠▪️`=I2` **·** Déchifrer les émojis \n╚▪️`=I3` **·** [...]")
                                 .setImage("https://static.wikia.nocookie.net/onepiece/images/d/db/Impel_Down_Niveau_6.png/revision/latest/scale-to-width-down/250?cb=20180203122301&path-prefix=fr")
                                 .setTimestamp()
                                 .setFooter("L'Enfer des Émojis | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg");
                                         
                                 message.channel.send(exampleEmbed);
                                 }
                                 } else {
                                         
                                 }
     
     if(message.content == prefix + "I1"){
     if(message.member.roles.cache.has("828017565053354024")){
     message.reply("\n▪️`" + message.author.username + "` 🗣️ Appeler Doflamingo agiterait les autres prisonniers et reviendrait à vous faire repérer. Essayez autre chose...")
     }
     }
     
     if(message.content == prefix + "I2"){
         if(message.member.roles.cache.has("828017565053354024")){
         memb.roles.add("828022302213013574")
         memb.roles.remove("828017565053354024")
         message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous avancez vers la première cellule que vous voyez et vous commencez à déchiffrer les émojis...")
         message.member.send("▪️`Cellule n°1` 🐊⏳☀️")
         }
         }
     
     if(message.content == prefix + "crocodile"){
     if(message.member.roles.cache.has("828022302213013574")){
     message.delete()
     memb.roles.add("828022304452771880")
     memb.roles.remove("828022302213013574")
     message.reply("\n▪️`" + message.author.username + "` 🗣️ Ce n'est pas la bonne cellule, poursuivez votre recherche.")
     message.member.send("▪️`Cellule n°2` 👤🐋🌊")
     }
     }
     
     if(message.content == prefix + "jinbe"){
         if(message.member.roles.cache.has("828022304452771880")){
         message.delete()
         memb.roles.add("828022306508636160")
         memb.roles.remove("828022304452771880")
         message.reply("\n▪️`" + message.author.username + "` 🗣️ Ce n'est toujours pas la bonne cellule, explorez d'avantage le niveau 6.")
         message.member.send("▪️`Cellule n°3` 👩🦊🌕")
         }
         }
     
         if(message.content == prefix + "devon"){
             if(message.member.roles.cache.has("828022306508636160")){
             message.delete()
             memb.roles.add("828022308689674311")
             memb.roles.remove("828022306508636160")
             message.reply("\n▪️`" + message.author.username + "` 🗣️ Toujours pas ! Continuez.")
             message.member.send("▪️`Cellule n°4` 🧪🚽")
             }
             }
     
             if(message.content == prefix + "magellan"){
                 if(message.member.roles.cache.has("828022308689674311")){
                 message.delete()
                 memb.roles.add("828022310522322986")
                 memb.roles.remove("828022308689674311")
                 message.reply("\n▪️`" + message.author.username + "` 🗣️ La cellule ne semble plus très loin, encore un dernier effort !")
                 message.member.send("▪️`Cellule n°5` 🦩")
                 }
                 }
     
                 if(message.content == prefix + "doflamingo"){
                     if(message.member.roles.cache.has("828022310522322986")){
                     message.delete()
                     memb.roles.add("828030297869385749")
                     memb.roles.remove("828022310522322986")
                     message.reply("\n▪️`" + message.author.username + "` 🗣️ Vous parvenez enfin à délivrer Doflamingo, essayez maintenant de vous enfuir !")
                     }
                     }
     
                     const évadés = client.channels.cache.get("830751800981848124");
                     if(message.content.startsWith(prefix + "fuir")){
                     if(message.member.roles.cache.has("828030297869385749")){
                         message.delete()
                         memb.roles.add("828045645070860288")
                         memb.roles.remove("828030297869385749")
                     
                         message.member.send("▪️`" + message.author.username + "` 🗣️ Vous remontez au niveau 5.5 et grâce aux passages secrets et à la préparation des Newkama Landers, vous parvenez à fuir en un temps record. Vous avez accompli votre mission ! \n Bravo !")
                         const exampleEmbed = new Discord.MessageEmbed()
                         .setColor("#acff15")
                         .setTitle("***__⛵ Bateau, Grand Line__***")
                         .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down")
                         .setAuthor("Tu es parvenu à t'échapper !", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                         .setDescription("***__⛓️ Bateau, Grand Line__*** \n \n`Tu est parvenu à t'` <@&" + "828045645070860288" + "> `avec Doflamingo et Bon Clay !` \n \n`Tu as terminé cet évent, merci de ta participation !`")
                         .setImage("https://i.ytimg.com/vi/t40cEIxFXdY/maxresdefault.jpg")
                         .setTimestamp()
                         .setFooter("Bateau, Grand Line | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                     
                         évadés.send(exampleEmbed);
                     }else {
                     
                     }
                     }
     
                     if(message.content.startsWith(prefix + "fuir")){
                         if(message.member.roles.cache.has("828030297869385749")){
                             const exampleEmbed = new Discord.MessageEmbed()
                             .setColor("#acff15")
                             .setTitle("***__⛵ Bateau, Grand Line__***")
                             .setURL("https://onepiece.fandom.com/fr/wiki/Impel_Down")
                             .setAuthor(message.author.username + ", Doflamingo, Bon Clay et les Newkama Landers s'échappent", "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                             .setDescription("***__⛓️ Bateau, Grand Line__*** \n \n<@!" +  member.id + ">, Doflamingo et Bon Clay deviennent des <@&" + "828045645070860288" + "> .")
                             .setImage("https://i.ytimg.com/vi/t40cEIxFXdY/maxresdefault.jpg")
                             .setTimestamp()
                             .setFooter("Bateau, Grand Line | " + message.author.username, "https://cdn.discordapp.com/attachments/826947375264170041/830818300061286491/PP_event_mush.jpg")
                         
                             message.channel.send(exampleEmbed);
                         }
                         }
    }
});

client.login("process.env.TOKEN");