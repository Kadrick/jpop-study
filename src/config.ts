export const site = {
  name: "곡 노트",
  description: "일본 노래를 듣고 적는 단어와 한자.",
};

/**
 * 광고는 글 안에서만, 영상 다음과 단어 목록 앞에 한 칸, 글 끝에 한 칸.
 * 게시자 ID가 없으면 칸을 그리지 않는다.
 */
export const adsense = {
  client: import.meta.env.PUBLIC_ADSENSE_CLIENT ?? "",
  slots: {
    afterPlayer: import.meta.env.PUBLIC_ADSENSE_SLOT_AFTER_PLAYER ?? "",
    afterNote: import.meta.env.PUBLIC_ADSENSE_SLOT_AFTER_NOTE ?? "",
  },
};
