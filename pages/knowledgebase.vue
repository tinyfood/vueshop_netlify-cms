<template>
  <main class="capsule">
    <div class="saleimg">
      <app-mastheadtoo2 img="banner-ppl_knowledgebase" title="Tiny Food hyper-local food production, transportation and distribution Knowledgebase by SCD Hub" bkcolor="#0f9f97"/>
    </div>
    <div class="contain">
      <app-knowledgebasesidebar :pricerange.sync="highprice" :sale="true" :org="false"/>
      <transition-group name="items" tag="section" class="content">
        <app-kbitem
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
import AppKnowledgebasesidebar from './../components/AppKnowledgebasesidebar.vue';
import AppMastheadtoo2 from './../components/AppMastheadtoo2.vue';
import AppKbitem from './../components/AppKbitem.vue';

export default {
  components: {
    AppKnowledgebasesidebar,
    AppMastheadtoo2,
    AppKbitem
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
