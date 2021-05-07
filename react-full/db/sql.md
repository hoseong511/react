```sql
-- CLI, sqlClient, Sequelize 3가지 방법으로 테이블 만들기
-- CLI(mysql) 
-- create schema
CREATE SCHEMA `nodejs` default CHARACTER SET utf8;
use nodejs

-- users Table
CREATE TABLE nodejs.users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    age INT UNSIGNED NOT NULL,
    married TINYINT NOT NULL,
    comment TEXT NULL,
    create_at DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY(id),
    UNIQUE INDEX name_UNIQUE (name ASC))
    COMMENT = '사용자 정보' 
    DEFAULT CHARACTER SET = utf8
    ;

-- comments Table
CREATE TABLE nodejs.comments (
    id INT NOT NULL AUTO_INCREMENT,
    commenter INT NOT NULL,
    comment VARCHAR(100) NOT NULL,
    create_at DATETIME NOT NULL DEFAULT now(),
    PRIMARY KEY(id),
    INDEX commenter_idx (commenter ASC),
    CONSTRAINT commenter
    FOREIGN KEY (commenter)
    REFERENCES nodejs.users (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
    COMMENT = '댓글'
    DEFAULT CHARSET=utf8mb4 --utf8mb4는 +이모티콘
    ENGINE=InnoDB;

INSERT INTO nodejs.users (name, age, married, comment ) VALUES ('HOHO', 25, 0, 'hi~');
INSERT INTO nodejs.users (name, age, married, comment ) VALUES ('Zero', 24, 0, '000');

SELECT * FROM nodejs.users;
SELECT id, name FROM nodejs.users WHERE married =1 AND age > 25; -- and 조건
SELECT id, name FROM nodejs.users ORDER BY age DESC; -- age 기준 내림차순
SELECT id, name FROM nodejs.users ORDER BY age DESC LIMIT 1;
SELECT id, name FROM nodejs.users ORDER BY age DESC LIMIT 1 OFFSET 1; -- 첫 번째 값을 건너뛰고 두 번째 값이고 하나의 결과만
UPDATE nodejs.users SET comment = '바꿀 내용' WHERE id =2; -- 추가되는 조건이 없다면 전체가 수정된다.

DELETE FROM NODEJS.USERS where id=2;
```