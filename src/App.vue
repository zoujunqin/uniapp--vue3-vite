<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app';
import { useSystemStore } from '@/pinia/modules/system';

onLaunch(() => {
  const { setSystemInfo } = useSystemStore();
  uni.getSystemInfo().then(data => {
    setSystemInfo(data);
  });
});

onShow(() => {});

onHide(() => {});
</script>

<style lang="scss">
@import url('tailwindcss/base');
@import url('tailwindcss/components');
@import url('tailwindcss/utilities');

/* 每个页面公共css */
</style>
