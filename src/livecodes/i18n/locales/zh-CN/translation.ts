// ATTENTION: This file is auto-generated from source code. Do not edit manually!

import type { I18nTranslation } from '../models';

const translation: I18nTranslation = {
  about: {
    documentations: {
      aboutUs: '关于我们',
      contact: '联系方式',
      heading: '文档',
      home: '首页',
      license: '许可证',
    },
    heading: '关于 LiveCodes',
    livecodes: {
      para1:
        '<1><tag-2>LiveCodes</tag-2></tag-1> 是一个<tag-3>开源的</tag-3>、<tag-4>功能丰富的</tag-4>、<tag-5>客户端侧的</tag-5>代码运行环境。目前支持<tag-6>超过 80 种语言 / <tag-7></tag-7>框架</tag-6>。它可以作为独立应用使用，亦可<tag-8>嵌入</tag-8>到任意网页中。可以通过多种途径将代码<tag-9>预填</tag-9>到编辑器中。',
      para2:
        '多种<1>配置选项</tag-1>使其非常灵活。功能强大的 <tag-2>SDK</tag-2>（可用于 <tag-3>JS / TS</tag-3>, <tag-4>React</tag-4>, <tag-5>Vue</tag-5> 和 <tag-6>Svelte</tag-6>）便于<tag-7>嵌入运行环境</tag-7>并与其<tag-8>进行通信</tag-8>。<tag-9>文档内容详细完整</tag-9>，代码示例、实时演示和屏幕截图一应俱全。',
    },
    version: {
      app: '应用版本：{{APP_VERSION}}',
      appPermanentUrl: '应用永久 URL',
      commit: 'Git 提交：{{COMMIT_SHA}}',
      heading: '版本',
      sdk: 'SDK 版本：{{SDK_VERSION}}',
      sdkPermanentUrl: 'SDK 永久 URL',
    },
  },
  app: {
    copy: {
      hint: '复制（Ctrl/Cmd + A, Ctrl/Cmd + C）',
    },
    copyAsUrl: {
      hint: '将代码复制为 Data URL',
    },
    customSettings: {
      hint: '自定义设置',
    },
    editorMode: {
      hint: '编辑器模式',
    },
    editorSettings: {
      hint: '编辑器设置',
    },
    externalResources: {
      hint: '外部资源',
    },
    focus: {
      hint: '切换聚焦模式',
    },
    format: {
      hint: '格式化（Alt + Shift + F）',
    },
    fullscreen: {
      hint: '全屏',
    },
    logo: {
      title: 'LiveCodes: 浏览器中的代码运行环境！',
    },
    projectInfo: {
      hint: '项目信息',
    },
    redo: {
      hint: '重做（Ctrl/Cmd + Shift + Z）',
    },
    result: {
      hint: '切换结果页面显示',
    },
    run: {
      hint: '运行（Shift + Enter）',
    },
    share: {
      hint: '分享',
    },
    undo: {
      hint: '撤消（Ctrl/Cmd + Z）',
    },
    untitledProject: '未命名项目',
  },
  assets: {
    add: {
      dataURL: {
        desc: '将资产添加为 base64 编码的 <1>Data URL</tag-1> 。',
        heading: 'Data URL',
        label: '添加文件',
      },
      githubPages: {
        desc: '将资产部署到 GitHub Pages。该文件将推送至您 GitHub 帐户上 <2> livecodes-assets</tag-2> 仓库的 <tag-1>gh-pages</tag-1> 分支。如果该仓库尚不存在，则将创建一个公开仓库。',
        heading: 'GitHub Pages',
        label: '上传文件',
      },
      heading: '添加资产',
    },
    deleteAll: '删除全部',
    generic: {
      clickToCopyURL: '点击以复制 URL',
    },
    heading: '资产',
    link: {
      type: '类型：{{type}}',
      url: 'URL：{{url}}',
    },
    loadFile: {
      error: {
        failedToUpload: '错误：无法上传文件',
        unauthenticated: '错误：用户未经身份验证',
      },
      upload: '上传文件',
      uploading: '正在上传...',
    },
    noMatch: '没有符合筛选条件的资产。',
    noSavedAssets: '您没有已保存的资产。',
    processAsset: {
      addFile: '已添加文件：',
      deployNotice: '该资产将很快在此 URL 上可用（约 1 分钟）。',
      success: '文件已添加到资产！',
      urlLabel: 'URL：',
    },
    resetFilters: '重置',
    search: '搜索',
    sort: {
      date: '日期',
      fileName: '文件名',
      heading: '排序方式：',
    },
    types: {
      all: '所有类型',
    },
    url: {
      fail: '复制 URL 失败。',
      success: 'URL 已复制到剪贴板',
    },
  },
  backup: {
    backup: {
      assets: '资产',
      button: '备份',
      desc: '备份 LiveCodes 数据，以便稍后在此设备上或其他设备上恢复。 <1> </tag-1>请访问<tag-2>文档</tag-2>以了解详情。',
      heading: '备份',
      projects: '项目',
      settings: '用户设置',
      snippets: '代码片段',
      templates: '用户模板',
    },
    backupBtn: '备份',
    error: {
      atLeastOneStore: '请至少选择一个需要备份的存储',
      incorrectFileType: '错误：文件类型不正确',
    },
    fileInputLabel: '从文件恢复',
    heading: '备份 / 恢复',
    inProgress: '进行中 ...',
    restore: {
      desc: '恢复先前备份的 LiveCodes 数据。<1></tag-1>如果您选择替换当前内容，可能需要先将其备份。<tag-2></tag-2>请访问<tag-3>文档</tag-3> 以了解详情。',
      fromFile: '从文件恢复',
      heading: '恢复',
      mode: {
        merge: '与当前内容合并',
        replace: '替换当前内容',
      },
      success: '恢复成功！',
    },
  },
  broadcast: {
    broadcastBtn: {
      start: '播送',
      stop: '停止播送',
    },
    broadcasting: '正在播送 ...',
    channelURL: '频道 URL',
    connecting: '正在连接 ...',
    desc: '将结果页面实时播送到其他浏览器 / 设备。请访问<1>文档</tag-1>以了解详情。',
    error: {
      generic: '播送失败！',
      serverURLRequired: '必须填写服务器 URL！',
    },
    heading: '播送',
    includeSourceCode: '包含源代码',
    serverURL: {
      heading: '服务器 URL',
    },
  },
  core: {
    broadcast: {
      heading: '播送',
      successSetToken: '播送用户令牌设置成功',
    },
    changeLanguage: '正在加载 {{lang}} 。这可能需要一些时间！',
    copy: {
      copied: '代码已复制到剪贴板',
      copiedAsDataURL: '将代码复制为 Data URL',
      hint: '已复制！',
      title: '复制',
    },
    error: {
      couldNotLoadTemplate: '无法加载模板：{{template}}',
      failedToCopyCode: '复制代码失败',
      failedToLoadTemplate: '加载模板失败',
      failedToLoadTemplates: '加载启动模板失败',
      failedToParseSettings: '无法将设置解析为 JSON',
      invalidCommand: '命令无效！',
      invalidImport: '导入 URL 无效',
      invalidPanelId: '面板 ID 无效',
      invalidToken: '令牌无效！',
      login: '登录错误！',
      logout: '登出错误！',
      noResultContainer: '未找到结果容器',
      unavailable: '命令不可用',
      unavailableForEmbeds: '嵌入中命令不可用',
    },
    export: {
      gist: '创建公开 GitHub gist...',
    },
    fork: {
      success: 'Fork 为新项目',
    },
    fullScreen: {
      enter: '全屏',
      exit: '退出全屏',
    },
    import: {
      loading: '正在加载项目 ...',
    },
    layout: {
      horizontal: '水平布局',
      responsive: '响应式布局',
      vertical: '垂直布局',
    },
    loadDefaults: {
      template: '加载默认模板中',
    },
    login: {
      success: '登录成功',
      successWithName: '以 {{name}} 的身份登录',
    },
    logout: {
      success: '登出成功',
    },
    result: {
      hint: '在新窗口中显示结果',
    },
    save: {
      success: '项目已本地保存至设备！',
      successWithName: '项目 "{{name}}" 已保存至设备。',
    },
    template: {
      blank: '空白项目',
      delete: '删除模板 "{{project}}" ？',
      javascript: 'JavaScript 启动模板',
      react: 'React 启动模板',
      saved: '另存为新模板',
      typescript: 'TypeScript 启动模板',
      vue: 'Vue 3 启动模板',
    },
    unload: {
      notSaved: '您所做的更改可能无法保存。',
    },
    zoom: {
      hint: '缩放',
    },
  },
  customSettings: {
    JSON: '自定义设置 JSON',
    heading: '自定义设置',
    load: '加载',
  },
  deploy: {
    create: {
      desc: '将创建一个新的<1>公开</tag-1>仓库。结果页面将被推送到 <tag-2>gh-pages</tag-2> 分支。',
      heading: '创建新仓库',
      repoName: '仓库名称<1></tag-1>',
    },
    error: {
      generic: '部署失败！',
      repoNameRequired: '必须填写仓库名称',
    },
    existing: {
      desc: '新提交将被添加到 <1>gh-pages</tag-1> 分支。',
      heading: '现有仓库',
      repoName: '仓库名称',
    },
    generic: {
      commitMessage: '提交信息',
      commitSourceCodePublic: '提交源代码（公开）',
      deployBtn: '部署',
      deploying: '正在部署...',
    },
    heading: '部署到 GitHub Pages',
    searchRepo: '搜索您的公开代码仓库...',
  },
  editorSettings: {
    closeBrackets: '自动闭合括号和引号',
    codeJarDesc: '* 标记的功能在 CodeJar 中不可用。',
    default: '默认',
    desc: '请查看<1>文档</tag-1>以了解详情。',
    editor: {
      codejar: 'CodeJar',
      codemirror: 'CodeMirror',
      heading: '编辑器',
      monaco: 'Monaco',
    },
    editorMode: {
      emacs: 'Emacs',
      heading: '编辑器模式 *',
      vim: 'Vim',
    },
    editorTheme: '编辑器主题',
    emmet: '启用 Emmet *',
    enableAI: {
      heading: '启用 AI 代码助手',
      note: '由 <1> <tag-2> </tag-2> </tag-1> 提供支持',
    },
    fontFamily: '字体',
    fontSize: '字体大小',
    format: '格式化',
    heading: '编辑器设置',
    lineNumbers: '显示行号',
    notAvailableInCodeJar: '在 CodeJar 中不可用',
    preview: '预览',
    semicolons: '格式：使用分号',
    singleQuote: '格式：使用单引号',
    tabSize: '制表符大小',
    theme: '深色模式',
    trailingComma: '格式：使用尾随逗号',
    useTabs: {
      heading: '缩进字符',
      spaces: '空格',
      tabs: '制表符（Tab）',
    },
    wordWrap: '自动换行',
  },
  embed: {
    activeEditor: {
      heading: '活动编辑器',
      markup: '{{markup}}',
      script: '{{script}}',
      style: '{{style}}',
    },
    activeTool: {
      compiled: '已编译',
      console: '控制台',
      heading: '活动工具',
      tests: '测试',
    },
    code: {
      copy: '复制代码',
      heading: '代码',
    },
    desc: '请查看<1>文档</tag-1>以了解高级配置。',
    embedType: {
      cdn: '脚本（CDN）',
      heading: '嵌入类型',
      html: 'HTML',
      iframe: 'Iframe',
      npm: 'JS（npm）',
      react: 'React',
      svelte: 'Svelte',
      vue: 'Vue',
    },
    heading: '嵌入项目',
    lite: '精简模式',
    loading: {
      click: '点击时',
      eager: '积极',
      heading: '加载',
      lazy: '延迟',
    },
    mode: {
      codeblock: '代码块',
      editor: '编辑器',
      full: '完整',
      heading: '显示模式',
      result: '结果',
    },
    permanentUrl: '永久 URL',
    preview: '预览',
    previewLoading: '正在加载预览...',
    readonly: '只读',
    theme: {
      dark: '深色',
      heading: '主题',
      light: '浅色',
    },
    tools: {
      closed: '折叠',
      full: '完全展开',
      heading: '工具面板',
      none: '不显示',
      open: '展开',
    },
    view: {
      editor: '编辑器',
      heading: '默认视图',
      result: '结果',
      split: '分割',
    },
  },
  generic: {
    about: {
      blog: '博客',
      configuration: '配置',
      features: '特性',
      gettingStarted: '快速开始',
      github: 'GitHub',
      sdk: 'SDK',
      sponsor: '赞助 LiveCodes',
      twitter: '𝕏 / Twitter',
    },
    clickForInfo: '点击以获取信息...',
    close: '关闭',
    error: {
      authentication: '身份验证错误！',
      exceededSize: '错误：过大的文件大小 {{size}} MB',
      failedToReadFile: '错误：读取文件失败',
    },
    loading: '正在加载 ...',
    more: '更多...',
    optional: '可选',
    required: '必填',
  },
  import: {
    bulk: {
      desc: '将多个项目批量导入到您已保存的项目中。可以从<1>已保存的项目</tag-1>屏幕导出项目。',
      fromFile: '从本地文件批量导入',
      fromURL: '从 URL 批量导入',
      heading: '批量导入',
    },
    code: {
      desc: '支持的来源： <1> <tag-2>GitHub Gist</tag-2> <tag-3>GitHub 文件</tag-3> <tag-4>GitHub 仓库中的目录</tag-4> <tag-5>Gitlab Snippet</tag-5> <tag-6>Gitlab 文件</tag-6><tag-7>Gitlab 仓库中的目录</tag-7> <tag-8>JS Bin</tag-8><tag-9> 原始代码</tag-9> <tag-10>网页 DOM 中的代码 </tag-10> <tag-11>zip 文件中的代码</tag-11> <tag-12>官方样板<tag-13></tag-13>（TypeScript, Vue 和 Svelte）</tag-12> </tag-1> 请访问<tag-14>文档</tag-14>以了解详细信息。',
      fromFile: '从本地文件导入',
      fromURL: '从 URL 导入',
      heading: '导入代码',
    },
    error: {
      failedToLoadURL: '错误：无法加载 URL',
      invalidConfigFile: '配置文件无效',
      invalidFile: '错误：文件无效',
    },
    generic: {
      file: '本地文件',
      url: 'URL',
    },
    heading: '导入',
    json: {
      desc: '将单个项目 JSON 导入编辑器。可以通过菜单&nbsp;→&nbsp;导出项目（JSON）中导出项目。',
      fromFile: '从本地文件导入项目',
      fromURL: '从 URL 导入项目',
      heading: '导入项目 JSON',
    },
    success: '导入成功！',
  },
  login: {
    accessAllowed: '允许访问：',
    desc: '<1>登录即表示您同意 <tag-2>Cookie</tag-2> 将可能存储在您的设备上。</tag-1><tag-3> <tag-4>为什么需要这些权限？</tag-4> </tag-3><tag-5> <tag-6>如何更改 / 撤销权限？</tag-6> </tag-5>',
    gist: 'Gists',
    heading: '使用 GitHub 登录',
    loginAs: '以 {{name}} 的身份登录',
    loginBtn: '登录',
    logout: '登出',
    privateRepo: '私有仓库',
    publicRepo: '仓库',
  },
  menu: {
    about: '关于',
    assets: '资产 ...',
    autoSave: '自动保存',
    autoUpdate: '自动更新',
    backup: '备份 / 恢复 ...',
    broadcast: '播送 ...',
    customSettings: '自定义设置 ...',
    delay: {
      heading: '延迟：<1> 1.5 </tag-1> 秒',
      hint: '自动更新前的延迟',
    },
    deploy: '部署 ...',
    editorSettings: '编辑器设置 ...',
    embed: '嵌入 ...',
    export: {
      codepen: '在 CodePen 中编辑',
      gist: '导出到 GitHub Gist',
      heading: '导出',
      jsfiddle: '在 JSFiddle 中编辑',
      json: '导出项目（JSON）',
      result: '导出结果页（HTML）',
      src: '导出源代码（ZIP）',
    },
    formatOnsave: '保存时格式化',
    import: '导入 ...',
    layout: '垂直布局',
    login: '登录 ...',
    logout: '登出',
    new: '新建 ...',
    open: '打开 ...',
    project: '项目信息 ...',
    recoverUnsaved: '恢复未保存的内容',
    resources: '外部资源 ...',
    save: '保存',
    saveAs: {
      fork: 'Fork（新项目）',
      heading: '另存为',
      template: '模板',
    },
    share: '分享 ...',
    showSpacing: {
      heading: '显示间距',
      hint: '按下 Alt/Option 并将光标移至结果页面',
    },
    snippets: '代码片段 ...',
    sync: '同步（Beta 版）... <1> ⏳</tag-1>',
    theme: '深色主题',
    welcome: {
      heading: '欢迎 ...',
      hint: '启动时显示欢迎屏幕',
    },
  },
  open: {
    defaultTemplate: '默认模板 ',
    delete: {
      all: '删除 {{projects}} 个项目？',
      one: '删除项目：{{project}} ？',
    },
    deleteAll: '删除全部',
    exportAll: '导出全部',
    filter: {
      language: '按语言筛选',
      tag: '按标签筛选',
    },
    heading: '已保存的项目',
    import: '导入',
    lastModified: '最后修改时间：{{modified}}',
    noData: {
      desc: '您可以从菜单 &gt; 保存或通过键盘快捷键（Ctrl/Cmd + S）保存项目。',
      heading: '您没有已保存的项目。',
    },
    noMatch: '没有符合筛选条件的项目。',
    placeholder: {
      allLanguages: '所有语言',
      filterByTags: '按标签筛选',
      search: '搜索',
    },
    removeDefault: '（未设置）',
    reset: '重置',
    setAsDefault: '设为默认',
    sort: {
      heading: '排序方式：',
      lastModified: '最后修改',
      title: '标题',
    },
  },
  project: {
    desc: '描述',
    head: '添加到 &lt;head&gt;',
    heading: '项目信息',
    htmlAttr: '&lt;html&gt; 属性',
    tags: '标签',
    title: '项目标题',
  },
  recoverPrompt: {
    desc: '您的最后一个项目存在尚未保存的更改！',
    heading: '恢复未保存的项目？',
    meta: '标题：<1> </tag-1> <tag-2> </tag-2>最后修改时间：<tag-3> </tag-3>',
    notShowAgain: '不要再展示此内容。',
    prompt: {
      discard: '丢弃未保存的项目',
      heading: '<1> </tag-1>您想现在恢复吗？',
      recover: '将项目恢复到编辑器',
      save: '保存到设备并继续',
    },
  },
  resources: {
    browseOnJsDelivr: '浏览 jsDelivr 上的软件包',
    cssPresets: {
      heading: 'CSS 预设',
      none: '无',
      normalizeCss: 'Normalize.css',
      resetCss: '重置 CSS',
    },
    error: {
      failedToLoadResults: '加载结果失败！',
      noResultsFound: '未找到相关结果：',
    },
    fonts: {
      add: '添加',
      heading: '字体<1>（由 Google Fonts 提供）</tag-1>',
      select: '选择字体 ...',
    },
    heading: '外部资源',
    scripts: '外部脚本',
    search: {
      heading: '搜索软件包<1>（由 jsDelivr 提供）</tag-1>',
      placeholder: '例如 jquery, lodash@4, bootstrap@5.2.3, ...',
    },
    stylesheets: '外部样式',
    urlDesc: '键入样式/脚本 URL 并点击“加载”。每个 URL 应位于单独的一行中。',
  },
  savePrompt: {
    heading: '未保存的更改',
    prompt: {
      cancel: '取消',
      discard: '不保存',
      heading: '您所做的更改可能无法保存。 <1> </tag-1>您想现在保存吗？',
      save: '保存',
    },
  },
  share: {
    characters: '{{urlLength}} 字符',
    copy: {
      clickToCopy: '点击以复制',
      copied: 'URL 已复制到剪贴板',
    },
    encodedURL: '获取编码 URL',
    error: {
      failedToCopy: '复制到剪贴板失败！',
      failedToGenerateURL: '生成短 URL 失败！',
    },
    expireInOneYear: '1 年内有效',
    generateURL: '正在生成 URL ...',
    heading: '分享',
    permanentURL: '永久 URL',
    qrcode: {
      clickToDownload: '点击以下载',
      generating: '正在生成...',
    },
    services: {
      copyUrl: '复制 URL',
      devTo: 'Dev.to',
      email: '电子邮件',
      facebook: 'Facebook',
      hackerNews: 'Hacker News',
      linkedIn: 'LinkedIn',
      pinterest: 'Pinterest',
      pocket: 'Pocket',
      qrCode: '二维码',
      reddit: 'Reddit',
      share: '分享方式 ...',
      telegram: 'Telegram',
      tumblr: 'Tumblr',
      twitter: '𝕏 / Twitter',
      whatsApp: 'WhatsApp',
    },
    shortURL: '获取短 URL',
  },
  snippets: {
    action: {
      copy: '复制',
      delete: '删除',
      edit: '编辑',
    },
    add: {
      code: '代码',
      desc: '描述',
      heading: '添加代码片段',
      language: '语言',
      save: '保存',
      snippets: '代码片段',
      title: '标题',
    },
    copy: {
      clickToCopySnippet: '点击以复制代码片段',
      copied: '代码片段已复制到剪贴板。',
    },
    delete: {
      all: '删除 {{snippets}} 个代码片段？',
      one: '删除代码片段：{{snippet}} ?',
    },
    deleteAll: '删除全部',
    error: {
      failedToCopy: '复制 URL 失败。',
      noTitle: '请为代码片段添加标题。',
    },
    filter: {
      language: '按语言筛选',
    },
    heading: '代码片段',
    lastModified: '最后修改时间：{{modified}}',
    noMatch: '没有符合筛选条件的代码片段。',
    noSavedSnippets: '您没有已保存的代码片段。',
    placeholder: {
      allLanguages: '所有语言',
      search: '搜索',
    },
    reset: '重置',
    save: {
      success: '代码片段已本地保存至设备！',
    },
    sort: {
      date: '日期',
      heading: '排序方式：',
      title: '标题',
    },
    text: '纯文本',
  },
  splash: {
    loading: '正在加载 LiveCodes ...',
  },
  sync: {
    autoSync: '自动同步',
    create: {
      desc: '将创建一个新的<1>私有</tag-1>仓库。您的 LiveCodes 本地数据将与 <tag-2>main</tag-2> 分支同步。',
      heading: '创建新仓库',
      repoName: '仓库名称',
    },
    error: {
      generic: '同步失败！',
      repoNameRequired: '必须填写仓库名称',
    },
    existing: {
      desc: '您的 LiveCodes 本地数据将与 <1>main</tag-1> 分支同步。',
      heading: '现有仓库',
      repoName: '仓库名称',
    },
    heading: '同步到 GitHub 仓库',
    searchRepos: '搜索您的仓库...',
    success: '同步完成！',
    syncBtn: '同步',
    syncInProgress: '同步进行中 ...',
    syncStarted: '同步已开始...',
  },
  templates: {
    heading: '新项目',
    noUserTemplates: {
      desc: '您可以通过<1></tag-1>（菜单&nbsp;&gt;&nbsp;另存为&nbsp;&gt;&nbsp;模板）将项目另存为模板。',
      heading: '您没有已保存的模板。',
    },
    starter: {
      heading: '启动模板',
      loading: '正在加载启动模板...',
    },
    user: {
      heading: '我的模板',
      loading: '正在加载用户模板...',
    },
  },
  testEditor: {
    heading: '编辑测试',
    load: '加载',
    tests: '测试',
  },
  toolspane: {
    close: '关闭',
    console: {
      clear: '清除控制台',
    },
    test: {
      edit: '编辑',
      error: '<1><tag-2>测试错误！</tag-2></tag-1>',
      loading: '<1>正在加载测试... </tag-1>',
      noTest: '<1>该项目没有测试！</tag-1>',
      reset: '重置',
      run: {
        desc: 'Ctrl/Cmd + Alt + T',
        heading: '运行',
      },
      summary: {
        failed: '失败 {{failedNum}}',
        passed: '通过 {{passedNum}}',
        skipped: '已跳过 {{skippedNum}}',
        total: '总计 {{totalNum}}',
      },
      watch: {
        desc: '在代码更改时运行测试',
        heading: '监听',
      },
    },
  },
  welcome: {
    about: {
      documentation: '文档',
      heading: '关于 LiveCodes',
    },
    heading: '欢迎',
    recent: {
      heading: '最近',
    },
    recover: {
      cancel: '取消',
      heading: '恢复',
      lastModified: '最后修改时间：<1></tag-1>',
      recover: '恢复',
      save: '保存',
      unsavedChanges: '您的上一个项目有未保存的更改：',
    },
    showOnStartup: '启动时显示',
    start: {
      heading: '开始',
      import: '导入...',
      loadDefaultTemplate: '加载默认模板',
      new: '新建...',
      noDefaultTemplate: '无默认模板',
      open: '打开...',
    },
    templates: {
      heading: '启动模板',
    },
  },
};

export default translation;
