export default function Logic(options) {
    let result = [];
    let upper = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    let lower = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let special = [
        "`",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "-",
        "_",
        "+",
        "=",
        "{",
        "[",
        "}",
        "]",
        ";",
        ":",
        "<",
        ",",
        ">",
        ".",
        "?",
        "/",
    ];

    let selected = [];
    if (options.uppercase) {
        selected.push(0);
    }
    if (options.lowercase) {
        selected.push(1);
    }
    if (options.numeric) {
        selected.push(2);
    }
    if (options.special) {
        selected.push(3);
    }
    for (let i = 0; i < +options.length; i++) {
        let randomValue = selected[Math.floor(Math.random() * selected.length)];
        if (randomValue === 0) {
            result.push(upper[Math.floor(Math.random() * 26)]);
        } else if (randomValue === 1) {
            result.push(lower[Math.floor(Math.random() * 26)]);
        } else if (randomValue === 2) {
            result.push(number[Math.floor(Math.random() * 10)]);
        } else if (randomValue === 3) {
            result.push(special[Math.floor(Math.random() * 15)]);
        }
    }
    return result;
}