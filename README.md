# LimchPage

개인 블로그/홈페이지 프로젝트 - Node.js 풀스택 개발 학습용, 폐기 상태

## 📝 프로젝트 소개

이 프로젝트는 웹 개발의 전체적인 흐름을 학습하기 위해 만든 개인 블로그 시스템입니다.
프론트엔드부터 백엔드, 데이터베이스까지 웹 개발의 전 과정을 경험할 수 있도록 구성되었습니다.

## 🛠 기술 스택

### Backend

- **Node.js** - 서버 런타임 환경
- **Express.js** - 웹 프레임워크
- **MongoDB** - NoSQL 데이터베이스
- **Mongoose** - MongoDB ODM

### Frontend

- **HTML5** - 마크업
- **CSS3** - 스타일링 (반응형 디자인)
- **Vanilla JavaScript** - DOM 조작 및 비동기 통신
- **EJS** - 서버사이드 템플릿 엔진

### 외부 라이브러리

- **Font Awesome** - 아이콘
- **Google Fonts** - 웹 폰트

## 🎯 학습 목표

### 1. **Node.js 서버 개발**

- Express.js를 이용한 웹 서버 구축
- 정적 파일 서빙
- 미들웨어 사용법

### 2. **데이터베이스 연동**

- MongoDB 연결 및 CRUD 작업
- Mongoose를 통한 스키마 정의
- 데이터 모델링

### 3. **REST API 설계**

- GET/POST 라우팅
- JSON 데이터 처리
- RESTful한 URL 구조

### 4. **프론트엔드 개발**

- 반응형 웹 디자인
- DOM 조작 및 이벤트 처리
- Fetch API를 이용한 비동기 통신

### 5. **템플릿 엔진**

- EJS를 이용한 동적 HTML 생성
- 서버 데이터를 프론트엔드에 전달

### 6. **사용자 인터페이스**

- 모바일 친화적인 반응형 navbar
- 실시간 미리보기 기능
- 카드 레이아웃 디자인

## 🚀 실행 방법

### 사전 요구사항

- Node.js 설치
- MongoDB 설치 및 실행 (선택사항 - 없어도 실행 가능)

### 실행 단계

1. 의존성 설치

```bash
npm install
```

2. MongoDB 실행 (선택사항)

```bash
mongod
```

3. 서버 실행

```bash
node server.js
```

4. 브라우저에서 접속

```
http://localhost:3000
```

## 📁 프로젝트 구조

```
limchPage/
├── server.js          # 메인 서버 파일
├── DB.js              # MongoDB 연결 및 스키마 관리
├── router/
│   └── main.js        # 라우팅 로직
├── views/
│   ├── index.ejs      # 메인 페이지 템플릿
│   └── write.html     # 글쓰기 페이지
├── public/
│   ├── css/           # 스타일시트
│   └── js/            # 클라이언트 JavaScript
└── package.json       # 프로젝트 설정
```

## ✨ 주요 기능

- 📖 **포스트 조회**: 작성된 글 목록 확인
- ✍️ **포스트 작성**: 새로운 글 작성 및 저장
- 📱 **반응형 디자인**: 모바일/데스크톱 대응
- 👀 **실시간 미리보기**: 글 작성 시 실시간 미리보기
- 🔄 **비동기 통신**: Fetch API를 통한 서버 통신

## 🔧 개발 노트

- MongoDB 연결 실패 시에도 애플리케이션이 정상 동작하도록 예외처리 구현
- EJS와 HTML을 혼용하여 템플릿 엔진 학습
- Vanilla JavaScript로 SPA 느낌의 사용자 경험 구현
