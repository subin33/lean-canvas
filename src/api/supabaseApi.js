import { supabase } from '../lib/supabase';

// Canvas 관련 API 함수들
export const canvasApi = {
  // 모든 캔버스 조회
  async getAllCanvases() {
    try {
      const { data, error } = await supabase
        .from('canvases')
        .select('*')
        .order('last_modified', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('캔버스 조회 중 오류 발생:', error);
      throw error;
    }
  },

  // 특정 캔버스 조회
  async getCanvasById(id) {
    try {
      const { data, error } = await supabase
        .from('canvases')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('캔버스 조회 중 오류 발생:', error);
      throw error;
    }
  },

  // 새 캔버스 생성
  async createCanvas(canvasData) {
    try {
      const { data, error } = await supabase
        .from('canvases')
        .insert([
          {
            title: canvasData.title || '새로운 캔버스',
            category: canvasData.category || '신규',
            last_modified: new Date().toISOString(),
            problem: { notes: [] },
            customer_segments: { notes: [] },
            value_proposition: { notes: [] },
            solution: { notes: [] },
            unfair_advantage: { notes: [] },
            channels: { notes: [] },
            key_metrics: { notes: [] },
            cost_structure: { notes: [] },
            revenue_streams: { notes: [] },
            existing_alternatives: { notes: [] },
            high_level_concept: { notes: [] },
            early_adopters: { notes: [] },
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('캔버스 생성 중 오류 발생:', error);
      throw error;
    }
  },

  // 캔버스 업데이트
  async updateCanvas(id, updateData) {
    try {
      const { data, error } = await supabase
        .from('canvases')
        .update({
          ...updateData,
          last_modified: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('캔버스 업데이트 중 오류 발생:', error);
      throw error;
    }
  },

  // 캔버스 삭제
  async deleteCanvas(id) {
    try {
      const { error } = await supabase.from('canvases').delete().eq('id', id);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('캔버스 삭제 중 오류 발생:', error);
      throw error;
    }
  },

  // 카테고리별 캔버스 조회
  async getCanvasesByCategory(category) {
    try {
      const { data, error } = await supabase
        .from('canvases')
        .select('*')
        .eq('category', category)
        .order('last_modified', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('카테고리별 캔버스 조회 중 오류 발생:', error);
      throw error;
    }
  },

  // 제목으로 캔버스 검색
  async searchCanvases(searchTerm) {
    try {
      const { data, error } = await supabase
        .from('canvases')
        .select('*')
        .ilike('title', `%${searchTerm}%`)
        .order('last_modified', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('캔버스 검색 중 오류 발생:', error);
      throw error;
    }
  },
};
