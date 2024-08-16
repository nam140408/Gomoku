let winChart;
function protion(player, Point_Board){
    let protion_of_player = 50;
    //code
    return protion_of_player;
}
function update_bar_chart(protionX, protionO){
    winChart.data.datasets[0].data = [protionX, protionO];
    winChart.update();
}
function bar_chart(protionX, protionO){
    const ctx = document.getElementById('winChart').getContext('2d');
    winChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['X', 'O'],
            datasets: [{
                label: 'Win Percentage',
                data: [protionX, protionO],
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
}