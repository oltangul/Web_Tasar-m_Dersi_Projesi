const ctx = document.getElementById('barchart').getContext('2d');
const barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Klasik', 'Modern', 'Ahşap', 'Rustik', 'İki Yönlü', 'U Tipi'],
        datasets: [{
            label: 'Bakılan Şömine Sayısı',
            data: [6541,4124,3312,542,2534,13752],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

