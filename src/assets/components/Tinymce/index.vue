<template>
  <div :class="{fullscreen:fullscreen}" class="tinymce-container editor-container">
    <editor api-key="j58m3v4hgvdpel2jt3i5gvhjololzbp44adg0o0borpx160w" :init="initOptions" />
    <div class="editor-custom-btn-container">
      <editorImage color="#1890ff" class="editor-upload-btn"/>
    </div>
  </div>
</template>

<script>
import editorImage from './components/editorImage'
import plugins from './plugins'
import toolbar from './toolbar'
import editor from '@tinymce/tinymce-vue'

export default {
  name: 'Tinymce',
  components: { editorImage, editor },
  props: {
    id: {
      type: String,
      default: function() {
        return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
      }
    },
    value: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Array,
      required: false,
      default() {
        return []
      }
    },
    menubar: {
      type: String,
      default: 'file edit insert view format table'
    },
    height: {
      type: Number,
      required: false,
      default: 360
    }
  },
  data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false,
      languageTypeList: {
        'en': 'en',
        'zh': 'zh_CN'
      }
    }
  },
  computed: {
    initOptions () {
      let language = this.$store.getters.locale
      language = language.replace('-','_')
      return {
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        plugins,
        language,
        language_url: process.env.BASE_URL + 'tinymce/langs/'+language+'.js'
      }
    }
  }
}
</script>

<style scoped>
.tinymce-container {
  position: relative;
  line-height: normal;
}
.tinymce-container>>>.mce-fullscreen {
  z-index: 10000;
}
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
.editor-custom-btn-container {
  position: absolute;
  right: 4px;
  top: 4px;
  /*z-index: 2005;*/
}
.fullscreen .editor-custom-btn-container {
  z-index: 10000;
  position: fixed;
}
.editor-upload-btn {
  display: inline-block;
}
</style>
