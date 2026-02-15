export default function App() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col w-full min-h-screen bg-amber-50 px-4 py-5 sm:px-8 sm:py-6">
        <div className="flex flex-col p-3 sm:p-5 sm:text-lg">
          <p>전체 &gt; 공종 &gt; 관심영역 / 리비전</p>
        </div>
        <div className="flex flex-col p-3 sm:p-5 sm:text-lg">
          <p>리비전 - 타임라인 영역 + changes 표시</p>
        </div>
        <div className="flex flex-col p-3 sm:p-8">
          <div className="w-full aspect-square bg-pink-50">
            {/* 현재 1:1 비율 이미지 영역때문에 스크롤 생김 */}
            <p>이미지 영역</p>
          </div>
          <div className="flex w-full justify-center p-2 sm:p-4">
            <p>투명도 바 영역</p>
          </div>
        </div>
      </div>
    </div>
  );
}
