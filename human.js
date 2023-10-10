
export const QuotaionData = [
  //화장품 - 자극/사용성 (안전성)
  {
    type: '화장품',
    mainCategory: '자극/사용성(안전성)',
    middleCategory: '일차자극 평가시험',
    subCategory: '3일',
    detailCategory: '',
    subject: 20,
    price: 0,
    desc: `
- 1~10종 25만원.
- 11종~20종 20만원.
- 21종~30종 18만원
`,
    addition: {
    option1: { price: 12500, quantity: 0, name :'1-10종'},  
    option2: { price: 10000, quantity: 0, name :'11-20종'},  
    option3: { price: 9000, quantity: 0, name :'21-30종'},  
    },
    fixedOption: {
      optionENG : {price : 100000, quantity :1, name:'영문 보고서 단독 진행(부가세 별도)', times : 0},
      optionENG2 : {price : 50000, quantity :1, name:'영문 보고서 유효성 포함 진행(부가세 별도)', times : 0},
      optionCN : {price : 200000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    }
  },
  {
    type: '화장품',
    mainCategory: '자극/사용성(안전성)',
    middleCategory: '민감성 일차자극 평가시험',
    subCategory: '3일',
    detailCategory: '',
    subject: 20,
    price: 0,
    desc: `
- 1-3종 70만원.
- 4종~6종 60만원.
- 7~10종 45만원.
*코스맥스 1종 80만원
`,
    addition: {
    option1: { price: 35000, quantity: 0, name :'1-3종'},  
    option2: { price: 30000, quantity: 0, name :'4-6종'},  
    option3: { price: 22500, quantity: 0, name :'7~10종'},  
    option4: { price: 40000, quantity: 0, name :'코스맥스 1종'},  
    },
    fixedOption: {
      optionENG : {price : 200000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 200000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    }
  },
  {
    type: '화장품',
    mainCategory: '자극/사용성(안전성)',
    middleCategory: '자극감 평가시험',
    subCategory: '1회',
    detailCategory: '',
    subject: 20,
    price: 150000,
    desc: `
- 민감성 패널 또는 피부, 1주
`,
    addition: {

    },
    fixedOption: {
      optionENG : {price : 200000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 200000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    }
  },
  {
    type: '화장품',
    mainCategory: '자극/사용성(안전성)',
    middleCategory: '사용성 평가시험',
    subCategory: '2 point',
    detailCategory: '',
    subject: 20,
    price: 250000,
    desc: `
- 기본 설문 문항 10항목.
- 5항목 추가 시 50만원 추가비용 발생
`,
    addition: {
      option1: { price: 25000, quantity: 0, name :'설문문항 5개추가'}, 
    },
    fixedOption: {
      optionENG : {price : 200000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 200000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 500000, quantity: 1, name :'설문문항 5개추가'},
    }
  },
  {
    type: '화장품',
    mainCategory: '자극/사용성(안전성)',
    middleCategory: '누적자극 및 감작성',
    subCategory: '6주',
    detailCategory: '',
    subject: 20,
    price: 0,
    desc: `
- 단독 진행 시 기본 1종 3,500만원
`,
    addition: {
      option1: { price: 1750000, quantity: 0, name :'단독진행 기본'}, 
      option2: { price: 450000, quantity: 0, name :'타사진행 1종'}, 
      option3: { price: 400000, quantity: 0, name :'타사진행 2-5종'}, 
      option4: { price: 300000, quantity: 0, name :'타사진행 6-9종'}, 
      option5: { price: 250000, quantity: 0, name :'타사진행 10-12종'}, 
    },
    fixedOption: {
      optionENG : {price : 200000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 200000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 500000, quantity: 1, name :'설문문항 5개추가'},
    }
  },
  {
    type: '화장품',
    mainCategory: '자극/사용성(안전성)',
    middleCategory: '두피 일차자극 평가시험',
    subCategory: '3일(24시간)',
    detailCategory: '',
    subject: 20,
    price: 25000,
    desc: `
`,
    addition: {

    },
    fixedOption: {
      optionENG : {price : 100000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 200000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 500000, quantity: 1, name :'설문문항 5개추가'},
    }
  },
  {
    type: '화장품',
    mainCategory: '자극/사용성(안전성)',
    middleCategory: '두피 민감성 일차자극 평가시험',
    subCategory: '3일(24시간)',
    detailCategory: '',
    subject: 20,
    price: 50000,
    desc: `
`,
    addition: {

    },
    fixedOption: {
      optionENG : {price : 100000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 200000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 500000, quantity: 1, name :'설문문항 5개추가'},
    }
  },


//화장품 - 유효성
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '보습/피부결',
  subCategory: '피부 수분량',
  detailCategory: '1회',
  subject: 20,
  price: 0,
  desc: `
- 1회 수분량만 진행 시 400만원.
- 다항목(3가지 이상) 진행 시 100만원 수치만 제공.
- 다항목(3가지 이상) 진행 시 200만원 수치, 이미지 제공
`,
  addition: {
    option1: { price: 250000-50000, quantity: 0, name :'수분량만 진행'}, 
    option2: { price: 50000, quantity: 0, name :'다항목(3가지 이상)진행(수치)'}, 
    option3: { price: 100000, quantity: 0, name :'다항목(3가지 이상)진행(수치+이미지)'}, 
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '보습/피부결',
  subCategory: '피부 속 수분량',
  detailCategory: '2주 이상',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치제공
`,
  addition: {
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '치밀도/주름/탄력',
  subCategory: '피부치밀도',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 타임포인트 추가 진행 시 50만원 추가.
- 수치 및 이미지 제공
`,
  addition: {
    option2: { price: 25000, quantity: 0, name :'타임포인트 추가 진행'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '보습/피부결',
  subCategory: 'n층 피부 수분량',
  detailCategory: '10층 박리',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 제공, 무도포 비교, 시점(전, 직후, 10층 박리 후).
- 박리 층수 추가 시 50만원 추가
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'박리 층수 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '각질',
  subCategory: '피부 턴오버 평가',
  detailCategory: '1주 혹은 2주',
  subject: 20,
  price: 500000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'박치 층수 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '각질',
  subCategory: '각질 개선',
  detailCategory: '1주 혹은 N주',
  subject: 20,
  price: 300000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'박치 층수 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '모공/피지/유분량',
  subCategory: '피부 유분량',
  detailCategory: '1회 혹은 4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'박치 층수 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '모공/피지/유분량',
  subCategory: '피부 피지량',
  detailCategory: '1회 혹은 4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'박치 층수 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '모공/피지/유분량',
  subCategory: '모공 수',
  detailCategory: '1회 혹은 4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'박치 층수 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '모공/피지/유분량',
  subCategory: '모공 부피',
  detailCategory: '1회',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'박치 층수 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '모공/피지/유분량',
  subCategory: '모공 면적',
  detailCategory: '1회',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'박치 층수 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '모공/피지/유분량',
  subCategory: '모공 깊이',
  detailCategory: '1회',
  subject: 20,
  price: 300000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'박치 층수 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '과색소/피부톤/투명도',
  subCategory: '육안으로 보이는 과색소침착 부위의 피부 밝기(색)',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 부위 추가는 4부위까지는 추가비용 없음.
- 부위 추가 시 +50.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'부위 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '과색소/피부톤/투명도',
  subCategory: '육안으로 보이는 과색소침착 부위의 피부 멜라닌',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 부위 추가는 4부위까지는 추가비용 없음.
- 부위 추가 시 +50.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'부위 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '과색소/피부톤/투명도',
  subCategory: '육안으로 보이는 과색소침착 부위의 면적(크기)',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 부위 추가는 4부위까지는 추가비용 없음.
- 부위 추가 시 +50.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'부위 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '과색소/피부톤/투명도',
  subCategory: '육안으로 보이는 과색소침착 부위의 피부 톤',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 부위 추가는 4부위까지는 추가비용 없음.
- 부위 추가 시 +50.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'부위 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '과색소/피부톤/투명도',
  subCategory: '육안으로 보이지 않는 과색소침착 부위의 피부 밝기(색)',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 부위 추가는 4부위까지는 추가비용 없음.
- 부위 추가 시 +50.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'부위 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '과색소/피부톤/투명도',
  subCategory: '육안으로 보이지 않는 과색소침착 부위의 피부 멜라닌',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 부위 추가는 4부위까지는 추가비용 없음.
- 부위 추가 시 +50.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'부위 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '과색소/피부톤/투명도',
  subCategory: '육안으로 보이지 않는 과색소침착 부위의 면적(크기)',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 부위 추가는 4부위까지는 추가비용 없음.
- 부위 추가 시 +50.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'부위 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '과색소/피부톤/투명도',
  subCategory: '육안으로 보이지 않는 과색소침착 부위의 피부 톤',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 부위 추가는 4부위까지는 추가비용 없음.
- 부위 추가 시 +50.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'부위 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '과색소/피부톤/투명도',
  subCategory: '피부 광채(윤기)',
  detailCategory: '1회 혹은 N주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 부위 추가는 4부위까지는 추가비용 없음.
- 부위 추가시 +50.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'부위 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '과색소/피부톤/투명도',
  subCategory: '피부 투명도',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 부위 추가는 4부위까지는 추가비용 없음.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'부위 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '과색소/피부톤/투명도',
  subCategory: '피부톤(ITA값)',
  detailCategory: '1회',
  subject: 20,
  price: 0,
  desc: `
`,
  addition: {
    option1: { price: 300000, quantity: 0, name :'붉은기(a값)'},
    option2: { price: 300000, quantity: 0, name :'노란기(b값)'},
    option3: { price: 300000, quantity: 0, name :'밝기(L값)'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
// {
//   type: '화장품',
//   mainCategory: '유효성',
//   middleCategory: '과색소/피부톤/투명도',
//   subCategory: '피부톤(ITA값)',
//   detailCategory: '2주이상',
//   subject: 20,
//   price: 0,
//   desc: `
// `,
//   addition: {
//     option1: { price: 300000, quantity: 0, name :'붉은기(a값)'},
//     option2: { price: 300000, quantity: 0, name :'노란기(b값)'},
//     option3: { price: 300000, quantity: 0, name :'밝기(L값)'},
//   },
//   fixedOption: {
//     optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
//     optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
//     // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
//   }
// },
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '보습/피부결',
  subCategory: '피부 결(거칠기)',
  detailCategory: '1회 혹은 N주',
  subject: 20,
  price: 400000-50000,
  desc: `
- 타임포인트 추가 시 +50.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '치밀도/주름/탄력',
  subCategory: '피부 각질',
  detailCategory: '1회 혹은 N주',
  subject: 20,
  price: 400000-50000,
  desc: `
- 일시적.
- 1회(일시적) / 안면, 요철 불가 → 피부결 권장.
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 50000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '치밀도/주름/탄력',
  subCategory: '주름 완화',
  detailCategory: '',
  subject: 20,
  price: 400000-50000,
  desc: `
- 부위 추가는 4부위까지는 추가비용 없음.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'부위 추가 (5부위 이상시)'},
  },
  fixedOption: {
    optionSubject : {price : 7000000, quantity :1, name:'피험자군', times : 0},
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '자극진정/장벽개선',
  subCategory: '피부진정',
  detailCategory: '2주 이상',
  subject: 20,
  price: 400000-50000,
  desc: `
- 수치 제공
`,
  addition: {
    // option1: { price: 50000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '보습/피부결',
  subCategory: '경피수분손실량',
  detailCategory: '2주 이상',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 제공
`,
  addition: {
    // option1: { price: 50000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '치밀도/주름/탄력',
  subCategory: '피부 탄력',
  detailCategory: '4주',
  subject: 20,
  price: 300000-50000,
  desc: `
- 타임포인트 추가 시 +50.
- 수치 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '치밀도/주름/탄력',
  subCategory: '피부 속 탄력',
  detailCategory: '4주',
  subject: 20,
  price: 300000-50000,
  desc: `
- 타임포인트 추가 시 +50.
- 수치 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '치밀도/주름/탄력',
  subCategory: '눌림 자국 완화',
  detailCategory: '1회',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치 및 이미지 제공.
`,
  addition: {
    // option1: { price: 50000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '치밀도/주름/탄력',
  subCategory: '피부 처짐(리프팅)',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 타임포인트 추가 시 +50.
- 수치 및 이미지 제공
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '치밀도/주름/탄력',
  subCategory: '피부 꺼짐',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 및 이미지 제공.
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '치밀도/주름/탄력',
  subCategory: '불독살 완화',
  detailCategory: '4주',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 및 이미지 제공.
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '논코메도제닉',
  subCategory: '여드름 피부 사용 적합성 평가시험 (논코메도제닉)',
  detailCategory: '4주',
  subject: 20,
  price: 750000-50000,
  desc: `
- 병변계수 평가.
- 안면 피지 분포 평가 (UV 이미지 제공).
- 피부 유분량 평가 (Sebumeter)
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '보습 지속력(전박기준)',
  detailCategory: '8시간',
  subject: 20,
  price: 325000-50000,
  desc: `
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후.
- 중간 타임 횟수 추가 시 50만원 추가
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'중간 타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '보습 지속력(전박기준)',
  detailCategory: '24시간',
  subject: 20,
  price: 350000-50000,
  desc: `
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후.
- 중간 타임 횟수 추가 시 50만원 추가
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'중간 타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '보습 지속력(전박기준)',
  detailCategory: '48시간',
  subject: 20,
  price: 375000-50000,
  desc: `
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후.
- 중간 타임 횟수 추가 시 50만원 추가
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'중간 타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '보습 지속력(전박기준)',
  detailCategory: '72시간',
  subject: 20,
  price: 400000-50000,
  desc: `
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후.
- 중간 타임 횟수 추가 시 50만원 추가
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'중간 타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '보습 지속력(전박기준)',
  detailCategory: '100시간',
  subject: 20,
  price: 450000-50000,
  desc: `
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후.
- 중간 타임 횟수 추가 시 50만원 추가
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'중간 타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},

{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '커버 지속력(전박기준)',
  detailCategory: '8시간',
  subject: 20,
  price: 375000-50000,
  desc: `
- 수치 및 이미지 제공.
- 대조군(무도포 대비).
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '커버 지속력(전박기준)',
  detailCategory: '12시간',
  subject: 20,
  price: 400000-50000,
  desc: `
- 수치 및 이미지 제공.
- 대조군(무도포 대비).
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '커버 지속력(전박기준)',
  detailCategory: '24시간',
  subject: 20,
  price: 450000-50000,
  desc: `
- 수치 및 이미지 제공.
- 대조군(무도포 대비).
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '커버 지속력(전박기준)',
  detailCategory: '48시간',
  subject: 20,
  price: 500000-50000,
  desc: `
- 수치 및 이미지 제공.
- 대조군(무도포 대비).
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},

{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '커버 지속력(안면기준)',
  detailCategory: '8시간',
  subject: 20,
  price: 425000-50000,
  desc: `
- 수치 및 이미지 제공.
- 대조군(무도포 대비).
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '커버 지속력(안면기준)',
  detailCategory: '12시간',
  subject: 20,
  price: 450000-50000,
  desc: `
- 수치 및 이미지 제공.
- 대조군(무도포 대비).
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '커버 지속력(안면기준)',
  detailCategory: '24시간',
  subject: 20,
  price: 500000-50000,
  desc: `
- 수치 및 이미지 제공.
- 대조군(무도포 대비).
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '커버 지속력(안면기준)',
  detailCategory: '48시간',
  subject: 20,
  price: 600000-50000,
  desc: `
- 수치 및 이미지 제공.
- 대조군(무도포 대비).
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},

{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '메이크업 지속력(전박기준)',
  detailCategory: '8시간',
  subject: 20,
  price: 325000-50000,
  desc: `
- 수치 및 이미지 제공.
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '메이크업 지속력(전박기준)',
  detailCategory: '24시간',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 및 이미지 제공.
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '메이크업 지속력(전박기준)',
  detailCategory: '48시간',
  subject: 20,
  price: 375000-50000,
  desc: `
- 수치 및 이미지 제공.
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '메이크업 지속력(전박기준)',
  detailCategory: '72시간',
  subject: 20,
  price: 400000-50000,
  desc: `
- 수치 및 이미지 제공.
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '메이크업 지속력(전박기준)',
  detailCategory: '100시간',
  subject: 20,
  price: 450000-50000,
  desc: `
- 수치 및 이미지 제공.
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},


{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '메이크업 지속력(안면기준)',
  detailCategory: '8시간',
  subject: 20,
  price: 450000-50000,
  desc: `
- 수치 및 이미지 제공.
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '메이크업 지속력(안면기준)',
  detailCategory: '12시간',
  subject: 20,
  price: 475000-50000,
  desc: `
- 수치 및 이미지 제공.
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '메이크업 지속력(안면기준)',
  detailCategory: '24시간',
  subject: 20,
  price: 500000-50000,
  desc: `
- 수치 및 이미지 제공.
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '지속력',
  subCategory: '메이크업 지속력(안면기준)',
  detailCategory: '48시간',
  subject: 20,
  price: 600000-50000,
  desc: `
- 수치 및 이미지 제공.
- 시점: 8시간 = 전, 직후, 8시간 후 / 24시간 = 전, 직후, 24시간 후
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},

{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '속눈썹',
  subCategory: '속눈썹 길이',
  detailCategory: '3주',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치 및 이미지 제공.
- 무도포군 대비
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'중간 타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '속눈썹',
  subCategory: '속눈썹 볼륨',
  detailCategory: '3주',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치 및 이미지 제공.
- 무도포군 대비
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'중간 타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '속눈썹',
  subCategory: '속눈썹 굵기',
  detailCategory: '3주',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치 및 이미지 제공.
- 무도포군 대비
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'중간 타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '속눈썹',
  subCategory: '속눈썹 컬링',
  detailCategory: '1회',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'중간 타임포인트 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},

{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '자극진정/장벽개선',
  subCategory: '외부자극(물리적자극)에 의해 손상된 장벽개선',
  detailCategory: '1일',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 제공.
- 무도포 비교, 시점(전, 자극 직후, 제품 사용 1일 후).
- 이미지 추가 시 50만원 추가  
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '자극진정/장벽개선',
  subCategory: '외부자극(물리적자극)에 의해 손상된 진정효과',
  detailCategory: '1일',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 제공.
- 무도포 비교, 시점(전, 자극 직후, 제품 사용 1일 후).
- 이미지 추가 시 50만원 추가  
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '자극진정/장벽개선',
  subCategory: '외부자극(물리적자극)에 의해 손상된 장벽개선 및 진정효과',
  detailCategory: '1일',
  subject: 20,
  price: 450000-50000,
  desc: `
- 수치 제공.
- 무도포 비교, 시점(전, 자극 직후, 제품 사용 1일 후).
- 이미지 추가 시 50만원 추가  
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},

{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '자극진정/장벽개선',
  subCategory: '외부자극(화학적자극)에 의해 손상된 장벽개선',
  detailCategory: '2주',
  subject: 20,
  price: 400000-50000,
  desc: `
- 수치 제공.
- 무도포 비교, 시점(전, 자극 직후, 제품 사용 2주 후).
- 이미지 추가 시 50만원 추가  
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '자극진정/장벽개선',
  subCategory: '외부자극(화학적자극)에 의해 손상된 진정효과',
  detailCategory: '2주',
  subject: 20,
  price: 400000-50000,
  desc: `
- 수치 제공.
- 무도포 비교, 시점(전, 자극 직후, 제품 사용 2주 후).
- 이미지 추가 시 50만원 추가  
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '자극진정/장벽개선',
  subCategory: '외부자극(화학적자극)에 의해 손상된 장벽개선 및 진정효과',
  detailCategory: '2주',
  subject: 20,
  price: 450000-50000,
  desc: `
- 수치 제공.
- 무도포 비교, 시점(전, 자극 직후, 제품 사용 2주 후).
- 이미지 추가 시 50만원 추가  
`,
  addition: {
    option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '자극진정/장벽개선',
  subCategory: '외부자극(열)에 의해 손상된 장벽개선',
  detailCategory: '1회',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치 및 이미지 제공, 시점(전, 자극 직후, 제품 사용 1회 후)
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '자극진정/장벽개선',
  subCategory: '외부자극(열)에 의해 손상된 진정효과',
  detailCategory: '1회',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치 및 이미지 제공, 시점(전, 자극 직후, 제품 사용 1회 후)
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '자극진정/장벽개선',
  subCategory: '외부자극(열)에 의해 손상된 장벽개선 및 진정효과',
  detailCategory: '1회',
  subject: 20,
  price: 400000-50000,
  desc: `
- 수치 및 이미지 제공, 시점(전, 자극 직후, 제품 사용 1회 후)
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '자극진정/장벽개선',
  subCategory: '외부자극(열)에 의한 온도 감소(쿨링)',
  detailCategory: '1회',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '프루프',
  subCategory: '워터프루프',
  detailCategory: '1회',
  subject: 20,
  price: 450000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '프루프',
  subCategory: '스웨트프루프',
  detailCategory: '1회',
  detailCategory: '',
  subject: 20,
  price: 450000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '프루프',
  subCategory: '오일프루프',
  detailCategory: '1회',
  subject: 20,
  price: 450000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '프루프',
  subCategory: '스머지프루프',
  detailCategory: '1회',
  subject: 20,
  price: 450000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '프루프',
  subCategory: '마스크프루프(마스크 묻어남 방지)',
  detailCategory: '1회',
  subject: 20,
  price: 450000-50000,
  desc: `
- 마스크에 묻어나는 제품 분석.
- 수치 및 이미지 제공.
- 마스크 제공 필수
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '프루프',
  subCategory: '라이프프루프',
  detailCategory: '1회',
  subject: 20,
  price: 650000-50000,
  desc: `
- 핸드폰 액정 묻어남.
- 검은천에 묻어남.
- 수치 및 이미지 제공.
- 마스크 제공 필수
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '두피 각질',
  detailCategory: '1회',
  subject: 20,
  price: 450000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '두피 모공 청결도',
  detailCategory: '1회',
  subject: 20,
  price: 400000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '두피 유분량',
  detailCategory: '1회',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '두피 수분량',
  detailCategory: '1회',
  subject: 20,
  price: 350000-50000,
  desc: `
- 수치 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '두피 탄력',
  detailCategory: '1회',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '두피 온도',
  detailCategory: '1회',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '두피 진정',
  detailCategory: '1회',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '인모',
  detailCategory: '굵기',
  subject: 20,
  price: 250000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '인모',
  detailCategory: '윤기',
  subject: 20,
  price: 250000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '인모',
  detailCategory: '인장강도',
  subject: 20,
  price: 250000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '인모',
  detailCategory: '모발 거칠기(큐티클)',
  subject: 20,
  price: 250000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '인모',
  detailCategory: '수분량',
  subject: 20,
  price: 250000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '인모',
  detailCategory: '정전기 방지',
  subject: 20,
  price: 250000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '인모',
  detailCategory: '그 외',
  subject: 20,
  price: 250000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},

{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: 'Tress',
  detailCategory: '굵기',
  subject: 20,
  price: 200000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: 'Tress',
  detailCategory: '윤기',
  subject: 20,
  price: 200000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: 'Tress',
  detailCategory: '인장강도',
  subject: 20,
  price: 200000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: 'Tress',
  detailCategory: '모발 거칠기',
  subject: 20,
  price: 200000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: 'Tress',
  detailCategory: '수분량',
  subject: 20,
  price: 200000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: 'Tress',
  detailCategory: '정전기 방지',
  subject: 20,
  price: 200000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: 'Tress',
  detailCategory: '그 외',
  subject: 20,
  price: 200000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '두피/모발',
  subCategory: '탈락 모발 수',
  detailCategory: '6주',
  subject: 20,
  price: 600000-50000,
  desc: `
- 수치 및 이미지 제공.
- 기능성 샴푸에 한함
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '세정력',
  subCategory: '메이크업 세정력',
  detailCategory: '1회',
  subject: 20,
  price: 400000-50000,
  desc: `
- 수치 및 이미지 제공.
- 메이크업 제품 제공 필요
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '세정력',
  subCategory: '노폐물(피부 모공 속 피지, 블랙헤드 등) 세정력',
  detailCategory: '1회',
  subject: 20,
  price: 400000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '세정력',
  subCategory: '미세먼지 세정력',
  detailCategory: '1회',
  subject: 20,
  price: 400000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '세정력',
  subCategory: '초미세먼지 세정력',
  detailCategory: '1회',
  subject: 20,
  price: 400000-50000,
  desc: `
- 수치 및 이미지 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '기타',
  subCategory: '피부 Ph',
  detailCategory: '2주',
  subject: 20,
  price: 300000-50000,
  desc: `
- 수치 제공
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '기타',
  subCategory: '셀룰라이트',
  detailCategory: '8주',
  subject: 20,
  price: 1400000,
  desc: `
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '기타',
  subCategory: '붓기 완화',
  detailCategory: '4주',
  subject: 20,
  price: 450000,
  desc: `
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},
{
  type: '화장품',
  mainCategory: '유효성',
  middleCategory: '기타',
  subCategory: '혈행 개선',
  detailCategory: '4주',
  subject: 20,
  price: 450000,
  desc: `
`,
  addition: {
    // option1: { price: 25000, quantity: 0, name :'이미지 추가'},
  },
  fixedOption: {
    optionENG : {price : 600000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
    optionCN : {price : 500000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    // option1: { price: 500000, quantity: 0, name :'설문문항 5개추가'},
  }
},

//기능성화장품
  {
    type: '화장품',
    mainCategory: '기능성 화장품',
    middleCategory: '튼 살 완화',
    subCategory: `4회`,
    detailCategory: '',
    subject: 20,
    price: 4750000,
    desc: `
  - 기능성 탭 참고
    `,
    addition: {
      // option1: { price: 25000, quantity: 0, name :'부위 추가'},
    },
    fixedOption: {
      optionENG : {price : 800000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 700000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    },
    img : '/images/function_1.jpg'
  },
  {
    type: '화장품',
    mainCategory: '기능성 화장품',
    middleCategory: '피부 장벽개선 및 가려움 완화',
    subCategory: `4회`,
    detailCategory: '',
    subject: 20,
    price: 2400000,
    desc: `
  - 기능성탭 참고
    `,
    addition: {
      // option1: { price: 25000, quantity: 0, name :'부위 추가'},
    },
    fixedOption: {
      optionENG : {price : 800000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 700000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    },
    img : '/images/function_2.png'
  },
  {
    type: '화장품',
    mainCategory: '기능성 화장품',
    middleCategory: '여드름 완화',
    subCategory: `6회`,
    detailCategory: '',
    subject: 20,
    price: 3250000,
    desc: `
  - 기능성탭 참고
    `,
    addition: {
      // option1: { price: 25000, quantity: 0, name :'부위 추가'},
    },
    fixedOption: {
      optionENG : {price : 800000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 700000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    },
    img : '/images/function_3.jpg'
  },
  {
    type: '화장품',
    mainCategory: '기능성 화장품',
    middleCategory: '주름 완화',
    subCategory: `4회`,
    detailCategory: '',
    subject: 20,
    price: 1200000,
    desc: `
  - MFDS 가이드라인 의거 진행.
  - 시험 종료 5주 후 초안 보고서 발행.
  - 깊이, 면적, 종합.
  - PRIMOS 혹은 Antera 주름 이미지 및 수치 제공
    `,
    addition: {
      // option1: { price: 25000, quantity: 0, name :'부위 추가'},
    },
    fixedOption: {
      optionENG : {price : 800000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 700000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    }
  },
  {
    type: '화장품',
    mainCategory: '기능성 화장품',
    middleCategory: '미백',
    subCategory: `4회`,
    detailCategory: '',
    subject: 20,
    price: 1100000,
    desc: `
  - MFDS 가이드라인 의거 진행.
  - 시험 종료 5주 후 초안 보고서 발행
    `,
    addition: {
      // option1: { price: 25000, quantity: 0, name :'부위 추가'},
    },
    fixedOption: {
      optionENG : {price : 800000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 700000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    }
  },
  {
    type: '화장품',
    mainCategory: '기능성 화장품',
    middleCategory: '탈모 완화',
    subCategory: `5회`,
    detailCategory: '',
    subject: 20,
    price: 5250000,
    desc: `
- 기능성 탭 참고
    `,
    addition: {
      // option1: { price: 25000, quantity: 0, name :'부위 추가'},
    },
    fixedOption: {
      optionENG : {price : 800000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 700000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    },
    img : '/images/function_4.jpg'
  },
  {
    type: '화장품',
    mainCategory: '기능성 화장품',
    middleCategory: '비듬 및 가려움 완화',
    subCategory: `4주`,
    detailCategory: '',
    subject: 20,
    price: 1400000,
    desc: ``,
    addition: {
      // option1: { price: 25000, quantity: 0, name :'부위 추가'},
    },
    fixedOption: {
      optionENG : {price : 800000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 700000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    }
  },
  {
    type: '화장품',
    mainCategory: '기능성 화장품',
    middleCategory: '셀룰라이트 완화',
    subCategory: `8주`,
    detailCategory: '',
    subject: 20,
    price: 1750000,
    desc: `
  - 수치 및 이미지 제공.
  - 사진촬영, 육안평가, 거칠기, 진피/피하지방층 경계 측정, 설문평가
    `,
    addition: {
      // option1: { price: 25000, quantity: 0, name :'부위 추가'},
    },
    fixedOption: {
      optionENG : {price : 800000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 700000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    }
  },
  {
    type: '화장품',
    mainCategory: '기능성 화장품',
    middleCategory: '다크서클 완화',
    subCategory: `8주`,
    detailCategory: '기능성탭 참고',
    subject: 20,
    price: 600000,
    desc: `
  - 수치 및 이미지(광학 및 헤모글로빈) 제공.
  - 눈 밑 피부 멜라닌 평가, 색 평가
    `,
    addition: {
      // option1: { price: 25000, quantity: 0, name :'부위 추가'},
    },
    fixedOption: {
      optionENG : {price : 800000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 700000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    }
  },
  {
    type: '화장품',
    mainCategory: '기능성 화장품',
    middleCategory: '붓기 완화',
    subCategory: `4주`,
    detailCategory: '',
    subject: 20,
    price: 500000,
    desc: `
  - 사진촬영.
  - 3D 볼륨 측정.
  - 발목 및 종아리 둘레 측정.
  - 설문평가.
  - 수치 및 이미지 제공
    `,
    addition: {
      // option1: { price: 25000, quantity: 0, name :'부위 추가'},
    },
    fixedOption: {
      optionENG : {price : 800000, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 700000, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
      // option1: { price: 25000, quantity: 0, name :'고정비 옵션1'},
    }
  },

//건강기능식품
  {
    type: '건기식',
    mainCategory: '모발건강',
    middleCategory: '',
    subCategory: ``,
    detailCategory: '',
    subject: 110,
    price: 0,
    desc: `
  - 가이드라인 개정(2023.01): 모발 탄력, 모발 윤기, 대상자 만족도.
  - 사진촬영.
  - 모발수/탄력/윤기/ 피부이상반응.
  - 설문    
    `,
    addition: {      
      //교수 자문비
      optionP1 : {price : 50000, quantity: 0, name :'10년 미만 교수-기본'},
      optionP2 : {price : 100000, quantity :0, name :'10년 이상 교수-기본'},
      optionP3 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시술'},
      optionP4 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시술'},
      optionP5 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시간'},
      optionP6 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시간'},
      optionP7 : {price : 55000, quantity: 0, name :'10년 미만 교수-기본+시술+시간'},
      optionP8 : {price : 110000, quantity: 0, name :'10년 이상 교수-기본+시술+시간'},

      option1: { price: 600000, quantity: 0, name :'참여비'},
      option2: { price: 100000, quantity: 0, name :'혈액,소변'},
      option4: { price: 50000, quantity: 0, name :'타투'},
      option5: { price: 50000, quantity: 0, name :'촬영'},
      option6: { price: 50000, quantity: 0, name :'전문가 평가'},
      option7: { price: 250000, quantity: 0, name :'모발 수'},
      option8: { price: 200000, quantity: 0, name :'탄력'},
      option9: { price: 100000, quantity: 0, name :'윤기(Glossy)'},
      option10: { price: 200000, quantity: 0, name :'손상도(SEM)'},
      option11: { price: 200000, quantity: 0, name :'직경(SEM)'},
      option12: { price: 150000, quantity: 0, name :'직경(현미경)'},
      option13: { price: 150000, quantity: 0, name :'탈락 모발 수'},
      option14: { price: 350000, quantity: 0, name :'항염 3종'},
      option15: { price: 280000, quantity: 0, name :'모발 성장기 비율'},
      option16: { price: 150000, quantity: 0, name :'모발 아미노산'},
    },
    fixedOption: {
      optionGCCL: { price: 0, quantity: 1, name :'검체 분석 외주 비용', times : 0},
      optionENG : {price : 0, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 0, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    },
    img : '/images/모발.png'
  },
  {
    type: '건기식',
    mainCategory: '면역기능',
    middleCategory: '',
    subCategory: ``,
    detailCategory: '',
    subject: 110,
    price: 0,
    desc: `
- GCCL에 견적 문의 필요
    `,
    addition: {
      //교수 자문비
      optionP1 : {price : 50000, quantity: 0, name :'10년 미만 교수-기본'},
      optionP2 : {price : 100000, quantity :0, name :'10년 이상 교수-기본'},
      optionP3 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시술'},
      optionP4 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시술'},
      optionP5 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시간'},
      optionP6 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시간'},
      optionP7 : {price : 55000, quantity: 0, name :'10년 미만 교수-기본+시술+시간'},
      optionP8 : {price : 110000, quantity: 0, name :'10년 이상 교수-기본+시술+시간'},

      option1: { price: 300000, quantity: 0, name :'참여비'},
      option2: { price: 130000, quantity: 0, name :'혈액,소변'},
      option3: { price: 50000, quantity: 0, name :'자연살해세포활성도'},
      option4: { price: 50000, quantity: 0, name :'백혈구 수'},
      option5: { price: 40000, quantity: 0, name :'IFN-γ'},
      option6: { price: 40000, quantity: 0, name :'TNF-α'},
      option7: { price: 40000, quantity: 0, name :'IL-1β'},
      option8: { price: 40000, quantity: 0, name :'IL-2'},
      option10: { price: 40000, quantity: 0, name :'IL-6'},
      option11: { price: 40000, quantity: 0, name :'IL-10'},
      option12: { price: 40000, quantity: 0, name :'IgG'},
      option13: { price: 40000, quantity: 0, name :'IgM (Multiplex)'},
    },
    fixedOption: {
      optionGCCL: { price: 0, quantity: 1, name :'검체 분석 외주 비용', times : 0},
      optionENG : {price : 0, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 0, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    },
    img : '/images/면역기능.png'
  },
  {
    type: '건기식',
    mainCategory: '면역과민',
    middleCategory: '',
    subCategory: ``,
    detailCategory: '',
    subject: 110,
    price: 0,
    desc: `

    `,
    addition: {
      //교수 자문비
      optionP1 : {price : 50000, quantity: 0, name :'10년 미만 교수-기본'},
      optionP2 : {price : 100000, quantity :0, name :'10년 이상 교수-기본'},
      optionP3 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시술'},
      optionP4 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시술'},
      optionP5 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시간'},
      optionP6 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시간'},
      optionP7 : {price : 55000, quantity: 0, name :'10년 미만 교수-기본+시술+시간'},
      optionP8 : {price : 110000, quantity: 0, name :'10년 이상 교수-기본+시술+시간'},

      option1: { price: 200000, quantity: 0, name :'참여비'},
      option2: { price: 120000, quantity: 0, name :'혈액,소변'},
      option3: { price: 40000, quantity: 0, name :'IgE'},
      option4: { price: 40000, quantity: 0, name :'Th2(IL-2R)'},
      option5: { price: 40000, quantity: 0, name :'Th2(IL-13)'},
      option6: { price: 40000, quantity: 0, name :'Th2(IL-31)'},
      option7: { price: 40000, quantity: 0, name :'Th2(IL-22)'},
      option8: { price: 40000, quantity: 0, name :'CCL17(TARC)'},
      option10: { price: 40000, quantity: 0, name :'CCL22(MDC)'},
      option11: { price: 40000, quantity: 0, name :'Filaggrin'},
      option12: { price: 50000, quantity: 0, name :'피부 pH'},
      option13: { price: 50000, quantity: 0, name :'경피수분손실량'},
      option14: { price: 30000, quantity: 0, name :'Tape-Stripping'},
      option15: { price: 30000, quantity: 0, name :'EASI SCORE'},
      option16: { price: 30000, quantity: 0, name :'IGA SCORE'},
      option17: { price: 30000, quantity: 0, name :'사진'},
    },
    fixedOption: {
      option18: { price: 3000000, quantity: 1, name :'교수 육안 평가', times : 0},
      option19: { price: 60000000, quantity: 1, name :'키트값', times : 0},
      optionGCCL: { price: 0, quantity: 1, name :'검체 분석 외주 비용', times : 0},
      optionENG : {price : 0, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 0, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    },
    img : '/images/면역과민.png'
  },
  {
    type: '건기식',
    mainCategory: '간건강',
    middleCategory: '',
    subCategory: ``,
    detailCategory: '',
    subject: 110,
    price: 0,
    desc: 
`
`,
    addition: {
      //교수 자문비
      optionP1 : {price : 50000, quantity: 0, name :'10년 미만 교수-기본'},
      optionP2 : {price : 100000, quantity :0, name :'10년 이상 교수-기본'},
      optionP3 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시술'},
      optionP4 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시술'},
      optionP5 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시간'},
      optionP6 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시간'},
      optionP7 : {price : 55000, quantity: 0, name :'10년 미만 교수-기본+시술+시간'},
      optionP8 : {price : 110000, quantity: 0, name :'10년 이상 교수-기본+시술+시간'},

      option1: { price: 240000, quantity: 0, name :'참여비'},
      option2: { price: 130000, quantity: 0, name :'혈액,소변'},
      option3: { price: 120000, quantity: 0, name :'간 기능 효소(ALT)'},
      option4: { price: 120000, quantity: 0, name :'간 기능 효소(AST)'},
      option5: { price: 120000, quantity: 0, name :'간 기능 효소(ALP)'},
      option6: { price: 40000, quantity: 0, name :'임상증상 개선(다차원피로척도)'},
      option7: { price: 120000, quantity: 0, name :'지방대사(총 콜레스테롤)'},
      option8: { price: 40000, quantity: 0, name : '피험자 컨트롤비'},
    },
    fixedOption: {
      optionGCCL: { price: 0, quantity: 1, name :'검체 분석 외주 비용', times : 0},
      optionENG : {price : 0, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 0, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    },
    img : '/images/간건강.png'
  },
  {
    type: '건기식',
    mainCategory: '자외선건강/보습기능성',
    middleCategory: '',
    subCategory: ``,
    detailCategory: '',
    subject: 110,
    price: 0,
    desc: 
`
`,
    addition: {
      //교수 자문비
      optionP1 : {price : 50000, quantity: 0, name :'10년 미만 교수-기본'},
      optionP2 : {price : 100000, quantity :0, name :'10년 이상 교수-기본'},
      optionP3 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시술'},
      optionP4 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시술'},
      optionP5 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시간'},
      optionP6 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시간'},
      optionP7 : {price : 55000, quantity: 0, name :'10년 미만 교수-기본+시술+시간'},
      optionP8 : {price : 110000, quantity: 0, name :'10년 이상 교수-기본+시술+시간'},

      option1: { price: 240000, quantity: 0, name :'참여비'},
      option2: { price: 130000, quantity: 0, name :'혈액,소변'},
      option3: { price: 30000, quantity: 0, name :'사진 촬영'},
      option4: { price: 100000, quantity: 0, name :'주름'},
      option5: { price: 20000, quantity: 0, name :'과색소 (육안)'},
      option6: { price: 30000, quantity: 0, name :'과색소 색'},
      option7: { price: 50000, quantity: 0, name :'탄력'},
      option8: { price: 30000, quantity: 0, name : '수분'},
      option9: { price: 30000, quantity: 0, name : 'TEWL'},
      option10: { price: 70000, quantity: 0, name : '진피치밀도'},
      option11: { price: 100000, quantity: 0, name : '거칠기'},
    },
    fixedOption: {
      optionGCCL: { price: 0, quantity: 1, name :'검체 분석 외주 비용', times : 0},
      optionENG : {price : 0, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 0, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    },
    img : '/images/자외선.png'
  },

  {
    type: '건기식',
    mainCategory: '호흡기 건강',
    middleCategory: '',
    subCategory: ``,
    detailCategory: '',
    subject: 110,
    price: 0,
    desc: 
`
`,
    addition: {
      //교수 자문비
      optionP1 : {price : 50000, quantity: 0, name :'10년 미만 교수-기본'},
      optionP2 : {price : 100000, quantity :0, name :'10년 이상 교수-기본'},
      optionP3 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시술'},
      optionP4 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시술'},
      optionP5 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시간'},
      optionP6 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시간'},
      optionP7 : {price : 55000, quantity: 0, name :'10년 미만 교수-기본+시술+시간'},
      optionP8 : {price : 110000, quantity: 0, name :'10년 이상 교수-기본+시술+시간'},

      option1: { price: 200000, quantity: 0, name :'참여비'},
      option2: { price: 130000, quantity: 0, name :'혈액,소변'},
      option3: { price: 100000, quantity: 0, name :'기침, 가래 빈도 수 평가'},
      option4: { price: 100000, quantity: 0, name :'폐 기능 평가'},
      option5: { price: 100000, quantity: 0, name :'기관지 내 염증지표 농도 평가'},
      option6: { price: 40000, quantity: 0, name :'만성폐쇄성질환 평가'},
      option8: { price: 40000, quantity: 0, name : '피험자 컨트롤 비용'},
    },
    fixedOption: {
      optionGCCL: { price: 0, quantity: 1, name :'검체 분석 외주 비용', times : 0},
      optionENG : {price : 0, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 0, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
    },
    img : '/images/기관지.png'
  },
  {
    type: '건기식',
    mainCategory: '잇몸 건강',
    middleCategory: '',
    subCategory: ``,
    detailCategory: '',
    subject: 110,
    price: 0,
    desc: 
`
`,
    addition: {
      //교수 자문비
      optionP1 : {price : 50000, quantity: 0, name :'10년 미만 교수-기본'},
      optionP2 : {price : 100000, quantity :0, name :'10년 이상 교수-기본'},
      optionP3 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시술'},
      optionP4 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시술'},
      optionP5 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시간'},
      optionP6 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시간'},
      optionP7 : {price : 55000, quantity: 0, name :'10년 미만 교수-기본+시술+시간'},
      optionP8 : {price : 110000, quantity: 0, name :'10년 이상 교수-기본+시술+시간'},

      option1: { price: 200000, quantity: 0, name :'참여비'},
      option2: { price: 130000, quantity: 0, name :'혈액,소변'},
      option3: { price: 90000, quantity: 0, name :'치은지수 평가'},
      option4: { price: 90000, quantity: 0, name :'치태지수 평가'},
      option5: { price: 90000, quantity: 0, name :'임상부착수준 평가'},
      option6: { price: 50000, quantity: 0, name :'구강건강영향지수 평가'},
    },
    fixedOption: {
      optionGCCL: { price: 0, quantity: 1, name :'검체 분석 외주 비용', times : 0},
      optionENG : {price : 0, quantity :1, name:'영문 보고서(부가세 별도)', times : 0},
      optionCN : {price : 0, quantity :1, name:'중문 보고서(부가세 별도)', times : 0},
  },
  img : '/images/잇몸건강.png'
},
//의약외품
{
  type: '의약외품',
  mainCategory: '치아미백',
  middleCategory: '',
  subCategory: ``,
  detailCategory: '',
  subject: 110,
  price: 0,
  desc: 
`
`,
  addition: {
    //교수 자문비
    optionP1 : {price : 50000, quantity: 0, name :'10년 미만 교수-기본'},
    optionP2 : {price : 100000, quantity :0, name :'10년 이상 교수-기본'},
    optionP3 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시술'},
    optionP4 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시술'},
    optionP5 : {price : 52500, quantity: 0, name :'10년 미만 교수-기본+시간'},
    optionP6 : {price : 105000, quantity: 0, name :'10년 이상 교수-기본+시간'},
    optionP7 : {price : 55000, quantity: 0, name :'10년 미만 교수-기본+시술+시간'},
    optionP8 : {price : 110000, quantity: 0, name :'10년 이상 교수-기본+시술+시간'},

    option1: { price: 200000, quantity: 0, name :'참여비'},
    option2: { price: 50000, quantity: 0, name :'전문가 육안평가'},
    option3: { price: 50000, quantity: 0, name :'사진촬영'},
    option4: { price: 40000, quantity: 0, name :'GI 지수'},
    option5: { price: 50000, quantity: 0, name :'피험자 컨트롤 비용'},
  },
  fixedOption: {
    option2: { price: 3500000, quantity: 1, name :'IRB 작성 비용', times : 0},
    option3: { price: 5500000, quantity: 1, name :'IRB 심의 비용', times : 0},
    optionGCCL: { price: 0, quantity: 1, name :'검체 분석 외주 비용', times : 0},
    optionExtra: { price: 0, quantity: 0.17, name :'간접비 17% (추가시 총액 입력)', times : 0},
  }
},
]

