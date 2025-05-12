# Basics of JSON Web Token (JWT)
* What is JWT
  
  JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

# Curious about JSON structure?
 JSON Web Tokens consist of three parts separated by dots (.) which are
 * Header
 * Payload
 * Signature
   
Each of these structure makes up the JWT code which looks like ``` xxxx.yyyy.zzzz ``` each letter corresponds to the structure aforementioned

# Here how you can import JWT module
``` npm i jsonwebtoken ``` in your terminal

``` const jwt = require('jsonwebtoken') ``` in your project 

# About sources
* I did not work on frontend which is `Public` folder in my project.
* Learn more about JWT here :
  https://jwt.io/introduction
