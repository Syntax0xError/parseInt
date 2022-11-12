function parseInt(str) {
    var mul = 1;
    var sum = 0;
    for (var i = str.length - 1; i >= 0; i--) {
        const ascii = str.charAt(i).charCodeAt();
        if (ascii > 57 || ascii < 48) {
            return NaN
        }
        sum += (ascii - 48)*mul;
        mul *= 10;
    }
    return sum;
}
