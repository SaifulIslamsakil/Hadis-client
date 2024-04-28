

const GetHadithData = async (id) => {
    const res = await fetch(`https://sqlite-database.vercel.app/hadiths/${id}`)
    const data = await res.json()
    return data
};

export default GetHadithData;