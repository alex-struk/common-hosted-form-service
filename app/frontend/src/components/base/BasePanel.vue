<template>
  <v-card outlined flat>
    <v-card-title v-if="this.$slots.title">
      <slot name="title" />
    </v-card-title>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.v-card {
  border-radius: 0.5em;
  .v-card__title {
    background-color: #efefef;
    border-bottom: 1px solid lightgray;
    font-weight: 800;
    padding: 0.5em 1em;
  }
  .v-card__text {
    padding: 1.5em;
  }
}
</style>
