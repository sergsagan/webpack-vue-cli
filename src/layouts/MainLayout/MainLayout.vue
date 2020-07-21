<template>
  <!-- <div class="main-layout">
    <Navbar @click-burger="isOpen = !isOpen" />
    <Sidebar v-model="isOpen" />
    <main>
      <router-view/>
    </main>
  </div> -->

  <div class="app-main-layout">
    <Navbar @click-burger="isOpen = !isOpen"/>
    <Sidebar v-model="isOpen"/>

    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <FixedButton/>
  </div>
</template>

<script src="./MainLayout.js"></script>
<style lang="scss" scoped  src="./MainLayout.scss"></style>
