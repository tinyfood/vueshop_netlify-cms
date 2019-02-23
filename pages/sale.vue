<template>
  <main class="capsule">
    <div class="saleimg">
      <app-mastheadtoo img="banner-ppl_shared_shopping" imght="355" title="Shared Shopping" bkcolor="#0f9f97"/>
    </div>
    <div class="contain">
      <app-sidebar :pricerange.sync="highprice" :sale="true" :org="false"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in sProducts"
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
    sProducts() {
      return this.$store.getters.sale.filter(el => el.price < this.highprice);
    }
  }
};
</script>

<style>
.saleimg .ppl-banner {
  height: 105%;
}
</style>
