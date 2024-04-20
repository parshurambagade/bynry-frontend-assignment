import { FaLocationArrow } from "react-icons/fa";

export default function ProfileCard({profile}) {
    const {name, role, profileImage, briefBio, location} = profile;
return (
    <div className="flex items-center justify-center shadow-sm md:shadow-lg w-max mx-auto">
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
            <div className="px-6 py-4 md:py-6">
                <button className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-4">
                    <span>Summary</span>
                    <FaLocationArrow />
                </button>
            </div>
        </div>
    </div>
)
}