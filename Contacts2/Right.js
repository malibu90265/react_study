import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";
import {setSelectedData} from "../../../actions";
import UserDetailForm from "./Form/UserDetailForm";
import DetailForm from "./Form/DetailForm";
import EnrollForm from "./Form/EnrollForm";

class Right extends Component {

    // region - 라이프 사이클
    // Mounting - 최초 (생성시)

    constructor(props) {
        super(props);
        this.state = {
        }
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
        console.log("[Right] componentWillReceiveProps - nextProps : ", nextProps);
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

    onClickUserContact = (event) => {
        event.preventDefault();

        let selectedData = Object.assign({}, this.props.selectedData);
        selectedData.address_service_no = -1;
        selectedData.contact_type = 0;
        this.props.onSetSelectedData(selectedData);

        if(selectedData.group_no < 0) {
            this.onChangeUrl("all")
        } else {
            this.onChangeUrl("group")
        }

    };

    onClickContactItem = (address_service_no, event) => {
        event.preventDefault();

        let selectedData = Object.assign({}, this.props.selectedData);
        selectedData.address_service_no = address_service_no;
        selectedData.contact_type = 2;
        this.props.onSetSelectedData(selectedData);

        if(selectedData.group_no === -1) {
            this.onChangeUrl("all")
        } else if(selectedData.group_no === -2) {
            this.onChangeUrl("fav")
        } else if(selectedData.group_no === -3) {
            this.onChangeUrl("lat")
        } else {
            this.onChangeUrl("group")
        }

    };

    // 버튼 선택시 url 변경
    onChangeUrl = (type) => {
        if(process.env.cell){
            if (process.env.CHECK_TYPE === 'local') {
                location.href="/#/contacts/" + type;
            } else {
                location.href="/contacts/#/contacts/" + type + "/";
            }
        }else{
            location.href="/#/contacts/" + type;
        }
    };

    // 우측 form setting
    getForm = () => {
        let selectedData = Object.assign({}, this.props.selectedData);
        switch (selectedData.rightView) {
            case 'DETAIL':
                return (<DetailForm/>);
            case 'USER_DETAIL':
                return (<UserDetailForm />);
            case 'ENROLL':
                return (<EnrollForm />);
            default:
                return (<UserDetailForm/>);
        }
    };

    //endregion

    render() {
        let selectedData = Object.assign({}, this.props.selectedData);
        console.log("[Right] Rendering :: selectedData : ", selectedData);

        return (
            <div className="tr_container">
                <div className="sub_title">
                    <h2>{selectedData.group_name}<strong>{selectedData.address_cnt}</strong></h2>
                </div>
                <div className="ad_content" style={{top: '106px'}}>
                    <div className="customer_area_v2">
                        <div className="search_box">
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
                                    <div className="memberlist">
                                        <div className="listbx">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="customer_tit">
                            <div className="check_area">
                  <span className="LUX_basic_switch">
                    <span className="LUXckbx">
                      <input type="checkbox" id="input_forid_checkbox1"/>
                      <span className="sp_lux"/>
                      <label htmlFor="input_forid_checkbox1">체크박스</label>
                    </span>
                  </span>
                            </div>
                            <div className="LUX_basic_popover array_area">
                                <div className="popoverbx">
                                    <button className="LUX_basic_btn btn">최근업데이트 순<span className="sp_tr"/></button>
                                </div>
                                <div className="resultbx">
                                    <div className="LUX_basic_menu">
                                        <div className="menu_scrall"
                                             style={{maxHeight: '100px'}}>{/* 스크롤 생성 height 높이값 제어 */}
                                            <div className="menu_scrallin">
                                                <ul className="menu_lst">
                                                    <li>
                              <span className="LUX_basic_switch">
                                <span className="LUXckbx">
                                  <input id="input_menu_ckbox" type="checkbox"/>
                                  <span className="sp_lux"/>
                                  <label htmlFor="input_menu_ckbox">업데이트날짜 순</label>
                                </span>
                              </span>
                                                    </li>
                                                    <li>
                              <span className="LUX_basic_switch">
                                <span className="LUXckbx">
                                  <input id="input_menu_ckbox2" type="checkbox"/>
                                  <span className="sp_lux"/>
                                  <label htmlFor="input_menu_ckbox2">등록날짜 순</label>
                                </span>
                              </span>
                                                    </li>
                                                    <li>
                              <span className="LUX_basic_switch">
                                <span className="LUXckbx">
                                  <input id="input_menu_ckbox3" type="checkbox"/>
                                  <span className="sp_lux"/>
                                  <label htmlFor="input_menu_ckbox3">가나다 순</label>
                                </span>
                              </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="customer_list_v2">
                            <h3>내 연락처</h3>
                            <ul>
                                {/*
                                    [D] li테그에 아래 클래스를 추가하면 해당 아이콘이 표시됩니다.
                                    1. is_linked : LINK 아이콘
                                    2. is_closed : 폐업 여부
                                    3. is_wehago : 위하고 가입여부
                                    4. is_update : UPDATE 아이콘
                                    5. is_namecard : 명함 아이콘
                                */}
                                <li className="is_namecard">
                                    <a href="#" className="list_detail" onClick={this.onClickUserContact.bind(this)}>
                                      <span className="tr_icon_s">
                                        <span className="img_bx"
                                              style={{backgroundImage: 'url(https://static.wehago.com/imgs/dummy/@memberlist_sample.png)'}}/>
                                      </span>
                                                        <span className="name">
                                        <span className="char">
                                          <span className="rank">팀장</span>
                                          강문정
                                        </span>
                                        <div className="pos">더존비즈온 | DBP본부 | 웹표준개발팀 | 주임연구원</div>
                                      </span>
                                                        <span className="link_mark blue"/>
                                                        <span className="namecard mine">
                                        <span className="sp_tr ico_namecard">명함</span>
                                      </span>
                                                        <span className="update">
                                        <span className="sp_tr ico_update_w smallfont"/>
                                        UPDATE
                                      </span>
                                    </a>
                                </li>
                            </ul>
                            <h3>ㄱ</h3>
                            <ul>
                                {/*
                                            [D] li테그에 아래 클래스를 추가하면 해당 아이콘이 표시됩니다.
                                            1. is_linked : LINK 아이콘
                                            2. is_closed : 폐업 여부
                                            3. is_wehago : 위하고 가입여부
                                            4. is_update : UPDATE 아이콘
                                            5. is_namecard : 명함 아이콘
                                        */}
                                <li className="is_namecard">
                                    <div className="check_area">
                                      <span className="LUX_basic_switch">
                                        <span className="LUXckbx">
                                          <input type="checkbox" id="input_forid_checkbox2"/>
                                          <span className="sp_lux"/>
                                          <label htmlFor="input_forid_checkbox2">체크박스</label>
                                        </span>
                                      </span>
                                        <span className="LUX_basic_switch">
                                        <span className="LUXstarbx">
                                          <input type="checkbox" id="input_forid_ckbox12"/>
                                          <span className="sp_lux"/> <label htmlFor="input_forid_ckbox12">즐겨찾기</label>
                                        </span>
                                      </span>
                                    </div>
                                    <a href="#" className="list_detail" onClick={this.onClickContactItem.bind(this, 111)}>
                                      <span className="tr_icon_s">
                                        <span className="img_bx"
                                              style={{backgroundImage: 'url(https://static.wehago.com/imgs/dummy/@dummy_02.jpg)'}}/>
                                      </span>
                                        <span className="name">가가가</span>
                                        <span className="link_mark blue"/>
                                        <span className="namecard">
                                        <span className="sp_tr ico_namecard">명함</span>
                                      </span>
                                    </a>
                                </li>
                                <li className="is_namecard">
                                    <div className="check_area">
                                      <span className="LUX_basic_switch">
                                        <span className="LUXckbx">
                                          <input type="checkbox" id="input_forid_checkbox2"/>
                                          <span className="sp_lux"/>
                                          <label htmlFor="input_forid_checkbox2">체크박스</label>
                                        </span>
                                      </span>
                                        <span className="LUX_basic_switch">
                                        <span className="LUXstarbx">
                                          <input type="checkbox" id="input_forid_ckbox12"/>
                                          <span className="sp_lux"/> <label htmlFor="input_forid_ckbox12">즐겨찾기</label>
                                        </span>
                                      </span>
                                    </div>
                                    <a href="#" className="list_detail" onClick={this.onClickContactItem.bind(this, 222)}>
                                      <span className="tr_icon_s">
                                        <span className="img_bx"
                                              style={{backgroundImage: 'url(https://static.wehago.com/imgs/dummy/@dummy_02.jpg)'}}/>
                                      </span>
                                        <span className="name">나나나</span>
                                        <span className="link_mark blue"/>
                                        <span className="namecard">
                                        <span className="sp_tr ico_namecard">명함</span>
                                      </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* 우측 색인 노출시 .visible 추가 */}
                        <div className="name_bookmark">
                            <ul>
                                <li><a href="#">ㄱ</a></li>
                                <li><a href="#">ㄴ</a></li>
                                <li><a href="#">ㄷ</a></li>
                                <li><a href="#">ㄹ</a></li>
                                <li><a href="#">ㅁ</a></li>
                                <li><a href="#">ㅂ</a></li>
                                <li><a href="#">ㅅ</a></li>
                                <li><a href="#">ㅇ</a></li>
                                <li><a href="#">ㅈ</a></li>
                                <li><a href="#">ㅊ</a></li>
                                <li><a href="#">ㅋ</a></li>
                                <li><a href="#">ㅌ</a></li>
                                <li><a href="#">ㅍ</a></li>
                                <li><a href="#">ㅎ</a></li>
                                <li><a href="#">A</a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">#</a></li>
                            </ul>
                        </div>
                    </div>

                    {this.getForm()}

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
        onSetSelectedData: (selectedData) => { dispatch(setSelectedData({selectedData})) },
    }
};

Right.propTypes = {
    selectedData: PropTypes.object,
    onSetSelectedData: PropTypes.func,
};


Right.defaultProps = {
    onSetSelectedData: () => console.warn('onSetSelectedData not defined'),

};

export default connect(mapStateToProps, mapDispatchToProps)(Right);
