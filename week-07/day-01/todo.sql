CREATE TABLE todo (
ID INT AUTO_INCREMENT,
task TEXT,
completed BOOLEAN DEFAULT 0
);

INSERT INTO todo VALUES ("buy milk");
INSERT INTO todo VALUES ("do homework");
INSERT INTO todo VALUES ("sleep");
INSERT INTO todo VALUES ("eat");
INSERT INTO todo VALUES ("make bed");

UPDATE todo
SET completed = 1
WHERE ID = 3; 

DELETE FROM todo WHERE ID = 3;