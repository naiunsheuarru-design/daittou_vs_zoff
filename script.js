const DATA={"likert": [{"text": "知らない場所でも、必要なら周囲の人にすぐ質問できる", "weights": {"social": 1.0}, "reverse": false, "dummy": false, "pair": null}, {"text": "予定が急に変わると、その後もしばらく気になってしまう", "weights": {"dynamic": 1.0}, "reverse": true, "dummy": false, "pair": "adapt"}, {"text": "複数の人の意見を聞き、落としどころを探すのは苦にならない", "weights": {"planning": 0.8, "social": 0.4}, "reverse": false, "dummy": false, "pair": null}, {"text": "同じ資料を何度も見直し、細かな違いを探す作業ができる", "weights": {"detail": 1.0, "office": 0.5}, "reverse": false, "dummy": false, "pair": null}, {"text": "集まりでは、気づくと会話のきっかけを作っていることが多い", "weights": {"social": 0.9}, "reverse": false, "dummy": false, "pair": null}, {"text": "自分の仕事だけでなく、周囲の進み具合も気になる", "weights": {"leadership": 0.6, "planning": 0.5}, "reverse": false, "dummy": false, "pair": null}, {"text": "忙しい場面では、考えるより先に手を動かせる", "weights": {"dynamic": 0.9}, "reverse": false, "dummy": false, "pair": null}, {"text": "数字の変化を見ると、その理由を考えたくなる", "weights": {"detail": 0.5, "sales": 0.6}, "reverse": false, "dummy": false, "pair": null}, {"text": "人から見られながら作業すると集中しにくい", "weights": {"social": 0.5, "dynamic": 0.4}, "reverse": true, "dummy": false, "pair": null}, {"text": "役割分担が曖昧なとき、自分から整理することがある", "weights": {"leadership": 0.8, "planning": 0.6}, "reverse": false, "dummy": false, "pair": null}, {"text": "作業手順が決まっている方が安心できる", "weights": {"stability": 0.7, "office": 0.5}, "reverse": false, "dummy": false, "pair": null}, {"text": "相手の反応を見ながら、説明の仕方を変えることがある", "weights": {"social": 0.8, "sales": 0.5}, "reverse": false, "dummy": false, "pair": null}, {"text": "長時間座って作業しても、それほど苦にならない", "weights": {"office": 0.9}, "reverse": false, "dummy": false, "pair": null}, {"text": "結果が数字ではっきり出る方が、やる気につながる", "weights": {"sales": 0.8}, "reverse": false, "dummy": false, "pair": null}, {"text": "細かい確認より、全体を早く進める方を優先しがちだ", "weights": {"detail": 0.9}, "reverse": true, "dummy": false, "pair": "detail"}, {"text": "誰かが困っていると、頼まれる前に声をかけることがある", "weights": {"social": 0.7, "leadership": 0.4}, "reverse": false, "dummy": false, "pair": null}, {"text": "決められた時間や手順を守ることを重視する", "weights": {"detail": 0.6, "stability": 0.6}, "reverse": false, "dummy": false, "pair": null}, {"text": "少し強い言い方をされても、必要な対応を続けられる", "weights": {"social": 0.6, "dynamic": 0.6}, "reverse": false, "dummy": false, "pair": null}, {"text": "新しいやり方を試すより、慣れた方法を続けたい", "weights": {"dynamic": 0.8}, "reverse": true, "dummy": false, "pair": null}, {"text": "人の得意・不得意を見て役割を考えるのが好きだ", "weights": {"leadership": 0.8}, "reverse": false, "dummy": false, "pair": null}, {"text": "休日の予定は、早めに決まっている方が落ち着く", "weights": {"stability": 0.8}, "reverse": false, "dummy": false, "pair": null}, {"text": "相手が迷っていると、選択肢を整理して提案することがある", "weights": {"social": 0.7, "sales": 0.7}, "reverse": false, "dummy": false, "pair": null}, {"text": "ミスを防ぐためなら、多少時間をかけて確認したい", "weights": {"detail": 0.9}, "reverse": false, "dummy": false, "pair": null}, {"text": "予定外の問い合わせが続いても、優先順位を変えながら対応できる", "weights": {"dynamic": 0.9, "planning": 0.4}, "reverse": false, "dummy": false, "pair": null}, {"text": "人をまとめる役は、できれば避けたい", "weights": {"leadership": 1.0}, "reverse": true, "dummy": false, "pair": "lead"}, {"text": "複数の締切があると、一覧にして管理する", "weights": {"planning": 1.0, "office": 0.4}, "reverse": false, "dummy": false, "pair": null}, {"text": "成果を上げるために、相手への伝え方を工夫するのは面白い", "weights": {"sales": 0.9, "social": 0.4}, "reverse": false, "dummy": false, "pair": null}, {"text": "静かな場所で一つずつ処理する方が力を出しやすい", "weights": {"office": 0.8, "stability": 0.3}, "reverse": false, "dummy": false, "pair": null}, {"text": "周囲が忙しそうだと、自分も動きやすくなる", "weights": {"dynamic": 0.7}, "reverse": false, "dummy": false, "pair": null}, {"text": "自分の判断で進めるより、上司の確認を取ってから進めたい", "weights": {"leadership": 0.5, "stability": 0.5}, "reverse": true, "dummy": false, "pair": null}, {"text": "細かなルールが多い仕事でも、それほど苦にならない", "weights": {"detail": 0.8, "office": 0.5}, "reverse": false, "dummy": false, "pair": null}, {"text": "同じ相手と長く関わるより、多くの人と短く関わる方が楽だ", "weights": {"social": 0.7}, "reverse": false, "dummy": false, "pair": null}, {"text": "目標が少し高い方が、工夫する余地があって面白い", "weights": {"sales": 0.7, "dynamic": 0.4}, "reverse": false, "dummy": false, "pair": null}, {"text": "仕事中に何度も話しかけられると、集中が切れやすい", "weights": {"social": 0.5, "office": 0.4}, "reverse": true, "dummy": false, "pair": null}, {"text": "誰かのミスが続いたら、本人だけでなく仕組みも見直したい", "weights": {"leadership": 0.6, "planning": 0.8}, "reverse": false, "dummy": false, "pair": null}, {"text": "毎週ほぼ同じ生活リズムで過ごしたい", "weights": {"stability": 0.9}, "reverse": false, "dummy": false, "pair": null}, {"text": "その場で相手の反応が返ってくる仕事に達成感を感じる", "weights": {"social": 0.7, "sales": 0.5}, "reverse": false, "dummy": false, "pair": null}, {"text": "文章や表の誤りを見つけるのは比較的得意だ", "weights": {"detail": 0.9, "office": 0.4}, "reverse": false, "dummy": false, "pair": null}, {"text": "急いでいる人にも、必要な説明は省略せず伝えられる", "weights": {"social": 0.6, "detail": 0.5}, "reverse": false, "dummy": false, "pair": null}, {"text": "仕事の進め方を人に教えることに抵抗がない", "weights": {"leadership": 0.8}, "reverse": false, "dummy": false, "pair": null}, {"text": "知らない分野でも、まずやってみてから覚える方だ", "weights": {"dynamic": 0.8}, "reverse": false, "dummy": false, "pair": null}, {"text": "人に勧めたものを選んでもらえると嬉しい", "weights": {"sales": 0.9, "social": 0.4}, "reverse": false, "dummy": false, "pair": null}, {"text": "定型的な処理を正確に続けることができる", "weights": {"office": 0.9, "detail": 0.7}, "reverse": false, "dummy": false, "pair": null}, {"text": "相手の都合で自分の予定が変わると、かなりストレスを感じる", "weights": {"dynamic": 0.7, "stability": 0.4}, "reverse": true, "dummy": false, "pair": "adapt"}, {"text": "責任が増えても、裁量が広がる方を選びたい", "weights": {"leadership": 0.9}, "reverse": false, "dummy": false, "pair": null}, {"text": "仕事と私生活の予定がはっきり分かれている方がよい", "weights": {"stability": 0.8}, "reverse": false, "dummy": false, "pair": null}, {"text": "興味のあることなら、専門知識を深く掘り下げたい", "weights": {"specialty": 0.8}, "reverse": false, "dummy": false, "pair": null}, {"text": "人と関わる仕事と事務作業のどちらにも、あまり魅力を感じない", "weights": {"specialty": 1.0}, "reverse": false, "dummy": false, "pair": null}, {"text": "旅行先では、地図を見ずに歩いてみることがある", "weights": {}, "reverse": false, "dummy": true, "pair": null}, {"text": "同じ映画や動画を何度か見返すことがある", "weights": {}, "reverse": false, "dummy": true, "pair": null}, {"text": "飲み物を買うとき、いつも同じものを選びやすい", "weights": {}, "reverse": false, "dummy": true, "pair": null}, {"text": "部屋の模様替えをすると気分が変わる", "weights": {}, "reverse": false, "dummy": true, "pair": null}, {"text": "雨の日の音は嫌いではない", "weights": {}, "reverse": false, "dummy": true, "pair": null}, {"text": "スマホのホーム画面は比較的整理されている", "weights": {}, "reverse": false, "dummy": true, "pair": null}, {"text": "買い物では、予定になかったものも見る", "weights": {}, "reverse": false, "dummy": true, "pair": null}, {"text": "季節の変わり目が好きだ", "weights": {}, "reverse": false, "dummy": true, "pair": null}, {"text": "説明書を読む前に触ってみることがある", "weights": {}, "reverse": false, "dummy": true, "pair": null}, {"text": "写真を撮るとき、構図を少し気にする", "weights": {}, "reverse": false, "dummy": true, "pair": null}], "cases": [{"text": "予定より来客が多く、周囲も忙しそうです。最初にすることは？", "options": [{"text": "目の前の人に声をかけ、待ち時間の不安を減らす", "w": {"social": 1.0, "dynamic": 0.4}}, {"text": "周囲の役割を確認し、対応の分担を決める", "w": {"leadership": 0.8, "planning": 0.8}}, {"text": "何が詰まっているかを確認し、順番を整理する", "w": {"planning": 1.0, "detail": 0.3}}, {"text": "自分の担当を崩さず、指示を待つ", "w": {"stability": 0.5, "leadership": -0.3}}]}, {"text": "提出直前に資料の数字が合わないことに気づきました。どうする？", "options": [{"text": "原因が分かるまで確認する", "w": {"detail": 1.0, "office": 0.5}}, {"text": "重要な箇所を優先して確認する", "w": {"planning": 0.8, "detail": 0.6}}, {"text": "周囲に確認を頼み、並行して進める", "w": {"leadership": 0.5, "planning": 0.7}}, {"text": "差が小さければ、そのまま提出する", "w": {"detail": -0.8}}]}, {"text": "相手が何を求めているか、話が曖昧です。どうする？", "options": [{"text": "具体例を聞きながら整理する", "w": {"social": 0.8, "planning": 0.5}}, {"text": "いくつか選択肢を出して反応を見る", "w": {"sales": 0.8, "social": 0.5}}, {"text": "要点を文章にまとめて確認する", "w": {"office": 0.7, "detail": 0.5}}, {"text": "分かる範囲だけ進める", "w": {"planning": -0.3}}]}, {"text": "後輩が同じミスを繰り返しています。どうする？", "options": [{"text": "本人と原因を整理し、やり方を変える", "w": {"leadership": 0.9, "planning": 0.6}}, {"text": "手順書やチェック方法を見直す", "w": {"detail": 0.7, "planning": 0.8}}, {"text": "もう一度、自分が実演して見せる", "w": {"social": 0.5, "leadership": 0.6}}, {"text": "自分でやった方が早いので任せない", "w": {"leadership": -0.7}}]}, {"text": "今月の目標が届かなさそうです。最も近い行動は？", "options": [{"text": "相手への提案方法を変えて試す", "w": {"sales": 1.0, "dynamic": 0.5}}, {"text": "数字を分解し、原因を探す", "w": {"detail": 0.6, "planning": 0.8}}, {"text": "周囲と成功例を共有する", "w": {"leadership": 0.6, "social": 0.5}}, {"text": "達成できなくても仕方ないと考える", "w": {"sales": -0.6}}]}, {"text": "急な予定変更が入りました。最初に考えることは？", "options": [{"text": "今すぐ必要な対応は何か", "w": {"dynamic": 0.9}}, {"text": "ほかの予定への影響は何か", "w": {"planning": 0.9}}, {"text": "関係者へどう伝えるか", "w": {"social": 0.6, "planning": 0.4}}, {"text": "予定を元に戻せないか", "w": {"stability": 0.5, "dynamic": -0.4}}]}]};
const traitNames={
 social:"対人対応",dynamic:"変化対応",leadership:"マネジメント",detail:"正確性",
 planning:"調整・計画",stability:"安定志向",sales:"提案・目標",office:"事務作業",specialty:"専門職志向"
};
let items=[],idx=0,answers=[];
const $=id=>document.getElementById(id);

