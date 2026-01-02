/*
클래스: 설계도(문서)같은 것. 실체가 아님

클래스 vs 객체
붕어빵틀 vs 붕어빵
*/
export class StorageService {
  // 전역 변수는 객체가 살아있는 동안 데이터가 유지된다.
  // 속성은 밖에서 손 못대게 은닉화 해놓고 메소드가 변경할 수 있게 하는 게 좋다
  #storageName; // 전역변수(속성), #이 붙으면 private(비공개) 외부에서 접근할 수 없는 속성
  //객체 내부에서만 호출할 수 있음
  #lastId;

  ///////////////////생성자 ///////////////////
  // 생성자. 객체를 생성하려면 꼭 생성자를 호출해야함
  // 메소드지만 특별한 경우: 객체 생성(객체화)할 때만 호출
  constructor(storageName) {
    //파라미터. 객체 생성 때 외부에서 값이 들어옴
    if (!storageName) {
      throw new Error('스토리지 이름을 입력해주세요.');
    }
    this.#storageName = storageName;
    this.#lastId = 1; // 나중에 수정하려고 넣는가봄
  }
  ///////////////////생성자 ///////////////////

  //스토리지에서 데이터 조회 p161
  // # 붙이면: 내부에서만 사용하고 외부에서는 접근하지 못함. 은닉화, 캡슐화
  #getStorageData() {
    const json = localStorage.getItem(this.#storageName);
    // 자료가 담겨져 있다면 json이 존재하고 true가 되어 객체 변환 리턴
    if (json) {
      return JSON.parse(json);
    } // 문자열을 객체로 변환 후 리턴
    return {}; //빈객체 리턴
  }

  //스토리지에 데이터 저장 p161
  #saveStorageData(obj) {
    const json = JSON.stringify(obj); //객체(data)를 json문자열(values)로 변환
    localStorage.setItem(this.#storageName, json); // value를 localStorage에 저장
  }

  // 신규 항목 추가 p162
  addItem(item) {
    console.log(item);
    //item = {title: '1', content: ''}
    const storageData = this.#getStorageData(); //기존에 저장된 데이터 가져와 (최초 빈 객체가 넘어온다)
    item.id = this.#lastId; //아이디가 없는 객체에 아이디 속성값 넣음  item = {title: '1', content: ''}
    storageData[this.#lastId++] = item; // {'1':{title: '1', content: ''}} 처리하고 나서 #lastId + 1
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
  delItem(id) {
    //특정한 메모글을 삭제하기 위해 id값을 파라미터로 받는다.
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