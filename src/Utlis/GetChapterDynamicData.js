

const GetChapterDynamicData = async (id) => {
    const res = await fetch(`https://sqlite-database.vercel.app/chapterData/${id}`)
    const data = await res.json()
    return data
};

export default GetChapterDynamicData;