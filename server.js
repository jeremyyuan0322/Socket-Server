const express = require('express')
const app = express()
// req  request
// res response
var data = {
    aaa: 'aaa',
    bbb: '123',
    num: 99
}
// app.use(express.static('www'));

app.get('/', (req, res) => {
    // res.send('Home Page')
    res.send("Home Page")
  })

app.get('/about', (req, res) => {
    res.send('about us')
  })
app.get('/name', (req, res) => {
  res.send('jeremy')
})
app.get('/data', (req, res) => {
    res.send(JSON.stringify(data))
  })
app.get('/time', (req, res) => {
    res.send(new Date().toISOString())
  })
app.get('/xyz/now', (req, res) => {//動態 路由(架在根) 虛的(不存在.html)
    res.send(new Date().toISOString())
  })
// app.use('/abc', express.static('/Users/jeremyyuan/test/public/xyz/gossip.html'));//為何app.use('/xyz',..不行？
// 為何index.html不用像gossip.html一樣指定路徑，直接show在根目錄？
// get post
// 在網頁上輸入基本資料上傳（post） 伺服器接收資料 push到陣列 丟json回來

app.listen(3000, () => {
console.log(`Example app listening on port 3000`)
})  
