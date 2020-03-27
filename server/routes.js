// Exports
module.exports = function(app, connection) {
    // Get all guests
    /*
    app.get('/guests', function(req, res) {
        var query = "SELECT A.id as id, A.first_name as first_name, A.last_name as last_name,";
        query += "B.id as rsvp_id, B.rsvp as rsvp FROM guests as A LEFT JOIN rsvps as B ON A.id = B.guest_id";
        connection.query(query, function(err, data) {
            (err) ? res.send(err) : res.json(data);
        });
    });

    // Add a new guest
    app.post('/add_guest', function(req, res) {
        var vars = [req.body.data.first_name, req.body.data.last_name];
        connection.query("INSERT INTO guests(first_name, last_name) VALUES(?,?)", vars, function(err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
        connection.query("SELECT * FROM guests WHERE first_name=? AND last_name=?", vars, function(err, result) {
            (err) ? res.send(err) : res.json(result[0]);
        })
    });

    */
    app.post('/post_paper', function(req, res) {
        const values = [req.body.data.title, req.body.data.authors, req.body.data.publisher, req.body.data.pages, req.body.data.year];
        console.log(values);
        //connection.query("INSERT INTO papers(title, authors, publisher, pages, year) VALUES(?,?,?,?,?)", values, function(err, result) {
        //    (err) ? res.send(err) : res.json({
        //        message: "Paper Added!",
        //        post_type : 1
        //    });
        //});
    });
    /*

    // Add a RSVP
    app.post('/post_rsvp', function(req, res) {
        connection.query("SELECT id FROM guests WHERE first_name=? AND last_name=?", [req.body.data.first_name, req.body.data.last_name], function(err, result) {
            if (err) throw err;
            const guest_id = result[0].id;
            connection.query("SELECT * FROM rsvps WHERE guest_id=?", [guest_id], function(err, result2) {
                if (result2 === undefined || result2.length < 1) {
                    const values = [result[0].id, parseInt(req.body.data.rsvp), req.body.data.phone, req.body.data.email];
                    connection.query("INSERT INTO rsvps(guest_id, rsvp, phone, email) VALUES(?,?,?,?)", values, function(err, result3) {
                        (err) ? res.send(err) : res.json({
                            message : "RSVP created!",
                            post_type : 0
                        })
                    });
                } else {
                    const values = [parseInt(req.body.data.rsvp), req.body.data.phone, req.body.data.email, guest_id];
                    connection.query("UPDATE rsvps SET rsvp=?, phone=?, email=? WHERE guest_id=?", values, function(err, result3) {
                        (err) ? res.send(err) : res.json({
                            message: "RSVP updated!",
                            post_type : 1
                        });
                    });
                }
            })
        });
    })
    */
}