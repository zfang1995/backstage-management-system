
<template>
  <!-- eslint-disable vue/require-component-is-->
  <component v-bind="linkProps(to, _slot, tag)">
    <slot/>
  </component>
</template>

<script>
import { isExternal } from '@/utils'

export default {
  props: {
    to: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'div'
    },
    _slot: {
      type: String,
      default: ''
    }
  },
  methods: {
    isExternalLink(routePath) {
      return isExternal(routePath)
    },
    linkProps(url, slot, tag) {
      if (this.isExternalLink(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener',
          slot
        }
      }
      else {
        return {
          is: 'router-link',
          to: url,
          slot,
          tag
        }
      }

    }
  }
}
</script>
