

// async function projectK(){
//     // Create a new div element
//     var popup = document.createElement("div");
    
//      const user = {
//                 firstName: "John",
//                 lastName: "Doe"
//             };
//      try {
//                 const response = await fetch('http://localhost:3000/signup', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(user),
//                 });

//                 if (response.ok) {

//                     const countResponse=await fetch("http://localhost:3000/signupCount",{
//                         methode:"GET",
//                          headers: {
//                     'Content-Type': 'application/json',
//                 },
//                     })

//                     if(resonse,ok){
//                         const countData=await countResponse.json();
//                         const {count}=countData;
                    
//                     console.log("User signed up successfully!");
//                       // Show the popup after successful signup
//                     var popup = document.createElement("div");
//                     popup.style.height = "30px";
//                     popup.style.width = "200px";
//                     popup.style.backgroundColor = "black";
//                     popup.style.color = "white";
//                     popup.style.position = "fixed";
//                     popup.style.top = "10px";
//                     popup.style.right = "10px";
//                     popup.innerHTML = `${count} poplese are signup last 30 minutes ago`;

//                     document.body.appendChild(popup);

//                     setTimeout(() => {
//                         popup.style.display = "none";
//                     }, 5000);
//                 }
//      else {
//                     console.error("Signup failed!");
//                 }
//                     else{
//                     console.log("Count failed");
//                 }
//             } catch (error) {
//                 console.error("Error during signup:", error);
//             }
// };


async function projectK() {
    // Create a new div element
    var popup = document.createElement("div");
    
    const user = {
        firstName: "John",
        lastName: "Doe"
    };

    try {
        // Send POST request to signup
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST', // Corrected method name here
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            // Fetch the count of signups in the last 30 minutes
            const countResponse = await fetch("http://localhost:3000/signupCount", {
                method: "GET", // Corrected 'methode' to 'method'
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (countResponse.ok) { // Fixed condition to check countResponse
                const countData = await countResponse.json();
                const { count } = countData; // Assuming your backend sends { count: number }

                console.log("User signed up successfully!");

                // Show the popup after successful signup
                popup.style.height = "30px";
                popup.style.width = "200px";
                popup.style.backgroundColor = "black";
                popup.style.color = "white";
                popup.style.position = "fixed";
                popup.style.top = "10px";
                popup.style.right = "10px";
                popup.innerHTML = `${count} people signed up in the last 30 minutes!`; // Fixed typo

                document.body.appendChild(popup);

                setTimeout(() => {
                    popup.style.display = "none";
                }, 5000);
            } else {
                console.error("Count failed!"); // Fixed error message
            }
        } else {
            console.error("Signup failed!");
        }
    } catch (error) {
        console.error("Error during signup:", error);
    }
}

