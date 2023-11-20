CREATE TABLE currenttasks
    (task_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    task_description VARCHAR(60)NOT NULL,
    due_date DATE NOT NULL,
    PRIMARY KEY (task_id)
);


CREATE TABLE completedtasks
    (task_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    task_description VARCHAR(60)NOT NULL,
    date_completed DATE NOT NULL,
    PRIMARY KEY (task_id)
);
