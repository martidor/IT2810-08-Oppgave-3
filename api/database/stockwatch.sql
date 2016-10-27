-- Create tables if they not exist
CREATE TABLE IF NOT EXISTS "UserStats" (
	`StatId`	INTEGER NOT NULL UNIQUE,
	`UserId`	INTEGER NOT NULL,
	`Timestamp`	INTEGER,
	`Invested`	DECIMAL(10,5),
	`Value`	DECIMAL(10,5),
	PRIMARY KEY(`StatId`),
	FOREIGN KEY(`UserId`) REFERENCES `User`(`UserId`)
);

CREATE TABLE IF NOT EXISTS `User` (
	`UserId`	INTEGER NOT NULL UNIQUE,
	`Username`	TEXT,
	`FacebookId`	INTEGER,
	`PortfolioVisibility`	INTEGER DEFAULT 1,
	PRIMARY KEY(`UserId`)
);

CREATE TABLE IF NOT EXISTS "Equity" (
	`EquityId`	INTEGER NOT NULL UNIQUE,
	`UserId`	INTEGER NOT NULL,
	`ExternalEquityId`	TEXT NOT NULL,
	`TotalPrice`	DECIMAL(10,5),
	`TransactionTimestamp`	INTEGER,
	`Stockholding`	DECIMAL(10,5),
	`IsSold`	INTEGER DEFAULT 0,
	PRIMARY KEY(`EquityId`),
	FOREIGN KEY(`UserId`) REFERENCES `User`(`UserId`)
);

-- Testdata
-- INSERT INTO User('Username', 'FacebookId') VALUES ('Eirik', 123123124123);
-- INSERT INTO User('Username', 'FacebookId') VALUES ('CornyDick', 841231824);

-- INSERT INTO Equity('UserId', 'ExternalEquityId', 'TotalPrice', 'TransactionTimestamp', 'Stockholding') VALUES (1, 'HFISK_OSE', 2000, 1477578600000, 123.93);