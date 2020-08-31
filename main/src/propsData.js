import test from '@/components/test'
import { testMain } from '@/utils'
export default {
  data: { common: 'test' }, // 公共数据
  components: [test], // 公共组件
  utils: { testMain } // 公共函数
}
