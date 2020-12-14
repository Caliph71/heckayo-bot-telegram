console.log('terjemahan.js AKTIF!')

const TeleBot = require('telebot')
var translate = require('translation-google');
const delay = require('delay')
const bot = new TeleBot({
    token: process.env.TOKEN
})
module.exports = bot => {
bot.on(/^\/cekresi (.+)$/, async (msg, args) => {
    let arg = args.match[1]
    translate(`${arg}`, {from: 'id', to: 'en'}).then(res => {
        return bot.sendMessage(msg.from.id, `===[DARI BAHASA KE INGGRIS]===\n\n${res.text}`);
    }).catch(err => {
        return bot.sendMessage(msg.from.id, `ERROR | ${err}`);
        })
    })
}




