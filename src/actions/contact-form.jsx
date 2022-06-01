const baseURL = import.meta.env.VITE_URL;

console.log(`Backend en ${baseURL}`);

export const sendData = async (value) => {

    const resp = await fetch( baseURL, {
        method: "POST",
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify(value) 
    });

    return await resp.json();   
}
