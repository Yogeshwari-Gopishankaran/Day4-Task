var resume={
    "name": "Yogeshwari G",
    "age": "26",
    "phoneNumber": " 9865197640",
    "emailId": "yoga@gmail.com",
    "languages": ["English", "Tamil","Hindi"],
     "Qualification":{
                      "CollegeName":"Jeppiaar SRR Engineering College",
                      "degree":"BE(Computer Science)",
                      "Percentage":"68",
                      "passedOut":"2019"
     },
     "softwareSkills": ["C,C++,JavaScript,DataSctuctures,HTML,CSS,Bootstap"],
     "experence": {
                  "CompanyName":"Wipro(Client Location)",
                   "Role":["technical service desk","Asset Management"]
                  },
      "address": {
                      "addressLine1":"T.S.R Nagar",
                      "addressLine2":"TVT Chennai-19"
                    },
     "nationality":"Indian"             
  }
  //using forIn 

  for(let x in resume){
    console.log(x,resume[x]);
    }

 //using forOf
 
for(const [key,value] of Object.entries(resume)){
      if(`${key}`=="qualification"){
          console.log("Qualification :");
         for(const [key,value] of Object.entries(resume.qualification)){
         console.log(`${key}:${value}`);
         } 
      }
      else if(`${key}`=="experence"){
            console.log("Experence: ");
            for(const [key,value] of Object.entries(resume.experence)){
            console.log(`${key}:${value}`); 
            }}
      else if(`${key}`=="address"){
            console.log("Address: ");
            for(const [key,value] of Object.entries(resume.address)){
            console.log(`${key}:${value}`); 
            }}else{
                console.log(`${key}:${value}`);
            
            }
}
    // Using Foreach
    Object.entries(resume).forEach(([key, value]) => {
        if(`${key}`=="qualification"){
            console.log("Qualification: ")
            Object.entries(resume.qualification).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
                   });
        }else if(`${key}`=="experence"){
                console.log("Experence: ")
                Object.entries(resume.experence).forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
         });
            
        }else if(`${key}`=="address"){
                console.log("Address: ")
                Object.entries(resume.address).forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
         });    
        }else{
            console.log(`${key}: ${value}`);
        }
        
});


   
                