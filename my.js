

var location1 = randomLoc = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ты готов выстрелить? (введи цифру 0-6):"); // null
    if (guess < 0 || guess > 6) {
        alert("введи то что просил от 0 до 6");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Ты красавчик!");
                break; // Добавлено для выхода из цикла при потоплении корабля
            }
        } else {
            alert("Мимо)))");
        }
    }
}

var status = "выстрел " + guesses + " чтобы попасть по караблю, " + "это показывает уровень вашей точности, как: " + (3 / guesses);
alert (status);

