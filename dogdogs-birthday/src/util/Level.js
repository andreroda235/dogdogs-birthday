const isEnemy = () => {
    return Math.random() > 0.8;
};

const getRandomFromSet = (from, to, except) => {
    if(!except)
        return Math.round(Math.random() * (to - from) + from);
    
    let random = except;
    while(random === except)
        random = Math.round(Math.random() * (to - from) + from);
    return random;
};

const reshuffle = (levelMatrix, rows, columns) => {
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            const random_i = getRandomFromSet(0, rows-1);
            const random_j = getRandomFromSet(0, columns-1);
            const temp = levelMatrix[(i * rows) + j];
            levelMatrix[(i * rows) + j] = levelMatrix[(random_i* rows) + random_j];
            levelMatrix[(random_i* rows) + random_j] = temp;
        }
    }
};

export const generateLevelMatrix = (rows, columns, enemies) => {
    let enemyCounter = enemies;
    const levelMatrix = new Array(rows*columns);
    levelMatrix.fill(0);
    while(enemyCounter > 0){
        for (let i = 0; i < levelMatrix.length; i++){
            if(isEnemy()){
                levelMatrix[i] = -1;
                enemyCounter--;
                if(enemyCounter === 0)
                break;
            }
        }
    }
    
    let prizes = 0;
    for (let i = 0; i < levelMatrix.length; i++)
        if(levelMatrix[i] === 0){
            levelMatrix[i] = prizes++;
        }

    reshuffle(levelMatrix, rows, columns);
    reshuffle(levelMatrix, rows, columns);
    reshuffle(levelMatrix, rows, columns);

    return levelMatrix;
};