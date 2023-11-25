<template>
  <!--  <pro-navbar text="个人中心" />-->
  <view
    class="page-pt-with-navbar hx-h-full hx-bg-[length:100%_432px] hx-bg-no-repeat"
    :style="`background-image: url(${import(
      '@@static/person/nav-bar-bg.png'
    )})`"
  >
    <view
      class="hx-flex hx-items-center hx-justify-between hx-pl-[16px] hx-pr-[16px] hx-mt-[12px]"
    >
      <view class="hx-flex">
        <image
          class="hx-w-[56px] hx-h-[56px]"
          :src="import('@@static/person/avatar-login.png')"
        />
        <view class="hx-flex hx-flex-col">
          <text class="">未登录</text>
          <text>点击登录，查看更多信息</text>
        </view>
      </view>
      <view
        class="hx-flex hx-items-center hx-justify-between hx-pl-[16px] hx-pr-[16px] hx-bg-white"
      >
        <image
          class="hx-w-[14px] hx-h-[14px] hx-mr-[4px]"
          :src="import('@@static/person/exit.png')"
        />
        <text class="hx-text-[12px] hx-leading-[20px]">退出登录</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts"></script>
