//medium

// Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.
// The distance between two adjacent cells is 1.

const updateMatrix = function(matrix) {
    
    for(let rowIndex = 0; rowIndex < matrix.length; rowIndex++){
        
        for(let cellIndex = 0; cellIndex < matrix[0].length; cellIndex++){
            
                    console.log('-------------')
                    matrix[rowIndex][cellIndex] = BFS(rowIndex, cellIndex, matrix)
            
        }
    }
    return matrix
};

const BFS = (rowIndex, cellIndex, matrix) => {
    let currentVal;
    let current;
    let queue = [{rowIndex, cellIndex, dist: 0}]
    while(queue.length > 0) {
        current = queue.shift();
        if(matrix[current.rowIndex] == undefined || matrix[current.rowIndex][current.cellIndex] == undefined) continue;
        currentVal = matrix[current.rowIndex][cellIndex]
        if(currentVal == 0) return current.dist;
        //top
        queue.push({rowIndex: current.rowIndex =- 1, cellIndex, dist: current.dist=+1})
        //bottom
        queue.push({rowIndex: current.rowIndex =+ 1, dist: current.dist=+1})
        //left
        queue.push({rowIndex, cellIndex: current.cellIndex =- 1, dist: current.dist =+ 1})
        //right
        queue.push({rowIndex, cellIndex: current.cellIndex =+ 1, dist: current.dist =+ 1})
    }
}


const matrix1 =
[[0,0,0],
[0,1,0],
[0,0,0]]

// Output:
// [[0,0,0],
//  [0,1,0],
//  [0,0,0]]

const matrix2 =
[[0,0,0],
[0,1,0],
[1,1,1]]

// Output:
// [[0,0,0],
//  [0,1,0],
//  [1,2,1]]

console.log(updateMatrix(matrix2))