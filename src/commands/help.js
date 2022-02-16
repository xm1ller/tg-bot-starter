import { cmd } from "../bot.js";

export function help()
{
    cmd.hear(/^(?:help|start)$/i, (context) =>
    {
        return context.send(`Hello, ${context.from.firstName}! 👋🌎🌍🌏`);
    });
}