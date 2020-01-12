<template>
    <div class="row" v-if="!loading">
        <div class="col-12">        
            <div class="data-row">
                <strong>UV Index: </strong>
                <span>{{weather.UVIndex}} {{weather.UVIndexText}}</span>
            </div>
            <div class="data-row">
                <strong>Wind: </strong>
                <span>{{weather.Wind.Speed.Metric.Value}} at {{weather.Wind.Speed.Metric.Unit}}</span>
            </div>
            <div class="data-row">
                <strong>Wind Gusts: </strong>
                <span>{{weather.WindGust.Speed.Metric.Value}} at {{weather.WindGust.Speed.Metric.Unit}}</span>
            </div>
            <div class="data-row">
                <strong>Humidity: </strong>
                <span>%{{weather.RelativeHumidity}}</span>
            </div>
            <div class="data-row">
                <strong>Dew Point: </strong>
                <span>{{weather.WeatherText}}</span>
            </div>     
            <div class="data-row">
                <strong>Pressure: </strong>
                <span>{{weather.Pressure.Metric.Value}} {{weather.Pressure.Metric.Unit}}</span>
            </div>
            <div class="data-row">
                <strong>Cloud Cover: </strong>
                <span>%{{weather.CloudCover}}</span>
            </div>
            <div class="data-row">
                <strong>Visibility: </strong>
                <span>{{weather.Visibility.Metric.Value}} {{weather.Visibility.Metric.Unit}}</span>
            </div>                                                                               
        </div>  
    </div>
</template>

<script>
export default {
    name: 'CurrentWeatherAdditional',               
    props: {
        data: Object,
        loading: Boolean
    },    
    computed: {
        weather() {
            if(!this.loading) {                    
                return this.data.data[0];
            }
            return false;
        }
    },
}
</script>