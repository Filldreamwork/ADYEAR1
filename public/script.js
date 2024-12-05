// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

tg.ready(); // Уведомляем Telegram, что приложение загружено

// Меняем цвет заголовка
document.getElementById('openDay').addEventListener('click', () => {
  alert('Первый день открыт! 🎉');
  tg.MainButton.text = "Приз активирован!";
  tg.MainButton.show(); // Показать основную кнопку Telegram
});