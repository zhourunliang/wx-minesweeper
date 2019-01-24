// pages/ranking.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    winterList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.getWinterList()
  },

  getWinterList: function(){
    const db = wx.cloud.database()
    db.collection('winer').where({
      status: true 
    }).orderBy('time', 'asc').get({
      success: res => {
        this.setData({
          winterList: res.data,
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      }
    })

  },
})