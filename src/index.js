import { bot, start } from "./bot.js";
import { help } from "./commands/help.js";
import { kukish } from "./commands/kukish.js";
import { setup_hear_middleware } from "./middlewares/hear.js"
import { setup_message_logger } from "./middlewares/logger.js";

// middlewares
setup_message_logger(bot);
setup_hear_middleware(bot);

// commands
start();
help();
kukish();