/*
请求接口函数
*/
import ajax from "./ajax";

// export const BASE_URL = "http://192.168.108.88:9001";
// export const File_URL = "http://www.ebring.com.cn:9081";
export const File_URL = "http://www.zhiyuantianbao.cn";

export const BASE_URL = "http://www.zhiyuantianbao.cn:9001";
// export const BASE_URL = "http://www.ebring.com.cn:9002";
// export const BASE_URL = "http://192.168.108.88:9001";
/**
 * 用户登录接口
 */
export const reqLogin = (account, password) =>
  ajax(BASE_URL + "/api-admin/user/login", {
    account,
    password
  }, "POST");

/**
 * 获取年份接口
 */
export const reqYear = (token) =>
  ajax(BASE_URL + "/api-admin/user/getYear", {
    token
  });

/**
 * 获取年级信息
 */
export const reqGrade = (token) =>
  ajax(BASE_URL + "/api-admin/gcs/getGradeInfo", {
    token
  });

/**
 * 获取班级信息
 */
export const reqClass = (token, gradeId) =>
  ajax(BASE_URL + "/api-admin/gcs/getClassByGradeId", {
    token,
    gradeId
  });

/**
 * 查询幼儿信息
 */
export const reqChildInfo = (token, gradeId, classId, status, year, pageSize, pageNum, stuName) =>
  ajax(BASE_URL + "/api-admin/user/list", {
    token,
    gradeId,
    classId,
    status,
    year,
    pageSize,
    pageNum,
    stuName
  });

/**
 * 查询单个幼儿信息
 */
export const reqSelectById = (token, stuId) =>
  ajax(BASE_URL + "/api-admin/user/selectById", {
    token,
    stuId
  });

/**
 * 删除幼儿信息
 */
export const reqDelete = (token, id) =>
  ajax(BASE_URL + "/api-admin/user/delete", {
    token,
    id
  }, "POST");

/**
 * 升班
 */
export const reqUpgrade = (token, gradeId, classId, addGradeId, addClassId) =>
  ajax(BASE_URL + "/api-admin/gcs/upgrade", {
    token,
    gradeId,
    classId,
    addGradeId,
    addClassId
  });

/**
 * 获取体检详情
 */
export const reqHealth = (token, gradeId, classId, userNo, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-admin/health/list", {
    token,
    gradeId,
    classId,
    userNo,
    pageSize,
    pageNum
  });

// 查询当日课程列表
export const getCourseList = (token, date, gradeId, classId) =>
  ajax(BASE_URL + "/api-admin/teaching/getTeaching", {
    token,
    date,
    gradeId,
    classId
  });

// 查询当日课程列表

// 获取园区风采
export const reqSchoolAppearance = (token, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-admin/schoolMien/getSchoolMienBySchoolId", {
    token,
    pageSize,
    pageNum
  });
//删除园区风采
export const delSchoolAppearance = (token, schoolMienId) =>
  ajax(BASE_URL + "/api-admin/schoolMien/deleteSchoolMien", {
    token,
    schoolMienId
  }, 'POST');

//获取园区风采详情
export const reqAppearanceDetail = (token, schoolMienId) =>
  ajax(BASE_URL + "/api-admin/schoolMien/selectByschoolMienId", {
    token,
    schoolMienId
  });
// 获取活动列表
export const getActivityList = (token, pageNum, pageSize) =>
  ajax(BASE_URL + "/api-admin/activity/list", {
    token,
    pageNum,
    pageSize
  });
//   获取活动列表带参数classsId/gradeId
// export const getActivityList_param = (token,gradeId,classId, pageNum, pageSize) =>
//   ajax(BASE_URL + "/api-admin/activity/list", {
//     token,
//     gradeId,
//     classId,
//     pageNum,
//     pageSize
//   });


/**
 * 获取升级年级
 */
export const reqGetClass = (token, gradeId) =>
  ajax(BASE_URL + "/api-admin/gcs/class", {
    token,
    gradeId
  });

/**
 * 毕业
 */
export const reqGraduation = (token, gradeId) =>
  ajax(BASE_URL + "/api-admin/gcs/graduation", {
    token,
    gradeId
  });

/**
 * 离退
 */
