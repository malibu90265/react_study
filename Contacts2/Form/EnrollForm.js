import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";

class EnrollForm extends Component {

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
            <div className="customerinfo_area_v2">
                <div className="info_tit">
          <span className="tr_icon_b">
            <span className="img_bx"
                  style={{backgroundImage: 'url(https://static.wehago.com/imgs/dummy/@dummy_01.jpg)'}}/>
          </span>
                    {/* [D] is_wehago : 위하고 가입 여부 확인 */}
                    <div className="info_name is_wehago">
                        <h2>
              <span className="LUX_basic_switch switchon">
                <span className="LUXstarbx">
                  <input type="checkbox" id="input_forid_ckbox12"/>
                  <span className="sp_lux"/> <label htmlFor="input_forid_ckbox12">즐겨찾기</label>
                </span>
              </span>
                            강경미
                            <span className="wehago">가입</span>
                        </h2>
                    </div>
                    <div className="info_btn">
                        <button className="LUX_basic_btn Default Basic btn_print"><span className="sp_tr"/>인쇄</button>
                        <button className="LUX_basic_btn Default Basic btn_check"><span className="sp_tr"/>활동기록</button>
                        <button className="LUX_basic_btn Default Basic btn_share"><span className="sp_tr"/>보내기</button>
                        <button className="LUX_basic_btn Default Basic btn_edit"><span className="sp_tr"/>수정</button>
                    </div>
                </div>
                <div className="info_detail">
                    <div className="tbl_accordion">
                        <div className="LUX_basic_tbl open">
                            <div className="tbl_tit">
                                <h2>기본 정보</h2>
                                <div className="btnbx">
                                    <button type="button" className="LUX_basic_btn Image btn_arr"><span
                                        className="sp_lux">보기/숨기기</span></button>
                                </div>
                            </div>
                            <table className="tblarea2 tblarea2_v2">
                                <caption><span className="blind"/></caption>
                                <colgroup>
                                    <col style={{width: '150px'}}/>
                                    <col/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <th scope="row">프로필 사진</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_default">
                                                <div className="inbx_enroll_img">
                                                    <span className="img_bx"
                                                          style={{backgroundImage: 'url(https://static.wehago.com/imgs/dummy/@dummy_02.jpg)'}}/>
                                                </div>
                                                <div className="inbx_enroll_info">
                                                    <ul className="guide_lst">
                                                        <li>프로필 사진을 등록해주세요.</li>
                                                        <li>이미지 파일 최대 크기 <em
                                                            className="point_color text_bold">2MB</em> 미만
                                                        </li>
                                                    </ul>
                                                    <button type="button" className="LUX_basic_btn Default basic">
                                                        <span>등록</span></button>
                                                    <button type="button" className="LUX_basic_btn Default basic">
                                                        <span>삭제</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">이름 <span className="sp_lux red_bullet">필수입력</span></th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_default">
                                                <div className="LUX_basic_text">
                                                    {/* 입력창에 포커스 - inpbx class="on" 추가  */}
                                                    <div className="inpbx">
                                                        <p className="placeholder">이름을 입력하세요.</p>
                                                        <input type="text" id="textField_text6" defaultValue/>
                                                        <span className="sp_lux"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="LUX_basic_select">
                                            <div className="searchbx">
                          <span className="inpbx">
                            <input type="text" id="btn_search8"/>
                            <span className="placeholder">휴대전화번호</span>
                          </span>
                                                <button type="button" className="btn"><span className="sp_lux">검색</span>
                                                </button>
                                            </div>
                                            <div className="resultbx">
                                                <div className="result_scrall" style={{maxHeight: '100px'}}>
                                                    {/* 스크롤 생성 height 높이값 제어 */}
                                                    <div className="result_scrallin">
                                                        <ul className="result_lst">
                                                            <li>
                                                                <a href="#">
                                                                    <div>naver.com</div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div>naver.com</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_default">
                                                <div className="LUX_basic_text">
                                                    <div className="inpbx">
                                                        <p className="placeholder">전화번호를 입력하세요.</p>
                                                        <input type="text" id="textField_text23" defaultValue/>
                                                        <span className="sp_lux"/>
                                                    </div>
                                                </div>
                                                <button type="button" className="LUX_basic_btn Default basic">
                                                    <span>삭제</span>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="LUX_basic_select">
                                            <div className="searchbx">
                          <span className="inpbx">
                            <input type="text" id="btn_search8"/>
                            <span className="placeholder">휴대전화번호</span>
                          </span>
                                                <button type="button" className="btn"><span className="sp_lux">검색</span>
                                                </button>
                                            </div>
                                            <div className="resultbx">
                                                <div className="result_scrall" style={{maxHeight: '100px'}}>
                                                    {/* 스크롤 생성 height 높이값 제어 */}
                                                    <div className="result_scrallin">
                                                        <ul className="result_lst">
                                                            <li>
                                                                <a href="#">
                                                                    <div>naver.com</div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div>naver.com</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_default">
                                                <div className="LUX_basic_text">
                                                    <div className="inpbx">
                                                        <p className="placeholder">전화번호를 입력하세요.</p>
                                                        <input type="text" id="textField_text23" defaultValue/>
                                                        <span className="sp_lux"/>
                                                    </div>
                                                </div>
                                                <button type="button" className="LUX_basic_btn Default basic">
                                                    <span>삭제</span>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div className="LUX_basic_select">
                                            <div className="searchbx">
                          <span className="inpbx">
                            <input type="text" id="btn_search8"/>
                            <span className="placeholder">개인 이메일주소</span>
                          </span>
                                                <button type="button" className="btn"><span className="sp_lux">검색</span>
                                                </button>
                                            </div>
                                            <div className="resultbx">
                                                <div className="result_scrall" style={{maxHeight: '100px'}}>
                                                    {/* 스크롤 생성 height 높이값 제어 */}
                                                    <div className="result_scrallin">
                                                        <ul className="result_lst">
                                                            <li>
                                                                <a href="#">
                                                                    <div>naver.com</div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div>naver.com</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_default">
                                                <div className="LUX_basic_text">
                                                    <div className="inpbx">
                                                        <p className="placeholder">이메일주소를 입력하세요.</p>
                                                        <input type="text" id="textField_text23" defaultValue/>
                                                        <span className="sp_lux"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">그룹</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_default">
                                                <button type="button" className="LUX_basic_btn Default basic">
                                                    <span>그룹선택</span></button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="LUX_basic_tbl open">
                            <div className="tbl_tit">
                                <h2>직장 정보</h2>
                                <div className="btnbx">
                                    <button type="button" className="LUX_basic_btn Image btn_add"><span
                                        className="sp_tr">다국어 정보 추가하기</span></button>
                                    <button type="button" className="LUX_basic_btn Image btn_arr"><span
                                        className="sp_lux">보기/숨기기</span></button>
                                </div>
                            </div>
                            <table className="tblarea2 tblarea2_v2">
                                <caption><span className="blind"/></caption>
                                <colgroup>
                                    <col style={{width: '150px'}}/>
                                    <col/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <th scope="row">회사 이름</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_full">
                                                <div className="LUX_basic_text">
                                                    {/* 입력창에 포커스 - inpbx class="on" 추가  */}
                                                    <div className="inpbx">
                                                        <p className="placeholder">회사 이름을 입력하세요.</p>
                                                        <input type="text" id="textField_text11" defaultValue/>
                                                        <span className="sp_lux"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">소속</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_full">
                                                <div className="LUX_basic_text">
                                                    {/* 입력창에 포커스 - inpbx class="on" 추가  */}
                                                    <div className="inpbx">
                                                        <p className="placeholder">소속을 입력하세요.</p>
                                                        <input type="text" id="textField_text12" defaultValue/>
                                                        <span className="sp_lux"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">직급</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_full">
                                                <div className="LUX_basic_text">
                                                    {/* 입력창에 포커스 - inpbx class="on" 추가  */}
                                                    <div className="inpbx">
                                                        <p className="placeholder">직급을 입력하세요.</p>
                                                        <input type="text" id="textField_text12" defaultValue/>
                                                        <span className="sp_lux"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">담당업무</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_full">
                                                <div className="LUX_basic_text">
                                                    {/* 입력창에 포커스 - inpbx class="on" 추가  */}
                                                    <div className="inpbx">
                                                        <p className="placeholder">담당업무를 입력하세요.</p>
                                                        <input type="text" id="textField_text13" defaultValue/>
                                                        <span className="sp_lux"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        명함
                                        <button type="button" className="LUX_basic_btn Default basic btn_mobile">
                                            <span><span className="sp_lux"/> 모바일촬영</span></button>
                                    </th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            {/*
                                                                [D] namecard_bx에 .front 또는 .back 클래스 중에 하나는 꼭 붙입니다.
                                                                    명함 이미지가 없을 때 : is_empty
                                                                    에디트모드 일 때 : is_edit
                                                                    '앞면/뒷면' 타이틀이 필요할 때 : is_title
                                                            */}
                                            <div className="namecard_bx front is_edit is_title">
                                                <strong className="title">앞면/뒷면</strong>
                                                <img src="https://static.wehago.com/imgs/dummy/@namecard_front.png"
                                                     className="img_namecard" alt="명함 앞면"/>
                                                <div className="edit_bx">
                                                    <div className="btn_bx">
                                                        <a href="#" className="btn_edit delete"><span>삭제</span></a>
                                                        <a href="#" className="btn_edit modify"><span>수정</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="namecard_bx back is_edit is_title">
                                                <strong className="title">앞면/뒷면</strong>
                                                <img src="https://static.wehago.com/imgs/dummy/@namecard_back.png"
                                                     className="img_namecard" alt="명함 앞면"/>
                                                <div className="edit_bx">
                                                    <div className="btn_bx">
                                                        <a href="#" className="btn_edit delete"><span>삭제</span></a>
                                                        <a href="#" className="btn_edit modify"><span>수정</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="namecard_bx file_drop is_title">
                                                <strong className="title">앞면/뒷면</strong>
                                                <div className="LUX_filezone type2" style={{border: 0}}>
                                                    <div className="file_bx">
                                                        {/* [D] 기본 상태 */}
                                                        <div className="default" style={{padding: '37px 0'}}>
                                                            <p style={{paddingLeft: 0}}>
                                                                <span className="sp_lux" style={{
                                                                    width: '41px',
                                                                    height: '46px',
                                                                    verticalAlign: 'middle',
                                                                    backgroundPosition: '-311px -663px',
                                                                }}/>
                                                                <span className="txt" style={{letterSpacing: '-1px'}}>여기에 놓으면 파일이 첨부됩니다.</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* [D] 모바일 촬영 버튼이 필요한 경우 btn_bx에 mobile 클래스를 붙여주세요. */}
                                                <div className="btn_bx">
                                                    <button type="button"
                                                            className="LUX_basic_btn Default basic btn_mypc"><span><span
                                                        className="sp_lux"/> 내 PC</span></button>
                                                    <button type="button"
                                                            className="LUX_basic_btn Default basic btn_wedrive">
                                                        <span><span className="sp_lux"/> WE드라이브</span></button>
                                                    <button type="button"
                                                            className="LUX_basic_btn Default basic btn_mobile">
                                                        <span><span className="sp_lux"/> 모바일촬영</span></button>
                                                </div>
                                                <div className="dimmed">
                                                    <div className="LS_spinner2">
                                                        <div className="loading"/>
                                                        <span className="loading_text">loading</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="namecard_bx file_drop is_loading is_title">
                                                <strong className="title">앞면/뒷면</strong>
                                                <div className="LUX_filezone type2" style={{border: 0}}>
                                                    <div className="file_bx">
                                                        {/* [D] 기본 상태 */}
                                                        <div className="default" style={{padding: '37px 0'}}>
                                                            <p style={{paddingLeft: 0}}>
                                                                <span className="sp_lux" style={{
                                                                    width: '41px',
                                                                    height: '46px',
                                                                    verticalAlign: 'middle',
                                                                    backgroundPosition: '-311px -663px',
                                                                }}/>
                                                                <span className="txt" style={{letterSpacing: '-1px'}}>여기에 놓으면 파일이 첨부됩니다.</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* [D] 모바일 촬영 버튼이 필요한 경우 btn_bx에 mobile 클래스를 붙여주세요. */}
                                                <div className="btn_bx">
                                                    <button type="button"
                                                            className="LUX_basic_btn Default basic btn_mypc"><span><span
                                                        className="sp_lux"/> 내 PC</span></button>
                                                    <button type="button"
                                                            className="LUX_basic_btn Default basic btn_wedrive">
                                                        <span><span className="sp_lux"/> WE드라이브</span></button>
                                                    <button type="button"
                                                            className="LUX_basic_btn Default basic btn_mobile">
                                                        <span><span className="sp_lux"/> 모바일촬영</span></button>
                                                </div>
                                                <div className="dimmed">
                                                    <div className="LS_spinner2">
                                                        <div className="loading"/>
                                                        <span className="loading_text">loading</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="LUX_basic_tbl open">
                            <div className="tbl_tit">
                                <h2>추가 정보</h2>
                                <div className="btnbx">
                                    <button type="button" className="LUX_basic_btn Image btn_add"><span
                                        className="sp_tr">다국어 정보 추가하기</span></button>
                                    <button type="button" className="LUX_basic_btn Image btn_arr"><span
                                        className="sp_lux">보기/숨기기</span></button>
                                </div>
                            </div>
                            <table className="tblarea2 tblarea2_v2">
                                <caption><span className="blind"/></caption>
                                <colgroup>
                                    <col style={{width: '150px'}}/>
                                    <col/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <th scope="row">
                                        <div className="LUX_basic_select">
                                            <div className="searchbx">
                          <span className="inpbx">
                            <input type="text" id="btn_search8"/>
                            <span className="placeholder">집 주소</span>
                          </span>
                                                <button type="button" className="btn"><span className="sp_lux">검색</span>
                                                </button>
                                            </div>
                                            <div className="resultbx">
                                                <div className="result_scrall" style={{maxHeight: '100px'}}>
                                                    {/* 스크롤 생성 height 높이값 제어 */}
                                                    <div className="result_scrallin">
                                                        <ul className="result_lst">
                                                            <li>
                                                                <a href="#">
                                                                    <div>직장 주소</div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div>사용자설정</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_full">
                                                <div className="LUX_basic_text" style={{
                                                    float: 'left',
                                                    width: 'calc(100% - 84px)',
                                                    maxWidth: '363px',
                                                    marginRight: '4px',
                                                }}>
                                                    <div className="inpbx">
                                                        <p className="placeholder">입력해주세요</p>
                                                        <input type="text" id="textField_text_email3_2" defaultValue/>
                                                        <span className="sp_lux"/>
                                                    </div>
                                                </div>
                                                <button type="button" className="LUX_basic_btn Default basic"
                                                        style={{float: 'left', width: '80px', margin: 0}}>
                                                    <span>주소검색</span></button>
                                            </div>
                                            <div className="inbx_full">
                                                <div className="LUX_basic_text" style={{
                                                    float: 'left',
                                                    width: '100%',
                                                    maxWidth: '447px',
                                                    marginRight: 0,
                                                }}>
                                                    <div className="inpbx">
                                                        <p className="placeholder">입력해주세요</p>
                                                        <input type="text" id="textField_text_email_3_3" defaultValue/>
                                                        <span className="sp_lux"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">홈페이지</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_full">
                                                <div className="LUX_basic_text" style={{
                                                    float: 'left',
                                                    width: '100%',
                                                    maxWidth: '447px',
                                                    marginRight: 0,
                                                }}>
                                                    {/* 입력창에 포커스 - inpbx class="on" 추가  */}
                                                    <div className="inpbx">
                                                        <p className="placeholder">홈페이지 주소를 입력하세요.</p>
                                                        <input type="text" id="textField_text13" defaultValue/>
                                                        <span className="sp_lux"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">생년월일</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_default">
                                                <div className="LUX_basic_date">
                                                    <div className="datebx">
                              <span className="inpbx">
                                <input type="text" id="btn_date" defaultValue="2016.08.28"/>
                                <label htmlFor="btn_date"/>
                              </span>
                                                        <button type="button" className="btn"><span
                                                            className="sp_lux">검색</span></button>
                                                    </div>
                                                </div>
                                                <span className="LUX_basic_switch">
                            <span className="LUXrabx">
                              <input type="radio" id="input_tblin_radio7" name="tbl_radio2"/>
                              <span className="sp_lux"/>
                              <label htmlFor="input_tblin_radio7">양력</label>
                            </span>
                          </span>
                                                <span className="LUX_basic_switch">
                            <span className="LUXrabx">
                              <input type="radio" id="input_tblin_radio8" name="tbl_radio2"/>
                              <span className="sp_lux"/>
                              <label htmlFor="input_tblin_radio8">음력</label>
                            </span>
                          </span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">메모</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_full">
                                                <div className="LUX_basic_textarea"
                                                     style={{float: 'left', width: '100%', maxWidth: '447px'}}>
                                                    {/* 입력창에 포커스 - inpbx class="on" 추가  */}
                                                    <div className="inpbx">
                                                        <p className="placeholder">메모를 입력하세요</p>
                                                        {/* 행간과 textarea padding 값 변경 가능*/}
                                                        <textarea id="undefined-HintText1" rows={5} cols={1}
                                                                  className="field_inp"
                                                                  style={{width: '100%', height: '200px'}}
                                                                  defaultValue={""}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">테그</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <div className="inbx_full">
                                                <div className="LUX_basic_tagfield notag"
                                                     style={{float: 'left', width: '100%'}}>
                                                    <div className="field_wrap">
                                                        <ul>
                                                            <li>
                                                                <div className="notag_text">
                                                                    {/* <img width="45" height="49" src="../../img/notag.png"> */}
                                                                    <p>등록된 태그가 없습니다.</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p style={{
                                                    float: 'left',
                                                    marginTop: '10px',
                                                    fontSize: '11px',
                                                    fontFamily: '돋움, Dotum, Helvetica, "Apple SD Gothic Neo", sans-serif',
                                                    color: '#828282',
                                                }}>추천 태그를 선택하거나 ','로 태그를 구분하여 입력합니다. (최대 20개까지 등록가능)</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="update_info">
                        <dl>
                            <dt>최초 업데이트:</dt>
                            <dd>성수현 2016.05.31 12:11</dd>
                            <dt>최종 업데이트:</dt>
                            <dd>성수현 2016.05.31 12:22</dd>
                        </dl>
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

EnrollForm.propTypes = {
    isSample: PropTypes.string,
    onSetSample: PropTypes.func,
};


EnrollForm.defaultProps = {
    isSample: '',
    onSetSample: () => console.warn('onSetSample not defined'),

};

export default connect(mapStateToProps, mapDispatchToProps)(EnrollForm);
