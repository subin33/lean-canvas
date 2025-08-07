import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

const Note = ({
  id,
  content,
  color: initalColor,
  onRemoveNote,
  onUpdateNote,
}) => {
  const [localContent, setLocalContent] = useState(content);

  const colorOptions = [
    'bg-yellow-300',
    'bg-pink-300',
    'bg-blue-300',
    'bg-green-300',
  ];

  const [color, setColor] = useState(() => {
    if (initalColor) return initalColor;
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    return colorOptions[randomIndex];
  });

  const [isEditing, setIsEditing] = useState(false);

  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [localContent]);

  const handleContentChange = () => {
    onUpdateNote(id, localContent, color);
  };

  const handleColorChange = newColor => {
    setColor(newColor);
    onUpdateNote(id, localContent, newColor);
  };

  const handleCheckNote = e => {
    e.stopPropagation();
    // 내용을 저장하고 편집 모드 종료
    onUpdateNote(id, localContent, color);
    setIsEditing(false);
  };

  const handleRemoveNote = e => {
    e.stopPropagation();
    onRemoveNote(id);
  };

  return (
    <div
      className={`p-4 ${color} relative max-h-[32rem] overflow-hidden`}
      onClick={() => setIsEditing(true)}
    >
      <div className="absolute top-2 right-2">
        {isEditing ? (
          <button
            aria-label="Check Note"
            className="text-gray-700 hover:text-green-600 transition-colors"
            onClick={handleCheckNote}
            title="저장하고 편집 종료"
          >
            <AiOutlineCheck size={20} />
          </button>
        ) : (
          <button
            aria-label="Remove Note"
            className="text-gray-700 hover:text-red-600 transition-colors"
            onClick={handleRemoveNote}
            title="노트 삭제"
          >
            <AiOutlineClose size={20} />
          </button>
        )}
      </div>
      <textarea
        ref={textareaRef}
        value={localContent}
        onChange={e => setLocalContent(e.target.value)}
        onBlur={handleContentChange}
        className={`w-full h-full bg-transparent resize-none border-none focus:outline-none text-gray-900 overflow-hidden`}
        aria-label="Edit Note"
        placeholder="메모를 작성하세요."
        style={{ height: 'auto', minHeight: '8rem' }}
        readOnly={!isEditing}
      />
      {isEditing && (
        <div className="flex space-x-2 mt-2">
          {colorOptions.map((option, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full cursor-pointer outline outline-gray-50 ${option} hover:scale-110 transition-transform`}
              onClick={() => handleColorChange(option)}
              aria-label={`Change color to ${option}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Note;
