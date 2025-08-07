import { useParams } from 'react-router-dom';
import CanvasTitle from '../components/CanvasTitle';
import LeanCanvas from '../components/LeanCanvas';
import { useEffect, useState } from 'react';
import { getCanvasById, updateCanvas, updateTitle } from '../api/canvas';
import { mapSupabaseToCanvas, mapCanvasToSupabase } from '../utils/dataMapper';

function CanvasDetail() {
  const { id } = useParams();
  const [canvas, setCanvas] = useState();

  useEffect(() => {
    const fetchCanvas = async () => {
      try {
        const data = await getCanvasById(id);
        // Supabase 데이터를 기존 형식으로 변환
        const mappedData = mapSupabaseToCanvas(data);
        setCanvas(mappedData);
      } catch (error) {
        console.error('캔버스 조회 중 오류:', error);
      }
    };
    fetchCanvas();
  }, [id]);

  const handleTitleChange = async title => {
    try {
      await updateTitle(id, title);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleCanvasChange = async updatedCanvas => {
    try {
      // 기존 형식을 Supabase 형식으로 변환
      const supabaseData = mapCanvasToSupabase(updatedCanvas);
      await updateCanvas(id, supabaseData);
      setCanvas(updatedCanvas);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <CanvasTitle value={canvas?.title} onChange={handleTitleChange} />
      {canvas && (
        <LeanCanvas canvas={canvas} onCanvasChange={handleCanvasChange} />
      )}
    </div>
  );
}

export default CanvasDetail;
