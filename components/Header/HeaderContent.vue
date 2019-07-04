<template>
  <div>
    <TopHeader />
    <MainHeader />
    <BottomHeader />
  </div>
</template>
<script>
import TopHeader from './TopHeader';
import MainHeader from './MainHeader';
import BottomHeader from './BottomHeader';

export default {
  name: 'ContentHeader',
  components: {
    TopHeader,
    MainHeader,
    BottomHeader
  }
}
</script>
