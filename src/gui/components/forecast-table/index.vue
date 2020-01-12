<template>
    <table class="table" v-if="!loading">
        <thead>
            <tr>                    
                <th scope="col">
                    <p class="table__header-copy">Date</p>
                    <button class="btn--order" @click="order('Date', orderType.asc)">▲</button>
                    <button class="btn--order" @click="order('Date', orderType.desc)">▼</button>
                </th>
                <th scope="col">
                    <p class="table__header-copy">Sunrise</p>
                    <button class="btn--order" @click="order('Sun.Rise', orderType.asc)">▲</button>
                    <button class="btn--order" @click="order('Sun.Rise', orderType.desc)">▼</button>                    
                </th>
                <th scope="col">
                    <p class="table__header-copy">Sunset</p>
                    <button class="btn--order" @click="order('Sun.Set', orderType.asc)">▲</button>
                    <button class="btn--order" @click="order('Sun.Set', orderType.desc)">▼</button>                    
                </th>
                <th scope="col">
                    <p class="table__header-copy">Min Temp</p>
                    <button class="btn--order" @click="order('Temperature.Minimum.Value', orderType.asc)">▲</button>
                    <button class="btn--order" @click="order('Temperature.Minimum.Value', orderType.desc)">▼</button>                    
                </th>
                <th scope="col">
                    <p class="table__header-copy">Max Temp</p>
                    <button class="btn--order" @click="order('Temperature.Maximum.Value', orderType.asc)">▲</button>
                    <button class="btn--order" @click="order('Temperature.Maximum.Value', orderType.desc)">▼</button>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in forecast"  v-bind:key="index">
                <td>{{moment(item.Date).format('Do MMM')}}</td>
                <td>{{moment(item.Sun.Rise).format('LT')}}</td>
                <td>{{moment(item.Sun.Set).format('LT')}}</td>
                <td>{{item.Temperature.Minimum.Value}} ° {{item.Temperature.Minimum.Unit}}</td>
                <td>{{item.Temperature.Maximum.Value}} ° {{item.Temperature.Maximum.Unit}}</td>
            </tr>  
        </tbody>
    </table>
</template>

<script>
import moment from 'moment';
import orderBy from 'lodash/orderBy';
import get from 'lodash/get';
import { orderType } from '../../../enums';

export default {
    name: 'ForeCastTable',
    props: {
        data: Object,
        loading: Boolean
    },  
    computed: {
        forecast() {
            return this.data.data.DailyForecasts;
        },
    },
    data() {
        return {
            orderType,
        }
    },    
    methods: {
        moment,
        order(byValue, type) {            
            this.data.data.DailyForecasts = orderBy( this.forecast, (e) => { 
                                                            return get(e, byValue)
                                                        }, 
                                                        [type]
                                                    );
        }
    }     
}
</script>

<style lang="scss">

.table {
    @media only screen and (max-width: 1024px) {
        font-size: 10px;
    }   
    &__header-copy {
        margin-bottom: 0;
    }
}

.btn--order {
    padding: 2px 5px;
    display: inline-block;
    font-size: 10px;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #dedede;

    @media only screen and (max-width: 1024px) {
        width: 50%
    } 

    @media only screen and (min-width: 1024px) {
        margin-right: 8px;
    }       
}
</style>
