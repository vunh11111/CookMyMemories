-- Tạo database
CREATE DATABASE IF NOT EXISTS ingredient_db;
USE ingredient_db;

-- Tạo bảng ingredients
CREATE TABLE IF NOT EXISTS ingredients (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    ingredients TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Thêm dữ liệu mẫu
INSERT INTO ingredients (ingredients, price) VALUES 
('Cà chua, hành tây, tỏi, ớt chuông', 25000.00),
('Thịt bò, rau muống, nấm hương', 85000.00),
('Tôm tươi, rau cải, gừng', 120000.00),
('Gà ta, khoai tây, cà rốt', 65000.00),
('Cá hồi, bông cải xanh, chanh', 150000.00),
('Thịt heo, bắp cải, hành lá', 45000.00),
('Bạch tuộc, rau mầm, ớt hiểm', 95000.00),
('Sườn bò, củ cải trắng, lá nguyệt quế', 110000.00);