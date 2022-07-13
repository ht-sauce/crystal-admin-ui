import request from '@/utils/request'
import config from '@/store/config'
export function listStorage(query) {
  return request({
    url: '/storage/list',
    method: 'get',
    params: query,
  })
}

export function createStorage(data) {
  return request({
    url: '/storage/create',
    method: 'post',
    data,
  })
}

export function readStorage(data) {
  return request({
    url: '/storage/read',
    method: 'get',
    data,
  })
}

export function updateStorage(data) {
  return request({
    url: '/storage/update',
    method: 'post',
    data,
  })
}

export function deleteStorage(data) {
  return request({
    url: '/storage/delete',
    method: 'post',
    data,
  })
}

const uploadPath = config().apiUrl + '/storage/create'
export { uploadPath }
