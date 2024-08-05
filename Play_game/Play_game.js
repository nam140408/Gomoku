document.addEventListener('DOMContentLoaded', function () {
    const gameBoard = document.getElementById('gameBoard');

    // Create 20x20 grid for the game board
    for (let i = 0; i < 400; i++) {
        const cell = document.createElement('div');
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

    // Event listeners for buttons
    document.getElementById('newGameButton').addEventListener('click', function () {
        // Reset the game and chart data
        console.log('New game started');
    });

    document.getElementById('playX').addEventListener('click', function () {
        console.log('Player chose X');
    });

    document.getElementById('playO').addEventListener('click', function () {
        console.log('Player chose O');
    });
});
function click_new_game_button(){
    alert('New game started');
}

function click_chooseX_button(){
    alert('You chose X');
}

function click_chooseY_button(){
    alert('You chose O');
}
