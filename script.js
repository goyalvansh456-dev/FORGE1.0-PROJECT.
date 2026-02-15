function goToPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber).classList.add("active");
}

document.getElementById("complaintForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Complaint Submitted Successfully!");
});