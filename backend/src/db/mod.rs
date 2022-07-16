use diesel::pg::PgConnection;
use diesel::prelude::*;
use std::cell::RefCell;
use std::rc::Rc;

pub struct Database {
    pub handle: RefCell<PgConnection>,
}

impl Database {
    pub fn new() -> Self {
        let conn = PgConnection::establish("postgresql://postgres:mysecretpassword@localhost:5432")
            .expect(&format!("Error connecting to postgres"));

        Self {
            handle: RefCell::new(conn),
        }
    }
}
