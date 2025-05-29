# Per the rules defined in .eslintrc.json, I encountered 54 initial linting errors
* 2 of the errors were because a variable 'darkStatus' was declared but never used

* The 3rd error was because of a 'console.log' statement in the 'displayBuildTools'
* function inside 'src/index.ts.


* A 4th error was also because of an unused import for 'tools' inside src/__tests__/index.test.ts

* Finally, the remaining 50 linting issues looked like this: "error Delete `cr`     prettier/prettier
* which is caused by Windows-style line endings (CRLF) in a file where Prettier 
* expects Unix-style line endings (LF).


# How these issues were resolved.
* Initially, these lines of code that failed the lint checks were removed completely, so the src/index.ts
* and src/__tests__/index.test.ts files passed the lint checks. 
* However, just in case you want to see for yourself, those lines were commented out. You can uncomment
* them out if you need to verify what has been mentioned above.


