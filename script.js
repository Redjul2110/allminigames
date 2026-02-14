const folders = [
    { name: "Calculator Hub", path: "Calculator Hub" },
    { name: "voclearn", path: "voclearn" }
];

const folderList = document.getElementById("folderList");

folders.forEach(folder => {
    const div = document.createElement("div");
    div.className = "folder";
    div.textContent = folder.name;

    div.onclick = () => {
        window.location.href = folder.path;
    };

    folderList.appendChild(div);
});
