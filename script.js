const fields = [
"name","role","profile","experience","education",
"projects","internship","skills","language",
"certification","dob","gender","nationality","address"
];

// INPUT UPDATE
fields.forEach(id => {
    document.getElementById(id).addEventListener("input", update);
});

// EDUCATION SELECT
document.getElementById("educationType").addEventListener("change", function(){
    document.getElementById("p-educationType").innerText = this.value;
});

// UPDATE FUNCTION
function update() {
    fields.forEach(id => {
        let value = document.getElementById(id).value;
        document.getElementById("p-" + id).innerText = value;

        localStorage.setItem(id, value);
    });
}

// LOAD DATA
window.onload = () => {
    fields.forEach(id => {
        let val = localStorage.getItem(id);
        if(val){
            document.getElementById(id).value = val;
            document.getElementById("p-" + id).innerText = val;
        }
    });

    let eduType = localStorage.getItem("educationType");
    if(eduType){
        document.getElementById("educationType").value = eduType;
        document.getElementById("p-educationType").innerText = eduType;
    }
};

// SAVE SELECT
document.getElementById("educationType").addEventListener("change", function(){
    localStorage.setItem("educationType", this.value);
});
