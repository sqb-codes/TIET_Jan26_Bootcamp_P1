const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Base62
// It converts large numbers into short strings
// 10 num (0-9) + 26 alphabets (a-z) + 26 alphabets (A-Z)
exports.encode = (num) => {
    let result = "";

    while(num > 0) {
        result = chars[num % 62] + result;
        num = Math.floor(num / 62);
    }
    return result;
}