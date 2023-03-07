import service from '@/utils/request'

// @Tags Tools
// @Summary 创建Tools
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Tools true "创建Tools"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /tools/createTools [post]
export const createTools = (data) => {
  return service({
    url: '/tools/createTools',
    method: 'post',
    data
  })
}

// @Tags Tools
// @Summary 删除Tools
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Tools true "删除Tools"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /tools/deleteTools [delete]
export const deleteTools = (data) => {
  return service({
    url: '/tools/deleteTools',
    method: 'delete',
    data
  })
}

// @Tags Tools
// @Summary 删除Tools
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除Tools"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /tools/deleteTools [delete]
export const deleteToolsByIds = (data) => {
  return service({
    url: '/tools/deleteToolsByIds',
    method: 'delete',
    data
  })
}

// @Tags Tools
// @Summary 更新Tools
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Tools true "更新Tools"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /tools/updateTools [put]
export const updateTools = (data) => {
  return service({
    url: '/tools/updateTools',
    method: 'put',
    data
  })
}

// @Tags Tools
// @Summary 用id查询Tools
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Tools true "用id查询Tools"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /tools/findTools [get]
export const findTools = (params) => {
  return service({
    url: '/tools/findTools',
    method: 'get',
    params
  })
}

// @Tags Tools
// @Summary 分页获取Tools列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取Tools列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /tools/getToolsList [get]
export const getToolsList = (params) => {
  return service({
    url: '/tools/getToolsList',
    method: 'get',
    params
  })
}
