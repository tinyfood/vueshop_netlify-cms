<template>
  <main class="capsule">
    <app-mastheadtoo img="banner-ppl_herbal-medicine_lavender-collage-geog" title="Medicinal Herbs" bkcolor="#474598"/>
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
      highprice: 85,
      min: 0,
      max: 100
    };
  },
  computed: {
    mProducts() {
      return this.$store.getters.herbs.filter(el =>
        this.$store.state.sale
          ? el.price < this.highprice && el.sale
          : el.price < this.highprice
      );
    }
  }
};
</script>
