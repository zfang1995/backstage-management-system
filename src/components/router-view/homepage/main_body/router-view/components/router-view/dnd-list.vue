<script>
import dndList from '@/assets/components/dndList'
import $store from '@/store'
// eslint-disable-next-line

export default {
  functional: true,
  render: function(createElement, context) {
    context.data.props = {
      list1: $store.getters.article('fetchList')
    }
    return createElement(
      dndList,
      context.data
    );
  }
};
</script>
