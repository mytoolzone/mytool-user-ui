import service from '@/utils/request'

// @Tags ToolPackage
// @Summary 创建ToolPackage
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.ToolPackage true "创建ToolPackage"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /toolPackage/createToolPackage [post]
export const createToolPackage = (data) => {
  return service({
    url: '/toolPackage/createToolPackage',
    method: 'post',
    data
  })
}

// @Tags ToolPackage
// @Summary 删除ToolPackage
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.ToolPackage true "删除ToolPackage"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /toolPackage/deleteToolPackage [delete]
export const deleteToolPackage = (data) => {
  return service({
    url: '/toolPackage/deleteToolPackage',
    method: 'delete',
    data
  })
}

// @Tags ToolPackage
// @Summary 删除ToolPackage
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除ToolPackage"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /toolPackage/deleteToolPackage [delete]
export const deleteToolPackageByIds = (data) => {
  return service({
    url: '/toolPackage/deleteToolPackageByIds',
    method: 'delete',
    data
  })
}

// @Tags ToolPackage
// @Summary 更新ToolPackage
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.ToolPackage true "更新ToolPackage"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /toolPackage/updateToolPackage [put]
export const updateToolPackage = (data) => {
  return service({
    url: '/toolPackage/updateToolPackage',
    method: 'put',
    data
  })
}

// @Tags ToolPackage
// @Summary 用id查询ToolPackage
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.ToolPackage true "用id查询ToolPackage"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /toolPackage/findToolPackage [get]
export const findToolPackage = (params) => {
  return service({
    url: '/toolPackage/findToolPackage',
    method: 'get',
    params
  })
}

// @Tags ToolPackage
// @Summary 分页获取ToolPackage列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取ToolPackage列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /toolPackage/getToolPackageList [get]
export const getToolPackageList = (params) => {
  return service({
    url: '/toolPackage/getToolPackageList',
    method: 'get',
    params
  })
}




// @Tags ToolPackage
// @Summary 用id查询ToolPackage
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.ToolPackage true "用id查询ToolPackage"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /toolPackage/findToolPackage [get]
export const findIndexToolPackage = (params) => {
  return service({
    url: '/toolPackage/findIndexToolPackage',
    method: 'get',
    params
  })
}