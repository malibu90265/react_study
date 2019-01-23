import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";

class DetailForm extends Component {

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
        let selectedData = Object.assign({}, this.props.selectedData);

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
                            {selectedData.address_service_no + " : " +  selectedData.contact_type}
                            <span className="wehago">가입</span>
                        </h2>
                    </div>
                    <div className="info_btn">
                        <button className="LUX_basic_btn Default Basic btn_error"><span className="sp_tr"/>입력오류신고
                        </button>
                        <button className="LUX_basic_btn Default Basic btn_print"><span className="sp_tr"/>인쇄
                        </button>
                        <button className="LUX_basic_btn Default Basic btn_check"><span className="sp_tr"/>활동기록
                        </button>
                        <button className="LUX_basic_btn Default Basic btn_share"><span className="sp_tr"/>보내기
                        </button>
                        <button className="LUX_basic_btn Default Basic btn_edit"><span className="sp_tr"/>수정
                        </button>
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
                                <caption>
                                    <span className="blind"/>
                                </caption>
                                <colgroup>
                                    <col style={{width: '150px'}}/>
                                    <col/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <th scope="row">휴대전화번호</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            010-1234-12314
                                            <div className="renew_wrap">
                                                <span className="sp_tr ico_update"/>
                                                <span className="renew_data">010-5678-5678</span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">이메일주소</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            douzone@wehago.com
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="LUX_basic_tbl open">
                            <div className="tbl_tit">
                                <h2>
                                    직장 정보<span className="tbl_tit_info">직장명</span>
                                    <button type="button" className="LUX_basic_btn Small basic" style={{
                                        display: 'inline-block',
                                        height: '22px',
                                        margin: '0 0 0 6px',
                                    }}>
                                        <span style={{marginLeft: 0, lineHeight: '18px'}}>다른 명함 보기</span>
                                    </button>
                                </h2>
                                <div className="btnbx">
                                    <button type="button" className="LUX_basic_btn Image btn_arr"><span
                                        className="sp_lux">보기/숨기기</span></button>
                                </div>
                            </div>
                            <table className="tblarea2 tblarea2_v2">
                                <caption>
                                    <span className="blind"/>
                                </caption>
                                <colgroup>
                                    <col style={{width: '150px'}}/>
                                    <col/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <th scope="row">회사이름</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            더존비즈온
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">소속</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            경영전략본부-경영서비스부-총무관리팀
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">직급</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            팀장, 대리
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">담당업무</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            임직원 연말정산
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">명함</th>
                                    <td className="cellft">
                                        <div className="inbx">
                              <span className="clearfix">
                                {/*
                                                                    [D] namecard_bx에 .front 또는 .back 클래스 중에 하나는 꼭 붙입니다.
                                                                        명함 이미지가 없을 때 : is_empty
                                                                        에디트모드 일 때 : is_edit
                                                                        '앞면/뒷면' 타이틀이 필요할 때 : is_title
                                                                */}
                                  <div className="namecard_bx front is_title">
                                  <strong className="title">앞면/뒷면</strong>
                                  <img src="https://static.wehago.com/imgs/dummy/@namecard_front.png"
                                       className="img_namecard" alt="명함 앞면"/>
                                </div>
                                <div className="namecard_bx back is_title">
                                  <strong className="title">앞면/뒷면</strong>
                                  <img src="https://static.wehago.com/imgs/dummy/@namecard_back.png"
                                       className="img_namecard" alt="명함 앞면"/>
                                </div>
                              </span>
                                            {/* [D] 개발 시 아래 div 삭제하세요. */}
                                            <div style={{float: 'left', width: '100%', height: '8px'}}/>
                                            <span className="clearfix">
                                {/*
                                                                        [D] namecard_bx에 .front 또는 .back 클래스 중에 하나는 꼭 붙입니다.
                                                                            명함 이미지가 없을 때 : is_empty
                                                                            에디트모드 일 때 : is_edit
                                                                */}
                                                <div className="namecard_bx front is_empty"/>
                                <div className="namecard_bx back is_empty"/>
                              </span>
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
                                    <button type="button" className="LUX_basic_btn Image btn_arr"><span
                                        className="sp_lux">보기/숨기기</span></button>
                                </div>
                            </div>
                            <table className="tblarea2 tblarea2_v2">
                                <caption>
                                    <span className="blind"/>
                                </caption>
                                <colgroup>
                                    <col style={{width: '150px'}}/>
                                    <col/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <th scope="row">홈페이지</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            <a href="https://www.wehago.com" className="homepage"
                                               target="_blank">https://www.wehago.com</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">생년월일</th>
                                    <td className="cellft">
                                        <div className="inbx">
                                            1990.12.12
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
        selectedData: state.contacts.selectedData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetSample: (isSample) => {
            dispatch(setSample(isSample))
        },
    }
};

DetailForm.propTypes = {
    isSample: PropTypes.string,
    onSetSample: PropTypes.func,
};


DetailForm.defaultProps = {
    isSample: '',
    onSetSample: () => console.warn('onSetSample not defined'),

};

export default connect(mapStateToProps, mapDispatchToProps)(DetailForm);