function shuffled(arr){return [...arr].sort(()=>Math.random()-.5)}
function buildItems(){
 const normal=shuffled(DATA.likert.map((q,n)=>({kind:"likert",q,id:"l"+n})));
 const cases=shuffled(DATA.cases.map((q,n)=>({kind:"case",q,id:"c"+n})));
 items=shuffled([...normal,...cases]);
}
$("startBtn").onclick=()=>{buildItems();$("start").classList.add("hidden");$("quiz").classList.remove("hidden");render();};
$("backBtn").onclick=()=>{if(idx>0){idx--;answers.pop();render();}};
$("restartBtn").onclick=()=>location.reload();

function render(){
 const item=items[idx], pct=Math.round((idx+1)/items.length*100);
 $("counter").textContent=`${idx+1} / ${items.length}`;
 $("percent").textContent=pct+"%";$("progressFill").style.width=pct+"%";
 $("questionText").textContent=item.q.text;
 $("typeLabel").textContent=item.kind==="case"?"場面を想像して選択":"自分にどれくらい当てはまるか";
 const box=$("answers"); box.innerHTML="";
 if(item.kind==="likert"){
   [["とても当てはまる",1],["やや当てはまる",.75],["どちらともいえない",.5],["あまり当てはまらない",.25],["まったく当てはまらない",0]].forEach(([t,v])=>{
     const b=document.createElement("button");b.textContent=t;b.onclick=()=>select(v);box.appendChild(b);
   });
 }else{
   item.q.options.forEach((o,n)=>{const b=document.createElement("button");b.textContent=o.text;b.onclick=()=>select(n);box.appendChild(b);});
 }
 $("backBtn").style.visibility=idx?"visible":"hidden";
}
function select(v){answers.push(v);idx++;idx>=items.length?calculate():render();}

