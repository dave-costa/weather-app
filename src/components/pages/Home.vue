<template>
  <section class="container-page">
    <v-alert v-if="error" color="#F80A0A" dense outlined text type="error"
      ><p style="margin-left: 2rem">Cidade não encontrada!</p>
    </v-alert>
    <header>
      <Input />
    </header>
    <expansive-cards />
  </section>
</template>

<script lang="ts">
import { mapState, mapActions } from "pinia";
import { useCitiesStore } from "@/core/store/store";
import Vue from "vue";
import { Input } from "@/components/atoms/";
import { ExpansiveCards } from "@/components/organisms/";
export default Vue.extend({
  name: "HomeView",
  components: {
    Input,
    ExpansiveCards,
  },
  computed: {
    ...mapState(useCitiesStore, ["error"]),
  },
  async created() {
    await this.setCities();
  },
  methods: {
    ...mapActions(useCitiesStore, ["setCities"]),
  },
});
</script>
<style lang="sass" scoped>
.container-page
  max-width: 1120px
  margin: 0 auto
  padding: 2rem 0
  display: flex
  flex-direction: column
  row-gap: 2rem
@media ( max-width: 1024px )
  .container-page
    padding: 2rem
    margin: 0 auto
</style>
