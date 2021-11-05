## 구현 사항

- [ ]
- [ ]
- [ ]

---

### 파일 구조

```bash
├── server
├── src
│    ├──── action       #액션을 관리하는 디렉토리
│    │         ├───── ActionTypes.js    #액션을 상수화
│    │         ├───── modalAction.js    #modal리듀서에 대한 액션 관리
│    │         └───── postAction.js     #post리듀서에 대한 액션 관리
│    ├──── apis
│    │       └───── giphyApi.js
│    ├──── compoenets
│    │        ├───── App.jsx          #페이지를 라우트 해주도록 관리하는 App컴포넌트
│    │        ├───── Header.jsx       #헤더 컴포넌트
│    │        ├───── PostData.jsx     #게시글
│    │        ├───── PostForm.jsx     #게시물 입력받는 폼
│    │        └───── PostModal.jsx    #모달 컴포넌트
│    ├──── pages
│    │      ├───── Credit.jsx
│    │      ├───── Detail.jsx
│    │      ├───── Feed.jsx
│    │      ├───── Home.jsx
│    │      └───── Surf.jsx
│    ├──── reducer
│    │       ├───── modal.jsx
│    │       └───── post.jsx
│    └──── utils
├── App.css
├── index.css
├── index.js
└── store.js        #모든 상태를 관리할 store
```

### ❓ Reducer 동작 구조

---

#### 이벤트 발생

![KakaoTalk_20211105_185542433](https://user-images.githubusercontent.com/48541850/140492660-18d98c61-5dfd-48fe-8d6f-c8f601032a86.jpg)

---

#### Store.js

## ![KakaoTalk_20211105_185542433_03](https://user-images.githubusercontent.com/48541850/140492852-8be8ec1c-4dad-4123-a89d-75696ff12bc2.jpg)

#### postAction.js

![KakaoTalk_20211105_185542433_04](https://user-images.githubusercontent.com/48541850/140492909-657e9ad4-dec9-44e3-abf1-70af2ad2f513.jpg)

---

#### post.js

![KakaoTalk_20211105_185542433_05](https://user-images.githubusercontent.com/48541850/140493004-97bda88b-7dff-4639-a6c3-98de3c9bfabf.jpg)

---

#### 삭제 완료

![KakaoTalk_20211105_185542433_06](https://user-images.githubusercontent.com/48541850/140493068-453c13eb-3131-43d9-a1be-12fcb02c1f9c.jpg)

---

#### 요약

![KakaoTalk_20211105_185542433_07](https://user-images.githubusercontent.com/48541850/140493122-8d67c6b2-644f-4bb7-a6a7-42d1aacd8721.jpg)

---
