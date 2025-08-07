# 🚀 Supabase 마이그레이션 완전 가이드

## 📋 개요

기존 JSON Server에서 Supabase로 백엔드를 마이그레이션하는 방법을 단계별로 안내합니다.

## 🎯 목표

- JSON Server의 읽기 전용 제한 해결
- 실시간 데이터베이스 기능 활용
- 무료로 강력한 백엔드 API 구축

## 📝 단계별 마이그레이션 가이드

### 1단계: Supabase 프로젝트 생성

#### 1.1 Supabase 가입 및 로그인

1. https://supabase.com 접속
2. GitHub 계정으로 로그인
3. "New Project" 클릭

#### 1.2 프로젝트 설정

- **프로젝트 이름**: `lean-canvas-api`
- **데이터베이스 비밀번호**: 안전한 비밀번호 설정 (기억해두세요!)
- **지역**: `Asia Pacific (Singapore)` 추천 (한국에서 접속 속도가 빠름)
- **Pricing Plan**: Free tier 선택

### 2단계: 데이터베이스 테이블 생성

#### 2.1 Supabase 대시보드에서 SQL Editor 열기

1. 프로젝트 대시보드 접속
2. 왼쪽 메뉴에서 "SQL Editor" 클릭
3. "New query" 클릭

#### 2.2 테이블 생성 SQL 실행

```sql
-- Canvas 테이블 생성
CREATE TABLE canvases (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  last_modified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  category TEXT DEFAULT '신규',
  problem JSONB DEFAULT '{"notes": []}'::jsonb,
  customer_segments JSONB DEFAULT '{"notes": []}'::jsonb,
  value_proposition JSONB DEFAULT '{"notes": []}'::jsonb,
  solution JSONB DEFAULT '{"notes": []}'::jsonb,
  unfair_advantage JSONB DEFAULT '{"notes": []}'::jsonb,
  channels JSONB DEFAULT '{"notes": []}'::jsonb,
  key_metrics JSONB DEFAULT '{"notes": []}'::jsonb,
  cost_structure JSONB DEFAULT '{"notes": []}'::jsonb,
  revenue_streams JSONB DEFAULT '{"notes": []}'::jsonb,
  existing_alternatives JSONB DEFAULT '{"notes": []}'::jsonb,
  high_level_concept JSONB DEFAULT '{"notes": []}'::jsonb,
  early_adopters JSONB DEFAULT '{"notes": []}'::jsonb
);
```

#### 2.3 기존 데이터 삽입

