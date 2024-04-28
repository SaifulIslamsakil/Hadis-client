

const GetHadithData = async (id) => {
    
    const res = await fetch(`http://localhost:5000/hadiths/${id}`)
    const data = await res.json()
    console.log(data)
    return data
};

export default GetHadithData;