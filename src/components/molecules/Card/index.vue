<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">{{ city.temp }}°</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ city.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          <p>País: {{ city.country }}</p>
          <p>Id: {{ city.id }}</p>
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded text> Ver </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    city: {
      required: true,
    },
  },
});
</script>
