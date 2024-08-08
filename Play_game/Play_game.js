let turnCount = 0;
let player = 'X', bot = 'O';
document.addEventListener('DOMContentLoaded', function () {
    const gameBoard = document.getElementById('gameBoard');
      // Biến đếm lượt đánh
    // Create 20x20 grid for the game board
    for (let i = 0; i < 400; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', function() {
            if (!cell.textContent) {
                if (turnCount % 2 === 0) {
                    cell.textContent = player;
                    if(player == 'X') cell.style.color = '#fb0303';
                    if(player == 'O') cell.style.color = '#1bfe00';
                    cell.style.fontWeight = 'bold';
                    cell.style.fontSize = '20px';
                    cell.style.display = 'flex';
                    cell.style.justifyContent = 'center';
                    cell.style.alignItems = 'center';
                } else {
                    cell.textContent = bot;
                    if(bot == 'X') cell.style.color = '#fb0303';
                    if(bot == 'O') cell.style.color = '#1bfe00';
                    cell.style.fontWeight = 'bold';
                    cell.style.fontSize = '20px';
                    cell.style.display = 'flex';
                    cell.style.justifyContent = 'center';
                    cell.style.alignItems = 'center';
                }
                turnCount++;
            }
        });
        gameBoard.appendChild(cell);
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
    alert('New game started');
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = '');
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
