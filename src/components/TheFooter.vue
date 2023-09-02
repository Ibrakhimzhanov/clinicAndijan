<script setup>
import LogoMain from './LogoMain.vue'
</script>
<template>
  <div
    class="xl:mt-32 sticky mt-10 flex items-center justify-between rounded-b-none rounded-t-[50px] rounded-tr-[50px] bg-[#E5F0FF] px-5 lg:px-20 xl:px-[172px] py-10 xl:py-16"
  >
    <div class="flex flex-col items-start gap-5 xl:gap-10">
      <a href="index.html">
        <LogoMain />
      </a>
      <div class="flex flex-col gap-5">
        <span class="max-w-[298px]">Download the app by clicking the link below :</span>
        <div class="flex xl:gap-10 gap-3">
          <a href="#">
            <img src="@/assets/google.jpg" alt="Google Play" />
          </a>
          <a href="#">
            <img src="@/assets/apple.jpg" alt="App Store" />
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-end xl:text-left text-right xl:gap-5">
      <h6 class="text-lg">Social media</h6>
      <div class="flex items-center xl:gap-5">
        <a href="#">
          <img src="@/assets/facebook.svg" alt="Facebook" />
        </a>
        <a href="#">
          <img src="@/assets/twitter.svg" alt="Twitter" />
        </a>
        <a href="#">
          <img src="@/assets/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="#">
          <img src="@/assets/instagram.svg" alt="Instagram" />
        </a>
      </div>
      <span class="mt-10 text-lg flex flex-col lg:flex-row"
        >© 2023 &nbsp;
        <a class="underline" href="https://www.instagram.com/uzwebblog/"> dev Ibrakhimzhanov </a>
        &nbsp; &nbsp; All Rights Reserved. Co Reg: 685299
      </span>
    </div>
  </div>
</template>
