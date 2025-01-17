import { useLoaderData } from "react-router-dom";


function Github() {
  const data = useLoaderData();
  
  // const[data,setdata]=useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Aakashh-yadav').then(Response=>Response.json()).then(data=>{
  //     setdata(data)
  //   })
  // },[])

  return (
    <div className="text-center m-4 bg-gray-200  p-4 text-3xl">
      Hello {data.name}
      <br />
      Your follower count is {data.followers}
      <br />
      <img
        src={data.avatar_url}
        alt="github_avtar_url"
        width={300}
        className="block mx-auto p-4 mt-3"
      />
      {data.bio}
    </div>
  );
}

export default Github;

export const github_info_loader = async () => {
 return fetch("https://api.github.com/users/Aakashh-yadav").then(res=>res.json());
};