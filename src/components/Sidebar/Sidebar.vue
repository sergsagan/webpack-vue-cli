<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link tag="li" active-class="active" :to="link.url" :exact="link.exact" v-for="link in links" :key="link.url">
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script src="./Sidebar.js"></script>
<style lang="scss" scoped src="./Sidebar.scss"></style>
