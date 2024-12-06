const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Используем порт из среды, если он есть
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});