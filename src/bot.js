import { Telegram } from 'puregram';
import { HearManager } from '@puregram/hear';
import dotenv from "dotenv-safe";

dotenv.config();
export const bot = Telegram.fromToken(process.env.TOKEN);

export const cmd = new HearManager();

export async function start() {
    bot.updates.startPolling().then(() => console.log(`Started polling @${bot.bot.username}`)).catch(console.error);
}