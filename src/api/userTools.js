import service from '@/utils/request'

// @Tags UserTools
// @Summary 创建UserTools
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.UserTools true "创建UserTools"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /userTools/createUserTools [post]
export const createUserTools = (data) => {
  return service({
    url: '/userTools/createUserTools',
    method: 'post',
    data
  })
}

// @Tags UserTools
// @Summary 删除UserTools
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.UserTools true "删除UserTools"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /userTools/deleteUserTools [delete]
export const deleteUserTools = (data) => {
  return service({
    url: '/userTools/deleteUserTools',
    method: 'delete',
    data
  })
}

// @Tags UserTools
// @Summary 删除UserTools
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除UserTools"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /userTools/deleteUserTools [delete]
export const deleteUserToolsByIds = (data) => {
  return service({
    url: '/userTools/deleteUserToolsByIds',
    method: 'delete',
    data
  })
}

// @Tags UserTools
// @Summary 更新UserTools
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.UserTools true "更新UserTools"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /userTools/updateUserTools [put]
export const updateUserTools = (data) => {
  return service({
    url: '/userTools/updateUserTools',
    method: 'put',
    data
  })
}

// @Tags UserTools
// @Summary 用id查询UserTools
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.UserTools true "用id查询UserTools"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /userTools/findUserTools [get]
export const findUserTools = (params) => {
  return service({
    url: '/userTools/findUserTools',
    method: 'get',
    params
  })
}

// @Tags UserTools
// @Summary 分页获取UserTools列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取UserTools列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /userTools/getUserToolsList [get]
export const getUserToolsList = (params) => {
  return service({
    url: '/userTools/getUserToolsList',
    method: 'get',
    params
  })
}
