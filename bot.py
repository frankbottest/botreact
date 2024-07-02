import telebot
from telebot.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

bot = telebot.TeleBot('7221253176:AAFKd3cD0p8Y8DymdLp6eJPTgiGqoCe21DQ')

@bot.message_handler(commands=['start'])
def start(message):
    markup = ReplyKeyboardMarkup(row_width=1)
    web_app_button = KeyboardButton(
        text="Open CryptoDex Academy",
        web_app=WebAppInfo(url="https://frankbottest.github.io/botreact")
    )
    markup.add(web_app_button)
    bot.send_message(message.chat.id, "Welcome to CryptoDex Academy!", reply_markup=markup)

bot.polling()
