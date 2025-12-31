/*
클래스: 설계도(문서)같은 것. 실체가 아님

클래스 vs 객체
붕어빵틀 vs 붕어빵
*/
export class StorageService {
  #storageName; // 전역변수(속성), #이 붙으면 private(비공개) 외부에서 접근할 수 없는 속성

  // 생성자. 객체를 생성하려면 꼭 생성자를 호출해야함
  // 메소드지만 특별한 경우: 객체 생성(객체화)할 때만 호출
    constructor(storageName) {//파라미터. 객체 생성 때 외부에서 값이 들어옴
        if (!storageName) {
            throw new Error('스토리지 이름을 입력해주세요.')
        }
        this.#storageName = storageName
    }
    
    //특정항목 조회
    getItem(id) {
        const json = localStorage.getItem(this.#storageName)
        if (json) {
            const jsonData = JSON.parse(json);
            jsonData.items.find(item => item.id === id);
        }
        return undefined;
    }
}