const thoiThanIndexs = [0, 1, 2, 3, 4, 5];
const thoiThanNames = ["Đại an", "Lưu niên", "Tốc hỷ", "Xích khẩu", "Tiểu cát", "Không vong"];

const diaChiIndexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const diaChiNames = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tị", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

const nhuan = false;

 const getDaiAnStartAt = (monthAl, dayAl) => {
    const dayStartAt = (monthAl % 6) - 1;

    const tyStartAt = dayAl % (6-dayStartAt);

    const daiAnStartAtDiaChiIndex = 
 };


 getDaiAnStartAt(2, 27);
 result = 4