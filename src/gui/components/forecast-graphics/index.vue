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
            if(!this.loading) {               
                return this.data.data.DailyForecasts;
            }
            return false;
        },
        dayArray() {
            if(!this.loading) {
                const dayArray = [];
                this.forecast.forEach((item) => {
                    dayArray.push(item.Temperature.Maximum.Value);
                });        
                return dayArray;                
            } 
            return [];
        },
        nightArray() {
            if(!this.loading) {
                const nightArray = [];
                this.forecast.forEach((item) => {
                    nightArray.push(item.Temperature.Minimum.Value);
                });        
                return nightArray;                
            }
            return [];
        },   
        dateArray() {
            if(!this.loading) {
                const dateArray = [];
                this.forecast.forEach((item) => {
                    dateArray.push(moment(item.Date).format('Do MMM'));
                });
                return dateArray;                
            }
            return [];
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
        data: function () {
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
                xAxis: {
                    categories: []
                },
                yAxis: {
                    allowDecimals: true,                    
                    title: {
                        text: 'Tempature'
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
    },
        
}
</script>