export const reqRetreat = (token, userId) =>
  ajax(BASE_URL + "/api-admin/gcs/retreat", {
    token,
    userId
  });

/**
 * 履历
 */
export const reqFindById = (token, stuNo) =>
  ajax(BASE_URL + "/api-admin/childRecord/findById", {
    token,
    stuNo
  });

/**
 * 幼儿考勤
 */
export const reqAttendanceById = (token, childId, stime) =>
  ajax(BASE_URL + "/api-admin/childPunch/findById", {
    token,
    childId,
    stime
  });

// 幼儿考勤查询
export const childrenPunchFindAll = (token, time, userName, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-admin/childrenPunch/findAll", {
    token,
    time,
    userName,
    pageSize,
    pageNum
  });

// 幼儿考勤导入
export const batchImport = (token, excelFile) =>
  ajax(BASE_URL + "/api-admin/childrenPunch/batchImport", {
    token,
    excelFile,
  }, "POST");


/**
 * 考勤记录
 */
export const reqResult = (token, gradeId, classId, childId, startTime, endTime, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-admin/childPunch/getResult", {
    token,
    gradeId,
    classId,
    childId,
    startTime,
    endTime,
    pageSize,
    pageNum
  });

/**
 * 考勤记录
 */

// export const getPunchReordAll = (token,date)=>
//   ajax(BASE_URL + "/api-admin/punchRecord/getPunchReordAll", {
//     token,
//     date
//   });
export const getPunchReordAll = (token, date, pageSize, pageNum) =>
  ajax(BASE_URL + '/api-admin/punchRecord/getPunchReordAll', {
    token,
    date,
    pageSize,
    pageNum
  });

/**
 * 查询单个学生家长档案
 */
export const reqSelectByStuId = (token, stuId) =>
  ajax(BASE_URL + '/api-admin/parentInfo/selectByStuId', {
    token,
    stuId
  });

export const reqListCostCount = (token, type, cycle) =>
  ajax(BASE_URL + "/api-cost/costCount/listCostCount", {
    token,
    type,
    cycle
  }, "POST");

/**
 * 添加考勤规则
 */
export const reqInsertPunchRole = (token, amTime, pmTime) =>
  ajax(BASE_URL + "/api-admin/childPunchRole/add", {
    token,
    amTime,
    pmTime
  }, "POST");

/**
 * 获取考勤规则
 */
export const reqGetPunchRole = (token) =>
  ajax(BASE_URL + "/api-admin/childPunchRole/list", {
    token
  });

// 设置活动是否过期
export const overdueActivity = (token, id) =>
  ajax(BASE_URL + "/api-admin/activity/delete/", {
    token,
    id
  }, 'POST');

/**
 * 获取所有班级信息
 */
export const reqAllClass = (gradeId, token, pageSize, pageNum, ) =>
  ajax(BASE_URL + "/api-admin/class/finAllClass", {
    gradeId,
    token,
    pageSize,
    pageNum,
  }, "POST");

/**
 * 教务添加班级
 */
export const reqAddClass = (token, gradeId, classState, className) =>
  ajax(BASE_URL + "/api-admin/class/addClass", {
    token,
    gradeId,
    classState,
    className
  }, "POST");

/**
 * 教务删除班级
 */
export const reqDeleteClass = (token, classId) =>
  ajax(BASE_URL + "/api-admin/class/removeClass", {
    token,
    classId,
  }, "POST");

/**
 * 教务修改班级
 */
export const reqUpdateClass = (className, classId, classState, gradeId, token) =>
  ajax(BASE_URL + "/api-admin/class/modifyClass", {
    className,
    classId,
    classState,
    gradeId,
    token,
  }, "POST");

/**
 * 教务查询单个班级
 */
export const reqSelectClassById = (token, classId) =>
  ajax(BASE_URL + "/api-admin/class/findClassById", {
    token,
    classId,
  }, "POST");

/**

 /**
 * 删除园所通知
 */
export const deleteSchoolInform = (token, schoolNoticeId, ) =>
  ajax(BASE_URL + "/api-admin/schoolNotice/removeSchoolNotice", {
    token,
    schoolNoticeId,
  }, "POST");
/**
 * 修改园所通知
 */
