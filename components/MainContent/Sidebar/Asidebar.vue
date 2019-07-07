<template>
  <div>
    <NPostAside />
    <NProductAside />
    <FeatureBox />
  </div>
</template>
<script>
import FeatureBox from './FeatureBox';
import NProductAside from './NProductAside';
import NPostAside from './NPostAside';

export default {
  name: 'Asidebar',
  components: {
    FeatureBox,
    NProductAside,
    NPostAside
  }
}
</script>
