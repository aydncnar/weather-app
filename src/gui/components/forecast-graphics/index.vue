<template>
    <div v-if="!loading">
         <chart :options="chartOptions" />    
    </div>
</template>

<script>
import moment from 'moment';
import { Chart } from 'highcharts-vue';

export default {
    name: 'ForecastGraphics',
    components: {
        Chart
    },
    props: {
        data: Object,
        loading: Boolean
    },  
    computed: {
        forecast() {            
            return this.data.data.DailyForecasts;
        },
        dayArray() {  
            return this.forecast.map(item => item.Temperature.Maximum.Value);            
        },
        nightArray() {
            return this.forecast.map(item => item.Temperature.Minimum.Value);               
        },   
        dateArray() {
            return this.forecast.map(item => moment(item.Date).format('Do MMM'));   
        },                     
    },
    methods: {
        update() {
            this.chartOptions.series = [
                {
                    name: 'Day',
                    data: this.dayArray,
                    stack: 'day'
                }, 
                {
                    name: 'Night',
                    data: this.nightArray,
                    stack: 'night'
                }
            ];
            
            this.chartOptions.xAxis.categories = this.dateArray;
        }
    },
    watch: {
        data () {
            this.update();
        },
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Forecast'
                },
                xAxis: {categories: []},
                yAxis: {
                    allowDecimals: true,                    
                    title: {
                        text: 'Temperature'
                    }
                },
                tooltip: {
                    formatter() {
                        return `<b> ${this.x} </b><br/> ${this.series.name} : ${this.y}`;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal'
                    }
                },          
                series: [],
                credits: {
                    enabled: false
                },
            }
        }
    }       
}
</script>