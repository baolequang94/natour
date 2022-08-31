const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 2;
console.log(process.env.UV_THREADPOOL_SIZE);
// process.env.UV_THREADPOOL_SIZE = 1;

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");

  setTimeout(() => {
    console.log("Timer 1 finished");
  }, 0);

  setTimeout(() => {
    console.log("Timer 3 finished");
  }, 3000);

  setImmediate(() => {
    console.log("Immediate 1 finished");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
    console.log(Date.now() - start, "Password encrypted")
  );
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
    console.log(Date.now() - start, "Password encrypted")
  );
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
    console.log(Date.now() - start, "Password encrypted")
  );
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
    console.log(Date.now() - start, "Password encrypted")
  );
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () =>
    console.log(Date.now() - start, "Password encrypted")
  );
});

console.log("Hello from the top-level code");
