let isVerified = true;
let isLoggedIn = true;
let hasTokenPayment = true;
let isGuestUser =true;

if(isVerified && isLoggedIn && hasTokenPayment){
    console.log('Greeting message to user');
    console.log('Grant access to paid courses.');    
}
else if(isVerified || isGuestUser){
    console.log('Allow free previews');    
}
else{
    console.log('MESSAGE: Please contact admin.');    
}