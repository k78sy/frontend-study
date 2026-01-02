/*
클래스: 설계도(문서)같은 것. 실체가 아님

클래스 vs 객체
붕어빵틀 vs 붕어빵
*/
class StorageService {
    #storageName; 
    #lastId;

    constructor(storageName) {
        if (!storageName) {
            throw new Error('스토리지 이름을 입력해주세요.');
        }
        this.#storageName = storageName;
        this.#lastId = 1; 
    }
    #getStorageData() {
        const json = localStorage.getItem(this.#storageName);
        if (json) {
            return JSON.parse(json);
        } // 문자열을 객체로 변환 후 리턴
        return {}; //빈객체 리턴
    }
    #saveStorageData(obj) {
        const json = JSON.stringify(obj);
        localStorage.setItem(this.#storageName, json); 
    }

    addItem(item) {
        const storageData = this.#getStorageData();
        item.id = this.#lastId;
        storageData[this.#lastId++] = item;
        this.#saveStorageData(storageData);
    }
  // 전체 항목 조회
    getItems() {
        return this.#getStorageData();
    }
  //특정 항목 조회
    getItem(id) {
        return this.#getStorageData()[id];
        const storageData = this.#getStorageData();
        // #getStorageData()의 결과로 객체가 들어감
        // item 객체가 리턴됨
        return storageData[id];
    }
    delItem(id) { //특정한 메모글을 삭제하기 위해 id값을 파라미터로 받는다.
        const storageData = this.#getStorageData();
        delete storageData[id];
        this.#saveStorageData(storageData);
    }
}

//객체가 하나만 만들어질 수 있도록 변경
const storageService = new StorageService('myMemo');
export default storageService;

// StorageService 클래스 내에 있는 생성자 호출
// 생성자 호출할땐 꼭 new 키워드가 있어야함