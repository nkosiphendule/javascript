const names = ["nkosiphendule", "sophie", "happy", "mduduzi", "ntombela", "lucky", "sithemiso", "khumbulani", "mmapaseka", "wandile", "selina", "andisiwe", "vusumuzi", "kagisho", "precious"];
const display = document.getElementById("display");

for (let i = 0; i < names.length; i++) {
    display.innerHTML += "<li>" + names[i]
}
