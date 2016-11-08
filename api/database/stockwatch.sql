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
	`PortfolioVisibility`	INTEGER DEFAULT 1,
	`FacebookId`	TEXT,
	`Token`	TEXT,
	`Name`	TEXT,
	`Email`	TEXT,
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
