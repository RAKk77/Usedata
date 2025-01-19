import { useEffect, useState } from "react";

const Getdata = () => {
  const url = "https://api.github.com/users";
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const information = async () => {
      try {
        const result = await fetch(url);
        const getUser = await result.json();
        setUser(getUser);
        console.log(getUser);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    information();
  }, []);
  if (isLoading) {
    return (
      <>
        <div class="flex-col gap-4 w-full flex items-center justify-center h-screen ">
          <div class="w-[8rem] h-[8rem] border-8 border-transparent text-blue-900 text-9xl animate-spin flex items-center justify-center border-t-blue-900 rounded-full">
            <div class="w-[5rem] h-[5rem] border-8 border-transparent text-red-900 text-9xl animate-spin flex items-center justify-center border-t-black rounded-full">
              <div class="w-[10rem] h-[5rem] border-8 border-transparent text-red-900 text-9xl animate-spin flex items-center justify-center border-t-orange-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="w-[85%] m-auto grid grid-cols-2  gap-5 font-mono md:grid-cols-3 ">
      {user.map(({ id, avatar_url, html_url, login }) => {
        return (
          <article
            key={id}
            className=" bg-slate-100 rounded-3xl flex flex-col items-center py-[40px]"
          >
            <img
              src={avatar_url}
              alt="profile"
              className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full hover:scale-105 transition-all"
            />
            <h3 className="px-2 text-[1.5rem] mt-[9px] bg-slate-200   ">
              {login}
            </h3>
            <a href={html_url} className="active:scale-x-150 transition-all">
              See Profile
            </a>
            <div className="w-[190px] h-[1px] bg-red-700 rounded-3xl "></div>
          </article>
        );
      })}
    </div>
  );
};

export default Getdata;
