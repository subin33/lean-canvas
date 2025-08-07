import { canvasApi } from './supabaseApi';
import { v4 as uuidv4 } from 'uuid';

// 모든 캔버스 조회 (필터링 지원)
export async function getCanvases(params = {}) {
  try {
    let data;

    // 검색어가 있는 경우
    if (params.title_like) {
      data = await canvasApi.searchCanvases(params.title_like);
    }
    // 카테고리 필터가 있는 경우
    else if (params.category) {
      data = await canvasApi.getCanvasesByCategory(params.category);
    }
    // 모든 캔버스 조회
    else {
      data = await canvasApi.getAllCanvases();
    }

    return data;
  } catch (error) {
    console.error('캔버스 조회 중 오류:', error);
    throw error;
  }
}

// 새 캔버스 생성
export async function createCanvas() {
  try {
    const newCanvas = {
      title: uuidv4().substring(0, 4) + '_새로운 캔버스',
      category: '신규',
    };

    const data = await canvasApi.createCanvas(newCanvas);
    return data;
  } catch (error) {
    console.error('캔버스 생성 중 오류:', error);
    throw error;
  }
}

// 캔버스 삭제
export async function deleteCanvas(id) {
  try {
    await canvasApi.deleteCanvas(id);
  } catch (error) {
    console.error('캔버스 삭제 중 오류:', error);
    throw error;
  }
}

// 특정 캔버스 조회
export async function getCanvasById(id) {
  try {
    const data = await canvasApi.getCanvasById(id);
    return data;
  } catch (error) {
    console.error('캔버스 조회 중 오류:', error);
    throw error;
  }
}

// 캔버스 제목 업데이트
export async function updateTitle(id, title) {
  try {
    const data = await canvasApi.updateCanvas(id, { title });
    return data;
  } catch (error) {
    console.error('캔버스 제목 업데이트 중 오류:', error);
    throw error;
  }
}

// 캔버스 전체 업데이트
export async function updateCanvas(id, canvas) {
  try {
    const data = await canvasApi.updateCanvas(id, canvas);
    return data;
  } catch (error) {
    console.error('캔버스 업데이트 중 오류:', error);
    throw error;
  }
}
