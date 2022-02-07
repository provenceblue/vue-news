<template>
    <canvas ref="lineChart" id="lineChart"></canvas>
</template>

<script>
const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];

        const data = {
            labels: labels,
            datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {}
        };
import Chart from 'chart.js/auto';
export default {
    mounted() {
        const myChart1 = new this.$_Chart(this.$refs.lineChart,config);
    }
};
</script>