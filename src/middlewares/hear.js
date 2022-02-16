import { cmd } from "../bot.js";

export function setup_hear_middleware(bot) {
    bot.updates.on("message", cmd.middleware);
}