function calculate(){
 const raw={},max={};Object.keys(traitNames).forEach(k=>{raw[k]=0;max[k]=0});
 const pairValues={};
 items.forEach((item,n)=>{
   if(item.kind==="likert"){
     const q=item.q; let v=answers[n]; if(q.reverse)v=1-v;
     Object.entries(q.weights).forEach(([k,w])=>{raw[k]+=v*w;max[k]+=Math.max(0,w);});
     if(q.pair){if(!pairValues[q.pair])pairValues[q.pair]=[];pairValues[q.pair].push(v);}
   }else{
     const w=item.q.options[answers[n]].w;
     Object.entries(w).forEach(([k,val])=>{raw[k]+=val;max[k]+=Math.max(0,val);});
   }
 });
 const scores={};Object.keys(traitNames).forEach(k=>{scores[k]=max[k]>0?Math.max(0,Math.min(100,Math.round(raw[k]/max[k]*100))):50});

 // Company compatibility formulas.
 let z = Math.round(
   scores.social*.21 + scores.dynamic*.16 + scores.leadership*.17 +
   scores.sales*.19 + scores.planning*.09 + scores.detail*.06 +
   (100-scores.stability)*.08 + (100-scores.office)*.04
 );
 let d = Math.round(
   scores.detail*.19 + scores.planning*.19 + scores.office*.18 +
   scores.stability*.15 + scores.leadership*.10 + scores.dynamic*.06 +
   scores.social*.06 + (100-scores.sales)*.07
 );
 z=Math.max(0,Math.min(100,z)); d=Math.max(0,Math.min(100,d));

 // Reliability from paired reverse-consistency and neutral/dummy patterns.
 let diffs=[];
 Object.values(pairValues).forEach(v=>{if(v.length>=2)diffs.push(Math.abs(v[0]-v[1]));});
 let neutral=answers.filter(v=>typeof v==="number"&&v===.5).length/items.length;
 let reliability=Math.round(100-(diffs.reduce((a,b)=>a+b,0)/(diffs.length||1))*45-Math.max(0,neutral-.45)*60);
 reliability=Math.max(55,Math.min(98,reliability));

 showResult(z,d,scores,reliability);
}

