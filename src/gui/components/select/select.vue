<template>
  <select 
    class="select"    
    ref="input"
    :value="selected"
    @change="change"
  >
    <option 
      v-for="(item, index) in options" 
      v-bind:key="index"
      :value="item.value">{{item.text}}
    </option>
  </select>
</template>

<script src="./select.js"></script>

<style lang="scss">
  .select {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    font-size: 14px;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #dedede;
    color: #333;
  }
</style> 


