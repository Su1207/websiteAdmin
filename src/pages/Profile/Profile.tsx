import { get, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../firebase";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useAuth } from "../../components/Auth-context";

interface User {
  ID: string;
  PASSWORD: string;
  URL: string;
}

const Profile = () => {
  const [admin, setAdmin] = useState<User>({
    ID: "",
    PASSWORD: "",
    URL: "",
  });

  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAdmin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const adminref = ref(database, "ADMIN/AUTH");

    if (admin) {
      await set(adminref, admin);
      toast.success("Credentials changed successfully!");
      logout();
    }
  };

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        setLoading(true);
        const adminref = ref(database, "ADMIN/AUTH");

        const adminSnapshot = await get(adminref);

        const admin = adminSnapshot.val() as User;

        setAdmin(admin);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAdmin();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      {loading ? (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <div className="w-[100%] bg-white  border p-4 xs:p-6 sm:p-8 shadow-lg rounded-md">
          <div className="font-bold text-[1rem] xs:text-[1.5rem] text-[#6c757d] mb-4">
            Admin Credentials
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="">
                <label className="block text-xs  font-medium text-gray-500">
                  Username<span className=" text-[#F05387]">*</span>
                </label>
                <input
                  type="text"
                  name="ID"
                  value={admin?.ID}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 flex-1 w-full rounded-sm border border-gray-300 shadow-sm focus:outline-none outline-none focus:ring-offset-0 text-xs"
                />
              </div>
              <div className="">
                <label className="block text-xs  font-medium text-gray-500">
                  Password<span className=" text-[#F05387]">*</span>
                </label>
                <input
                  type="text"
                  name="PASSWORD"
                  value={admin?.PASSWORD}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 flex-1 w-full rounded-sm border border-gray-300 shadow-sm focus:outline-none text-xs"
                />
              </div>

              <div className="">
                <label className="block text-xs  font-medium text-gray-500">
                  URL<span className=" text-[#F05387]"></span>
                </label>
                <input
                  type="text"
                  name="URL"
                  value={admin?.URL}
                  onChange={handleChange}
                  className="mt-1 p-2 flex-1 w-full rounded-sm border border-gray-300 shadow-sm focus:outline-none text-xs"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs font-medium rounded-sm text-white bg-[#FAA912] hover:bg-black focus:outline-none transition-all duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
