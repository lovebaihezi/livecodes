// ATTENTION: This file is auto-generated from source code. Do not edit manually!

import type { I18nTranslation } from '../models';

const translation: I18nTranslation = {
  about: {
    documentations: {
      aboutUs: '私たちについて',
      contact: 'お問い合わせ',
      heading: 'ドキュメント',
      home: 'ホーム',
      license: 'ライセンス',
    },
    heading: 'LiveCodesについて',
    livecodes: {
      para1:
        '<1><2>LiveCodes</2></1>は、<3>オープンソース</3>で<4>機能豊富</4>な<5>クライアントサイド</5>のコードプレイグラウンドです。現在、<6>80以上の言語/<7></7>フレームワーク</6>をサポートしています。スタンドアロンアプリとして使用することも、任意のWebページに<8>埋め込む</8>こともできます。プレイグラウンドに<9>コードをプリフィル</9>する方法は多数あります。',
      para2:
        '幅広い<1>設定オプション</1>により、非常に柔軟性があります。強力な<2>SDK</2>（<3>JS/TS</3>、<4>React</4>、<5>Vue</5>、<6>Svelte</6>用）により、プレイグラウンドの<7>埋め込み</7>と<8>通信</8>が容易になります。コードサンプル、ライブデモ、スクリーンショットを含む<9>包括的なドキュメント</9>が利用可能です。',
    },
    version: {
      app: 'アプリバージョン: {{APP_VERSION}}',
      appPermanentUrl: 'アプリの永続的URL',
      commit: 'Gitコミット: {{COMMIT_SHA}}',
      heading: 'バージョン',
      sdk: 'SDKバージョン: {{SDK_VERSION}}',
      sdkPermanentUrl: 'SDKの永続的URL',
    },
  },
  app: {
    consoleMessage: {
      learnMore: '詳細はこちら！ {{docsUrl}} 🚀',
    },
    copy: {
      hint: 'コピー (Ctrl/Cmd + A, Ctrl/Cmd + C)',
    },
    copyAsUrl: {
      hint: 'コードをデータURLとしてコピー',
    },
    customSettings: {
      hint: 'カスタム設定',
    },
    editorMode: {
      hint: 'エディターモード',
    },
    editorSettings: {
      hint: 'エディター設定',
    },
    externalResources: {
      hint: '外部リソース',
    },
    focus: {
      hint: 'フォーカスモードの切り替え',
    },
    format: {
      hint: 'フォーマット (Alt + Shift + F)',
    },
    fullscreen: {
      hint: '全画面表示',
    },
    projectInfo: {
      hint: 'プロジェクト情報',
    },
    redo: {
      hint: 'やり直し (Ctrl/Cmd + Shift + Z)',
    },
    result: {
      hint: '結果の表示切り替え',
    },
    run: {
      hint: '実行 (Shift + Enter)',
    },
    share: {
      hint: '共有',
    },
    undo: {
      hint: '元に戻す (Ctrl/Cmd + Z)',
    },
    untitledProject: '無題のプロジェクト',
  },
  assets: {
    add: {
      dataURL: {
        desc: 'アセットをBase64エンコードされた<1>データURL</1>として追加します。',
        heading: 'データURL',
        label: 'ファイルを追加',
      },
      githubPages: {
        desc: 'アセットをGitHub Pagesにデプロイします。ファイルはあなたのGitHubアカウントの<2>livecodes-assets</2>リポジトリの<1>gh-pages</1>ブランチにプッシュされます。リポジトリがまだ存在しない場合は、公開リポジトリが作成されます。',
        heading: 'GitHub Pages',
        label: 'ファイルをアップロード',
      },
      heading: 'アセットを追加',
    },
    delete: {
      all: '{{assets}}個のアセットを削除しますか？',
      one: 'アセットを削除: {{asset}}?',
    },
    deleteAll: 'すべて削除',
    generic: {
      clickToCopyURL: 'クリックしてURLをコピー',
    },
    heading: 'アセット',
    link: {
      date: '日付: {{modified}}',
      type: 'タイプ: {{type}}',
      url: 'URL: {{url}}',
    },
    loadFile: {
      error: {
        failedToUpload: 'エラー: ファイルのアップロードに失敗しました',
        unauthenticated: 'エラー: 認証されていないユーザー',
      },
      upload: 'ファイルをアップロード',
      uploading: 'アップロード中...',
    },
    noMatch: 'これらのフィルターに一致するアセットはありません。',
    noSavedAssets: '保存されたアセットはありません。',
    processAsset: {
      addFile: '追加されたファイル: ',
      deployNotice: 'アセットはまもなく（約1分）このURLで利用可能になります。',
      success: 'ファイルがアセットに追加されました！',
      urlLabel: 'URL: ',
    },
    resetFilters: 'リセット',
    search: '検索',
    sort: {
      date: '日付',
      fileName: 'ファイル名',
      heading: '並び替え:',
    },
    type: {
      archive: 'アーカイブ',
      audio: 'オーディオ',
      csv: 'CSV',
      font: 'フォント',
      html: 'HTML',
      icon: 'アイコン',
      image: '画像',
      json: 'JSON',
      other: 'その他',
      script: 'スクリプト',
      stylesheet: 'スタイルシート',
      text: 'テキスト',
      video: 'ビデオ',
      xml: 'XML',
    },
    types: {
      all: 'すべてのタイプ',
    },
    url: {
      fail: 'URLのコピーに失敗しました。',
      success: 'URLがクリップボードにコピーされました。',
    },
  },
  backup: {
    backup: {
      assets: 'アセット',
      button: 'バックアップ',
      desc: 'LiveCodesのデータをバックアップして、後でこのデバイスや他のデバイスで復元できるようにします。<1></1>詳細については<2>ドキュメント</2>をご覧ください。',
      heading: 'バックアップ',
      projects: 'プロジェクト',
      settings: 'ユーザー設定',
      snippets: 'コードスニペット',
      templates: 'ユーザーテンプレート',
    },
    backupBtn: 'バックアップ',
    error: {
      atLeastOneStore: 'バックアップする項目を少なくとも1つ選択してください',
      incorrectFileType: 'エラー: ファイルタイプが正しくありません',
    },
    fileInputLabel: 'ファイルから復元',
    heading: 'バックアップ / 復元',
    inProgress: '進行中...',
    restore: {
      desc: '以前にバックアップしたLiveCodesデータを復元します。<1></1>現在のコンテンツを置き換える場合は、先にバックアップを取ることをお勧めします。<2></2>詳細については<3>ドキュメント</3>をご覧ください。',
      fromFile: 'ファイルから復元',
      heading: '復元',
      mode: {
        merge: '現在のコンテンツとマージ',
        replace: '現在のコンテンツを置き換え',
      },
      success: '正常に復元されました！',
    },
  },
  broadcast: {
    broadcastBtn: {
      start: '配信',
      stop: '配信停止',
    },
    broadcasting: '配信中...',
    channelURL: 'チャンネルURL',
    connecting: '接続中...',
    desc: '結果ページを他のブラウザやデバイスにリアルタイムで配信します。詳細については<1>ドキュメント</1>をご覧ください。',
    error: {
      generic: '配信に失敗しました！',
      serverURLRequired: 'サーバーURLが必要です！',
    },
    heading: '配信',
    includeSourceCode: 'ソースコードを含める',
    serverURL: {
      heading: 'サーバーURL',
    },
  },
  core: {
    broadcast: {
      heading: '配信',
      successSetToken: '配信ユーザートークンが正常に設定されました',
    },
    changeLanguage: {
      hint: '言語を変更',
      message: '{{lang}}を読み込んでいます。しばらくお待ちください！',
    },
    copy: {
      copied: 'コードがクリップボードにコピーされました',
      copiedAsDataURL: 'コードがデータURLとしてコピーされました',
      hint: 'コピーしました！',
      title: 'コピー',
    },
    error: {
      couldNotLoadTemplate: 'テンプレートを読み込めませんでした: {{template}}',
      failedToCopyCode: 'コードのコピーに失敗しました',
      failedToLoadTemplate: 'テンプレートの読み込みに失敗しました',
      failedToLoadTemplates: 'スターターテンプレートの読み込みに失敗しました',
      failedToParseSettings: '設定をJSONとして解析できませんでした',
      invalidCommand: '無効なコマンドです！',
      invalidImport: '無効なインポートURLです',
      invalidPanelId: '無効なパネルIDです',
      invalidToken: '無効なトークンです！',
      login: 'ログインエラー！',
      logout: 'ログアウトエラー！',
      noResultContainer: '結果コンテナが見つかりません',
      unavailable: 'コマンドは利用できません',
      unavailableForEmbeds: '埋め込みではコマンドを利用できません',
    },
    export: {
      gist: '公開GitHubギストを作成中...',
    },
    fork: {
      success: '新しいプロジェクトとしてフォークしました',
    },
    fullScreen: {
      enter: '全画面表示',
      exit: '全画面表示を終了',
    },
    import: {
      loading: 'プロジェクトを読み込んでいます...',
    },
    layout: {
      horizontal: '水平レイアウト',
      responsive: 'レスポンシブレイアウト',
      vertical: '垂直レイアウト',
    },
    loadDefaults: {
      template: 'デフォルトのテンプレートを読み込んでいます',
    },
    login: {
      success: 'ログインに成功しました',
      successWithName: 'ログイン中: {{name}}',
    },
    logout: {
      success: 'ログアウトに成功しました',
    },
    result: {
      hint: '新しいウィンドウで結果を表示',
    },
    save: {
      success: 'プロジェクトがデバイスにローカル保存されました！',
      successWithName: 'プロジェクト「{{name}}」がデバイスに保存されました。',
    },
    template: {
      blank: '空のプロジェクト',
      delete: 'テンプレート「{{item}}」を削除しますか？',
      javascript: 'JavaScriptスターター',
      react: 'Reactスターター',
      saved: '新しいテンプレートとして保存されました',
      typescript: 'TypeScriptスターター',
      vue: 'Vue 3スターター',
    },
    unload: {
      notSaved: '変更が保存されていない可能性があります。',
    },
    zoom: {
      hint: 'ズーム',
    },
  },
  customSettings: {
    JSON: 'カスタム設定JSON',
    heading: 'カスタム設定',
    load: '読み込み',
  },
  deploy: {
    create: {
      desc: '新しい<1>公開</1>リポジトリが作成されます。結果ページは<2>gh-pages</2>ブランチにプッシュされます。',
      heading: '新しいリポジトリを作成',
      repoName: 'リポジトリ名 <1></1>',
    },
    error: {
      generic: 'デプロイに失敗しました！',
      repoNameExists: 'リポジトリ名はすでに存在します',
      repoNameRequired: 'リポジトリ名は必須です',
    },
    existing: {
      desc: '新しいコミットが<1>gh-pages</1>ブランチに追加されます。',
      heading: '既存のリポジトリ',
      repoName: 'リポジトリ名',
    },
    generic: {
      commitMessage: 'コミットメッセージ',
      commitSourceCodePublic: 'ソースコードをコミット（公開）',
      deployBtn: 'デプロイ',
      deploying: 'デプロイ中...',
    },
    heading: 'GitHub Pagesにデプロイ',
    searchRepo: '公開リポジトリを検索...',
  },
  editorSettings: {
    appLanguage: {
      heading: 'アプリUIの言語',
      note: '言語を切り替えた後、変更を適用するためにアプリを再読み込みします。',
    },
    closeBrackets: '括弧と引用符を自動的に閉じる',
    codeJarDesc: '* マークされた機能はCodeJarでは利用できません。',
    default: 'デフォルト',
    desc: '詳細については<1>ドキュメント</1>をご確認ください。',
    editor: {
      codejar: 'CodeJar',
      codemirror: 'CodeMirror',
      heading: 'エディター',
      monaco: 'Monaco',
    },
    editorMode: {
      emacs: 'Emacs',
      heading: 'エディターモード *',
      vim: 'Vim',
    },
    editorTheme: 'エディターテーマ',
    emmet: 'Emmetを有効化 *',
    enableAI: {
      heading: 'AIコードアシスタントを有効化',
      note: '提供： <1><2></2></1>',
    },
    fontFamily: 'フォントファミリー',
    fontSize: 'フォントサイズ',
    format: 'フォーマット',
    heading: 'エディター設定',
    lineNumbers: '行番号を表示',
    notAvailableInCodeJar: 'CodeJarでは利用できません',
    preview: 'プレビュー',
    semicolons: 'フォーマット：セミコロンを使用',
    singleQuote: 'フォーマット：シングルクォートを使用',
    tabSize: 'タブサイズ',
    theme: 'ダークモード',
    trailingComma: 'フォーマット：末尾のカンマを使用',
    useTabs: {
      heading: 'インデント',
      spaces: 'スペース',
      tabs: 'タブ',
    },
    wordWrap: 'ワードラップ',
  },
  embed: {
    activeEditor: {
      heading: 'アクティブエディター',
      markup: '{{markup}}',
      script: '{{script}}',
      style: '{{style}}',
    },
    activeTool: {
      compiled: 'コンパイル済み',
      console: 'コンソール',
      heading: 'アクティブツール',
      tests: 'テスト',
    },
    code: {
      copy: 'コードをコピー',
      heading: 'コード',
    },
    desc: '高度な設定については<1>ドキュメント</1>をご確認ください。',
    embedType: {
      cdn: 'スクリプト（CDN）',
      heading: '埋め込みタイプ',
      html: 'HTML',
      iframe: 'Iframe',
      npm: 'JS（npm）',
      react: 'React',
      svelte: 'Svelte',
      vue: 'Vue',
    },
    heading: 'プロジェクトの埋め込み',
    lite: 'ライトモード',
    loading: {
      click: 'クリック時',
      eager: '即時',
      heading: '読み込み',
      lazy: '遅延',
    },
    mode: {
      codeblock: 'コードブロック',
      editor: 'エディター',
      full: 'フル',
      heading: '表示モード',
      result: '結果',
    },
    permanentUrl: '永続的URL',
    preview: 'プレビュー',
    previewLoading: 'プレビューを読み込み中...',
    readonly: '読み取り専用',
    theme: {
      dark: 'ダーク',
      heading: 'テーマ',
      light: 'ライト',
    },
    tools: {
      closed: '閉じる',
      full: 'フル',
      heading: 'ツール',
      none: 'なし',
      open: '開く',
    },
    view: {
      editor: 'エディター',
      heading: 'デフォルトビュー',
      result: '結果',
      split: '分割',
    },
  },
  generic: {
    about: {
      blog: 'ブログ',
      configuration: '設定',
      features: '機能',
      gettingStarted: 'はじめに',
      github: 'GitHub',
      sdk: 'SDK',
      sponsor: 'をスポンサー',
      twitter: '𝕏 / Twitter',
    },
    clickForInfo: 'クリックして詳細を表示...',
    close: '閉じる',
    error: {
      authentication: '認証エラー！',
      exceededSize: 'エラー：サイズ{{size}} MBを超えています',
      failedToReadFile: 'エラー：ファイルの読み取りに失敗しました',
    },
    loading: '読み込み中...',
    more: 'もっと見る...',
    optional: '任意',
    required: '必須',
    tagline: 'シンプルに動作するコードの遊び場！',
  },
  import: {
    bulk: {
      desc: '複数のプロジェクトを一括で保存済みプロジェクトにインポートします。プロジェクトは<1>保存済みプロジェクト</1>画面からエクスポートできます。',
      fromFile: 'ローカルファイルから一括インポート',
      fromURL: 'URLから一括インポート',
      heading: '一括インポート',
      started: '一括インポートを開始しました...',
    },
    code: {
      desc: 'サポートされているソース：<1> <2>GitHub gist</2> <3>GitHubファイル</3> <4>GitHubリポジトリ内のディレクトリ</4> <5>Gitlab snippet</5> <6>Gitlabファイル</6> <7>Gitlabリポジトリ内のディレクトリ</7> <8>JS Bin</8> <9>生のコード</9> <10>Webページ内のDOM内のコード</10> <11>ZIPファイル内のコード</11> <12>公式プレイグラウンド<13></13>（TypeScript、Vue、Svelte）</12> </1> 詳細については<14>ドキュメント</14>をご覧ください。',
      fromFile: 'ローカルファイルをインポート',
      fromURL: 'URLからインポート',
      heading: 'コードのインポート',
    },
    error: {
      failedToLoadURL: 'エラー：URLの読み込みに失敗しました',
      invalidConfigFile: '無効な設定ファイルです',
      invalidFile: 'エラー：無効なファイルです',
    },
    generic: {
      file: 'ローカルファイル',
      url: 'URL',
    },
    heading: 'インポート',
    json: {
      desc: '単一のプロジェクトJSONをエディターにインポートします。プロジェクトはアプリメニュー→エクスポート→プロジェクトのエクスポート（JSON）からエクスポートできます。',
      fromFile: 'ローカルファイルからプロジェクトをインポート',
      fromURL: 'URLからプロジェクトをインポート',
      heading: 'プロジェクトJSONのインポート',
    },
    success: 'インポートに成功しました！',
  },
  login: {
    accessAllowed: 'アクセスを許可：',
    desc: '<1>ログインすることで、お使いのデバイスに<2>クッキー</2>が保存されることに同意したものとみなされます。</1> <3> <4>これらの権限が必要な理由は？</4> </3> <5> <6>権限の変更/取り消し方法は？</6> </5>',
    gist: 'Gist',
    heading: 'GitHubでログイン',
    loginAs: '{{name}}としてログイン中',
    loginBtn: 'ログイン',
    logout: 'ログアウト',
    privateRepo: 'プライベートリポジトリ',
    publicRepo: 'リポジトリ',
  },
  menu: {
    about: '概要',
    appHelp: {
      heading: '手助け',
      hint: '手助け',
    },
    appProject: {
      heading: 'プロジェクト',
      hint: 'プロジェクト',
    },
    appSettings: {
      heading: '設定',
      hint: '設定',
    },
    assets: 'アセット …',
    autoSave: '自動保存',
    autoUpdate: '自動更新',
    backup: 'バックアップ / 復元 …',
    broadcast: '配信 …',
    customSettings: 'カスタム設定 …',
    delay: {
      heading: '遅延: <1>1.5</1>秒',
      hint: '自動更新前の遅延',
    },
    deploy: 'デプロイ …',
    editorSettings: 'エディター設定 …',
    embed: '埋め込み …',
    export: {
      codepen: 'CodePenで編集',
      gist: 'GitHub Gistにエクスポート',
      heading: 'エクスポート',
      jsfiddle: 'JSFiddleで編集',
      json: 'エクスポート (JSON)',
      result: '結果をエクスポート（HTML）',
      src: 'ソースをエクスポート（ZIP）',
    },
    formatOnsave: '保存時にフォーマット',
    import: 'インポート …',
    layout: '垂直レイアウト',
    login: 'ログイン …',
    logout: 'ログアウト',
    new: '新規 …',
    open: '開く …',
    project: 'プロジェクト情報 …',
    recoverUnsaved: '未保存の復元',
    resources: '外部リソース …',
    save: '保存',
    saveAs: {
      fork: 'フォーク（新規プロジェクト）',
      heading: '別名で保存',
      template: 'テンプレート',
    },
    share: '共有 …',
    showSpacing: {
      heading: '間隔を表示',
      hint: 'Alt/Optionキーを押しながら結果ページにカーソルを合わせてください',
    },
    snippets: 'コードスニペット …',
    sync: '同期（ベータ） … <1> ⏳</1>',
    theme: 'ダークテーマ',
    welcome: {
      heading: 'ようこそ …',
      hint: '起動時にウェルカム画面を表示',
    },
  },
  open: {
    defaultTemplate: 'デフォルトテンプレート ',
    delete: {
      all: '{{projects}}個のプロジェクトを削除しますか？',
      deleting: 'プロジェクトを削除中...',
      one: 'プロジェクトを削除: {{project}}?',
    },
    deleteAll: 'すべて削除',
    exportAll: 'すべてエクスポート',
    filter: {
      language: '言語でフィルター',
      tag: 'タグでフィルター',
    },
    heading: '保存済みプロジェクト',
    import: 'インポート',
    lastModified: '最終更新: {{modified}}',
    noData: {
      desc: 'プロジェクトは（設定メニュー&nbsp;&gt;&nbsp;保存）からまたはキーボードショートカット（Ctrl/Cmd&nbsp;+&nbsp;S）で保存できます。',
      heading: '保存済みプロジェクトがありません。',
    },
    noMatch: 'これらのフィルターに一致するプロジェクトはありません。',
    placeholder: {
      allLanguages: 'すべての言語',
      filterByTags: 'タグでフィルター',
      search: '検索',
    },
    removeDefault: '（解除）',
    reset: 'リセット',
    setAsDefault: 'デフォルトに設定',
    sort: {
      heading: '並び替え:',
      lastModified: '最終更新日',
      title: 'タイトル',
    },
  },
  project: {
    desc: '説明',
    head: '&lt;head&gt;に追加',
    heading: 'プロジェクト情報',
    htmlAttr: '&lt;html&gt;の属性',
    tags: 'タグ',
    title: 'プロジェクトタイトル',
  },
  recoverPrompt: {
    desc: '最後のプロジェクトに未保存の変更があります！',
    heading: '未保存のプロジェクトを復元しますか？',
    meta: 'タイトル: <1></1> <2></2> 最終更新: <3></3>',
    notShowAgain: '今後表示しない。',
    prompt: {
      discard: '未保存のプロジェクトを破棄',
      heading: '<1></1>今すぐ復元しますか？',
      recover: 'プロジェクトをエディターに復元',
      save: 'デバイスに保存して続行',
    },
  },
  resources: {
    browseOnJsDelivr: 'jsDelivrでパッケージファイルを閲覧',
    cssPresets: {
      heading: 'CSSプリセット',
      none: 'なし',
      normalizeCss: 'Normalize.css',
      resetCss: 'Reset CSS',
    },
    error: {
      failedToLoadResults: '結果の読み込みに失敗しました！',
      noResultsFound: '結果が見つかりません: ',
    },
    fonts: {
      add: '追加',
      heading: 'フォント <1>（Google Fontsを利用）</1>',
      select: 'フォントを選択...',
    },
    heading: '外部リソース',
    scripts: '外部スクリプト',
    search: {
      heading: 'パッケージを検索 <1>（jsDelivrを利用）</1>',
      placeholder: '例：jquery, lodash@4, bootstrap@5.2.3, ...',
    },
    stylesheets: '外部スタイルシート',
    urlDesc: 'スタイルシート/スクリプトのURLを追加。各URLは別の行に記述してください。',
  },
  savePrompt: {
    heading: '未保存の変更',
    prompt: {
      cancel: '消去',
      discard: '保存しない',
      heading: '変更が保存されていない可能性があります。<1></1>今すぐ保存しますか？',
      save: '保存',
    },
  },
  share: {
    characters: '{{urlLength}}文字',
    copy: {
      clickToCopy: 'クリックしてコピー',
      copied: 'URLがクリップボードにコピーされました',
    },
    encodedURL: 'エンコードされたURLを取得',
    error: {
      failedToCopy: 'クリップボードへのコピーに失敗しました！',
      failedToGenerateURL: '短縮URLの生成に失敗しました！',
    },
    expireInOneYear: '1年後に有効期限切れ',
    generateURL: 'URLを生成中 …',
    heading: '共有',
    permanentURL: '永続的URL',
    qrcode: {
      clickToDownload: 'クリックしてダウンロード',
      generating: '生成中...',
    },
    services: {
      copyUrl: 'URLをコピー',
      devTo: 'Dev.to',
      email: 'メール',
      facebook: 'Facebook',
      hackerNews: 'Hacker News',
      linkedIn: 'LinkedIn',
      pinterest: 'Pinterest',
      pocket: 'Pocket',
      qrCode: 'QRコード',
      reddit: 'Reddit',
      share: '共有方法 …',
      telegram: 'Telegram',
      tumblr: 'Tumblr',
      twitter: '𝕏 / Twitter',
      whatsApp: 'WhatsApp',
    },
    shortURL: '短縮URLを取得',
  },
  snippets: {
    action: {
      copy: 'コピー',
      delete: '削除',
      edit: '編集',
    },
    add: {
      code: 'コード',
      desc: '説明',
      heading: 'スニペットを追加',
      language: '言語',
      save: '保存',
      snippets: 'スニペット',
      title: 'タイトル',
    },
    copy: {
      clickToCopySnippet: 'クリックしてスニペットをコピー',
      copied: 'スニペットがクリップボードにコピーされました。',
    },
    delete: {
      all: '{{snippets}}個のスニペットを削除しますか？',
      one: 'スニペットを削除: {{snippet}}?',
    },
    deleteAll: 'すべて削除',
    error: {
      failedToCopy: 'URLのコピーに失敗しました。',
      noTitle: 'スニペットのタイトルを追加してください。',
    },
    filter: {
      language: '言語でフィルター',
    },
    heading: 'コードスニペット',
    lastModified: '最終更新: {{modified}}',
    noMatch: 'これらのフィルターに一致するスニペットはありません。',
    noSavedSnippets: '保存済みのスニペットはありません。',
    placeholder: {
      allLanguages: 'すべての言語',
      search: '検索',
    },
    reset: 'リセット',
    save: {
      success: 'スニペットがデバイスにローカル保存されました！',
    },
    sort: {
      date: '日付',
      heading: '並び替え:',
      title: 'タイトル',
    },
    text: 'プレーンテキスト',
  },
  splash: {
    loading: 'LiveCodesを読み込み中…',
  },
  sync: {
    autoSync: '自動同期',
    create: {
      desc: '新しい<1>プライベート</1>リポジトリが作成されます。LiveCodesのローカルデータは<2>main</2>ブランチと同期されます。',
      heading: '新しいリポジトリを作成',
      repoName: 'リポジトリ名',
    },
    error: {
      generic: '同期に失敗しました！',
      repoNameRequired: 'リポジトリ名は必須です',
    },
    existing: {
      desc: 'LiveCodesのローカルデータは<1>main</1>ブランチと同期されます。',
      heading: '既存のリポジトリ',
      repoName: 'リポジトリ名',
    },
    heading: 'GitHubリポジトリと同期',
    searchRepos: 'リポジトリを検索...',
    success: '同期が完了しました！',
    syncBtn: '同期',
    syncInProgress: '同期中...',
    syncStarted: '同期を開始しました...',
  },
  templates: {
    heading: '新規プロジェクト',
    noUserTemplates: {
      desc: 'プロジェクトをテンプレートとして保存するには、<1></1>（アプリメニュー&nbsp;&gt;&nbsp;別名で保存&nbsp;&gt;&nbsp;テンプレート）から行えます。',
      heading: '保存されたテンプレートはありません。',
    },
    starter: {
      angular: 'Angularスターター',
      assemblyscript: 'AssemblyScriptスターター',
      astro: 'Astroスターター',
      backbone: 'Backboneスターター',
      blank: '空のプロジェクト',
      blockly: 'Blocklyスターター',
      bootstrap: 'Bootstrapスターター',
      civet: 'Civetスターター',
      clio: 'Clioスターター',
      clojurescript: 'ClojureScriptスターター',
      coffeescript: 'CoffeeScriptスターター',
      commonlisp: 'Common Lispスターター',
      cpp: 'C++スターター',
      diagrams: 'ダイアグラムスターター',
      fennel: 'Fennelスターター',
      gleam: 'Gleamスターター',
      go: 'Goスターター',
      heading: 'スターターテンプレート',
      imba: 'Imbaスターター',
      javascript: 'JavaScriptスターター',
      jest: 'Jestスターター',
      'jest-react': 'Jest/Reactスターター',
      jquery: 'jQueryスターター',
      julia: 'Juliaスターター',
      knockout: 'Knockoutスターター',
      lit: 'Litスターター',
      livescript: 'LiveScriptスターター',
      loading: 'スターターテンプレートを読み込み中...',
      lua: 'Luaスターター',
      'lua-wasm': 'Lua（Wasm）スターター',
      malina: 'Malina.jsスターター',
      markdown: 'Markdownスターター',
      mdx: 'MDXスターター',
      ocaml: 'OCamlスターター',
      perl: 'Perlスターター',
      php: 'PHPスターター',
      'php-wasm': 'PHP（Wasm）スターター',
      postgresql: 'PostgreSQLスターター',
      preact: 'Preactスターター',
      prolog: 'Prologスターター',
      python: 'Pythonスターター',
      r: 'Rスターター',
      react: 'Reactスターター',
      'react-native': 'React Nativeスターター',
      reason: 'Reasonスターター',
      rescript: 'ReScriptスターター',
      riot: 'Riot.jsスターター',
      ruby: 'Rubyスターター',
      'ruby-wasm': 'Ruby（Wasm）スターター',
      scheme: 'Schemeスターター',
      solid: 'Solidスターター',
      sql: 'SQLスターター',
      stencil: 'Stencilスターター',
      svelte: 'Svelteスターター',
      tailwindcss: 'Tailwind CSSスターター',
      tcl: 'Tclスターター',
      teal: 'Tealスターター',
      typescript: 'TypeScriptスターター',
      vue: 'Vue 3 SFCスターター',
      vue2: 'Vue 2スターター',
      wat: 'WebAssembly Textスターター',
    },
    user: {
      heading: 'マイテンプレート',
      loading: 'ユーザーテンプレートを読み込み中...',
    },
  },
  testEditor: {
    heading: 'テストを編集',
    load: '読み込み',
    tests: 'テスト',
  },
  toolspane: {
    close: '閉じる',
    compiled: {
      title: 'コンパイル済み',
    },
    console: {
      clear: 'コンソールをクリア',
      title: 'コンソール',
    },
    test: {
      edit: '編集',
      error: '<1><2>テストエラー！</2></1>',
      loading: '<1>テストを読み込み中...</1>',
      noTest: '<1>このプロジェクトにはテストがありません！</1>',
      reset: 'リセット',
      run: {
        desc: 'Ctrl/Cmd + Alt + T',
        heading: '実行',
      },
      summary: {
        desc: 'テスト: {{failed}}\n       {{passed}}\n       {{skipped}}\n       {{total}}<1></1>\n時間: {{duration}}秒',
        failed: '{{failedNum}} 失敗',
        passed: '{{passedNum}} 成功',
        skipped: '{{skippedNum}} スキップ',
        total: '{{totalNum}} 合計',
      },
      title: 'テスト',
      watch: {
        desc: 'コードが変更されたらテストを実行',
        heading: '監視',
      },
    },
  },
  welcome: {
    about: {
      documentation: 'ドキュメント',
      heading: 'LiveCodesについて',
    },
    heading: 'ようこそ',
    recent: {
      heading: '最近',
    },
    recover: {
      cancel: '消去',
      heading: '復元',
      lastModified: '最終更新: <1></1>',
      recover: '復元',
      save: '保存',
      unsavedChanges: '最後のプロジェクトに未保存の変更があります：',
    },
    showOnStartup: '起動時に表示',
    start: {
      heading: '開始',
      import: 'インポート...',
      loadDefaultTemplate: 'デフォルトテンプレートを読み込む',
      new: '新規...',
      noDefaultTemplate: 'デフォルトテンプレートなし',
      open: '開く...',
    },
    templates: {
      heading: 'スターターテンプレート',
    },
  },
};

export default translation;
