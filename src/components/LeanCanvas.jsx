import CanvasCard from './CanvasCard';

function LeanCanvas({ canvas, onCanvasChange }) {
  // 데이터 안전장치 추가
  if (!canvas) {
    return <div>캔버스를 불러오는 중...</div>;
  }

  const handleNotesChange = (section, updateNotes) => {
    const updateCanvas = {
      ...canvas,
      [section]: { ...canvas[section], notes: updateNotes },
    };
    onCanvasChange(updateCanvas);
  };

  // 각 섹션에 대한 안전장치 추가
  const getNotes = section => {
    return canvas[section]?.notes || [];
  };

  return (
    <div className="border-4 border-black">
      <div className="grid grid-cols-5">
        <CanvasCard
          title={'1. 문제'}
          notes={getNotes('problem')}
          onNotesChange={notes => handleNotesChange('problem', notes)}
        />
        <CanvasCard
          title={'4. 해결안'}
          notes={getNotes('solution')}
          onNotesChange={notes => handleNotesChange('solution', notes)}
        />
        <CanvasCard
          title={'3. 가치제안'}
          notes={getNotes('valueProposition')}
          onNotesChange={notes => handleNotesChange('valueProposition', notes)}
        />
        <CanvasCard
          title={'5. 경쟁우위'}
          notes={getNotes('unfairAdvantage')}
          onNotesChange={notes => handleNotesChange('unfairAdvantage', notes)}
        />
        <CanvasCard
          title={'2. 목표 고객'}
          notes={getNotes('customerSegments')}
          onNotesChange={notes => handleNotesChange('customerSegments', notes)}
        />
        <CanvasCard
          title={'기존 대안'}
          isSubtitle
          notes={getNotes('existingAlternatives')}
          onNotesChange={notes =>
            handleNotesChange('existingAlternatives', notes)
          }
        />
        <CanvasCard
          title={'8. 핵심지표'}
          notes={getNotes('keyMetrics')}
          onNotesChange={notes => handleNotesChange('keyMetrics', notes)}
        />
        <CanvasCard
          title={'상위개념'}
          isSubtitle
          notes={getNotes('highLevelConcept')}
          onNotesChange={notes => handleNotesChange('highLevelConcept', notes)}
        />
        <CanvasCard
          title={'9. 고객 경로'}
          notes={getNotes('channels')}
          onNotesChange={notes => handleNotesChange('channels', notes)}
        />
        <CanvasCard
          title={'얼리 어답터'}
          isSubtitle
          notes={getNotes('earlyAdopters')}
          onNotesChange={notes => handleNotesChange('earlyAdopters', notes)}
        />
      </div>
      <div className="grid grid-cols-2">
        <CanvasCard
          title={'7. 비용 구조'}
          notes={getNotes('costStructure')}
          onNotesChange={notes => handleNotesChange('costStructure', notes)}
        />
        <CanvasCard
          title={'6. 수익 흐름'}
          notes={getNotes('revenueStreams')}
          onNotesChange={notes => handleNotesChange('revenueStreams', notes)}
        />
      </div>
    </div>
  );
}

export default LeanCanvas;
