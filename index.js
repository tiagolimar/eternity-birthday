import 'dotenv/config';

async function verify(){
    const response = await fetch(process.env.URL_API);
    const result = await response.json();

    if (isArray(result) && result.length === 0) {
        console.log('Parece que não há aniversariantes hoje');
    } else {
        console.log('Aniversariantes do dia:', result.join(', '));
    }
}

verify();