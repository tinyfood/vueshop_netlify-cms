<template>
  <aside>
    <div class="sidearea">
      <label for="pricerange">Sort by price/lb: <span>${{ pricerange }}</span></label>
      <input 
        class="slider" 
        id="pricerange" 
        type="range"
        :value="pricerange"  
        :min="min" 
        :max="max" 
        step="0.1" 
        @input="$emit('update:pricerange', $event.target.value)"
      />
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>
    </div>
  
    <app-switch v-if="!sale" />
    <div class="sidearea callout">
      <p>Share the shopping!</p>
    </div>
    <div class="sidearea callout">
      <h4>Help grow Tiny Food!</h4>
      <p>Share TinyFood with someone or a group you order with.</p>
    </div>
 <button html="Start a hub" alt="Start a hub" text="Start a hub"></button>

   <div class="sidearea callout">
      <img src="onebuilding_foodan1.gif">
   </div> 
    </app-switch>
  </aside>
</template>

<script>
import AppSwitch from './AppSwitch.vue';

export default {
  props: {
    sale: {
      type: Boolean,
      default: false
    },
    pricerange: {
      type: [Number, String],
      default: 8.50
    }
  },
  data() {
    return {
      min: 0,
      max: 120
    };
  },
  components: {
    AppSwitch
  }
};
</script>

<style lang="scss" scoped>
aside {
  background: white;
  float: left;
  padding: 20px;
}

.sidearea {
  border-bottom: 1px solid #ccc;
  &:last-of-type {
    border: none;
  }
}

.callout {
  padding: 20px 0;
  h4 {
    padding-bottom: 10px;
  }
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

/*--input range--*/
.sidearea:first-of-type {
  padding-bottom: 40px;
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

span {
  font-family: 'Barlow', sans-serif;
}

.max {
  font-size: 12px;
  float: right;
  color: #565656;
}

.min {
  float: left;
  font-size: 12px;
  color: #565656;
}
</style>