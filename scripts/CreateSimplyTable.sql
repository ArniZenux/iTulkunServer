CREATE TABLE tblVerkefni(
	ID INTEGER AUTOINCREMENT, 
	Verknumer INTEGER NOT NULL PRIMARY KEY,
	Tilefni VARCHAR(250) NOT NULL, 
    Stadur VARCHAR(200) NOT NULL, 
    Dagur VARCHAR(200) NOT NULL, 
    Byrjunartima VARCHAR(200) NOT NULL,
    Endurunartima VARCHAR(200) NOT NULL
);

INSERT INTO tblVidskiptavinur(Verknumer, Tilefni, Stadur, Dagur, Byrjunartima, Endurunartima) VALUES (0001,"Fundur á Skaginn3X með Árna", "Ármúli 1", "23.02.2020", "14:40", "15:34");

CREATE TABLE tblTulkur(
	ID INTEGER AUTOINCREMENT,
	KT TEXT NOT NULL PRIMARY KEY,
	Nafn VARCHAR(200) NOT NULL,
	Simi TEXT NOT NULL,
	Netfang TEXT NOT NULL
);

INSERT INTO tblTulkur(KT,Nafn,Simi,Netfang) VALUES("1411813359","Árni Ingi Jóhannesson", "8240245", "arnijoha@hi.is");

CREATE TABLE tblVinna(
	ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Vinna INT NOT NULL,
    Maeta INT NOT NULL,
    Fell INT NOT NULL, 
    Vettvangur TEXT NOT NULL,
	Verknumer_FK INTEGER NOT NULL,
	KT_FK TEXT NOT NULL,
    FOREIGN KEY (Verknumer_FK) REFERENCES tblVerkefni(Verknumer),
    FOREIGN KEY (KT_FK) REFERENCES tblTulkur(KT)
);

INSERT INTO tblVinna(Vinna, Maeta, Fell, Vettvangur, Verknumer_FK, KT_FK) VALUES(1,1,0,"Vinnatúlkur", 0001, "1411813359");