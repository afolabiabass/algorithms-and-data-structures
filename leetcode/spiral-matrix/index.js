/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    /**
     * @param {Map} visited
     * @param {Array} o
     * @param {number} n
     * @param {number} m
     */
    visited = new Map()
    o = []
    n = matrix[0].length
    m = matrix.length

    // console.log(n, m)
    // return

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isVisited = function (x, y) {
        if (x == 2 && y== 3){
            console.log(x.toString() + ',' + y.toString(), visited.has(x.toString() + ',' + y.toString()))
        }
        
        return visited.has(x.toString() + ',' + y.toString())
    }

    isAllVisited = function () {
        return visited.size == (n * m)
    }

    left = function (x, y) {
        if (isAllVisited()) {
            return o
        }
        while (!isVisited(x, y)) {
            visited.set(x.toString() + ',' + y.toString(), [x, y])
            o.push(matrix[x][y])
            if (y != 0) {
                y--
            }
        }
        if (x > 0) {
            x--
        }
        return up(x, y)
    }

    down = function (x, y) {
        if (isAllVisited()) {
            return o
        }
        // console.log(matrix[x][y], o.join(','))
        while (!isVisited(x, y)) {
            visited.set(x.toString() + ',' + y.toString(), [x, y])
            o.push(matrix[x][y])
            if (x < m - 1) {
                x++
            }
            console.log(x, y, matrix[x][y])
        }
        if (y > 0) {
            y--
        }
        return left(x, y)
    }

    right = function (x, y) {
        if (isAllVisited()) {
            return o
        }
        while (!isVisited(x, y)) {
            visited.set(x.toString() + ',' + y.toString(), [x, y])
            o.push(matrix[x][y])
            if (y < n - 1) {
                y++
            }
        }
        if (x < m - 1) {
            x++
        }
        return down(x, y)
    }

    up = function (x, y) {
        if (isAllVisited()) {
            return o
        }
        while (!isVisited(x, y)) {
            visited.set(x.toString() + ',' + y.toString(), [x, y])
            o.push(matrix[x][y])
            if (x > 1) {
                x--
            }
        }
        if (y < n - 1) {
            y++
        }
        return right(x, y)
    }

    return right(0, 0)
};

// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,23,24]]))
