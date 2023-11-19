<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title !tw-text-[90px] hover:tw-text-[red]">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, ShallowRef } from 'vue';

const title: ShallowRef<string> = ref('he1llo');
</script>

<style lang="scss" scoped>
@import './index.scss';
.content {
  @apply tw-text-[100px] tw-text-[red];
}
</style>
