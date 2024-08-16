let player = 'X', bot = 'O';
let Board_game_arr = new Array(20).fill(null).map(() => new Array(20).fill(null));
let Point_Board = new Array(20).fill(null).map(() => new Array(20).fill(null).map(() => new Fodop()));
let check = false;
let color_standard;
let who_play = 'X';
function cell_color(cell){
    cell.style.fontWeight = 'bold';
    cell.style.fontSize = '20px';
    cell.style.display = 'flex';
    cell.style.justifyContent = 'center';
    cell.style.alignItems = 'center';
}
document.addEventListener('DOMContentLoaded', function () {
    const gameBoard = document.getElementById('gameBoard');
    //set up value
    for (let i = 0; i <= 19; i++) {
        for (let j = 0; j <= 19; j++) {
            const x = i;
            const y = j;
            Point_Board[x][y].val = 0;
            Point_Board[x][y].no.push([0, 0]);
            Point_Board[x][y].no.push([0, 0]);
            Point_Board[x][y].no.push([0, 0]);
            Point_Board[x][y].no.push([0, 0]);
            Board_game_arr[x][y] = ' ';
        }
    }
    for (let i = 0; i <= 19; i++) {
        for (let j = 0; j <= 19; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', function() {
                if (!cell.textContent && !check) {
                    color_standard = cell.style.color;
                    if (who_play === player) {
                        Board_game_arr[i][j] = player;
                        PointInBoard(i, j, Board_game_arr, Point_Board);
                        cell.textContent = player;

                        if(player == 'X') cell.style.color = '#fb0303';
                        if(player == 'O') cell.style.color = '#1004a2';

                        if(who_play === 'X') who_play = 'O';
                        else if(who_play === 'O') who_play = 'X';
                    } 
                    else if(who_play === bot){
                        Board_game_arr[i][j] = bot;
                        PointInBoard(i, j, Board_game_arr, Point_Board);
                        cell.textContent = bot;

                        if(bot == 'X') cell.style.color = '#fb0303';
                        if(bot == 'O') cell.style.color = '#1004a2';

                        if(who_play === 'X') who_play = 'O';
                        else if(who_play === 'O') who_play = 'X';
                    }
                    cell_color(cell);
                    check = winner(Point_Board, Board_game_arr);
                }
                if(player === 'X') update_bar_chart(protion(player, Point_Board), protion(bot, Point_Board));
                if(player === 'O') update_bar_chart(protion(bot, Point_Board), protion(player, Point_Board));
            });
            gameBoard.appendChild(cell);
        }
    }
    // Initialize the chart
    if(player === 'X') bar_chart(protion(player, Point_Board), protion(bot, Point_Board));
    if(player === 'O') bar_chart(protion(bot, Point_Board), protion(player, Point_Board));

});
function click_new_game_button(){
    player = 'X';
    bot = 'O';
    who_play = 'X';
    check = false;
    alert('New game started');
    const cells = document.querySelectorAll('.cell'); 
    cells.forEach(cell => cell.textContent = '' );
    cells.forEach(cell => cell.style.color = color_standard);
    cells.forEach(cell => cell.style.backgroundColor = color_standard);

    for (let i = 0; i <= 19; i++) {
        for (let j = 0; j <= 19; j++) {
            const x = i;
            const y = j;
            Point_Board[x][y].val = 0;
            Point_Board[x][y].no[0][0] = Point_Board[x][y].no[0][1] = 0;
            Point_Board[x][y].no[1][0] = Point_Board[x][y].no[1][1] = 0;
            Point_Board[x][y].no[2][0] = Point_Board[x][y].no[2][1] = 0;
            Point_Board[x][y].no[3][0] = Point_Board[x][y].no[3][1] = 0;
            Board_game_arr[x][y] = ' ';
        }
    }
}

function click_chooseX_button(){
    alert('You chose X');
    if(player == 'O'){
        player = 'X';
        bot = 'O';
    }
}

function click_chooseY_button(){
    alert('You chose O');
    if(player == 'X'){
        player = 'O';
        bot = 'X';
    }
}
