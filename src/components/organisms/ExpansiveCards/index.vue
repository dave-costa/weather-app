<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="main">
    <div :key="city.id" v-for="city in getCities">
      <Card :city="city" />
    </div>
  </main>
</template>

<script lang="ts">
import { Card } from "@/components/molecules";
import { mapState } from "pinia";
import { useCitiesStore } from "@/core/store/store";
import Vue from "vue";
export default Vue.extend({
  components: {
    Card,
  },
  computed: {
    ...mapState(useCitiesStore, ["getCities"]),
  },
});
</script>
<style lang="sass" scoped>
.main
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 2rem
@media ( max-width: 1024px )
  .main
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 2rem
</style>
