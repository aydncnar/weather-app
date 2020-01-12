<template>
    <div class="box">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Box',
}
</script>

<style lang="scss">
.box {
    position: relative;    
    background-color: #fff; 
    padding: 16px; 
    box-shadow: 0 10px 20px -10px rgba(0,0,0,.1);
    border-radius: 4px;        

    @media only screen and (min-width: 1024px) {
        padding: 24px;
    }      
}
</style> 

