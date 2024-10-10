"use client";
import AdminNavbar from "../components/Admin/AdminNavBar";
import AdminListOfUsers from "../components/Admin/AdminListofUsers";

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-row">
      <AdminNavbar />
      <div className="flex-1 flex flex-col mt-8 ml-56">
        <AdminListOfUsers />
      </div>
    </div>
  );
}
