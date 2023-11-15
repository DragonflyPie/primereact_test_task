export const dataSource = {
  importance: ["Высокая", "Низкая", "Критическая"],
  error: [
    { equipment: "Вегас", message: "Сервер Vegas недоступен" },
    { equipment: "Коммутатор", message: "Потеряно сетевое соединение" },
    { equipment: "Люк", message: "Открыта крышка" },
    { equipment: "ИБП", message: "Низкий заряд батареи" },
    { equipment: "Трансформатор", message: "Недостаточное количество масла" },
    { equipment: "ЛВС", message: "Обрыв силового кабеля" },
    { equipment: "", message: "Отсутствует подтверждение пуска" },
  ],
  responsible: [
    "Смирнов А.А.",
    "Капустин Д.С.",
    "Ветрова Е.С.",
    "Ольшановская М.О.",
  ],
};

export const options = [
  { label: "Таблица", value: "table" },
  { label: "Карточки", value: "cards" },
];
