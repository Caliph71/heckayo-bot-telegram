console.log('brainly1.js aktif!');

const TeleBot = require('telebot');
const delay = require('delay');
const brainly = require('brainly-scraper');


const bot = new TeleBot({
    token: process.env.TOKEN
});


module.exports = bot => {
    bot.on(/^\/brainly2 ([\s\S]+)/, async (msg, args) => {
        let arg = args.match[1];
        bot.sendMessage(msg.from.id, 'Sedang mencari jawaban...');
        brainly(arg.toString(),Number(5)).then((res) => {


return bot.sendMessage
(msg.from.id, `
===[Brainly]===\n\n
1.) Pertanyaan : \n${res.data[0].pertanyaan}\n
Jawaban : \n${res.data[0].jawaban[0].text}\n\n

2.) Pertanyaan : \n${res.data[1].pertanyaan}\n
Jawaban : \n${res.data[1].jawaban[0].text}\n\n

3.) Pertanyaan : \n${res.data[2].pertanyaan}\n
Jawaban : \n${res.data[2].jawaban[0].text}\n\n

4.) Pertanyaan : \n${res.data[3].pertanyaan}\n
Jawaban : \n${res.data[3].jawaban[0].text}\n\n

5.) Pertanyaan : \n${res.data[4].pertanyaan}\n
Jawaban : \n${res.data[4].jawaban[0].text}\n\n

=====================

`);

          }).catch((err)=> {
              bot.sendMessage(msg.from.id, `ERROR | ${err}`);
          });
          
    
    
    });

};