```sql
-- 기존 데이터 삽입
INSERT INTO canvases (id, title, last_modified, category, problem, customer_segments, value_proposition, solution, unfair_advantage, channels, key_metrics, cost_structure, revenue_streams, existing_alternatives, high_level_concept, early_adopters) VALUES
(1, '친환경 도시 농업 플랫ㅎ', '2023-06-15', '농업', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}'),
(2, 'AI 기반 건강 관리 앱', '2023-06-10', '헬스케어', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}'),
(3, '온디맨드 물류 서비스', '2023-06-05', '물류', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}'),
(4, 'VR 가상 여행 서비스', '2023-06-01', '여행', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}'),
(5, '혁신적인 스마트홈 솔루션!!', '2023-08-22', '신규',
  '{"notes": [{"id": "p2", "content": "높은 초기 설치 비용", "color": "bg-pink-300"}, {"id": "p3", "content": "다양한 기기 간 호환성 문제", "color": "bg-blue-300"}]}',
  '{"notes": [{"id": "cs1", "content": "30-50대 중산층 가정", "color": "bg-blue-300"}, {"id": "cs2", "content": "기술에 관심 있는 밀레니얼 세대", "color": "bg-yellow-300"}, {"id": "cs3", "content": "에너지 절약에 관심 있는 환경 의식적 소비자", "color": "bg-pink-300"}]}',
  '{"notes": [{"id": "vp1", "content": "직관적이고 사용하기 쉬운 인터페이스", "color": "bg-pink-300"}, {"id": "vp2", "content": "저렴한 초기 비용과 월 구독 모델", "color": "bg-yellow-300"}, {"id": "vp3", "content": "모든 주요 스마트홈 기기와 호환", "color": "bg-green-300"}]}',
  '{"notes": [{"id": "s1", "content": "AI 기반 자동화 시스템", "color": "bg-yellow-300"}, {"id": "s2", "content": "클라우드 기반 중앙 제어 시스템ㅇㅇ", "color": "bg-blue-300"}, {"id": "s3", "content": "모듈식 설계로 쉬운 확장성", "color": "bg-pink-300"}]}',
  '{"notes": [{"id": "ua1", "content": "특허받은 AI 알고리즘", "color": "bg-pink-300"}, {"id": "ua2", "content": "주요 스마트홈 기기 제조업체와의 독점 파트너십ㄹㄹ", "color": "bg-yellow-300"}, {"id": "039e1869-507b-4323-890e-40e5f9b966a6", "content": "ㅎㅏㄴㄱㅡㄹㅇㅣㅂㄹㅕㄱ", "color": "bg-yellow-300"}]}',
  '{"notes": [{"id": "ch1", "content": "온라인 직접 판매", "color": "bg-yellow-300"}, {"id": "ch2", "content": "전문 설치 업체 네트워크", "color": "bg-blue-300"}, {"id": "ch3", "content": "대형 전자제품 소매점", "color": "bg-pink-300"}]}',
  '{"notes": [{"id": "km1", "content": "월간 활성 사용자 수", "color": "bg-blue-300"}, {"id": "km2", "content": "고객 유지율", "color": "bg-yellow-300"}, {"id": "km3", "content": "평균 에너지 절감률", "color": "bg-pink-300"}]}',
  '{"notes": [{"id": "cs1", "content": "하드웨어 개발 및 생산 비용", "color": "bg-pink-300"}, {"id": "cs2", "content": "소프트웨어 개발 및 유지보수", "color": "bg-blue-300"}, {"id": "cs3", "content": "마케팅 및 고객 지원", "color": "bg-yellow-300"}]}',
  '{"notes": [{"id": "rs1", "content": "하드웨어 판매", "color": "bg-yellow-300"}, {"id": "rs2", "content": "월간 구독료", "color": "bg-pink-300"}, {"id": "rs3", "content": "프리미엄 기능 업그레이드", "color": "bg-blue-300"}]}',
  '{"notes": [{"id": "ea1", "content": "기존 홈 오토메이션 시스템", "color": "bg-yellow-300"}, {"id": "ea2", "content": "개별 스마트 기기 사용", "color": "bg-pink-300"}]}',
  '{"notes": [{"id": "hlc1", "content": "모든 가정을 위한 AI 기반 스마트홈", "color": "bg-blue-300"}]}',
  '{"notes": [{"id": "ea1", "content": "테크 얼리어답터", "color": "bg-blue-300"}, {"id": "ea2", "content": "에너지 절약 열성 지지자", "color": "bg-pink-300"}]}'),
(6, 'a7c5_새로운 캔버스', '2025-08-06 15:57:50', '신규', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}', '{"notes": []}');

-- 시퀀스 재설정
SELECT setval('canvases_id_seq', (SELECT MAX(id) FROM canvases));
```

### 3단계: 환경 변수 설정

#### 3.1 Supabase API 키 확인

1. Supabase 대시보드에서 "Settings" > "API" 클릭
2. 다음 정보를 복사:
   - **Project URL**: `https://your-project-id.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

#### 3.2 환경 변수 파일 생성

프로젝트 루트에 `.env` 파일 생성:

```env
# Supabase 설정 (Vite 환경 변수는 VITE_ 접두사 필요)
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4단계: 코드 마이그레이션 완료

이미 다음 파일들이 업데이트되었습니다:

- ✅ `src/lib/supabase.js` - Supabase 클라이언트 설정
- ✅ `src/api/supabaseApi.js` - Supabase API 함수들
- ✅ `src/api/canvas.js` - Canvas API 함수들 업데이트
- ✅ `src/utils/dataMapper.js` - 데이터 매핑 함수들
- ✅ `src/pages/Home.jsx` - 홈 페이지 업데이트
- ✅ `src/pages/CanvasDetail.jsx` - 상세 페이지 업데이트
- ✅ `src/components/LeanCanvas.jsx` - 안전장치 추가

### 5단계: 테스트 및 검증

