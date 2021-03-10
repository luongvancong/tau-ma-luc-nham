const thoiThanIndexs = [0, 1, 2, 3, 4, 5];
const thoiThanNames = ["Đại an", "Lưu niên", "Tốc hỷ", "Xích khẩu", "Tiểu cát", "Không vong"];

const diaChiIndexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const diaChiNames = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tị", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

const nhuan = false;

 const getDaiAnStartAt = (monthAl, dayAl, nhuan) => {
 	if (nhuan) {
 		if (dayAl > 15) {
 			monthAl += 1;
 		}
    }
    
    // Vị trí khởi ngày
    const dayStartAt = (monthAl % 6) - 1;

    // console.log(dayStartAt);

    // Vị trí khởi giờ
    const tyStartAt = dayAl % 6;

    // Đại van bắt đầu tại địa chi nào?
    let daiAnStartAtDiaChiIndex = ((6 - tyStartAt) % 6);

    let result = [];

    for (let i = 0; i < 6; i ++) {
        result.push({
            thoi_than: thoiThanNames[i],
            start_at: [
                diaChiNames[daiAnStartAtDiaChiIndex + i],
                diaChiNames[(daiAnStartAtDiaChiIndex + i + 6) % 12]
            ]
        });
    }

    console.log(result);
 };


 getDaiAnStartAt(2, 27);
 result = 4