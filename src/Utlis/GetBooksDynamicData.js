
const GetBooksDynamicData = async (id) => {
    const res = await fetch(`https://sqlite-database.vercel.app/book/${id}`)
    const data = await res.json()
    return data
   
};

export default GetBooksDynamicData;