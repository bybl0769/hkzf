import React, { Component } from 'react'

import { TabBar } from 'antd-mobile';

export default class HKLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }

  render() {
    return (

      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            icon={<i className="iconfont icon-ind"></i>}
            selectedIcon={<i className="iconfont icon-ind"></i>}
            title="首页"
            key="Koubei"
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            {this.props.children}

          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse"></i>}
            selectedIcon={<i className="iconfont icon-findHouse"></i>}
            title="找房"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
            {this.props.children}

          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={<i className="iconfont icon-infom"></i>}
            title="资讯"
            key="Koubei"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.props.children}

          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-myinfo"></i>}
            selectedIcon={<i className="iconfont icon-myinfo"></i>}
            title="我的"
            key="Koubei"
            selected={this.state.selectedTab === 'pickTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'pickTab',
              });
            }}
          >
            {this.props.children}

          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}


