import NavHeader from "../components/NavHeader";
import Activity from "../components/Activity";

export default function Activities() {
  return (
    <>
      <NavHeader />
      <div className="bg-black-100 h-[100vh]">
        <h2 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">Activities</h2>
        <Activity />
        <Activity />
      </div>
    </>
  );
}
