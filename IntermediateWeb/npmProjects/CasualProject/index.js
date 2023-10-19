// Import "casual" package
const casual = require("casual");

// Display the below statement with random name, country, phone number, address, and month.
console.log(`Hello there ${casual.name}!
How was your trip to ${casual.country}?
I sure hope you had a wonderful time.
Is your phone number still ${casual.phone}?
I will try to give you a call sometime. By the way, I want to send you a fresh loaf of bread at your address of:

${casual.address}
        
Well, I will see you soon. I will be visiting sometime before ${casual.month_name}.
Untile then, farewell!`);
