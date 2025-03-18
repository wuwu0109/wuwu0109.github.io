function showImage(src) {
    document.getElementById("modalImage").src = src;
}




document.addEventListener("DOMContentLoaded", function () {
    let totalVisits = localStorage.getItem("totalVisits");
    let today = new Date().toLocaleDateString();
    let lastVisitDate = localStorage.getItem("lastVisitDate");
    let dailyVisits = localStorage.getItem("dailyVisits");

    // 初始化累積瀏覽人次
    if (!totalVisits) {
        totalVisits = 1;
    } else {
        totalVisits = parseInt(totalVisits) + 1;
    }
    localStorage.setItem("totalVisits", totalVisits);

    // 如果是新的一天，重置今日訪問人次
    if (lastVisitDate !== today) {
        dailyVisits = 1;
        localStorage.setItem("lastVisitDate", today);
    } else {
        dailyVisits = parseInt(dailyVisits) + 1;
    }
    localStorage.setItem("dailyVisits", dailyVisits);

    // 更新頁面上的數據
    document.getElementById("totalVisits").textContent = totalVisits;
    document.getElementById("dailyVisits").textContent = dailyVisits;
});


