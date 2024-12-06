const TelegramBot = require('node-telegram-bot-api');

// Токен, который вы получили от BotFather
const token = '7633678165:AAG1LuiOlXYTRp0BgibVtwFvSM1cL6TGliA';

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Пример обработки команды "/start"
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Добро пожаловать в бдсм клуб!');
});
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');

// Токен вашего бота от BotFather
const token = '7633678165:AAG1LuiOlXYTRp0BgibVtwFvSM1cL6TGliA';

// URL вашего домена на Render
const domain = 'https://adyear1.onrender.com';

// Создаем экземпляр бота без polling, так как будем использовать webhook
const bot = new TelegramBot(token, { webHook: true });

// Настраиваем URL для webhook
bot.setWebHook(`${https://adyear1.onrender.com}/webhook/${token}`);

// Создаем сервер с помощью Express
const app = exp