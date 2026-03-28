function start() {
    const val = document.getElementById('btn_input').value;
    const res = document.getElementById('show_result');
    const clubs = [
        { name: "极客编程社", tag: "技术/AI", desc: "写最硬核的代码。" },
        { name: "光影摄影社", tag: "艺术/审美", desc: "拍最美的校园。" },
        { name: "思辨辩论社", tag: "逻辑/表达", desc: "说最深刻的话。" }
    ];
    // 简单的关键词逻辑
    const match = clubs.find(c => val.includes(c.tag.split('/')[0])) || clubs[Math.floor(Math.random()*3)];
    res.innerHTML = `<div class="card"><h3>${match.name}</h3><p>${match.desc}</p></div>`;
}