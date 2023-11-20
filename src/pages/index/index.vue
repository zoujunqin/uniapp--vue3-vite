<template>
  <view class="content">
    <image class="logo tw-ml-[24px]" src="/static/logo.png" />
    <view class="text-area">
      <text class="title hover:tw-text-[10px]">{{ title }}</text>

      <uni-badge text="1" absolute="rightTop" class="tw-text-[20px]">
        1111
      </uni-badge>
      <pro-text />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, ShallowRef } from 'vue';

const title: ShallowRef<string> = ref('he1llo');
</script>

<style lang="scss" scoped>
@import url('./index.scss');
.content {
  @apply tw-text-[100px];
  height: 20px;
  font-size: 20px;
  opacity: 1;
}
</style>
