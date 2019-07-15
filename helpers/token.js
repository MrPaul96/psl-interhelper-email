const getToken = function(){

 const random = Math.random().toString(36).substr(2);
 const token = random + random;

 return token;
};

module.exports = getToken;
