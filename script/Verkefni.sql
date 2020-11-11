
CREATE TABLE tblVerkefni{
	ID SERIAL NOT NULL PRIMARY KEY, 
	Verknumer INT NOT NULL,
	Tilefni VARCHAR(250) NOT NULL, 
    Stadur VARCHAR(200) NOT NULL, 
    Dagur VARCHAR(200) NOT NULL, 
    Byrjunartima VARCHAR(200) NOT NULL,
    Endurunartima VARCHAR(200) NOT NULL, 
    Delete_Tilefni BOOLEAN NOT NULL 
};

CREATE TABLE tblTulkur{
	ID SERIAL NOT NULL PRIMARY KEY,
	KT TEXT NOT NULL,
	Nafn VARCHAR(200) NOT NULL,
	Simi TEXT NOT NULL,
	Netfang TEXT NOT NULL,
	Delete_KT BOOLEAN NOT NULL
};

CREATE TABLE tblVidskiptavinur{
	ID SERIAL NOT NULL PRIMARY KEY,
	KT TEXT NOT NULL,
	Nafn VARCHAR(200) NOT NULL,
	Simi TEXT NOT NULL,
	Netfang TEXT NOT NULL,
    Delete_KT BOOLEAN NOT NULL
};

CREATE TABLE tblGreidsla{
	ID SERIAL NOT NULL PRIMARY KEY,
	Tilefni VARCHAR(200) NOT NULL,
	Upphaed TEXT,
	FOREIGN KEY (ID) REFERENCES tblVerkefni(ID),
};

CREATE TABLE tblPanta{
	ID SERIAL NOT NULL PRIMARY KEY,
	KT TEXT NOT NULL,
	Vettvangur TEXT NOT NULL,
	FOREIGN KEY (ID) REFERENCES tblVerkefni(ID),
	FOREIGN KEY (KT) REFERENCES tblVidskiptavinur(KT),
};

CREATE TABLE tblVinna{
	ID SERIAL NOT NULL PRIMARY KEY,
	KT TEXT NOT NULL,
    Vinna INT NOT NULL,
    Maeta INT NOT NULL,
    Fell INT NOT NULL, 
    Vettvangur TEXT NOT NULL,
    FOREIGN KEY (ID) REFERENCES tblVerkefni(ID),
    FOREIGN KEY (KT) REFERENCES tblTulkur(KT),
};