import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import Modal from "react-modal";
import MapComponent from "./MapComponent";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
export default function ProfileCard({profile}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const {name, role, profileImage, briefBio, location} = profile;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "max-content",
      height: "max-content",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      margin: "1rem"
    },
  };

 
    
return (
    <div  className="flex items-center justify-center shadow-sm md:shadow-md xl:shadow-lg w-max mx-auto" >
        <div className="rounded-lg shadow-lg w-3/4 md:w-72 lg:w-64">
            <div className="h-24 bg-slate-500 rounded-t-lg" />
            <img
                alt="User avatar"
                className="rounded-full -mt-12 border-4 border-white mx-auto"
                height="100"
                src={profileImage}
                style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                }}
                width="100"
            />
            <div className="text-center mt-2">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-gray-500">{role}</p>
            </div>
            <div className="flex justify-around my-4 px-4">
                <p className="text-center">
                    {briefBio.length > 45 ? `${briefBio.slice(0, 45)}...` : briefBio}
                </p>
            </div>
            <div className="flex justify-between px-4 py-4 md:py-6 text-sm">
            <Link to={'/profile/' + profile.id} className=" border border-black text-black rounded-lg px-3 py-2 flex items-center justify-center gap-2" onClick={openModal}>
                    <span>Profile</span>
                    <FaRegUser />
                </Link>
                <button className=" bg-slate-700 text-white rounded-lg px-3 py-2 flex items-center justify-center gap-2" onClick={openModal}>
                    <span>Summary</span>
                    <IoLocationSharp />
                </button>
                
            </div>
        </div>

        {/* MAP MODAL  */}
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Profile Location"
        style={customStyles}
      >
        <div className="flex justify-between items-center">
        <h2>{name}&apos;s Location</h2>
        <button onClick={closeModal}><GrClose /></button>
        </div>
        <div>
            <MapComponent location={profile?.location}/>
        </div>
      </Modal>
    </div>
) 
}