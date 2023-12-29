import AdminToolbar from "../../components/AdminToolbar";
import Dishes from "../../components/Dishes/Dishes";

const Admin = () => {
  return (
    <>
      <AdminToolbar />
      <div className="container w-50">
        <h1>Admin panel</h1>
        <div className="dishes">
          <Dishes />
        </div>
      </div>
    </>
  );
};

export default Admin;
