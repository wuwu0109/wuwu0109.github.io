
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表單的預設提交行為
    
    let formData = new FormData(this);

    fetch("https://formsubmit.co/wuwu01090109@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error("表單提交失敗，請稍後再試！");
    })
    .then(data => {
        document.getElementById("responseMessage").style.display = "block";
        document.getElementById("responseMessage").className = "alert alert-success";
        document.getElementById("responseMessage").textContent = "✅ 訊息已成功送出！";

        document.getElementById("contactForm").reset(); // 清空表單
    })
    .catch(error => {
        document.getElementById("responseMessage").style.display = "block";
        document.getElementById("responseMessage").className = "alert alert-danger";
        document.getElementById("responseMessage").textContent = "❌ 送出失敗，請稍後再試！";
    });
});
