const thoiThanIndexs = [0, 1, 2, 3, 4, 5];
const thoiThanNames = ["Đại an", "Lưu niên", "Tốc hỷ", "Xích khẩu", "Tiểu cát", "Không vong"];

const diaChiIndexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const diaChiNames = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tị", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

const diaChiTimes = ["23g-1g", "1g-3g", "3g-5g", "5g-7g", "7g-9g", "9g-11g", "11g-13g", "13g-15g", "15g-17g", "17g-19g", "19g-21g", "21g-23g"];

const nhuan = false;

 const getDaiAnStartAt = (monthAl, dayAl, nhuan) => {
 	if (nhuan) {
 		if (dayAl > 15) {
 			monthAl += 1;
 		}
    }

    // Vị trí khởi ngày
    const day1StartAt = (monthAl % 6) - 1;

    // Vị trí khởi giờ
    let tyStartAt;
    for (let i = 0; i < dayAl; i ++) {
        tyStartAt = (day1StartAt + i) % 6;
    }

    // Đại an bắt đầu tại địa chi nào?
    let daiAnStartAtDiaChiIndex = ((6 - tyStartAt) % 6);

    let result = [];

    for (let i = 0; i < 6; i ++) {
        let dcIndex = daiAnStartAtDiaChiIndex + i;
        let dcIndexNext = (dcIndex + 6) % 12;
        result.push({
            thoi_than: thoiThanNames[i],
            start_at: [
                `${diaChiNames[dcIndex]}(${diaChiTimes[dcIndex]})`,
                `${diaChiNames[dcIndexNext]}(${diaChiTimes[dcIndexNext]})`
            ]
        });
    }

    console.log(result);
 };

 getDaiAnStartAt(2, 2);
 result = 4