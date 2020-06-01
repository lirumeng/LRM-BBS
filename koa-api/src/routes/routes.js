// 合并路由
import combineRouters from 'koa-combine-routers'

import publicroutes from './publicRouter'
import loginroutes from './loginRouter'

export default combineRouters(publicroutes, loginroutes)