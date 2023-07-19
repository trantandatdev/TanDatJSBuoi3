/**BAI TAP 1: TINH LUONG NHAN VIEN: */

/**
 * input: number luongNgaysoNgay 
 * progress:
 * - lay gia tri luong 1 ngay
 * - lay gia tri so ngay lam
 * - luong 1 ngay * so ngay lam = tong luong
 * output: number
 */

document.getElementById('btnTinhLuong').onclick = function() {
    var luongNgay = document.getElementById('luongNgay').value;
    var soNgay = document.getElementById('soNgay').value;
    var ketQuaBai1 = luongNgay * soNgay;
    document.getElementById('ketQuaBai1').innerHTML = 'Tong luong: ' + ketQuaBai1
}

/**BAI TAP 2: TINH GIA TRI TRUNG BINH: */

/**
 * input: number so1  so2  so3  so4  so5
 * progress:
 * - lay gia tri cua 5 so nhap vao
 * - cong gia tri 5 so do va chia cho 5
 * - (so1 + so2 + so3 + so4 + so5) / 5 = gia tri trung binh cua 5 so
 * output: number
 */

document.getElementById('btnGiaTriTB').onclick = function() {
    var so1 = Number(document.getElementById('so1').value);
    var so2 = Number(document.getElementById('so2').value);
    var so3 = Number(document.getElementById('so3').value);
    var so4 = Number(document.getElementById('so4').value);
    var so5 = Number(document.getElementById('so5').value);
    var ketQuaBai2 = (so1 + so2 + so3 + so4 + so5) / 5
    document.getElementById('ketQuaBai2').innerHTML = 'Gia Tri Trung Binh: ' + ketQuaBai2
}

/** BAI TAP 3: QUY DOI TIEN TE $:*/ 

/**
 * input: number soTienQuyDoi
 * progress:
 * - lay gia tri cua so tien muon doi
 * - khai bao tri gia USD
 * - soTienQuyDoi * triGia = So Tien
 * output: number
 */

document.getElementById('btnQuyDoi').onclick = function() {
    var soTienQuyDoi = document.getElementById('soTienQuyDoi').value *1;
    var triGia = 23500
    var ketQuaBai3 = soTienQuyDoi * triGia
    document.getElementById('ketQuaBai3').innerHTML = 'So Tien: ' + ketQuaBai3
}

/** BAI TAP 4: TINH CHU VI, DIEN TICH:*/ 

/**
 * input: number  chieuDai chieuRong
 * progress:
 * - lay gia tri cua chieu dai
 * - lay gia tri cua chieu rong
 * - chu vi = (chieu dai + chieu rong) * 2
 * - dien tich = chieu dai * chieu rong
 * output: number chuVi dienTich
 */

document.getElementById('btnHCN').onclick = function() {
    var chieuDai = document.getElementById('chieuDai').value *1;
    var chieuRong = document.getElementById('chieuRong').value *1;
    var chuVi = (chieuDai + chieuRong) * 2
    var dienTich = chieuDai * chieuRong
    document.getElementById('ketQuaBai4').innerHTML = `Chu vi: ${chuVi}, diện tích: ${dienTich}`;
}

/** BAI TAP 5: Tinh Tong 2 Ky So:*/ 

/**
 * input: number  kySo
 * progress:
 * - lay gia tri cua hang don vi 
 * - lay gia tri cua hang chuc
 * - tong ky so = hang don vi + hang chuc 
 * output: number tong
 */


document.getElementById('btnTinhTong').onclick = function() {
    var kySo = document.getElementById('kySo').value *1;
    var donVi = kySo % 10;
    var hangChuc = Math.floor(kySo / 10); 
    var ketQuaBai5 = donVi + hangChuc
    document.getElementById('ketQuaBai5').innerHTML = 'Tong: ' + ketQuaBai5 
}