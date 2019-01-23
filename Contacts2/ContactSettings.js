import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";

class ContactSettings extends Component {

    // region - 라이프 사이클
    // Mounting - 최초 (생성시)

    constructor(props) {
        super(props);
        this.state = {}
    }

    // 생성자 메소드로서 컴포넌트가 처음 만들어 질 때 실행됩니다.
    // 이 메소드에서 기본 state 를 정할 수 있습니다.

    // 생성
    // constructor -> componentWillMount -> render -> componentDidMount

    // props 변경
    // componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate

    // 제거
    // componentWillUnmount

    // Mounting - 최초 (생성시) - render 전
    componentWillMount() {
        // console.log('componentWillMount');
        // 컴포넌트가 DOM 위에 만들어지기 전에 실행됩니다.

    }

    // Mounting - 최초 (생성시) - render 후
    componentDidMount() {
        // console.log('componentDidMount');
        // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
        // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
        // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
    }

    // Updating - render 전 (Prop 변경시)
    componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps', nextProps);
        // 컴포넌트가 prop 을 새로 받았을 때 실행됩니다.
        // prop 에 따라 state 를 업데이트 해야 할 때 사용하면 유용합니다.
        // 이 안에서 this.setState() 를 해도 추가적으로 렌더링하지 않습니다.
    }

    // Updating - render 전 - componentWillReceiveProps 후 (Props, State 변경시, true만 render 호출)
    shouldComponentUpdate(nextProps, nextState) {
        // console.log('shouldComponentUpdate', nextProps, nextState);
        // prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
        return true;
    }

    // Updating - render 전 (State 변경시)
    componentWillUpdate(nextProps, nextState) {
        // console.log('componentWillUpdate', nextProps, nextState);
        // 컴포넌트가 업데이트 되기 전에 실행됩니다.
        // 이 메소드 안에서는 this.setState() 를 사용하지 마세요 – 무한루프에 빠져들게 됩니다.
    }

    // Updating - render 후 (Props, State 변경시)
    componentDidUpdate(prevProps, prevState) {
        // console.log('componentDidUpdate', prevProps, prevState);
        // 컴포넌트가 리렌더링을 마친 후 실행됩니다.
    }

    // Unmounting - Route 변경시(페이지 이동 등)
    componentWillUnmount() {
        // 컴포넌트가 DOM 에서 사라진 후 실행되는 메소드입니다.
    }

    //endregion

    render() {
        return (
            <div className="tr_container">
                <div className="sub_title">
                    <h2>전체<strong>132</strong></h2>
                    <div className="btnbx">
                        <div className="LUX_basic_submit">
                            <div className="searchbx">
                <span className="inpbx">
                  <input type="text" id="btn_search"/>
                  <span className="placeholder">연락처를 검색하세요.</span>
                </span>
                                <button type="button" className="btn"><span className="sp_lux">검색</span></button>
                            </div>
                            <div className="resultwrap">
                                <div className="resulttext">
                                    <div>검색결과 : <span>13</span>건</div>
                                </div>
                                <div className="resultbx">
                                    <div className="result_scrall"
                                         style={{maxHeight: '150px'}}>{/* 스크롤 생성 height 높이값 제어 */}
                                        <div className="result_scrallin">
                                            <ul className="result_lst">
                                                <li>
                                                    <a href="#">
                                                        <div className="fltlft">
                                                            <span>거래처</span>
                                                            <div>대전광역시 대덕구 대화동 227</div>
                                                        </div>
                                                        <div className="fltrgt">
                                                            303-81-36575
                                                            <div>허용철</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="fltlft">
                                                            <span>거래처</span>
                                                            <div>대전광역시 대덕구 대화동 227</div>
                                                        </div>
                                                        <div className="fltrgt">
                                                            303-81-36575
                                                            <div>허용철</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="fltlft">
                                                            <span>거래처</span>
                                                            <div>대전광역시 대덕구 대화동 227</div>
                                                        </div>
                                                        <div className="fltrgt">
                                                            303-81-36575
                                                            <div>허용철</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="fltlft">
                                                            <span>거래처</span>
                                                            <div>대전광역시 대덕구 대화동 227</div>
                                                        </div>
                                                        <div className="fltrgt">
                                                            303-81-36575
                                                            <div>허용철</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="fltlft">
                                                            <span>거래처</span>
                                                            <div>대전광역시 대덕구 대화동 227</div>
                                                        </div>
                                                        <div className="fltrgt">
                                                            303-81-36575
                                                            <div>허용철</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="fltlft">
                                                            <span>거래처</span>
                                                            <div>대전광역시 대덕구 대화동 227</div>
                                                        </div>
                                                        <div className="fltrgt">
                                                            303-81-36575
                                                            <div>허용철</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="fltlft">
                                                            <span>거래처</span>
                                                            <div>대전광역시 대덕구 대화동 227</div>
                                                        </div>
                                                        <div className="fltrgt">
                                                            303-81-36575
                                                            <div>허용철</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="fltlft">
                                                            <span>거래처</span>
                                                            <div>대전광역시 대덕구 대화동 227</div>
                                                        </div>
                                                        <div className="fltrgt">
                                                            303-81-36575
                                                            <div>허용철</div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="fltlft">
                                                            <span>거래처</span>
                                                            <div>대전광역시 대덕구 대화동 227</div>
                                                        </div>
                                                        <div className="fltrgt">
                                                            303-81-36575
                                                            <div>허용철</div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="LUX_basic_tabs bdline_cnt">
                    <div className="tabsin">
                        {/* li 활성화 시 class="active" 추가 */}
                        <ul className="tabs_lst">
                            <li>
                                <a href="#"><span>연락처 정리</span></a>
                            </li>
                            <li>
                                <a href="#"><span>가져오기</span></a>
                            </li>
                            <li>
                                <a href="#"><span>내보내기</span></a>
                            </li>
                            <li className="active">
                                <a href="#"><span>링크설정</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="ad_content ad_content_v2">
                    <div className="view_justify">
                        <div className="list_tbl_wrap">
                            <div className="list_tbl_tit">
                                <h2>LINK 설정</h2>
                            </div>
                        </div>
                        <div className="link_chk_wrap">
                            <div className="link_chk_block">
                                <div className="link_chk_tit"><span>LINK 사용여부</span></div>
                                <button type="button" className="LUX_basic_btn LUX_basic_switch">
                  <span className="LUXonoffbx">
                    {/* 동일한 구조 input type checkbox LUXckbx LUXstarbx / radio LUXrabx LUXonoffbx 로 이이지 변경 */}
                      <input type="checkbox" id="input_forid_onoff13"/>
                      {/* 이미지 */}
                      <span className="sp_lux"/>
                      {/* input id 값과 label for 값을 동일하게 연결 */}
                      <label htmlFor="input_forid_onoff13">온오프박스</label>
                  </span>
                                </button>
                                <div className="link_chk_noti">
                                    <span className="sp_tr"/>
                                    <span className="smallfont">반드시 인증서 확인 절차를 수행해야 LINK 기능을 사용할 수 있으며, LINK 기능 사용여부를 ON상태로 되어있어야 LINK된 거래처의 최신정보로 자동 업데이트 됩니다.</span>
                                </div>
                            </div>
                        </div>
                        <div className="list_tbl_wrap">
                            <div className="list_tbl_tit">
                                <h2>LINK 거래처 목록</h2>
                            </div>
                        </div>
                        <div className="grid_content">
                            리얼그리드 영역입니다.<br/>
                            기본적으로 스크롤은 없습니다.
                        </div>
                        {/* [D] Emptyset */}
                        <div className="nodata_area tr_empty" style={{display: 'none'}}>
                            <div className="nodata_text">데이터가 없습니다.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        setSample: state.talk.setSample,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetSample: (isSample) => {
            dispatch(setSample(isSample))
        },
    }
};

ContactSettings.propTypes = {
    isSample: PropTypes.string,
    onSetSample: PropTypes.func,
};


ContactSettings.defaultProps = {
    isSample: '',
    onSetSample: () => console.warn('onSetSample not defined'),

};

export default connect(mapStateToProps, mapDispatchToProps)(ContactSettings);
