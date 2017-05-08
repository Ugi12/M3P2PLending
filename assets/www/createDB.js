function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS USER');
    tx.executeSql('DROP TABLE IF EXISTS AD');
    tx.executeSql('DROP TABLE IF EXISTS REMEMBERED');
    tx.executeSql('DROP TABLE IF EXISTS BANKACCOUNT');
    tx.executeSql('DROP TABLE IF EXISTS ACCOUNTMOVEMENTS');
	
    tx.executeSql('CREATE TABLE IF NOT EXISTS USER (id unique, firstname, lastname, email, tel, img, password, IBAN, BIC, )');
	tx.executeSql('CREATE TABLE IF NOT EXISTS AD (id unique, status, amount, runningtime, creator_user_id, investor_user_id, discription, investment_date)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS REMEMBERED (id unique, user_id, anzeige_id)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS BANKACCOUNT (id unique, IBAN, BIC, balance)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS ACCOUNTMOVEMENTS (id unique, sender_IBAN, sender_BIC, reciever_IBAN, reciever_BIC, date, time, amount)');


    tx.executeSql('INSERT INTO USER (id, email, password) VALUES (1, "admin", "password")');
    alert("in db function!");
}

function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

function successCB() {
    alert("success!");
}

var database_name = "db_p2p";
var database_version = "1.0";
var database_displayname = "P2P Database";
var database_size = 200000;
var db = window.openDatabase(database_name, database_version, database_displayname, database_size);

db.transaction(populateDB, errorCB, successCB);
db.changeVersion("1.0", "1.1");