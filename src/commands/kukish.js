import { cmd } from "../bot.js";
import { random } from "underscore";

const PHRASES = [
    "глазной кукиш на тебе шиш",
    "выкукиш это вам не кукиш с маслом",
    "воспитанный держит свой кукиш в кармане",
    "вместо калача да кукиш",
    "книга, а в ней кукиш да фига"
]

export function kukish() {
    cmd.hear("кукиш", (context) => context.reply(PHRASES[random(PHRASES.length - 1)]))
}