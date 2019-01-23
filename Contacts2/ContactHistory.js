import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";

class ContactHistory extends Component {

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
                    <h2>활동기록</h2>
                </div>
                <div className="ad_content active_log">
                    <div className="date_wrap">
                        <span className="date_tit">기간</span>
                        <div className="LUX_basic_date_gap">
                            <div className="date_gap" style={{marginRight: '-1px'}}>
                                <div className="LUX_basic_date">
                                    <div className="datebx">
                    <span className="inpbx">
                      <input type="text" id="btn_date2" defaultValue="2016.08.28"/>
                      <label htmlFor="btn_date2"/>
                    </span>
                                        <button type="button" className="btn"><span className="sp_lux">검색</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="date_gap">
                                <div className="LUX_basic_date">
                                    <div className="datebx">
                    <span className="inpbx">
                      <input type="text" id="btn_date3" defaultValue="2016.08.28"/>
                      <label htmlFor="btn_date3"/>
                    </span>
                                        <button type="button" className="btn"><span className="sp_lux">검색</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="log_list">
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_addgroup"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong>의 <strong>전화번호</strong>를 추가하였습니다.
              </span>
                            <span className="log_date">20분 전</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_delgroup"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong> 외 N개의 <strong>연락처를</strong> 그룹삭제 하였습니다.
              </span>
                            <span className="log_date">20분 전</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_modifygroup"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong>의 <strong>그룹정보를</strong> 변경하였습니다.
              </span>
                            <span className="log_date">20분 전</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_add"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong> 외 N개의 <strong>연락처를</strong> 추가하였습니다.
              </span>
                            <span className="log_date">2016-08-03 11:09:32</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_modify"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong>의 <strong>그룹정보를</strong> 수정하였습니다.
              </span>
                            <span className="log_date">2016-08-03 11:09:32</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_import"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong>의 <strong>그룹정보를</strong> 가져오기하였습니다.
              </span>
                            <span className="log_date">2016-08-03 11:09:32</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_export"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong>의 <strong>그룹정보를</strong> 내보내기하였습니다.
              </span>
                            <span className="log_date">2016-08-03 11:09:32</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_delete"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong>의 <strong>전화번호를</strong> 삭제하였습니다.
              </span>
                            <span className="log_date">2016-08-03 11:09:32</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_move"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong> 외 N개의 <strong>연락처를</strong> 이동했습니다.
              </span>
                            <span className="log_date">2016-08-03 11:09:32</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_share"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong>의 <strong>그룹정보를</strong> 공유하였습니다.
              </span>
                            <span className="log_date">2016-08-03 11:09:32</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_setting"/><strong
                  className="point_color">김더존</strong>님이 <strong>그룹정보를</strong> 설정하였습니다.
              </span>
                            <span className="log_date">2016-08-03 11:09:32</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_setlink"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong>의 <strong>그룹정보를</strong> 링크설정하였습니다.
              </span>
                            <span className="log_date">2016-08-03 11:09:32</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_removelink"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong>의 <strong>그룹정보를</strong> 링크해제하였습니다.
              </span>
                            <span className="log_date">2016-08-03 11:09:32</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_emptytrashcan"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong> 외 N개의 <strong>연락처를</strong> 휴지통비우기했습니다.
              </span>
                            <span className="log_date">2016-08-03 11:09:32</span>
                        </li>
                        <li>
              <span className="log_txt">
                <span className="sp_tr ico_log_arrange"/><strong className="point_color">김더존</strong>님이 <strong
                  className="alarm_color">성수현</strong> 외 N개의 <strong>연락처를</strong> 정리했습니다.
              </span>
                            <span className="log_date">2016-08-03 11:09:32</span>
                        </li>
                    </ul>
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

ContactHistory.propTypes = {
    isSample: PropTypes.string,
    onSetSample: PropTypes.func,
};


ContactHistory.defaultProps = {
    isSample: '',
    onSetSample: () => console.warn('onSetSample not defined'),

};

export default connect(mapStateToProps, mapDispatchToProps)(ContactHistory);
