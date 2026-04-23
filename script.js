const fields = [
"name","role","email","phone","profile","experience","education",
"projects","internship","skills","language",
"certification","dob","gender","nationality","address"
];

fields.forEach(id => {
    document.getElementById("f-" + id).addEventListener("input", update);
});

function update() {
    fields.forEach(id => {
        let value = document.getElementById("f-" + id).value;
        document.getElementById("p-" + id).innerText = value;
        localStorage.setItem(id, value);
    });
}

window.onload = () => {
    fields.forEach(id => {
        let val = localStorage.getItem(id);
        if(val){
            document.getElementById("f-" + id).value = val;
            document.getElementById("p-" + id).innerText = val;
        }
    });
};

function downloadPDF() {
    const element = document.getElementById("resume");

    html2pdf().set({
        margin: 0,
        filename: 'Resume.pdf',
        html2canvas: {
            scale: 2,
            scrollY: 0   // 🔥 FIX FOR HALF PAGE ISSUE
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    }).from(element).save();
}
