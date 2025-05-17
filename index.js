import 'dotenv/config';

async function verify(){
    const response = await fetch(process.env.URL_API);
    const result = await response.json();
    console.log(result);
}

verify();