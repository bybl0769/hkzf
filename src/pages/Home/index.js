import React, { Component, Fragment } from 'react'
import { Carousel, Flex } from 'antd-mobile';
export default class index extends Component {
	state = {
		imgList: [],
		imgHeight: 176,
	}

	render() {
		return (
			<Fragment>
				<div className="home">
					<Flex>
						<div className="search">
							<div className="location"> <span className="iconfont icon-arrow"></span>上海</div>
							<div><span iconfont></span><span>请输入小区或地址</span></div>
						</div>
						<span>12</span>
					</Flex>
					<Carousel autoplay={true} infinite={true} swipeSpeed={20}>
						{this.state.imgList.map(val => (
							<a
								key={val}
								href="http://www.alipay.com"
								style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
							>
								<img
									src={val}
									alt=""
									style={{ width: '100%', verticalAlign: 'top' }}
									onLoad={() => {
										// fire window resize event to change height
										window.dispatchEvent(new Event('resize'));
										this.setState({ imgHeight: 'auto' });
									}}
								/>
							</a>
						))}
					</Carousel>
				</div>
			</Fragment>

		)
	}
}
