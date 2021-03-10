import { getDaiAnStartAt } from '../src/index.js'

test('27/2', () => {
  const result = getDaiAnStartAt(27, 2);
  const daiAn = result.find(item => item.thoi_than == 'Đại an');
  expect(daiAn.start_at_zhi.indexOf('Mão') >= 0).toBe(true);
});

test('2/2', () => {
  const result = getDaiAnStartAt(2, 2);
  const daiAn = result.find(item => item.thoi_than == 'Đại an');
  expect(daiAn.start_at_zhi.indexOf('Thìn') >= 0).toBe(true);
});

test('2/5', () => {
  const result = getDaiAnStartAt(5, 2);
  const daiAn = result.find(item => item.thoi_than == 'Đại an');
  expect(daiAn.start_at_zhi.indexOf('Sửu') >= 0).toBe(true);
});

test('1/1', () => {
  const result = getDaiAnStartAt(1, 1);
  const daiAn = result.find(item => item.thoi_than == 'Đại an');
  expect(daiAn.start_at_zhi.indexOf('Ngọ') >= 0).toBe(true);
});