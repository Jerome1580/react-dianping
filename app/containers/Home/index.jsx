import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader/index.jsx'
import Category from '../../components/Category/index.jsx'
import Ad from './subpage/Ad'
import List from './subpage/List'

import { connect } from 'react-redux'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <div style={{height:'15px'}}></div>
                <Ad/>
                <List cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // 将state作为属性，传入到react中
    return {
       userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    // 将action作为属性，传入到react中
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
