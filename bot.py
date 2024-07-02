import telebot
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo, BotCommand

API_TOKEN = '7221253176:AAFKd3cD0p8Y8DymdLp6eJPTgiGqoCe21DQ'

bot = telebot.TeleBot(API_TOKEN)

# Установите команды для меню бота
bot.set_my_commands([
    BotCommand("start", "Запустить приложение"),
    BotCommand("restart", "Перезапустить приложение")
])

@bot.message_handler(commands=['start'])
def start(message):
    markup = InlineKeyboardMarkup()
    web_app_button = InlineKeyboardButton(
        text="Запустить",
        web_app=WebAppInfo(url="https://frankbottest.github.io/botreact")
    )
    markup.add(web_app_button)
    bot.send_message(message.chat.id, "Добро пожаловать в CryptoDex Academy", reply_markup=markup)

@bot.message_handler(commands=['restart'])
def restart(message):
    markup = InlineKeyboardMarkup()
    web_app_button = InlineKeyboardButton(
        text="Запустить",
        web_app=WebAppInfo(url="https://frankbottest.github.io/botreact")
    )
    markup.add(web_app_button)
    bot.send_message(message.chat.id, "Приложение перезапущено. Нажмите 'Запустить' для повторного запуска.", reply_markup=markup)

bot.polling()