export const updateSchoolInform = (title, content, grade, status, schoolNoticeId, token) =>
  ajax(BASE_URL + "/api-admin/schoolNotice/modifySchoolNotice", {
    title,
    content,
    grade,
    status,
    schoolNoticeId,
    token,
  }, "POST");
/**
 * 查询单个园所通知
 */
export const SelectSchoolInformById = (schoolNoticeId, token) =>
  ajax(BASE_URL + "/api-admin/schoolNotice/findSchoolNoticeById", {
    schoolNoticeId,
    token,
  }, "POST");
/**
 * 查询所有园所通知
 */
export const SelectSchoolInform = (token, pageSize, pageNum, title) =>
  ajax(BASE_URL + "/api-admin/schoolNotice/findAllSchoolNotice", {
    token,
    pageSize,
    pageNum,
    title
  }, "POST");
//获取饮食
export const getDiet = (week, dietType, token) =>
  ajax(BASE_URL + "/api-admin/diet/select", {
    week,
    dietType,
    token
  });
// //获取活动作品
// export const getProduction = (activityNo, pageSize, pageNum) =>
//   ajax("/api-admin/production/selectProductionById", {
//     activityNo,
//     pageSize,
//     pageNum
//   });
//获取意见列表
export const getSuggestion = (adviceId, replayTime, createTime, token, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-admin/suggestionBox/findSuggestion", {
    adviceId,
    replayTime,
    createTime,
    token,
    pageSize,
    pageNum
  }, 'POST');
//提交对意见回复
export const replaySuggestion = (adviceId, token, replyOption) =>
  ajax(BASE_URL + "/api-admin/suggestionBox/replaySuggestionBox", {
    adviceId,
    token,
    replyOption
  }, 'POST');
//删除意见
export const deleteSuggestions = (ids, createTime, token) =>
  ajax(BASE_URL + "/api-admin/suggestionBox/removeSuggestionBoxOption", {
    ids,
    createTime,
    token
  }, 'POST');
//获取视频类型
export const getVideoType = (token) =>
  ajax(BASE_URL + "/api-video/videoType/getVideoType", {
    token
  });
//获取优秀课例
export const getExcellentLesson = (pageNum, pageSize, videoTypeId, gradeId, colum, order, token) =>
  ajax(BASE_URL + "/api-video/video/getVideo", {
    pageNum,
    pageSize,
    videoTypeId,
    gradeId,
    colum,
    order,
    token
  });

/**
 * 教务查询教师信息
 */
export const getTeacherInfo = (pageSize, pageNum, token, userName, userId, dutyId, status) =>
  ajax(BASE_URL + "/api-admin/teacher/list", {
    pageSize,
    pageNum,
    token,
    userName,
    userId,
    dutyId,
    status
  });
/**
 * 教务教务查询单个教师信息
 */
export const getTeacherInfoById = (token, userId) =>
  ajax(BASE_URL + "/api-admin/teacher/selectOne", {
    token,
    userId,
  });
/**
 * 教务删除教师信息
 */
export const getDeleteTeacherInfo = (token, userId) =>
  ajax(BASE_URL + "/api-admin/teacher/delete", {
    token,
    userId,
  });
/**
 * 查询职务
 */
export const getDutyList = (token) =>
  ajax(BASE_URL + "/api-admin/duty/list", {
    token,
  });
/**
 * 教务查询老师考勤
 */
export const getTeacherChecking = (token, date, pageSize, pageNum, userId) =>
  ajax(BASE_URL + "/api-admin/punchRecord/getPunchReordByDate", {
    token,
    date,
    pageSize,
    pageNum,
    userId,
  });

/**
 * 添加考勤规则
 */
export const setPunchRule = (token, amTime, pmTime, province, city, district, street, streetNum) =>
  ajax(BASE_URL + "/api-admin/punchRule/setPunchRule", {
    token,
    amTime,
    pmTime,
    province,
    city,
    district,
    street,
    streetNum
  }, "POST");

/**
 * 获取考勤规则
 */
export const getPunchRule = (token) =>
  ajax(BASE_URL + "/api-admin/punchRule/getPunchRule", {
    token
  });

/**
 * 教务查询老师带班
 */
export const getTeacherClass = (token, pageSize, pageNum, teacherId, userName, gradeId, classId, dutyId) =>
  ajax(BASE_URL + "/api-admin/teacherClass/list", {
    token,
    pageSize,
    pageNum,
    teacherId,
    userName,
    gradeId,
    classId,
    dutyId
  });
