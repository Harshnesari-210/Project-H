

async function projectK(){
    // Create a new div element
    var popup = document.createElement("div");
    
     const user = {
                firstName: "John",
                lastName: "Doe"
            };
     try {
                const response = await fetch('http://localhost:3000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });

                if (response.ok) {

                    const countResponse=await fetch("http://localhost:3000/signupCount",{
                        methode:"GET",
                         headers: {
                    'Content-Type': 'application/json',
                },
                    })

                    if(resonse,ok){
                        const countData=await countResponse.json();
                        const {count}=countData;
                    
                    console.log("User signed up successfully!");
                      // Show the popup after successful signup
                    var popup = document.createElement("div");
                    popup.style.height = "30px";
                    popup.style.width = "200px";
                    popup.style.backgroundColor = "black";
                    popup.style.color = "white";
                    popup.style.position = "fixed";
                    popup.style.top = "10px";
                    popup.style.right = "10px";
                    popup.innerHTML = `${count} poplese are signup last 30 minutes ago`;

                    document.body.appendChild(popup);

                    setTimeout(() => {
                        popup.style.display = "none";
                    }, 5000);
                }
     else {
                    console.error("Signup failed!");
                }
                    else{
                    console.log("Count failed");
                }
            } catch (error) {
                console.error("Error during signup:", error);
            }
};

