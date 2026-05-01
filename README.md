# 方块圣域宣传页

这是一个纯静态网页，双击 `index.html` 可以本地预览，也可以直接部署到公网。

## 需要先修改的内容

- 中文名：方块圣域。
- 英文名：Minecraft Seeker Horizon Block Sanctuary。
- `YOUR-REALM-CODE`：改成你的 Realm 邀请代码，或改成“审核后私发”。
- QQ 群号：1103937184。

## 让别人远程打开

推荐用 Netlify，最简单：

1. 打开 <https://app.netlify.com/drop>
2. 把整个文件夹拖进去。
3. Netlify 会给你一个 `https://xxx.netlify.app` 网址，别人就能公网访问。

也可以用 GitHub Pages：

1. 新建 GitHub 仓库并上传这几个文件。
2. 进入仓库 `Settings -> Pages`。
3. Source 选择 `Deploy from a branch`，分支选 `main`，目录选 `/root`。
4. 等待生成 `https://你的用户名.github.io/仓库名/`。

## 局域网临时预览

如果只想让同一 Wi-Fi 下的人访问，可以在本目录运行：

```powershell
npm start
```

然后让对方打开：

```text
http://你的电脑局域网IP:8080
```

这种方式不等于公网部署，电脑关机或网络变化后就访问不了了。
