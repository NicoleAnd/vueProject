  // 格式化学历
  export function formatEdu(education) {
    if (education == '0') {
      return '不限学历';
    } else if (education == '1') {
      return '大专学历';
    } else if (education == '2') {
      return '本科学历';
    } else if (education == '3') {
      return '硕士学历';
    } else if (education == '4') {
      return '博士学历';
    } else {
      return '不限学历';
    }
  }
//   //格式化工作经验
//   export function formatExperience(experience) {
//     if (experience == '0') {
//       return '不限经验';
//     } else if (experience == '1') {
//       return '1-3年经验';
//     } else if (experience == '2') {
//       return '3-5年经验';
//     } else if (experience == '3') {
//       return '5-10年经验';
//     } else if (experience == '4') {
//       return '10年以上';
//     } else {
//       return '不限经验';
//     }
//   }

//   //格式化性别
//   export function formatSex(sex) {
//     if (sex == '0') {
//       return '不限性别';
//     } else if (sex == '1') {
//       return '男';
//     } else if (sex == '2') {
//       return '女';
//     } else {
//       return '不限性别';
//     }
//   }



  export default {
    formatEdu,
    // formatExperience,
    // formatSex,
  }