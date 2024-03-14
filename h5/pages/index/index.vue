<template>
	<view class="home">
		<!-- 私享定制 -->
		<view>
			<view class="manage_info" v-if="isLogin">
				<!-- 我的信息 -->
				<view class="info_me"
					style="background: linear-gradient(161deg, #C0D3FE -58.8%, #FFF 45.69%); margin-bottom: 20rpx;">
					<view class="me_title">
						<view class="title_left">遇事不决问自己</view>
					</view>

					<view class="me_cont">
						<view class="cont_left" @click="mentorChat(meList.photo, meList.greeting,meList.me_id,'')">
							<image :src="getImgUrl(meList.photo)" mode="" class="left_img">
								<view class="left_text">我</view>
						</view>
						<view class="cont_right">
							<view class="cont_btn"
								@click="mentorChat(meList.photo, meList.greeting,meList.me_id,'')">
								问自己</view>
							<view class="cont_btn_b" @click="toDetail(meList.me_id)">编辑资料</view>
							<view class="cont_text">*补充完善资料，我将成为您的孪生数字人</view>
						</view>
					</view>
				</view>

				<view class="info_me" :style="meImg"
					@click="mentorChat(meList.photo, meList.greeting,meList.me_id,'')">
					<view class="info_title">
						<view class="title_l">
							<image :src="getImgUrl(meList.photo)" mode="" class="l_img">
						</view>
						<view class="title_r">Hi,{{ meList.name }}</view>
					</view>
					<view class="info_text">
						<text class="text_l">{{ time_text }}</text>
						<text class="text_l">,好久不见了呀，最近怎么样？</text>
					</view>
				</view>

				<!-- 导师信息 -->
				<view class="info_me"
					style="background: linear-gradient(140deg, #C0EAFE -32.97%, #FFF 34.74%); margin-bottom: 0;">
					<view class="me_title" style="margin-bottom: 20upx;">
						<view class="title_left">私享AI顾问</view>
						<view class="title_right" @click="toManage">
							<text class="right_texts">导师管理</text>
							<u-icon size="14" name="arrow-right"></u-icon>
						</view>
					</view>

					<view class="other_cont">
						<view class="cont_left" v-for="(item, index) in otherList" :key="index"
							v-if="JSON.stringify(item) != '{}'">
							<image :src="getImgUrl(item.avatar)" mode="" class="left_img"
								@click="mentorChat(item.avatar, item.greeting,item.me_id,item.tutor_id)">
								<view class="left_text">{{ item.character_name }}</view>
								<view class="qh_img" @click="addMentor(meList.me_id,index,item.tutor_id)"></view>
						</view>
					</view>
				</view>

			</view>

			<view class="manage_info" v-if="!isLogin">

				<!-- 导师信息 -->
				<view class="info_me"
					style="background: linear-gradient(140deg, #C0EAFE -32.97%, #FFF 34.74%); margin-bottom: 0;">
					<view class="me_title" style="margin-bottom: 20upx;">
						<view class="title_left">AI导师助你成功</view>
						<view class="title_right" @click="toManage">
							<text class="right_texts">导师管理</text>
							<u-icon size="14" name="arrow-right"></u-icon>
						</view>
					</view>

					<view class="other_cont">
						<view class="cont_left" v-for="(item, index) in exArr1" :key="index"
							v-if="JSON.stringify(item) != '{}'">
							<image :src="getImgUrl(item.avatar)" mode="" class="left_img" @click="toLogin">
								<view class="left_text">{{ item.character_name }}</view>
						</view>
					</view>
				</view>
			</view>

			<view style="padding: 20upx;">
				<view class="mentor">
					<view class="mentor_title">热门AI顾问推荐</view>
					<view class="mentor_cont" v-for="(item, index) in mentorList" :key="index"
						@click="mentorChat(item.avatar, item.greeting,item.me_id,item.tutor_id)">
						<view class="cont_l">
							<image :src="getImgUrl(item.avatar)" mode="" class="l_img">
						</view>
						<view class="cont_r">
							<text class="r_top">{{ item.character_name }}</text>
							<text class="r_btn">{{ item.greeting }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="wz_tip" @click="toCreateList">
			<image :src="creatImg" mode="" class="creat_img"></image>
		</view>
	</view>

</template>

<script>
	// import { prompts } from '@/apis/chat.js'
	import {
		getIndustry,
		getOccupation,
		getSec,
		getDuration,
		getExpertise,
		getModules,
		getQuestions,
		getQrCode,
		getTab,
		getMessage,
		getTutor,
		getMe,
		getAllMe
	} from '@/apis/user.js'
	export default {
		components: {},
		data() {
			return {
				creatImg: global.baseImg + '/xcx/f0785792-267f-472b-b9aa-8144328cf9a4.jpg',
				meImg: 'background-image: url("' + global.baseImg + '/xcx/com/message_center/heading.png")',
				exArr1: [],
				exArr2: [],
				allMentor: [],
				isLogin: false,
				meList: '',
				otherList: [],
				mentorList: [],
				time_text: '',
				me_id: ''
			}
		},


		onShow() {

			this.getTutor();
			let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
			if (userInfo.role == 'guess') {
				this.headImg = global.baseImg + '/xcx/com/message_center/Frame%20427320149.png'
				this.isLogin = false
			} else {
				this.getMe()
				this.isLogin = true
			}

			this.getTime()

		},
		

		onHide() {
			
		},
		methods: {
			getTime() {
				// 获取当前时间
				let timeNow = new Date();
				// 获取当前小时
				let hours = timeNow.getHours();
				// 判断当前时间段
				if (hours >= 0 && hours <= 10) {
					this.time_text = `早上好`;
				} else if (hours > 10 && hours <= 14) {
					this.time_text = `中午好`;
				} else if (hours > 14 && hours <= 18) {
					this.time_text = `下午好`;
				} else if (hours > 18 && hours <= 24) {
					this.time_text = `晚上好`;
				}
			},
			

			// 获取内荐导师列表
			getTutor() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					// 'user_id': userInfo.user_id,
					'is_built_in': '1',
				}
				getTutor(val).then(res => {
					if (res.code == 20000) {
						this.exArr1 = [];
						this.exArr2 = [];
						this.mentorList = res.data;
						if (res.data.length > 0) {
							res.data.map((item, index) => {
								if (index < 8) {
									this.exArr1.push(item);
								} else {
									this.exArr2.push(item);
								}
							})
						}
						// console.log(this.exArr1,222)
						// console.log(this.exArr2,333)
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取导师失败');
				})
			},

			// 获取我的信息列表
			getMe() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'user_id': userInfo.user_id,
				}
				getMe(val).then(res => {
					if (res.code == 20000) {
						if (res.data.length > 0) {
							let meArr = []
							res.data.map((item, index) => {
								meArr.push(item.me_id)
								this.me_id = item.me_id
							})
							this.getAllMe(meArr)
						} else {
							this.$api.msg('登录信息已过期，请重新登录')
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/login/login',
								})
							}, 800)
						}
					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取导师失败');
				})
			},

			//获取我的所有信息
			getAllMe(arr) {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				let val = {
					'me_ids': JSON.stringify(arr),
				}
				getAllMe(val).then(res => {
					if (res.code == 20000) {
						if (res.data.length > 0) {
							let newrr = [{}, {}, {}, {}, {}, {}, {}, {}]
							res.data.forEach(str => {
								str.tutor.forEach(item => {
									if (JSON.stringify(item) != '{}') {
										let sort = item.sort;
										newrr[sort] = item
									}
								})
								str.tutor = newrr
							})
							this.allMentor = res.data
							this.meList = res.data[0].me;
							this.otherList = res.data[0].tutor
							// console.log(this.allMentor, 5556)
							// console.log(this.meList,3333)
							// console.log(this.otherList,5652)
						} else {
							this.$api.msg('登录信息已过期，请重新登录')
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/login/login',
								})
							}, 800)
						}

					} else {
						this.$api.msg(res.msg);
					}
				}).catch(err => {
					this.$api.msg('获取导师失败');
				})
			},

			mentorChat(url, text, me_id, tutor_id) {
				uni.navigateTo({
					url: '/childPage/mentor/mentor_chat?imgUrl=' + url + '&greet=' + text + '&me_id=' + me_id +
						'&tutor_id=' + tutor_id,
				})
			},

			//修改我的信息
			toDetail(id) {
				uni.navigateTo({
					url: '/childPage/mentor/add_mentor?me_id=' + id,
				})
			},

			addMentor(id, index, tutor_id) {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/mentor/mentor_list?sort=' + index + '&me_id=' + id + '&tutor_id=' +
							tutor_id,
					})
				}

			},

			toManage() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/mentor/manage_list',
					})
				}
			},

			toCreateList() {
				let userInfo = JSON.parse(uni.getStorageSync('userInfo'));
				if (userInfo.role == 'guess') {
					uni.navigateTo({
						url: '/pages/login/login',
					})
				} else {
					uni.navigateTo({
						url: '/childPage/mentor/add_list?me_id='+ this.me_id,
					})
				}
			},

			getImgUrl(url) {
				// console.log(url);
				return global.baseImg + '/' + url;
			},

			toSearch() {
				uni.navigateTo({
					url: '/pages/apply/apply_search',
				})
			},

			toIdea() {
				uni.navigateTo({
					url: '/childPage/answer/answer'
				})
			}
		}
	}
