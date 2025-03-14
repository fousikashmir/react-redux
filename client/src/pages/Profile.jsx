import { useSelector } from "react-redux"

function Profile() {
  const {currentUser} = useSelector(state=>state.user)
  return (
    <div className="p-3 max-w-lg mx-auto">
    <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
    <form className="flex flex-col gap-4 ">
      <img src={currentUser.profilePicture} alt='profile' className="h-24 w-24 self-center cursor-pointer rounded full object-cover mt-2"/>
      <input default value={currentUser.username} type="text" id="username" placeholder="username" className="bg-slate-100 rounded-lg p-3"/>
      <input default value={currentUser.email} type="email" id="email" placeholder="email" className="bg-slate-100 rounded-lg p-3"/>
      <input type="password" id="password" placeholder="password" className="bg-slate-100 rounded-lg p-3"/>
      <button className="bg-slate-700 text-white p-3 uppercase rounded-lg hover:opacity-95 disabled:opacity-80">Update</button>
    </form>
    <div className="flex justify-between">
      <span className="text-red-500">Delete Account</span>
      <span className="text-red-500">Sign Out</span>
    </div>
    </div>
  )
}

export default Profile
