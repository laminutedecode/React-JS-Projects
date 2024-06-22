import Image from '../assets/illustration.svg'
const Not = () => {
    return (
      <div className="flex h-[80vh] items-center justify-center gap-4">
        <div>
          <img width="250" src={Image} />
        <h3 className="text-2xl font-semibold text-dark text-center my-2"> Aucun contact</h3>
        </div>
      </div>
    );
  };
  
  export default Not;