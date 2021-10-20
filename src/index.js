const dataList = [
  { id: 1, title: "첫번째 글", body: "첫 번째 글 내용" },
  { id: 2, title: "두번째 글", body: "두 번째 글 내용" },
  { id: 3, title: "첫", body: "첫 내용 Test" },
];
//선언부
const search_input = document.querySelector("#search_input");
const search_bnt = document.querySelector("#search_btn");

const create_btn = document.querySelector("#create_btn");
const create_input = document.querySelector("#create_input");

//검색
const serachData = () => {
  const searchTarget = search_input.value; //검색어
  const searchResult = []; //검색한 결과 담을 배열
  for (var i = 0; i < dataList.length; i++) {
    if (searchTarget === "") {
      alert("검색어를 입력해 주세요.");
      break;
    }
    //search메소드 사용, 해당 문자열을 포함하고 있는지 탐색
    if (dataList[i].title.search(searchTarget) != -1) {
      searchResult.push(dataList[i]); //포함시 검색 결과에 push
    }
  }
  //검색된 결과가 없을경우
  if (searchResult.length === 0 && searchTarget !== "") {
    console.log("글 이 없습니다");
  } else {
    console.log(searchResult);
  }
  //검색어 초기화
  search_input.value = "";
};

//생성
const createData = () => {};

//이벤트 adapter
search_btn.addEventListener("click", (event) => {
  event.preventDefault();
  serachData();
});
