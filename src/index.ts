import dotenv from 'dotenv';
import { Client, Intents } from 'discord.js';
dotenv.config();
const client: Client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES], allowedMentions: { repliedUser: false } });
client.on('ready', () => {
    console.info(`${client.user?.tag}にログイン完了`);
});

client.on('messageCreate', async message => {
    if (message.author.bot || message.system) return;
    if (message.content.startsWith('じゃんけん')) {
        // 負け 99.8%
        if (Math.random() < 99.8) {
            const lose = ['俺の勝ち！\n負けは次につながるチャンスです！\nネバーギブアップ！\nほな、いただきます！', '俺の勝ち！\nたかがじゃんけん、そう思ってないですか？\nそれやったら明日も、俺が勝ちますよ\nほな、いただきます！\n', '俺の勝ち！\nなんで負けたか、明日まで考えといてください。\nそしたら何かが見えてくるはずです\nほな、いただきます！'];
            const random = Math.floor(Math.random() * lose.length);
            await message.reply('https://media.discordapp.net/attachments/906452841890205756/906454342851264542/20190411175128.png');
            await message.reply(lose[random]);
        }
        // どうやら勝率は0.2%らしい
        else {
            await message.reply('https://media.discordapp.net/attachments/906452841890205756/906452875058749440/r1280x720l.jpeg');
            await message.reply('やるやん。\n明日は俺にリベンジさせて。\nでは、どうぞ。');
        }
    }
});

client.login();