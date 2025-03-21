document.addEventListener("DOMContentLoaded", () => {
    const changelog = document.getElementById("changelog-container");
    const closeChangelog = document.getElementById("close-changelog");

    const currentVersion = "1.1.4";

    const lastSeenVersion = localStorage.getItem("lastSeenVersion");

    if (lastSeenVersion !== currentVersion) {
        changelog.style.display = "flex";
        document.body.classList.add("no-scroll");
        document.getElementById("latestVersion").textContent = currentVersion;
    } else {
        changelog.style.display = "none";
        document.body.classList.remove("no-scroll");
    }

    closeChangelog.addEventListener("click", () => {
        changelog.style.display = "none";
        localStorage.setItem("lastSeenVersion", currentVersion);
        document.body.classList.remove("no-scroll");
    });
});
