// THIS IS NOT USED ANYMORE
// WE ARE USING NOT MYSQL

// HIER DATENSAETZE DIE IHR BRAUCHT ERZEUGEN. SIEHE BEISPIEL USER ADMIN
function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS USER');
    tx.executeSql('DROP TABLE IF EXISTS AD');
    tx.executeSql('DROP TABLE IF EXISTS REMEMBERED');
    tx.executeSql('DROP TABLE IF EXISTS BANKACCOUNT');
    tx.executeSql('DROP TABLE IF EXISTS ACCOUNTMOVEMENTS');
	
    tx.executeSql('CREATE TABLE IF NOT EXISTS USER (id unique , firstname, lastname, email, tel, img, password, IBAN, BIC)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS AD (id unique , status, title, amount, runningtime, creator_user_id, investor_user_id, discription, investment_date)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS REMEMBERED (id unique , user_id, anzeige_id)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS BANKACCOUNT (id unique , IBAN, BIC, balance)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS ACCOUNTMOVEMENTS (id unique , sender_IBAN, sender_BIC, reciever_IBAN, reciever_BIC, date, time, amount)');

    tx.executeSql('INSERT INTO USER (id, firstname, lastname, email, tel, img, password, IBAN, BIC) VALUES ("1", "Admin", "HCI", "admin@gmail.com", "06642356724", "", "admin", "GEORG010101", "")');
}

function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

function successCB() {
    alert("DB_Success!");
}

var database_name = "hcip2p";
var database_version = "1.0";
var database_displayname = "P2P Database";
var database_size = 100;
var db = window.openDatabase(database_name, database_version, database_displayname, database_size);

db.transaction(populateDB, errorCB, successCB);
var storage = window.localStorage;
storage.setItem(database, db);
//localStorage.db = db;
//db.changeVersion("1.0", "1.1");

/*

// ***************HOW TO USE GUIDE*************

// SO HOLT IHR EUCH DIE DB AUS DEM LOKAL STORAGE UM QUERIES BEI ANDEREN SEITEN ZU REALISIEREN
//var db = localStorage.db;

// Query the database
function queryDBforUGI(tx) {
    tx.executeSql('SELECT * FROM USER', [], querySuccessforUGI, errorCB);
}

// Query the success callback
function querySuccessforUGI(tx, results) {
    var len = results.rows.length;
    alert("USER table: " + len + " row(s) found.");
    for (var i=0; i<len; i++){
        alert("Row = " + i + " ID = " + results.rows.item(i).id + " E-Mail =  " + results.rows.item(i).email);
    }
    // this will be true since it was a select statement and so rowsAffected was 0
    if (!results.rowsAffected) {
        alert('No rows affected!');
        return false;
    }
    // for an insert statement, this property will return the ID of the last inserted row
    alert("Last inserted row ID = " + results.insertId);
}

function UgiQuery(){
db.transaction(queryDBforUGI, errorCB, querySuccessforUGI);
}
*/