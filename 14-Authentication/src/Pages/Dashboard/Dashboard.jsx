import { signOut } from "firebase/auth"
import { auth } from "../../db/firebase"

export default function Dashboard(){

  const handleSignOut = ()=> {
    signOut(auth)
    .then(()=> console.log('Deconnexion'))
    .catch((error)=> console
    .error(error))
  }


  return (
    <section className="w-full h-screen bg-slate-900 flex items-center justify-center flex-col">
       <h1 className="text-center text-slate-50 text-4xl mb-3">Dashboard</h1>
       <button onClick={handleSignOut} className="block bg-slate-900 px-3 py-1.5 text-white my-3 rounded hover:bg-blue-700">Sign Out</button>
    </section>
  )

}