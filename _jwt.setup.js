/**
 * #install  jsonweb token
 * jwt.sign(payload,secret,{expiresIN:})
 * token client
 */


/**
 * #How to store token in the client side 
 * 
 * 1. memory --> ok type
 * 2. local storage --> ok type(XSS)
 * 3. Cookies: http only
 */


/**
 * 1. set cookies with http only. for development secure: false
 * 2. cors s
 * //middle ware
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
 * 
 * 
 * 3. client side axios setting
 * in axios set withCredentials: true
 */


/**
 * 1. To send cookies from the client make sure you added withCredential true for the api call using axios
 * 2. use cookie parser as middleware
 */