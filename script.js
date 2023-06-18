const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// Get Value and Change text Saiyou Section

const jobDescs = [{
    name:"管理者",
    jobDesc:`所属するチームや部署の日常業務を監督し、効率的な運営を確保します。
    タスクの割り当て、進捗の管理、パフォーマンスの評価などを行います。部下やチームメンバーを指導し、リーダーシップを発揮します
    。目標の設定やパフォーマンス向上のためのサポート、モチベーションの維持などを行います。困難な状況や問題に対して解決策を見つけ、必要な決定を行います。
    リスク評価や情報収集などを通じて、的確な判断を下します`
}, {
    name:"CADオペレーター",
    jobDesc:`CADソフトウェアを使用して、建築物や機械部品などの設計図を作成します。
    寸法、形状、詳細な仕様などを図面に反映させます。3Dモデルや部品の作成を行います。立体的な形状や構造を正確に表現し、
    必要な寸法や材料を指定します。設計において変更や修正が必要な場合、CADオペレーターは既存の図面を編集し、変更内容を反映させます。
    部品の追加、削除、修正などを行います。建築、機械、電気、土木工学などの分野で使用されるデザインや図面を作成します`
}, {
    name:"溶接職人",
    jobDesc:`接機器（溶接機、電極、ガス、溶接材料など）を使用して金属部品を結合するための技術を持っています。
    彼らは図面や仕様書に基づいて溶接作業を計画し、金属の切断、加工、組み立てを行います
    。一般的な溶接プロセスには、アーク溶接、ガス溶接、レーザー溶接などがあります。
    安全性と品質を確保するために、適切な保護具（安全メガネ、保護服、手袋など）を着用し、作業環境を整えます。
    彼らは金属部品の位置調整、溶接電流やガス流量の調節、溶接後の仕上げ作業（研磨、研削、塗装など）なども担当します`
}];

function changeJobDesc() {
    let getValueJob = document.getElementById("jobs-title").value;

    if (getValueJob == "kanri") {
        document.getElementById("job-text-title-1").innerHTML = "管理者",
        document.getElementById("job-active-desc1").innerHTML = jobDescs[0].jobDesc;

    } else if (getValueJob == "cad") {
        document.getElementById("job-text-title-1").innerHTML = "CADオペレーター"
        document.getElementById("job-active-desc1").innerHTML = jobDescs[1].jobDesc;
    } else {
        document.getElementById("job-text-title-1").innerHTML = "溶接職人"
        document.getElementById("job-active-desc1").innerHTML = jobDescs[2].jobDesc;
    }
}


