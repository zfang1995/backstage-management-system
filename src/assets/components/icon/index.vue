
<script>
import iconFont from '../iconFont'
import svgIcon from '../svgIcon'
import svgs from '@/assets/icons/svg'

  export default {
    functional: true,
    render (h, context) {
      const type = context.data.props.type;
      let component, slotContent;
      if (svgs.hasOwnProperty(type)) {
        component = svgIcon
        context.children.push(svgs[type])
      } else {
        component = iconFont
      }
      return h(component, context.data, context.children)
    }
  }
</script>

