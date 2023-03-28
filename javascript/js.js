// const toastTrigger = document.getElementById('jawaban_benar_1_btn')
// const toastLiveExample = document.getElementById('jawaban_benar_1')

// if (toastTrigger) {
// const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
// toastTrigger.addEventListener('click', () => {
//     toastBootstrap.show()
// })
// }


// const jawaban_salah = document.querySelectorAll('.jawaban_salah_btn');
// const jawaban_salahtoastLiveExample = document.getElementById('jawaban_salah')

// for (var i = 0; i < jawaban_salah.length; i++) {
// if (jawaban_salah[i]) {
//     const toastBootstrap = bootstrap.Toast.getOrCreateInstance(jawaban_salahtoastLiveExample)
//     jawaban_salah[i].addEventListener('click', () => {
//         toastBootstrap.show()

//     })
//     }
// }
// function myFunction() {
//     document.getElementsByClassName('jawaban_no_1_a').disabled = true;
//     document.getElementsByClassName('jawaban_no_1_b').disabled = true;
//     document.getElementsByClassName('jawaban_no_1_c').disabled = true;
//     document.getElementsByClassName('jawaban_no_1_d').disabled = true;
// }

function soal1Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal1Lanjut() {
    document.getElementById("d-soal_1").classList.add("d-hide");
    document.getElementById("d-soal_2").classList.remove("d-hide");
}

//===
function soal2Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal2Lanjut() {
    document.getElementById("d-soal_2").classList.add("d-hide");
    document.getElementById("d-soal_3").classList.remove("d-hide");
}

//===
function soal3Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal3Lanjut() {
    document.getElementById("d-soal_3").classList.add("d-hide");
    document.getElementById("d-soal_4").classList.remove("d-hide");
}

//===
function soal4Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal4Lanjut() {
    document.getElementById("d-soal_4").classList.add("d-hide");
    document.getElementById("d-soal_5").classList.remove("d-hide");
}

//===
function soal5Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal5Lanjut() {
    document.getElementById("d-soal_5").classList.add("d-hide");
    document.getElementById("d-soal_6").classList.remove("d-hide");
}

//===
function soal6Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal6Lanjut() {
    document.getElementById("d-soal_6").classList.add("d-hide");
    document.getElementById("d-soal_7").classList.remove("d-hide");
}

//===
function soal7Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal7Lanjut() {
    document.getElementById("d-soal_7").classList.add("d-hide");
    document.getElementById("d-soal_8").classList.remove("d-hide");
}

//===
function soal8Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal8Lanjut() {
    document.getElementById("d-soal_8").classList.add("d-hide");
    document.getElementById("d-soal_9").classList.remove("d-hide");
}

//===
function soal9Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal9Lanjut() {
    document.getElementById("d-soal_9").classList.add("d-hide");
    document.getElementById("d-soal_10").classList.remove("d-hide");
}

//===
function soal10Benar() {
    document.getElementById("d-skor").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
    document.getElementById("d-skor_akhir_angka").innerHTML = parseInt(document.getElementById("d-skor").innerHTML) + 10;
}

function soal10Lanjut() {
    document.getElementById("d-soal_dikerjakan").classList.add("d-hide");
    document.getElementById("d-soal_10").classList.add("d-hide");
    document.getElementById("d-skor_akhir").classList.remove("d-hide");
    var d_skor = document.getElementById("d-skor_akhir_angka");
    d_skor.innerHTML = document.getElementById("d-skor").innerHTML;
    if (parseInt(d_skor.innerHTML) >= 70){
        document.getElementById("d-status_label").innerHTML = "Lulus";
        document.getElementById("d-status_label").classList.add("d-status_success")
    }
    else{
        document.getElementById("d-status_label").innerHTML = "Belum Lulus";
        document.getElementById("d-status_label").classList.add("d-status_gagal")
    }
}