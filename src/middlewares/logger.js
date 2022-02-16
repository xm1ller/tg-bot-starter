export function setup_message_logger(bot)
{
    bot.updates.on("message", (context, next) => {
        console.log(`[${new Date().toLocaleString('ru')}, ${context.from.username}] ${context.text}`)
        return next();
    })
}