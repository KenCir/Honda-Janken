require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.login();

function lot() {
    const data = {
        '1等': 10,  // 10%
        '2等': 20,  // 20%
        '3等': 30, // 30%
        // はずれ 40%
    }
    const rand = Math.floor(Math.random() * 100)
    let result = 'はずれ'
    let rate = 0
    for (const prop in data) {
        rate += data[prop]
        if (rand <= rate) {
            result = prop
            break
        }
    }
    return result
    // 1等や2等などを設定した確率で表示
}