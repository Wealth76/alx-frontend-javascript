/// <reference path="./crud.d.ts" />

[2;4R[>77;30601;0c]10;rgb:0000/8080/4040]11;rgb:1a1a/1a1a/1a1aimport { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
const UpdatedRow: RowElement = { age: 23, ...row };

CRUD.updateRow(newRowID, UpdatedRow);
CRUD.deleteRow(newRowID);
