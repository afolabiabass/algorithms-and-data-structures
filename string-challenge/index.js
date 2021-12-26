function StringChallenge(str) {
    [pattern, strVal] = str.split(' ');
    let j = 0;
    for (let i = 0; i <= pattern.length; i++) {
        if (pattern[i] == '$') {
            if (isNaN(Number(strVal[j]))) {
                return "false";
            }
            j++;
        }

        if (pattern[i] == '+') {
            const l = strVal[j].toLowerCase();
            if (l >= 'a' && l <= 'z') {
                j++;
            } else {
                return "false";
            }
        }

        if (pattern[i] == '*' && pattern[i + 1] == '{') {
            const repeatTimes = parseInt(pattern[i + 2]);
            if (strVal[j].repeat(repeatTimes) !== strVal.substring(j, j + repeatTimes + 1)) {
                return "false";
            }
            j = j + repeatTimes;
        }

        if (pattern[i] == '*' && pattern[i + 1] != '{') {
            if (strVal[j].repeat(3) !== strVal.substring(j, j + 3)) {
                return "false";
            }
            j = j + 3;
        }
    }

    if (j < strVal.length) {
        return "false";
    }
    return "true";
}