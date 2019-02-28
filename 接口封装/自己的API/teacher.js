import axios from './axios'

/**
 * 找老师列表内容
 * @param {*} pageNum 
 * @param {*} pageSize 
 */
export function getTecList(pageNum, pageSize) {
    const url = '/talent/selectComTalent';
    const data = {
        pageNum,
        pageSize
    };
    return axios.post(url, data);
}

/**
 * 查询个人信息
 * @param {*} userId 
 * @param {*} role 
 * @param {*} type 
 */
export function getTecDetail(userId, role, type) {
    const url = '/user/selectUserTalentByIdUser';
    const data = {
        userId,
        role,
        type
    }
    return axios.post(url, data);
}

/**
 * 查询老师逃单率
 * @param {*} userId 
 * @param {*} role 
 */
export function getTecPermissions(userId, role) {
    const url = '/taskrelease/selectUnfaith';
    const data = {
        userId,
        role
    };
    return axios.post(url, data);
}

// function getBad() {
//     return axios.post('http://192.168.108.75:9011/user/selectUserTalentByIdUser', params5, {
//       headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//     });
//   }

/**
 * 评价
 * @param {*} userId 
 * @param {*} role 
 * @param {*} type 
 */
export function getTecEvaluation(userId, role, type) {
    const url = '/user/selectUserTalentByIdUser';
    const data = {
        userId,
        role,
        type
    };
    return axios.post(url, data);
}