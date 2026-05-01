const toast = document.querySelector(".toast");
const copyButtons = document.querySelectorAll(".copy-code");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.dataset.copy || "";
    try {
      await navigator.clipboard.writeText(text);
      showToast("已复制 Realm 链接");
    } catch {
      showToast("浏览器不允许复制，请手动选择链接");
    }
  });
});
