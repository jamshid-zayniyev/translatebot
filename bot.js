const { translate } = require('@vitalets/google-translate-api');
const {Telegraf} = require('telegraf')

const bot = new Telegraf('6844673580:AAFcDX06z7NhORl6uMSnZ_dKZM8v8w1wNSw')

bot.start(ctx=>ctx.reply('Tarjima botimizga xush kelibsiz !!! 🔍 😊'))

bot.on('text', async (ctx)=>{

    try {
        
        const textMessage = ctx.message.text;   

        const {text} = await translate(textMessage, {from:"uz", to:'en'})

        await ctx.reply(text)

    } catch (error) {
        await ctx.reply(JSON.stringify(error))
    }

})

bot.launch()