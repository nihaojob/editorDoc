// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Sponsor from './Sponsor.vue'

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: Sponsor
}