/*
  查询教师带班记录(信息回显)
*/

export const getTeacherClassFindById = (token, teacherClassId) =>
  ajax(BASE_URL + "/api-admin/teacherClass/findById", {
    token,
    teacherClassId
  });


/**
 * 所有未带班教师
 */

// export const getSelectTeachers = (token)=>
//   ajax(BASE_URL + "/api-admin/teacher/selectTeachers",{token})


/**
 * 代课老师
 */
export const getSubstituteTeachers = (token) =>
  ajax(BASE_URL + "/api-admin/teacher/substituteTeachers", {
    token
  });


/**
 * 生活老师
 */
export const getFifeTeachers = (token) =>
  ajax(BASE_URL + "/api-admin/teacher/lifeTeachers", {
    token
  });

/**
 * 班主任
 */
export const getClassTeachers = (token) =>
  ajax(BASE_URL + "/api-admin/teacher/classTeachers", {
    token
  });


/**
 * 更新教师带班
 */
export const getTeacherClassUpdate = (token, teacherClassId, classTeacherId, lifeTeacherId, substituteTeacherId) =>
  ajax(BASE_URL + "/api-admin/teacherClass/update", {
    token,
    teacherClassId,
    classTeacherId,
    lifeTeacherId,
    substituteTeacherId
  }, "POST");

/**
 * 查询所有请假信息
 */
export const getLeaveApplyBySchoolId = (token, pageNum, pageSize, leaveTypeId, leaveStatus, beginTime) =>
  ajax(BASE_URL + "/api-admin/leave/getLeaveApplyBySchoolId", {
    // ajax(BASE_URL + "/api-admin/teacher/list",{
    token,
    pageNum,
    pageSize,
    leaveTypeId,
    leaveStatus,
    beginTime
  });

/*
 *获取请假类型
 */
export const getLeaveType = (token) =>
  ajax(BASE_URL + "/api-admin/leaveType/getLeaveType", {
    token
  });

/*
 *获取意见
 */
export const setUpdateLeaveApply = (token, leaveId, leaveStatus) =>
  ajax(BASE_URL + "/api-admin/leave/updateLeaveApply", {
    token,
    leaveId,
    leaveStatus
  }, "POST");


export const reqDedectSelect = (token, gradeId, classId, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-cost/deduct/select", {
    token,
    gradeId,
    classId,
    pageSize,
    pageNum
  });

/**
 * 扣款
 */
export const reqSelectDeduct = (token, id) =>
  ajax(BASE_URL + "/api-cost/deduct/selectDeduct", {
    token,
    id
  }, "POST");

/**
 * 查询退款列表
 */
export const reqSelectRefund = (token, gradeId, classId, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-cost/back/select", {
    token,
    gradeId,
    classId,
    pageSize,
    pageNum
  });

/**
 * 退款
 */
export const reqBackRefund = (token, id) =>
  ajax(BASE_URL + "/api-cost/back/refund", {
    token,
    id
  });

/**
 * 查询所有用户费用清单
 */
export const reqMoneyList = (token, userId, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-cost/user/money/selectList", {
    token,
    userId,
    pageSize,
    pageNum
  });

/**
 * 查询费用参数列表
 */
export const reqCostParameterList = (token, gradeId, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-cost/costParameter/list", {
    token,
    gradeId,
    pageSize,
    pageNum
  });

/**
 * 删除费用参数
 */
export const reqCostParameterDel = (token, parameterId) =>
  ajax(BASE_URL + "/api-cost/costParameter/deleteCostParameter", {
    token,
    parameterId
  }, "POST");

/**
 * 添加费用参数
 */
export const reqAddCostParameter = (token, parameterName, unitMoney, gradeId) =>
  ajax(BASE_URL + "/api-cost/costParameter/addCoatParameter", {
    token,
    parameterName,
    unitMoney,
    gradeId
  }, "POST");

/**
 * 修改费用参数
 */
export const reqUpdateCostParameter = (token, parameterId, unitMoney, gradeId, type) =>
  ajax(BASE_URL + "/api-cost/costParameter/updateCoatParameter", {
    token,
    parameterId,
    unitMoney,
    gradeId,
    type
  }, "POST");

