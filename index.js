const [fs, { JSDOM }, jquery] = [require('fs'), require('jsdom'), require('jquery')];

// JQuery オブジェクトからHTML文字列を得るための関数
const htmlStr = jq => jq.clone().wrap('<div/>').parent().html();

// ファイル test.html を読み込み、JQuery オブジェクト $ を作成
const html = fs.readFileSync('test.html', 'utf-8'),
      dom = new JSDOM(html),
      $ = jquery(dom.window);

// scriptタグを収集して、各々をHTML文字列にして表示
$('script').each(function(i) {
  console.log(`========== script tag #${i+1} ==========`)
  console.log(htmlStr($(this)));
});
