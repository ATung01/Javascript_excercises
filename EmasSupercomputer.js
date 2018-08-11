function checkNeighbors(xcoord, ycoord, grid) {
    let n = 1
    let badGrid = 0
    let testcounter = 0

    const POSSIBLE_NEIGHBORS = [
              [-n, 0],
      [ 0,-n],       [ 0, n],
              [ n, 0]
    ];


      POSSIBLE_NEIGHBORS.forEach((offset) => {

        let x = xcoord + offset[0]
        let y = ycoord + offset[1]
        if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
            // console.log("x=", x, "y=", y, "grid[0].length=", grid[0].length, "grid[x][y]=", grid[x][y], "testcounter=", testcounter)
            if (grid[x][y] === "B") {
                badGrid = 1
            }
        }
        else {
          badGrid = 1
        }

      })
      n++

    if (badGrid === 1) {
      return 1
    }
    else {
      return (n*n+1)
    }
}

// Complete the twoPluses function below.
function twoPluses(grid) {


    let prod1 = 0
    let prod2 = 0

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            let result = checkNeighbors(i, j, grid)
            console.log(result)
            if( result > Math.min(prod1, prod2)) {
                if (prod1 === Math.min(prod1, prod2)) {
                    prod1 = result
                }
                else {
                    prod2 = result
                }
            }
        }
    }


    console.log(prod1 * prod2)
}

const TEST = [  "BGBBGB",
                "GGGGGG",
                "BGBBGB",
                "GGGGGG",
                "BGBBGB",
                "BGBBGB"]

const TEST2 = ["GGGGGGG",
               "BGBBBBG",
               "BGBBBBG",
               "GGGGGGG",
               "GGGGGGG",
               "BGBBBBG"]
