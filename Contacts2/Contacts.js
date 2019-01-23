import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";
import SinglePage from "../../Layout/SinglePage";
import {setSelectedData} from "./Redux/Actions/ContactsInfoAction";
import {getTotalCount} from "./Redux/Actions/ContactsGroupAction";
import Right from "./Right";
import ContactBizcard from "./ContactBizcard";
import ContactHistory from "./ContactHistory";
import ContactTrash from "./ContactTrash";
import ContactSettings from "./ContactSettings";
import DetailForm from "./Form/DetailForm";

class Contacts extends Component {
    // region - 라이프 사이클
    // Mounting - 최초 (생성시)

    constructor(props) {
        document.title = "연락처";
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
        this.setView();

    }

    // Mounting - 최초 (생성시) - render 후
    componentDidMount() {
        // console.log('componentDidMount');
        // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
        // 이 안에서 다른 JavaScript 프레임워크를 연동하거나,
        // setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.

        // 전체,즐찾,최근 연락처 count & 그룹 목록 조회
        this.props.onGetTotalCount();
        this.setView();


    }

    // Updating - render 전 (Prop 변경시)
    componentWillReceiveProps(nextProps) {
        console.log("this.props.location.pathname ::" , this.props.location.pathname);
        console.log("nextProps.location.pathname ::" , nextProps.location.pathname);
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.setView();
        }

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
        document.title = "WEHAGO";
    }

    //endregion
    // 화면 setting
    setView = () => {
        let path = window.location.href.split("/#")[1];

        console.log(">>>> path :", path);
        if(path.indexOf("/contacts/all") > -1) {
            // 전체 연락처 조회
            this.getAllContacts();

        } else if(path.indexOf("/contacts/fav") > -1) {
            // 즐겨찾는 연락처 조회
            this.getFavContacts();

        } else if(path.indexOf("/contacts/lat") > -1) {
            // 최근 연락처 조회
            this.getLatContacts();

        } else if(path.indexOf("/contacts/group") > -1) {
            // 그룹 연락처 조회
            this.getGroupContacts();

        } else if(path.indexOf("/contacts/enroll") > -1) {
            // 연락처 신규등록

            // 체크박스, 체크리스트 초기화
            // rightView 바꾸고
            // 액션바 타입 변경

            let selectedData = Object.assign({}, this.props.selectedData);
            selectedData.rightView = "ENROLL";
            this.props.onSetSelectedData(selectedData);

        } else if(path.indexOf("/contacts/modify") > -1) {
            // 연락처 수정

            // 선택한 연락처 정보 조회
            // 체크박스, 체크리스트 초기화
            // rightView 바꾸고
            // 액션바 타입 변경

        } else if(path.indexOf("/contacts/detail") > -1) {
            // 연락처 상세조회

            // 선택한 연락처 정보 조회
            // 체크박스, 체크리스트 초기화 할지 안할지 고려해서 설정
            // rightView 바꾸고
            // 액션바 타입 변경할지 안할지(다중선택인 경우가 있음)

        } else if(path.indexOf("/contacts/bizcard") > -1) {
            // 명함등록현황

            // 명함 등록 현황 조회
            // 체크박스, 체크리스트 초기화
            // rightView 바꾸고(리스트도 안보이게)
            // 액션바 닫고

            let selectedData = Object.assign({}, this.props.selectedData);
            selectedData.rightView = "BIZCARD";
            this.props.onSetSelectedData(selectedData);


        } else if(path.indexOf("/contacts/history") > -1) {
            // 활동기록

            // 활동기록 조회
            // 체크박스, 체크리스트 초기화
            // rightView 바꾸고(리스트도 안보이게)
            // 액션바 닫고

            let selectedData = Object.assign({}, this.props.selectedData);
            selectedData.rightView = "HISTORY";
            this.props.onSetSelectedData(selectedData);

        } else if(path.indexOf("/contacts/trash") > -1) {
            // 휴지통

            // 활동기록 조회
            // 체크박스, 체크리스트 초기화
            // rightView 바꾸고(리스트도 안보이게)
            // 액션바 닫고

            let selectedData = Object.assign({}, this.props.selectedData);
            selectedData.rightView = "TRASH";
            this.props.onSetSelectedData(selectedData);


        } else if(path.indexOf("/contacts/settings") > -1) {
            // 환경설정

            // 활동기록 조회
            // 체크박스, 체크리스트 초기화
            // rightView 바꾸고(리스트도 안보이게)
            // 액션바 닫고
            let selectedData = Object.assign({}, this.props.selectedData);
            selectedData.rightView = "SETTINGS";
            this.props.onSetSelectedData(selectedData);

        }



    };

    // 버튼 선택시 url 변경
    onSetTitleData = (type, event) => {
        event.preventDefault();

        let selectedData = Object.assign({}, this.props.selectedData);
        if(type === "all" || type === "group") {
            selectedData.contact_type = 0;
            selectedData.address_service_no = -1;
            this.props.onSetSelectedData(selectedData);
        } else {
            selectedData.contact_type = 1;
            this.props.onSetSelectedData(selectedData);
        }

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

    // 전체 연락처 조회
    getAllContacts = () => {
        // 연락처 목록 조회
        // 체크박스 모두 초기화
        // 체크리스트 초기화
        // rightView 바꾸고
        // selectedData 바꾸고
        // 액션바 닫고
        // 그룹 선택 클래스네임 변경

        let selectedData = Object.assign({}, this.props.selectedData);
        selectedData.group_name = '전체 연락처';
        selectedData.address_cnt = 1111;
        selectedData.group_no = -1;
        if(selectedData.contact_type === 0) {
            selectedData.rightView = "USER_DETAIL";
        } else {
            selectedData.rightView = "DETAIL";
        }

        this.props.onSetSelectedData(selectedData);

    };


    // 즐겨찾는 연락처 조회
    getFavContacts = () => {
        // 연락처 목록 조회
        // 체크박스, 체크리스트 초기화
        // rightView 바꾸고
        // selectedData 바꾸고
        // 액션바 닫고
        // 그룹선택 className 변경

        let selectedData = Object.assign({}, this.props.selectedData);
        selectedData.group_name = '즐겨찾는 연락처';
        selectedData.address_cnt = 222;
        selectedData.group_no = -2;
        selectedData.contact_type = 1;
        selectedData.rightView = "DETAIL";
        this.props.onSetSelectedData(selectedData);

    };


    // 최근 연락처 조회
    getLatContacts = () => {
        // 연락처 목록 조회
        // 체크박스, 체크리스트 초기화
        // rightView 바꾸고
        // selectedData 바꾸고
        // 액션바 닫고
        // 그룹선택 className 변경

        let selectedData = Object.assign({}, this.props.selectedData);
        selectedData.group_name = '최근 연락처';
        selectedData.address_cnt = 3333;
        selectedData.group_no = -3;
        selectedData.contact_type = 1;
        selectedData.rightView = "DETAIL";
        this.props.onSetSelectedData(selectedData);
    };


    // 그룹별 연락처 조회
    getGroupContacts = () => {
        // 연락처 목록 조회
        // 체크박스, 체크리스트 초기화
        // rightView 바꾸고
        // selectedData 바꾸고
        // 액션바 닫고
        // 그룹선택 className 변경

        let selectedData = Object.assign({}, this.props.selectedData);
        selectedData.group_name = '그룹 연락처';
        selectedData.address_cnt = 4444;
        selectedData.group_no = 100;
        if(selectedData.contact_type === 0) {
            selectedData.rightView = "USER_DETAIL";
        } else {
            selectedData.rightView = "DETAIL";
        }
        this.props.onSetSelectedData(selectedData);
    };

    // 우측 화면 setting
    getRightView = () => {
        let selectedData = Object.assign({}, this.props.selectedData);
        switch (selectedData.rightView) {
            case 'DETAIL':
                return (<Right/>);
            case 'USER_DETAIL':
                return (<Right />);
            case 'BIZCARD':
                return (<ContactBizcard/>);
            case 'HISTORY':
                return (<ContactHistory/>);
            case 'TRASH':
                return (<ContactTrash/>);
            case 'SETTINGS':
                return (<ContactSettings/>);
            default:
                return (<Right/>);
        }
    };



    render() {
        let {selectedData} = this.props;

        console.log("[Contacts] RENDER ----- selectedData : ", selectedData);

        return (

            <SinglePage className="tr">
                <div className="sub_header">
                    <h1>연락처</h1>
                </div>
                <div className="LUX_basic_snb snb_v2 snb_ad">
                    <div className="snb_btn_area">
                        <button type="button" className="LUX_basic_btn Confirm basic2" onClick={this.onSetTitleData.bind(this, "enroll")}><span>연락처 등록</span></button>
                    </div>
                    <div className="LUX_basic_snbin" style={{bottom: '135px'}}>
                        {/*
                                active : 현재 활성화된 메뉴
                                is_badge : 뱃지가 있을 경우 사용
                                is_num : 숫자가 필요할 때 사용
                                ** is_badge와 is_num은 동시에 사용하지 않는다.
                                ** 수치는 99가 넘어가면 99+ badge를 사용한다.
                            */}
                        <div className="snb_group title_group">
                            <div className="group_box is_num">
                                <a href="#" onClick={this.onSetTitleData.bind(this, "all")} className="text">
                                    <i className="sp_snb all_ico" />
                                    <em>전체 연락처</em>
                                    <span className="number">{this.props.total_cnt > 999 ? '999+' : this.props.total_cnt > 0 ? this.props.total_cnt : null}</span>
                                </a>
                            </div>
                            <div className="group_box is_num">
                                <a href="#" onClick={this.onSetTitleData.bind(this, "fav")} className="text">
                                    <i className="sp_snb fave_ico" />
                                    <em>즐겨찾는 연락처</em>
                                    <span className="number">{this.props.favorite_cnt > 999 ? '999+' : this.props.favorite_cnt > 0 ? this.props.favorite_cnt : null}</span>
                                </a>
                            </div>
                            <div className="group_box is_num">
                                <a href="#" onClick={this.onSetTitleData.bind(this, "lat")} className="text">
                                    <i className="sp_snb clock_ico" />
                                    <em>최근 연락처</em>
                                    <span className="number">{this.props.latest_cnt > 999 ? '999+' : this.props.latest_cnt > 0 ? this.props.latest_cnt : null}</span>
                                </a>
                            </div>
                        </div>
                        <div className="snb_group user_group">
                            <div className="title_area">
                                {/* [D] 그룹 영역 폴딩할 경우 클래스 fold 추가 및 닫기 텍스트 열기로 변경 */}
                                <a href="#" className="title">사용자그룹 <span className="num">2</span>
                                    <i className="sp_lux">닫기</i>
                                </a>
                                <div className="btn_area">
                                    <button type="button" className="add_group"><span className="sp_snb">그룹생성</span></button>
                                </div>
                            </div>
                            <div className="snb_group_list">
                                {/*
                                         [D] badge가 존재할 경우 클래스 is_badge 추가
                                             number가 존재할 경우 클래스 is_num 추가
                                    */}
                                <div className="group_box is_badge select">
                                    <a href="#" className="text">
                                        <i className="sp_snb" />
                                        <em>사용자그룹사용자그룹사용자그룹</em>
                                        <span className="LUX_basic_badge red small">99+</span>
                                    </a>
                                    {/* [D] 편집 버튼 클릭시 edit_list 영역 활성화 style="display:block" 적용 */}
                                    <button type="button" className="btn_edit"><i className="sp_snb">편집</i></button>
                                    <div className="edit_list" style={{display: 'block'}}>
                                        <ul>
                                            <li><a href="#">이름변경</a></li>
                                            <li><a href="#">그룹삭제</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="group_box">
                                    <a href="#" className="text">
                                        <i className="sp_snb share_ico" />
                                        <em>공유그룹</em>
                                    </a>
                                    <button type="button" className="btn_edit"><i className="sp_snb">편집</i></button>
                                    <div className="edit_list">
                                        <ul>
                                            <li><a href="#">이름변경</a></li>
                                            <li><a href="#">그룹삭제</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="group_box group_box_set">
                                    <a href="#" className="text">
                                        <i className="sp_snb" />
                                        <em>그룹폴더</em>
                                    </a>
                                    <button type="button" className="btn_edit"><i className="sp_snb">편집</i></button>
                                    <div className="edit_list">
                                        <ul>
                                            <li><a href="#">이름변경</a></li>
                                            <li><a href="#">그룹삭제</a></li>
                                        </ul>
                                    </div>
                                    {/* 그룹 편집 요소*/}
                                    <div className="text text_edit">
                                        <i className="sp_snb" />
                                        <div className="LUX_basic_text">
                                            {/* 입력창에 포커스 - inpbx class="on" 추가  */}
                                            <div className="inpbx">
                                                <p className="placeholder">그룹폴더</p>
                                                <input type="text" id="textField_text" />
                                                <span className="sp_lux" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn_group_set">
                                        <button type="button" className="LUX_basic_btn Image btn_com"><span className="sp_snb">수정</span></button>
                                        <button type="button" className="LUX_basic_btn Image btn_del"><span className="sp_snb">취소</span></button>
                                    </div>
                                    {/* //그룹 편집 요소*/}
                                </div>
                                <div className="group_box is_num">
                                    <a href="#" className="text">
                                        <i className="sp_snb group_ico" />
                                        <em>그룹폴더그룹폴더그룹폴더그룹폴더</em>
                                        <span className="number">123</span>
                                    </a>
                                    <button type="button" className="btn_edit"><i className="sp_snb">편집</i></button>
                                    <div className="edit_list">
                                        <ul>
                                            {/* [D] 이름변경 클릭시 상위 group_box 영역에 group_box_set 추가 */}
                                            <li><a href="#">이름변경</a></li>
                                            <li><a href="#">그룹삭제</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="group_box depth1 group_box_set">
                                    <a href="#" className="text">
                                        <i className="sp_snb" />
                                        <em>폴더내그룹</em>
                                    </a>
                                    <button type="button" className="btn_edit"><i className="sp_snb">편집</i></button>
                                    <div className="edit_list">
                                        <ul>
                                            <li><a href="#">이름변경</a></li>
                                            <li><a href="#">그룹삭제</a></li>
                                        </ul>
                                    </div>
                                    {/* 그룹 편집 요소*/}
                                    <div className="text text_edit">
                                        <i className="sp_snb" />
                                        <div className="LUX_basic_text">
                                            {/* 입력창에 포커스 - inpbx class="on" 추가  */}
                                            <div className="inpbx">
                                                <p className="placeholder">그룹폴더</p>
                                                <input type="text" id="textField_text" />
                                                <span className="sp_lux" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn_group_set">
                                        <button type="button" className="LUX_basic_btn Image btn_com"><span className="sp_snb">수정</span></button>
                                        <button type="button" className="LUX_basic_btn Image btn_del"><span className="sp_snb">취소</span></button>
                                    </div>
                                    {/* //그룹 편집 요소*/}
                                </div>
                                <div className="group_box is_badge depth1">
                                    <a href="#" className="text">
                                        <i className="sp_snb" />
                                        <em>폴더내그룹폴더내그룹폴더내그룹</em>
                                        <span className="LUX_basic_badge blue small">N</span>
                                    </a>
                                    <button type="button" className="btn_edit"><i className="sp_snb">편집</i></button>
                                    <div className="edit_list">
                                        <ul>
                                            <li><a href="#">이름변경</a></li>
                                            <li><a href="#">그룹삭제</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 환경설정 서비스 관리*/}
                    <div className="bottom_btn">
                        <ul>
                            <li>
                                <a href="#" onClick={this.onSetTitleData.bind(this, "bizcard")} >
                                    <span className="sp_snb ico_contacts" />
                                    명함등록현황
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={this.onSetTitleData.bind(this, "history")} >
                                    <span className="sp_snb ico_records" />
                                    활동기록
                                </a>
                            </li>
                            <li className="is_trash">
                                <a href="#" onClick={this.onSetTitleData.bind(this, "trash")} target="_blank">
                                    <span className="sp_snb ico_garbage" />
                                    휴지통
                                </a>
                                <button type="button" className="LUX_basic_btn">
                                    <span className="sp_snb ico_trash">비우기 버튼</span>
                                </button>
                            </li>
                            <li>
                                <a href="#" onClick={this.onSetTitleData.bind(this, "settings")} >
                                    <span className="sp_snb ico_settings" />
                                    환경설정
                                </a>
                            </li>
                        </ul>
                    </div>
                        {/* //환경설정 서비스 관리*/}
                </div>

                {this.getRightView()}

            </SinglePage>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedData: state.contactsinfo.selectedData,
        total_cnt: state.contactsgroup.total_cnt,
        favorite_cnt: state.contactsgroup.favorite_cnt,
        latest_cnt: state.contactsgroup.latest_cnt,
        myGroupList: state.contactsgroup.myGroupList,
        sharedGroupList: state.contactsgroup.sharedGroupList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetSelectedData: (selectedData) => { dispatch(setSelectedData({selectedData})) },
        onGetTotalCount: () => { dispatch(getTotalCount({})) },
    }
};

Contacts.propTypes = {
    onSetSelectedData: PropTypes.func,
    onGetTotalCount: PropTypes.func,
};


Contacts.defaultProps = {
    onSetSelectedData: () => console.warn('onSetSelectedData not defined'),
    onGetTotalCount: () => console.warn('onGetTotalCount not defined'),

};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
