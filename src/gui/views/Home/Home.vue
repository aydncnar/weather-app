<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-5">
                <Select :options="cityList" :handleOnChange="handleCityChange" :selected="city" />
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-5 mt-2 m-md-0">
                <Box>
                    <CurrentWeather :loading="loading" :data="currentWeather" :city="cityName" />
                </Box>
            </div>
            <div class="col-md-7 mt-2 m-md-0">
                <Box>
                    <CurrentWeatherAdditional :loading="loading" :data="currentWeather" />
                </Box>
            </div>
        </div>
        <h4 class="mt-5">5 Days Forecast For {{cityName}}</h4>
        <hr>
        <div class="row mt-4">
            <div class="col-md-5">
                <Box class="box--graph">
                    <ForeCastGraphics :loading="forecastLoading" :data="forecastWeather" />
                </Box>
            </div>
            <div class="col-md-7 mt-2 m-md-0">
                <Box>
                    <ForeCastTable :loading="forecastLoading" :data="forecastWeather" />
                </Box>
            </div>
        </div>
    </div>
</template>



<style lang="scss">
/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* ITCSS <https://developer.helpscout.com/seed/glossary/itcss/>
*/

// Tools
@import "../../../styles/tools/tools";

// Generic
@import "../../../styles/generic/generic";

// Components
@import "node_modules/bootstrap/scss/tables";

// Customization
body {
    background: #f6f6f6;
    padding-bottom: 80px;
}

.data-row {
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #dedede;

    &--last {
        border-bottom: none;
    }
}

.box--graph {
    padding: 0;
}

.table {
    th,
    td {
        @media only screen and (max-width: 1024px) {
            padding: 10px 5px;
        }   
    }
}
</style>

<script src="./Home.js"></script>
