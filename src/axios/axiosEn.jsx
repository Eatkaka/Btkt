const axios = require('axios').default;

 useEffect(async() => {
        try {
            await axios.get('https://api.realworld.io/api/articles')
            .then((res) =>  console.log(res?.data));
            
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
   
 }, [])
 

    
   export default sendGetRequest();