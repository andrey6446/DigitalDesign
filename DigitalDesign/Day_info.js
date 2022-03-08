function getDayInfo (date) {
    let newDate = `${date.split(".")[1]}.${date.split(".")[0]}.${date.split(".")[2]}`;
    let myDate = new Date(newDate);
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let dayOfWeek = days[myDate.getDay()];
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();
    let numOfWeek = Math.ceil((myDate.getDate() - 1 - myDate.getDay()) / 7 + 1);
    return `${dayOfWeek}, ${numOfWeek} неделя ${month} ${year} года`;
};

console.log(getDayInfo('01.01.2022'));
console.log(getDayInfo('15.12.2021'));
