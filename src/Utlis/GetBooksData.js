

const GetBooksData = async () => {
   const res = await fetch("https://sqlite-database.vercel.app/books")
   const data = res.json()
   return data
};

export default GetBooksData;