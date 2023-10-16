-- CreateTable
CREATE TABLE "room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "chat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "roomid" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL
);
