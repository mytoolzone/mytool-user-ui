import service from '@/utils/request'

// @Tags Comments
// @Summary 创建Comments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Comments true "创建Comments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /tools/createComments [post]
export const createComments = (data) => {
  return service({
    url: '/comments/createComments',
    method: 'post',
    data
  })
}

// @Tags Comments
// @Summary 删除Comments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Comments true "删除Comments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /comments/deleteComments [delete]
export const deleteComments = (data) => {
  return service({
    url: '/comments/deleteComments',
    method: 'delete',
    data
  })
}

// @Tags Comments
// @Summary 删除Comments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除Comments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /tools/deleteComments [delete]
export const deleteCommentsByIds = (data) => {
  return service({
    url: '/comments/deleteCommentsByIds',
    method: 'delete',
    data
  })
}

// @Tags Comments
// @Summary 更新Comments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Comments true "更新Comments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /tools/updateComments [put]
export const updateComments = (data) => {
  return service({
    url: '/comments/updateComments',
    method: 'put',
    data
  })
}

// @Tags Comments
// @Summary 用id查询Comments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Comments true "用id查询Comments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /tools/findComments [get]
export const findComments = (params) => {
  return service({
    url: '/comments/findComments',
    method: 'get',
    params
  })
}

// @Tags Comments
// @Summary 分页获取Comments列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取Comments列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /comments/getCommentsList [get]
export const getCommentsList = (params) => {
  return service({
    url: '/comments/getCommentsList',
    method: 'get',
    params
  })
}

// @Tags Comments
// @Summary 创建Comments
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Comments true "创建Comments"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /comments/createComments [post]
export const createIndexComment = (data) => {
  data.userId = 0
  data.upNum = 0
  data.target_id =0 
  data.target_type = 'website'
  return service({
    url: '/comments/createIndexComment', 
    method: 'post',
    data
  })
}