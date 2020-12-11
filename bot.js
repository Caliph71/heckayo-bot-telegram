console.log('bot.js aktif!')

const TeleBot = require('telebot')
const delay = require('delay')


const bot = new TeleBot({
    token: process.env.TOKEN,
    polling: { 
        interval: 1000,
        timeout: 20000, 
        limit: 100,
        retryTimeout: 5000
    },
})


bot.on(['/start', '/halo'], async (msg) => {
    msg.reply.photo('https://avatars0.githubusercontent.com/u/71875420?s=400&u=5c417305130d96788de7e5add2627c32c236cfd9&v=4')
    await delay (100)
    bot.sendMessage(msg.from.id, `Halo Selamat Datang, ${msg.from.username}! ^_^`);
    await delay (500)
    return bot.sendMessage (
    msg.from.id, 'Halo ini adalah BOT Heckayo Versi Telegram😄!\n\n____________\n\nGunakan perintah /menu untuk melihat semua fitur yang ada di Bot Heckayo, terima kasih ^_^\n\n____________')
})

bot.on(['/menu'], async (msg) => {
    return bot.sendMessage
(msg.from.id, `_______________\n\n🤖LIST FITUR BOT HECKAYO🤖!\n\n
=====[DAFTAR MENU]=====\n> /nulis [baris1;baris2;baris3]\n> /anime [nama anime]\n> /ytmp4 [link yt]\n> /ytmp3 [link yt]\n> /cekresi [kurir] [resi]\n> /brainly [pertanyaan]\n> /lirik [nama artis - judul lagu]\n========================\n\n
=====[CATATAN]=====\n>Tolong bot nya jangan di spam😣\n>Cintai bot nya seperti kamu mencintai dia🤗\n>Bot masih dalam tahap pengembangan🔧\n>Terima kasih sudah menggunakan Bot Heckayo😍\n===================\n\n
-Beritahu pembuat bot jika saya mati atau jika kamu menemukan bug:\nhttps://t.me/MrHecka\n\n
-Support bot ini dengan cara donasi ke:\nhttps://saweria.co/heckayo\n\n
-BOT Dibuat Oleh :\n@MrHecka\n\n_______________`)
})

// require disini!

require('./nulis.js')(bot)
require('./anime.js')(bot)
require('./ytmp4.js')(bot)
require('./ytmp3.js')(bot)
require('./online.js')
require('./cekresi.js')(bot)
require('./brainly.js')(bot)
require('./lirik.js')(bot)

// require disini!



bot.start()








