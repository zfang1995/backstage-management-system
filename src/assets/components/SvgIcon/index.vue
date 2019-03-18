
<script>
export default {
  name: 'SvgIcon',
  props: {
    type: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    svg: {
      type: Function,
      required: true
    }
  },
  render (h) {
    h
    let svgContent = h(this.$props.svg).children[0]
    return <svg class={this.svgClass} preserveAspectRatio="xMidYMid meet" viewbox="0 0 36 36" x="0" y="0">
      {svgContent}
    </svg>
  },
  computed: {
    iconName() {
      return `icon-${this.type}`
    },
    svgClass() {
      if (this.className) {
        return 'anticon ' + this.className
      } else {
        return 'anticon'
      }
    }
  }
}
</script>

<style>
.anticon {
  height: 1em;
  width: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
path {
  height: 1em;
  width: 1em;
}

</style>
