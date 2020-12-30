const { Telegraf } = require('telegraf')
const dotenv = require('dotenv')
const parser = require('./parser')

dotenv.config()




const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start(async (ctx) => {
   await ctx.reply('Спасибо что подписался на рассылку с анекдотами... больной ублюдок.... Держи первый анекдот... Следующий получишь через час!')

   const firstJoke = await parser()
   await ctx.reply(firstJoke.body)
   
   const starting = setInterval(async ()=>{
      const joke = await parser()   
      await ctx.reply(joke.body)
   }, 60*60*1000)
   chatID = ctx.from.id
})
bot.help((ctx) => ctx.reply('Только одна команда - /start, что тут сложного?'))
bot.on('sticker', (ctx) => ctx.reply('крутой стикер, спасибо...'))
bot.command('stop', (ctx) => {
   clearInterval(this.starting)
   ctx.reply('Хватит с тебя анекдотов...')
})
bot.on('message', (ctx) => ctx.reply('Это все круто... но ты подписался на рассылку?'))
bot.launch()




console.log('Bot Started')
