import AddTask from "./components/AddTask"
import DisplayTasks from "./components/DisplayTasks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="text-4xl font-bold text-center">
        Bienvenido a tu lista de tareas
      </h1>

      <p className="text-lg text-center">
        Añade tus tareas y empieza a trabajar
      </p>

      <AddTask />
      <DisplayTasks />

      
    </main>
  );
}
