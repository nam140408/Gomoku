function check_win(Pb){
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            for (let ino = 0; ino < 4; ino++) {
                if(Math.abs(Pb[i][j].no[ino][0]) >= 4.5) return [i, j, ino, 1];
                if(Math.abs(Pb[i][j].no[ino][1]) >= 4.5) return [i, j, ino, -1];
            }
        }      
    }
    return [-1, 0, 0, 0];
}