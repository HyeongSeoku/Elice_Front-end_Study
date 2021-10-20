const dataList = [
  { id: 1, title: "첫번째 글", body: "첫 번째 글 내용" },
  { id: 2, title: "두번째 글", body: "두 번째 글 내용" },
  { id: 3, title: "첫", body: "첫 내용 Test" },
];
//선언부
const search_input = document.querySelector("#search_input");
const search_bnt = document.querySelector("#search_btn");

const create_form = document.querySelector("#create_form");
const create_btn = document.querySelector("#create_btn");

//화면에 데이터 뿌려줌
const 



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
const showCreateForm = () => {
  //보이도록
  create_form.classList.remove("vis_none");
  const create_submit_btn = document.querySelector("#create_submit_btn");

  create_submit_btn.addEventListener("click", (event) => {
    event.preventDefault();
    createData();
  });
};

const createData = () => {
  //상단 선언부에서 선언시 오류남 (display="none")때문
  const create_title_input = document.querySelector("#create_title_input");
  const create_body_input = document.querySelector("#create_body_input");
  const curIdx = dataList[dataList.length - 1].id;
  console.log(curIdx);

  dataList.push({
    id: curIdx + 1,
    title: create_title_input.value,
    body: create_body_input.value,
  });
  console.log(dataList);
  //폼 다시 랜더링 되도록 함수 호출
};


/*
이벤트 adapter
*/

//검색 버튼
search_btn.addEventListener("click", (event) => {
  event.preventDefault();
  serachData();
});

//생성 버튼
create_btn.addEventListener("click", () => {
  showCreateForm();
});
