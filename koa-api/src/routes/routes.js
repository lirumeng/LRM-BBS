// 合并路由
import combineRouters from "koa-combine-routers";

import publicroutes from "./publicRouter";

export default combineRouters(publicroutes);