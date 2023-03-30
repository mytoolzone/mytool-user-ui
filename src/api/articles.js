import service from '@/utils/request'

// @Tags Articles
// @Summary 创建Articles
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Articles true "创建Articles"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /articles/createArticles [post]
export const createArticles = (data) => {
  return service({
    url: '/articles/createArticles',
    method: 'post',
    data
  })
}

// @Tags Articles
// @Summary 删除Articles
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Articles true "删除Articles"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /articles/deleteArticles [delete]
export const deleteArticles = (data) => {
  return service({
    url: '/articles/deleteArticles',
    method: 'delete',
    data
  })
}

// @Tags Articles
// @Summary 删除Articles
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除Articles"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /articles/deleteArticles [delete]
export const deleteArticlesByIds = (data) => {
  return service({
    url: '/articles/deleteArticlesByIds',
    method: 'delete',
    data
  })
}

// @Tags Articles
// @Summary 更新Articles
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.Articles true "更新Articles"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /articles/updateArticles [put]
export const updateArticles = (data) => {
  return service({
    url: '/articles/updateArticles',
    method: 'put',
    data
  })
}

// @Tags Articles
// @Summary 用id查询Articles
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.Articles true "用id查询Articles"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /articles/findArticles [get]
export const findArticles = (params) => {
  return service({
    url: '/articles/findArticles',
    method: 'get',
    params
  })
}

// @Tags Articles
// @Summary 分页获取Articles列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取Articles列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /articles/getArticlesList [get]
export const getArticlesList = (params) => {
  return service({
    url: '/articles/getArticlesList',
    method: 'get',
    params
  })
}