#### 5.1 개발 서버 실행

```bash
npm run dev
```

#### 5.2 기능 테스트

1. **캔버스 목록 조회**: 홈페이지에서 캔버스 목록이 표시되는지 확인
2. **새 캔버스 생성**: "등록하기" 버튼으로 새 캔버스 생성 테스트
3. **캔버스 수정**: 캔버스 제목 수정 및 내용 편집 테스트
4. **캔버스 삭제**: 캔버스 삭제 기능 테스트
5. **검색 및 필터링**: 검색바와 카테고리 필터 테스트

### 6단계: 배포

#### 6.1 Vercel 배포 (프론트엔드)

1. GitHub에 코드 푸시
2. Vercel에서 프로젝트 연결
3. 환경 변수 설정 (Vercel 대시보드에서)
4. 배포 완료

#### 6.2 환경 변수 설정 (Vercel)

Vercel 대시보드에서 다음 환경 변수 설정:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### 7단계: 정리 작업 (완료됨)

#### 7.1 불필요한 파일 삭제

- ✅ `data/db.json` - 기존 JSON Server 데이터 파일 삭제
- ✅ `src/api/http.js` - 기존 axios 기반 API 파일 삭제

#### 7.2 의존성 정리

- ✅ `axios` 패키지 제거
- ✅ `json-server` 패키지 제거
- ✅ `package.json`에서 불필요한 스크립트 제거

#### 7.3 환경 변수 정리

- ✅ JSON Server 관련 환경 변수 제거
- ✅ Supabase 환경 변수만 유지

## 🔧 추가 설정 (선택사항)

### Row Level Security (RLS) 설정

```sql
-- RLS 활성화
ALTER TABLE canvases ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 읽기/쓰기 가능하도록 정책 설정
CREATE POLICY "Allow all operations for authenticated users" ON canvases
  FOR ALL USING (true);
```

### 실시간 기능 활성화

```sql
-- 실시간 기능 활성화
ALTER PUBLICATION supabase_realtime ADD TABLE canvases;
```

## 🎉 마이그레이션 완료!

### 장점

- ✅ **읽기/쓰기 모두 가능**: JSON Server의 읽기 전용 제한 해결
- ✅ **실시간 기능**: 실시간 데이터 업데이트 가능
- ✅ **무료 플랜**: 월 50,000 요청, 500MB 데이터베이스
- ✅ **자동 API 생성**: 테이블 생성 시 즉시 REST API 제공
- ✅ **인증 시스템**: 사용자 관리 기능 내장
- ✅ **확장성**: 필요시 유료 플랜으로 쉽게 확장
- ✅ **코드 정리**: 불필요한 의존성과 파일 제거

### 다음 단계

1. **실시간 기능 활용**: 실시간 캔버스 업데이트 구현
2. **사용자 인증**: Supabase Auth를 활용한 로그인 시스템
3. **파일 업로드**: Supabase Storage를 활용한 이미지 업로드
4. **백업 및 복구**: 자동 백업 기능 활용

## 🆘 문제 해결

### 자주 발생하는 문제들

#### 1. 환경 변수 오류

```
Error: Missing environment variable VITE_SUPABASE_URL
```

**해결방법**:

- `.env` 파일이 프로젝트 루트에 있는지 확인
- 환경 변수 이름이 `VITE_` 접두사로 시작하는지 확인
- Vite에서는 클라이언트 사이드에서 사용할 환경 변수는 `VITE_` 접두사가 필요

#### 2. CORS 오류

```
Access to fetch at 'https://...' from origin 'http://localhost:3000' has been blocked by CORS policy
```

**해결방법**: Supabase는 기본적으로 CORS를 허용하므로, URL과 API 키가 정확한지 확인

#### 3. 데이터베이스 연결 오류

```
Error: Invalid API key
```

**해결방법**: Supabase 대시보드에서 API 키를 다시 확인하고 복사

## 📞 지원

문제가 발생하면:

1. 브라우저 개발자 도구의 콘솔 확인
2. Supabase 대시보드의 Logs 확인
3. GitHub Issues에 문제 보고

---

**🎯 마이그레이션 완료 후에는 더 강력하고 확장 가능한 백엔드 API를 사용할 수 있습니다!**
