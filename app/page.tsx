import UserDashboard from "./components/UserDashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center lg:p-24 p-4">
      <UserDashboard />
    </main>
  );
}
