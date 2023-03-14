import service from '@/utils/request'

// @Tags UserCmds
// @Summary 创建UserCmds
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.UserCmds true "创建UserCmds"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /userCmds/createUserCmds [post]
export const createUserCmds = (data) => {
  return service({
    url: '/userCmds/createUserCmds',
    method: 'post',
    data
  })
}

// @Tags UserCmds
// @Summary 删除UserCmds
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.UserCmds true "删除UserCmds"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /userCmds/deleteUserCmds [delete]
export const deleteUserCmds = (data) => {
  return service({
    url: '/userCmds/deleteUserCmds',
    method: 'delete',
    data
  })
}

// @Tags UserCmds
// @Summary 删除UserCmds
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除UserCmds"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /userCmds/deleteUserCmds [delete]
export const deleteUserCmdsByIds = (data) => {
  return service({
    url: '/userCmds/deleteUserCmdsByIds',
    method: 'delete',
    data
  })
}

// @Tags UserCmds
// @Summary 更新UserCmds
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.UserCmds true "更新UserCmds"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /userCmds/updateUserCmds [put]
export const updateUserCmds = (data) => {
  return service({
    url: '/userCmds/updateUserCmds',
    method: 'put',
    data
  })
}

// @Tags UserCmds
// @Summary 用id查询UserCmds
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.UserCmds true "用id查询UserCmds"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /userCmds/findUserCmds [get]
export const findUserCmds = (params) => {
  return service({
    url: '/userCmds/findUserCmds',
    method: 'get',
    params
  })
}

// @Tags UserCmds
// @Summary 分页获取UserCmds列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取UserCmds列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /userCmds/getUserCmdsList [get]
export const getUserCmdsList = (params) => {
  return service({
    url: '/userCmds/getUserCmdsList',
    method: 'get',
    params
  })
}
