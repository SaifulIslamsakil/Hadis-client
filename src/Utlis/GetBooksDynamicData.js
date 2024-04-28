
const GetBooksDynamicData = async (id) => {
    const res = await fetch(`http://localhost:5000/book/${id}`)
    const data = await res.json()
    return data
   
};

export default GetBooksDynamicData;