function showResult(z,d,s,r){
 $("quiz").classList.add("hidden");$("result").classList.remove("hidden");
 $("zoffScore").textContent=z+"%";$("daitoScore").textContent=d+"%";
 $("zoffBar").style.width=z+"%";$("daitoBar").style.width=d+"%";
 let title,lead,reasons=[];
 if(z>=d+9){
   title="Zoffの店舗マネジメント寄り";
   lead="接客、提案、変化のある現場、若いうちからの店舗運営と相性が高めです。";
   reasons=["相手の反応を見ながら動く力が活かしやすい","忙しい場面での判断や切り替えに比較的強い","売上や提案を工夫する仕事と相性がよい"];
 }else if(d>=z+9){
   title="大東建託の事務系総合職寄り";
   lead="正確性、調整、計画的な事務処理、安定した働き方と相性が高めです。";
   reasons=["複数の情報や予定を整理する力が活かしやすい","書類・数字・確認作業への適性が高い","一定の手順や生活リズムを好む傾向がある"];
 }else{
   title="二社の適性はかなり接近";
   lead="本人の苦手条件と、実際の配属・働き方を確認して決めるのがよい結果です。";
   reasons=["両方に活かせる強みがある","仕事内容より休日・転勤・職場環境が決め手になりやすい","社員面談で一日の仕事を比較すると判断しやすい"];
 }
 $("resultTitle").textContent=title;$("resultLead").textContent=lead;
 $("reasons").innerHTML=reasons.map(x=>`<li>${x}</li>`).join("");
 const order=["social","dynamic","leadership","detail","planning","stability","sales","office"];
 $("traits").innerHTML=order.map(k=>`<div class="trait-row"><span>${traitNames[k]}</span><div class="trait-bar"><div style="width:${s[k]}%"></div></div><b>${s[k]}</b></div>`).join("");
 $("reliability").textContent=r>=85?`高め（${r}%）。回答の傾向は比較的一貫しています。`:r>=70?`標準（${r}%）。大きな矛盾はありませんが、結果は目安として見てください。`:`やや低め（${r}%）。迷った回答や回答の揺れが多いため、結果は参考程度にしてください。`;

 if(s.specialty>=70 || (z<55&&d<55)){
   $("cautionPanel").classList.remove("hidden");
   $("cautionText").textContent="二社のどちらかへ無理に決める必要はありません。専門職・制作職など、本人が興味を持つ別職種も少し比較すると、選択への納得感が上がります。";
 }
}
