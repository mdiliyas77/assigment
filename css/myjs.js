function c() {
    var c = document.getElementById("c");
    var cpp = document.getElementById("cpp");
    var java = document.getElementById("java");
    var csharp = document.getElementById("csharp");
    var python = document.getElementById("python");
    if (c.style.display === "none") {
        c.style.display = "block";
        cpp.style.display = "none";
        java.style.display = "none";
        csharp.style.display = "none";
        python.style.display = "none";


    }
    else {
        c.style.display = "none";
    }
}

function cpp() {
    var cpp = document.getElementById("cpp");
    var c = document.getElementById("c");
    var java = document.getElementById("java");
    var csharp = document.getElementById("csharp");
    var python = document.getElementById("python");
    if (cpp.style.display === "none") {
        cpp.style.display = "block";
        c.style.display = "none";
        java.style.display = "none";
        csharp.style.display = "none";
        python.style.display = "none";
    }
    else {
        cpp.style.display = "none";
    }
}

function java() {
    var cpp = document.getElementById("cpp");
    var c = document.getElementById("c");
    var java = document.getElementById("java");
    var csharp = document.getElementById("csharp");
    var python = document.getElementById("python");
    if (java.style.display === "none") {
        java.style.display = "block";
        cpp.style.display = "none";
        c.style.display = "none";
        csharp.style.display = "none";
        python.style.display = "none";
    }
    else {
        java.style.display = "none";
    }
}

function csharp() {
    var cpp = document.getElementById("cpp");
    var c = document.getElementById("c");
    var java = document.getElementById("java");
    var csharp = document.getElementById("csharp");
    var python = document.getElementById("python");
    if (csharp.style.display === "none") {
        csharp.style.display = "block";
        cpp.style.display = "none";
        c.style.display = "none";
        java.style.display = "none";
        python.style.display = "none";
    }
    else {
        csharp.style.display = "none";
    }
}

function python() {
    var python = document.getElementById("python");
    var cpp = document.getElementById("cpp");
    var c = document.getElementById("c");
    var java = document.getElementById("java");
    var csharp = document.getElementById("csharp");
    if (python.style.display === "none") {
        python.style.display = "block";
        csharp.style.display = "none";
        cpp.style.display = "none";
        c.style.display = "none";
        java.style.display = "none";
    }
    else {
        python.style.display = "none";
    }
}