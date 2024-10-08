import { useLoadUserQuery } from "@/redux-toolkit/features/api/apiSlice";
import { useUpdateAvatarMutation } from "@/redux-toolkit/features/user/userApi";
import { styles } from "@/styles/style";
import { Yesteryear } from "next/font/google";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
interface Props {
  avatar: string | null;
  user: any;
}
const ProfileInfo: FC<Props> = ({ avatar, user }) => {
  const [name, setName] = useState(user && user.name);
  const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
  const [loadUser, setLoadUser] = useState(false);
  const {} = useLoadUserQuery(undefined, {
    skip: loadUser ? false : true,
  });

  const imageHandler = (e: any) => {
 
    
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        const avatar = fileReader.result;
      
        
        updateAvatar(
          avatar,
        );
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (isSuccess) {
      setLoadUser(true);
    } else {
      console.log(error);
    }
  }, [isSuccess, error]);

  const handleSubmit = (e: any) => {
    console.log("submit");
  };
  return (
    <>
      <div className="w-full flex justify-center">
        {/* image Avatar */}
        <div className="relative">
          <Image
            src={
              user.avatar || avatar
                ? user?.avatar?.url || avatar
                : "/placeholder.jpg" || "/placeholder.jpg"
            }
            className="rounded-full border-[#37a39a] border-[3px] cursor-pointer h-[120px] w-[120px] "
            width={200}
            height={200}
            alt={""}
          />

          <input
            type="file"
            name=""
            id="avatar"
            className="hidden"
            onChange={imageHandler}
            accept="image/png,image/jpg,image/jpeg,image/webp"
          />
          <label htmlFor="avatar">
            <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
              <AiOutlineCamera size={20} className="z-1" />
            </div>
          </label>
        </div>
      </div>
      <br />
      <br />
      {/* fullname */}
      <div className="w-full p-6 800px:pl-10">
        <form onClick={handleSubmit}>
          <div className="800px:w-[50%] m-auto block pb-4">
            <div className="w-[100%]">
              <label htmlFor="block pb-2">Full Name</label>
              <input
                type="text"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                value={name}
                onChange={(e) => setName(e.target.name)}
              />
            </div>
            {/* email */}
            <div className="w-[100%] pt-4">
              <label className="block pb-1" htmlFor="Email Address">
                Email Address
              </label>
              <input
                type="text"
                required
                className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                readOnly
                value={user?.email}
              />
            </div>
            <input
              type="submit"
              value="Update"
              required

              className={`w-full 800px:W-[250px] h-[50px] mt-6 border border-[#37a39a] dark:text-[#fff] text-black rounded-[3px] `}
            />
          </div>
        </form>
        <br />
      </div>
      
    </>
  );
};

export default ProfileInfo;
