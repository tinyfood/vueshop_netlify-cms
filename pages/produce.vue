<template>
  <main class="capsule">
    <app-mastheadtoo img="banner-ppl-produce" imght="355" title="Produce" bkcolor="#e33500"/>
    <div class="contain">
      <app-sidebar :pricerange.sync="highprice"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in mProducts"
          key="item"
          :item="item"
          :index="index"
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import AppSidebar from './../components/AppSidebar.vue';
import AppMastheadtoo from './../components/AppMastheadtoo.vue';
import AppItem from './../components/AppItem.vue';

export default {
  components: {
    AppSidebar,
    AppMastheadtoo,
    AppItem
  },
  data() {
    return {
      highprice: 120
    };
  },
  computed: {
    mProducts() {
      return this.$store.getters.produce.filter(el =>
        this.$store.state.sale
          ? el.price < this.highprice && el.sale
          : el.price < this.highprice
      );
    }
  }
};
</script>
