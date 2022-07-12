<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <label class="label-container">
    <input
      placeholder="Digite a cidade que deseja"
      @keyup.enter="search"
      class="label__input"
      type="text"
      ref="search"
    />
    <span @click.enter="search" class="label__icon" title="Procurar">
      <font-awesome-icon
        class="icon"
        icon="fa-solid fa-magnifying-glass bounce"
      />
    </span>
  </label>
</template>

<script lang="ts">
import { useCitiesStore } from "@/core/store/store";
import { mapActions, mapState } from "pinia";
import Vue from "vue";
export default Vue.extend({
  computed: {
    ...mapState(useCitiesStore, ["getCities"]),
  },
  methods: {
    ...mapActions(useCitiesStore, ["addCities"]),
    async search() {
      await this.addCities((this.$refs.search as HTMLInputElement).value);
    },
  },
});
</script>

<style lang="sass" scoped>
.label-container
    width: 100%
    border-radius: 8px
    box-sizing: border-box
    display: flex
    justify-content: space-between
    border: 1px solid #EDE5E5
    .label__input
        all: unset
        width: 100%
        height: 100%
        padding:.4rem .7rem
    .label__icon
        border-radius: 0 8px 8px 0
        padding:.4rem .7rem
        cursor: pointer
        .icon
            color: #EDE5E5
</style>
