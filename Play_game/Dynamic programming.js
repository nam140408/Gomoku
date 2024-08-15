function check_sub(xs, ys){
    if(xs >= 0 && xs <= 19 && ys >= 0 && ys <= 19) return true;
    return false;
}

function check_add(xa, ya){
    if(xa >= 0 && xa <= 19 && ya >= 0 && ya <= 19) return true;
    return false;
}
function line(pos, last, direct, iex, iey, x, y, Board_game, Pb) {
    let player = Board_game[x][y];
    let cost = -1;
    let kt = false;
    if (Board_game[x][y] === 'X') cost = 1;
    if (Board_game[x][y] === 'X' || Board_game[x][y] === 'O') Pb[x][y].val = 0;
    
    if (player === Board_game[x - iex][y - iey] && check_sub(x - iex, y - iey)) 
        Pb[x - iex][y - iey].no[pos][0] = Pb[x][y].no[pos][0] + cost;
    if (player === Board_game[x + iex][y + iey] && check_add(x + iex, y + iey)) 
        Pb[x + iex][y + iey].no[pos][1] = Pb[x][y].no[pos][1] + cost;
    
    if (player !== Board_game[x - iex][y - iey] && Board_game[x - iex][y - iey] !== ' ' 
        && check_sub(x - iex, y - iey)) 
        Pb[x][y].no[pos][1] = (-cost) * 0.5;
    if (player !== Board_game[x + iex][y + iey] && Board_game[x + iex][y + iey] !== ' '
        && check_add(x + iex, y + iey)) 
        Pb[x][y].no[pos][0] = (-cost) * 0.5;
    
    if (direct === 0) kt = true;
    if (Board_game[x - iex][y - iey] !== ' ' && (direct === -1 || kt) && check_sub(x - iex, y - iey)) 
        line(pos, last, -1, iex, iey, x - iex, y - iey, Board_game, Pb);
    if (Board_game[x + iex][y + iey] !== ' ' && (direct === 1 || kt) && check_add(x + iex, y + iey)) 
        line(pos, last, 1, iex, iey, x + iex, y + iey, Board_game, Pb);
    
    if (Board_game[x - iex][y - iey] === ' ' && check_sub(x - iex, y - iey)) {
        Pb[x - iex][y - iey].no[pos][0] = Pb[x][y].no[pos][0] + cost;
        let xt = x - iex, yt = y - iey;
        Pb[xt][yt].val = (Pb[xt][yt].no[0][0] + Pb[xt][yt].no[0][1]) + (Pb[xt][yt].no[1][0] + Pb[xt][yt].no[1][1]) 
                        + (Pb[xt][yt].no[2][0] + Pb[xt][yt].no[2][1]) + (Pb[xt][yt].no[3][0] + Pb[xt][yt].no[3][1]); 
        if (last === 0) line(pos, 1, 1, iex, iey, x, y, Board_game, Pb);
    }
    
    if (Board_game[x + iex][y + iey] === ' ' && check_add(x + iex, y + iey)) {
        Pb[x + iex][y + iey].no[pos][1] = Pb[x][y].no[pos][1] + cost;
        let xt = x + iex, yt = y + iey;
        Pb[xt][yt].val = (Pb[xt][yt].no[0][0] + Pb[xt][yt].no[0][1]) + (Pb[xt][yt].no[1][0] + Pb[xt][yt].no[1][1]) 
                        + (Pb[xt][yt].no[2][0] + Pb[xt][yt].no[2][1]) + (Pb[xt][yt].no[3][0] + Pb[xt][yt].no[3][1]);
        if (last === 0) line(pos, 1, -1, iex, iey, x, y, Board_game, Pb); 
    }
}

function PointInBoard(x, y, Board_game, Pb) {
    let a = 0, b = 0, c = 0, e = 0, k = 1;
    line(a, b, c, e, k, x, y, Board_game, Pb);// ngang
    a = 1, b = 0, c = 0, e = 1, k = 1;
    line(a, b, c, e, k, x, y, Board_game, Pb);// cheo trai tren xuong
    a = 2, b = 0, c = 0, e = 1, k = 0;
    line(a, b, c, e, k, x, y, Board_game, Pb); // doc
    a = 3, b = 0, c = 0, e = -1, k = 1;
    line(a, b, c, e, k, x, y, Board_game, Pb); // cheo phai tren xuong
}

function totalBoard(m, n, Pb, Board_game) {
    let sum = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j <= n; j++) {
            if (Board_game[i][j] === ' ') {
                sum += Pb[i][j].val;
            }
        }
    }
    return sum;
}