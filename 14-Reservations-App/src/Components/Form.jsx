import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ReservationForm() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  
  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "reservations"), data);
      console.log("Document written with ID: ", docRef.id);
      reset(); 
      toast.success('Rendez-vous réservé avec succès');
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error('Une erreur est survenue lors de la réservation');
    }
  };

  return (
    <div className="max-w-[400px] w-full bg-white p-6 rounded-md shadow-md">
      <h1 className="text-4xl mb-4 font-bold uppercase text-amber-600">Réservation</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label htmlFor="firstName" className="block">Prénom</label>
          <input type="text" id="firstName" {...register('firstName', { required: 'Ce champ est requis' })} className="outline-none form-input mt-1 block w-full border-b border-b-gray-300" />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block">Nom</label>
          <input type="text" id="lastName" {...register('lastName', { required: 'Ce champ est requis' })} className="outline-none form-input mt-1 block w-full border-b border-b-gray-300" />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input type="email" id="email" {...register('email', { required: 'Ce champ est requis', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Adresse email invalide' } })} className="outline-none form-input mt-1 block w-full border-b border-b-gray-300" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block">Téléphone</label>
          <input type="tel" id="phone" {...register('phone', { required: 'Ce champ est requis', pattern: { value: /^\d{10}$/, message: 'Numéro de téléphone invalide' } })} className="outline-none form-input mt-1 block w-full border-b border-b-gray-300" />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block">Date du rendez-vous</label>
          <input type="date" id="date" {...register('date', { required: 'Ce champ est requis' })} className="p-2 rounded-md outline-none form-input mt-1 block w-full border border-gray-300" />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block">Heure du rendez-vous</label>
          <input type="time" id="time" {...register('time', { required: 'Ce champ est requis' })} className="p-2 rounded-md outline-none form-input mt-1 block w-full border border-gray-300" />
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
        </div>
        <div className="mb-4">
          <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">Réserver</button>
        </div>
      </form>

      <ToastContainer />
      
    </div>
  )
}