</script>
<style>
	page {
		background: #f6f8fB;
	}
</style>
<style lang="less" scoped>
	.head_index {
		width: 100%;
		// height: 268upx;
		position: fixed;
		top: 0upx;
		background: #fff;
		z-index: 10;
	}

	.head_cont {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// padding: 0upx 32upx;
	}

	.cont_tabs {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		height: 44px;
		// border-bottom: 1px solid #E5E6EB;
		background: #fff;
		// position: absolute;
		// top: 100upx;
		// left: 0;
		line-height: 44px;
		font-size: 14px;
		// padding-left: 32upx;

	}

	// .apply_cont { margin-top: 88upx; }
	// .line_select { position: fixed; top: 108px; left: 0; z-index: 10; }
	.line_select {
		z-index: 10;
	}

	.tab_line {
		// padding: 20upx 0upx;
		// border-bottom: 1upx solid #E6E6E8;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: #fff;
		width: 100%;
		height: 40px;

		.line {
			display: flex;
			align-items: center;

			.line_text {
				font-style: normal;
				font-weight: 400;
				font-size: 26upx;
				line-height: 40upx;
				color: #333;
			}

			.active_line_text {
				font-style: normal;
				font-weight: 400;
				font-size: 26upx;
				line-height: 40upx;
				color: #1F64FF;
				max-width: 100upx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				display: inline-block;
			}

			.line_img {
				width: 30upx;
				height: 30upx;
				// padding-left: 6upx;
			}
		}
	}

	.cont_mid {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15upx 30upx;
		height: 40px;
	}

	.cont_mids {
		display: flex;
		align-items: center;
		justify-content: space-between;
		// padding: 15upx 30upx;
		box-shadow: 0px -2px 10px rgba(51, 51, 51, 0.05);
		height: 40px;
		background: #fff;
	}

	.mid_btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		border-radius: 12upx;
		line-height: 40px;

	}

	.clear_img {
		width: 40upx;
		height: 40upx;
	}

	.clear_text {
		font-style: normal;
		font-weight: 500;
		font-size: 28upx;
		color: #999;
		margin-left: 10upx;
	}

	.mid_l {
		font-style: normal;
		font-weight: 400;
		font-size: 26upx;
		color: #333;
		/* line-height: 24px; */
	}

	.active_mid_l {
		font-style: normal;
		font-weight: 400;
		font-size: 26upx;
		color: #1F64FF;
		/* line-height: 24px; */
	}

	.mid_img {
		width: 40upx;
		height: 40upx;
		// padding-right: 10upx;
	}

	.cont_text {
		display: flex;
		justify-content: space-between;

		.text_right {
			width: 100%;
			display: flex;
			overflow: auto;

			.hotWrods {
				padding: 30upx 18upx 18upx 18upx;

				.hot_cont {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					flex-wrap: wrap;
				}

				.box {
					background: #FFFFFF;
					// box-shadow: 0px 3px 8px rgba(51, 51, 51, 0.1);					
					box-shadow: 0px 2.23993px 7.83975px rgba(51, 51, 51, 0.1);
					border-radius: 8px;
					margin-bottom: 10px;
					width: 90%;
					padding: 12upx;
					position: relative;

					// line-height: 40px;
					.text {
						display: flex;
						align-items: center;
						justify-content: space-between;

					}

					.text_cont {
						padding: 10upx;
						max-height: 140upx;

						.text_li {
							font-size: 26upx;
							color: #888;
							line-height: 40upx;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2; // 控制多行的行数
							-webkit-box-orient: vertical;
						}
					}

					.textInfo {
						display: flex;
						align-items: center;

						.li_avatar {
							width: 80upx;
							height: 80upx;
							border-radius: 7upx;
							color: #fff;
							display: flex;
							align-items: center;
							justify-content: center;
						}

						.li_text {
							max-width: 200upx;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							display: inline-block;
							color: #333;
							font-size: 15px;
							font-weight: 550;
							padding-left: 10px;
						}

					}

					.tips {

						display: flex;
						// background: #F2FAFF;
						border-radius: 0px 8px;
						width: 108px;
						height: 33px;
						font-size: 13px;
						color: #1F64FF;
						line-height: 26px;
						text-align: center;
						justify-content: center;
						align-items: center;

						.content {
							margin-left: 5px;
						}
					}
				}

				.back_img {
					width: 110upx;
					height: 110upx;
					position: absolute;
					top: 0upx;
					right: 0upx;
				}
			}

			.loading {
				display: flex;
				justify-content: center;
				margin-top: 100upx;
			}

			.load_text {
				font-style: normal;
				font-weight: 400;
				font-size: 30upx;
				line-height: 150%;
				color: #AAB2C8;
			}

			.load_img {
				width: 40upx;
				height: 40upx;
				opacity: 0.5;
			}
		}
	}

	.modal {

		// padding: 30px;
		.edit {
			font-weight: 500;
			font-size: 18px;
			line-height: 26px;

			color: #303133;
			position: relative;

			.changes {

				position: absolute;
				height: 5px;
				width: 70px;
				bottom: 3px;
				background: linear-gradient(to right, rgba(31, 100, 255, 1), rgba(31, 100, 255, 0.5), rgba(255, 255, 255, 0.5));
				border-radius: 5px;
			}

		}

		.content {
			width: 272px;
			min-height: 153px;
			// height: 153px;
			background: #F5F6FA;
			border-radius: 8px;
			padding: 20px;
			font-size: 15px;
			color: #606266;
			// font-size: 13px;
			margin-top: 18px;

			/deep/.u-textarea {
				padding: 0;
				background-color: #F5F6FA;
			}

			textarea {
				margin-top: 18px;
				background: #F5F6FA;
				width: 232px;
				// padding: 20px;
				margin: 0 auto;
				font-size: 15px;
				color: #606266;
			}
		}
	}

	.on_order_list {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		height: 100upx;
		line-height: 100upx;
		color: #C0C4CC;
		margin-bottom: 80upx;
	}

	.qs_tip {
		font-weight: 500;
		font-size: 26upx;
		color: #EB504B;
		padding: 20upx 0;
	}

	.right_text {
		font-weight: 400;
		font-size: 26upx;
		color: #1F64FF;
		border: 1upx solid #1F64FF;
		width: 120upx;
		padding: 10upx;
		text-align: right;
		margin-right: 15upx;
		border-radius: 8upx;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 40rpx;
	}

	.tab_moudel {
		background: #fff;
		height: 80upx;
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;

		.line_moudel {
			display: flex;
			align-items: center;
			justify-content: space-between;
			overflow-x: scroll;
			white-space: nowrap;
			width: 85%;
			padding: 0 20upx;
			margin-right: 40upx;

			.l_select {
				background: #F5F6F7;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 400;
				font-size: 26upx;
				line-height: 30upx;
				color: #333;
				padding: 15upx 24upx;
				border-radius: 8upx;
				margin-right: 15upx;
			}

			.active_l_select {
				background: #1F64FF;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 400;
				font-size: 26upx;
				line-height: 30upx;
				color: #fff;
				padding: 15upx 24upx;
				border-radius: 8upx;
				margin-right: 15upx;
			}
		}

		.line_search {
			display: flex;
			align-items: center;
			padding: 15upx 10upx;
			background: #fff;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 10;
			opacity: 0.9;

			.search_text {
				color: #666;
				font-size: 26upx;
				font-style: normal;
				font-weight: 400;
				line-height: 30upx;
				padding-left: 15upx;
			}
		}
	}

	.wz_tip {
		position: fixed;
		bottom: 150upx;
		right: 50upx;
		z-index: 10;

		.creat_img {
			width: 100upx;
			height: 100upx;
		}
	}

	.manage_info {
		padding: 25upx 20upx 0 20upx;

		// margin-top: -70upx;
		.info_me {
			width: calc(100%);
			// height: 300upx;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			margin-bottom: 20upx;
			padding: 20upx;
			border-radius: 16upx;

			.me_title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 30upx;

				.title_left {
					color: #000;
					font-size: 28upx;
					font-weight: 530;
					line-height: 50upx;
				}

				.title_right {
					display: flex;

					.right_texts {
						padding-right: 8upx;
						color: #9B9B9B;
						font-size: 26upx;
						font-style: normal;
						font-weight: 400;
						line-height: 150%;

					}
				}

			}

			.other_cont {
				display: flex;
				width: 100%;
				// height: 210upx;
				white-space: nowrap;
				overflow-x: scroll;

				.cont_left {
					width: 210upx;
					height: 210upx;
					border-radius: 8upx;
					padding: 10upx;
					position: relative;

					.left_img {
						width: 200upx;
						height: 200upx;
						border-radius: 8upx;
					}

					.left_text {
						width: 200upx;
						height: 50upx;
						border-radius: 0 0 8upx 8upx;
						background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #000 123.81%);
						position: absolute;
						bottom: 0;
						text-align: center;
						line-height: 50upx;
						color: #fff;
						font-size: 26upx;
					}

					.qh_img {
						width: 46upx;
						height: 46upx;
						position: absolute;
						top: 10upx;
						right: 10upx;
						opacity: 0;
					}
				}
			}

			.me_cont {
				display: flex;

				.cont_left {
					width: 200upx;
					height: 200upx;
					border-radius: 8upx;
					position: relative;

					.left_img {
						width: 200upx;
						height: 200upx;
						border-radius: 8upx;
					}

					.left_text {
						width: 200upx;
						height: 50upx;
						border-radius: 0 0 8upx 8upx;
						background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #000 123.81%);
						position: absolute;
						bottom: 0;
						text-align: center;
						line-height: 50upx;
						color: #fff;
						font-size: 26upx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}

				.cont_right {
					padding: 20upx 0 0 40upx;
					display: flex;
					flex-direction: column;
					flex: 1;

					.cont_btn {
						flex: 1;
						color: #FFF;
						font-size: 28upx;
						line-height: 60upx;
						text-align: center;
						background: #1F64FF;
						border-radius: 10upx;
						margin-bottom: 30upx;
					}

					.cont_btn_b {
						flex: 1;
						color: #1F64FF;
						font-size: 28upx;
						line-height: 60upx;
						text-align: center;
						border-radius: 10upx;
						border: 1upx solid #1F64FF;
					}

					.cont_text {
						color: #9B9B9B;
						font-size: 20upx;
						font-style: normal;
						font-weight: 400;
						line-height: 40upx;
					}
				}
			}
		}

		.info_title {
			display: flex;
			align-items: center;
			padding-top: 10upx;

			.title_l {
				.l_img {
					width: 60upx;
					height: 60upx;
					border-radius: 50%;
				}
			}

			.title_r {
				color: #1F64FF;
				font-size: 30upx;
				font-style: normal;
				font-weight: 500;
				line-height: 150%;
				padding-left: 20upx;
			}
		}

		.info_text {
			display: flex;
			align-items: center;
			padding-top: 10upx;

			.text_l {
				color: #242F49;
				font-size: 26upx;
				font-style: normal;
				font-weight: 400;
				line-height: 150%;
			}
		}
	}

	.notice {
		padding: 0upx 0upx 20upx 0upx;
		border-radius: 10upx;
	}

	.mentor {
		padding: 20upx;
		background: #fff;
		border-radius: 10upx;

		.mentor_title {
			color: #242F49;
			font-size: 30upx;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;
			padding-bottom: 20upx;
		}

		.mentor_cont {
			display: flex;
			border-radius: 10upx;
			background: #F7F7F9;
			padding: 20upx;
			margin-bottom: 15upx;

			.cont_l {
				.l_img {
					width: 100upx;
					height: 100upx;
					border-radius: 10upx;
				}
			}

			.cont_r {
				display: flex;
				flex-direction: column;
				padding-left: 20upx;

				.r_top {
					color: #000;
					font-size: 28upx;
					font-style: normal;
					font-weight: 530;
					line-height: 35upx;
				}

				.r_btn {
					color: #24252B;
					font-size: 24upx;
					font-style: normal;
					font-weight: 400;
					line-height: 32upx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2; // 控制多行的行数
					-webkit-box-orient: vertical;
				}
			}
		}
	}
</style>