import { Goods } from './../types';

const goodslist: Goods[] = [
  {
    id: 1,
    img: `images/1.jpg`,
    title: `떡볶이 팝니다`,
    price: 3000,
    text: `아주 맛있는 떡볶이입니다. 매운 맛 총 5단계 선택가능 합니다. 아주 맛있는 떡볶이입니다. 매운 맛 총 5단계 선택가능 합니다 아주 맛있는 떡볶이입니다. 매운 맛 총 5단계 선택가능 합니다  아주 맛있는 떡볶이입니다. 매운 맛 총 5단계 선택가능 합니다
    아주 맛있는 떡볶이입니다. 매운 맛 총 5단계 선택가능 합니다 아주 맛있는 떡볶이입니다. 매운 맛 총 5단계 선택가능 합니다 아주 맛있는 떡볶이입니다. 매운 맛 총 5단계 선택가능 합니다
    아주 맛있는 떡볶이입니다. 매운 맛 총 5단계 선택가능 합니다`,
    writer: `김코딩`
  },
  {
    id: 2,
    img: `images/2.webp`,
    title: `맥주 팔아요`,
    price: 100000,
    text: `수입 맥주 네 캔 만원 블랑 기네스 어쩌구 저쩌구 이러쿵 저러쿵 수입 맥주 네 캔 만원 블랑 기네스 어쩌구 저쩌구 이러쿵 저러쿵수입 맥주 네 캔 만원 블랑 기네스 어쩌구 저쩌구 이러쿵 저러쿵
    수입 맥주 네 캔 만원 블랑 기네스 어쩌구 저쩌구 이러쿵 저러쿵 수입 맥주 네 캔 만원 블랑 기네스 어쩌구 저쩌구 이러쿵 저러쿵수입 맥주 네 캔 만원 블랑 기네스 어쩌구 저쩌구 이러쿵 저러쿵 수입 맥주
    네 캔 만원 블랑 기네스 어쩌구 저쩌구 이러쿵 저러쿵 수입 맥주 네 캔 만원 블랑 기네스 어쩌구 저쩌구 이러쿵 저러쿵
    `,
    writer: `김코딩`
  },
  {
    id: 3,
    img: `images/3.jpg`,
    title: `참깨라면 신라면`,
    price: 3555,
    text: '진라면 삼양라면 불닭볶음면 5개 묶음이 어쩌구 저쩌구 한 박스에 어쩌고 저쩌고 진라면 삼양라면 삼양라면 불닭볶음면 5개 묶음이 어쩌구 저쩌구 한 박스에 어쩌고 저쩌고 진라면 삼양라면 불닭볶음면 5개 묶음이 어쩌구 저쩌구 한 박스에 어쩌고 저쩌고 진라면 삼양라면 불닭볶음면 5개 묶음이 어쩌구 저쩌구 한 박스에 어쩌고 저쩌고 진라면 삼양라면 불닭볶음면 5개 묶음이 어쩌구 저쩌구 한 박스에 어쩌고 저쩌고',
    writer: `이딩코`
  },
  {
    id: 4,
    img: `images/4.webp`,
    title: `스타벅스 아이스아메리카노 Tall 기프티콘`,
    price: 100,
    text: '유효기간 언제까지입니다 얼른 사가세요 유효기간 언제까지입니다 얼른 사가세요 유효기간 언제까지입니다 얼른 사가세요유효기간 언제까지입니다 얼른 사가세요유효기간 언제까지입니다 얼른 사가세요유효기간 언제까지입니다 얼른 사가세요 유효기간 언제까지입니다 얼른 사가세요유효기간 언제까지입니다 얼른 사가세요유효기간 언제까지입니다 얼른 사가세요유효기간 언제까지입니다 얼른 사가세요유효기간 언제까지입니다 얼른 사가세요',
    writer: `김코코`
  },
  {
    id: 5,
    img: `images/5.webp`,
    title: `미개봉 애플워치`,
    price: 22334,
    text: '주문 실수해서 두 개 오는 바람에 어쩌구 미개봉으로 어쩌고 네고 채팅 답장 안 합니다 주문 실수해서 두 개 오는 바람에 어쩌구 미개봉으로 어쩌고 네고 채팅 답장 안 합니다주문 실수해서 두 개 오는 바람에 어쩌구 미개봉으로 어쩌고 네고 채팅 답장 안 합니다 주문 실수해서 두 개 오는 바람에 어쩌구 미개봉으로 어쩌고 네고 채팅 답장 안 합니다 주문 실수해서 두 개 오는 바람에 어쩌구 미개봉으로 어쩌고 네고 채팅 답장 안 합니다주문 실수해서 두 개 오는 바람에 어쩌구 미개봉으로 어쩌고 네고 채팅 답장 안 합니다주문 실수해서 두 개 오는 바람에 어쩌구 미개봉으로 어쩌고 네고 채팅 답장 안 합니다주문 실수해서 두 개 오는 바람에 어쩌구 미개봉으로 어쩌고 네고 채팅 답장 안 합니다주문 실수해서 두 개 오는 바람에 어쩌구 미개봉으로 어쩌고 네고 채팅 답장 안 합니다주문 실수해서 두 개 오는 바람에 어쩌구 미개봉으로 어쩌고 네고 채팅 답장 안 합니다 주문 실수해서 두 개 오는 바람에 어쩌구 미개봉으로 어쩌고 네고 채팅 답장 안 합니다 ',
    writer: `이딩딩`
  },
  {
    id: 6,
    img: `images/6.webp`,
    title: `옷장 팝니다`,
    price: 55555,
    text: '직접 와서 가져 가실 분만 연락주세요 어쩌고 직접 와서 가져 가실 분만 연락주세요 어쩌고직접 와서 가져 가실 분만 연락주세요 어쩌고직접 와서 가져 가실 분만 연락주세요 어쩌고 직접 와서 가져 가실 분만 연락주세요 어쩌고 직접 와서 가져 가실 분만 연락주세요 어쩌고직접 와서 가져 가실 분만 연락주세요 어쩌고직접 와서 가져 가실 분만 연락주세요 어쩌고직접 와서 가져 가실 분만 연락주세요 어쩌고직접 와서 가져 가실 분만 연락주세요 어쩌고직접 와서 가져 가실 분만 연락주세요 어쩌고직접 와서 가져 가실 분만 연락주세요 어쩌고 직접 와서 가져 가실 분만 연락주세요 어쩌고 직접 와서 가져 가실 분만 연락주세요 어쩌고 직접 와서 가져 가실 분만 연락주세요 어쩌고 직접 와서 가져 가실 분만 연락주세요 어쩌고',
    writer: `김딩코`
  }
];

export default goodslist;
