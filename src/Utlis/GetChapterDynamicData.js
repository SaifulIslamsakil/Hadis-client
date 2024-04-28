

const GetChapterDynamicData = async (id) => {
    const res = await fetch(`http://localhost:5000/chapterData/${id}`)
    const data = await res.json()
    return data
};

export default GetChapterDynamicData;