import './index.css'

function Information() {
  return (
    <div id="information">
      <div className="up">
        <div className="item title">발주사</div>
        <div className="item content" />
        <div className="item title">시공사</div>
        <div className="item content" />
        <div className="item title">현장명</div>
        <div className="item content" />
        <div className="item title">주 소</div>
        <div className="item content address" />
      </div>
      <div className="down">
        <div className="item employer">발 주 자</div>
        <div className="item warning">※ 본 시안은 출력기와 모니터에 따라 실제 색상과 다소 차이가 있을 수 있습니다.</div>
        <div className="item logo">
          <div className="logo-image" />
        </div>
        <div className="item manager">
          <div className="manager-top">
            <div className="manager manager-grade">담 당 자: 엄 계 현</div>
          </div>
          <div className="manager-bottom">010 - 5424 - 7740</div>
        </div>
      </div>
    </div>
  )
}

export default Information