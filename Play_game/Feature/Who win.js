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
function highlight(iex, iey, x, y, Board_game_arr){
    let itx = x + iex;
    let ity = y + iey;
    const cells = document.querySelectorAll('.cell');
    let standard = Board_game_arr[itx][ity];
    while (itx >= 0 && itx <= 19 && ity >= 0 && ity <= 19) {
        if (Board_game_arr[itx][ity] !== standard) {
            break;
        }

        let index = itx * 20 + ity;
        cells[index].style.backgroundColor = '#cbce0b';
        itx += iex;
        ity += iey;
    }
}

function winner(Point_Board, Board_game_arr){
    var ta = [0, 0, 0, 0];
    ta = check_win(Point_Board);
    const ix = ta[0];
    const iy = ta[1];
    if(ix === -1) return false;
    if(ta[2] === 0) highlight(0 * ta[3], 1 * ta[3], ix, iy, Board_game_arr);
    if(ta[2] === 1) highlight(1 * ta[3], 1 * ta[3], ix, iy, Board_game_arr);
    if(ta[2] === 2) highlight(1 * ta[3], 0 * ta[3], ix, iy, Board_game_arr);
    if(ta[2] === 3) highlight(-1 * ta[3], 1 * ta[3], ix, iy, Board_game_arr);
    return true;
}