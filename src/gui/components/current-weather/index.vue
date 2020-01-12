<template>
    <div class="row" v-if="!loading">
        <div class="col-md-12">
            <h3>{{city}} Current Weather</h3>
        </div>
        <div class="col-12">        
            <div class="data-row text-center">
                <img :src="icon" />
                <strong>{{weather.WeatherText}}</strong>
            </div>
        </div>    
        <div class="col-12">
            <div class="data-row">
                <strong>Time:</strong>
                {{date}}
            </div>
        </div>         
        <div class="col-12">
            <div class="data-row">
                <strong>Temperature : </strong>
                {{weather.Temperature.Metric.Value}} ° {{weather.Temperature.Metric.Unit}}
            </div>
        </div>
        <div class="col-12">
            <div class="data-row">
                <strong>Real Feel Tempature : </strong>
                {{weather.RealFeelTemperature.Metric.Value}} °{{weather.RealFeelTemperature.Metric.Unit}}
            </div>
        </div>
        <div class="col-12">
            <div class="data-row data-row--last">
                <strong>Real Feel Tempature Shade: </strong>
                {{weather.RealFeelTemperatureShade.Metric.Value}} ° {{weather.RealFeelTemperatureShade.Metric.Unit}}
            </div>
        </div>                                     
    </div>
</template>

<script>
import moment from 'moment';
import { getWeatherIcon } from '../../../utils';
export default {
    name: 'CurrentWeather',               
    props: {
        data: Object,
        loading: Boolean,
        city: String
    },    
    computed: {
        weather() {
            return this.data.data[0];
        },
        icon() {
            return getWeatherIcon(`0${this.weather.WeatherIcon}`)
        },
        date() {
            return moment(this.weather.LocalObservationDateTime).format('Do MMMM YYYY');
        }
    },
}
</script>