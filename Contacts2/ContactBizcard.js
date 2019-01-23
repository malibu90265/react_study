import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";

class ContactBizcard extends Component {

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
                    <h2>
                        명함요청관리<strong>14</strong>
                        <div className="btn_bx" style={{position: 'absolute', top: '28px', right: 0}}>
                            <button type="button" className="LUX_basic_btn Default basic"><span>명함입력 요청하기</span>
                            </button>
                        </div>
                    </h2>
                </div>
                <div className="ad_content ad_content_v3">
                    <div className="reg_namecard">
                        <div className="state_bx up">
                            <div className="title">
                                <strong>명함 상태 안내</strong><span className="n_badge defer">입력보류</span> <span
                                className="noti">정보를 인식 할 수 없어 입력이 보류된 상태입니다. 명함 이미지를 확인해주세요.</span>
                                <div className="btn_bx">
                                    <button type="button" className="LUX_basic_btn Default basic"><span>전체삭제</span>
                                    </button>
                                </div>
                            </div>
                            <ul className="state_list">
                                <li>
                                    <a href="#" className="item">
                                        <img src="https://static.wehago.com/imgs/dummy/@namecard_front.png"
                                             className="img_namecard" alt="명함 앞면"/>
                                        <div className="info_bx">
                                            <span className="date">촬영 : 2018-05-23</span>
                                            <span className="n_badge defer">입력보류</span>
                                        </div>
                                    </a>
                                </li>
                                {/* [D] Emptyset 필요 시 : is_empty 클래스 추가 */}
                                <li className="is_empty">
                                    <a href="#" className="item">
                                        <img src="https://static.wehago.com/imgs/dummy/@namecard_back.png"
                                             className="img_namecard" alt="명함 뒷면"/>
                                        <div className="info_bx">
                                            <span className="date">촬영 : 2018-05-23</span>
                                            <span className="n_badge defer">입력보류</span>
                                        </div>
                                    </a>
                                </li>
                                <li><a href="#" className="item"> <img
                                    src="https://static.wehago.com/imgs/dummy/@namecard_front.png"
                                    className="img_namecard" alt="명함 앞면"/>
                                    <div className="info_bx"><span className="date">촬영 : 2018-05-23</span> <span
                                        className="n_badge defer">입력보류</span></div>
                                </a></li>
                                <li><a href="#" className="item"> <img
                                    src="https://static.wehago.com/imgs/dummy/@namecard_back.png"
                                    className="img_namecard" alt="명함 뒷면"/>
                                    <div className="info_bx"><span className="date">촬영 : 2018-05-23</span> <span
                                        className="n_badge defer">입력보류</span></div>
                                </a></li>
                                <li><a href="#" className="item"> <img
                                    src="https://static.wehago.com/imgs/dummy/@namecard_front.png"
                                    className="img_namecard" alt="명함 앞면"/>
                                    <div className="info_bx"><span className="date">촬영 : 2018-05-23</span> <span
                                        className="n_badge defer">입력보류</span></div>
                                </a></li>
                                <li><a href="#" className="item"> <img
                                    src="https://static.wehago.com/imgs/dummy/@namecard_back.png"
                                    className="img_namecard" alt="명함 뒷면"/>
                                    <div className="info_bx"><span className="date">촬영 : 2018-05-23</span> <span
                                        className="n_badge defer">입력보류</span></div>
                                </a></li>
                            </ul>
                        </div>
                        <div className="state_bx down">
                            <div className="title">
                                <strong>명함 상태 안내</strong><span className="n_badge">입력중</span> <span className="noti">WEHAGO 입력센터 직원이 명함을 입력중입니다. 잠시만 기다려주세요.</span>
                            </div>
                            <ul className="state_list">
                                <li>
                                    <div className="item">
                                        <img src="https://static.wehago.com/imgs/dummy/@namecard_front.png"
                                             className="img_namecard" alt="명함 앞면"/>
                                        <div className="info_bx">
                                            <span className="date">촬영 : 2018-05-23</span>
                                            <span className="n_badge">입력중</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <img src="https://static.wehago.com/imgs/dummy/@namecard_back.png"
                                             className="img_namecard" alt="명함 뒷면"/>
                                        <div className="info_bx">
                                            <span className="date">촬영 : 2018-05-23</span>
                                            <span className="n_badge">입력중</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item"><img
                                        src="https://static.wehago.com/imgs/dummy/@namecard_front.png"
                                        className="img_namecard" alt="명함 앞면"/>
                                        <div className="info_bx"><span className="date">촬영 : 2018-05-23</span> <span
                                            className="n_badge">입력중</span></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item"><img
                                        src="https://static.wehago.com/imgs/dummy/@namecard_back.png"
                                        className="img_namecard" alt="명함 뒷면"/>
                                        <div className="info_bx"><span className="date">촬영 : 2018-05-23</span> <span
                                            className="n_badge">입력중</span></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item"><img
                                        src="https://static.wehago.com/imgs/dummy/@namecard_front.png"
                                        className="img_namecard" alt="명함 앞면"/>
                                        <div className="info_bx"><span className="date">촬영 : 2018-05-23</span> <span
                                            className="n_badge">입력중</span></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item"><img
                                        src="https://static.wehago.com/imgs/dummy/@namecard_back.png"
                                        className="img_namecard" alt="명함 뒷면"/>
                                        <div className="info_bx"><span className="date">촬영 : 2018-05-23</span> <span
                                            className="n_badge">입력중</span></div>
                                    </div>
                                </li>
                            </ul>
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

ContactBizcard.propTypes = {
    isSample: PropTypes.string,
    onSetSample: PropTypes.func,
};


ContactBizcard.defaultProps = {
    isSample: '',
    onSetSample: () => console.warn('onSetSample not defined'),

};

export default connect(mapStateToProps, mapDispatchToProps)(ContactBizcard);
