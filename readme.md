一个简单的在线制作 lrc 文件的小工具

**支持功能**

- 操作提示
- 上传歌曲
- 播放/暂停歌曲
- 上传带/不带时间的歌词，格式为： `[00:00.00] 歌词` 或者 `歌词`
- 导出以歌曲名为文件名的 lrc 文件
- 打时间标签
- 出错回退（回退歌曲时间，同时撤销在这段时间内所打的标签）
- 高亮当前歌词
- 点击歌词定位歌曲时间

**TODO**

**开发**

- 技术栈：React + mobx + webpack + material-ui + howler
- 开发调试：`git clone` 项目后，在项目根目录运行 `npm install` ，然后运行 `npm run dev`
- 打包发布：`npm run build`

**license**

BSD