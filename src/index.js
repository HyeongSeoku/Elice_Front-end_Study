let dataList = [
  {
    id: 1,
    title: "첫번째 글",
    body: "첫 번째 글 내용",
    date: { year: 2021, month: 10, day: 15 },
  },
  {
    id: 2,
    title: "두번째 글",
    body: "두 번째 글 내용",
    date: { year: 2021, month: 10, day: 17 },
  },
  {
    id: 3,
    title: "첫",
    body: "첫 내용 Test",
    date: { year: 2021, month: 10, day: 19 },
  },
];
let curDataList = dataList;
//======선언부=========

//search
const search_form = document.querySelector("#search_form");
const search_input = document.querySelector("#search_input");
const search_btn = document.querySelector("#search_btn");

//create
const create_form = document.querySelector("#create_form");
const create_btn = document.querySelector("#create_btn");
const create_cancel_btn = document.querySelector("#create_cancel_btn");

const list_ul = document.querySelector(".list_ul");

//modal
const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal_close");
const modal_title = document.querySelector(".modal_title");
const modal_update_title_input = document.querySelector(
  ".modal_update_title_input"
);
const modal_update_body_input = document.querySelector(
  ".modal_update_body_input"
);
const modal_update_form = document.querySelector(".modal_update_form");

//======화면에 데이터 뿌려줌=====
const initList = () => {
  console.log("🚀 ~ file: index.js ~ line 36 ~ initList ~ dataList", dataList);
  list_ul.innerHTML = ""; //중복으로 데이터 뿌려지는것을 방지하기 위해 초기화

  //데이터가 없을 경우 처리
  if (dataList.length === 0) {
    list_ul.innerHTML = `<div id="data_empty">텅...</div>`;
  } else {
    dataList.forEach((i, index) => {
      const li = document.createElement("li");
      li.setAttribute("key", i.id);
      li.innerHTML = topicTemplate(i);
      list_ul.appendChild(li);
    });

    //=====삭제 메소드========
    const content_delete = document.querySelectorAll(".content_delete");
    content_delete.forEach((i) => {
      i.addEventListener("click", (event) => {
        const delTargetId = Number(
          event.currentTarget.parentNode.parentNode.parentNode.getAttribute(
            "key"
          )
        );
        const newList = dataList.filter((item) => {
          return item.id !== delTargetId;
        });
        dataList = newList;
        initList();
      });
    });

    //=========수정 메소드=======
    const content_update = document.querySelectorAll(".content_update");
    content_update.forEach((i) => {
      i.addEventListener("click", (event) => {
        modal.classList.add("open");
        modal_title.innerHTML = `<h3>수정<h3>`;
        const updateTargetId = Number(
          event.currentTarget.parentNode.parentNode.parentNode.getAttribute(
            "key"
          )
        );
        const updateTarget = dataList.findIndex((i) => i.id === updateTargetId);
        console.log(
          "🚀 ~ file: index.js ~ line 93 ~ i.addEventListener ~ updateTarget",
          updateTarget
        );
        //수정 하려는 글의 타이틀 value로 할당
        const prev_title = dataList[updateTarget].title;
        const prev_body = dataList[updateTarget].body;
        modal_update_title_input.value = prev_title;
        modal_update_body_input.value = prev_body;

        modal_update_form.addEventListener("submit", (ev) => {
          ev.preventDefault();
          const updateDate = getDate();
          const update_title = modal_update_title_input.value;
          const update_body = modal_update_body_input.value;
          //이전과 같을경우 변경 x 모달 종료
          if (update_title === prev_title && update_body === prev_body) {
            alert("변경사항이 없습니다.");
            modal.classList.remove("open");
          } else {
            dataList[updateTarget].title = update_title;
            dataList[updateTarget].body = update_body;
            dataList[updateTarget].date = {
              year: updateDate.year,
              month: updateDate.month,
              day: updateDate.day,
            };
          }
          modal.classList.remove("open");
          initList();
        });
      });
    });
  }
};

//=====글 기본 템플릿========
const topicTemplate = (data) => {
  return `
      <div id="content_container">
        <span class="content_id">${data.id}</span>
        <div class="content_title">${data.title}</div>
        <div class="content_body">${data.body}</div>
        <div id="date_container">
          <span>${data.date.year}</span>
          <span>${data.date.month}</span>
          <span>${data.date.day}</span>
        </div>
        <div class="content_btn_container">
          <button class="content_delete btn"><i class="fas fa-trash-alt"></i></button>
          <button class="content_update btn"><i class="fas fa-pen"></i></button>
        </div>
      </div>
  `;
};

//======검색========
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

//======생성=======

//새 글 입력 폼 보이고 숨기는 메소드
const showCreateForm = () => {
  //보이도록
  create_form.classList.remove("vis_none");
  create_btn.classList.add("vis_none");
  search_form.classList.add("vis_none");
  const create_submit_btn = document.querySelector("#create_submit_btn");

  create_submit_btn.addEventListener("click", (event) => {
    event.preventDefault();
    createData();
    search_form.classList.remove("vis_none");
    create_btn.classList.remove("vis_none");
    create_form.classList.add("vis_none");
    return;
  });
  //취소 버튼
  create_cancel_btn.addEventListener("click", (e) => {
    e.preventDefault();
    search_form.classList.remove("vis_none");
    create_btn.classList.remove("vis_none");
    create_form.classList.add("vis_none");
  });
};

//새 글 추가 메소드
const createData = () => {
  const createDate = getDate(); //날짜 받아옴

  //상단 선언부에서 선언시 오류남 (display="none")때문
  const create_title_input = document.querySelector("#create_title_input");
  const create_body_input = document.querySelector("#create_body_input");

  //데이터가 없을경우 id 처리
  const curIdx = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id;
  if (create_title_input.value !== "" && create_body_input !== "") {
    dataList.push({
      id: curIdx + 1,
      title: create_title_input.value,
      body: create_body_input.value,
      date: {
        year: createDate.year,
        month: createDate.month,
        day: createDate.day,
      },
    });
  } else {
    alert("값을 입력해주세요.");
  }
  //입력 폼 값 초기화
  create_title_input.value = "";
  create_body_input.value = "";
  //폼 다시 랜더링 되도록 함수 호출
  initList();
};

//날짜 메소드
const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return { year, month, day };
};

//동작시 가장 먼저 실행되야할 메소드 선언
window.onload = () => {
  initList();
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
create_btn.addEventListener("click", (event) => {
  event.preventDefault();
  showCreateForm();
});

//삭제 버튼

//modal event
modal_close.addEventListener("click", () => {
  modal.classList.remove("open");
});
