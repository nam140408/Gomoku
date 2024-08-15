let turnCount = 0;
let player = 'X', bot = 'O';
let Board_game_arr = new Array(20).fill(null).map(() => new Array(20).fill(null));
let Point_Board = new Array(20).fill(null).map(() => new Array(20).fill(null).map(() => new Fodop()));
let check = false;
let color_standard;
//hight light the winner
function highlight(iex, iey, x, y, Point_Board, Board_game_arr){
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
    if(ta[2] === 0) highlight(0 * ta[3], 1 * ta[3], ix, iy, Point_Board, Board_game_arr);
    if(ta[2] === 1) highlight(1 * ta[3], 1 * ta[3], ix, iy, Point_Board, Board_game_arr);
    if(ta[2] === 2) highlight(1 * ta[3], 0 * ta[3], ix, iy, Point_Board, Board_game_arr);
    if(ta[2] === 3) highlight(-1 * ta[3], 1 * ta[3], ix, iy, Point_Board, Board_game_arr);
    return true;
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
                    if (turnCount % 2 === 0) {
                        Board_game_arr[i][j] = player;
                        PointInBoard(i, j, Board_game_arr, Point_Board);
                        cell.textContent = player;
                        if(player == 'X') cell.style.color = '#fb0303';
                        if(player == 'O') cell.style.color = '#1004a2';
                        
                    } else {
                        Board_game_arr[i][j] = bot;
                        PointInBoard(i, j, Board_game_arr, Point_Board);
                        cell.textContent = bot;
                        if(bot == 'X') cell.style.color = '#fb0303';
                        if(bot == 'O') cell.style.color = '#1004a2';
                    }
                    cell.style.fontWeight = 'bold';
                    cell.style.fontSize = '20px';
                    cell.style.display = 'flex';
                    cell.style.justifyContent = 'center';
                    cell.style.alignItems = 'center';
                    check = winner(Point_Board, Board_game_arr);
                    turnCount++;
                }
            });
            gameBoard.appendChild(cell);
        }
    }

    // Initialize the chart
    const ctx = document.getElementById('winChart').getContext('2d');
    const winChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['X', 'O'],
            datasets: [{
                label: 'Win Percentage',
                data: [20, 75],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

});
function click_new_game_button(){
    turnCount = 0;
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
    if(turnCount % 2 == 0 && player == 'O') turnCount = 1;
}

function click_chooseY_button(){
    alert('You chose O');
    if(player == 'X'){
        player = 'O';
        bot = 'X';
    }
    if(turnCount % 2 != 0 && player == 'X') turnCount = 0;
}
