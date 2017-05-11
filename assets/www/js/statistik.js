$("#test").click(function(){
        alert('statistik.js loaded!');
        // Query the database
        function queryDB(tx) {
            tx.executeSql('SELECT * FROM USER', [], querySuccess, errorCB);
        }

        // Query the success callback
        function querySuccess(tx, results) {
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

        // Error callback function
        function errorCB(err) {
            alert("Error processing SQL: "+err.code);
        }

        // DB Funktion
        //var db = localStorage.db;
        var db = storage.getItem(database);
        db.transaction(queryDB, errorCB, querySuccess);

    });

