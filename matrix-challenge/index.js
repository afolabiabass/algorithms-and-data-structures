function MatrixChallenge(strArr) {
    const kx = strArr[0][1];
    const ky = strArr[0][3];

    const qx = strArr[1][1];
    const qy = strArr[1][3];

    // queen is diagonal to king
    let move = 0;
    if (isInCheck(kx, ky, qx, qy)) {
        let checked = true;
        for (let i = kx + 1; i <= 8; i++) {
            for (let j = ky + 1; j <= 8; j++) {
                if (isInCheck(i, j, qx, qy)) {
                    move++
                } else {
                    checked = false;
                }
            }
        }
        return move;
    }

    return -1;
}

function isInCheck(kx, ky, qx, qy) {
    // queen is diagonal to king
    if (Math.abs(kx - ky) == Math.abs(qx - qy)) {
        return true;
    }

    // queen is on same line as king
    if (kx == qx) {
        return true;
    }

    // queen is on same line as king
    if (ky == qy) {
        return true;
    }

    return false;
}