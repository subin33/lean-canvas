import { createClient } from '@supabase/supabase-js';

// Supabase 프로젝트 설정
// 이 값들은 Supabase 대시보드의 Settings > API에서 확인할 수 있습니다
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Supabase 클라이언트 생성
export const supabase = createClient(supabaseUrl, supabaseKey);
