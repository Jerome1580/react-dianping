import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore.js'
import {CITYNAME} from '../config/localStoreKey.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo.js'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
         initDone : false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ?this.props.children
                    :<div>加载中……</div>
                }
            </div>
        )
    }

    componentDidMount(){
        // 从localstorerage里面获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if(cityName == null){
            cityName = '北京'
        }

        // 将城市信息存储到 Redux 中
        this.props.userInfoActions.update({
            cityName:cityName
        })

        this.setState({initDone:true})
    }
}

function mapStateToProps(state) {
    // 将state作为属性，传入到react中
    return {
        // 只是设置城市，无需获取，这里传空
    }
}

function mapDispatchToProps(dispatch) {
    // 将action作为属性，传入到react中
    return {
        userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
