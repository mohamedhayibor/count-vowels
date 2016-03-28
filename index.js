function countVowels(string) {
    return string.toLowerCase().split('').reduce(function (sum, i) {
        return (i =='a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') ? sum += 1 : sum;
    }, 0)
}

module.exports = countVowels;
