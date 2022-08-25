export const GetGif=async(cate)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VgSMVKVdsIrpgf6MY4vqIc9Ai9IOVKYw&q=${cate}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs;
}