function start() {
    const userInput = document.getElementById('btn_input').value.trim().toLowerCase();
    const resultDiv = document.getElementById('show_result');
    
    if (!userInput) {
        alert("请输入你的兴趣爱好，让 AI 为你精准匹配！");
        return;
    }

    // 1. 庞大的全能社团库
    const clubLibrary = [
        { name: "奔跑者田径社", tags: ["跑步", "健身", "田径", "运动", "马拉松", "锻炼"] },
        { name: "极客编程社", tags: ["编程", "技术", "ai", "代码", "算法", "电脑", "互联网"] },
        { name: "光影摄影社", tags: ["摄影", "艺术", "审美", "拍照", "后期", "单反", "录像"] },
        { name: "灌篮高手篮球社", tags: ["篮球", "球类", "比赛", "运动", "扣篮"] },
        { name: "灵感美术社", tags: ["画画", "设计", "艺术", "素描", "色彩", "二次元", "动漫"] },
        { name: "指尖旋律吉他社", tags: ["音乐", "乐器", "吉他", "唱歌", "民谣", "乐队"] },
        { name: "弈林棋牌社", tags: ["围棋", "象棋", "桌游", "扑克", "智力", "狼人杀", "游戏"] },
        { name: "味蕾实验室", tags: ["美食", "烹饪", "奶茶", "吃货", "做饭", "甜点"] },
        { name: "星空天文社", tags: ["天文", "科学", "星空", "宇宙", "望远镜", "户外"] },
        { name: "ACE电竞社", tags: ["游戏", "电竞", "英雄联盟", "王者荣耀", "吃鸡", "手游"] }
    ];

    // 2. 匹配逻辑升级：计算匹配分值
    let bestMatch = null;
    let maxScore = -1;

    clubLibrary.forEach(club => {
        let currentScore = 0;
        // 检查用户输入的每一个词是否命中了社团标签
        club.tags.forEach(tag => {
            if (userInput.includes(tag)) {
                currentScore += 1;
            }
        });
        
        // 如果输入里直接包含社团名字，分数大涨
        if (userInput.includes(club.name)) {
            currentScore += 5;
        }

        if (currentScore > maxScore) {
            maxScore = currentScore;
            bestMatch = club;
        }
    });

    // 3. 结果展示
    resultDiv.innerHTML = `
        <div class="card" style="border-top: 4px solid #ff6b00;">
            <p style="font-size:12px; color:#999; margin-bottom:5px;">匹配结果生成中...</p>
            <h3 style="margin:0 0 10px 0; color:#333;">✨ 最适合你的：${bestMatch.name}</h3>
            <div style="display:flex; flex-wrap:wrap; gap:5px;">
                ${bestMatch.tags.slice(0, 4).map(t => `<span style="background:#fff0e6; color:#ff6b00; padding:2px 8px; border-radius:10px; font-size:11px;">#${t}</span>`).join('')}
            </div>
            <p style="font-size:13px; color:#666; margin-top:10px; line-height:1.5;">
                根据你的兴趣关键词 <b>"${userInput}"</b>，我们发现该社团与你的契合度非常高！
            </p>
        </div>
    `;
}