/**
 * 查询套餐列表
 */
export const reqCostSetParameter = (token, gradeId, state, startDate, endDate, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-cost/costSetParameter/list", {
    token,
    gradeId,
    state,
    startDate,
    endDate,
    pageSize,
    pageNum
  });

/**
 * 删除套餐接口
 */
export const reqDeleteCostSetParameter = (token, parameterSetId) =>
  ajax(BASE_URL + "/api-cost/costSetParameter/deleteCostSetParameter", {
    token,
    parameterSetId
  }, "POST");

/**
 * 添加套餐
 */
export const reqAddCostSetParameter = (token, parameterSetName, originalPrice, preferentialPrice, minSize, endDate, parameterSetDescription, ids, gradeId) =>
  ajax(BASE_URL + "/api-cost/costSetParameter/addCostSetParameter", {
    token,
    parameterSetName,
    originalPrice,
    preferentialPrice,
    minSize,
    endDate,
    parameterSetDescription,
    ids,
    gradeId
  }, "POST");

/**
 * 获取缴费凭证
 */
export const reqSelectOne = (token, id) =>
  ajax(BASE_URL + "/api-cost/user/money/selectOne", {
    token,
    id
  });

//工资管理模块

// 获取参数树形列表
export const reqSalaryCode = (token) =>
  ajax(BASE_URL + "/api-admin/salaryCode/findAllSalaryCode", {
    token
  }, 'POST');

//查看树形的工资钱数
export const reqSalaryMoney = (token, salaryCodeId) =>
  ajax(BASE_URL + "/api-admin/salaryParam/findSalaryMoney", {
    token,
    salaryCodeId
  }, 'POST');

//修改工资
export const reqEditSalary = (token, salaryThirdType, salaryTypeMoney) =>
  ajax(BASE_URL + "/api-admin/salaryParam/modifySalaryParam", {
    token,
    salaryThirdType,
    salaryTypeMoney
  }, 'POST');

// 获取所有工资参数
export const reqAllSalaryParams = (token, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-admin/salaryParam/findSalary", {
    token,
    pageSize,
    pageNum
  }, 'POST');


//获取工资列表
export const teacherSalaryList = (pageSize, pageNum, token, userId, userName, month, gradeId) =>
  ajax(BASE_URL + "/api-admin/teacherSalary/list", {
    pageSize,
    pageNum,
    token,
    userId,
    userName,
    month,
    gradeId
  });

// 修改工资加减项
export const updateSalary = (token, addItem, reductionItem, salaryId) =>
  ajax(BASE_URL + "/api-admin/salary/updateSalary", {
    token,
    addItem,
    reductionItem,
    salaryId
  }, 'POST');

//教师附件下载
export const reqDownFile = (token, fileName) =>
  ajax(BASE_URL + "/api-admin/teacher/downResume", {
    token,
    fileName
  });

export const selectTeacherDuty = (token) =>
  ajax(BASE_URL + "/api-admin/duty/selectTeacherDuty", {
    token,
  });

//获取角色
export const getRole = (token) =>
  ajax(BASE_URL + "/api-admin/role/getRole", {
    token
  });

// 查询教师职务-给教师分配角色
export const selectByRoleId = (token, roleId) =>
  ajax(BASE_URL + "/api-admin/duty/selectByRoleId", {
    token,
    roleId
  });

//添加用户
export const insertUser = (token, userName, account, phone, password, roleId, idCard, address, dutyId) =>
  ajax(BASE_URL + "/api-admin/user/insert", {
    token,
    userName,
    account,
    phone,
    password,
    roleId,
    idCard,
    address,
    dutyId
  }, "POST");

//获取用户列表
export const getUserList = (token, roleIds) =>
  ajax(BASE_URL + "/api-admin/user/getUserByRoleId", {
    token,
    roleIds
  });

//获取学校列表
export const getSchoolList = (token) =>
  ajax(BASE_URL + "/api-admin/school/getSchoolAll", {
    token
  });

//添加学校
export const insertSchool = (token, schoolName, tel, person, address, account) =>
  ajax(BASE_URL + "/api-admin/school/insertSchool", {
    token,
    schoolName,
    tel,
    person,
    address,
    account
  }, "POST");


