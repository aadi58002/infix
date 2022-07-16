pub mod db;

use rocket::*;

#[get("/")]
fn index() -> String {
// fn index(db: &State<db::Database>) -> String {
    // format!("Hello, world! {}", db.handle)
    format!("Hello, world!")
}

#[launch]
fn rocket() -> _ {
    db::Database::new();
    rocket::build()
        //.manage(db::Database::new())
        .mount("/", routes![index])
}
