<script setup>
import NavList from './NavList.vue'
// import NavChangeLanguage from './NavChangeLanguage.vue'
import LogoMain from './LogoMain.vue'
import NavLogin from './NavLogin.vue'
import NavMobile from './NavMobile.vue'

defineProps(['currentPage'])
</script>

<template>
  <div class="w-full fixed overflow-hidden top-0 z-50 m-auto justify-center flex items-center">
    <nav
      class="flex w-full container px-5 border border-cGray items-center mt-5 justify-between bg-white rounded-[40px] py-3"
    >
      <LogoMain />
      <NavMobile />
      <NavList :current-page="currentPage" />
      <div class="xl:flex hidden gap-3 items-center justify-center">
        <NavLogin />
        <!-- <NavChangeLanguage /> -->
      </div>
    </nav>
  </div>
</template>