export const getTrack = (token, userNo) =>
  ajax(BASE_URL + "/api-admin/growthFiles/getGrowthFileByUserNo", {
    token,
    userNo
  });

export const insertTarck = (userNo, height, weight, growthRecord, token) =>
  ajax(BASE_URL + "/api-admin/growthFiles/addGrowthFile", {
    userNo,
    height,
    weight,
    growthRecord,
    token
  }, "POST");

// 修改密码
export const updatePwd = (token, newPwd, oldPwd) =>
  ajax(BASE_URL + "/api-admin/user/updatePwd", {
    token,
    newPwd,
    oldPwd
  }, "POST");

export const costList = (token, gradeId, classId, payType, type, startTime, endTime, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-cost/cost/order/list", {
    token,
    gradeId,
    classId,
    payType,
    type,
    startTime,
    endTime,
    pageSize,
    pageNum
  }, "POST");

// 重置密码
export const restPwd = (token, account) =>
  ajax(BASE_URL + "/api-admin/user/restPwd", {
    token,
    account
  }, "POST");

export const insertDebitNote = (token, title) =>
  ajax(BASE_URL + "/api-admin/costNotice/insert", {
    token,
    title
  }, "POST");

export const getCostNoticeList = (token, createDate, title, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-admin/costNotice/list", {
    token,
    createDate,
    title,
    pageSize,
    pageNum
  });

export const getCostRecordList = (token, payType, gradeId, classId, beginDate, endDate, pageSize, pageNum, userName, status) =>
  ajax(BASE_URL + "/api-admin/costRecord/list", {
    token,
    payType,
    gradeId,
    classId,
    beginDate,
    endDate,
    pageSize,
    pageNum,
    userName,
    status
  });

// 缴费统计
export const getCostCount = (token, cycle) =>
  ajax(BASE_URL + "/api-admin/costRecord/costCount", {
    token,
    cycle
  });

export const getCostReturnList = (token, studentId, cycle, status, gradeId, classId, pageSize, pageNum) =>
  ajax(BASE_URL + "/api-admin/costReturn/list", {
    token,
    studentId,
    cycle,
    status,
    gradeId,
    classId,
    pageSize,
    pageNum
  });

export const getOtherUserList = (token, userName, userId, dutyId, status, pageSize, pageNum) =>
  ajax(BASE_URL + '/api-admin/otherUser/list', {
    token,
    userName,
    userId,
    dutyId,
    status,
    pageSize,
    pageNum
  });

export const selectOtherUserDuty = (token) =>
  ajax(BASE_URL + '/api-admin/duty/selectOtherUserDuty', {
    token
  });

export const otherUserInsert = (token, userName, idCard, address, nativePlace, phone, workingYear, about, dutyId) =>
  ajax(BASE_URL + '/api-admin/otherUser/insert', {
    token,
    userName,
    idCard,
    address,
    nativePlace,
    phone,
    workingYear,
    about,
    dutyId
  }, 'POST');

export const getGradeLeaderList = (token, pageSize, pageNum) =>
  ajax(BASE_URL + '/api-admin/gradeLeader/list', {
    token,
    pageSize,
    pageNum
  });

export const getGradeLeaderById = (token, id) =>
  ajax(BASE_URL + '/api-admin/gradeLeader/selectById', {
    token,
    id
  });

export const selectGradeLeader = (token) =>
  ajax(BASE_URL + '/api-admin/gradeLeader/selectGradeLeader', {
    token
  });

export const selectChildCareLeader = (token) =>
  ajax(BASE_URL + '/api-admin/gradeLeader/selectChildCareLeader', {
    token
  });

export const updateGradeLeader = (token, id, gradeId, gradeLeaderId, childCareLeaderId, schoolId) =>
  ajax(BASE_URL + '/api-admin/gradeLeader/update', {
    token,
    id,
    gradeId,
    gradeLeaderId,
    childCareLeaderId,
    schoolId
  }, 'POST');

export const getPunchDateList = (token) =>
  ajax(BASE_URL + '/api-admin/punchDate/list', {
    token
  });

export const getTeacherSalaryParameterList = (token) =>
  ajax(BASE_URL + '/api-admin/teacherSalaryParameter/list', {
    token
  });
